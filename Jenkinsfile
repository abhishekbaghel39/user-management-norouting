pipeline {
    agent any
    toos {
        nodejs: '21.7.1'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}