pipeline {
    agent none

    stages{   
        stage('Clone Backend - DEV ') {
            agent { label 'debian' }
            steps {
                git branch: 'main', url: 'https://github.com/alejandrolima/pratcica2Modulo6.git'
                echo 'Cloned Backend..'
            }
        }
        stage('Build Backend - DEV') {
            agent { label 'debian' }
            steps {
                sh 'docker-compose up -d'
                echo 'Build backend - DEV'
            }
        }
        stage('Clone Frontend - DEV') {
            agent { label 'debian' }
            steps {
                git branch: 'main', url: 'https://github.com/alejandrolima/pratcica2Modulo6.git'
                echo 'Cloned Frontend - DEV'
            }
        }
        stage('Build Frontend - DEV') {
            agent {label 'debian'}
            steps {
                sh 'docker-compose up -d dev'
                echo 'Build frontend - DEV'
            }
        }
		
		
		 stage('Clone Frontend - QA') {
            agent { label 'debian' }
            steps {
                git branch: 'main', url: 'https://github.com/alejandrolima/pratcica2Modulo6.git'
                echo 'Cloned Frontend - QA'
            }
        }
        stage("Run Test - QA"){
            agent { label 'debian' }
            steps {
                sh 'docker-compose up -d test'
                echo 'Build tests ..'
            }
        }
		
		
        stage('Clone Backend - PROD') {
            agent { label 'debian' }
            steps {
                git branch: 'main', url: 'https://github.com/alejandrolima/pratcica2Modulo6.git'
                echo 'Cloned Backend - PROD'
            }
        }
        stage('Build Backend - PROD') {
            agent { label 'debian' }
            steps {
                sh 'docker-compose up -d'
                echo 'Build backend - PROD'
            }
        }
        stage('Clone Frontend - PROD') {
            agent { label 'debian' }
            steps {
                git branch: 'main', url: 'https://github.com/alejandrolima/pratcica2Modulo6.git'
                echo 'Cloned Frontend - PROD'
            }
        }
        stage('Build FrontEnd - PROD') {
            agent {label 'debian'}
            steps {
                sh 'docker-compose up -d vue-app'
                echo 'Build FrontEnd - PROD'
            }
        }
 
    }
}