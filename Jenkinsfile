pipeline {
  agent any
  stages {
    stage("install") {
      steps {
         echo 'Installing'
      }
    }
    stage("build") {
      steps {
         echo 'Building'
      }
    }
    stage("test") {
      steps {
         script {
                    if (1==1) {
                        echo 'I only execute on the master branch'
                    } else {
                        echo 'I execute elsewhere'
                    }
                }
      }
    }
  }
}
