pipeline {
  agent any
  stages {
    stage("install") {
      steps {
         echo 'Installing'
        //  nodejs('node14') {
        //    sh 'yarn'
        //  }
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
                    if (1==2) {
                        echo 'I only execute on the master branch'
                    } else {
                        echo 'I execute elsewhere'
                    }
                }
      }
    }
  }
}
