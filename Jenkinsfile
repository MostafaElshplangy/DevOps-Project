pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/MostafaElshplangy/DevOps-Project'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t ahmedsalahelsayed/hello-world-devops:$BUILD_NUMBER .'
            }
        }

        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'devopstask', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push ahmedsalahelsayed/hello-world-devops:$BUILD_NUMBER'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'envsubst < deployment-service-hpa.yaml | kubectl apply -f -'
            }
        }     
    }
}
