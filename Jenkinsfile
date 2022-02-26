pipeline {
    environment {
        registry ="project2team4/react"
        dockerHubCreds = 'Docker_Credential'
        dockerImage = ''
    }
  agent any
  stages {
    stage('Test and Update package Json') {
      steps {
        sh 'echo "This is React pipleine"'
        sh 'npm install'
      }
    }
     stage('Build React Docker Image') {
        when {
            branch 'main'
        }
      steps {
        sh 'echo "Building Docker Images"'
        script {
          dockerImage = docker.build "$registry"
        }
        
      }
    }
    stage('Delivering React Docker Image') {
        when {
          branch 'main'
        }
      steps {
        sh 'echo "Delivering React Image"'
        script {
          docker.withRegistry('', dockerHubCreds) {
              dockerImage.push("$currentBuild.number")
              dockerImage.push("latest")

          }
        }
        
      }
    }
    stage('Docker Image Delivered') {
        when {
          branch 'main'
        }
      steps {
        sh 'echo "React Image Delivered To DockerHub"'
        
        
      }
    }

  }
}