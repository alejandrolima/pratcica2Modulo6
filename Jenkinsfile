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
                
            }
        }

        stage('test'){
            steps {
                sh 'echo "Esto es un test positivo"'
            }
        }

        stage('deploy'){
            steps {                
                sh 'npm i -g json-server'
                sh 'json-server --watch producto.json --port 5000'
                sh 'npm run serve -- --port 3000'
            }
        }
    }
}