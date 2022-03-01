pipeline {
    environment {
        registry ="project2team4/react"
        dockerHubCreds = 'Docker_Credential'
        dockerImage = ''
        deploymentFile = 'Kubernetes/deployment.yml'
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
  
    stage('Deploy into Kubernetes') {
        steps {
              sh 'echo "Starting Deployment to Kubernetes"'
              sh 'sed -i "s/%TAG%/$BUILD_NUMBER/g" ./Kubernetes/deployment.yml'
              sh 'cat ./Kubernetes/deployment.yml'
                step([$class: 'KubernetesEngineBuilder',
                      projectId: 'united-button-342103'
                      clusterName: 'pogi-firstcluster',
                      zone: 'us-central1-a',
                      manifestPattern: 'Kubernetes/',
                      credentialsId: 'united-button-342103',
                      verifyDeployments: true
                     ])
          }
        }

  }
}