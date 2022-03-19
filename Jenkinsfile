// pipeline {
//   agent any
//   stages {
//     stage("install") {
//       steps {
//         sh 'npm install'
//       }
//     }
//     stage("build") {
//       steps {
//         sh 'npm run build'
//       }
//     }
//     stage("test") {
//       steps {
//         sh 'npm run test'
//       }
//     }
//   }
// }

pipeline {

agent any

  environment {
    PATH = "/home/jenkins/.nvm/versions/node/v14.17.4/bin:${env.PATH}"
  }

  stages {
    stage('Test npm') {
      steps {
        sh """
          echo $PATH
          npm --version
        """
      }
    }
  }
}
