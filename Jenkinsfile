pipeline{
    agent any
    environment {
        NGNIX_FOLDER = '/var/www/vhosts/frontend/dist'
    }
    stages{
        stage('Package') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to Ngnix') {
            steps {
                sh '''
                    rm -rf $NGNIX_FOLDER/*
                    cp -r dist/* $NGNIX_FOLDER/ 
                '''
            }
        }
    }
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}