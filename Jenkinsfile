pipeline {
    agent any

    tools {
        nodejs "node"
    }

    parameters {
        string(name: 'container_name', defaultValue:'pagina_web', description: 'Nombre del contenedor de docker')
        string(name: 'image_name', defaultValue: 'pagina_img', description: 'Nombre de la imagen docker.')
        string(name: 'tag_name', defaultValue: 'lts', description: 'Tag de la iamgen de la pagina.')
        string(name: 'container_port', defaultValue: '80', description: 'Puerto que usa el contenedor')
    }

    stages {
        stage('install'){
            steps {
                git branch: 'main', url: 'https://github.com/alejandrolima/pratcica2Modulo6.git'
                sh 'npm install'
            }
        }
    }
}