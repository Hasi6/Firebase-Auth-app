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

  stages {
    stage('Test npm') {
      steps {
        sh "docker build -t test:123 ."
      }
    }
  }
}
