pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Deploy') {
    steps {
        bat 'python -m http.server 8000'
    }
}
    }
}
