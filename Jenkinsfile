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
    stage('Wait for approval to Deploy to Production') {
        when {
            branch 'main'
        }
        steps {
            script {
                try {
                    timeout(time: 1, unit: 'MINUTES') {
                        approved = input message: 'Deploy to production?', ok: 'Continue',
                                           parameters: [choice(name: 'approved', choices: 'Yes\nNo', description: 'Deploy build to production')]
                        if(approved != 'Yes') {
                            error('Build did not pass approval')
                        }
                    }
                } catch(error) {
                    error('Build failed because timeout was exceeded')
                }
            }
        }
    }
    
  
    stage('Deploy into Kubernetes') {
        steps {
              sh 'echo "Starting Deployment to Kubernetes"'
              sh 'sed -i "s/%TAG%/$BUILD_NUMBER/g" ./Kubernetes/deployment.yaml'
              sh 'cat ./Kubernetes/deployment.yaml'
                step([$class: 'KubernetesEngineBuilder',
                      projectId: 'united-button-342103',
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