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

 agent {
    docker {
      image 'node:lts-buster-slim'
      args '-p 8989:8989'
    }
  }

  stages {
    stage('Test npm') {
      steps {
        sh "docker build -t test:123 ."
      }
    }
  }
}
