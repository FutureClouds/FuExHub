// CLF-C02
var CLF_TEXT = `

Q: A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud.\nWhich activities related to a Snowball Edge device are available to the company at no cost?
A. Use of the Snowball Edge appliance for a 10-day period
B. The transfer of data out of Amazon S3 and to the Snowball Edge appliance
*C. The transfer of data from the Snowball Edge appliance into Amazon S3
D. Daily use of the Snowball Edge appliance after 10 days
https://www.examtopics.com/discussions/amazon/view/123345-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices.\nWhich AWS service can the company use to meet these requirements?
A. AWS Trusted Advisor
*B. Amazon Inspector
C. AWS Config
D. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123348-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally.\nWhat is the MOST operationally efficient AWS solution for this scenario?
A. Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.
*B. Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.
C. Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.
D. Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users.
https://www.examtopics.com/discussions/amazon/view/123447-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?
A. Hard code an IAM user’s secret key and access key directly in the application, and upload the file.
B. Store the IAM user’s secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.
*C. Have the EC2 instance assume a role to obtain the privileges to upload the file.
D. Modify the S3 bucket policy so that any service can upload to it at any time.
https://www.examtopics.com/discussions/amazon/view/123448-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?
A. Physical security of DynamoDB
B. Patching of DynamoDB
*C. Access to DynamoDB tables
D. Encryption of data at rest in DynamoDB
https://www.examtopics.com/discussions/amazon/view/123449-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?
A. Sustainability
B. Performance efficiency
*C. Governance
D. Reliability
https://www.examtopics.com/discussions/amazon/view/123349-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance.\nWhich AWS service meets these requirements?
A. AWS Lambda
B. Amazon RDS
*C. AWS Fargate
D. Amazon Athena
https://www.examtopics.com/discussions/amazon/view/123499-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run a NoSQL database on Amazon EC2 instances.\nWhich task is the responsibility of AWS in this scenario?
A. Update the guest operating system of the EC2 instances.
B. Maintain high availability at the database layer.
*C. Patch the physical infrastructure that hosts the EC2 instances.
D. Configure the security group firewall.
https://www.examtopics.com/discussions/amazon/view/123538-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)
*A. AWS Cost Explorer
B. AWS Billing Conductor
C. Amazon CodeGuru
D. Amazon SageMaker
*E. AWS Compute Optimizer
https://www.examtopics.com/discussions/amazon/view/123553-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)
A. Providing high-performance container orchestration
B. Creating and rotating encryption keys
*C. Detecting underutilized resources to save costs
*D. Improving security by proactively monitoring the AWS environment
E. Implementing enforced tagging across AWS resources
https://www.examtopics.com/discussions/amazon/view/123456-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?
*A. Elimination of expenses for running and maintaining data centers
B. Price discounts that are identical to discounts from hardware providers
C. Distribution of all operational controls to AWS
D. Elimination of operational expenses
https://www.examtopics.com/discussions/amazon/view/123455-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates.\nWhich AWS service will meet this requirement?
A. AWS Resource Explorer
*B. AWS Service Catalog
C. AWS Organizations
D. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/123350-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?
A. AWS Organizations
B. AWS Pricing Calculator
*C. AWS Cost Explorer
D. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/123457-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data.\nWhich combination of AWS services should the company use to meet these requirements? (Choose two.)
*A. AWS Glue
B. Amazon Elastic File System (Amazon EFS)
C. Amazon Redshift
*D. Amazon QuickSight
E. Amazon Quantum Ledger Database (Amazon QLDB)
https://www.examtopics.com/discussions/amazon/view/123610-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices.\nWhich AWS service or resource will meet these requirements?
A. AWS Support
*B. AWS Professional Services
C. AWS Launch Wizard
D. AWS Managed Services (AMS)
https://www.examtopics.com/discussions/amazon/view/123458-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided.\nWhich EC2 purchasing option will meet these requirements MOST cost-effectively?
A. Reserved Instances
B. Dedicated Hosts
C. Spot Instances
*D. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/123459-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A developer wants to deploy an application quickly on AWS without manually creating the required resources.\nWhich AWS service will meet these requirements?
A. Amazon EC2
*B. AWS Elastic Beanstalk
C. AWS CodeBuild
D. Amazon Personalize
https://www.examtopics.com/discussions/amazon/view/123460-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting.\nWhich S3 feature should the company use to meet these requirements?
A. S3 Lifecycle rules
*B. S3 Versioning
C. S3 bucket policies
D. S3 server-side encryption
https://www.examtopics.com/discussions/amazon/view/123462-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides the ability to manage infrastructure as code?
A. AWS CodePipeline
B. AWS CodeDeploy
C. AWS Direct Connect
*D. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/123464-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. The EC2 instances must be online and available without any disruption.\nWhich EC2 instance purchasing option will meet these requirements MOST cost-effectively?
A. On-Demand Instances
*B. Reserved Instances
C. Spot Instances
D. Spot Fleet
https://www.examtopics.com/discussions/amazon/view/123674-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature allows a user to establish a dedicated network connection between a company’s on-premises data center and the AWS Cloud?
*A. AWS Direct Connect
B. VPC peering
C. AWS VPN
D. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/123613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a physical location of the AWS global infrastructure?
A. AWS DataSync
*B. AWS Region
C. Amazon Connect
D. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks.\nWhich pillar of the AWS Well-Architected Framework is supported by these goals?
A. Reliability
*B. Security
C. Operational excellence
D. Performance efficiency
https://www.examtopics.com/discussions/amazon/view/123679-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is the purpose of having an internet gateway within a VPC?
A. To create a VPN connection to the VPC
*B. To allow communication between the VPC and the internet
C. To impose bandwidth constraints on internet traffic
D. To load balance traffic from the internet across Amazon EC2 instances
https://www.examtopics.com/discussions/amazon/view/123467-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is running a monolithic on-premises application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and divide the application into microservices.\nWhich best practice of the AWS Well-Architected Framework is the company following with this plan?
A. Integrate functional testing as part of AWS deployment.
B. Use automation to deploy changes.
C. Deploy the application to multiple locations.
*D. Implement loosely coupled dependencies.
https://www.examtopics.com/discussions/amazon/view/123680-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has an AWS account. The company wants to audit its password and access key rotation details for compliance purposes.\nWhich AWS service or tool will meet this requirement?
A. IAM Access Analyzer
B. AWS Artifact
*C. IAM credential report
D. AWS Audit Manager
https://www.examtopics.com/discussions/amazon/view/123614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to receive a notification when a specific AWS cost threshold is reached.\nWhich AWS services or tools can the company use to meet this requirement? (Choose two.)
A. Amazon Simple Queue Service (Amazon SQS)
*B. AWS Budgets
C. Cost Explorer
*D. Amazon CloudWatch
E. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/123563-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or resource provides answers to the most frequently asked security-related questions that AWS receives from its users?
A. AWS Artifact
B. Amazon Connect
C. AWS Chatbot
*D. AWS Knowledge Center
https://www.examtopics.com/discussions/amazon/view/123440-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which tasks are customer responsibilities, according to the AWS shared responsibility model? (Choose two.)
*A. Configure the AWS provided security group firewall.
*B. Classify company assets in the AWS Cloud.
C. Determine which Availability Zones to use for Amazon S3 buckets.
D. Patch or upgrade Amazon DynamoDB.
E. Select Amazon EC2 instances to run AWS Lambda on.
https://www.examtopics.com/discussions/amazon/view/123758-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)
A. Availability
*B. Reliability
C. Scalability
D. Responsive design
*E. Operational excellence
https://www.examtopics.com/discussions/amazon/view/123564-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature is used to send both text and email messages from distributed applications?
*A. Amazon Simple Notification Service (Amazon SNS)
B. Amazon Simple Email Service (Amazon SES)
C. Amazon CloudWatch alerts
D. Amazon Simple Queue Service (Amazon SQS)
https://www.examtopics.com/discussions/amazon/view/123480-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user needs programmatic access to AWS resources through the AWS CLI or the AWS API.\nWhich option will provide the user with the appropriate access?
A. Amazon Inspector
*B. Access keys
C. SSH public keys
D. AWS Key Management Service (AWS KMS) keys
https://www.examtopics.com/discussions/amazon/view/123691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs thousands of simultaneous simulations using AWS Batch. Each simulation is stateless, is fault tolerant, and runs for up to 3 hours.\nWhich pricing model enables the company to optimize costs and meet these requirements?
A. Reserved Instances
*B. Spot Instances
C. On-Demand Instances
D. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123847-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What does the concept of agility mean in AWS Cloud computing? (Choose two.)
*A. The speed at which AWS resources are implemented
B. The speed at which AWS creates new AWS Regions
*C. The ability to experiment quickly
D. The elimination of wasted capacity
E. The low cost of entry into cloud computing
https://www.examtopics.com/discussions/amazon/view/123423-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to block SQL injection attacks.\nWhich AWS service or feature can meet this requirement?
*A. AWS WAF
B. AWS Shield
C. Network ACLs
D. Security groups
https://www.examtopics.com/discussions/amazon/view/123632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?
A. AWS Service Catalog
B. AWS Systems Manager
*C. AWS IAM Access Analyzer
D. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123692-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A cloud practitioner needs to obtain AWS compliance reports before migrating an environment to the AWS Cloud.\nHow can these reports be generated?
A. Contact the AWS Compliance team.
*B. Download the reports from AWS Artifact.
C. Open a case with AWS Support.
D. Generate the reports with Amazon Macie.
https://www.examtopics.com/discussions/amazon/view/123693-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An ecommerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud.\nWhich cost is the company’s direct responsibility?
*A. Cost of application software licenses
B. Cost of the hardware infrastructure on AWS
C. Cost of power for the AWS servers
D. Cost of physical security for the AWS data center
https://www.examtopics.com/discussions/amazon/view/123694-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is setting up AWS Identity and Access Management (IAM) on an AWS account.\nWhich recommendation complies with IAM security best practices?
A. Use the account root user access keys for administrative tasks.
B. Grant broad permissions so that all company employees can access the resources they need.
*C. Turn on multi-factor authentication (MFA) for added security during the login process.
D. Avoid rotating credentials to prevent issues in production applications.
https://www.examtopics.com/discussions/amazon/view/123695-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Elasticity in the AWS Cloud refers to which of the following? (Choose two.)
A. How quickly an Amazon EC2 instance can be restarted
*B. The ability to rightsize resources as demand shifts
C. The maximum amount of RAM an Amazon EC2 instance can use
D. The pay-as-you-go billing model
*E. How easily resources can be procured when they are needed
https://www.examtopics.com/discussions/amazon/view/123412-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which service enables customers to audit API calls in their AWS accounts?
*A. AWS CloudTrail
B. AWS Trusted Advisor
C. Amazon Inspector
D. AWS X-Ray
https://www.examtopics.com/discussions/amazon/view/123877-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?
*A. Managing the code within the Lambda function
B. Confirming that the hardware is working in the data center
C. Patching the operating system
D. Shutting down Lambda functions when they are no longer in use
https://www.examtopics.com/discussions/amazon/view/123716-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis.\nWhich AWS service should the company use to run these queries in the MOST cost-effective manner?
A. Amazon Redshift
*B. Amazon Athena
C. Amazon Kinesis
D. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123715-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can be used at no additional cost?
A. Amazon SageMaker
B. AWS Config
*C. AWS Organizations
D. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/123717-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the people perspective?
A. Data architecture
B. Event management
*C. Cloud fluency
D. Strategic partnership
https://www.examtopics.com/discussions/amazon/view/123718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to make an upfront commitment for continued use of its production Amazon EC2 instances in exchange for a reduced overall cost.\nWhich pricing options meet these requirements with the LOWEST cost? (Choose two.)
A. Spot Instances
B. On-Demand Instances
*C. Reserved Instances
*D. Savings Plans
E. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123719-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible.\nWhich AWS service or resource should the company use to select its Amazon RDS deployment area?
A. Amazon Connect
B. AWS Wavelength
*C. AWS Regions
D. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/123785-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is exploring the use of the AWS Cloud, and needs to create a cost estimate for a project before the infrastructure is provisioned.\nWhich AWS service or feature can be used to estimate costs before deployment?
A. AWS Free Tier
*B. AWS Pricing Calculator
C. AWS Billing and Cost Management
D. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/123720-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is building an application that needs to deliver images and videos globally with minimal latency.\nWhich approach can the company use to accomplish this in a cost effective manner?
*A. Deliver the content through Amazon CloudFront.
B. Store the content on Amazon S3 and enable S3 cross-region replication.
C. Implement a VPN across multiple AWS Regions.
D. Deliver the content through AWS PrivateLink.
https://www.examtopics.com/discussions/amazon/view/124319-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a benefit of the economies of scale based on the advantages of cloud computing?
A. The ability to trade variable expense for fixed expense
B. Increased speed and agility
*C. Lower variable costs over fixed costs
D. Increased operational costs across data centers
https://www.examtopics.com/discussions/amazon/view/123959-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a software development framework that a company can use to define cloud resources as code and provision the resources through AWS CloudFormation?
A. AWS CLI
B. AWS Developer Center
*C. AWS Cloud Development Kit (AWS CDK)
D. AWS CodeStar
https://www.examtopics.com/discussions/amazon/view/123762-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited-privilege credentials for authentication with other AWS APIs.\nWhich AWS service or feature should the company use to meet these authentication requirements?
A. Amazon API Gateway
B. IAM users
*C. AWS Security Token Service (AWS STS)
D. IAM instance profiles
https://www.examtopics.com/discussions/amazon/view/123721-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?
*A. AWS Security Hub
B. AWS Trusted Advisor
C. Amazon EventBridge
D. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123550-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is always provided at no charge?
A. Amazon S3
*B. AWS Identity and Access Management (IAM)
C. Elastic Load Balancers
D. AWS WAF
https://www.examtopics.com/discussions/amazon/view/123551-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: To reduce costs, a company is planning to migrate a NoSQL database to AWS.\nWhich AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?
A. Amazon Redshift
B. Amazon Aurora
*C. Amazon DynamoDB
D. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123552-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is using Amazon DynamoDB.\nWhich task is the company’s responsibility, according to the AWS shared responsibility model?
A. Patch the operating system.
B. Provision hosts.
*C. Manage database access permissions.
D. Secure the operating system.
https://www.examtopics.com/discussions/amazon/view/124402-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a test AWS environment. A company is planning on testing an application within AWS. The application testing can be interrupted and does not need to run continuously.\nWhich Amazon EC2 purchasing option will meet these requirements MOST cost-effectively?
A. On-Demand Instances
B. Dedicated Instances
*C. Spot Instances
D. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/124403-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?
*A. Amazon Macie
B. Amazon Detective
C. Amazon GuardDuty
D. AWS IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/123736-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following services can be used to block network traffic to an instance? (Choose two.)
*A. Security groups
B. Amazon Virtual Private Cloud (Amazon VPC) flow logs
*C. Network ACLs
D. Amazon CloudWatch
E. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/123965-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can identify when an Amazon EC2 instance was terminated?
A. AWS Identity and Access Management (IAM)
*B. AWS CloudTrail
C. AWS Compute Optimizer
D. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/123966-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a fully managed MySQL-compatible database?
A. Amazon S3
B. Amazon DynamoDB
C. Amazon Redshift
*D. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/123969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, co-location environments, or on-premises facilities?
A. AWS Snowmobile
B. AWS Local Zones
*C. AWS Outposts
D. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/123971-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?
A. Amazon DynamoDB
B. Amazon Athena
*C. Amazon RDS
D. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/123972-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections.\nWhich AWS services can the company use to meet these requirements? (Choose two.)
A. Amazon Connect
*B. Amazon AppStream 2.0
*C. Amazon WorkSpaces
D. AWS Site-to-Site VPN
E. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/123973-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to monitor for misconfigured security groups that are allowing unrestricted access to specific ports.\nWhich AWS service will meet this requirement?
*A. AWS Trusted Advisor
B. Amazon CloudWatch
C. Amazon GuardDuty
D. AWS Health Dashboard
https://www.examtopics.com/discussions/amazon/view/123528-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?
*A. Amazon DynamoDB
B. Amazon Aurora
C. Amazon DocumentDB (with MongoDB compatibility)
D. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/123282-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is deploying a machine learning (ML) research project that will require a lot of compute power over several months. The ML processing jobs do not need to run at specific times.\nWhich Amazon EC2 instance purchasing option will meet these requirements at the lowest cost?
A. On-Demand Instances
*B. Spot Instances
C. Reserved Instances
D. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123450-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)
A. EC2 Reserved Instances
*B. EC2 Amazon Machine Images (AMIs)
*C. Amazon Elastic Block Store (Amazon EBS) snapshots
D. AWS Shield
E. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123975-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides command line access to AWS tools and resources directly from a web browser?
A. AWS CloudHSM
*B. AWS CloudShell
C. Amazon WorkSpaces
D. AWS Cloud Map
https://www.examtopics.com/discussions/amazon/view/125683-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time.\nWhich AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?
A. VPC endpoints
*B. AWS Transit Gateway
C. Amazon Route 53
D. AWS Secrets Manager
https://www.examtopics.com/discussions/amazon/view/123722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to assess its operational readiness. It also wants to identify and mitigate any operational risks ahead of a new product launch.\nWhich AWS Support plan offers guidance and support for this kind of event at no additional charge?
A. AWS Business Support
B. AWS Basic Support
C. AWS Developer Support
*D. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/125425-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to establish a schedule for rotating database user credentials.\nWhich AWS service will support this requirement with the LEAST amount of operational overhead?
A. AWS Systems Manager
*B. AWS Secrets Manager
C. AWS License Manager
D. AWS Managed Services
https://www.examtopics.com/discussions/amazon/view/125684-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?
A. Amazon Route 53
B. Amazon Macie
*C. AWS Direct Connect
D. AWS PrivateLink
https://www.examtopics.com/discussions/amazon/view/123418-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is used to provide encryption for Amazon EBS?
A. AWS Certificate Manager
B. AWS Systems Manager
*C. AWS KMS
D. AWS Config
https://www.examtopics.com/discussions/amazon/view/123723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to manage its AWS Cloud resources through a web interface.\nWhich AWS service will meet this requirement?
*A. AWS Management Console
B. AWS CLI
C. AWS SDK
D. AWS Cloud9
https://www.examtopics.com/discussions/amazon/view/125685-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are advantages of the AWS Cloud? (Choose two.)
A. Trade variable expenses for capital expenses
*B. High economies of scale
*C. Launch globally in minutes
D. Focus on managing hardware infrastructure
E. Overprovision to ensure capacity
https://www.examtopics.com/discussions/amazon/view/124444-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud benefit is shown by an architecture’s ability to withstand failures with minimal downtime?
A. Agility
B. Elasticity
C. Scalability
*D. High availability
https://www.examtopics.com/discussions/amazon/view/123529-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A developer needs to maintain a development environment infrastructure and a production environment infrastructure in a repeatable fashion.\nWhich AWS service should the developer use to meet these requirements?
A. AWS Ground Station
B. AWS Shield
C. AWS IoT Device Defender
*D. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/124445-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is the customer’s responsibility, according to the AWS shared responsibility model?
A. Maintain the security of the AWS Cloud.
*B. Configure firewalls and networks.
C. Patch the operating system of Amazon RDS instances.
D. Implement physical and environmental controls.
https://www.examtopics.com/discussions/amazon/view/125689-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service helps deliver highly available applications with fast failover for multi-Region and Multi-AZ architectures?
A. AWS WAF
*B. AWS Global Accelerator
C. AWS Shield
D. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/123611-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a set of ecommerce applications. The applications need to be able to send messages to each other.\nWhich AWS service meets this requirement?
A. AWS Auto Scaling
B. Elastic Load Balancing
*C. Amazon Simple Queue Service (Amazon SQS)
D. Amazon Kinesis Data Streams
https://www.examtopics.com/discussions/amazon/view/125690-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)
*A. Volume discounts
B. A minimal additional fee for use
*C. One bill for multiple accounts
D. Installment payment options
E. Custom cost and usage budget creation
https://www.examtopics.com/discussions/amazon/view/124496-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console.\nWhich AWS service or resource will meet this requirement?
A. S3 Multi-Region Access Points
B. S3 Storage Lens
C. AWS IAM Identity Center (AWS Single Sign-On)
*D. Access Analyzer for S3
https://www.examtopics.com/discussions/amazon/view/123420-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is the best resource for a user to find compliance-related information and reports about AWS?
*A. AWS Artifact
B. AWS Marketplace
C. Amazon Inspector
D. AWS Support
https://www.examtopics.com/discussions/amazon/view/123615-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service enables companies to deploy an application close to end users?
*A. Amazon CloudFront
B. AWS Auto Scaling
C. AWS AppSync
D. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/123616-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature improves network performance by sending traffic through the AWS worldwide network infrastructure?
A. Route table
B. AWS Transit Gateway
*C. AWS Global Accelerator
D. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/123617-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides highly durable object storage?
*A. Amazon S3
B. Amazon Elastic File System (Amazon EFS)
C. Amazon Elastic Block Store (Amazon EBS)
D. Amazon FSx
https://www.examtopics.com/discussions/amazon/view/123618-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?
A. Database backups
B. Database software patches
C. Operating system patches
*D. Operating system installations
https://www.examtopics.com/discussions/amazon/view/125691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are advantages of moving to the AWS Cloud? (Choose two.)
A. The ability to turn over the responsibility for all security to AWS.
*B. The ability to use the pay-as-you-go model.
C. The ability to have full control over the physical infrastructure.
*D. No longer having to guess what capacity will be required.
E. No longer worrying about users access controls.
https://www.examtopics.com/discussions/amazon/view/125692-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?
A. AWS DataSync
B. Amazon S3 Glacier
*C. AWS Storage Gateway
D. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/124497-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to migrate to AWS and wants to create cost estimates for its AWS use cases.\nWhich AWS service or tool can the company use to meet these requirements?
*A. AWS Pricing Calculator
B. Amazon CloudWatch
C. AWS Cost Explorer
D. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/123620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which tool should a developer use to integrate AWS service features directly into an application?
*A. AWS Software Development Kit
B. AWS CodeDeploy
C. AWS Lambda
D. AWS Batch
https://www.examtopics.com/discussions/amazon/view/125693-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a recommended design principle of the AWS Well-Architected Framework?
A. Reduce downtime by making infrastructure changes infrequently and in large increments.
B. Invest the time to configure infrastructure manually.
*C. Learn to improve from operational failures.
D. Use monolithic application design for centralization.
https://www.examtopics.com/discussions/amazon/view/124504-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:
A. restricted access.
B. as-needed access.
*C. least privilege access.
D. token access.
https://www.examtopics.com/discussions/amazon/view/125694-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?
A. Security group
B. AWS WAF
C. AWS Firewall Manager
*D. Network ACL
https://www.examtopics.com/discussions/amazon/view/123621-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure.\nWhich AWS service will meet this requirement?
A. Amazon Aurora
*B. Amazon Redshift Serverless
C. AWS Lambda
D. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: How does AWS Cloud computing help businesses reduce costs? (Choose two.)
A. AWS charges the same prices for services in every AWS Region.
*B. AWS enables capacity to be adjusted on demand.
C. AWS offers discounts for Amazon EC2 instances that remain idle for more than 1 week.
D. AWS does not charge for data sent from the AWS Cloud to the internet.
*E. AWS eliminates many of the costs of building and maintaining on-premises data centers.
https://www.examtopics.com/discussions/amazon/view/125700-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources.\nWhich AWS service will meet this requirement?
A. IAM group
*B. IAM role
C. IAM tag
D. IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/125809-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is the responsibility of AWS when using AWS services?
A. Management of IAM user permissions
B. Creation of security group rules for outbound access
*C. Maintenance of physical and environmental controls
D. Application of Amazon EC2 operating system patches
https://www.examtopics.com/discussions/amazon/view/123623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to automate infrastructure deployment by using infrastructure as code (IaC). The company wants to scale production stacks so the stacks can be deployed in multiple AWS Regions.\nWhich AWS service will meet these requirements?
A. Amazon CloudWatch
B. AWS Config
C. AWS Trusted Advisor
*D. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/123624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is an AWS Cloud Adoption Framework (AWS CAF) platform perspective capability?
*A. Data architecture
B. Data protection
C. Data governance
D. Data science
https://www.examtopics.com/discussions/amazon/view/123729-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is running a workload in the AWS Cloud.\nWhich AWS best practice ensures the MOST cost-effective architecture for the workload?
A. Loose coupling
*B. Rightsizing
C. Caching
D. Redundancy
https://www.examtopics.com/discussions/amazon/view/124553-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows.\nWhich AWS service should the company use to meet these requirements?
A. Amazon Elastic Block Store (Amazon EBS)
*B. AWS Storage Gateway
C. Amazon Elastic Container Service (Amazon ECS)
D. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/124134-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS tool gives users the ability to plan their service usage, service costs, and instance reservations, and also allows them to set custom alerts when their costs or usage exceed established thresholds?
A. Cost Explorer
*B. AWS Budgets
C. AWS Cost and Usage Report
D. Reserved Instance reporting
https://www.examtopics.com/discussions/amazon/view/123681-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which tasks are the customer’s responsibility, according to the AWS shared responsibility model? (Choose two.)
A. Establish the global infrastructure.
*B. Perform client-side data encryption.
*C. Configure IAM credentials.
D. Secure edge locations.
E. Patch Amazon RDS DB instances.
https://www.examtopics.com/discussions/amazon/view/125703-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A developer has been hired by a large company and needs AWS credentials.\nWhich are security best practices that should be followed? (Choose two.)
*A. Grant the developer access to only the AWS resources needed to perform the job.
B. Share the AWS account root user credentials with the developer.
C. Add the developer to the administrator’s group in AWS IAM.
D. Configure a password policy that ensures the developer’s password cannot be changed.
*E. Ensure the account password policy requires a minimum length.
https://www.examtopics.com/discussions/amazon/view/124048-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has multiple AWS accounts that include compute workloads that cannot be interrupted. The company wants to obtain billing discounts that are based on the company’s use of AWS services.\nWhich AWS feature or purchasing option will meet these requirements?
A. Resource tagging
*B. Consolidated billing
C. Pay-as-you-go pricing
D. Spot Instances
https://www.examtopics.com/discussions/amazon/view/123730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user wants to allow applications running on an Amazon EC2 instance to make calls to other AWS services. The access granted must be secure.\nWhich AWS service or feature should be used?
A. Security groups
B. AWS Firewall Manager
*C. IAM roles
D. IAM user SSH keys
https://www.examtopics.com/discussions/amazon/view/123731-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a fully managed Windows file server for its Windows-based applications.\nWhich AWS service will meet this requirement?
*A. Amazon FSx
B. Amazon Elastic Kubernetes Service (Amazon EKS)
C. Amazon Elastic Container Service (Amazon ECS)
D. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/124131-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its NFS on-premises workload to AWS.\nWhich AWS Storage Gateway type should the company use to meet this requirement?
A. Tape Gateway
B. Volume Gateway
C. Amazon FSx File Gateway
*D. Amazon S3 File Gateway
https://www.examtopics.com/discussions/amazon/view/123798-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to track the activity in its AWS accounts, and needs to know when an API call is made against its AWS resources.\nWhich AWS tool or service can be used to meet these requirements?
A. Amazon CloudWatch
B. Amazon Inspector
*C. AWS CloudTrail
D. AWS IAM
https://www.examtopics.com/discussions/amazon/view/123799-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has an uninterruptible application that runs on Amazon EC2 instances. The application constantly processes a backlog of files in an Amazon Simple Queue Service (Amazon SQS) queue. This usage is expected to continue to grow for years.\nWhat is the MOST cost-effective EC2 instance purchasing model to meet these requirements?
A. Spot Instances
B. On-Demand Instances
*C. Savings Plans
D. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants an AWS service to provide product recommendations based on its customer data.\nWhich AWS service will meet this requirement?
A. Amazon Polly
*B. Amazon Personalize
C. Amazon Comprehend
D. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/123800-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning its migration to the AWS Cloud. The company is identifying its capability gaps by using the AWS Cloud Adoption Framework (AWS CAF) perspectives.\nWhich phase of the cloud transformation journey includes these identification activities?
A. Envision
*B. Align
C. Scale
D. Launch
https://www.examtopics.com/discussions/amazon/view/123916-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A social media company wants to protect its web application from common web exploits such as SQL injections and cross-site scripting.\nWhich AWS service will meet these requirements?
A. Amazon Inspector
*B. AWS WAF
C. Amazon GuardDuty
D. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/123917-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which fully managed AWS service assists with the creation, testing, and management of custom Amazon EC2 images?
*A. EC2 Image Builder
B. Amazon Machine Image (AMI)
C. AWS Launch Wizard
D. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/123919-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants an automated process to continuously scan its Amazon EC2 instances for software vulnerabilities.\nWhich AWS service will meet these requirements?
A. Amazon GuardDuty
*B. Amazon Inspector
C. Amazon Detective
D. Amazon Cognito
https://www.examtopics.com/discussions/amazon/view/123920-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to perform data processing once a week that typically takes about 5 hours to complete.\nWhich AWS service should the company use for this workload?
A. AWS Lambda
*B. Amazon EC2
C. AWS CodeDeploy
D. AWS Wavelength
https://www.examtopics.com/discussions/amazon/view/123896-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature provides log information of the inbound and outbound traffic on network interfaces in a VPC?
A. Amazon CloudWatch Logs
B. AWS CloudTrail
*C. VPC Flow Logs
D. AWS Identity and Access Management (IAM)
https://www.examtopics.com/discussions/amazon/view/123732-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to design a centralized storage system to manage the configuration data and passwords for its critical business applications.\nWhich AWS service or capability will meet these requirements MOST cost-effectively?
*A. AWS Systems Manager Parameter Store
B. AWS Secrets Manager
C. AWS Config
D. Amazon S3
https://www.examtopics.com/discussions/amazon/view/123897-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements?
A. Amazon Elastic Kubernetes Service (Amazon EKS)
B. AWS Fargate
*C. Amazon EC2
D. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/125718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature allows users to create new AWS accounts, group multiple accounts to organize workflows, and apply policies to groups of accounts?
A. AWS Identity and Access Management (IAM)
B. AWS Trusted Advisor
C. AWS CloudFormation
*D. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123921-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to store and retrieve files in Amazon S3 for its existing on-premises applications by using industry-standard file system protocols.\nWhich AWS service will meet these requirements?
A. AWS DataSync
B. AWS Snowball Edge
*C. Amazon S3 File Gateway
D. AWS Transfer Family
https://www.examtopics.com/discussions/amazon/view/123922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to block SQL injection attacks.\nWhich AWS service or feature should the company use to meet this requirement?
*A. AWS WAF
B. Network ACLs
C. Security groups
D. AWS Certificate Manager (ACM)
https://www.examtopics.com/discussions/amazon/view/123923-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a unified tool to provide a consistent method to interact with AWS services.\nWhich AWS service or tool will meet this requirement?
*A. AWS CLI
B. Amazon Elastic Container Service (Amazon ECS)
C. AWS Cloud9
D. AWS Virtual Private Network (AWS VPN)
https://www.examtopics.com/discussions/amazon/view/123924-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance and security.\nWhich AWS service can the company use to meet these requirements?
A. AWS Shield
B. AWS WAF
*C. AWS Trusted Advisor
D. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/125802-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes capabilities for configuration management and patch management?
A. Platform
*B. Operations
C. Security
D. Governance
https://www.examtopics.com/discussions/amazon/view/123925-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a compute workload that is steady, predictable, and uninterruptible.\nWhich Amazon EC2 instance purchasing options meet these requirements MOST cost-effectively? (Choose two.)
A. On-Demand Instances
*B. Reserved Instances
C. Spot Instances
*D. Saving Plans
E. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123425-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?
*A. On-Demand Instances
B. Reserved Instances
C. Spot Instances
D. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123424-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a shared responsibility between AWS and its customers under the AWS shared responsibility model?
A. Configuration of Amazon EC2 instance operating systems
B. Application file system server-side encryption
*C. Patch management
D. Security of the physical infrastructure
https://www.examtopics.com/discussions/amazon/view/123930-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its on-premises workloads to the AWS Cloud. The company wants to separate workloads for chargeback to different departments.\nWhich AWS services or features will meet these requirements? (Choose two.)
A. Placement groups
*B. Consolidated billing
C. Edge locations
D. AWS Config
*E. Multiple AWS accounts
https://www.examtopics.com/discussions/amazon/view/125983-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is a responsibility of AWS, according to the AWS shared responsibility model?
A. Enable client-side encryption for objects that are stored in Amazon S3.
B. Configure IAM security policies to comply with the principle of least privilege.
C. Patch the guest operating system on an Amazon EC2 instance.
*D. Apply updates to the Nitro Hypervisor.
https://www.examtopics.com/discussions/amazon/view/123931-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a benefit of using AWS for cloud computing?
A. Trade variable expense for fixed expense
*B. Pay-as-you-go pricing
C. Decreased speed and agility
D. Spending money running and maintaining data centers
https://www.examtopics.com/discussions/amazon/view/123426-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is an AWS Cloud Adoption Framework (AWS CAF) business perspective capability?
A. Culture evolution
B. Event management
*C. Data monetization
D. Platform architecture
https://www.examtopics.com/discussions/amazon/view/123427-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is assessing its AWS Business Support plan to determine if the plan still meets the company’s needs. The company is considering switching to AWS Enterprise Support.\nWhich additional benefit will the company receive with AWS Enterprise Support?
A. A full set of AWS Trusted Advisor checks
B. Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week
*C. A designated technical account manager (TAM) to assist in monitoring and optimization
D. A consultative review and architecture guidance for the company’s applications
https://www.examtopics.com/discussions/amazon/view/125792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which pricing model will interrupt a running Amazon EC2 instance if capacity becomes temporarily unavailable?
A. On-Demand Instances
B. Standard Reserved Instances
*C. Spot Instances
D. Convertible Reserved Instances
https://www.examtopics.com/discussions/amazon/view/125804-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)
A. Observability
B. Incident and problem management
*C. Incident response
*D. Infrastructure protection
E. Availability and continuity
https://www.examtopics.com/discussions/amazon/view/125805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously.\nWhich option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?
A. AWS Graviton processor
B. Dedicated Hosts
*C. EC2 Instance Savings Plans
D. Amazon EC2 Auto Scaling instances
https://www.examtopics.com/discussions/amazon/view/126182-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?
A. Agility
*B. Elasticity
C. Reliability
D. Durability
https://www.examtopics.com/discussions/amazon/view/126207-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)
A. Amazon WorkSpaces
*B. Amazon Simple Queue Service (Amazon SQS)
C. Amazon Connect
D. AWS Trusted Advisor
*E. AWS Step Functions
https://www.examtopics.com/discussions/amazon/view/126046-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?
*A. AWS Budgets
B. AWS Cost Explorer
C. AWS Cost Allocation Tags
D. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/126205-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey.\nWhich AWS CAF governance perspective capability will meet these requirements?
*A. Benefits management
B. Risk management
C. Application portfolio management
D. Cloud financial management
https://www.examtopics.com/discussions/amazon/view/126183-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket.\nWhich S3 feature will meet this requirement?
A. S3 Versioning
*B. S3 Transfer Acceleration
C. S3ACLs
D. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/126184-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to continuously run an experimental workload on an Amazon EC2 instance and stop the instance after 12 hours.\nWhich instance purchasing option will meet this requirement MOST cost-effectively?
*A. On-Demand Instances
B. Reserved Instances
C. Spot Instances
D. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/126185-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud helps accelerate business outcomes?
A. Scale
*B. Envision
C. Align
D. Launch
https://www.examtopics.com/discussions/amazon/view/126186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a customer responsibility under the AWS shared responsibility model?
A. Maintenance of underlying hardware of Amazon EC2 instances
*B. Application data security
C. Physical security of data centers
D. Maintenance of VPC components
https://www.examtopics.com/discussions/amazon/view/126187-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area.\nWhich approach will achieve this goal?
*A. Use EC2 instances in multiple AWS Regions.
B. Use EC2 instances in multiple Amazon CloudFront locations.
C. Use EC2 instances in multiple edge locations.
D. Use EC2 instances in AWS Local Zones.
https://www.examtopics.com/discussions/amazon/view/126188-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to modernize and convert a monolithic application into microservices. The company wants to move the application to AWS.\nWhich migration strategy should the company use?
A. Rehost
B. Replatform
C. Repurchase
*D. Refactor
https://www.examtopics.com/discussions/amazon/view/126189-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?
A. To access the AWS account as the AWS account root user
B. To access the AWS account through the AWS Management Console
*C. To access the AWS account through a CLI
D. To access all of a company’s AWS accounts
https://www.examtopics.com/discussions/amazon/view/126190-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is an environment that consists of one or more data centers?
A. Amazon CloudFront
*B. Availability Zone
C. VPC
D. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/128037-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead.\nWhich AWS service or resource should the company use to meet these requirements?
*A. AWS Snowmobile
B. AWS Snowball Edge
C. AWS Data Exchange
D. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/126191-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops.\nWhich AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?
*A. Amazon AppStream 2.0
B. AWS AppSync
C. Amazon WorkLink
D. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/126192-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to query its server logs to gain insights about its customers’ experiences.\nWhich AWS service will store this data MOST cost-effectively?
A. Amazon Aurora
B. Amazon Elastic File System (Amazon EFS)
C. Amazon Elastic Block Store (Amazon EBS)
*D. Amazon S3
https://www.examtopics.com/discussions/amazon/view/127169-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a recommended design principle for AWS Cloud architecture?
A. Design tightly coupled components.
B. Build a single application component that can handle all the application functionality.
C. Make large changes on fewer iterations to reduce chances of failure.
*D. Avoid monolithic architecture by segmenting workloads.
https://www.examtopics.com/discussions/amazon/view/126343-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service helps users audit API activity across their AWS account?
*A. AWS CloudTrail
B. Amazon Inspector
C. AWS WAF
D. AWS Config
https://www.examtopics.com/discussions/amazon/view/127331-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is a customer’s responsibility, according to the AWS shared responsibility model?
*A. Management of the guest operating systems
B. Maintenance of the configuration of infrastructure devices
C. Management of the host operating systems and virtualization
D. Maintenance of the software that powers Availability Zones
https://www.examtopics.com/discussions/amazon/view/128052-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to automatically add and remove Amazon EC2 instances. The company wants the EC2 instances to adjust to varying workloads dynamically.\nWhich service or feature will meet these requirements?
A. Amazon DynamoDB
B. Amazon EC2 Spot Instances
C. AWS Snow Family
*D. Amazon EC2 Auto Scaling
https://www.examtopics.com/discussions/amazon/view/126193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user wants to securely automate the management and rotation of credentials that are shared between applications, while spending the least amount of time on managing tasks.\nWhich AWS service or feature can be used to accomplish this?
A. AWS CloudHSM
B. AWS Key Management Service (AWS KMS)
*C. AWS Secrets Manager
D. Server-side encryption
https://www.examtopics.com/discussions/amazon/view/126194-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?
A. Amazon GuardDuty
*B. Amazon Macie
C. Amazon Inspector
D. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126195-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which actions are best practices for an AWS account root user? (Choose two.)
A. Share root user credentials with team members.
B. Create multiple root users for the account, separated by environment.
*C. Enable multi-factor authentication (MFA) on the root user.
*D. Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user.
E. Use programmatic access instead of the root user and password.
https://www.examtopics.com/discussions/amazon/view/126196-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes.\nWhich solution will meet these requirements?
A. Create a read replica of the DB instance.
B. Create a template of the DB instance by using AWS CloudFormation.
C. Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3.
*D. Modify the DB instance to be a Multi-AZ deployment.
https://www.examtopics.com/discussions/amazon/view/126197-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to migrate its application to AWS and run the application on Amazon EC2 instances. The application will have continuous usage for 1 year.\nWhich EC2 instance purchasing option will meet these requirements MOST cost-effectively?
*A. Reserved Instances
B. Spot Instances
C. On-Demand Instances
D. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/126198-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to transfer data between an Amazon S3 bucket and an on-premises application.\nWho is responsible for the security of this data, according to the AWS shared responsibility model?
*A. The company
B. AWS
C. Firewall vendor
D. AWS Marketplace partner
https://www.examtopics.com/discussions/amazon/view/126199-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?
A. Security
*B. Reliability
C. Performance efficiency
D. Cost optimization
https://www.examtopics.com/discussions/amazon/view/126200-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to identify Amazon S3 buckets that are shared with another AWS account.\nWhich AWS service or feature will meet these requirements?
A. AWS Lake Formation
B. IAM credential report
C. Amazon CloudWatch
*D. IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/126201-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights?
A. Amazon Athena
B. Amazon Kendra
*C. Amazon QuickSight
D. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/126202-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is an AWS value proposition that describes a user’s ability to scale infrastructure based on demand?
A. Speed of innovation
*B. Resource elasticity
C. Decoupled architecture
D. Global deployment
https://www.examtopics.com/discussions/amazon/view/128063-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which action is a security best practice for access to sensitive data that is stored in an Amazon S3 bucket?
A. Enable S3 Cross-Region Replication (CRR) on the S3 bucket.
*B. Use IAM roles for applications that require access to the S3 bucket.
C. Configure AWS WAF to prevent unauthorized access to the S3 bucket.
D. Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket.
https://www.examtopics.com/discussions/amazon/view/126203-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to know more about the benefits offered by cloud computing. The company wants to understand the operational advantage of agility. How does AWS provide agility for users?
A. The ability the ensure high availability by deploying workloads to multiple regions
B. A pay-as-you-go model for many services and resources
C. The ability to transfer infrastructure management to the AWS Cloud
*D. The ability to provision and deprovision resources quickly with minimal effort
https://www.examtopics.com/discussions/amazon/view/127933-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0.\nWhich AWS service will meet this requirement?
A. AWS Identity and Access Management (IAM)
B. Amazon Cognito
*C. AWS IAM Identity Center (AWS Single Sign-On)
D. AWS CLI
https://www.examtopics.com/discussions/amazon/view/126204-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service should users use to learn about AWS service availability and operations?
A. Amazon EventBridge
B. AWS Service Catalog
C. AWS Control Tower
*D. AWS Health Dashboard
https://www.examtopics.com/discussions/amazon/view/126217-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?
*A. VPC Flow Logs
B. Amazon Inspector
C. VPC endpoint services
D. NAT gateway
https://www.examtopics.com/discussions/amazon/view/127173-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is the customer ALWAYS responsible for managing, according to the AWS shared responsibility model?
A. Software licenses
B. Networking
*C. Customer data
D. Encryption keys
https://www.examtopics.com/discussions/amazon/view/126319-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can be used to retrieve compliance reports on demand?
A. AWS Secrets Manager
*B. AWS Artifact
C. AWS Security Hub
D. AWS Certificate Manager
https://www.examtopics.com/discussions/amazon/view/127176-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates?
A. AWS WAF
B. AWS Trusted Advisor
*C. Amazon Inspector
D. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126320-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to migrate to the AWS Cloud. The company is gathering information about its on-premises infrastructure and requires information such as the hostname, IP address, and MAC address.\nWhich AWS service will meet these requirements?
A. AWS DataSync
B. AWS Application Migration Service
*C. AWS Application Discovery Service
D. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/126211-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which action will help increase security in the AWS Cloud?
A. Enable programmatic access for all IAM users.
B. Use IAM users instead of IAM roles to delegate permissions.
*C. Rotate access keys on a reoccurring basis.
D. Use inline policies instead of customer managed policies.
https://www.examtopics.com/discussions/amazon/view/127398-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to migrate its application to the AWS Cloud.\nWhich AWS tool or set of resources should the company use to analyze and assess its readiness for migration?
*A. AWS Cloud Adoption Framework (AWS CAF)
B. AWS Pricing Calculator
C. AWS Well-Architected Framework
D. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/126209-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following describes some of the core functionality of Amazon S3?
A. Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2.
*B. Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability.
C. Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-standard SMB protocol.
D. Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources.
https://www.examtopics.com/discussions/amazon/view/127399-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS benefit is demonstrated by on-demand technology services that enable companies to replace upfront fixed expenses with variable expenses?
A. High availability
B. Economies of scale
*C. Pay-as-you-go pricing
D. Global reach
https://www.examtopics.com/discussions/amazon/view/127400-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)
*A. AWS VPN
B. Elastic Load Balancing
*C. AWS Direct Connect
D. VPC peering
E. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/126220-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software.\nWhich AWS service can be used to accomplish this?
A. Amazon RDS
*B. Amazon DynamoDB
C. Amazon Aurora
D. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/126722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which actions are examples of a company’s effort to rightsize its AWS resources to control cloud costs? (Choose two.)
A. Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets.
*B. Base the selection of Amazon EC2 instance types on past utilization patterns.
*C. Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers.
D. Use Multi-AZ deployments for Amazon RDS.
E. Replace existing Amazon EC2 instances with AWS Elastic Beanstalk.
https://www.examtopics.com/discussions/amazon/view/126723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?
A. Network ACLs
*B. Security groups
C. AWS Trusted Advisor
D. AWS WAF
https://www.examtopics.com/discussions/amazon/view/126222-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.)
A. Perform operations as code.
B. Enable traceability.
*C. Automatically scale to meet demand.
D. Deploy resources globally to improve response time.
*E. Automatically recover from failure.
https://www.examtopics.com/discussions/amazon/view/126223-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company that uses AWS needs to transfer 2 TB of data.\nWhich type of transfer of that data would result in no cost for the company?
*A. Inbound data transfer from the internet
B. Outbound data transfer to the internet
C. Data transfer between AWS Regions
D. Data transfer between Availability Zones
https://www.examtopics.com/discussions/amazon/view/126744-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to create templates that the company can reuse to deploy multiple AWS resources.\nWhich AWS service or feature can the company use to meet this requirement?
A. AWS Marketplace
B. Amazon Machine Image (AMI)
*C. AWS CloudFormation
D. AWS OpsWorks
https://www.examtopics.com/discussions/amazon/view/126224-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order.\nWhich AWS service should the company use?
A. AWS Step Functions
B. Amazon Simple Notification Service (Amazon SNS)
C. Amazon Kinesis Data Streams
*D. Amazon Simple Queue Service (Amazon SQS)
https://www.examtopics.com/discussions/amazon/view/127193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature is a browser-based, pre-authenticated service that can be launched directly from the AWS Management Console?
A. AWS API
B. AWS Lightsail
C. AWS Cloud9
*D. AWS CloudShell
https://www.examtopics.com/discussions/amazon/view/126225-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL.\nWhich AWS services will meet these requirements? (Choose two.)
A. Amazon Athena
*B. Amazon RDS
C. Amazon EC2
D. Amazon DynamoDB
*E. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/126226-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later.\nWhich AWS service should the company use to meet these requirements?
A. AWS IoT Core
B. Amazon Lightsail
C. AWS Storage Gateway
*D. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/126227-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages.\nWhich AWS service or feature will give the application permission to access required AWS services?
A. AWS Certificate Manager (ACM)
*B. IAM roles
C. AWS Security Hub
D. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/127402-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud.\nWhich service should be used to deploy the application?
A. AWS CloudFormation
*B. AWS Elastic Beanstalk
C. Amazon EC2
D. AWS OpsWorks
https://www.examtopics.com/discussions/amazon/view/126354-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs a content delivery network that provides secure delivery of data, videos, applications, and APIs to users globally with low latency and high transfer speeds.\nWhich AWS service meets these requirements?
*A. Amazon CloudFront
B. Elastic Load Balancing
C. Amazon S3
D. Amazon Elastic Transcoder
https://www.examtopics.com/discussions/amazon/view/128024-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to use third-party software for its workload on AWS.\nWhich AWS service or feature can the company use to purchase the software?
A. AWS Resource Access Manager
B. AWS Managed Services
C. AWS License Manager
*D. AWS Marketplace
https://www.examtopics.com/discussions/amazon/view/128065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol.\nWhich AWS service will meet these requirements?
A. Amazon S3
B. Amazon Elastic File System (Amazon EFS)
*C. Amazon FSx for Windows File Server
D. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/126229-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations.\nWhich AWS service should the company use to meet these requirements?
*A. AWS Firewall Manager
B. Amazon GuardDuty
C. Amazon Detective
D. AWS WAF
https://www.examtopics.com/discussions/amazon/view/126230-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is a responsibility of AWS, according to the AWS shared responsibility model?
A. Configure identity and access management for applications.
B. Manage encryption options for data that is stored on AWS.
C. Configure security groups for Amazon EC2 instances.
*D. Maintain the physical hardware of the infrastructure.
https://www.examtopics.com/discussions/amazon/view/126231-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance.\nWhich AWS managed service allows this?
A. VPC endpoint
*B. NAT gateway
C. Amazon PrivateLink
D. VPC peering
https://www.examtopics.com/discussions/amazon/view/126232-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)
*A. Securing the virtualization layer
B. Patching the operating system on Amazon EC2 instances
C. Enforcing a strict password policy for IAM users
*D. Patching the operating system on Amazon RDS instances
E. Configuring security groups and network ACLs
https://www.examtopics.com/discussions/amazon/view/126234-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte.\nWhich Amazon S3 storage class will meet these requirements?
A. S3 Standard
*B. S3 Glacier Flexible Retrieval
C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
D. S3 Standard-Infrequent Access (S3 Standard-IA)
https://www.examtopics.com/discussions/amazon/view/126235-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or resource can be used to identify services that have been used by a user within a specified date range?
A. Amazon S3 access control lists (ACLs)
B. AWS Certificate Manager (ACM)
C. Network Access Analyzer
*D. AWS Identity and Access Management Access Analyzer
https://www.examtopics.com/discussions/amazon/view/126237-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to engage third-party consultants to help maintain and support its AWS environment and the company’s business needs.\nWhich AWS service or resource will meet these requirements?
A. AWS Support
B. AWS Organizations
C. AWS Service Catalog
*D. AWS Partner Network (APN)
https://www.examtopics.com/discussions/amazon/view/126238-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to create Amazon QuickSight dashboards every week by using its billing data.\nWhich AWS feature or tool can the company use to meet these requirements?
A. AWS Budgets
B. AWS Cost Explorer
*C. AWS Cost and Usage Report
D. AWS Cost Anomaly Detection
https://www.examtopics.com/discussions/amazon/view/126239-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached.\nWhich AWS service meets these requirements?
*A. AWS Storage Gateway
B. AWS Snowcone
C. AWS Backup
D. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/126241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to organize its resources and track AWS costs on a detailed level. The company needs to categorize costs by business department, environment, and application.\nWhich solution will meet these requirements?
A. Access the AWS Cost Management console to organize resources, set an AWS budget, and receive notifications of unintentional usage.
*B. Use tags to organize the resources. Activate cost allocation tags to track AWS costs on a detailed level.
C. Create Amazon CloudWatch dashboards to visually organize and track costs individually.
D. Access the AWS Billing and Cost Management dashboard to organize and track resource consumption on a detailed level.
https://www.examtopics.com/discussions/amazon/view/128514-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS.\nWhich AWS service can the company use to meet this requirement?
A. AWS Step Functions
B. AWS Service Catalog
C. Amazon Simple Queue Service (Amazon SQS)
*D. AWS Batch
https://www.examtopics.com/discussions/amazon/view/126242-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services or features provide high availability and low latency by enabling failover across different AWS Regions? (Choose two.)
*A. Amazon Route 53
B. Network Load Balancer
C. Amazon S3 Transfer Acceleration
*D. AWS Global Accelerator
E. Application Load Balancer
https://www.examtopics.com/discussions/amazon/view/126244-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a way to use Amazon EC2 Auto Scaling groups to scale capacity in the AWS Cloud?
*A. Scale the number of EC2 instances in or out automatically, based on demand.
B. Use serverless EC2 instances.
C. Scale the size of EC2 instances up or down automatically, based on demand.
D. Transfer unused CPU resources between EC2 instances.
https://www.examtopics.com/discussions/amazon/view/126245-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which abilities are benefits of the AWS Cloud? (Choose two.)
A. Trade variable expenses for capital expenses.
*B. Deploy globally in minutes.
C. Plan capacity in advance of deployments.
*D. Take advantage of economies of scale.
E. Reduce dependencies on network connectivity.
https://www.examtopics.com/discussions/amazon/view/126247-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?
A. Amazon Inspector
B. AWS Web Application Firewall (AWS WAF)
C. Elastic Load Balancing (ELB)
*D. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126248-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service allows users to model and provision AWS resources using common programming languages?
A. AWS CloudFormation
B. AWS CodePipeline
*C. AWS Cloud Development Kit (AWS CDK)
D. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/127409-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
A. Reserved Instances
B. On-Demand
C. Dedicated Hosts
*D. Spot Instances
https://www.examtopics.com/discussions/amazon/view/126252-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following acts as an instance-level firewall to control inbound and outbound access?
A. Network access control list
*B. Security groups
C. AWS Trusted Advisor
D. Virtual private gateways
https://www.examtopics.com/discussions/amazon/view/126253-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company must be able to develop, test, and launch an application in the AWS Cloud quickly.\nWhich advantage of cloud computing will meet these requirements?
A. Stop guessing capacity
B. Trade fixed expense for variable expense
C. Achieve economies of scale
*D. Increase speed and agility
https://www.examtopics.com/discussions/amazon/view/128426-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has teams that have different job roles and responsibilities. The company’s employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities.\nWhich IAM resource should the company use to meet this requirement with the LEAST operational overhead?
*A. IAM user groups
B. IAM roles
C. IAM instance profiles
D. IAM policies for individual users
https://www.examtopics.com/discussions/amazon/view/126504-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can a company use to securely store and encrypt passwords for a database?
A. AWS Shield
*B. AWS Secrets Manager
C. AWS Identity and Access Management (IAM)
D. Amazon Cognito
https://www.examtopics.com/discussions/amazon/view/126254-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What can a cloud practitioner use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?
A. AWS Certificate Manager
B. AWS Systems Manager
*C. AWS Artifact
D. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/126255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)
*A. Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)
*B. Server-side encryption with AWS KMS managed keys (SSE-KMS)
C. TLS
D. SSL
E. Transparent Data Encryption (TDE)
https://www.examtopics.com/discussions/amazon/view/126325-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to integrate its online shopping website with social media login credentials.\nWhich AWS service can the company use to make this integration?
A. AWS Directory Service
B. AWS Identity and Access Management (IAM)
*C. Amazon Cognito
D. AWS IAM Identity Center (AWS Single Sign-On)
https://www.examtopics.com/discussions/amazon/view/127428-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is used to track, record, and audit configuration changes made to AWS resources?
A. AWS Shield
*B. AWS Config
C. AWS IAM
D. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/126256-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds.\nFor how much time will the customer be billed?
A. 3 hours, 5 minutes
*B. 3 hours, 5 minutes, and 6 seconds
C. 3 hours, 6 minutes
D. 4 hours
https://www.examtopics.com/discussions/amazon/view/126258-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company website is experiencing DDoS attacks.\nWhich AWS service can help protect the company website against these attacks?
A. AWS Resource Access Manager
B. AWS Amplify
*C. AWS Shield
D. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/129691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in the AWS Cloud.\nWhich AWS service or tool will meet these requirements?
A. AWS Trusted Advisor
B. Amazon Inspector
C. AWS Control Tower
*D. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/127411-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes.\nWhich AWS service or tool should the company use to meet these requirements?
*A. AWS Organizations
B. Cost Explorer
C. AWS Budgets
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/127623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is hosting an application in the AWS Cloud. The company wants to verify that underlying AWS services and general AWS infrastructure are operating normally.\nWhich combination of AWS services can the company use to gather the required information? (Choose two.)
*A. AWS Personal Health Dashboard
B. AWS Systems Manager
C. AWS Trusted Advisor
*D. AWS Service Health Dashboard
E. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/127483-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS.\nWhich AWS service or tool should the company use to meet this requirement?
A. Cloud Adoption Readiness Tool
B. AWS Migration Hub
*C. AWS Database Migration Service (AWS DMS)
D. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/127413-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which cloud concept is demonstrated by using AWS Compute Optimizer?
A. Security validation
*B. Rightsizing
C. Elasticity
D. Global reach
https://www.examtopics.com/discussions/amazon/view/126261-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive.\nWhich AWS service will meet the requirement?
A. Amazon Inspector
*B. Amazon Macie
C. AWS Identity and Access Management (IAM)
D. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/128167-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user has a stateful workload that will run on Amazon EC2 for the next 3 years.\nWhat is the MOST cost-effective pricing model for this workload?
A. On-Demand Instances
*B. Reserved Instances
C. Dedicated Instances
D. Spot Instances
https://www.examtopics.com/discussions/amazon/view/127624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?
A. AWS Support
*B. AWS customers
C. AWS Key Management Service (AWS KMS)
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/126262-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What can a user accomplish using AWS CloudTrail?
A. Generate an IAM user credentials report.
*B. Record API calls made to AWS services.
C. Assess the compliance of AWS resource configurations with policies and guidelines.
D. Ensure that Amazon EC2 instances are patched with the latest security updates.
https://www.examtopics.com/discussions/amazon/view/130356-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to host its workloads on AWS.\nWhich AWS service requires the company to update and patch the guest operating system?
A. Amazon DynamoDB
B. Amazon S3
*C. Amazon EC2
D. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/130357-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature will search for and identify AWS resources that are shared externally?
A. Amazon OpenSearch Service
B. AWS Control Tower
*C. AWS IAM Access Analyzer
D. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/126263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is migrating its workloads to the AWS Cloud. The company must retain full control of patch management for the guest operating systems that host its applications.\nWhich AWS service should the company use to meet these requirements?
A. Amazon DynamoDB
*B. Amazon EC2
C. AWS Lambda
D. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/130358-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: At what support level do users receive access to a support concierge?
A. Basic Support
B. Developer Support
C. Business Support
*D. Enterprise Support
https://www.examtopics.com/discussions/amazon/view/126265-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can a company use to visually design and build serverless applications?
A. AWS Lambda
B. AWS Batch
*C. AWS Application Composer
D. AWS App Runner
https://www.examtopics.com/discussions/amazon/view/126065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate to AWS and use the same security software it uses on premises. The security software vendor offers its security software as a service on AWS.\nWhere can the company purchase the security solution?
A. AWS Partner Solutions Finder
B. AWS Support Center
C. AWS Management Console
*D. AWS Marketplace
https://www.examtopics.com/discussions/amazon/view/126270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has deployed an Amazon EC2 instance.\nWhich option is an AWS responsibility under the AWS shared responsibility model?
A. Managing and encrypting application data
B. Installing updates and security patches of guest operating system
*C. Configuration of infrastructure devices
D. Configuration of security groups on each instance
https://www.examtopics.com/discussions/amazon/view/126969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently.\nWhich AWS service or resource will meet these requirements with the LEAST management overhead?
A. PostgreSQL on Amazon EC2
B. Amazon RDS for PostgreSQL
C. Amazon Aurora PostgreSQL-Compatible Edition
*D. Amazon Aurora Serverless
https://www.examtopics.com/discussions/amazon/view/127239-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is using Amazon DynamoDB for its application database.\nWhich tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)
A. Classify data.
B. Configure access permissions.
C. Manage encryption options.
*D. Provide public endpoints to store and retrieve data.
*E. Manage the infrastructure layer and the operating system.
https://www.examtopics.com/discussions/amazon/view/127485-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to create a globally accessible ecommerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform.\nWhich AWS service will meet these requirements?
A. Amazon EC2
B. Amazon VPC
*C. Amazon Route 53
D. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/130359-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which maintenance task is the customer’s responsibility, according to the AWS shared responsibility model?
A. Physical connectivity among Availability Zones
B. Network switch maintenance
C. Hardware updates and firmware patches
*D. Amazon EC2 updates and security patches
https://www.examtopics.com/discussions/amazon/view/129470-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to improve its security posture by reviewing user activity through API calls.\nWhich AWS service will meet this requirement?
A. AWS WAF
B. Amazon Detective
C. Amazon CloudWatch
*D. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/127843-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is migrating to the AWS Cloud and plans to run experimental workloads for 3 to 6 months on AWS.\nWhich pricing model will meet these requirements?
A. Use Savings Plans for a 3-year term.
B. Use Dedicated Hosts.
C. Buy Reserved Instances.
*D. Use On-Demand Instances.
https://www.examtopics.com/discussions/amazon/view/131648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances.\nWhich action should the company take to assess its readiness to scale for this launch?
A. Replace the EC2 instances with AWS Lambda functions.
*B. Use AWS Infrastructure Event Management (IEM) support.
C. Submit a request on AWS Marketplace to monitor the event.
D. Review the coverage reports in the AWS Cost Management console.
https://www.examtopics.com/discussions/amazon/view/126280-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit.\nWhich solution will meet these requirements with the LEAST operational overhead?
*A. Use AWS Organizations and create one account for each business unit.
B. Use a spreadsheet to control the owners and cost of each resource.
C. Use an Amazon DynamoDB table to record costs for each business unit.
D. Use the AWS Billing console to assign owners to resources and track costs.
https://www.examtopics.com/discussions/amazon/view/133860-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a time-series database service that makes it easier to store and analyze trillions of events each day.\nWhich AWS service will meet this requirement?
A. Amazon Neptune
*B. Amazon Timestream
C. Amazon Forecast
D. Amazon DocumentDB (with MongoDB compatibility)
https://www.examtopics.com/discussions/amazon/view/126060-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?
*A. Configuration management
B. Physical and environmental controls
C. Data integrity authentication
D. Identity and access management
https://www.examtopics.com/discussions/amazon/view/126208-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company often does not use all of its current Amazon EC2 capacity to run stateless workloads. The company wants to optimize its EC2 costs.\nWhich EC2 instance type will meet these requirements?
*A. Spot Instances
B. Dedicated Instances
C. Reserved Instances
D. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/127842-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to store data in Amazon S3. The company rarely access the data, and the data can be regenerated if necessary. The company wants to store the data in the most cost-effective storage class.\nWhich S3 storage class will meet this requirement?
A. S3 Standard
B. S3 Intelligent-Tiering
C. S3 Standard-Infrequent Access (S3 Standard-IA)
*D. S3 One Zone-Infrequent Access (S3 One Zone-IA)
https://www.examtopics.com/discussions/amazon/view/127414-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has migrated its workloads to AWS. The company wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?
A. AWS Support
B. AWS Cloud Adoption Framework (AWS CAF)
*C. AWS Managed Services (AMS)
D. AWS Well-Architected Framework
https://www.examtopics.com/discussions/amazon/view/126059-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to provision and manage its AWS infrastructure by using the common programming languages Typescript, Python, Java, and .NET.\nWhich AWS service will meet this requirement?
A. AWS CodeBuild
B. AWS CloudFormation
C. AWS CLI
*D. AWS Cloud Development Kit (AWS CDK)
https://www.examtopics.com/discussions/amazon/view/129598-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which Amazon EC2 pricing model provides the MOST cost savings for an always-up, right-sized database server running for a project that will last 1 year?
A. On-Demand Instances
B. Convertible Reserved Instances
C. Spot Instances
*D. Standard Reserved Instances
https://www.examtopics.com/discussions/amazon/view/129604-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud.\nWhich AWS service should the company use to meet this requirement?
A. Amazon Elastic File System (Amazon EFS)
B. Amazon Elastic Block Store (Amazon EBS)
C. Amazon S3
*D. AWS Storage Gateway
https://www.examtopics.com/discussions/amazon/view/129660-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is using the AWS Free Tier for several AWS services for an application.\nWhat will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?
*A. The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage.
B. AWS Support will contact the company to set up standard service charges.
C. The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period.
D. The company's AWS account will be frozen and can be restarted after a payment plan is established.
https://www.examtopics.com/discussions/amazon/view/129593-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets its business needs.\nWhich AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?
A. Business
B. Governance
C. Platform
*D. Operations
https://www.examtopics.com/discussions/amazon/view/129605-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its applications to the AWS Cloud. The company plans to identify and prioritize any business transformation opportunities and evaluate its AWS Cloud readiness.\nWhich AWS service or tool should the company use to meet these requirements?
*A. AWS Cloud Adoption Framework (AWS CAF)
B. AWS Managed Services (AMS)
C. AWS Well-Architected Framework
D. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129640-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company need an AWS service that provides a clear baseline of what the company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS Cloud.\nWhat AWS service or tool will meet these requirements?
A. AWS Compute Optimizer
B. AWS Cost Explorer
C. AWS Systems Manager Agent (SSM Agent)
*D. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/129613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company acquired another corporation. The company now has two AWS accounts.\nWhich AWS service or tool can the company use to consolidate the billing for these two accounts?
A. AWS Systems Manager
*B. AWS Organizations
C. AWS License Manager
D. Cost Explorer
https://www.examtopics.com/discussions/amazon/view/129614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to set up its workloads to perform their intended functions and recover quickly from failure.\nWhich pillar of the AWS Well-Architected Framework aligns with these goals?
A. Performance efficiency
B. Sustainability
*C. Reliability
D. Security
https://www.examtopics.com/discussions/amazon/view/129615-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?
A. Amazon Athena
*B. AWS Glue
C. Amazon S3
D. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/129616-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate petabytes of data from its on-premises data center to AWS. The company does not want to use an internet connection to perform the migration.\nWhich AWS service will meet these requirements?
A. AWS DataSync
B. Amazon Connect
*C. AWS Snowmobile
D. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/129695-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to receive alerts to monitor its overall operating costs for its AWS public cloud infrastructure.\nWhich AWS offering will meet these requirements?
A. Amazon EventBridge
B. Compute Savings Plans
*C. AWS Budgets
D. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/129560-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: How does the AWS Enterprise Support Concierge team help users?
A. Supporting application development
B. Providing architecture guidance
*C. Answering billing and account inquiries
D. Answering questions regarding technical support cases
https://www.examtopics.com/discussions/amazon/view/129618-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run a simulation for 3 years without interruptions.\nWhich Amazon EC2 instance purchasing option will meet these requirements MOST cost-effectively?
A. Spot Instances
*B. Reserved Instances
C. Dedicated Hosts
D. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/129619-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or resource can provide discounts on some AWS service costs in exchange for a spending commitment?
A. Amazon Detective
B. AWS Pricing Calculator
*C. Savings Plans
D. Basic Support
https://www.examtopics.com/discussions/amazon/view/129620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)
A. High availability
*B. Performance efficiency
C. Cost optimization
D. Going global in minutes
E. Continuous development
https://www.examtopics.com/discussions/amazon/view/129621-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use Amazon EC2 instances to provide a static website to users all over the world. The company needs to minimize latency for the users.\nWhich solution meets these requirements?
A. Use EC2 instances in multiple edge locations.
B. Use EC2 instances in the same Availability Zone but in different AWS Regions.
*C. Use Amazon CloudFront with the EC2 instances configured as the source.
D. Use EC2 instances in the same Availability Zone but in different AWS accounts.
https://www.examtopics.com/discussions/amazon/view/129641-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A team of researchers is going to collect data at remote locations around the world. Many locations do not have internet connectivity. The team needs to capture the data in the field, and transfer it to the AWS Cloud later.\nWhich AWS service will support these requirements?
A. AWS Outposts
B. AWS Transfer Family
*C. AWS Snow Family
D. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are benefits that a company receives when it moves an on-premises production workload to AWS? (Choose two.)
A. AWS trains the company's staff on the use of all the AWS services.
B. AWS manages all security in the cloud.
C. AWS offers free support from technical account managers (TAMs).
*D. AWS offers high availability.
*E. AWS provides economies of scale.
https://www.examtopics.com/discussions/amazon/view/129642-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has decided to adopt Amazon EC2 infrastructure and wants to scale various stateless services for short-term usage.\nWhich EC2 pricing model is MOST cost-efficient to meet these requirements?
*A. Spot Instances
B. On-Demand Instances
C. Reserved Instances
D. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/129822-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are benefits of AWS Trusted Advisor? (Choose two.)
A. Access to Amazon Simple Queue Service (Amazon SQS)
*B. Cost optimization recommendations
C. Hourly refresh of the service limit checks
*D. Security checks
E. AWS Identity and Access Management (IAM) approval management
https://www.examtopics.com/discussions/amazon/view/129644-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to save costs by archiving data that is no longer frequently accessed by end users.\nWhich Amazon S3 feature will meet this requirement?
A. S3 Versioning
*B. S3 Lifecycle
C. S3 Object Lock
D. S3 Inventory
https://www.examtopics.com/discussions/amazon/view/129626-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which cloud computing advantage is a company applying when it uses AWS Regions to increase application availability to users in different countries?
A. Pay-as-you-go pricing
B. Capacity forecasting
C. Economies of scale
*D. Global reach
https://www.examtopics.com/discussions/amazon/view/129627-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants an AWS service to collect and process 10 TB of data locally and transfer the data to AWS. The company has intermittent connectivity.\nWhich AWS service will meet these requirements?
A. AWS Database Migration Service (AWS DMS)
B. AWS DataSync
C. AWS Backup
*D. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/129628-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is an AWS Well-Architected Framework design principle for operational excellence in the AWS Cloud?
A. Go global in minutes.
*B. Make frequent, small, reversible changes.
C. Implement a strong foundation of identity and access management
D. Stop spending money on hardware infrastructure for data center operations.
https://www.examtopics.com/discussions/amazon/view/129629-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is a benefit of using AWS serverless computing?
A. Application deployment and management are not required.
B. Application security will be fully managed by AWS.
C. Monitoring and logging are not needed.
*D. Management of infrastructure is offloaded to AWS.
https://www.examtopics.com/discussions/amazon/view/129646-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A developer wants AWS users to access AWS services by using temporary security credentials.\nWhich AWS service or feature should the developer use to provide these credentials?
A. IAM policies
B. IAM user groups
*C. AWS Security Token Service (AWS STS)
D. AWS IAM Identity Center (AWS Single Sign-On)
https://www.examtopics.com/discussions/amazon/view/129562-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A global company wants to use a managed security service for protection from SQL injection attacks. The service also must provide detailed logging information about access to the company's ecommerce applications.\nWhich AWS service will meet these requirements?
A. AWS Network Firewall
B. Amazon RDS for SQL Server
C. Amazon GuardDuty
*D. AWS WAF
https://www.examtopics.com/discussions/amazon/view/129662-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is migrating its on-premises server to an Amazon EC2 instance. The server must stay active at all times for the next 12 months.\nWhich EC2 pricing option is the MOST cost-effective for the company's workload?
A. On-Demand
B. Dedicated Hosts
C. Spot Instances
*D. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/131699-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is the customer's responsibility under the AWS shared responsibility model? (Choose two.)
A. Maintain the configuration of infrastructure devices.
B. Maintain patching and updates within the hardware infrastructure.
*C. Maintain the configuration of guest operating systems and applications.
*D. Manage decisions involving encryption options.
E. Maintain infrastructure hardware.
https://www.examtopics.com/discussions/amazon/view/129664-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to verify if multi-factor authentication (MFA) is enabled for all users within its AWS accounts.\nWhich AWS service or resource will meet this requirement?
A. AWS Cost and Usage Report
*B. IAM credential reports
C. AWS Artifact
D. Amazon CloudFront reports
https://www.examtopics.com/discussions/amazon/view/129962-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company uses AWS security services and tools. The company needs a service to help manage the security alerts and must organize the alerts into a single dashboard.\nWhich AWS service should the company use to meet these requirements?
A. Amazon GuardDuty
B. Amazon Inspector
C. Amazon Macie
*D. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/129647-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run its workloads in the AWS Cloud effectively, reduce management overhead, and improve processes.\nWhich AWS Well-Architected Framework pillar represents these requirements?
A. Reliability
*B. Operational excellence
C. Performance efficiency
D. Cost optimization
https://www.examtopics.com/discussions/amazon/view/129632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities.\nWhich AWS service will meet these requirements?
A. Amazon GuardDuty
B. Amazon Detective
*C. Amazon Macie
D. AWS Shield
https://www.examtopics.com/discussions/amazon/view/129634-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?
A. Amazon GuardDuty
B. AWS Security Hub
*C. AWS Artifact
D. AWS Shield
https://www.examtopics.com/discussions/amazon/view/129666-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys.\nWhat is the SIMPLEST way to provide this information?
A. Create an IAM user account for the auditor, granting the auditor administrator permissions.
B. Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.
*C. Download the IAM credential report, then provide the report to the auditor.
D. Download the AWS Trusted Advisor report, then provide the report to the auditor.
https://www.examtopics.com/discussions/amazon/view/129566-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task can a company perform by using security groups in the AWS Cloud?
*A. Allow access to an Amazon EC2 instance through only a specific port.
B. Deny access to malicious IP addresses at a subnet level.
C. Protect data that is cached by Amazon CloudFront.
D. Apply a stateless firewall to an Amazon EC2 instance.
https://www.examtopics.com/discussions/amazon/view/129653-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to run a compute-intensive workload that uses graphics processing units (GPUs).\nWhich Amazon EC2 instance type should the company use?
*A. Accelerated computing
B. Compute optimized
C. Storage optimized
D. General purpose
https://www.examtopics.com/discussions/amazon/view/129903-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)
*A. They are stateless.
B. They are stateful.
C. They evaluate all rules before allowing traffic.
*D. They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic.
E. They operate at the instance level.
https://www.examtopics.com/discussions/amazon/view/129654-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)
A. Performance and capacity management
*B. Data engineering
*C. Continuous integration and continuous delivery (CI/CD)
D. Infrastructure protection
E. Change and release management
https://www.examtopics.com/discussions/amazon/view/129638-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: According to the AWS shared responsibility model, the customer is responsible for applying the latest security updates and patches for which of the following?
A. Amazon DynamoDB
*B. Amazon EC2 instances
C. Amazon RDS instances
D. Amazon S3
https://www.examtopics.com/discussions/amazon/view/129648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which Amazon S3 storage class is MOST cost-effective for unknown access patterns?
A. S3 Standard
B. S3 Standard-Infrequent Access (S3 Standard-IA)
C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
*D. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/129649-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)
A. Observability
B. Incident and problem management
*C. Incident response
*D. Infrastructure protection
E. Availability and continuity
https://www.examtopics.com/discussions/amazon/view/129655-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a managed IAM policy that does not grant the necessary permissions for users to accomplish required tasks.\nHow can this be resolved?
A. Enable AWS Shield Advanced.
*B. Create a custom IAM policy.
C. Use a third-party web application firewall (WAF) managed rule from the AWS Marketplace.
D. Use AWS Key Management Service (AWS KMS) to create a customer-managed key.
https://www.examtopics.com/discussions/amazon/view/129650-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Who is responsible for managing IAM user access and secret keys according to the AWS shared responsibility model?
A. IAM access and secret keys are static, so there is no need to rotate them.
*B. The customer is responsible for rotating keys.
C. AWS will rotate the keys whenever required.
D. The AWS Support team will rotate keys when requested by the customer.
https://www.examtopics.com/discussions/amazon/view/129651-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to run a pre-installed third-party firewall on an Amazon EC2 instance.\nWhich AWS service or feature can provide this solution?
A. Network ACLs
B. Security groups
*C. AWS Marketplace
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/129904-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud benefit gives a company the ability to quickly deploy cloud resources to access compute, storage, and database infrastructures in a matter of minutes?
A. Elasticity
B. Cost savings
*C. Agility
D. Reliability
https://www.examtopics.com/discussions/amazon/view/129969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?
A. Security awareness and training
B. Development of an IAM password policy
C. Patching of the guest operating system
*D. Physical and environmental controls
https://www.examtopics.com/discussions/amazon/view/129905-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a characteristic of the AWS account root user?
A. The root user is the only user that can be configured with multi-factor authentication (MFA).
B. The root user is the only user that can access the AWS Management Console.
*C. The root user is the first sign-in identity that is available when an AWS account is created.
D. The root user has a password that cannot be changed.
https://www.examtopics.com/discussions/amazon/view/129740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An Amazon EC2 instance previously used for development is inaccessible and no longer appears in the AWS Management Console.\nWhich AWS service should be used to determine what action made this EC2 instance inaccessible?
A. Amazon CloudWatch Logs
B. AWS Security Hub
C. Amazon Inspector
*D. AWS CloudTraiI
https://www.examtopics.com/discussions/amazon/view/130557-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company's application developers need to quickly provision and manage AWS services by using scripts.\nWhich AWS offering should the developers use to meet these requirements?
*A. AWS CLI
B. AWS CodeBuild
C. AWS Cloud Adoption Framework (AWS CAF)
D. AWS Systems Manager Session Manager
https://www.examtopics.com/discussions/amazon/view/129742-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate unstructured data to AWS. The data needs to be securely moved with inflight encryption and end-to-end data validation.\nWhich AWS service will meet these requirements?
A. AWS Application Migration Service
B. Amazon Elastic File System (Amazon EFS)
*C. AWS DataSync
D. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129743-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A development team wants to deploy multiple test environments for an application in a fast, repeatable manner.\nWhich AWS service should the team use?
A. Amazon EC2
*B. AWS CloudFormation
C. Amazon QuickSight
D. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/129748-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to quickly implement a continuous integration/continuous delivery (CI/CD) pipeline.\nWhich AWS service will meet this requirement?
A. AWS Config
B. Amazon Cognito
C. AWS DataSync
*D. AWS CodeStar
https://www.examtopics.com/discussions/amazon/view/129754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud deployment model uses AWS Outposts as part of the application deployment infrastructure?
A. On-premises
B. Serverless
C. Cloud-native
*D. Hybrid
https://www.examtopics.com/discussions/amazon/view/129763-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a fully managed graph database service on AWS?
A. Amazon Aurora
B. Amazon FSx
C. Amazon DynamoDB
*D. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/129765-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service could an administrator use to provide desktop environments for several employees?
A. AWS Organizations
B. AWS Fargate
C. AWS WAF
*D. AWS WorkSpaces
https://www.examtopics.com/discussions/amazon/view/129767-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature gives users the ability to capture information about network traffic in a VPC?
*A. VPC Flow Logs
B. Amazon Inspector
C. VPC route tables
D. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/129769-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?
A. Amazon Elastic Block Store (Amazon EBS)
*B. Amazon EC2 instance store
C. Amazon Elastic File System (Amazon EFS)
D. Amazon S3
https://www.examtopics.com/discussions/amazon/view/129772-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to provide access to Windows file shares in AWS from its on-premises workloads. The company does not want to provision any additional infrastructure or applications in its data center.\nWhich AWS service will meet these requirements?
*A. Amazon FSx File Gateway
B. AWS DataSync
C. Amazon S3
D. AWS Snow Family
https://www.examtopics.com/discussions/amazon/view/129776-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants durable storage for static content and infinitely scalable data storage infrastructure at the lowest cost.\nWhich AWS service should the company choose?
A. Amazon Elastic Block Store (Amazon EBS)
*B. Amazon S3
C. AWS Storage Gateway
D. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/129777-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An ecommerce company wants to use Amazon EC2 Auto Scaling to add and remove EC2 instances based on CPU utilization.\nWhich AWS service or feature can initiate an Amazon EC2 Auto Scaling action to achieve this goal?
A. Amazon Simple Queue Service (Amazon SQS)
B. Amazon Simple Notification Service (Amazon SNS)
C. AWS Systems Manager
*D. Amazon CloudWatch alarm
https://www.examtopics.com/discussions/amazon/view/129764-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to transform its workforce by attracting and developing a digitally fluent high-performance workforce. The company wants to attract a diverse and inclusive workforce with appropriate mix of technical and non-technical skills.\nWhich AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?
A. Business
*B. People
C. Platform
D. Operations
https://www.examtopics.com/discussions/amazon/view/130576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to move its on-premises databases to managed cloud database services by using a simplified migration process.\nWhich AWS service or tool can help the company meet this requirement?
A. AWS Storage Gateway
B. AWS Application Migration Service
C. AWS DataSync
*D. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/130577-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs a fully managed file server that natively supports Microsoft workloads and file systems. The file server must also support the SMB protocol.\nWhich AWS service should the company use to meet these requirements?
A. Amazon Elastic File System (Amazon EFS)
B. Amazon FSx for Lustre
*C. Amazon FSx for Windows File Server
D. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/130578-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data into comma-separated values (.csv) files. A developer wants to write a simple query that can read all of these files and generate a summary report.\nWhich AWS service or feature should the developer use to meet these requirements with the LEAST amount of operational overhead?
A. Amazon S3 Select
*B. Amazon Athena
C. Amazon Redshift
D. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129766-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS feature provides a no-cost platform for AWS users to join community groups, ask questions, find answers, and read community-generated articles about best practices?
A. AWS Knowledge Center
*B. AWS re:Post
C. AWS IQ
D. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/129768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to search for text in documents that are stored in Amazon S3.\nWhich AWS service will meet these requirements?
*A. Amazon Kendra
B. Amazon Rekognition
C. Amazon Polly
D. Amazon Lex
https://www.examtopics.com/discussions/amazon/view/129770-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services make use of global edge locations? (Choose two.)
A. AWS Fargate
*B. Amazon CloudFront
*C. AWS Global Accelerator
D. AWS Wavelength
E. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/129771-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user needs a relational database but does not have the resources to manage the hardware, resiliency, and replication.\nWhich AWS service option meets the user's requirements?
A. Run MySQL on Amazon Elastic Container Service (Amazon ECS).
B. Run MySQL on Amazon EC2.
*C. Choose Amazon RDS for MySQL.
D. Choose Amazon ElastiCache for Redis.
https://www.examtopics.com/discussions/amazon/view/130584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to deploy applications in the AWS Cloud as quickly as possible. The company also needs to minimize the complexity that is related to the management of AWS resources.\nWhich AWS service should the company use to meet these requirements?
A. AWS Config
*B. AWS Elastic Beanstalk
C. Amazon EC2
D. Amazon Personalize
https://www.examtopics.com/discussions/amazon/view/129773-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which mechanism allows developers to access AWS services from application code?
*A. AWS Software Development Kit
B. AWS Management Console
C. AWS CodePipeline
D. AWS Config
https://www.examtopics.com/discussions/amazon/view/130586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is migrating to the AWS Cloud. The company wants to understand and identify potential security misconfigurations or unexpected behaviors. The company wants to prioritize any protective controls it might need.\nWhich AWS Cloud Adoption Framework (AWS CAF) security perspective capability will meet these requirements?
A. Identity and access management
*B. Threat detection
C. Platform engineering
D. Availability and continuity management
https://www.examtopics.com/discussions/amazon/view/129892-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to establish a private network connection between AWS and its corporate network.\nWhich AWS service or feature will meet this requirement?
A. Amazon Connect
B. Amazon Route 53
*C. AWS Direct Connect
D. VPC peering
https://www.examtopics.com/discussions/amazon/view/129805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services or features give users the ability to create a network connection between two VPCs? (Choose two.)
A. VPC endpoints
B. Amazon Route 53
*C. VPC peering
D. AWS Direct Connect
*E. AWS Transit Gateway
https://www.examtopics.com/discussions/amazon/view/129915-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service converts text to lifelike voices?
A. Amazon Transcribe
B. Amazon Rekognition
*C. Amazon Polly
D. Amazon Textract
https://www.examtopics.com/discussions/amazon/view/129806-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use application stacks to run a workload in the AWS Cloud. The company wants to use pre-configured instances.\nWhich AWS service will meet these requirements?
*A. Amazon Lightsail
B. Amazon Athena
C. AWS Outposts
D. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129995-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services are supported by Savings Plans? (Choose two.)
*A. Amazon EC2
B. Amazon RDS
*C. Amazon SageMaker
D. Amazon Redshift
E. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/129779-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool can provide rightsizing recommendations for Amazon EC2 resources at no additional cost?
A. AWS Well-Architected Tool
B. Amazon CloudWatch
*C. AWS Cost Explorer
D. Amazon S3 analytics
https://www.examtopics.com/discussions/amazon/view/129809-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company operates a petabyte-scale data warehouse to analyze its data. The company wants a solution that will not require manual hardware and software management.\nWhich AWS service will meet these requirements?
A. Amazon DocumentDB (with MongoDB compatibility)
*B. Amazon Redshift
C. Amazon Neptune
D. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/129922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A library wants to automate the classification of electronic books based on the contents of the books.\nWhich AWS service should the library use to meet this requirement?
A. Amazon Redshift
B. Amazon CloudSearch
*C. Amazon Comprehend
D. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/129780-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is a responsibility of AWS, according to the AWS shared responsibility model?
A. Encryption of application data
B. Authentication of application users
*C. Protection of physical network infrastructure
D. Configuration of firewalls
https://www.examtopics.com/discussions/amazon/view/129810-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which options are AWS Cloud Adoption Framework (AWS CAF) cloud transformation journey recommendations? (Choose two.)
*A. Envision phase
*B. Align phase
C. Assess phase
D. Mobilize phase
E. Migrate and modernize phase
https://www.examtopics.com/discussions/amazon/view/129811-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to generate a list of IAM users. The company also wants to view the status of various credentials that are associated with the users, such as password, access keys, and multi-factor authentication (MFA) devices.\nWhich AWS service or feature will meet these requirements?
*A. IAM credential report
B. AWS IAM Identity Center (AWS Single Sign-On)
C. AWS Identity and Access Management Access Analyzer
D. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/129898-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments.\nWhich pillar of the AWS Well-Architected Framework does this design support?
A. Security
B. Performance efficiency
*C. Operational excellence
D. Reliability
https://www.examtopics.com/discussions/amazon/view/129812-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to track tags, buckets, and prefixes for its Amazon S3 objects.\nWhich S3 feature will meet this requirement?
*A. S3 Inventory report
B. S3 Lifecycle
C. S3 Versioning
D. S3 ACLs
https://www.examtopics.com/discussions/amazon/view/129899-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to allow users to authenticate and authorize multiple AWS accounts by using a single set of credentials.\nWhich AWS service or resource will meet this requirement?
A. AWS Organizations
B. IAM user
*C. AWS IAM Identity Center (AWS Single Sign-On)
D. AWS Control Tower
https://www.examtopics.com/discussions/amazon/view/130740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company created an Amazon EC2 instance. The company wants to control the incoming and outgoing network traffic at the instance level.\nWhich AWS resource or service will meet this requirement?
A. AWS Shield
*B. Security groups
C. Network Access Analyzer
D. VPC endpoints
https://www.examtopics.com/discussions/amazon/view/129816-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use the AWS Cloud to deploy an application globally.\nWhich architecture deployment model should the company use to meet this requirement?
*A. Multi-Region
B. Single-Region
C. Multi-AZ
D. Single-AZ
https://www.examtopics.com/discussions/amazon/view/130199-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a web application to interact with various AWS services.\nWhich AWS service or resource will meet this requirement?
A. AWS CloudShell
B. AWS Marketplace
*C. AWS Management Console
D. AWS CLI
https://www.examtopics.com/discussions/amazon/view/129781-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is migrating its applications from on-premises to the AWS Cloud. The company wants to ensure that the applications are assigned only the minimum permissions that are needed to perform all operations.\nWhich AWS service will meet these requirements?
*A. AWS Identity and Access Management (IAM)
B. Amazon CloudWatch
C. Amazon Macie
D. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/129782-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which options are AWS Cloud Adoption Framework (AWS CAF) governance perspective capabilities? (Choose two.)
A. Identity and access management
*B. Cloud financial management
*C. Application portfolio management
D. Innovation management
E. Product management
https://www.examtopics.com/discussions/amazon/view/129821-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides a single location to track the progress of application migrations?
A. AWS Application Discovery Service
B. AWS Application Migration Service
C. AWS Service Catalog
*D. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/130754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI).\nWhich actions can a system administrator take to connect to the EC2 instance? (Choose two.)
*A. Use Amazon EC2 Instance Connect.
B. Use a Remote Desktop Protocol (RDP) connection.
C. Use AWS Batch.
*D. Use AWS Systems Manager Session Manager.
E. Use Amazon Connect.
https://www.examtopics.com/discussions/amazon/view/129783-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which architecture concept describes the ability to deploy resources on demand and release resources when they are no longer needed?
A. High availability
B. Decoupled architecture
C. Resilience
*D. Elasticity
https://www.examtopics.com/discussions/amazon/view/129577-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task requires a user to sign in as the AWS account root user?
A. The deletion of IAM users
*B. The deletion of an AWS account
C. The creation of an organization in AWS Organizations
D. The deletion of Amazon EC2 instances
https://www.examtopics.com/discussions/amazon/view/129576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What does the Amazon S3 Intelligent-Tiering storage class offer?
A. Payment flexibility by reserving storage capacity
B. Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume
*C. Automatic cost savings by moving objects between tiers based on access pattern changes
D. Secure, durable, and lowest cost storage for data archival
https://www.examtopics.com/discussions/amazon/view/129784-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs Amazon EC2 instances for a workload that can tolerate interruptions.\nWhich EC2 instance purchasing option meets this requirement with the LARGEST discount compared to On-Demand prices?
*A. Spot Instances
B. Convertible Reserved Instances
C. Standard Reserved Instances
D. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/129575-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to migrate to the AWS Cloud. The company wants to identify measurable business outcomes that will explain the value of the company's decision to migrate.\nWhich phase of the cloud transformation journey includes these activities?
*A. Envision
B. Align
C. Scale
D. Launch
https://www.examtopics.com/discussions/amazon/view/129658-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or component allows inbound traffic from the internet to access a VPC?
*A. Internet gateway
B. NAT gateway
C. AWS WAF
D. VPC peering
https://www.examtopics.com/discussions/amazon/view/129574-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can companies use to create infrastructure from code?
A. Amazon Elastic Kubernetes Service (Amazon EKS)
B. AWS Outposts
C. AWS CodePipeline
*D. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/129572-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which guideline is a well-architected design principle for building cloud applications?
A. Keep static data closer to compute resources.
B. Provision resources for peak capacity.
*C. Design for automated recovery from failure.
D. Use tightly coupled components.
https://www.examtopics.com/discussions/amazon/view/129883-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to move 75 petabytes of data from its on-premises data centers to AWS.\nWhich AWS service should the company use to meet these requirements MOST cost-effectively?
A. AWS Snowball Edge Storage Optimized
*B. AWS Snowmobile
C. AWS Direct Connect
D. AWS Storage Gateway
https://www.examtopics.com/discussions/amazon/view/131193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)
A. Resource scalability
*B. Performance efficiency
C. System elasticity
D. Agile development
*E. Operational excellence
https://www.examtopics.com/discussions/amazon/view/129657-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to connect its on-premises data center to the AWS Cloud. The company needs a dedicated, low-latency connection with consistent network performance.\nWhich AWS service will meet these requirements?
A. AWS Global Accelerator
B. Amazon CloudFront
*C. AWS Direct Connect
D. AWS Managed VPN
https://www.examtopics.com/discussions/amazon/view/129656-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which design principles should a company apply to AWS Cloud workloads to maximize sustainability and minimize environmental impact? (Choose two.)
*A. Maximize utilization of Amazon EC2 instances.
B. Minimize utilization of Amazon EC2 instances.
C. Minimize usage of managed services.
D. Force frequent application reinstallations by users.
*E. Reduce the need for users to reinstall applications.
https://www.examtopics.com/discussions/amazon/view/129884-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: In which ways does the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises data centers? (Choose two.)
*A. AWS replaces upfront capital expenditures with pay-as-you-go costs.
B. AWS is designed for high availability, which eliminates user downtime.
C. AWS eliminates the need for on-premises IT staff.
*D. AWS uses economies of scale to continually reduce prices.
E. AWS offers a single pricing model for Amazon EC2 instances.
https://www.examtopics.com/discussions/amazon/view/129571-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources.\nWhich AWS service or feature can be used to meet these requirements?
A. AWS Local Zones
B. Availability Zones
*C. AWS Outposts
D. AWS Wavelength Zones
https://www.examtopics.com/discussions/amazon/view/129570-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following AWS services are serverless? (Choose two.)
A. AWS Outposts
B. Amazon EC2
C. Amazon Elastic Kubernetes Service (Amazon EKS)
*D. AWS Fargate
*E. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/130755-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: When a user wants to utilize their existing per-socket, per-core, or per-virtual machine software licenses for a Microsoft Windows server running on AWS, which Amazon EC2 instance type is required?
A. Spot Instances
B. Dedicated Instances
*C. Dedicated Hosts
D. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/130756-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A solutions architect needs to maintain a fleet of Amazon EC2 instances so that any impaired instances are replaced with new ones.\nWhich AWS service should the solutions architect use?
A. Amazon Elastic Container Service (Amazon ECS)
B. Amazon GuardDuty
C. AWS Shield
*D. AWS Auto Scaling
https://www.examtopics.com/discussions/amazon/view/129786-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides on-premises applications with low-latency access to data that is stored in the AWS Cloud?
A. Amazon CloudFront
*B. AWS Storage Gateway
C. AWS Backup
D. AWS DataSync
https://www.examtopics.com/discussions/amazon/view/129787-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What does Amazon CloudFront provide?
A. Automatic scaling for all resources to power an application from a single unified interface
*B. Secure delivery of data, videos, applications, and APIs to users globally with low latency
C. Ability to directly manage traffic globally through a variety of routing types, including latency-based routing, geo DNS, geoproximity, and weighted round robin
D. Automatic distribution of incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and AWS Lambda functions
https://www.examtopics.com/discussions/amazon/view/129888-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service supports the deployment and management of applications in the AWS Cloud?
A. Amazon CodeGuru
B. AWS Fargate
C. AWS CodeCommit
*D. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/129889-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to integrate natural language processing (NLP) into business intelligence (BI) dashboards. The company wants to ask questions and receive answers with relevant visualizations.\nWhich AWS service or tool will meet these requirements?
A. Amazon Macie
B. Amazon Rekognition
*C. Amazon QuickSight Q
D. Amazon Lex
https://www.examtopics.com/discussions/amazon/view/130757-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which Amazon S3 feature or storage class uses the AWS backbone network and edge locations to reduce latencies from the end user to Amazon S3?
A. S3 Cross-Region Replication
*B. S3 Transfer Acceleration
C. S3 Event Notifications
D. S3 Standard-Infrequent Access (S3 Standard-IA)
https://www.examtopics.com/discussions/amazon/view/129890-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?
A. Amazon Aurora
*B. Amazon DynamoDB
C. Amazon RDS
D. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/131206-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is a relational database compatible with MySQL and PostgreSQL?
A. Amazon Redshift
B. Amazon DynamoDB
*C. Amazon Aurora
D. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/129788-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?
A. Use a monolithic design.
B. Design for automation.
C. Design for single points of failure.
*D. Loosely couple components.
https://www.examtopics.com/discussions/amazon/view/129789-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which benefit of cloud computing gives a company the ability to deploy applications to users all over the world through a network of AWS Regions, Availability Zones, and edge locations?
A. Economy of scale
*B. Global reach
C. Agility
D. High availability
https://www.examtopics.com/discussions/amazon/view/129790-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service makes it easier to monitor and troubleshoot application logs and cloud resources?
A. Amazon EC2
B. AWS Identity and Access Management (IAM)
*C. Amazon CloudWatch
D. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/129791-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service uses AWS Compute Optimizer to provide sizing recommendations based on workload metrics?
*A. Amazon EC2
B. Amazon RDS
C. Amazon Lightsail
D. AWS Step Functions
https://www.examtopics.com/discussions/amazon/view/129792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service will help a company plan a migration to AWS by collecting the configuration, usage, and behavior data of on-premises data centers?
A. AWS Resource Groups
*B. AWS Application Discovery Service
C. AWS Service Catalog
D. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/129793-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service uses a combination of publishers and subscribers?
A. AWS Lambda
*B. Amazon Simple Notification Service (Amazon SNS)
C. Amazon CloudWatch
D. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/129794-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is in the early stages of planning a migration to AWS. The company wants to obtain the monthly predicted total AWS cost of ownership for future Amazon EC2 instances and associated storage.\nWhich AWS service or tool should the company use to meet these requirements?
*A. AWS Pricing Calculator
B. AWS Compute Optimizer
C. AWS Trusted Advisor
D. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/129795-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool will monitor AWS resources and applications in real time?
A. AWS Trusted Advisor
*B. Amazon CloudWatch
C. AWS CloudTrail
D. AWS Cost Explorer
https://www.examtopics.com/discussions/amazon/view/137916-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the business perspective?
A. Program and project management
*B. Data science
C. Observability
D. Change and release management
https://www.examtopics.com/discussions/amazon/view/137917-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS resource can help a company reduce its costs in exchange for a usage commitment when using Amazon EC2 instances?
*A. Compute Savings Plans
B. Auto Scaling group
C. On-Demand Instance
D. EC2 instance store
https://www.examtopics.com/discussions/amazon/view/137918-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes a capability for well-designed data and analytics architecture?
A. Security
B. Governance
C. Operations
*D. Platform
https://www.examtopics.com/discussions/amazon/view/137919-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which options are AWS Cloud Adoption Framework (AWS CAF) people perspective capabilities? (Choose two.)
*A. Organizational alignment
B. Portfolio management
*C. Organization design
D. Risk management
E. Modern application development
https://www.examtopics.com/discussions/amazon/view/137920-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs a bridge between technology and business to help evolve to a culture of continuous growth and learning.\nWhich perspective in the AWS Cloud Adoption Framework (AWS CAF) serves as this bridge?
*A. People
B. Governance
C. Operations
D. Security
https://www.examtopics.com/discussions/amazon/view/137921-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is a responsibility of AWS under the AWS shared responsibility model?
A. Application data security
B. Patch management for applications that run on Amazon EC2 instances
*C. Patch management of the underlying infrastructure for managed services
D. Application identity and access management
https://www.examtopics.com/discussions/amazon/view/137922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or resource can identify and provide reports on IAM resources in one AWS account that is shared with another AWS account?
A. IAM credential report
B. AWS IAM Identity Center (AWS Single Sign-On)
*C. AWS Identity and Access Management Access Analyzer
D. Amazon Cognito user pool
https://www.examtopics.com/discussions/amazon/view/139884-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Well-Architected Framework pillar focuses on structured and streamlined allocation of computing resources?
A. Reliability
B. Operational excellence
*C. Performance efficiency
D. Sustainability
https://www.examtopics.com/discussions/amazon/view/138027-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud Adoption Framework (AWS CAF) capabilities belong to the governance perspective? (Choose two.)
*A. Program and project management
B. Product management
C. Portfolio management
*D. Risk management
E. Event management
https://www.examtopics.com/discussions/amazon/view/138028-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use AWS Managed Services (AMS) for operational support and wants to understand the scope of AMS.\nWhich AMS feature will meet these requirements?
*A. Landing zone and network management
B. Customer application development
C. DevSecOps pipeline configuration
D. Application log monitoring
https://www.examtopics.com/discussions/amazon/view/138046-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB.\nWhich AWS service will meet this requirement?
A. AWS Migration Hub
*B. AWS Database Migration Service (AWS DMS)
C. Migration Evaluator
D. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/138047-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is in the process of finding correct Amazon EC2 instance types and sizes to meet its performance and capacity requirements. The company wants to find the lowest possible cost.\nWhich option accurately characterizes the company's actions?
A. Auto Scaling
B. Storage tiering
*C. Rightsizing
D. Instance scheduling
https://www.examtopics.com/discussions/amazon/view/138048-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to manage sign-in security for workforce users. The company needs to create workforce users and centrally manage their access across all the company's AWS accounts and applications.\nWhich AWS service will meet these requirements?
A. AWS Audit Manager
B. Amazon Cognito
C. AWS Security Hub
*D. AWS IAM Identity Center (AWS Single Sign-On)
https://www.examtopics.com/discussions/amazon/view/138561-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a report that lists the status of multi-factor authentication (MFA) devices that all users in the company's AWS account use.\nWhich AWS feature or service will meet this requirement?
A. AWS Cost and Usage Reports
*B. IAM credential reports
C. Detailed Billing Reports -\nD AWS Cost Explorer reports
https://www.examtopics.com/discussions/amazon/view/144065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use machine learning capabilities to analyze log data from its Amazon EC2 instances and efficiently conduct security investigations.\nWhich AWS service will meet these requirements?
A. Amazon Inspector
B. Amazon QuickSight
*C. Amazon Detective -\nD Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/137985-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is launching a mobile app in the AWS Cloud. The company wants the app's users to sign in through social media identity providers (IdPs).\nWhich AWS service will meet this requirement?
A. AWS Lambda
*B. Amazon Cognito
C. AWS Secrets Manager
D. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/137984-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which complimentary AWS service or tool creates data-driven business cases for cloud planning?
*A. Migration Evaluator
B. AWS Billing Conductor
C. AWS Billing Console
D. Amazon Forecast
https://www.examtopics.com/discussions/amazon/view/137978-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which cloud concept is demonstrated by using AWS Cost Explorer?
*A. Rightsizing
B. Reliability
C. Resilience
D. Modernization
https://www.examtopics.com/discussions/amazon/view/140118-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to deploy a non-containerized Java-based web application on AWS. The company wants to use a managed service to quickly deploy the application. The company wants the service to automatically provision capacity, load balance, scale, and monitor application health.\nWhich AWS service will meet these requirements?
A. Amazon Elastic Container Service (Amazon ECS)
B. AWS Lambda
C. Amazon Elastic Kubernetes Service (Amazon EKS)
*D. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/137983-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool gives users the ability to connect with AWS and deploy resources programmatically?
A. Amazon QuickSight
B. AWS PrivateLink
C. AWS Direct Connect
*D. AWS SDKs
https://www.examtopics.com/discussions/amazon/view/137982-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has deployed a web application to Amazon EC2 instances. The EC2 instances have low usage.\nWhich AWS service or feature should the company use to rightsize the EC2 instances?
A. AWS Config
B. AWS Cost Anomaly Detection
C. AWS Budgets
*D. AWS Compute Optimizer
https://www.examtopics.com/discussions/amazon/view/138777-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources.\nWhich AWS service will meet this requirement?
A. AWS Batch
B. AWS Elastic Disaster Recovery
*C. AWS Backup
D. Amazon FSx
https://www.examtopics.com/discussions/amazon/view/138049-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to categorize and track AWS usage cost based on business categories.\nWhich AWS service or feature should the company use to meet these requirements?
*A. Cost allocation tags
B. AWS Organizations
C. AWS Security Hub
D. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/137986-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can migrate data between AWS storage services?
*A. AWS DataSync
B. AWS Direct Connect
C. AWS Lake Formation
D. Amazon S3
https://www.examtopics.com/discussions/amazon/view/140726-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which statements represent the cost-effectiveness of the AWS Cloud? (Choose two.)
*A. Users can trade fixed expenses for variable expenses.
B. Users can deploy all over the world in minutes.
C. AWS offers increased speed and agility.
D. AWS is responsible for patching the infrastructure.
*E. Users benefit from economies of scale.
https://www.examtopics.com/discussions/amazon/view/142943-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to design its cloud architecture so that it can support development innovations, and continuously improve processes and procedures.\nThis is an example of which pillar of the AWS Well-Architected Framework?
A. Security
B. Performance efficiency
*C. Operational excellence
D. Reliability
https://www.examtopics.com/discussions/amazon/view/144068-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to consolidate the billing for multiple AWS accounts. The company needs to use one account to pay on behalf of all the other accounts.\nWhich AWS service or tool should the company use to meet this requirement?
A. AWS Trusted Advisor
*B. AWS Organizations
C. AWS Budgets
D. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/143146-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is moving some of its on-premises IT services to the AWS Cloud. The finance department wants to see the entire bill so it can forecast spending limits.\nWhich AWS service can the company use to set spending limits and receive notifications if those limits are exceeded?
A. AWS Cost and Usage Reports
*B. AWS Budgets
C. AWS Organizations consolidated billing
D. Cost Explorer
https://www.examtopics.com/discussions/amazon/view/142696-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Support plans provide access to an AWS technical account manager (TAM)? (Choose two.)
A. AWS Basic Support
B. AWS Developer Support
C. AWS Business Support
*D. AWS Enterprise On-Ramp Support
*E. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/141581-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Where can users find examples of AWS Cloud solution designs?
A. AWS Marketplace
B. AWS Service Catalog
*C. AWS Architecture Center
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/141313-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is the responsibility of a company that is using Amazon RDS?
A. Provision the underlying infrastructure.
*B. Create IAM policies to control administrative access to the service.
C. Install the cables to connect the hardware for compute and storage.
D. Install and patch the RDS operating system.
https://www.examtopics.com/discussions/amazon/view/141324-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is an advantage that the AWS Cloud provides to users?
*A. Users eliminate the need to guess about infrastructure capacity requirements.
B. Users decrease their variable costs by maintaining sole ownership of IT hardware.
C. Users maintain control of underlying IT infrastructure hardware.
D. Users maintain control of operating systems for managed services.
https://www.examtopics.com/discussions/amazon/view/142945-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which feature of Amazon RDS provides the ability to automatically create a primary database instance and to synchronously replicate data to an instance in another Availability Zone?
A. Read replicas
B. Blue/green deployment
*C. Multi-AZ deployment
D. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/142698-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to check for IAM access keys that have not been rotated recently.\nWhich AWS service should the company use to meet this requirement?
A. AWS WAF
B. AWS Shield
C. Amazon Cognito
*D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/143147-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances.\nWhich AWS service or feature will meet this requirement?
A. Network ACLs
B. AWS WAF
C. Amazon GuardDuty
*D. Security groups
https://www.examtopics.com/discussions/amazon/view/142699-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following can be components of a VPC in the AWS Cloud? (Choose two.)
A. Amazon API Gateway
B. Amazon S3 buckets and objects
C. AWS Storage Gateway
*D. Internet gateway
*E. Subnet
https://www.examtopics.com/discussions/amazon/view/142946-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is building a new application on AWS. The company needs the application to remain available if an individual application component fails.\nWhich design principle should the company use to meet this requirement?
A. Disposable resources
B. Automation
C. Rightsizing
*D. Loose coupling
https://www.examtopics.com/discussions/amazon/view/144069-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use a managed service to identify and protect sensitive data that is stored in Amazon S3.\nWhich AWS service will meet these requirements?
A. AWS IAM Access Analyzer
B. Amazon GuardDuty
C. Amazon Inspector
*D. Amazon Macie
https://www.examtopics.com/discussions/amazon/view/147523-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature can a user configure to limit network access at the subnet level?
A. AWS Shield
B. AWS WAF
*C. Network ACL
D. Security group
https://www.examtopics.com/discussions/amazon/view/143148-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can a company use to manage encryption keys in the cloud?
A. AWS License Manager
B. AWS Certificate Manager (ACM)
*C. AWS CloudHSM
D. AWS Directory Service
https://www.examtopics.com/discussions/amazon/view/141200-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to enhance security by launching a third-party ISP intrusion detection system from its AWS account.\nWhich AWS service or resource should the company use to meet this requirement?
A. AWS Security Hub
*B. AWS Marketplace
C. AWS Quick Starts
D. AWS Security Center
https://www.examtopics.com/discussions/amazon/view/143149-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: How does the AWS Cloud help companies build agility into their processes and cloud infrastructure?
A. Companies can avoid provisioning too much capacity when they do not know how much capacity is required.
B. Companies can expand into new geographic regions.
*C. Companies can access a range of technologies to experiment and innovate quickly.
D. Companies can pay for IT resources only when they use the resources.
https://www.examtopics.com/discussions/amazon/view/141201-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool gives a company the ability to release application changes in an automated way?
A. Amazon AppFlow
*B. AWS CodeDeploy
C. AWS PrivateLink
D. Amazon EKS Distro
https://www.examtopics.com/discussions/amazon/view/141314-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on managing identities and permissions at scale?
A. Operations
B. Platform
C. Governance
*D. Security
https://www.examtopics.com/discussions/amazon/view/141315-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature allows users to securely store encrypted credentials and retrieve these credentials when required?
A. AWS Encryption SDK
B. AWS Security Hub
*C. AWS Secrets Manager
D. AWS Artifact
https://www.examtopics.com/discussions/amazon/view/141316-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or resource can a company use to deploy AWS WAF rules?
A. Amazon EC2
*B. Application Load Balancer
C. AWS Trusted Advisor
D. Network Load Balancer
https://www.examtopics.com/discussions/amazon/view/140727-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company hosts its website on Amazon EC2 instances. The company needs to ensure that the website reaches a global audience and provides minimum latency to users.\nWhich AWS service should the company use to meet these requirements?
A. Amazon Route 53
*B. Amazon CloudFront
C. Elastic Load Balancing
D. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/142786-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs).\nWhich combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)
A. Create an IAM user and provide AWS Management Console access only.
*B. Create an IAM user and provide programmatic access only.
C. Create an IAM role and provide AWS Management Console access only.
D. Create an IAM policy with administrator access and attach it to the IAM user.
*E. Create an IAM policy with Amazon RDS access and attach it to the IAM user.
https://www.examtopics.com/discussions/amazon/view/144452-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to discover, prepare, move, and integrate data from multiple sources for data analytics and machine learning.\nWhich AWS serverless data integration service should the company use to meet these requirements?
*A. AWS Glue
B. AWS Data Exchange
C. Amazon Athena
D. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/141317-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to build an application that uses AWS Lambda to run Python code.\nUnder the AWS shared responsibility model, which tasks will be the company’s responsibility? (Choose two.)
A. Management of the underlying infrastructure.
B. Management of the operating system.
*C. Writing the business logic code.
D. Installation of the computer language runtime.
*E. Providing AWS Identity and Access Management (IAM) access to the Lambda service.
https://www.examtopics.com/discussions/amazon/view/146539-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use a centralized AWS service to enforce compliance with the organizational business standards. The company wants to use an AWS service that can govern and control who can deploy, manage, and decommission AWS resources.\nWhich AWS service will meet these requirements?
A. Amazon CloudWatch
*B. AWS Service Catalog
C. Amazon GuardDuty
D. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/143768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What does "security of the cloud” refer to in the AWS shared responsibility model?
A. Availability of AWS services such as Amazon EC2
*B. Security of the cloud infrastructure that runs all the AWS services
C. Implementation of password policies for IAM users
D. Security of customer environments by using AWS Network Firewall partners
https://www.examtopics.com/discussions/amazon/view/146541-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has an application that produces unstructured data continuously. The company needs to store the data so that the data is durable and easy to query.\nWhich AWS service can the company use to meet these requirements?
A. Amazon RDS
B. Amazon Aurora
C. Amazon QuickSight
*D. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/146542-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which options are AWS Cloud Adoption Framework (AWS CAF) perspectives? (Choose two.)
A. Cloud fluency
*B. Security
C. Change acceleration
D. Architecture
*E. Business
https://www.examtopics.com/discussions/amazon/view/142848-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate a company’s on-premises container infrastructure to the AWS Cloud. The company wants to prevent unplanned administration and operation cost and adapt to a serverless architecture.\nWhich AWS service will meet these requirements?
A. Amazon Connect
*B. AWS Fargate
C. Amazon Lightsail
D. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/145240-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants its Amazon EC2 instances to be in different locations but share the same geographic area. The company also wants to use multiple power grids and independent networking connectivity for the EC2 instances.\nWhich solution meets these requirements?
A. Use EC2 instances in multiple edge locations in the same AWS Region.
*B. Use EC2 instances in multiple Availability Zones in the same AWS Region.
C. Use EC2 instances in multiple Amazon Connect locations in the same AWS Region.
D. Use EC2 instances in multiple AWS Artifact locations in the same AWS Region.
https://www.examtopics.com/discussions/amazon/view/145242-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An ecommerce company has deployed a new web application on Amazon EC2 instances. The company wants to distribute incoming HTTP traffic evenly across all running instances.\nWhich AWS service or resource will meet this requirement?
A. Amazon EC2 Auto Scaling
*B. Application Load Balancer
C. Gateway Load Balancer
D. Network Load Balancer
https://www.examtopics.com/discussions/amazon/view/145241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature gives users the ability to connect VPCs and on-premises networks to a central hub?
A. Virtual private gateway
*B. AWS Transit Gateway
C. Internet gateway
D. Customer gateway
https://www.examtopics.com/discussions/amazon/view/142678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is connecting multiple VPCs and on-premises networks. The company needs to use an AWS service as a cloud router to simplify peering relationships.\nWhich AWS service can the company use to meet this requirement?
A. AWS Direct Connect
*B. AWS Transit Gateway
C. Amazon Connect
D. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/143380-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company stores a large amount of data that auditors access only twice each year.\nWhich Amazon S3 storage class should the company use to store the data with the LOWEST cost?
A. Amazon S3 Outposts
*B. Amazon S3 Glacier Instant Retrieval
C. Amazon S3 Standard
D. Amazon S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/142852-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are ways to improve security on AWS? (Choose two.)
A. Using AWS Artifact
B. Granting the broadest permissions to all IAM roles
C. Running application code with AWS Cloud
*D. Enabling multi-factor authentication (MFA) with Amazon Cognito
*E. Using AWS Trusted Advisor security checks
https://www.examtopics.com/discussions/amazon/view/141620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can a company use to manage encryption keys in the cloud?
A. AWS License Manager
B. AWS Certificate Manager (ACM)
*C. AWS CloudHSM
D. AWS Directory Service
https://www.examtopics.com/discussions/amazon/view/146543-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is using AWS for all its IT infrastructure. The company's developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves.\nWhich AWS service should the developers use to meet these requirements?
A. AWS CloudFormation
B. AWS CodeBuild
*C. AWS Elastic Beanstalk
D. AWS CodeDeploy
https://www.examtopics.com/discussions/amazon/view/142503-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to gain insights from its data and build interactive data visualization dashboards.\nWhich AWS service will meet these requirements?
A. Amazon SageMaker
B. Amazon Rekognition
*C. Amazon QuickSight
D. Amazon Kinesis
https://www.examtopics.com/discussions/amazon/view/145248-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A cloud engineer wants to store data in Amazon S3. The engineer will access some of the data yearly and some of the data daily.\nWhich S3 storage class will meet these requirements MOST cost-effectively?
A. S3 Standard
B. S3 Glacier Deep Archive
C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
*D. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/147611-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user is moving a workload from a local data center to an architecture that is distributed between the local data center and the AWS Cloud.\nWhich type of migration is this?
A. On-premises to cloud native
B. Hybrid to cloud native
*C. On-premises to hybrid
D. Cloud native to hybrid
https://www.examtopics.com/discussions/amazon/view/142940-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides users with AWS issued reports, certifications, accreditations, and third-party attestations?
*A. AWS Artifact
B. AWS Trusted Advisor
C. AWS Health Dashboard
D. AWS Config
https://www.examtopics.com/discussions/amazon/view/142948-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs an on-premises contact center for customers. The company needs to migrate to a cloud-based solution that can deliver artificial intelligence features to improve user experience.\nWhich AWS service will meet these requirements?
A. AWS Wavelength
B. AWS IAM Identity Center (AWS Single Sign-On)
C. AWS Direct Connect
*D. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/144460-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to migrate its custom marketing application and order-processing application to AWS. The company needs to deploy the applications on different types of instances with various configurations of CPU, memory, storage, and networking capacity.\nWhich AWS service should the company use to meet these requirements?
A. AWS Lambda
B. Amazon Cognito
C. Amazon Athena
*D. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/141191-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to monitor and block malicious HTTP and HTTPS requests that its Amazon CloudFront distributions receive.\nWhich AWS service should the company use to meet these requirements?
A. Amazon GuardDuty
B. Amazon Inspector
*C. AWS WAF
D. Amazon Detective
https://www.examtopics.com/discussions/amazon/view/150407-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can generate information that can be used by external auditors?
A. Amazon Cognito
B. Amazon FSx
*C. AWS Config
D. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/151152-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?
A. AWS VPN
B. Amazon Connect
*C. AWS Direct Connect
D. Internet gateway
https://www.examtopics.com/discussions/amazon/view/148056-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS.\nWhich AWS service should the company use to meet this requirement?
A. AWS Lambda
*B. Amazon Route 53
C. Amazon CloudFront
D. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/148586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company uses a third-party identity provider (IdP). The company wants to provide its employees with access to AWS accounts and services without requiring another set of login credentials.\nWhich AWS service will meet this requirement?
A. AWS Directory Service
B. Amazon Cognito
*C. AWS IAM Identity Center
D. AWS Resource Access Manager (AWS RAM)
https://www.examtopics.com/discussions/amazon/view/140270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs a legacy workload in an on-premises data center. The company wants to migrate the workload to AWS. The company does not want to make any changes to the workload.\nWhich migration strategy should the company use?
A. Repurchase
B. Replatform
*C. Rehost
D. Refactor
https://www.examtopics.com/discussions/amazon/view/146686-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to migrate applications to the AWS Cloud. During a system audit, the company finds that its content management system (CMS) application is incompatible with cloud environments.\nWhich migration strategies will help the company to migrate the CMS application with the LEAST effort? (Choose two.)
A. Retire
*B. Rehost
*C. Repurchase
D. Replatform
E. Refactor
https://www.examtopics.com/discussions/amazon/view/140728-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is AWS responsible for under the AWS shared responsibility model?
A. Network and firewall configuration
B. Client-side data encryption
C. Management of user permissions
*D. Hardware and infrastructure
https://www.examtopics.com/discussions/amazon/view/145257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants its AWS usage to be more sustainable. The company wants to track, measure, review, and forecast polluting emissions that result from its AWS applications.\nWhich AWS service or tool can the company use to meet these requirements?
A. AWS Health Dashboard
*B. AWS customer carbon footprint tool
C. AWS Support Center
D. Amazon QuickSight
https://www.examtopics.com/discussions/amazon/view/151232-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS tool or feature acts as a VPC firewall at the subnet level?
A. Security group
*B. Network ACL
C. Traffic Mirroring
D. Internet gateway
https://www.examtopics.com/discussions/amazon/view/151256-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: According to the AWS shared responsibility model, which task is the customer's responsibility?
A. Maintaining the infrastructure needed to run AWS Lambda
B. Updating the operating system of Amazon DynamoDB instances
C. Maintaining Amazon S3 infrastructure
*D. Updating the guest operating system on Amazon EC2 instances
https://www.examtopics.com/discussions/amazon/view/144072-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs MySQL database workloads on self-managed servers in an on-premises data center. The company wants to migrate the database workloads to an AWS managed service.\nWhich migration strategy should the company use?
A. Rehost
B. Repurchase
C. Refactor
*D. Replatform
https://www.examtopics.com/discussions/amazon/view/140730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to implement detailed tracking of its cloud costs by department and project.\nWhich AWS feature or service should the company use?
A. Consolidated billing
*B. Cost allocation tags
C. AWS Marketplace
D. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/143584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a MariaDB database on premises. The company wants to move the data to the AWS Cloud.\nWhich AWS service will host this database with the LEAST amount of operational overhead?
*A. Amazon RDS
B. Amazon Neptune
C. Amazon S3
D. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/144186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs a threat detection service that will continuously monitor its AWS accounts, workloads, and Amazon S3 buckets for malicious activity and unauthorized behavior.\nWhich AWS service meets these requirements?
A. AWS Shield
B. AWS Firewall Manager
*C. Amazon GuardDuty
D. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/144965-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to manage its cloud resources by using infrastructure as code (IaC) templates. The company needs to meet compliance requirements.\nWhich AWS service should the company use to meet these requirements?
A. AWS Artifact
B. AWS Resource Explorer
C. AWS License Manager
*D. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/142885-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A systems administrator wants to monitor the CPU utilization of a company's Amazon EC2 instances.\nWhich AWS service can provide this information?
A. AWS Config
B. AWS Trusted Advisor
C. AWS CloudTrail
*D. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/143586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An independent software vendor wants to deliver and share its custom Amazon Machine Images (AMIs) to prospective customers.\nWhich AWS service will meet these requirements?
*A. AWS Marketplace
B. AWS Data Exchange
C. Amazon EC2
D. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/146161-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which component must be attached to a VPC to enable inbound internet access?
A. NAT gateway
B. VPC endpoint
C. VPN connection
*D. Internet gateway
https://www.examtopics.com/discussions/amazon/view/146162-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Support plan provides the full set of AWS Trusted Advisor checks at the LOWEST cost?
A. AWS Developer Support
*B. AWS Business Support
C. AWS Enterprise On-Ramp Support
D. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/142143-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company's application is running on Amazon EC2 instances. The company is planning a partial migration to a serverless architecture in the next year and wants to pay for resources up front.\nWhich AWS purchasing option will optimize the company's costs?
A. Convertible Reserved Instances
B. Spot Instances
C. EC2 Instance Savings Plans
*D. Compute Savings Plan
https://www.examtopics.com/discussions/amazon/view/141434-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A retail company is building a new mobile app. The company is evaluating whether to build the app at an on-premises data center or in the AWS Cloud.\nWhich of the following are benefits of building this app in the AWS Cloud? (Choose two.)
A. A large, upfront capital expense and low variable expenses
*B. Increased speed for trying out new projects
C. Complete control over the physical security of the infrastructure
*D. Flexibility to scale up in minutes as the application becomes popular
E. Ability to pick the specific data centers that will host the application servers
https://www.examtopics.com/discussions/amazon/view/143626-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company must archive its documents by using a write-once, read-many (WORM) model to meet legal and compliance obligations.\nWhich feature of Amazon S3 can the company use to meet this requirement?
A. S3 Versioning
B. S3 bucket policy
*C. S3 Glacier Vault Lock
D. S3 multi-factor authentication (MFA) delete
https://www.examtopics.com/discussions/amazon/view/140776-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has batch workloads that need to run for short periods of time on Amazon EC2. The workloads can handle interruptions and can start again from where they ended.\nWhat is the MOST cost-effective EC2 instance purchasing option to meet these requirements?
A. Reserved Instances
*B. Spot Instances
C. Dedicated Instances
D. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/141830-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to host an application in a specific geographic area to comply with regulations.\nWhich feature of the AWS global infrastructure will help the company meet this requirement?
A. Scalability
*B. Global footprint
C. Availability
D. Performance
https://www.examtopics.com/discussions/amazon/view/140805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An ecommerce company plans to move its data center workload to the AWS Cloud to support highly dynamic usage patterns.\nWhich benefits make the AWS Cloud cost-effective for the migration of this type of workload? (Choose two.)
A. Reliability
B. Security
*C. Elasticity
*D. Pay-as-you-go resource
E. High availability
https://www.examtopics.com/discussions/amazon/view/147624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS solution gives companies the ability to use protocols such as NFS to store and retrieve objects in Amazon S3?
A. Amazon FSx for Lustre
B. AWS Storage Gateway volume gateway
*C. AWS Storage Gateway file gateway
D. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/143774-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use automated video analysis to identify employees that are accessing its offices.\nWhich AWS service will meet this requirement?
*A. Amazon Rekognition
B. Amazon Polly
C. Amazon Cognito
D. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/144990-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to host a web server on Amazon EC2 instances for at least 1 year. The web server cannot tolerate interruption.\nWhich EC2 instance purchasing option will meet these requirements MOST cost-effectively?
A. On-Demand Instances
*B. Partial Upfront Reserved Instances
C. Spot Instances
D. No Upfront Reserved Instances
https://www.examtopics.com/discussions/amazon/view/151270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is requesting Payment Card Industry (PCI) reports that validate the operating effectiveness of AWS security controls.\nHow should the company obtain these reports?
A. Contact AWS Support.
*B. Download reports from AWS Artifact.
C. Download reports from AWS Security Hub.
D. Contact an AWS technical account manager (TAM).
https://www.examtopics.com/discussions/amazon/view/142140-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company uses Amazon Aurora as its database service. The company wants to encrypt its databases and database backups.\nWhich party manages the encryption of the database clusters and database snapshots, according to the AWS shared responsibility model?
A. AWS
*B. The company
C. AWS Marketplace partners
D. Third-party partners
https://www.examtopics.com/discussions/amazon/view/140766-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is hosting a web application on Amazon EC2 instances. The company wants to implement custom conditions to filter and control inbound web traffic.\nWhich AWS service will meet these requirements?
A. Amazon GuardDuty
*B. AWS WAF
C. Amazon Macie
D. AWS Shield
https://www.examtopics.com/discussions/amazon/view/140806-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to maintain bandwidth throughput and provide a more consistent network experience than public internet-based connections.\nWhich AWS service should the company choose?
A. AWS VPN
*B. AWS Direct Connect
C. Amazon Connect
D. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/143208-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to use SQL syntax to perform a direct query of objects in an Amazon S3 bucket.\nWhich AWS service can the company use to meet this requirement?
A. AWS Glue
*B. Amazon Athena
C. AWS Lambda
D. Amazon Kinesis
https://www.examtopics.com/discussions/amazon/view/141280-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which design principles are included in the reliability pillar of the AWS Well-Architected Framework? (Choose two.)
*A. Automatically recover from failure.
B. Grant everyone access to increase AWS service quotas.
*C. Stop guessing capacity.
D. Design applications to run in a single Availability Zone.
E. Plan to increase AWS service quotas first in a secondary AWS Region.
https://www.examtopics.com/discussions/amazon/view/151278-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can companies use to subscribe to RSS feeds for updates about all AWS service issues?
A. Amazon Simple Notification Service (Amazon SNS)
*B. AWS Health Dashboard
C. AWS Config
D. AWS CodeCommit
https://www.examtopics.com/discussions/amazon/view/140792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs Amazon EC2 instances in a research lab. The instances run for 3 hours each week and cannot be interrupted.\nWhat is the MOST cost-effective instance purchasing option to meet these requirements?
A. Compute Savings Plan
*B. On-Demand Instances
C. Convertible Reserved Instances
D. Spot Instances
https://www.examtopics.com/discussions/amazon/view/142886-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A new AWS user needs to interact with AWS Support by using API calls.\nWhich AWS Support plan will meet this requirement MOST cost-effectively?
A. AWS Basic Support
B. AWS Developer Support
*C. AWS Business Support
D. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/140767-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company migrated to the AWS Cloud. Now the company pays for services on an as-needed basis.\nWhich advantage of cloud computing is the company benefiting from?
A. Stop spending money running and maintaining data centers
B. Increase speed and agility
C. Go global in minutes
*D. Trade fixed expense for variable expense
https://www.examtopics.com/discussions/amazon/view/144995-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company will run a predictable compute workload on Amazon EC2 instances for the next 3 years. The workload is critical for the company. The company wants to optimize costs to run the workload.\nWhich solution will meet these requirements?
A. Spot Instances
B. Dedicated Hosts
*C. Savings Plans
D. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/142508-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to estimate the cost for its AWS architecture solution before migration.\nWhich AWS service or feature will meet this requirement?
A. Amazon Detective
B. AWS Budgets
C. AWS Resource Explorer
*D. AWS Pricing Calculator
https://www.examtopics.com/discussions/amazon/view/140768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to centrally manage its employee's access to multiple AWS accounts.\nWhich AWS service or feature should the company use to meet this requirement?
A. AWS Identity and Access Management Access Analyzer
B. AWS Secrets Manager
*C. AWS IAM Identity Center
D. AWS Security Token Service (AWS STS)
https://www.examtopics.com/discussions/amazon/view/144491-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A university receives a grant to conduct research by using AWS services. The research team needs to make sure the grant money lasts for the entire school year. The team has decided on a monthly allocation that adds up to the total grant amount.\nWhich AWS service or feature will notify the team if spending exceeds the planned amount?
*A. AWS Budgets
B. Cost Explorer
C. Cost allocation tags
D. Cost categories
https://www.examtopics.com/discussions/amazon/view/141003-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company with multiple accounts and teams wants to set up a new multi-account AWS environment.\nWhich AWS service supports this requirement?
A. AWS CloudFormation
*B. AWS Control Tower
C. AWS Config
D. Amazon Virtual Private Cloud (Amazon VPC)
https://www.examtopics.com/discussions/amazon/view/141005-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs access to checks and recommendations that help the company follow AWS best practices for cost optimization, security, fault tolerance, performance, and service quotas.\nWhich combination of an AWS service and AWS Support plan on the AWS account will meet these requirements?
A. AWS Trusted Advisor with AWS Developer Support
B. AWS Health Dashboard with AWS Enterprise Support
*C. AWS Trusted Advisor with AWS Business Support
D. AWS Health Dashboard with AWS Enterprise On-Ramp Support
https://www.examtopics.com/discussions/amazon/view/141006-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service helps users plan and track their server and application inventory migration data to AWS?
A. Amazon CloudWatch
B. AWS DataSync
*C. AWS Migration Hub
D. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/141007-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS team or offering helps users accelerate cloud adoption through paid engagements in any of several specialty practice areas?
A. AWS Enterprise Support
B. AWS solutions architects
*C. AWS Professional Services
D. AWS account managers
https://www.examtopics.com/discussions/amazon/view/141008-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to purchase Amazon EC2 instances to support an application that will run continuously for more than 1 year.\nWhich EC2 instance purchasing option meets these requirements MOST cost-effectively?
A. Dedicated Instances
B. Spot Instances
*C. Reserved Instances
D. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/141009-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which programming languages does AWS Cloud Development Kit (AWS CDK) currently support? (Choose two.)
*A. Python
B. Swift
*C. TypeScript
D. Ruby
E. PHP
https://www.examtopics.com/discussions/amazon/view/141010-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature gives users the ability to provision AWS infrastructure programmatically?
*A. AWS Cloud Development Kit (AWS CDK)
B. Amazon CodeGuru
C. AWS Config
D. AWS CodeCommit
https://www.examtopics.com/discussions/amazon/view/144997-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature allows a company to have its own logically isolated section of the AWS Cloud?
A. AWS VPN
B. Availability Zones
*C. Amazon Virtual Private Cloud (Amazon VPC)
D. AWS Regions
https://www.examtopics.com/discussions/amazon/view/147627-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following actions are controlled with AWS Identity and Access Management (IAM)? (Choose two.)
*A. Control access to AWS service APIs and to other specific resources.
B. Provide intelligent threat detection and continuous monitoring.
*C. Protect the AWS environment using multi-factor authentication (MFA).
D. Grant users access to AWS data centers.
E. Provide firewall protection for applications from common web attacks.
https://www.examtopics.com/discussions/amazon/view/151281-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Why are AWS CloudFormation templates used?
*A. To reduce provisioning time by using automation.
B. To transfer existing infrastructure to another company.
C. To reuse on-premises infrastructure in the AWS Cloud.
D. To deploy large infrastructure with no cost implications.
https://www.examtopics.com/discussions/amazon/view/151282-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is using AWS Identity and Access Management (IAM).\nWho can manage the access keys of the AWS account root user?
A. IAM users in the same account that have been granted permission
B. IAM roles in any account that have been granted permission
C. IAM users and roles that have been granted permission
*D. The AWS account owner
https://www.examtopics.com/discussions/amazon/view/147628-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which group shares responsibility with AWS for security and compliance of AWS accounts and resources?
A. Third-party vendors
*B. Customers
C. Reseller partners
D. Internet providers
https://www.examtopics.com/discussions/amazon/view/151283-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to update its online data processing application by implementing container-based services that run for 4 hours at a time. The company does not want to provision or manage server instances.\nWhich AWS service will meet these requirements?
A. AWS Lambda
*B. AWS Fargate
C. Amazon EC2
D. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/148241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on organizing an inventory of data products in a data catalog?
A. Operations
*B. Governance
C. Business
D. Platform
https://www.examtopics.com/discussions/amazon/view/144137-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs its production workload in the AWS Cloud. The company needs to choose one of the AWS Support Plans.\nWhich of the AWS Support Plans will meet these requirements at the LOWEST cost?
A. Developer
B. Enterprise On-Ramp
C. Enterprise
*D. Business
https://www.examtopics.com/discussions/amazon/view/144492-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to use Amazon S3 to store audio files that are each 5 megabytes in size. The company will rarely access the files, but the company must be able to retrieve the files immediately.\nWhich S3 storage class will meet these requirements MOST cost-effectively?
A. S3 Standard
*B. S3 Standard-Infrequent Access (S3 Standard-IA)
C. S3 Glacier Flexible Retrieval
D. S3 Glacier Deep Archive
https://www.examtopics.com/discussions/amazon/view/150492-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to set up a secure network connection from on premises to the AWS Cloud within 1 week.\nWhich solution will meet these requirements?
A. AWS Direct Connect
B. Amazon VPC
*C. AWS Site-to-Site VPN
D. Edge location
https://www.examtopics.com/discussions/amazon/view/145421-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company's compliance officer wants to review the AWS Service Organization Control (SOC) reports.\nWhich AWS service or feature should the compliance officer use to complete this task?
*A. AWS Artifact
B. AWS Concierge Support
C. AWS Support
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147642-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is designing workloads in the AWS Cloud. The company wants the workloads to perform their intended function correctly and consistently throughout their lifecycle.\nWhich pillar of the AWS Well-Architected Framework does this goal represent?
A. Operational excellence
B. Security
*C. Reliability
D. Performance efficiency
https://www.examtopics.com/discussions/amazon/view/147650-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is used to temporarily provide federated security credentials to access AWS resources?
A. Amazon GuardDuty
*B. AWS Simple Token Service (AWS STS)
C. AWS Secrets Manager
D. AWS Certificate Manager
https://www.examtopics.com/discussions/amazon/view/147651-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to convert video files and audio files to a format that will play on smartphones.\nWhich AWS service will meet this requirement?
A. Amazon Comprehend
B. Amazon Rekognition
*C. Amazon Elastic Transcoder
D. Amazon Polly
https://www.examtopics.com/discussions/amazon/view/145422-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A developer needs to use a standardized template to create copies of a company's AWS architecture for development, test, and production environments.\nWhich AWS service should the developer use to meet this requirement?
A. AWS Cloud Map
*B. AWS CloudFormation
C. Amazon Cloud Front
D. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/151290-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can create a private network connection from on premises to the AWS Cloud?
A. AWS Config
B. Virtual Private Cloud (Amazon VPC)
*C. AWS Direct Connect
D. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/147660-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Under the AWS shared responsibility model, which of the following is a responsibility of the customer?
A. Shred disk drives before they leave a data center.
B. Prevent customers from gathering packets or collecting traffic at the hypervisor level.
*C. Patch the guest operating system with the latest security patches.
D. Maintain security systems that provide physical monitoring of data centers.
https://www.examtopics.com/discussions/amazon/view/147661-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service uses speech-to-text conversion to help users create meeting notes?
A. Amazon Polly
B. Amazon Textract
C. Amazon Rekognition
*D. Amazon Transcribe
https://www.examtopics.com/discussions/amazon/view/147662-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool provides users with a graphical interface that they can use to manage AWS services?
A. AWS Copilot
B. AWS CLI
*C. AWS Management Console
D. AWS software development kits (SDKs)
https://www.examtopics.com/discussions/amazon/view/147663-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a workload that will run continuously for 1 year. The workload cannot tolerate service interruptions.\nWhich Amazon EC2 purchasing option will be MOST cost-effective?
*A. All Upfront Reserved Instances
B. Partial Upfront Reserved Instances
C. Dedicated Instances
D. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/147664-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company migrated its systems to the AWS Cloud. The systems are rightsized, and a security review did not reveal any issues. The company must ensure that additional developments, integrations, changes, and system usage growth do not jeopardize this optimized AWS infrastructure.\nWhich AWS service should the company use to report ongoing optimization and security?
*A. AWS Trusted Advisor
B. AWS Health Dashboard
C. Amazon Connect
D. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/147665-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service integrates with other AWS services to provide the ability to encrypt data at rest?
*A. AWS Key Management Service (AWS KMS)
B. AWS Certificate Manager (ACM)
C. AWS Identity and Access Management (IAM)
D. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/147666-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to track the monthly cost and usage of all Amazon EC2 instances in a specific AWS environment.\nWhich AWS service or tool will meet these requirements?
A. AWS Cost Anomaly Detection
*B. AWS Budgets
C. AWS Compute Optimizer
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147667-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service uses edge locations to cache content?
A. Amazon Kinesis
B. Amazon Simple Queue Service (Amazon SQS)
*C. Amazon CloudFront
D. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/147673-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to securely access an Amazon S3 bucket from an Amazon EC2 instance without accessing the internet.\nWhat should the company use to accomplish this goal?
A. VPN connection
B. Internet gateway
*C. VPC endpoint
D. NAT gateway
https://www.examtopics.com/discussions/amazon/view/147674-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services are serverless? (Choose two.)
*A. AWS Fargate
B. Amazon Managed Streaming for Apache Kafka
C. Amazon EMR
*D. Amazon S3
E. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147676-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to continuously improve processes and procedures to deliver business value.\nWhich pillar of the AWS Well-Architected Framework does this goal represent?
A. Performance efficiency
*B. Operational excellence
C. Reliability
D. Sustainability
https://www.examtopics.com/discussions/amazon/view/146252-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service should a company use to organize, characterize, and search large numbers of images?
A. Amazon Transcribe
*B. Amazon Rekognition
C. Amazon Aurora
D. Amazon QuickSight
https://www.examtopics.com/discussions/amazon/view/147678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is always available free of charge to users?
A. Amazon Athena
*B. AWS Identity and Access Management (IAM)
C. AWS Secrets Manager
D. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/147679-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to run some of its workloads on premises to comply with regulatory guidelines. The company wants to use the AWS Cloud to run workloads that are not required to be on premises. The company also wants to be able to use the same API calls for the on-premises workloads and the cloud workloads.\nWhich AWS service or feature should the company use to meet these requirements?
A. Dedicated Hosts
*B. AWS Outposts
C. Availability Zones
D. AWS Wavelength
https://www.examtopics.com/discussions/amazon/view/147680-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is the recommended use case for Amazon EC2 On-Demand Instances?
A. A steady-state workload that requires a particular EC2 instance configuration for a long period of time
B. A workload that can be interrupted for a project that requires the lowest possible cost
*C. An unpredictable workload that does not require a long-term commitment
D. A workload that is expected to run for longer than 1 year
https://www.examtopics.com/discussions/amazon/view/147681-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An administrator observed that multiple AWS resources were deleted yesterday.\nWhich AWS service will help identify the cause and determine which user deleted the resources?
*A. AWS CloudTrail
B. Amazon Inspector
C. Amazon GuardDuty
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/146253-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: In which situations should a company create an IAM user instead of an IAM role?
A. When an application that runs on Amazon EC2 instances requires access to other AWS services
*B. When the company creates AWS access credentials for individuals
C. When the company creates an application that runs on a mobile phone that makes requests to AWS
D. When the company needs to add users to IAM groups
E. When users are authenticated in the corporate network and want to be able to use AWS without having to sign in a second time
https://www.examtopics.com/discussions/amazon/view/147684-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company hosts a web application on AWS. The company has improved the availability of its application by provisioning multiple Amazon EC2 instances. The company wants to distribute its traffic across the EC2 instances while providing a single point of contact to the web clients.\nWhich AWS service can distribute the traffic to multiple EC2 instances as targets?
A. VPC endpoints
*B. Application Load Balancer
C. NAT gateway
D. Internet gateway
https://www.examtopics.com/discussions/amazon/view/146255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to transfer a virtual Windows Server 2022 that is currently running in its own data center to AWS. The company wants to automatically convert the existing server to run directly on AWS infrastructure instead of visualized hardware.\nWhich AWS service will meet these requirements?
A. AWS DataSync
B. AWS Database Migration Service (AWS DMS)
C. AWS Application Discovery Service
*D. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/146257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its server-based applications to the AWS Cloud. The company wants to determine the total cost of ownership for its compute resources that will be hosted on the AWS Cloud.\nWhich combination of AWS services or tools will meet these requirements? (Choose two.)
*A. AWS Pricing Calculator
*B. Migration Evaluator
C. AWS Support Center
D. AWS Application Discovery Service
E. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has data lakes designed for high performance computing (HPC) workloads.\nWhich Amazon EC2 instance type should the company use to meet these requirements?
A. General purpose instances
*B. Compute optimized instances
C. Memory optimized instances
D. Storage optimized instances
https://www.examtopics.com/discussions/amazon/view/147719-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback.\nWhich task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)
*A. Realign teams to focus on products and value streams.
B. Create new value propositions with new products and services.
*C. Use agile methods to rapidly iterate and evolve.
D. Use a new data and analytics platform to create actionable insights.
E. Migrate and modernize legacy infrastructure.
https://www.examtopics.com/discussions/amazon/view/147721-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to build, train, and deploy machine learning (ML) models.\nWhich AWS service can the company use to meet this requirement?
A. Amazon Personalize
B. Amazon Comprehend
C. Amazon Forecast
*D. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/147732-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool provides recommendations to help users get rightsized Amazon EC2 instances based on historical workload usage data?
A. AWS Pricing Calculator
*B. AWS Compute Optimizer
C. AWS App Runner
D. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/147733-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to run an application on Amazon EC2 instances without interruption.\nWhich EC2 instance purchasing option will meet this requirement MOST cost-effectively?
A. Standard Reserved Instances
B. Convertible Reserved Instances
*C. On-Demand Instances
D. Spot Instances
https://www.examtopics.com/discussions/amazon/view/147735-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which design principle aligns with performance efficiency pillar of the AWS Well-Architected Framework?
*A. Using serverless architectures
B. Scaling horizontally
C. Measuring the cost of workloads
D. Using managed services
https://www.examtopics.com/discussions/amazon/view/145417-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which type of workload should a company run on Amazon EC2 Spot Instances?
A. A steady-state workload that requires a particular EC2 instance configuration for a long period of time
*B. A workload that can be interrupted and can control costs
C. A steady-state workload that does not require a long-term commitment
D. A workload that cannot be interrupted and can control costs
https://www.examtopics.com/discussions/amazon/view/147739-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has multiple AWS accounts. The company needs to receive a consolidated bill from AWS and must centrally manage security and compliance.\nWhich AWS service or feature should the company use to meet these requirements?
A. AWS Cost and Usage Report
*B. AWS Organizations
C. AWS Config
D. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/147740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: For which use case are Amazon EC2 On-Demand Instances MOST cost-effective?
A. Compute-intensive video transcoding that can be restarted if necessary
*B. An instance in continual use for 1 month to conduct quality assurance tests
C. An instance that runs a web server that will run for 1 year
D. An instance that runs a database that will run for 3 years
https://www.examtopics.com/discussions/amazon/view/146791-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS offering can analyze a company’s AWS environment to discover security vulnerabilities on Amazon EC2 instances?
*A. Amazon Inspector
B. Amazon Macie
C. AWS Shield Standard
D. Security groups
https://www.examtopics.com/discussions/amazon/view/147742-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to onboard new employees that will be working remotely. The company needs to set up Windows virtual desktops to create a working environment for the new employees. The employees must be able access the working environment from anywhere and by using their computer or a web browser.\nWhich AWS service or feature will meet these requirements?
A. Dedicated Hosts
B. AWS Global Accelerator
*C. Amazon Workspaces
D. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/147743-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to visualize and manage AWS Cloud costs and usage for a specific period of time.\nWhich AWS service or feature will meet these requirements?
*A. Cost Explorer
B. Consolidated billing
C. AWS Organizations
D. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/146263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service supports MySQL database engines?
A. Amazon Dynamo DВ
*B. Amazon RDS
C. Amazon DocumentDB (with MongoDB compatibility)
D. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/147744-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is releasing a business-critical application. Before the release, the company needs strategic planning assistance from AWS. During the release, the company needs AWS infrastructure event management and real-time support.\nWhat should the company do to meet these requirements?
A. Access AWS Trusted Advisor
B. Contact the AWS Partner Network (APN)
*C. Sign up for AWS Enterprise Support
D. Contact AWS Professional Services
https://www.examtopics.com/discussions/amazon/view/147746-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to improve employee productivity by providing a way for employees to search for questions and retrieve specific answers. The company wants to use a single intelligent search interface.\nWhich AWS service will meet these requirements?
A. Amazon Connect
*B. Amazon Kendra
C. Amazon Lex
D. Amazon Comprehend
https://www.examtopics.com/discussions/amazon/view/147747-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants an Amazon S3 solution that provides access to object storage within single-digit milliseconds.\nWhich solution will meet these requirements?
*A. S3 Express One Zone
B. S3 Standard
C. S3 Glacier Flexible Retrieval
D. S3 Glacier Instant Retrieval
https://www.examtopics.com/discussions/amazon/view/145956-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs an uninterruptible Amazon EC2 workload on AWS 24 hours a day, 7 days a week. The company will require the same instance family and instance type to run the workload for the next 12 months.\nWhich combination of purchasing options should the company choose to MOST optimize costs? (Choose two.)
*A. Standard Reserved Instance
B. Convertible Reserved Instance
C. Compute Savings Plan
D. Spot Instance
*E. All Upfront payment
https://www.examtopics.com/discussions/amazon/view/147111-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run its application's code without having to provision and manage servers.\nWhich AWS service will meet this requirement?
A. AWS Glue
*B. AWS Lambda
C. AWS CodeDeploy
D. Amazon CodeGuru
https://www.examtopics.com/discussions/amazon/view/147748-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to migrate to the AWS Cloud. The company needs to understand the existing on-premises usage and configuration. The company does not want to replicate its workloads to AWS, yet.\nWhich AWS service or tool will meet these requirements?
*A. AWS Application Discovery Service
B. AWS Application Migration Service
C. Cloud Migration Factory
D. AWS Transfer Family
https://www.examtopics.com/discussions/amazon/view/147185-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to launch an ecommerce website that contains many images for a product catalog. The company wants to keep the cost of running the website within a specific budget.\nWhich AWS service or tool should the company use to monitor the ongoing costs of the website?
*A. AWS Cost Explorer
B. AWS SDKs
C. EC2 Image Builder
D. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/147751-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has deployed several public applications behind Application Load Balancers. The company wants to improve the performance of the applications.\nWhich AWS service will meet these requirements?
*A. AWS Global Accelerator
B. Amazon Connect
C. Amazon ElastiCache
D. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/147752-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has an on-premises application. The application has processing times of less than 5 minutes and is invoked only a few times each day. The company wants to move the application to the AWS Cloud.\nWhich AWS service will support this application MOST cost-effectively?
A. Amazon Elastic Container Service (Amazon ECS)
*B. AWS Lambda
C. Amazon Elastic Kubernetes Service (Amazon EKS)
D. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to consolidate its call centers to improve the customer voice and chat experience with call center agents.\nWhich AWS service or tool will meet these requirements?
A. Amazon Simple Notification Service (Amazon SNS)
B. AWS Support Center
C. Amazon Cognito
*D. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/147754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to provision uninterruptible Amazon EC2 instances, when needed, and pay for compute capacity by the second.\nWhich EC2 instance purchasing option will meet these requirements?
A. Reserved Instances
B. Spot Instances
*C. On-Demand Instances
D. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/147755-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can migrate Amazon EC2 instances from one AWS Region to another?
*A. AWS Application Migration Service
B. AWS Database Migration Service (AWS DMS)
C. AWS DataSync
D. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/147187-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to block SQL injection attacks.\nWhich AWS service or feature provides this functionality?
*A. AWS WAF
B. Network ACLs
C. Security groups
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147756-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run its application on Amazon EC2 instances. The company needs to keep the application on-premises to meet a compliance requirement.\nWhich AWS offering will meet these requirements?
A. Dedicated Instances
B. Amazon CloudFront
C. AWS Fargate
*D. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/147757-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to connect its supported AWS services and VPCs. The company does not want to expose its internal traffic to the public internet.\nWhich AWS service will meet these requirements?
A. Amazon Inspector
*B. AWS PrivateLink
C. Amazon Connect
D. AWS Internet Gateway
https://www.examtopics.com/discussions/amazon/view/147758-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can manage permissions for AWS resources by using policies?
A. Amazon Inspector
B. Amazon Detective
*C. AWS Identity and Access Management (IAM)
D. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/147759-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to run some of its workload in the AWS Cloud. The company needs to keep some of the workload in its own on-site data center due to compliance reasons.\nWhich AWS service will meet these requirements?
A. AWSConfig
*B. AWS Outposts
C. Amazon Lightsail
D. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/147760-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to deploy an application that stores data in a relational database. The company wants database tasks, such as automated backups and database snapshots, to be managed by AWS.\nWhich AWS service will meet these requirements?
A. Amazon DocumentDB
*B. Amazon RDS
C. Amazon Elastic Block Store (Amazon EBS)
D. Amazon S3
https://www.examtopics.com/discussions/amazon/view/147188-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company that operates on-premises servers decides to start a new line of business. The company determines that additional servers are required for the new workloads.\nWhich advantage of cloud computing can help the company to provision additional infrastructure as quickly as possible?
A. Benefit from massive economies of scale
*B. Increase speed and agility
C. Trade fixed expense for variable expense
D. Go global in minutes
https://www.examtopics.com/discussions/amazon/view/147761-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which pillar of the AWS Well-Architected Framework aligns with the ability to make frequent, small, and reversible changes to AWS Cloud architecture?
A. Security
B. Cost optimization
*C. Operational excellence
D. Performance efficiency
https://www.examtopics.com/discussions/amazon/view/147524-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS design principle emphasizes the reduction of interdependencies between components of an application?
A. Scalability
*B. Loose coupling
C. Automation
D. Caching
https://www.examtopics.com/discussions/amazon/view/141202-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is running a reporting web server application on Amazon EC2 instances. The application runs once every week and once again at the end of the month. The EC2 instances can be shut down when they are not in use.\nWhat is the MOST cost-effective billing model for this use case?
A. Standard Reserved Instances
B. Convertible Reserved Instances
C. On-Demand Capacity Reservations
*D. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/147525-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is moving its development and test environments to AWS to increase agility and reduce cost. Because these are not production workloads and the servers are not fully utilized, occasional unavailability is acceptable.\nWhat is the MOST cost-effective Amazon EC2 pricing model that will meet these requirements?
A. Reserved Instances
B. On-Demand Instances
*C. Spot Instances
D. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/144148-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company deploys its application on Amazon EC2 instances. The application occasionally experiences sudden increases in demand. The company wants to ensure that its application can respond to changes in demand at the lowest possible cost.\nWhich AWS service or concept will meet these requirements?
*A. AWS Auto Scaling
B. AWS Compute Optimizer
C. AWS Cost Explorer
D. AWS Well-Architected Framework
https://www.examtopics.com/discussions/amazon/view/151213-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to organize its users so that the company can grant permissions to the users as a group.\nWhich AWS service or tool can the company use to meet this requirement?
A. Security groups
*B. AWS Identity and Access Management (IAM)
C. Resource groups
D. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/151214-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to identify who accessed an AWS service and what action was performed for a given time period.\nWhich AWS service should the company use to meet this requirement?
A. Amazon CloudWatch
*B. AWS CloudTrail
C. AWS Security Hub
D. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/147526-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run CPU-intensive workload across multiple Amazon EC2 instances.\nWhich EC2 instance type should the company use to meet this requirement?
A. General purpose instances
*B. Compute optimized instances
C. Memory optimized instances
D. Storage optimized instances
https://www.examtopics.com/discussions/amazon/view/147610-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which action should a company take to improve security in its AWS account?
*A. Require multi-factor authentication (MFA) for privileged users.
B. Remove the root user account.
C. Create an access key for the AWS account root user.
D. Create an access key for each privileged user.
https://www.examtopics.com/discussions/amazon/view/151216-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to store its files in the AWS Cloud. Users need to be able to download these files directly using a public URL.\nWhich AWS service or feature will meet this requirement?
A. Amazon Redshift
B. Amazon Elastic Block Store (Amazon EBS)
C. Amazon Elastic File System (Amazon EFS)
*D. Amazon S3
https://www.examtopics.com/discussions/amazon/view/142849-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are economic benefits of using the AWS Cloud? (Choose two.)
*A. Consumption-based pricing
B. Perpetual licenses
*C. Economies of scale
D. AWS Enterprise Support at no additional cost
E. Bring-your-own-hardware model
https://www.examtopics.com/discussions/amazon/view/147612-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to store infrequently used data for data archives and long-term backups.\nWhich AWS service or storage class will meet these requirements MOST cost-effectively?
A. Amazon FSx for Lustre
B. Amazon Elastic Block Store (Amazon EBS)
C. Amazon Elastic File System (Amazon EFS)
*D. Amazon S3 Glacier Flexible Retrieval
https://www.examtopics.com/discussions/amazon/view/148583-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to create and publish interactive business intelligence dashboards. The dashboards require insights that are powered by machine learning.\nWhich AWS service or tool will meet these requirements?
A. AWS Glue Studio
*B. Amazon QuickSight
C. Amazon Redshift
D. Amazon Athena
https://www.examtopics.com/discussions/amazon/view/151218-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use AWS. The company has stringent requirements about low-latency access to on-premises systems and data residency.\nWhich AWS service should the company use to design a solution that meets these requirements?
A. AWS Wavelength
B. AWS Transit Gateway
C. AWS Ground Station
*D. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/144123-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs the ability to acquire resources when the resources are needed. The company also needs the ability to release the resources when the resources are no longer needed.\nWhich AWS concept represents the company's goals?
A. Scalability
B. Sustainability
*C. Elasticity
D. Operational excellence
https://www.examtopics.com/discussions/amazon/view/151219-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use Amazon EC2 instances for a stable production workload that will run for 1 year.\nWhich instance purchasing option meets these requirements MOST cost-effectively?
A. Dedicated Hosts
*B. Reserved Instances
C. On-Demand Instances
D. Spot Instances
https://www.examtopics.com/discussions/amazon/view/151221-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to log in securely to Linux Amazon EC2 instances.\nHow can the company accomplish this goal?
*A. Use SSH keys.
B. Use a VPN.
C. Use end-to-end encryption.
D. Use Amazon Route 53.
https://www.examtopics.com/discussions/amazon/view/148514-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use a serverless compute service for an application.\nWhich AWS service will meet this requirement?
*A. AWS Lambda
B. AWS CloudFormation
C. AWS Elastic Beanstalk
D. Elastic Load Balancing
https://www.examtopics.com/discussions/amazon/view/148584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a solution that will automatically adjust the number of Amazon EC2 instances that are being used based on the current load.\nWhich AWS offering will meet these requirements?
A. Dedicated Hosts
B. Placement groups
*C. Auto Scaling groups
D. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/148055-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is building AWS architecture to deliver real-time data feeds from an on-premises data center into an application that runs on AWS. The company needs a consistent network connection with minimal latency.\nWhat should the company use to connect the application and the data center to meet these requirements?
*A. AWS Direct Connect
B. Public internet
C. AWS VPN
D. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/151222-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services can host PostgreSQL databases? (Choose two.)
A. Amazon S3
*B. Amazon Aurora
*C. Amazon EC2
D. Amazon OpenSearch Service
E. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/148515-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area.\nWhich solution achieves this goal?
*A. Use EC2 instances in multiple AWS Regions.
B. Use EC2 instances in multiple edge locations.
C. Use EC2 instances in the same Availability Zone but in different AWS Regions.
D. Use Amazon CloudFront with the EC2 instances configured as the source.
https://www.examtopics.com/discussions/amazon/view/143583-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service allows for file sharing between multiple Amazon EC2 instances?
A. AWS Direct Connect
B. AWS Snowball Edge
C. AWS Backup
*D. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/148585-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to manage multiple logins across AWS accounts within the same organization in AWS Organizations.\nWhich AWS service should the company use to meet this requirement?
A. Amazon VPC
B. Amazon GuardDuty
C. Amazon Cognito
*D. AWS IAM Identity Center
https://www.examtopics.com/discussions/amazon/view/148387-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company uses Amazon WorkSpaces.\nWhich task is the responsibility of AWS, according to the AWS shared responsibility model?
A. Set up multi-factor authentication (MFA) for each WorkSpaces user account.
*B. Ensure the environmental safety and security of the AWS infrastructure that hosts WorkSpaces.
C. Provide security for WorkSpaces user accounts through AWS Identity and Access Management (IAM).
D. Configure AWS CloudTrail to log API calls and user activity.
https://www.examtopics.com/discussions/amazon/view/151226-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which combination of AWS services can be used to move a commercial relational database to an Amazon-managed open-source database? (Choose two.)
*A. AWS Database Migration Service (AWS DMS)
B. AWS software development kits (SDKs)
*C. AWS Schema Conversion Tool
D. AWS Systems Manager
E. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/151228-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service gives users on-demand, self-service access to AWS compliance control reports?
A. AWS Config
B. Amazon GuardDuty
C. AWS Trusted Advisor
*D. AWS Artifact
https://www.examtopics.com/discussions/amazon/view/151229-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are AWS best practice recommendations for the use of AWS Identity and Access Management (IAM)? (Choose two.)
A. Use the AWS account root user for daily access.
B. Use access keys and secret access keys on Amazon EC2.
*C. Rotate credentials on a regular basis.
D. Create a shared set of access keys for system administrators.
*E. Configure multi-factor authentication (MFA).
https://www.examtopics.com/discussions/amazon/view/151230-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run a graph query that provides credit card users’ names, addresses, and transactions. The company wants the graph to show if the names, addresses, and transactions indicates possible fraud.\nWhich AWS database service will meet these requirements?
A. Amazon DocumentDB (with MongoDB compatibility)
B. Amazon Timestream
C. Amazon DynamoDB
*D. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/144181-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides machine learning capability to detect and analyze content in images and videos?
A. Amazon Connect
B. Amazon Lightsail
C. Amazon Personalize
*D. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/151231-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service gives users the ability to deploy highly repeatable infrastructure configurations?
*A. AWS CloudFormation
B. AWS CodeDeploy
C. AWS CodeBuild
D. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148520-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to provide customer service by using voice calls and web chat features.\nWhich AWS service should the company use to meet these requirements?
A. Amazon Aurora
*B. Amazon Connect
C. Amazon WorkSpaces
D. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/147613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is designed to help users handle large amounts of data in a data warehouse environment?
A. Amazon RDS
B. Amazon DynamoDB
*C. Amazon Redshift
D. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/144183-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is building a web application using AWS.\nWhich AWS service will help prevent network layer DDoS attacks against the web application?
A. AWS WAF
B. AWS Firewall Manager
C. Amazon GuardDuty
*D. AWS Shield
https://www.examtopics.com/discussions/amazon/view/147614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following are advantages of moving to the AWS Cloud? (Choose two.)
A. Users can implement all AWS services in seconds.
B. AWS assumes all responsibility for the security of infrastructure and applications.
*C. Users experience increased speed and agility.
*D. Users benefit from massive economies of scale.
E. Users can move hardware from their data center to the AWS Cloud.
https://www.examtopics.com/discussions/amazon/view/175890-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS compute service gives users the ability to securely and reliably run containers at scale?
*A. Amazon Elastic Container Service (Amazon ECS)
B. Amazon Aurora
C. Amazon Athena
D. Amazon Polly
https://www.examtopics.com/discussions/amazon/view/169698-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company runs an application on AWS that performs batch jobs. The application is fault-tolerant and can handle interruptions. The company wants to optimize the cost to run the application.\nWhich AWS offering will meet these requirements?
A. Amazon Macie
B. Amazon Neptune
*C. Amazon EC2 Spot Instances
D. Amazon EC2 On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/151257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service can be used to send alerts when a specific Amazon CloudWatch alarm is invoked?
A. AWS CloudTrail
*B. Amazon Simple Notification Service (Amazon SNS)
C. Amazon Simple Queue Service (Amazon SQS)
D. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/151258-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A cloud practitioner wants to use a highly available and scalable DNS service for its AWS workload.\nWhich AWS service will meet this requirement?
*A. Amazon Route 53
B. Amazon Lightsail
C. AWS Amplify Hosting
D. Amazon S3
https://www.examtopics.com/discussions/amazon/view/151259-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is learning about its responsibilities that are related to the management of Amazon EC2 instances.\nWhich tasks for EC2 instances are the company’s responsibility, according to the AWS shared responsibility model? (Choose two.)
A. Install and patch the machine hypervisor.
*B. Patch the guest operating system.
*C. Encrypt data at rest on associated storage.
D. Install the physical hardware and cabling.
E. Provide physical security for the EC2 instances.
https://www.examtopics.com/discussions/amazon/view/151260-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to migrate a monolithic application to AWS. The company wants to modernize the application by splitting it into microservices. The company will deploy the microservices on AWS.\nWhich migration strategy should the company use?
A. Rehost
B. Repurchase
C. Replatform
*D. Refactor
https://www.examtopics.com/discussions/amazon/view/151154-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user wants to invoke an AWS Lambda function when an Amazon EC2 instance enters the “stopping” state.\nWhich AWS service is appropriate for this use case?
*A. Amazon EventBridge
B. AWS Config
C. Amazon Simple Notification Service (Amazon SNS)
D. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/143585-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature supports governance, compliance, and risk auditing of AWS accounts?
A. Multi-factor authentication (MFA)
B. AWS Lambda
C. Amazon Simple Notification Service (Amazon SNS)
*D. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/148074-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud design principle is a company using when the company implements AWS CloudTrail?
*A. Activate traceability.
B. Use serverless compute architectures.
C. Perform operations as code.
D. Go global in minutes.
https://www.examtopics.com/discussions/amazon/view/147619-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback.\nWhich task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)?
*A. Realign teams to focus on products and value streams.
B. Create new value propositions with new products and services.
C. Use a new data and analytics platform to create actionable insights.
D. Migrate and modernize legacy infrastructure.
https://www.examtopics.com/discussions/amazon/view/148521-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to rightsize its Amazon EC2 instances.\nWhich configuration change will meet this requirement with the LEAST operational overhead?
A. Add EC2 instances in another Availability Zone.
*B. Change the size and type of the EC2 instances based on utilization.
C. Convert the payment method from On-Demand to Savings Plans.
D. Reprovision the EC2 instances with a larger instance type.
https://www.examtopics.com/discussions/amazon/view/147620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service supports user sign-up functionality and authentication to mobile and web applications?
*A. Amazon Cognito
B. AWS Config
C. Amazon GuardDuty
D. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148581-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which benefit of the AWS Cloud helps companies achieve lower usage costs because of the aggregate usage of all AWS users?
A. No need to guess capacity
B. Ability to go global in minutes
*C. Economies of scale
D. Increased speed and agility
https://www.examtopics.com/discussions/amazon/view/151155-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is the responsibility of the customer, according to the AWS shared responsibility model?
A. Patch the Amazon DynamoDB operating system.
B. Secure Amazon CloudFront edge locations by allowing physical access according to the principle of least privilege.
C. Protect the hardware that runs AWS services.
*D. Use AWS Identity and Access Management (IAM) according to the principle of least privilege.
https://www.examtopics.com/discussions/amazon/view/151261-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate all of its on-premises infrastructure to the AWS Cloud. Before migration, the company wants estimate of costs for running its as-is infrastructure.\nWhich AWS service or principle should the company use to meet this requirement?
*A. AWS Pricing Calculator
B. AWS Well-Architected Framework
C. AWS shared responsibility model
D. AWS Cloud Adoption Framework (AWS CAF)
https://www.examtopics.com/discussions/amazon/view/151262-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service supports a company's ability to treat infrastructure as code?
A. AWS CodeDeploy
B. AWS Elastic Beanstalk
C. Amazon API Gateway
*D. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/151263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is building an application that will receive millions of database queries each second. The company needs the data store for the application to scale to meet these needs.\nWhich AWS service will meet this requirement?
*A. Amazon DynamoDB
B. AWS Cloud9
C. Amazon ElastiCache for Memcached
D. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/148076-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An AWS user wants to proactively detect when an instance or account might be compromised or if there are threats from attacks.\nWhich AWS service should the user choose?
*A. Amazon GuardDuty
B. AWS WAF
C. AWS Shield
D. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/148077-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to deploy a PostgreSQL database into Amazon RDS. The database must be highly available and fault tolerant.\nWhich AWS solution should the company use to meet these requirements?
A. Amazon RDS with a single Availability Zone
B. Amazon RDS snapshots
*C. Amazon RDS with multiple Availability Zones
D. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is the MOST secure way to store passwords on AWS?
A. Store passwords in an Amazon S3 bucket.
B. Store passwords as AWS CloudFormation parameters.
C. Store passwords in AWS Storage Gateway.
*D. Store passwords in AWS Secrets Manager.
https://www.examtopics.com/discussions/amazon/view/148078-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which statements accurately describe the relationships among components of AWS global infrastructure? (Choose two.)
A. There are more AWS Regions than Availability Zones.
*B. There are more edge locations than AWS Regions.
C. An edge location is an Availability Zone.
D. There are more AWS Regions than edge locations.
*E. There are more Availability Zones than AWS Regions.
https://www.examtopics.com/discussions/amazon/view/147623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides DNS resolution?
A. Amazon CloudFront
B. Amazon VPC
*C. Amazon Route 53
D. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/151265-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: When designing AWS workloads to be operational even when there are component failures, what is an AWS best practice?
A. Perform quarterly disaster recovery tests.
B. Place the main component on the us-east-1 Region.
*C. Design for automatic failover to healthy resources.
D. Design workloads to fit on a single Amazon EC2 instance.
https://www.examtopics.com/discussions/amazon/view/151266-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following can the AWS Pricing Calculator do?
*A. Project monthly AWS costs.
B. Calculate historical AWS costs.
C. Provide in-depth information about AWS pricing strategies.
D. Provide users with access to their monthly bills.
https://www.examtopics.com/discussions/amazon/view/151267-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user has been granted permission to change their own IAM user password.\nWhich AWS services can the user use to change the password? (Choose two.)
*A. AWS Command Line Interface (AWS CLI)
B. AWS Key Management Sen/ice (AWS KMS)
*C. AWS Management Console
D. AWS Resource Access Manager (AWS RAM)
E. AWS Secrets Manager
https://www.examtopics.com/discussions/amazon/view/148582-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is the customer's responsibility, according to the AWS shared responsibility model?
*A. Patch a guest operating system that is deployed on an Amazon EC2 instance.
B. Control physical access to an AWS data center.
C. Control access to AWS underlying hardware.
D. Patch a host operating system that is deployed on Amazon S3.
https://www.examtopics.com/discussions/amazon/view/151268-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature provides a firewall at the subnet level within a VPC?
A. Security group
*B. Network ACL
C. Elastic network interface
D. AWS WAF
https://www.examtopics.com/discussions/amazon/view/151269-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which guidelines are best practices for using AWS Identity and Access Management (IAM)? (Choose two.)
A. Share access keys.
*B. Create individual IAM users.
C. Use inline policies instead of customer managed policies.
D. Grant maximum privileges to IAM users.
*E. Use groups to assign permissions to IAM users.
https://www.examtopics.com/discussions/amazon/view/151271-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which advantage of cloud computing allows users to scale resources up and down based on the amount of load that an application supports?
A. Go global in minutes
*B. Stop guessing capacity
C. Benefit from massive economies of scale
D. Trade fixed expense for variable expense
https://www.examtopics.com/discussions/amazon/view/151272-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An ecommerce company wants to distribute traffic between the Amazon EC2 instances that host its website.\nWhich AWS service or resource will meet these requirements?
*A. Application Load Balancer
B. AWS WAF
C. AWS CloudHSM
D. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/148101-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS services or features form the AWS Cloud global infrastructure? (Choose two.)
*A. Availability Zones
B. Amazon ElastiCache
*C. AWS Regions
D. Amazon S3
E. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/151273-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: According to the AWS shared responsibility model, which of the following are AWS responsibilities? (Choose two.)
*A. Network infrastructure and virtualization of infrastructure
B. Security of application data
C. Guest operating systems
*D. Physical security of hardware
E. Credentials and policies
https://www.examtopics.com/discussions/amazon/view/150428-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has temporary workload that is also variable. The company needs to use Amazon EC2 instances for the workload. The EC2 instances need to handle short bursts of work that cannot stop before finishing.\nWhich purchase option will meet these requirements?
A. Spot Instances
*B. On-Demand Instances
C. Savings Plan
D. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/141279-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company's employees are working from home. The company wants its employees to use their personal devices to connect to a managed workstation in the AWS Cloud.\nWhich AWS service should the company use to provide the remote environment?
*A. Amazon Workspaces
B. AWS Cloud9
C. AWS Outposts
D. Amazon Lightsail
https://www.examtopics.com/discussions/amazon/view/151175-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company uses Amazon RDS for a product database. The company wants to ensure the database is highly available.\nWhich feature of Amazon RDS will meet this requirement?
A. Read replicas
B. Blue/green deployment
*C. Multi-AZ deployment
D. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/151274-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides serverless compute for use with containers?
A. Amazon Simple Queue Service (Amazon SQS)
*B. AWS Fargate
C. AWS Elastic Beanstalk
D. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/151275-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is using multiple AWS accounts for different business teams. The finance team wants to receive one bill for all of the company's accounts.\nWhich AWS service or tool should the finance team use to meet this requirement?
*A. AWS Organizations
B. AWS Trusted Advisor
C. Cost Explorer
D. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/151276-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs a firewall that will control network connections to and from a single Amazon EC2 instance. This firewall will not control network connections to and from other instances that are in the same subnet.\nWhich AWS service or feature can the company use to meet these requirements?
A. Network ACL
B. AWS WAF
C. Route table
*D. Security group
https://www.examtopics.com/discussions/amazon/view/143630-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is planning to use the Amazon EC2 instances as web servers. Customers from around the world will use the web servers. Most customers will use the web servers only during certain hours of the day.\nHow should the company deploy the EC2 instances to achieve the LOWEST operational cost?
A. In multiple Availability Zones
*B. In an Auto Scaling group
C. In a placement group
D. In private subnets
https://www.examtopics.com/discussions/amazon/view/151277-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which benefit is always free of charge with AWS, regardless of a user’s AWS Support plan?
A. AWS Developer Support
*B. AWS Developer Forums
C. Programmatic case management
D. AWS technical account manager (TAM)
https://www.examtopics.com/discussions/amazon/view/147625-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company uses Amazon EC2 instances to run its application. The application needs to be available and running continuously for three or more years.\nWhat type of EC2 instance should the company purchase for a discount on the EC2 pricing?
*A. Reserved Instances
B. Spot Instances
C. On-Demand Instances
D. EC2 Fleet
https://www.examtopics.com/discussions/amazon/view/140999-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to perform an audit of recent AWS account activity. The audit will investigate who initiated an event and what actions were performed.\nWhich AWS service should the company use to meet these requirements?
A. AWS Config
B. Amazon Rekognition
*C. AWS CloudTrail
D. Amazon Simple Notification Service (Amazon SNS)
https://www.examtopics.com/discussions/amazon/view/141000-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to use AWS technology to deploy a static website.\nWhich solution meets this requirement with the LEAST amount of operational overhead?
A. Deploy the website on Amazon EC2.
B. Host the website on AWS Elastic Beanstalk.
C. Deploy the website with Amazon Lightsail.
*D. Host the website on Amazon S3.
https://www.examtopics.com/discussions/amazon/view/148525-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which recommendation can AWS Cost Explorer provide to help reduce cost?
A. Use a specific database engine.
B. Change the programming language for an application.
C. Deploy a specific operating system.
*D. Terminate an idle instance.
https://www.examtopics.com/discussions/amazon/view/141001-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to deploy an application in multiple Availability Zones in a single AWS Region.\nWhich benefit will this deployment provide to the company?
A. Improved connection performance for global customers
*B. Resilient architecture and a highly available solution
C. Reduced overall data storage costs
D. Ability to shut down an Availability Zone during periods of low demand
https://www.examtopics.com/discussions/amazon/view/141002-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which Amazon EC2 Reserved Instances term commitment will give users the MOST cost savings?
A. 1 year
B. 2 years
*C. 3 years
D. 5 years
https://www.examtopics.com/discussions/amazon/view/140924-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is running big data analytics and massive parallel computations on its AWS test and development servers. The company can tolerate occasional downtime.\nWhat is the MOST cost-effective Amazon EC2 purchasing option for the company to use?
A. On-Demand Instances
*B. Spot Instances
C. Reserved Instances
D. Savings Plans
https://www.examtopics.com/discussions/amazon/view/151279-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has migrated its workload to the AWS Cloud. The company wants to optimize existing Amazon EC2 resources.\nWhich AWS services or tools provide this functionality? (Choose two.)
A. AWS Elastic Beanstalk
*B. AWS Cost Explorer
C. Amazon Detective
*D. AWS Compute Optimizer
E. AWS Billing Conductor
https://www.examtopics.com/discussions/amazon/view/141004-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs an event history of which AWS resources the company has created.\nWhich AWS service will provide this information?
A. Amazon CloudWatch
*B. AWS CloudTrail
C. Amazon Aurora
D. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/147629-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to run relationship databases in the AWS Cloud. The company wants to use a managed service that will install the database and run regular software updates.\nWhich AWS service will meet these requirements?
A. Amazon S3
*B. Amazon RDS
C. Amazon Elastic Block Store (Amazon EBS)
D. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/151284-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service provides a fully managed graph database for highly connected datasets?
A. Amazon DynamoDB
B. Amazon RDS
*C. Amazon Neptune
D. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/151285-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company's cloud environment includes Amazon EC2 instances and Application Load Balancers. The company wants to improve protections for its cloud resources against DDoS attacks. The company also wants to have real-time visibility into any DDoS attacks.\nWhich AWS service will meet these requirements?
A. AWS Shield Standard
B. AWS Firewall Manager
*C. AWS Shield Advanced
D. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/148240-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service enables users to create copies of resources across AWS Regions?
A. Amazon ElastiCache
*B. AWS CloudFormation
C. AWS CloudTrail
D. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148245-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which task is the responsibility of AWS, according to the AWS shared responsibility model?
A. Apply guest operating system patches to Amazon EC2 instances.
B. Provide monitoring of human resources information management (HRIM) systems.
*C. Perform automated backups of Amazon RDS instances.
D. Optimize the costs of running AWS services.
https://www.examtopics.com/discussions/amazon/view/151287-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A user needs to perform a one-time backup of an Amazon Elastic Block Store (Amazon EBS) volume that is attached to an Amazon EC2 instance.\nWhat is the MOST operationally efficient way to perform this backup?
A. Attach another EBS volume to the EC2 instance, and copy the contents.
B. Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect.
*C. Create an EBS snapshot of the volume.
D. Create a custom script to copy the EBS file contents to Amazon S3.
https://www.examtopics.com/discussions/amazon/view/147631-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A developer who has no AWS Cloud experience wants to use AWS technology to build a web application.\nWhich AWS service should the developer use to start building the application?
A. Amazon SageMaker
B. AWS Lambda
*C. Amazon Lightsail
D. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/147632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to manage access and permissions for its third-party software as a service (SaaS) applications. The company wants to use a portal where end users can access assigned AWS accounts and AWS Cloud applications.\nWhich AWS service should the company use to meet these requirements?
A. Amazon Cognito
*B. AWS IAM Identity Center (AWS Single Sign-On)
C. AWS Identity and Access Management (IAM)
D. AWS Directory Service for Microsoft Active Directory
https://www.examtopics.com/discussions/amazon/view/148255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is designed for users running workloads that include a NoSQL database?
A. Amazon RDS
B. Amazon S3
C. Amazon Redshift
*D. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/150416-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a website on AWS. The company wants to deliver the website to a worldwide audience and provide low-latency response times for global users.\nWhich AWS service will meet these requirements?
A. AWS CloudFormation
*B. Amazon CloudFront
C. Amazon ElastiCache
D. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/151288-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to add a conversational chatbot to its website.\nWhich AWS service can the company use to meet this requirement?
A. Amazon Textract
*B. Amazon Lex
C. AWS Glue
D. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/147635-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or feature can be used to monitor for potential disk write spikes on a system that is running on Amazon EC2?
A. AWS CloudTrail
B. AWS Health Dashboard
C. AWS Trusted Advisor
*D. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/147634-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has applications that control on-premises factory equipment.\nWhich AWS service should the company use to run these applications with the LEAST latency?
*A. AWS Outposts
B. Amazon EC2
C. AWS Lambda
D. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/147633-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is the primary use case for Amazon GuardDuty?
A. Prevention of DDoS attacks
B. Protection against SQL injection attacks
*C. Automatic monitoring for threats to AWS workloads
D. Automatic provisioning of AWS resources
https://www.examtopics.com/discussions/amazon/view/147636-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which VPC component can a company use to set up a virtual firewall at the Amazon EC2 instance level?
A. Network ACL
*B. Security group
C. Route table
D. NAT gateway
https://www.examtopics.com/discussions/amazon/view/147637-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A developer needs to interact with AWS by using the AWS CLI.\nWhich security feature or AWS service must be provisioned in the developer's account to meet this requirement?
A. User name and password
B. AWS Systems Manager
C. Root password access
*D. AWS access key
https://www.examtopics.com/discussions/amazon/view/147638-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A food delivery company needs to block users in certain countries from accessing its website.\nWhich AWS service should the company use to meet this requirement?
*A. AWS WAF
B. AWS Control Tower
C. Amazon Fraud Detector
D. Amazon Pinpoint
https://www.examtopics.com/discussions/amazon/view/147639-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is a customer responsibility under the AWS shared responsibility model when using AWS Lambda?
A. Maintenance of the underlying Lambda hardware.
B. Maintenance of the Lambda networking infrastructure.
*C. The code and libraries that run in the Lambda functions.
D. The Lambda server software.
https://www.examtopics.com/discussions/amazon/view/147640-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which tasks are the responsibility of AWS according to the AWS shared responsibility model? (Choose two.)
A. Configure AWS Identity and Access Management (IAM).
B. Configure security groups on Amazon EC2 instances.
*C. Secure the access of physical AWS facilities.
D. Patch applications that run on Amazon EC2 instances.
*E. Perform infrastructure patching and maintenance.
https://www.examtopics.com/discussions/amazon/view/147641-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources.\nWhich AWS service should the company use?
*A. AWS Config
B. AWS Secrets Manager
C. AWS CloudTrail
D. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147643-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to perform a one-time migration of a large dataset with millions of files from its on-premises data center to the AWS Cloud.\nWhich AWS service should the company use for the migration?
A. AWS Database Migration Service (AWS DMS)
*B. AWS DataSync
C. AWS Migration Hub
D. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/147644-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS network services or features allow CIDR block notation when providing an IP address range? (Choose two.)
*A. Security groups
B. Amazon Machine Image (AMI)
*C. Network access control list (network ACL)
D. AWS Budgets
E. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/147645-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to develop an accessibility application that will convert text into audible speech.\nWhich AWS service will meet this requirement?
A. Amazon MQ
*B. Amazon Polly
C. Amazon Neptune
D. Amazon Timestream
https://www.examtopics.com/discussions/amazon/view/147646-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to set up dedicated network connectivity between its on-premises data center and the AWS Cloud. The network cannot use the public internet.\nWhich AWS service or feature will meet these requirements?
A. AWS Transit Gateway
B. AWS VPN
C. Amazon CloudFront
*D. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/147647-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to use dashboards and charts to analyze insights from business data.\nWhich AWS service will provide the dashboards and charts for these insights?
A. Amazon Macie
B. Amazon Aurora
*C. Amazon QuickSight
D. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/147648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its on-premises infrastructure to the AWS Cloud.\nWhich advantage of cloud computing will help the company reduce upfront costs?
A. Go global in minutes
B. Increase speed and agility
C. Benefit from massive economies of scale
*D. Trade fixed expense for variable expense
https://www.examtopics.com/discussions/amazon/view/147649-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is a benefit of using an Elastic Load Balancing (ELB) load balancer with applications running in the AWS Cloud?
A. An ELB will automatically scale resources to meet capacity needs.
*B. An ELB can balance traffic across multiple compute resources.
C. An ELB can span multiple AWS Regions.
D. An ELB can balance traffic between multiple internet gateways.
https://www.examtopics.com/discussions/amazon/view/147652-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to securely store Amazon RDS database credentials and automatically rotate user passwords periodically.\nWhich AWS service or capability will meet these requirements?
A. Amazon S3
B. AWS Systems Manager Parameter Store
*C. AWS Secrets Manager
D. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/147654-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs to have the ability to set up infrastructure for new applications in minutes.\nWhich advantage of cloud computing will help the company meet this requirement?
A. Trade fixed expense for variable expense
B. Go global in minutes
*C. Increase speed and agility
D. Stop guessing capacity
https://www.examtopics.com/discussions/amazon/view/147655-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs a managed NFS file system that the company can use with its AWS compute resources.\nWhich AWS service or feature will meet these requirements?
A. Amazon Elastic Block Store (Amazon EBS)
B. AWS Storage Gateway Tape Gateway
C. Amazon S3 Glacier Flexible Retrieval
*D. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/147656-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to migrate to the AWS Cloud. The company wants to gather information about its on-premises data center.\nWhich AWS service should the company use to meet these requirements?
*A. AWS Application Discovery Service
B. AWS DataSync
C. AWS Storage Gateway
D. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147657-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which tasks are responsibilities of the customer, according to the AWS shared responsibility model? (Choose two.)
A. Secure the virtualization layer.
*B. Encrypt data and maintain data integrity.
C. Patch the Amazon RDS operating system.
*D. Maintain identity and access management controls.
E. Secure Availability Zones.
https://www.examtopics.com/discussions/amazon/view/147658-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost-effective manner.\nWhich AWS Cloud features will help the company meet this requirement? (Choose two.)
A. Cross-Region workload deployment
*B. Pay-as-you-go pricing
C. Built-in AWS CloudTrail audit capabilities
*D. Auto Scaling policies
E. Centralized logging
https://www.examtopics.com/discussions/amazon/view/147659-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants the ability to automatically acquire resources as needed and release the resources when they are no longer needed.\nWhich cloud concept describes this functionality?
A. Availability
*B. Elasticity
C. Durability
D. Reliability
https://www.examtopics.com/discussions/amazon/view/147668-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a cost-effective option when running its applications in an Amazon EC2 instance for short time periods. The applications can be interrupted.\nWhich EC2 instance type will meet these requirements?
*A. Spot Instances
B. On-Demand Instances
C. Reserved Instances
D. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/147669-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has an AWS Business Support plan. The company needs to gain access to the AWS DDoS Response Team (DRT) to help mitigate DDoS events.\nWhich AWS service or resource must the company use to meet these requirements?
A. AWS Shield Standard
B. AWS Enterprise Support
C. AWS WAF
*D. AWS Shield Advanced
https://www.examtopics.com/discussions/amazon/view/147670-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service or tool provides a visualization of historical AWS spending patterns and projections of future AWS costs?
A. AWS Cost and Usage Report
B. AWS Budgets
*C. Cost Explorer
D. Amazon Cloud Watch
https://www.examtopics.com/discussions/amazon/view/147671-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is migrating to the AWS Cloud instead of running its infrastructure on premises.\nWhich of the following are advantages of this migration? (Choose two.)
A. Elimination of the need to perform security auditing
*B. Increased global reach and agility
*C. Ability to deploy globally in minutes
D. Elimination of the cost of IT staff members
E. Redundancy by default for all compute services
https://www.examtopics.com/discussions/amazon/view/147672-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants an AWS service that can automate software deployment in Amazon EC2 instances and on-premises instances.\nWhich AWS service will meet this requirement?
A. AWS CodeCommit
B. AWS CodeBuild
*C. AWS CodeDeploy
D. AWS CodePipeline
https://www.examtopics.com/discussions/amazon/view/147675-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which of the following is a customer responsibility according to the AWS shared responsibility model?
A. Apply security patches for Amazon S3 infrastructure devices.
B. Provide physical security for AWS datacenters.
C. Install operating system updates on Lambda@Edge.
*D. Implement multi-factor authentication (MFA) for IAM user accounts.
https://www.examtopics.com/discussions/amazon/view/147677-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to use an AWS networking solution that can act as a centralized gateway between multiple VPCs and on-premises networks.\nWhich AWS service or feature will meet this requirement?
A. Gateway VPC endpoint
B. AWS Direct Connect
*C. AWS Transit Gateway
D. AWS PrivateLink
https://www.examtopics.com/discussions/amazon/view/147682-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: To assist companies with Payment Card Industry Data Security Standard (PCI DSS) compliance in the cloud, AWS provides:
A. physical Inspections of data centers by appointment.
B. required PCI compliance certifications for any application running on AWS.
*C. an AWS Attestation of Compliance (AOC) report for specific AWS services.
D. professional PCI compliance services.
https://www.examtopics.com/discussions/amazon/view/147683-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: What is the total volume of data that can be stored in Amazon S3?
A. 10 PB
B. 50 PB
C. 100 PB
*D. Virtually unlimited
https://www.examtopics.com/discussions/amazon/view/147685-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which design principle is related to the reliability pillar according to the AWS Well-Architected Framework?
*A. Test recovery procedures
B. Experiment more often
C. Go global in minutes
D. Analyze and attribute to expenditure
https://www.examtopics.com/discussions/amazon/view/147686-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company stores data in an Amazon S3 bucket.\nWhich task is the responsibility of AWS?
A. Configure an S3 Lifecycle policy.
B. Activate S3 Versioning.
C. Configure S3 bucket policies.
*D. Protect the infrastructure that supports S3 storage.
https://www.examtopics.com/discussions/amazon/view/147687-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS service is a fully managed NoSQL database service?
A. Amazon RDS
B. Amazon Redshift
*C. Amazon DynamoDB
D. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/147713-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company deployed an application in multiple AWS Regions around the world. The company wants to improve the application’s performance and availability.\nWhich AWS service will meet these requirements?
*A. AWS Global Accelerator
B. Amazon DataZone
C. AWS Cloud Map
D. AWS Auto Scaling
https://www.examtopics.com/discussions/amazon/view/147714-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate its on-premises SQL Server database to the AWS Cloud. The company wants AWS to handle the day-to-day administration of the database.\nWhich AWS service will meet the company's requirements?
A. Amazon EC2 for Microsoft SQL Server
B. Amazon DynamoDB
*C. Amazon RDS
D. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/147715-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company needs stateless network filtering for its VPC.\nWhich AWS service, tool, or feature will meet this requirement?
A. AWS PrivateLink
B. Security group
*C. Network access control list (ACL)
D. AWS WAF
https://www.examtopics.com/discussions/amazon/view/147716-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which option is an advantage of AWS Cloud computing that minimizes variable costs?
A. High availability
*B. Economies of scale
C. Global reach
D. Agility
https://www.examtopics.com/discussions/amazon/view/147717-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which benefits does a company gain when the company moves from on-premises IT architecture to the AWS Cloud? (Choose two.)
*A. Reduced or eliminated tasks for hardware troubleshooting, capacity planning, and procurement
B. Elimination of the need for trained IT staff
C. Automatic security configuration of all applications that are migrated to the cloud
D. Elimination of the need for disaster recovery planning
*E. Faster deployment of new features and applications
https://www.examtopics.com/discussions/amazon/view/147720-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company that is planning to migrate to the AWS Cloud is based in an isolated area that has limited internet connectivity. The company needs to perform local data processing on premises. The company needs a solution that can operate without a stable internet connection.\nWhich AWS service will meet these requirements?
A. Amazon S3
*B. AWS Snowball Edge
C. AWS Storage Gateway
D. AWS Backup
https://www.examtopics.com/discussions/amazon/view/147722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to build graph queries for real-time fraud pattern detection.\nWhich AWS service will meet this requirement?
*A. Amazon Neptune
B. Amazon DynamoDB
C. Amazon Timestream
D. Amazon Forecast
https://www.examtopics.com/discussions/amazon/view/147723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate to the AWS Cloud. The company needs the ability to acquire resources when the resources are necessary. The company also needs the ability to release those resources when the resources are no longer necessary.\nWhich architecture concept of the AWS Cloud meets these requirements?
*A. Elasticity
B. Availability
C. Reliability
D. Durability
https://www.examtopics.com/discussions/amazon/view/147724-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to deploy a web application as a containerized application. The company wants to use a managed service that can automatically create container images from source code and deploy the containerized application.\nWhich AWS service will meet these requirements?
A. AWS Elastic Beanstalk
B. Amazon Elastic Container Service (Amazon ECS)
*C. AWS App Runner
D. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147725-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has moved all its infrastructure to the AWS Cloud. To plan ahead for each quarter, the finance team wants to track the cost and usage data of all resources from previous months. The finance team wants to automatically generate reports that contains the data.\nWhich AWS service or feature should the finance team use to meet these requirements?
A. Amazon Detective
B. AWS Pricing Calculator
*C. AWS Budgets
D. AWS Savings Plans
https://www.examtopics.com/discussions/amazon/view/147726-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on real-time insights and answers questions about strategy?
A. Operations
B. People
*C. Business
D. Platform
https://www.examtopics.com/discussions/amazon/view/147727-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to migrate critical on-premises production systems to Amazon EC2 instances. The production instances will be used for at least 3 years. The company wants a pricing option that will minimize cost.\nWhich solution will meet these requirements?
A. On-Demand Instances
*B. Reserved Instances
C. Spot Instances
D. AWS Free Tier
https://www.examtopics.com/discussions/amazon/view/147728-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which AWS Well-Architected Framework concept represents a system's ability to remain functional when the system encounters operational problems?
A. Consistency
B. Elasticity
*C. Durability
D. Latency
https://www.examtopics.com/discussions/amazon/view/147729-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: Which pillar of the AWS Well-Architected Framework focuses on the ability to recover automatically from service interruptions?
A. Security
B. Performance efficiency
C. Operational excellence
*D. Reliability
https://www.examtopics.com/discussions/amazon/view/147730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has multiple SQL-based databases located in a data center. The company needs to migrate all database servers to the AWS Cloud to reduce the cost of operating physical servers.\nWhich AWS service or resource will meet these requirements with the LEAST operational overhead?
A. Amazon EC2 instances
*B. Amazon RDS
C. Amazon DynamoDB
D. OpenSearch
https://www.examtopics.com/discussions/amazon/view/147731-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to explore and analyze data in Amazon S3 by using a programming language.\nWhich AWS service will meet these requirements?
A. Amazon Kendra
*B. Amazon Athena
C. Amazon Comprehend
D. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/147734-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants a fully managed service that centralizes and automates data protection across AWS services and hybrid workloads.\nWhich AWS service will meet these requirements?
A. AWS Artifact
*B. AWS Backup
C. AWS Batch
D. AWS Shield
https://www.examtopics.com/discussions/amazon/view/147736-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company plans to migrate its application from on premises to the AWS Cloud. The company needs to gather usage and configuration data for the application components.\nWhich AWS service will meet these requirements?
A. AWS Database Migration Service (AWS DMS)
B. AWS Transfer Family
*C. AWS Application Discovery Service
D. AWS Global Accelerator
https://www.examtopics.com/discussions/amazon/view/147737-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to provide low latency to its users around the world.\nWhich feature of the AWS Cloud meet this requirement?
*A. Global infrastructure
B. Pay as-you-go pricing
C. Managed services
D. Economy of scale
https://www.examtopics.com/discussions/amazon/view/147738-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company has developed a new In-house application. The company does not have a way to determine or predict the usage demand that the application will create.\nWhich AWS Cloud computing benefit is the company seeking?
A. Easy to use
B. Cost-effective
C. Secure
*D. Scalable and high performance
https://www.examtopics.com/discussions/amazon/view/147741-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company purchased Amazon EC2 Standard Reserved Instances (RIs) for a workload in the AWS Cloud. The company needs to move part of the workload to an instance family that does not match the instance family of these Standard RIs.\nHow can the company take advantage of the Standard RIs that it no longer needs?
A. Contact the AWS Support team, and ask the team to sell the Standard RIs
*B. Sell the Standard RIs on the Amazon EC2 Reserved Instance Marketplace
C. Sell the Standard RIs as a third-party seller on the AWS Marketplace
D. Convert the Standard RIs to Savings Plans
https://www.examtopics.com/discussions/amazon/view/147745-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to allow its employees to work remotely from home. The company's employees use Windows or Linux desktops. The company's employees need access from anywhere and at anytime by using any supported devices.\nWhich AWS service will meet these requirements?
*A. Amazon Workspaces
B. Amazon AppStream 2.0
C. Amazon Keyspaces (for Apache Cassandra)
D. AWS Cloud9
https://www.examtopics.com/discussions/amazon/view/147749-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company wants to test a new application.\nWhich AWS principle will help the company test the application?
A. Make long-term commitments in exchange for a cost discount.
*B. Scale up and down when needed without any long-term commitments.
C. Have total control over the application infrastructure.
D. Manage all of the maintenance tasks associated with the cloud.
https://www.examtopics.com/discussions/amazon/view/147750-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

Q: A company is learning about the perspectives of the AWS Cloud Adoption Framework (AWS CAF).\nWhich perspective of the AWS CAF addresses the strategy management capability?
*A. Business perspective
B. People perspective
C. Governance perspective
D. Operations perspective
https://www.examtopics.com/discussions/amazon/view/147753-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---


`;