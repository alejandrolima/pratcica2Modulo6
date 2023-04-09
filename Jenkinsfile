pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    parameters {
        string(name: 'container_name', defaultValue: 'pagina_web', description: 'Nombre del contenedor de docker.')
        string(name: 'image_name', defaultValue: 'pagina_img', description: 'Nombre de la image docker.')
        string(name: 'tag_image', defaultValue: 'lts', description: 'Tag de la imagen de la pagina.')
        string(name: 'container_port', defaultValue: '80', description: 'Puerto que usa el contenedor')
    }

    stages {
        stage('install'){
            steps {
                git branch: 'main', url: 'https://github.com/alejandrolima/pratcica2Modulo6.git'

                sh 'npm install'
                sh 'npm run serve -- --port 3000'
            }
        }

        stage('test'){
            steps {
                sh 'curl 192.168.173.77:80'
            }
        }

        stage('deploy'){
            steps {                
                sh 'json-server --watch producto.json --port 5000'

                sh 'npm run serve -- --port 3001'
            }
        }
    }
}