pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'pip install flask'
            }
        }

        stage('Run Application') {
            steps {
                bat 'start /B python app.py'
            }
        }
    }
}
