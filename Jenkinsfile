pipeline {
  agent any

// options {
//         office365ConnectorWebhooks([
//             [name: "Office 365", url: "https://klnaclk.webhook.office.com/webhookb2/2064c4a0-2a6c-4ac3-9acb-abc433fe1805@aa232db2-7a78-4414-a529-33db9124cba7/IncomingWebhook/e8cfff770ccf479eb8393b1b55dda00d/ff3ae7e9-1908-44ec-80bb-d9fd798d2952", notifyBackToNormal: true, notifyFailure: true, notifyRepeatedFailure: true, notifySuccess: true, notifyAborted: true]
//         ])
//     }

  stages {
    stage("install") {
      steps {
         echo 'Installing'
          // office365ConnectorSend webhookUrl: "https://klnaclk.webhook.office.com/webhookb2/2064c4a0-2a6c-4ac3-9acb-abc433fe1805@aa232db2-7a78-4414-a529-33db9124cba7/IncomingWebhook/e8cfff770ccf479eb8393b1b55dda00d/ff3ae7e9-1908-44ec-80bb-d9fd798d2952",
          //       message: 'Hello Team Build Was Success',
          //       status: 'Deploy Success'
        //  nodejs('node14') {
        //    sh 'yarn'
        //  }
        echo 'Cloning'
        sh 'cd ~ && cd projects && git clone https://github.com/Hasi6/Firebase-Auth-app.git'
        sh 'cd Firebase-Auth-app'
        echo 'Clone Success'
        echo 'cd Firebase-Auth-app && checkout to testing'
        // sh 'git checkout test'
      }
    }
    stage("build") {
      steps {
         echo 'Building'
          script {
            def readContent = readFile './Firebase-Auth-app/README.md'
            writeFile file: './Firebase-Auth-app/README.md', text: readContent+"\nversion := 1.0.10"
            def readContent2 = readFile './Firebase-Auth-app/README.md'
            println(readContent2)
               }


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
