# Section 1: System Design
System design of a scalable, cloud-based system for food security monitoring

## Task Description
WFP is developing an Early Warning System that integrates real-time data from multiple sources (satellite imagery, economic indicators, conflict data, weather forecasts, etc.). The system should:
* Process large-scale data in near real-time
* Provide an API for retrieving food security alerts
* Scale efficiently to accommodate more data sources over time
* Ensure high availability and security

## Deliverables
1. System Architecture Diagram (Can be drawn in Lucidchart, draw.io, or any other tool)
2. Technical Explanation (500 words max), including:
* AWS services you would use (e.g., Lambda, S3, EC2, RDS, etc.) and their purpose
* Data processing pipeline (batch vs. real-time)
* Security considerations
* API design (e.g., REST vs. GraphQL)
* Deployment strategy (e.g., CI/CD pipelines, infrastructure as code)


## 1. System Architecture Diagram
![Please refer the to System Architecture Diagram] (/wfp-sad.png)


## 2. Technical Explanation
The proposed AWS cloud-based Early Warning System for food security monitoring is designed to process large-scale data from multiple data sources in near real-time, provide an API for retrieving food security alerts, scale efficiently and ensure high availability and security.

### Data Ingestion Processing Pipeline:
* Real-time data ingestion using Kinesis Data Streams as the primary ingestion point for real-time data from various sources such as conflict data, weather forecasts, etc. for immediate data processing. The service can also handle massive amounts of streaming data.
* S3 for storing raw data (satellite imagery, economic indicators, etc.) and also processed data in a cost-effective manner
* Serverless event-driven architecture using Lambda functions for scalable processing ensuring cost-efficiency and automatic scaling based on incoming data volume
* DynamoDB for auto-scaling real-time data access, ideal for storing and retrieving time-sensitive alerts
* Relational Database Service (PostgreSQL) can also be utilized for structured data that require relational querying capabilities
* This design will allow the system to accommodate more data sources over time without significant architectural changes
### Security Considerations:
* Encryption at rest using Key Management Service
* SSL/TLS encryption for data transmission
* Identity and Access Management roles and policies to securely control access to AWS resources
* Regular security audits and compliance monitoring
* Web Application Firewall for web application security to protect the API from common web exploits
* CloudWatch for comprehensiv9e monitoring of the entire system and the automatic triggering of actions to reduce mean time to resolution
* CloudTrail for logging API calls for security analysis and resource change tracking
* Shield for DDoS protection
### API Design:
* API Gateway for RESTful API implementation for simplicity and wide adoption 
* REST also provides API versioning for backward compatibility 
* Lambda for API backend providing a secure and scalable interface for retrieving food security alerts and low latency
* API Gateway and Lambda will inherently provide high availability
* Utilize JWT-based authentication
* Implement rate limiting and throttling
* CloudFront for content delivery
### Deployment Strategy:
* Infrastructure as Code using CloudFormation
* CI/CD pipeline using CodePipeline and CodeDeploy or GitHub Actions to automate testing and deployment processes, ensuring reliable updates and maintaining system integrity
* Blue-Green deployment for zero-downtime updates
* Automatic scaling based on demand

The above architecture provides a robust, scalable and secure foundation for the Early Warning System, capable of processing diverse data sources in near real-time and delivering timely alerts through a well-designed API.
