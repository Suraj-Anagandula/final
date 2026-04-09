pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t register .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop register || true'
                sh 'docker rm register || true'
                sh 'docker run -d -p 3000:3000 --name register register'
            }
        }
    }
}
