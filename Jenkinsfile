pipeline {
  agent any

options {
        office365ConnectorWebhooks([
            [name: "Office 365", url: "https://klnaclk.webhook.office.com/webhookb2/2064c4a0-2a6c-4ac3-9acb-abc433fe1805@aa232db2-7a78-4414-a529-33db9124cba7/IncomingWebhook/e8cfff770ccf479eb8393b1b55dda00d/ff3ae7e9-1908-44ec-80bb-d9fd798d2952", notifyBackToNormal: true, notifyFailure: true, notifyRepeatedFailure: true, notifySuccess: true, notifyAborted: true]
        ])
    }

  stages {
    stage("install") {
      steps {
         echo 'Installing'
          office365ConnectorSend webhookUrl: "https://klnaclk.webhook.office.com/webhookb2/2064c4a0-2a6c-4ac3-9acb-abc433fe1805@aa232db2-7a78-4414-a529-33db9124cba7/IncomingWebhook/e8cfff770ccf479eb8393b1b55dda00d/ff3ae7e9-1908-44ec-80bb-d9fd798d2952",
                message: 'Hello Team Build Was Success',
                status: 'Deploy Success'
        //  nodejs('node14') {
        //    sh 'yarn'
        //  }
        sh 'rm -rf Firebase-Auth-app'
        echo 'Cloning'
        sh 'git clone https://github.com/Hasi6/Firebase-Auth-app.git'
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

                   writeFile(file: './Firebase-Auth-app/README.md', text: '---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ui-admin
  namespace: development
spec:
  selector:
    matchLabels:
      app: ui-admin
  replicas: 1
  template:
    metadata:
      labels:
        app: ui-admin
    spec:
      imagePullSecrets:
        - name: regcred
      containers:
        - name: ui-admin
          image: ${file(./image.json):version}
          resources:
            requests:
              cpu: 50m
              memory: 100Mi
            limits:
              cpu: 100m
              memory: 150Mi
          ports:
            - containerPort: 80
      #     envFrom:
      #       - configMapRef:
      #           name: ui-admin-config
      #       - secretRef:
      #           name: ui-admin-secret
      #     volumeMounts:
      #       - name: ui-admin-env
      #         mountPath: /usr/share/nginx/html/config
      #       - name: ui-admin-secrets
      #         mountPath: /usr/share/nginx/html/secret
      # volumes:
      #   - name: ui-admin-env
      #     configMap:
      #       name: ui-admin-config
      #   - name: ui-admin-secrets
      #     secret:
      #       secretName: ui-admin-secret
')
                   sh 'cd Firebase-Auth-app && git add .'
                   sh "git commit -m 'updated from jenkins'"
                   sh 'git push'
               }


      }
    }
    stage("test") {
      def data = readFile(file: './Firebase-Auth-app/README.md')
      println(data)
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
