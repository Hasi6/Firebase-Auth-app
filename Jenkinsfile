def skipStage = false

pipeline {

    agent any

    parameters {
        choice(name: 'SERVICE', choices: ['devices', 'filestore', 'notifications', 'profile', 'refdata', 'website', 'ui-admin', 'ui-user'], description: 'Select Service')
        choice(name: 'ENVIRONMENT', choices: ['develop', 'testing', 'preprod', 'main'], description: 'Select Environment')
        string(name: 'VERSION', defaultValue: 'major.minor.patch', description: 'Enter Version')
    }
    environment {
        DOCKER_TOKEN = credentials('DOCKER_TOKEN')
    }
    stages {
        stage ('Git Clone'){
            steps {
                git branch: '${ENVIRONMENT}', credentialsId: 'Zapmii_Test_Environment_Jenkins', url: 'https://github.com/zapmii-uk/zapmii-${SERVICE}/'
            }
        }
        stage('Initialize') {
            steps {
                script {
                    def dockerHome = tool 'docker'
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                }
                sh 'docker --version'
                sh 'whoami'
            }
        }
        // stage('Analyzing Service') {
        //     when {
        //         anyOf {
        //             environment name: 'SERVICE', value: ['ui-admin', 'ui-user', 'website']
        //             branch 'develop'
        //         }
        //     }
        //     steps {
        //          script {
        //             if (params.SERVICE == 'ui-admin') {
        //                 echo 'You have selected ui-admin. Currently under construction'
        //                 return
        //             } else if (params.SERVICE == 'ui-user'){
        //                 echo 'You have selected ui-user. Currently under construction'
        //                 return
        //             } else if (params.SERVICE == 'website'){
        //                 echo 'You have selected website. Currently under construction'
        //                 return
        //             }
        //         }
        //     }

        // }
            // stage ('Service Analysis') {
            //     when {

            //         expression { params.SERVICE == 'ui-admin' }
            //     }
            //     steps {
            //         echo "You have selected ui-admin. Currently under construction"
            //     }
            //     when {

            //         expression { params.SERVICE == 'ui-user' }
            //     }
            //     steps {
            //         echo "You have selected ui-user. Currently under construction"
            //     }
            //     when {

            //         expression { params.SERVICE == 'website' }
            //     }
            //     steps {
            //         echo "You have selected website. Currently under construction"
            //     }
            // }
        stage('Building Image') {
            // when {
            //     anyOf {
            //         environment name: 'SERVICE', value: ['devices', 'filestore', 'notifications', 'profile', 'refdata']
            //     }
            // }
            steps {
                sh 'docker build -t repo.zapmii.co.uk/zapmii-${SERVICE}-${ENVIRONMENT}:${VERSION} .'
            }
        }
        stage('Create Container') {

            steps {
                sh 'docker run -d $(docker images repo.zapmii.co.uk/zapmii-${SERVICE}-${ENVIRONMENT}:${VERSION} -q)'
            }
        }
        stage('Committing & Tagging') {
            // when {
            //     anyOf {
            //         environment name: 'SERVICE', value: ['devices', 'filestore', 'notifications', 'profile', 'refdata']
            //     }
            // }
            steps {
                sh 'docker stop $(docker ps -lq)'
                sh 'docker commit $(docker ps -lq) repo.zapmii.co.uk/zapmii-${SERVICE}-${ENVIRONMENT}'
                sh 'docker tag repo.zapmii.co.uk/zapmii-${SERVICE}-${ENVIRONMENT} repo.zapmii.co.uk/zapmii-${SERVICE}-${ENVIRONMENT}:${VERSION}'
            }
        }
        stage('Pushing Container') {
            // when {
            //     anyOf {
            //         environment name: 'SERVICE', value: ['devices', 'filestore', 'notifications', 'profile', 'refdata']
            //     }
            // }
            steps {
                sh 'docker login repo.zapmii.co.uk --username developer --password ${DOCKER_TOKEN}'
                sh 'docker push repo.zapmii.co.uk/zapmii-${SERVICE}-${ENVIRONMENT}:${VERSION}'
            }
        }
        stage('Cleaning Up') {
            // when {
            //     anyOf {
            //         environment name: 'SERVICE', value: ['devices', 'filestore', 'notifications', 'profile', 'refdata']
            //     }
            // }
            steps {
                sh 'docker rm $(docker ps -lq)'
                sh 'docker rmi -f $(docker images repo.zapmii.co.uk/zapmii-${SERVICE}-${ENVIRONMENT}:${VERSION} -q)'
            }
        }
        stage('Success') {
            steps {
                echo 'Build Successful!'
            }
        }
    }
}
