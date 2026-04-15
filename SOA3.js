// SOA-C03
var SOA3_TEXT = `

Q: A company applies user-defined tags to resources that are associated with the company's AWS workloads. Twenty days after applying the tags, the company notices that it cannot use the tags to filter views in the AWS Cost Explorer console.\nWhat is the reason for this issue?
A. It takes at least 30 days to be able to use tags to filter views in Cost Explorer.
*B. The company has not activated the user-defined tags for cost allocation.
C. The company has not created an AWS Cost and Usage Report.
D. The company has not created a usage budget in AWS Budgets.
https://www.examtopics.com/discussions/amazon/view/369113-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: An environment consists of 100 Amazon EC2 Windows instances. The Amazon CloudWatch agent is deployed and running on all EC2 instances with a baseline configuration file to capture log files. There is a new requirement to capture the DHCP log files that exist on 50 of the instances.\nWhat is the MOST operationally efficient way to meet this new requirement?
*A. Create an additional CloudWatch agent configuration filo to capture the DHCP logs. Use the AWS Systems Manager Run Command to restart the CloudWatch agent on each EC2 instance with the append-config option to apply the additional configuration file.
B. Log in to each EC2 instance with administrator rights. Create a PowerShell script to push the needed baseline log files and DHCP log files to CloudWatch.
C. Run the CloudWatch agent configuration file wizard on each EC2 instance. Verify that the baseline log files are included and add the DHCP log files during the wizard creation process.
D. Run the CloudWatch agent configuration file wizard on each EC2 instance and select the advanced detail level. This will capture the operating system log files.
https://www.examtopics.com/discussions/amazon/view/369114-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A multinational company uses an organization in AWS Organizations to manage over 200 member accounts across multiple AWS Regions. The company must ensure that all AWS resources meet specific security requirements.\nThe company must not deploy any EC2 instances in the ap-southeast-2 Region. The company must completely block root user actions in all member accounts. The company must prevent any user from deleting AWS CloudTrail logs, including administrators.\nThe company requires a centrally managed solution that the company can automatically apply to all existing and future accounts.\nWhich solution will meet these requirements?
A. Create AWS Config rules with remediation actions in each account to detect policy violations. Implement IAM permissions boundaries for the account root users.
B. Enable AWS Security Hub across the organization. Create custom security standards to enforce the security requirements. Use AWS CloudFormation StackSets to deploy the standards to all the accounts in the organization. Set up Security Hub automated remediation actions.
*C. Use AWS Control Tower for account governance. Configure Region deny controls. Use service control policies (SCPs) to restrict root user access.
D. Configure AWS Firewall Manager with security policies to meet the security requirements. Use an AWS Config aggregator with organization-wide conformance packs to detect security policy violations.
https://www.examtopics.com/discussions/amazon/view/383637-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company is storing backups in an Amazon S3 bucket. The backups must not be deleted for at least 3 months after the backups are created.\nWhat should a CloudOps engineer do to meet this requirement?
A. Configure an IAM policy that denies the s3:DeleteObject action for all users. Three months after an object is written, remove the policy.
*B. Enable S3 Object Lock on a new S3 bucket in compliance mode. Place all backups in the new S3 bucket with a retention period of 3 months.
C. Enable S3 Versioning on the existing S3 bucket. Configure S3 Lifecycle rules to protect the backups.
D. Enable S3 Object Lock on a new S3 bucket in governance mode. Place all backups in the new S3 bucket with a retention period of 3 months.
https://www.examtopics.com/discussions/amazon/view/369116-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company's CloudOps engineer is troubleshooting communication between the components of an application. The company configured VPC flow logs to be published to Amazon CloudWatch Logs However, there are no logs in CloudWatch Logs.\nWhat could be blocking the VPC flow logs from being published to CloudWatch Logs?
*A. The IAM policy that is attached to the IAM role for the flow log is missing the logs:CreateLogGroup permission.
B. The IAM policy that is attached to the IAM role for the flow log is missing the logs:CreateExportTask permission.
C. The VPC is configured for IPv6 addresses.
D. The VPC is peered with another VPC in the AWS account
https://www.examtopics.com/discussions/amazon/view/369115-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company is migrating a legacy application to AWS. The company manually installs and configures the legacy application on Amazon EC2 instances across multiple Availability Zones. The company sets up an Application Load Balancer (ALB) for the application. The company sets the target group routing algorithm to weighted random. The application requires session affinity.\nAfter the company deploys the application, users report random application errors that were not present in the legacy version of the application. The target group health checks do not show any failures. The company must resolve the application errors.\nWhich solution will meet this requirement?
*A. Set the routing algorithm of the target group to least outstanding requests.
B. Turn on anomaly mitigation for the target group.
C. Turn off the cross-zone load balancing attribute of the target group.
D. Increase the deregistration delay attribute of the target group.
https://www.examtopics.com/discussions/amazon/view/369117-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company is using an Amazon Aurora MySQL DB cluster that has point-in-time recovery, backtracking, and automatic backup enabled. A CloudOps engineer needs to be able to roll back the DB cluster to a specific recovery point within the previous 72 hours. Restores must be completed in the same production DB cluster.\nWhich solution will meet these requirements?
A. Create an Aurora Replica. Promote the replica to replace the primary DB instance.
B. Create an AWS Lambda function to restore an automatic backup to the existing DB cluster.
*C. Use backtracking to rewind the existing DB cluster to the desired recovery point.
D. Use point-in-time recovery to restore the existing DB duster to the desired recovery point.
https://www.examtopics.com/discussions/amazon/view/369118-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is troubleshooting an AWS CloudFormation stack creation that failed. Before the CloudOps engineer can identify the problem, the stack and its resources are deleted. For future deployments, the CloudOps engineer must preserve any resources that CloudFormation successfully created.\nWhat should the CloudOps engineer do to meet this requirement?
A. Set the value of the DisableRollback parameter to False during stack creation.
*B. Set the value of the OnFailure parameter to DO_NOTHING during stack creation.
C. Specify a rollback configuration that has a rollback trigger of DO_NOTHING during stack creation
D. Set the value of the OnFailure parameter to ROLLBACK during stack creation.
https://www.examtopics.com/discussions/amazon/view/369119-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company plans to run a public web application on Amazon EC2 instances behind an Elastic Load Balancing (ELB) load balancer. The company’s security team wants to protect the website by using AWS Certificate Manager (ACM) certificates. The load balancer must automatically redirect any HTTP requests to HTTPS.\nWhich solution will meet these requirements?
A. Create an Application Load Balancer that has one HTTPS listener on port 80. Attach an SSL/TLS certificate to listener port 80. Create a rule to redirect requests from HTTP to HTTPS.
*B. Create an Application Load Balancer that has one HTTP listener on port 80 and one HTTPS protocol listener on port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443.
C. Create an Application Load Balancer that has two TCP listeners on port 80 and port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443.
D. Create a Network Load Balancer that has two TCP listeners on port 80 and port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443.
https://www.examtopics.com/discussions/amazon/view/369120-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company uses AWS Organizations to manage a set of AWS accounts. The company has set up organizational units (OUs) in the organization. An application OU supports various applications.\nA CloudOps engineer must prevent users from launching Amazon EC2 instances that do not have a CostCenter-Project tag into any account in the application OU. The restriction must apply only to accounts in the application OU.\nWhich solution will meet these requirements?
A. Create an IAM group that has a policy that allows the ec2:RunInstances action when the CostCenter-Project tag is present. Place all IAM users who need access to the application accounts in the IAM group.
*B. Create a service control policy (SCP) that denies the oc2:RunInstances action when the CostCenter-Project tag is missing. Attach the SCP to the application OU.
C. Create an IAM role that has a policy that allows the oc2:RunInstances action when the CostCenter-Project tag is present. Attach the IAM role to the IAM users that are in the application OU accounts.
D. Create a service control policy (SCP) that denies the ec2:RunInstances action when the CostCenter-Project tag is missing. Attach the SCP to the root OU.
https://www.examtopics.com/discussions/amazon/view/369338-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company runs a business application on more than 300 Linux-based instances. Each instance has the AWS Systems Manager Agent (SSM Agent) installed. The company expects the number of instances to grow in the future. All business application instances have the same user-defined tag.\nA CloudOps engineer wants to run a command on all the business application instances to download and install a package from a private repository. To avoid overwhelming the repository, the CloudOps engineer wants to ensure that no more than 30 downloads occur at one time.\nWhich solution will meet this requirement in the MOST operationally efficient way?
A. Use a secondary tag to create 10 batches of 30 instances each. Use a Systems Manager Run Command document to download and install the package. Specify the target as part of the Run\nCommand document by using the secondary tag. Run each batch one time.
B. Use an AWS Lambda function to automatically run a Systems Manager Run Command document that roads a list of instance IDs that have the user-defined tag. Set reserved concurrency for the Lambda function to 30.
*C. Use a Systems Manager Run Command document to download and install the package. Use rate control to set concurrency to 30. Specify the target by using the user-defined tag as part of the Run Command document.
D. Use a parallel workflow state in AWS Step Functions to automatically run a Systems Manager Run Command document that reads a list of instance IDs that have the user-defined tag. Set the number of parallel states to 30. Run the Step Functions workflow 10 times.
https://www.examtopics.com/discussions/amazon/view/369121-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company uses Amazon Route 53 with latency-based routing across multiple AWS Regions to provide resiliency. The company uses Route 53 with latency-based routing to direct traffic to the nearest Region. Within each Region, weighted A records distribute traffic across multiple Availability Zones.\nDuring a recent update, some Availability Zone endpoints became unhealthy. Route 53 continued to route traffic to the unhealthy endpoints. The company must prevent this issue from occurring in the future.\nWhich solution will meet this requirement?
*A. Add a Route 53 health check for each of the weighted records that received traffic during the recent update.
B. Increase the weight of Route 53 records in the Region where traffic must go during updates.
C. Reconfigure all records to use latency-based routing across all Regions uniformly.
D. Reduce the TTL value for latency-based routing to detect changes more quickly.
https://www.examtopics.com/discussions/amazon/view/369122-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company must ensure that all Amazon EC2 Windows instances that are launched in an AWS account have a third-party agent installed. The company uses AWS Systems Manager, and the Windows instances are tagged appropriately. The company must deploy periodic updates to the third-party agent when the updates become available.\nWhich combination of steps will meet these requirements with the LEAST operational effort? (Choose two.)
*A. Create a Systems Manager Distributor package for the third-party agent.
B. Create a Systems Manager OpsItem that includes the tag value for Windows. Attach the Systems Manager inventory to the OpsItem.
C. Create an AWS Lambda function. Program the Lambda function to log in to each instance and to install or update the third-party agent as needed.
D. Create a Systems Manager State Manager association to run the AWS-RunRemoteScript document Populate the details of the third-party agent package.
*E. Create a Systems Manager State Manager association to run the AWS-ConfigureAWSPackage document. Populate the details of the third-party agent package. Specify instance tags based on the appropriate tag value for Windows.
https://www.examtopics.com/discussions/amazon/view/369123-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has deployed Amazon EC2 instances from custom Amazon Machine Images (AMIs) in two AWS Regions. The company registered all the instances with AWS Systems Manager.\nThe company discovers that the operating system on some instances has a significant zero-day exploit. However, the company does not know how many instances are affected.\nA CloudOps engineer must implement a solution to deploy operating system patches for the affected EC2 instances.\nWhich solution will meet this requirement with the LEAST operational overhead?
*A. Define a patch baseline in Systems Manager Patch Manager. Use a Patch Manager scan to identify the affected instances. Use the Patch Now option in each Region to update the affected instances.
B. Use AWS Config to identify the affected instances. Define a patch baseline in Systems Manager Patch Manager. Use the Patch Now option in Patch Manager to update the affected instances.
C. Create an Amazon EventBridge rule to react to Systems Manager Compliance events. Configure the EventBridge rule to run a patch baseline on the affected instances.
D. Use AWS Config to identify the affected instances. Update the existing EC2 AMIs with the desired patch Manually launch instances from the new AMIs to replace the affected instances in both Regions.
https://www.examtopics.com/discussions/amazon/view/369124-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company hosts an FTP server on Amazon EC2 instances. In the company’s AWS environment, AWS Security Hub sends findings for the EC2 instances to Amazon EventBridge because the FTP port has become publicly exposed in the security groups that are attached to the instances.\nA CloudOps engineer wants an automated solution to remediate the Security Hub finding and any similar exposed port findings. The CloudOps engineer wants to use an event-driven approach.\nWhich solution will meet these requirements?
A. Configure the existing EventBridge event to stop the EC2 instances that have the exposed port.
B. Create a cron job for the FTP server to invoke an AWS Lambda function. Configure the Lambda function to modify the security group of the identified EC2 instances and to remove the instances that allow public access.
C. Create a cron job for the FTP server that invokes an AWS Lambda function. Configure the Lambda function to modify the server to use SFTP instead of FTP.
*D. Configure the existing EventBridge event to invoke an AWS Lambda function. Configure the function to remove the security group rule that allows public access.
https://www.examtopics.com/discussions/amazon/view/369125-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company plans to migrate several of its high performance computing (HPC) virtual machines (VMs) to Amazon EC2 instances on AWS. A CloudOps engineer must identify a placement group for this deployment. The strategy must minimize network latency and must maximize network throughput between the HPC VMs.\nWhich strategy should the CloudOps engineer choose to meet these requirements?
*A. Deploy the instances in a cluster placement group in one Availability Zone.
B. Deploy the instances in a partition placement group in two Availability Zones.
C. Deploy the instances in a partition placement group in one Availability Zone.
D. Deploy the instances in a spread placement group in two Availability Zones.
https://www.examtopics.com/discussions/amazon/view/369126-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company manages a set of accounts on AWS by using AWS Organizations. The company's security team wants to use a native AWS service to regularly scan all AWS accounts against the Center for Internet Security (CIS) AWS Foundations Benchmark.\nWhat is the MOST operationally efficient way to meet these requirements?
A. Designate a central security account as the AWS Security Hub administrator account. Create a script that sends an invitation from the Security Hub administrator account and accepts the invitation from the member account. Run the script every time a new account is created. Configure Security Hub to run the CIS AWS Foundations Benchmark scans.
B. Run the CIS AWS Foundations Benchmark across all accounts by using Amazon Inspector.
C. Designate a central security account as the Amazon GuardDuty administrator account. Create a script that sends an invitation from the GuardDuty administrator account and accepts the invitation from the member account. Run the script every time a new account is created. Configure GuardDuty to run the CIS AWS Foundations Benchmark scans.
*D. Designate an AWS Security Hub administrator account. Configure new accounts in the organization to automatically become member accounts. Enable CIS AWS Foundations Benchmark scans.
https://www.examtopics.com/discussions/amazon/view/369127-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has users that deploy Amazon EC2 instances that have more volume performance capacity than is required. A CloudOps engineer needs to review all Amazon Elastic Block Store (Amazon EBS) volumes that are associated with the instances and create cost optimization recommendations based on IOPS and throughput.\nWhat should the CloudOps engineer do to meet these requirements in the MOST operationally efficient way?
A. Use the monitoring graphs in the EC2 console to view metrics for EBS volumes. Review the consumed space against the provisioned space on each volume. Identify any volumes that have low utilization.
B. Stop the EC2 instances from the EC2 console. Change the EC2 instance type to Amazon EBS-optimized. Start the EC2 instances.
*C. Opt in to AWS Compute Optimizer. Allow sufficient time for metrics to be gathered. Review the Compute Optimizer findings for EBS volumes.
D. Install the fio tool onto the EC2 instances and create a .cfg file to approximate the required workloads. Use the benchmark results to gauge whether the provisioned EBS volumes are of the most appropriate type.
https://www.examtopics.com/discussions/amazon/view/369128-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer must ensure that all of a company's current and future Amazon S3 buckets have logging enabled. If an S3 bucket does not have logging enabled, an automated process must enable logging for the S3 bucket.\nWhich solution will meet these requirements?
A. Use AWS Trusted Advisor to perform a check for S3 buckets that do not have logging enabled. Configure the check to enable logging for S3 buckets that do not have logging enabled.
B. Configure an S3 bucket policy that requires all current and future S3 buckets to have logging enabled.
C. Use the s3-bucket-logging-enabled AWS Config managed rule. Add a remediation action that uses an AWS Lambda function to enable logging.
*D. Use the s3-bucket-logging-enabled AWS Config managed rule. Add a remediation action that uses the AWS-ConfigureS3BucketLogging AWS Systems Manager Automation runbook to enable logging.
https://www.examtopics.com/discussions/amazon/view/369129-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has millions of subscribers. The company's marketing department wants to automate a process that sends notifications to subscribers every Saturday. The company already has a mechanism that uses Amazon Simple Notification Service (Amazon SNS) to send notifications to subscribers. However, the company has historically sent notifications to subscribers manually\nA CloudOps engineer needs a solution to automatically send notifications on a schedule.\nWhich solution will meet these requirements in the MOST operationally efficient way?
A. Launch a new Amazon EC2 instance. Configure a cron job to use the AWS SDK to send an SNS notification to subscribers every Saturday.
*B. Create a rule in Amazon EventBridge that triggers every Saturday. Configure the rule to publish a notification to an SNS topic.
C. Create an SNS subscription to a message fanout that sends notifications to subscribers every Saturday.
D. Use the AWS Step Functions scheduling feature to run a Step Functions step every Saturday. Configure the step to publish a message to an SNS topic.
https://www.examtopics.com/discussions/amazon/view/369130-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is responsible for a company’s disaster recovery procedures. The company has a source Amazon S3 bucket in a production account, and it wants to replicate objects from the source to a destination S3 bucket in a nonproduction account. The CloudOps engineer configures S3 cross-Region, cross-account replication to copy the source S3 bucket to the destination S3 bucket. When the CloudOps engineer attempts to access objects in the destination S3 bucket, they receive an Access Denied error.\nWhich solution will resolve this problem?
*A. Modify the replication configuration to change object ownership to the destination S3 bucket owner.
B. Ensure that the replication rule applies to all objects in the source S3 bucket and is not scoped to a single prefix.
C. Retry the request when the S3 Replication Time Control (S3 RTC) has elapsed.
D. Verify that the storage class for the replicated objects did not change between the source S3 bucket and the destination S3 bucket.
https://www.examtopics.com/discussions/amazon/view/369131-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: An Amazon EC2 instance is running an application that uses Amazon Simple Queue Service (Amazon SQS) queues. A CloudOps engineer must ensure that the application can read write, and delete messages from the SQS queues.\nWhich solution will meet these requirements in the MOST secure manner?
A. Create an IAM user with an IAM policy that allows the sqs:SendMessage permission, the sqsReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues. Embed the IAM user's credentials in the application’s configuration.
B. Create an IAM user with an IAM policy that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues. Export the IAM user's access key and secret access key as environment variables on the EC2 instance.
C. Create and associate an IAM role that allows EC2 instances to call AWS services. Attach an IAM policy to the role that allows sqs:* permissions to the appropriate queues.
*D. Create and associate an IAM role that allows EC2 instances to call AWS services. Attach an IAM policy to the role that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues.
https://www.examtopics.com/discussions/amazon/view/369132-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is designing a solution for an Amazon RDS for PostgreSQL DB instance. Database credentials must be stored and rotated monthly. The applications that connect to the DB instance send write-intensive traffic with variable client connections that sometimes increase significantly in a short period of time.\nWhich solution should a CloudOps engineer choose to meet these requirements?
A. Configure AWS Key Management Service (AWS KMS) to automatically rotate the keys for the DB instance. Use RDS Proxy to handle the increases in database connections.
B. Configure AWS Key Management Service (AWS KMS) to automatically rotate the keys for the DB instance. Use RDS read replicas to handle the increases in database connections.
*C. Configure AWS Secrets Manager to automatically rotate the credentials for the DB instance. Use RDS Proxy to handle the increases in database connections.
D. Configure AWS Secrets Manager to automatically rotate the credentials for the DB instance. Use RDS read replicas to handle the increases in database connections.
https://www.examtopics.com/discussions/amazon/view/369133-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company operates compute resources in a VPC and in the company’s on-premises data center. The company already has an AWS Direct Connect connection between the VPC and the on-premises data center. A CloudOps engineer needs to ensure that Amazon EC2 instances in the VPC can resolve DNS names for hosts in the on-premises data center.\nWhich solution will meet this requirement with the LEAST amount of ongoing maintenance?
A. Create an Amazon Route 53 private hosted zone. Populate the zone with the hostnames and IP addresses of the hosts in the on-premises data center.
*B. Create an Amazon Route 53 Resolver outbound endpoint. Add the IP addresses of an on-premises DNS server for the domain names that need to be forwarded.
C. Set up a forwarding rule for reverse DNS queries in Amazon Route 53 Resolver. Set the enableDnsHostnames attribute to true for the VPC.
D. Add the hostnames and IP addresses for the on-premises hosts to the /etc/hosts file of each EC2 instance.
https://www.examtopics.com/discussions/amazon/view/369134-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company hosts a web application on an Amazon EC2 instance. The web server logs are published to Amazon CloudWatch Logs. The log events have the same structure and include the HTTP response codes that are associated with the user requests. The company needs to monitor the number of times that the web server returns an HTTP 404 response.\nWhat is the MOST operationally efficient solution that meets these requirements?
*A. Create a CloudWatch Logs metric filter that counts the number of times that the web server returns an HTTP 404 response.
B. Create a CloudWatch Logs subscription filter that counts the number of times that the web server returns an HTTP 404 response.
C. Create an AWS Lambda function that runs a CloudWatch Logs Insights query that counts the number of 404 codes in the log events during the past hour.
D. Create a script that runs a CloudWatch Logs Insights query that counts the number of 404 codes in the log events during the past hour.
https://www.examtopics.com/discussions/amazon/view/369340-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has an internal web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group in a single Availability Zone. A CloudOps engineer must make the application highly available.\nWhich action should the CloudOps engineer take to meet this requirement?
A. Increase the maximum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage.
B. Increase the minimum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage.
*C. Update the Auto Scaling group to launch new instances in a second Availability Zone in the same AWS Region.
D. Update the Auto Scaling group to launch new instances in an Availability Zone in a second AWS Region.
https://www.examtopics.com/discussions/amazon/view/369135-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is creating a simple, public-facing website running on Amazon EC2. The CloudOps engineer created the EC2 instance in an existing public subnet and assigned an Elastic IP address to the instance. Next, the CloudOps engineer created and applied a new security group to the instance to allow incoming HTTP traffic from 0.0.0.0/0. Finally, the CloudOps engineer created a new network ACL and applied it to the subnet to allow incoming HTTP traffic from 0.0.0.0/0. However, the website cannot be reached from the internet.\nWhat is the cause of this issue?
*A. The CloudOps engineer did not create an outbound rule that allows ephemeral port return traffic in the new network ACL
B. The CloudOps engineer did not create an outbound rule in the security group that allows HTTP traffic from port 80.
C. The Elastic IP address assigned to the EC2 instance has changed.
D. There is an additional network ACL associated with the subnet that includes a rule that denies inbound HTTP traffic from port 80.
https://www.examtopics.com/discussions/amazon/view/369137-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company wants to use AWS Systems Manager to manage a large fleet of Amazon EC2 instances. The company hosts the instances in private subnets. The company follows the principle of least privilege to assign access permissions. All private subnets have internet connectivity through a NAT gateway.\nA CloudOps engineer installs the latest version of the Systems Manager Agent (SSM Agent). However, the EC2 instances do not appear in Systems Manager Fleet Manager. The CloudOps engineer must resolve this issue.\nWhich solution will meet this requirement?
A. Replace the NAT gateway with a NAT instance that is deployed in the public subnet. Update the private subnet's route table to use the NAT instance.
B. Create a VPC endpoint for Systems Manager. Remove routes to the internet through the NAT gateway from the private subnet's route table.
*C. Attach the AmazonSSMManagedInstanceCore AWS managed policy to the EC2 instance profile that is associated with the instances.
D. Attach a custom policy that allows all actions to ssm* to the EC2 instance profile that is associated with the instances.
https://www.examtopics.com/discussions/amazon/view/369136-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has an application that collects notifications from thousands of alarm systems. The notifications include alarm notifications and information notifications. The information notifications include the system arming processes, disarming processes, and sensor status.\nAll notifications are kept as messages in an Amazon Simple Queue Service (Amazon SQS) queue. Amazon EC2 instances that are in an Auto Scaling group process the messages. A CloudOps engineer needs to implement a solution that prioritizes alarm notifications over information notifications.\nWhich solution will meet these requirements?
A. Adjust the Auto Scaling group to scale faster when a high number of messages is in the queue.
B. Use the Amazon Simple Notification Service (Amazon SNS) fanout feature with Amazon SQS to send the notifications in parallel to all the EC2 instances.
C. Add an Amazon DynamoDB stream to accelerate the message processing.
*D. Create a queue for alarm notifications and a queue for information notifications. Update the application to collect messages from the alarm notifications queue first.
https://www.examtopics.com/discussions/amazon/view/369138-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company is implementing security and compliance by using AWS Trusted Advisor. The company’s CloudOps team is validating the list of Trusted Advisor checks that it can access.\nWhich factor will affect the quantity of available Trusted Advisor checks?
A. Whether at least ono Amazon EC2 instance is in the running state
*B. The AWS Support plan
C. An AWS Organizations service control policy (SCP)
D. Whether the AWS account root user has multi-factor authentication (MFA) enabled
https://www.examtopics.com/discussions/amazon/view/369139-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer has successfully deployed a VPC with an AWS CloudFormation template The CloudOps engineer wants to deploy the same template across multiple accounts that are managed through AWS Organizations.\nWhich solution will meet this requirement with the LEAST operational overhead?
A. Assume the OrganizationAccountAccessRole IAM role from the management account. Deploy the template in each of the accounts.
B. Create an AWS Lambda function to assume a role in each account. Deploy the template by using the AWS CloudFormation CreateStack API call.
C. Create an AWS Lambda function to query for a list of accounts. Deploy the template by using the AWS CloudFormation CreateStack API call.
*D. Use AWS CloudFormation StackSets from the management account to deploy the template in each of the accounts.
https://www.examtopics.com/discussions/amazon/view/369342-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company's application is hosted by an internet provider at app.example.com. The company wants to access the application by using www.company.com, which the company owns and manages with Amazon Route 53.\nWhich Route 53 record should be created to address this?
A. A record
B. Alias record
*C. CNAME record
D. Pointer (PTR) record
https://www.examtopics.com/discussions/amazon/view/369140-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company uses Amazon ElastiCache (Redis OSS) to cache application data. A CloudOps engineer must implement a solution to increase the resilience of the cache. The solution also must minimize the recovery time objective (RTO).\nWhich solution will meet these requirements?
A. Replace ElastiCache (Redis OSS) with ElastiCache (Memcached).
B. Create an Amazon EventBridge rule to initiate a backup every hour. Restore the backup when necessary.
*C. Create a read replica in a second Availability Zone. Enable Multi-AZ for the ElastiCache (Redis OSS) replication group.
D. Enable automatic backups. Restore the backups when necessary.
https://www.examtopics.com/discussions/amazon/view/369141-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has multiple AWS accounts. A CloudOps engineer uses a sandbox account to create and verify IAM policies for use in a production account. The CloudOps engineer uses AWS CloudFormation to deploy policies to the sandbox account for testing. When tests pass, the CloudOps engineer deploys the policies to production. The CloudOps engineer has configured AWS CloudTrail in both the sandbox account and the production account.\nThe CloudOps engineer wants to detect any changes to the IAM policies after the policies have been deployed by CloudFormation. The CloudOps engineer must receive notifications for any changes to the policies.\nWhich solution will meet these requirements with the LEAST administrative effort?
A. Configure CloudTrail to send email notifications to the CloudOps engineer when CloudTrail detects changes to the IAM policies.
*B. Create an Amazon EventBridge rule to invoke an AWS Lambda function to check the CloudFormation stack for drift. Configure the function to use Amazon Simple Notification Service (Amazon SNS) to notify the CloudOps engineer if the function detects any drift.
C. Use AWS Identity and Access Management Access Analyzer to generate a policy based on CloudTrail activity for the IAM role that is attached to the IAM policies in the production account. Compare the results to the IAM policies that are in the sandbox account. Send a notification to the CloudOps engineer if the policies are different.
D. Store the IAM policies as a JSON document in an Amazon S3 bucket. Use an AWS Lambda function to periodically compare the IAM policies with the JSON document that is stored in the S3 bucket.
https://www.examtopics.com/discussions/amazon/view/369142-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A finance company stores confidential data in an Amazon S3 bucket. The company uses Amazon QuickSight to analyze the data and create dashboard reports. The company requires that all data access and connections to QuickSight remain within the company's VPC network boundary.\nWhich solution will meet these requirements?
*A. Create an interface VPC endpoint for QuickSight. Configure the endpoint to connect to QuickSight within the VPC by using AWS PrivateLink. Create a manifest file that points to the S3 data. Grant QuickSight permission to access the S3 bucket.
B. Set up a VPC endpoint for QuickSight. Use an Amazon EC2 instance as a proxy to establish a direct connection between the VPC and QuickSight. Create a manifest file that points to the S3 data. Store the manifest on the EC2 instance. Grant QuickSight permission to access the EC2 instance.
C. Configure an Amazon S3 VPC gateway endpoint. Route all data from QuickSight through the endpoint to transfer data. Grant QuickSight permission to access the S3 bucket.
D. Configure a NAT gateway in the company’s VPC. Route all data from QuickSight through the NAT gateway to transfer data. Grant QuickSight permission to access the S3 bucket.
https://www.examtopics.com/discussions/amazon/view/369143-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company is migrating its production file server to AWS. All data that is stored on the file server must remain accessible if an Availability Zone becomes unavailable or when system maintenance is performed. Users must be able to interact with the file server through the SMB protocol Users also must have the ability to manage file permissions by using Windows ACLs.\nWhich solution will meet these requirements?
A. Create a single AWS Storage Gateway file gateway.
*B. Create an Amazon FSx for Windows File Server Multi-AZ file system.
C. Deploy two AWS Storage Gateway file gateways across two Availability Zones. Configure an Application Load Balancer in front of the file gateways.
D. Deploy two Amazon FSx for Windows File Server Single-AZ 2 file systems Configure Microsoft Distributed File System Replication (DFSR).
https://www.examtopics.com/discussions/amazon/view/369144-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has a web application that is experiencing performance problems many times each night. A root cause analysis reveals sudden increases in CPU utilization that last 5 minutes on an Amazon EC2 Linux instance. A CloudOps engineer must find the process ID (PID) of the service or process that is consuming more CPU.\nWhat should the CloudOps engineer do to collect the process utilization information with the LEAST amount of effort?
*A. Configure the Amazon CloudWatch agent procstat plugin to capture CPU process metrics.
B. Configure an AWS Lambda function to run every minute to capture the PID and send a notification.
C. Log in to the EC2 instance by using a .pem key each night. Then run the top command.
D. Use the default Amazon CloudWatch CPU utilization metric to capture the PID in CloudWatch.
https://www.examtopics.com/discussions/amazon/view/369215-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company needs to monitor its website's availability to end users. The company needs a solution to provide an Amazon Simple Notification Service (Amazon SNS) notification if the website's uptime decreases to less than 99%. The monitoring must provide an accurate view of the user experience on the website.\nWhich solution will meet these requirements?
A. Create an Amazon CloudWatch alarm that is based on the website’s logs that are published to a CloudWatch Logs log group. Configure the alarm to publish an SNS notification if the number of HTTP 4xx errors and 5xx errors exceeds a specified threshold.
B. Create an Amazon CloudWatch alarm that is based on the website's published metrics in CloudWatch. Configure the alarm to publish an SNS notification that is based on anomaly detection.
*C. Create an Amazon CloudWatch Synthetics heartbeat monitoring canary. Associate the canary with the website's URL for end users. Create a CloudWatch alarm for the canary. Configure the alarm to publish an SNS notification if the value of the SuccessPercent metric is less than 99%.
D. Create an Amazon CloudWatch Synthetics broken link checker monitoring canary. Associate the canary with the website's URL for end users. Create a CloudWatch alarm for the canary. Configure the alarm to publish an SNS notification if the value of the SuccessPercent metric is less than 99%.
https://www.examtopics.com/discussions/amazon/view/369147-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company uses Amazon EC2 Auto Scaling across multiple Availability Zones. The company must ensure that EC2 instances are provisioned in private subnets.\nThe company recently optimized its cloud infrastructure by reducing the number of NAT gateways in the company’s VPC to one. Some EC2 instances lost internet connectivity after the infrastructure update. A CloudOps engineer must resolve the connectivity issue.\nWhich solution will meet this requirement?
A. Replace the existing NAT gateway with a NAT instance in the same subnet.
*B. Update VPC route tables to target the existing NAT gateway for internet traffic.
C. Update VPC route tables to target an internet gateway for internet traffic.
D. Add secondary IP addresses to the existing NAT gateway.
https://www.examtopics.com/discussions/amazon/view/369145-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company uses AWS CloudFormation to manage a stack of Amazon EC2 instances on AWS. A CloudOps engineer needs to keep the instances and all of the instances’ data, even if someone deletes the stack.\nWhich solution will meet these requirements?
A. Set the DeletionPolicy attribute to Snapshot for the EC2 instance resource in the CloudFormation template.
B. Automate backups by using Amazon Data Lifecycle Manager (Amazon DLM).
C. Create a backup plan in AWS Backup.
*D. Set the DeletionPolicy attribute to Retain for the EC2 instance resource in the CloudFormation template.
https://www.examtopics.com/discussions/amazon/view/369146-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is preparing to deploy an application to Amazon EC2 instances that are in an Auto Scaling group. The application requires dependencies to be installed. Application updates are issued weekly.\nThe CloudOps engineer needs to implement a solution to incorporate the application updates on a regular basis. The solution also must conduct a vulnerability scan during Amazon Machine Image (AMI) creation.\nWhat is the MOST operationally efficient solution that meets these requirements?
A. Create a script that uses Packer. Schedule a cron job to run the script.
B. Install the application and its dependencies on an EC2 instance. Create an AMI of the EC2 instance.
*C. Use EC2 Image Builder with a custom recipe to install the application and its dependencies.
D. Invoke the EC2 CreateImage API operation by using an Amazon EventBridge scheduled rule.
https://www.examtopics.com/discussions/amazon/view/369341-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company is planning to host an application on a set of Amazon EC2 instances that are distributed across multiple Availability Zones. The application must be able to scale to millions of requests each second.\nA CloudOps engineer must design a solution to distribute the traffic to the EC2 instances. The solution must be optimized to handle sudden and volatile traffic patterns while using a single static IP address for each Availability Zone.\nWhich solution will meet these requirements?
A. Amazon Simple Queue Service (Amazon SQS) queue
B. Application Load Balancer
C. AWS Global Accelerator
*D. Network Load Balancer
https://www.examtopics.com/discussions/amazon/view/369148-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has a stateful web application that is hosted on Amazon EC2 instances in an Auto Scaling group. The instances run behind an Application Load Balancer (ALB) that has a single target group. The ALB is configured as the origin in an Amazon CloudFront distribution. Users are reporting random logouts from the web application.\nWhich combination of actions should a CloudOps engineer take to resolve this problem? (Choose two.)
A. Change to the least outstanding requests algorithm on the ALB target group,
*B. Configure cookie forwarding in the CloudFront distribution cache behavior.
C. Configure header forwarding in the CloudFront distribution cache behavior.
D. Enable group-level stickiness on the ALB listener rule.
*E. Enable sticky sessions on the ALB target group
https://www.examtopics.com/discussions/amazon/view/369149-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A global company uses an organization in AWS Organizations to manage multiple AWS accounts. To comply with regulations, the company deploys workload environments to five AWS Regions. The company has a separate AWS account for each Region.\nThe company needs to connect every environment's VPC to a central shared VPC that serves as a directory and to a shared monitoring VPC. The shared accounts are each in separate AWS accounts.\nWhich solution will meet these requirements?
A. Create a transit gateway in the central shared AWS account. Share the transit gateway with the company's AWS accounts. Connect all VPCs to the central transit gateway.
*B. Create a separate transit gateway in every Region where the company has deployed resources. Share the transit gateways with company's AWS accounts. Connect the VPC in each Region to the transit gateway that is in the same Region. Peer the transit gateways. Create appropriate routes in all route tables.
C. Create a virtual private gateway for the shared VPCs. Create a customer gateway for the workload VPCs. Configure an AWS Site-to-Site VPN connection between the directory VPC, the monitoring VPC, and every workload VPC.
D. Create VPC peering connections between the central shared VPC, the shared monitoring VPC, and every workload VPC.
https://www.examtopics.com/discussions/amazon/view/369150-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company stores critical information in an Amazon RDS for PostgreSQL database. The company notices degraded performance, high CPU utilization, increased query latency, and connection timeouts during peak shopping hours. The company also identifies surges in user connections during peak hours. The connection surges affect the read performance of the database.\nThe company wants to resolve the database performance issues.\nWhich combination of steps will meet this requirement? (Choose two.)
*A. Use Amazon RDS Performance Insights to analyze the SQL queries that most affect database performance. Update the SQL queries based on the analysis findings.
B. Use Amazon CloudWatch Logs Insights to analyze the database queries and identify performance bottlenecks. Update the queries based on the analysis findings.
C. Use Amazon RDS for PostgreSQL with a single Availability Zone.
D. Disable connection pooling entirely to ensure that all user connections are treated equally, even during peak hours.
*E. Implement RDS Proxy with connection pooling.
https://www.examtopics.com/discussions/amazon/view/369151-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company runs a web application on three Amazon EC2 instances behind an Application Load Balancer (ALB). The company notices that random periods of increased traffic cause a degradation in the application’s performance. A CloudOps engineer must scale the application to meet the increased traffic.\nWhich solution meets these requirements?
A. Create an Amazon CloudWatch alarm to monitor application latency and increase the size of each EC2 instance if the desired threshold is reached.
B. Create an Amazon EventBridge rule to monitor application latency and add an EC2 instance to the ALB if the desired threshold is reached.
*C. Deploy the application to an Auto Scaling group of EC2 instances with a target tracking scaling policy. Attach the ALB to the Auto Scaling group.
D. Deploy the application to an Auto Scaling group of EC2 instances with a scheduled scaling policy. Attach the ALB to the Auto Scaling group.
https://www.examtopics.com/discussions/amazon/view/369216-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company’s reporting job that used to run in 15 minutes is now taking an hour to run. An application generates the reports. The application runs on Amazon EC2 instances and extracts data from an Amazon RDS for MySQL database.\nA CloudOps engineer checks the Amazon CloudWatch dashboard for the RDS instance and notices that the Read IOPS metrics are high, even when the reports are not running. The CloudOps engineer needs to improve the performance and the availability of the RDS instance.\nWhich solution will meet these requirements?
A. Configure an Amazon ElastiCache cluster in front of the RDS instance. Update the reporting job to query the ElastiCache cluster.
*B. Deploy an RDS read replica. Update the reporting job to query the reader endpoint.
C. Create an Amazon CloudFront distribution. Set the RDS instance as the origin. Update the reporting job to query the CloudFront distribution.
D. Increase the size of the RDS instance.
https://www.examtopics.com/discussions/amazon/view/369217-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company that runs multiple workloads on AWS wants to enhance its security posture by implementing DNS-based threat protection. The company must block DNS-based attacks.\nWhich solution will meet this requirement?
A. Deploy AWS Shield Advanced to filter and block malicious DNS queries. Set up domain filtering policies.
B. Use AWS WAF to inspect DNS traffic for malicious domains. Create custom rules to block known threats.
*C. Configure Amazon Route 53 Resolver to forward DNS queries to Route 53 Resolver DNS Firewall Advanced to detect and filter threats.
D. Configure AWS Config to monitor DNS queries and DNS traffic patterns. Use an AWS Lambda function to prevent access to malicious domains.
https://www.examtopics.com/discussions/amazon/view/369343-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer wants to share a copy of a production database with a migration account. The production database is hosted on an Amazon RDS DB instance and is encrypted at rest with an AWS Key Management Service (AWS KMS) key that has an alias of production-rds-key.\nWhat must the CloudOps engineer do to meet these requirements with the LEAST administrative overhead?
*A. Take a snapshot of the RDS DB instance in the production account. Amend the KMS key policy of the production-rds-key KMS key to give access to the migration account’s root user. Share the snapshot with the migration account.
B. Create an RDS read replica in the migration account. Configure the KMS key policy to replicate the production-rds-key KMS key to the migration account.
C. Take a snapshot of the RDS DB instance in the production account. Share the snapshot with the migration account. In the migration account, create a new KMS key that has an identical alias.
D. Use native database toolsets to export the RDS DB instance to Amazon S3. Create an S3 bucket and an S3 bucket policy for cross-account access between the production account and the migration account. Use native database toolsets to import the database from Amazon S3 to a new RDS DB instance.
https://www.examtopics.com/discussions/amazon/view/369152-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has a critical serverless application that uses multiple AWS Lambda functions. Each Lambda function generates 1 GB of log data daily in its own Amazon CloudWatch Logs log group. The company’s security team asks for a count of application errors, grouped by type, across all of the log groups.\nWhat should a CloudOps engineer do to meet this requirement?
*A. Perform a CloudWatch Logs Insights query that uses the stats command and count function.
B. Perform a CloudWatch Logs search that uses the groupby keyword and count function.
C. Perform an Amazon Athena query that uses the SELECT and GROUP BV keywords.
D. Perform an Amazon RDS query that uses the SELECT and GROUP BY keywords.
https://www.examtopics.com/discussions/amazon/view/369153-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A developer uses an Amazon Linux Amazon Machine Image (AMI) to launch an EC2 instance that hosts a third-party application. The application occasionally becomes unstable. The CloudOps engineer needs a solution to automatically reboot the EC2 instance whenever utilization is above 90% for 15 minutes and to notify the developer about the reboot.\nWhich solution will meet these requirements with the LEAST administrative effort?
A. Configure an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to invoke an AWS Lambda function to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the CloudWatch alarm activates. Configure the Lambda function to reboot the EC2 instance. Subscribe the developer to the SNS topic.
*B. Create an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic and to perform an EC2 action to reboot the instance. Subscribe the developer to the SNS topic.
C. Create an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance Configure the alarm to invoke an AWS Systems Manager action to create an incident to notify the developer and request the reboot.
D. Create an AWS Systems Manager runbook script to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and to reboot the EC2 instance. Subscribe the developer to the SNS topic. Configure an Amazon CloudWatch alarm to run the Systems Manager runbook when CPU utilization for the instance remains above 90% for more than 15 minutes.
https://www.examtopics.com/discussions/amazon/view/369218-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has a microservice that runs on a set of Amazon EC2 instances. The EC2 instances run behind an Application Load Balancer (ALB).\nA CloudOps engineer must use Amazon Route 53 to create a record that maps the ALB URL to example.com.\nWhich type of record will meet this requirement?
A. An A record
B. An AAAA record
*C. An alias record
D. A CNAME record
https://www.examtopics.com/discussions/amazon/view/369154-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The application takes up to 2 minutes to populate a local cache after the application is started. The application reports as healthy in the target group health check a few seconds after starting.\nA CloudOps engineer observes that after some of the instances are rebooted, the instances receive an equal share of the traffic immediately after each instance reports as healthy. The application needs to receive a gradually increasing share of the traffic while the application cache is populated.\nWhich solution will meet this requirement?
*A. Change the slow_start.duration_seconds target group attribute to 120 seconds. Before rebooting the instances, deregister the instances from the target group. After rebooting the instances, register the instances with the target group.
B. Change the HealthCheckTimeoutSeconds paramotor in the target group to 120 seconds. Before rebooting the instances, deregister the instances from the target group. After rebooting the instances, register the instances with the target group.
C. Configure an Amazon CloudWatch alarm to monitor the health check status. Configure the action of the alarm to restart an EC2 instance if a health check fails. Change the loadbalancing.algorithm.type target group attribute to be weighted_random.
D. Create an Amazon EC2 Auto Scaling group. Attach the existing EC2 instances to the Auto Scaling group. Configure an EC2 Auto Scaling lifecycle hook to move starting instances to the\nPending Wait state. Update the application to complete the lifecycle hook when the local cache has been populated.
https://www.examtopics.com/discussions/amazon/view/369155-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company runs an application on Amazon EC2 instances. The application stores and retrieves data from an Amazon Aurora PostgreSQL database. A developer accidentally drops a table from the database, which causes application errors. Two hours later, a CloudOps engineer needs to recover the data and make the application function again.\nWhich solution will meet this requirement?
A. Use the Aurora Backtrack feature to rewind the database to a specified time, 2 hours in the past.
B. Perform a point-in-time recovery on the existing database to restore the database to a specified point in time, 2 hours in the past.
*C. Perform a point-in-time recovery and create a new database to restore the database to a specified point in time, 2 hours in the past. Reconfigure the application to use a new database endpoint.
D. Create a new Aurora cluster. Choose the Restore data from S3 bucket option. Choose log files up to the failure time 2 hours in the past.
https://www.examtopics.com/discussions/amazon/view/369222-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company runs several workloads on AWS. The company identifies five AWS Trusted Advisor service quota metrics to monitor in a specific AWS Region. The company wants to receive email notification each time resource usage exceeds 60% of one of the service quotas.\nWhich solution will meet these requirements?
*A. Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas.
B. Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.
C. Use the AWS Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.
D. Use the AWS Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas.
https://www.examtopics.com/discussions/amazon/view/369156-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is troubleshooting an implementation of Amazon CloudWatch Synthetics. The CloudWatch Synthetics results must be sent to an Amazon S3 bucket.\nThe CloudOps engineer has copied the configuration of an existing canary that runs on a VPC that has an internet gateway attached. However, the CloudOps engineer cannot get the canary to successfully start on a private VPC that has no internet access.\nWhat should the CloudOps engineer do to successfully run the canary on the private VPC?
A. Ensure that the DNS resolution option and the DNS hostnames option are turned on in the VPC. Add the synthetics:GetCanaryRuns permission to the VPC. On the S3 bucket, add the IgnorePublicAcls permission to the CloudWatch Synthetics role.
B. Ensure that the DNS resolution option and the DNS hostnames option are turned off in the VPC. Create a gateway VPC endpoint for Amazon S3. Add the permissions to allow CloudWatch Synthetics to use the S3 endpoint.
C. Ensure that the DNS resolution option and the DNS hostnames option are turned off in the VPAdd a security group to the canary to allow outbound traffic on the DNS port. Add the permissions to allow CloudWatch Synthetics to write to the S3 bucket.
*D. Ensure that the DNS resolution option and the DNS hostnames option are turned on in the VPC. Create an interface VPC endpoint for CloudWatch. Create a gateway VPC endpoint for Amazon S3. Add the permissions to allow CloudWatch Synthetics to use both endpoints.
https://www.examtopics.com/discussions/amazon/view/369157-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company deploys AWS infrastructure in a VPC that has an internet gateway. The VPC has public subnets and private subnets. An Amazon RDS for MySQL DB instance is deployed in a private subnet. An AWS Lambda function uses the same private subnet and connects to the DB instance to query data.\nA developer modifies the Lambda function to require the function to publish messages to an Amazon Simple Queue Service (Amazon SQS) queue. After these changes, the Lambda function times out when it tries to publish messages to the SQS queue.\nWhich solutions will resolve this issue? (Choose two.)
A. Reconfigure the Lambda function so that the function is not connected to the VPC.
B. Deploy an RDS proxy. Configure the Lambda function to connect to the DB instance through the proxy.
*C. Deploy a NAT gateway. Update the private subnet's route table to route all traffic to the NAT gateway.
*D. Create an interface endpoint for Amazon SQS in the VPC.
E. Create a gateway endpoint for Amazon SQS in the VPC.
https://www.examtopics.com/discussions/amazon/view/369219-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company's security policy requires incoming SSH traffic to be restricted to a defined set of addresses. The company is using an AWS Config rule to check whether security groups allow unrestricted incoming SSH traffic.\nA CloudOps engineer discovers a noncompliant resource and fixes the security group manually. The CloudOps engineer wants to automate the remediation of other noncompliant resources.\nWhat is the MOST operationally efficient solution that meets these requirements?
A. Create an Amazon CloudWatch alarm for the AWS Config rule's status metric. Create an AWS Lambda function that can remove the noncompliant rule from the security group. Configure the alarm action to invoke the Lambda function.
*B. Configure an automatic remediation action on the AWS Config rule. Specify the AWS-DisablolncomingSSHOnPort22 remediation action.
C. Configure an Amazon EventBridge rule for AWS Config configuration item change events. Create an AWS Lambda function that can remove the noncompliant rule from the security group\nConfigure the rule to invoke the Lambda function.
D. Create an AWS Lambda function that can analyze a security group’s inbound rules to check for unrestricted SSH access. Configure the Lambda function to remove the noncompliant rule from the security group. Configure an Amazon EventBridge rule to invoke the Lambda function every hour.
https://www.examtopics.com/discussions/amazon/view/369158-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is maintaining a web application using an Amazon CloudFront web distribution, an Application Load Balancer (ALB), Amazon RDS, and Amazon EC2 in a VPC. All services have logging enabled. The CloudOps engineer needs to investigate HTTP Layer 7 status codes from the web application.\nWhich log sources contain the status codes? (Choose two.)
A. VPC Flow Logs
B. AWS CloudTrail logs
*C. ALB access logs
*D. CloudFront access logs
E. RDS logs
https://www.examtopics.com/discussions/amazon/view/369159-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: An errant process is known to use an entire processor and run at 100%. A CloudOps engineer wants to automate restarting an Amazon EC2 instance when the problem occurs for more than 2 minutes.\nHow can this be accomplished?
A. Create an Amazon CloudWatch alarm for the EC2 instance with basic monitoring. Add an action to restart the instance.
*B. Create an Amazon CloudWatch alarm for the EC2 instance with detailed monitoring. Add an action to restart the instance.
C. Create an AWS Lambda function to restart the EC2 instance, invoked on a scheduled basis every 2 minutes.
D. Create an AWS Lambda function to restart the EC2 instance, invoked by EC2 health checks.
https://www.examtopics.com/discussions/amazon/view/369160-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer wants to provide access to AWS services by attaching an IAM policy to multiple IAM users The CloudOps engineer also wants to be able to change the policy and create new versions.\nWhich combination of actions will meet these requirements? (Choose two.)
A. Add the users to an IAM service-linked role. Attach the policy to the role.
*B. Add the users to an IAM user group. Attach the policy to the group.
C. Create an AWS managed policy.
*D. Create a customer managed policy.
E. Create an inline policy.
https://www.examtopics.com/discussions/amazon/view/369161-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company runs an application on Amazon EC2 instances that are in an Amazon EC2 Auto Scaling group. Scale-out actions take a long time to become complete because of long-running boot scripts. A CloudOps engineer must implement a solution to reduce the required time for scale-out actions without overprovisioning the Auto Scaling group.\nWhich solution will meet these requirements?
A. Change the launch configuration to use a larger instance size.
B. Increase the minimum number of instances in the Auto Scaling group.
C. Add a predictive scaling policy to the Auto Scaling group.
*D. Add a warm pool to the Auto Scaling group.
https://www.examtopics.com/discussions/amazon/view/369220-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer creates a new VPC that includes a public subnet and a private subnet. The CloudOps engineer successfully launches 11 Amazon EC2 instances in the private subnet The CloudOps engineer attempts to launch one more EC2 instance in the same subnet. However, the CloudOps engineer receives an error message that states that not enough free IP addresses are available.\nWhat must the CloudOps engineer do to deploy more EC2 instances?
A. Edit the private subnet to change the CIDR block to /27.
B. Edit the private subnet to extend across a second Availability Zone.
C. Assign additional Elastic IP addresses to the private subnet.
*D. Create a new private subnet to hold the required EC2 instances.
https://www.examtopics.com/discussions/amazon/view/369162-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer needs to build an event infrastructure for a set of custom application-specific events. The events must be sent to an AWS Lambda function for processing. The CloudOps engineer must record the events to replay later by event type or event time.\nWhich solution will meet these requirements?
*A. Create an Amazon EventBridge custom event bus. Create an archive on the custom event bus. Create a rule to send the custom events to the Lambda function.
B. Create an archive on the Amazon EventBridge default event bus. Use pattern matching to record the custom events. Create a rule to send the custom events to the Lambda function.
C. Create an archive on the Amazon EventBridge default event bus. Create an EventBridge pipe to ingest the custom events and to save the custom events in the archive. Create a rule to send the custom events to the Lambda function.
D. Create a log group in Amazon CloudWatch Logs. Create an Amazon EventBridge rule to send the custom events to the Lambda function and to the log group.
https://www.examtopics.com/discussions/amazon/view/369221-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer has an AWS CloudFormation template of the company's existing infrastructure in us-west-2. The CloudOps engineer attempts to use the template to launch a new stack in eu-west-1, but the stack only partially deploys, receives an error message, and then rolls back.\nWhy would this template fail to deploy? (Choose two.)
A. The template referenced an IAM user that is not available in eu-west-1.
*B. The template referenced an Amazon Machine Image (AMI) that is not available in eu-west-1.
C. The template did not have the proper level of permissions to deploy the resources.
*D. The template requested services that do not exist in eu-west-1.
E. CloudFormation templates can be used only to update existing services
https://www.examtopics.com/discussions/amazon/view/369163-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company's website runs on an Amazon EC2 Linux instance. The website needs to serve PDF files from an Amazon S3 bucket. All public access to S3 bucket is blocked at the account level. The company needs to allow website users to download the PDF files.\nWhich solution will meet these requirements with the LEAST administrative effort?
A. Create an IAM role that has a policy that allows s3:list* and s3:get* permissions. Assign the role to the EC2 instance. Assign a company employee to download requested PDF file to the EC2 instance and to deliver the files to website users. Create an AWS Lambda function to periodically delete local files.
*B. Create an Amazon CloudFront distribution that uses an origin access control (OAC) that points to the S3 bucket. Apply a bucket policy to the bucket to allow connections from the CloudFront distribution. Assign a company employee to provide a download URL that contains the distribution URL and the object path to users when users request PDF files.
C. Change the S3 bucket permissions to allow public access on the source S3 bucket. Assign a company employee to provide a PDF file URL to users when users request the PDF files.
D. Deploy an EC2 instance that has an 1AM instance profile to a public subnet. Use a signed URL from the EC2 instance to provide temporary access to the S3 bucket for website users.
https://www.examtopics.com/discussions/amazon/view/383646-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company uses memory-optimized Amazon EC2 instances behind a Network Load Balancer (NLB) to run an application. The company launched the EC2 instances from an AWS provided Red Hat Enterprise Linux (RHEL) Amazon Machine Image (AMI).\nA CloudOps engineer must monitor RAM utilization in 5-minute intervals. The CloudOps engineer must ensure that the EC2 instances scale in and out appropriately based on incoming load.\nWhich solution will meet these requirements?
A. Configure detailed monitoring for the EC2 instances. Configure the Amazon CloudWatch agent on the EC2 instances. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_active metric.
B. Configure detailed monitoring for the EC2 instances. Use the mem_used_percent metric that the detailed monitoring feature provides. Create an IAM role that allows the CloudWatch agent to upload data. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric.
*C. Configure basic monitoring for the EC2 instances. Configure the Amazon CloudWatch agent on the EC2 instances. Create an IAM role that allows the CloudWatch agent to upload data. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric.
D. Configure basic monitoring for the EC2 instances. Use the standard mem_used_percent metric for monitoring. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric.
https://www.examtopics.com/discussions/amazon/view/383644-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is using AWS Compute Optimizer to generate recommendations for a fleet of Amazon EC2 instances. Some of the instances use newly released instance types, while other instances use older instance types.\nAfter the analysis is complete, the CloudOps engineer notices that some of the EC2 instances are missing from the Compute Optimizer dashboard.\nWhat is the likely cause of this issue?
A. The missing instances have insufficient historical Amazon CloudWatch metric data for analysis.
*B. Compute Optimizer does not support the instance types of the missing instances.
C. Compute Optimizer already considers the missing instances to be optimized.
D. The missing instances are running a Windows operating system.
https://www.examtopics.com/discussions/amazon/view/383645-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company runs a workload in an Amazon VPC. The company configures Amazon CloudWatch Logs for the workload. The company needs a solution to automatically detect unusual API activity and security events in the company's AWS account.\nWhich solution will meet this requirement?
A. Use Amazon Inspector to scan VPC flow logs.
*B. Use Amazon GuardDuty to monitor CloudWatch logs.
C. Implement AWS CloudTrail Insights.
D. Use AWS Config automatic anomaly detection.
https://www.examtopics.com/discussions/amazon/view/383640-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company generates hundreds of images and uploads the images to an Amazon S3 bucket. The company manually copies the images to an always-on Amazon EC2 instance for processing. It usually takes between 30 seconds and 120 seconds to process each image.\nA CloudOps engineer wants to automate the image processing solution to process the images as soon as they arrive in the S3 bucket.\nWhich solution will meet these requirements MOST cost-effectively?
A. Configure S3 Event Notifications to invoke the EC2 instance when images are uploaded to the S3 bucket. Run the image processing solution on the EC2 instance to process the images.
B. Configure S3 Event Notifications to invoke an Amazon EventBridge rule. Configure the EventBridge rule to start a preconfigured AWS Glue ETL job to process images.
*C. Configure S3 Event Notifications to invoke an AWS Lambda function that runs image processing logic when new images are uploaded on the source S3 bucket.
D. Configure S3 Event Notifications to invoke a task on an Amazon Elastic Container Service (Amazon ECS) container that is backed by EC2 instances when the images are uploaded to the S3 bucket. Configure the ECS task to process the images.
https://www.examtopics.com/discussions/amazon/view/383643-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company needs to send specific events from all the accounts in the organization to a new receiver account so an AWS Lambda function can process the events.\nA CloudOps engineer needs to configure Amazon EventBridge to route the events to a target event bus in the us-west-2 Region in the new receiver account. The CloudOps engineer creates rules in the sender accounts and the receiver account that match the specified events. The rules do not specify an account parameter in the event pattern. The CloudOps engineer creates IAM roles in the sender accounts to allow PutEvents actions on the target event bus.\nThe first test events that originate from the us-east-1 Region are not being processed by the Lambda function in the receiving account.\nWhat is the likely reason the events are not processed?
A. Interface VPC endpoints for EventBridge are required in the sender accounts and receiver accounts.
B. The target Lambda function is in a different AWS Region, which is not supported by EventBridge.
*C. The resource-based policy on the target event bus must be modified to allow PutEvents API calls from the sender accounts.
D. The rule in the receiving account must specify {"account": ("sender-account-id"!) in its event pattern and must include the receiving account ID.
https://www.examtopics.com/discussions/amazon/view/383641-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A developer enables versioning on an Amazon S3 bucket. When the developer attempts to perform a write operation on the bucket, the developer encounters an HTTP 404 NoSuchKey error.\nA CloudOps engineer must resolve this issue.\nWhich solution will meet this requirement?
A. Disable versioning on the S3 bucket and retry the write operation.
B. Modify the bucket policy to allow write operations on versioned objects.
*C. Wait at least 15 minutes after enabling versioning, and then perform the write operation.
D. Enable S3 Transfer Acceleration on the bucket.
https://www.examtopics.com/discussions/amazon/view/383642-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer creates a new VPC that contains a private subnet, a security group that allows all outbound traffic, and an endpoint for Amazon EC2 Instance Connect in a private subnet. The CloudOps engineer associates the security group with EC2 Instance Connect.\nThe CloudOps engineer launches an EC2 instance from an Amazon Linux Amazon Machine Image (AMI) in the private subnet. The CloudOps engineer associates the instance with the same subnet that the security group uses. The CloudOps engineer launches the EC2 instance without an SSH key pair.\nThe CloudOps engineer tries to connect to the instance by using the EC2 Instance Connect endpoint. However, the connection fails.\nHow can the CloudOps engineer connect to the instance?
A. Create an inbound rule in the security group to allow HTTPS traffic on port 443 from the private subnet.
*B. Create an inbound rule in the security group to allow SSH traffic on port 22 from the private subnet.
C. Create an IAM instance profile that allows AWS Systems Manager Session Manager to access the EC2 instance. Associate the instance profile with the instance.
D. Recreate the EC2 instance. Associate an SSH key pair with the instance.
https://www.examtopics.com/discussions/amazon/view/402806-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company is implementing Cross-Region Replication (CRR) for the company’s Amazon S3 buckets. The S3 buckets are in the us-east-1 Region. The company uses server-side encryption with Amazon S3 managed keys (SSE-S3) to secure the data in the buckets.\nA CloudOps engineer creates a new AWS account to store backups in S3 buckets. All backup buckets are in the us-west-2 Region. The CloudOps engineer enables versioning on the source buckets and the destination buckets. The CloudOps engineer creates an IAM role in the source account for s3.amazonaws.com. The CloudOps engineer grants the IAM role permissions to perform read actions in the source buckets, replicate actions in the destination buckets, and encrypt actions that use the destination bucket's key. The destination bucket policy allows the IAM role to perform replicate and read actions.\nAfter the replication configuration is complete, the CloudOps engineer notices that objects are not replicating.\nWhat is the likely reason the objects are not replicating?
*A. The IAM role and bucket policies must have the ObjectOwnerOverrideToBucketOwner permission.
B. The objects in the source buckets and destination buckets must be encrypted by multi-Region keys.
C. Gateway VPC endpoints for Amazon S3 must be created in the source accounts and the destination account.
D. The destination buckets must use server-side encryption with AWS KMS keys (SSE-KMS).
https://www.examtopics.com/discussions/amazon/view/402894-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has a VPC that contains a public subnet and a private subnet. The company deploys an Amazon EC2 instance that uses an Amazon Linux Amazon Machine Image (AMI) and has the AWS Systems Manager Agent (SSM Agent) installed in the private subnet. The EC2 instance is in a security group that allows only outbound traffic.\nA CloudOps engineer needs to give a group of privileged administrators the ability to connect to the instance through SSH without exposing the instance to the internet.\nWhich solution will meet this requirement?
*A. Create an EC2 Instance Connect endpoint in the private subnet. Update the security group to allow inbound SSH traffic. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group.
B. Create a Systems Manager endpoint in the private subnet. Update the security group to allow SSH traffic from the private network where the Systems Manager endpoint is connected. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group.
C. Create an EC2 Instance Connect endpoint in the public subnet. Update the security group to allow SSH traffic from the private network. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group.
D. Create a Systems Manager endpoint in the public subnet. Create an IAM role that has the AmazonSSMManagedInstanceCore permission for the EC2 instance. Create an IAM group for privileged administrators. Assign the AmazonEC2ReadOnlyAccess IAM policy to the IAM group.
https://www.examtopics.com/discussions/amazon/view/402895-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company runs a web-based application on Amazon EC2 instances behind an Application Load Balancer (ALB) in the us-east-1 Region. Users from around the world access the application. Users from outside North America report high latency and inconsistent application performance. The company must improve latency and application performance for all global users.\nWhich solution will meet this requirement?
*A. Use AWS Global Accelerator in front of the ALB.
B. Deploy a Network Load Balancer (NLB) in front of the ALB.
C. Replace the ALB with a Network Load Balancer (NLB).
D. Configure Amazon Route 53 health checks to failover between AWS Regions based on latency thresholds.
https://www.examtopics.com/discussions/amazon/view/402896-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer needs to ensure that AWS resources across multiple AWS accounts are tagged consistently. The company uses an organization in AWS Organizations to centrally manage the accounts. The company wants to implement cost allocation tags to accurately track the costs that are allocated to each business unit.\nWhich solution will meet these requirements with the LEAST operational overhead?
*A. Use Organizations tag policies to enforce mandatory tagging on all resources. Enable cost allocation tags in the AWS Billing and Cost Management console.
B. Configure AWS CloudTrail events to invoke an AWS Lambda function to detect untagged resources and to automatically assign tags based on predefined rules.
C. Use AWS Config to evaluate tagging compliance. Use AWS Budgets to apply tags for cost allocation.
D. Use AWS Service Catalog to provision only pre-tagged resources. Use AWS Trusted Advisor to enforce tagging across the organization.
https://www.examtopics.com/discussions/amazon/view/402897-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company has multiple Amazon EC2 instances that run the Ubuntu operating system (OS). The company must patch the OS regularly. A CloudOps engineer installs patches manually every week. The company adds new EC2 instances that run Ubuntu continuously. The CloudOps engineer needs to automate the patching process.\nWhich solution will meet this requirement in the MOST operationally efficient way?
A. Create an AWS Lambda function to connect to the EC2 instances by using SSH and to install the patches. Configure the Lambda function to run every week.
*B. Install the AWS Systems Manager Agent (SSM Agent) on the EC2 instances. Configure Systems Manager Patch Manager to install patches on the instances every week.
C. Use AWS Systems Manager Inventory to identify unpatched EC2 instances and to install OS patches.
D. Create an Amazon EventBridge rule that has a cron expression to install the patches every week. Configure the EventBridge rule to target the EC2 instances. Configure an action to run OS updates on the targeted instances.
https://www.examtopics.com/discussions/amazon/view/402898-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A global company runs a critical primary workload in the us-east-1 Region. The company wants to ensure business continuity with minimal downtime in case of a workload failure. The company wants to replicate the workload to a second AWS Region.\nA CloudOps engineer needs a solution that achieves a recovery time objective (RTO) of less than 10 minutes and a zero recovery point objective (RPO) to meet service level agreements.\nWhich solution will meet these requirements?
A. Implement a pilot light architecture that provides real-time data replication in the second Region. Configure Amazon Route 53 health checks and automated DNS failover.
B. Implement a warm standby architecture that provides regular data replication in a second Region. Configure Amazon Route 53 health checks and automated DNS failover.
*C. Implement an active-active architecture that provides real-time data replication across two Regions. Use Amazon Route 53 health checks and a weighted routing policy.
D. Implement a custom script to generate a regular backup of the data and store it in an S3 bucket that is in a second Region. Use the backup to launch the application in the second Region in the event of a workload failure.
https://www.examtopics.com/discussions/amazon/view/402899-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer wants to configure observability of specific metrics for a public website that runs on Amazon Elastic Kubernetes Service (Amazon EKS). The CloudOps engineer wants to observe latency, traffic, errors, and saturation metrics. The CloudOps engineer wants to define service level objectives (SLOs) and to monitor service level indicators (SLIs). The CloudOps engineer also wants to correlate metrics, logs, and traces to support faster time to issue resolution.\nWhich solution will meet these requirements with the LEAST operational effort?
*A. Use Amazon CloudWatch Application Signals to automatically collect and monitor the specified metrics for the EKS workloads.
B. Configure AWS Distro for OpenTelemetry for the website to generate metrics. Use Amazon Managed Service for Prometheus to collect the specified metrics. Use Amazon Managed Grafana to visualize metrics.
C. Configure Amazon CloudWatch RUM and CloudWatch Synthetics canaries to automatically collect and monitor the specified metrics for the EKS workloads.
D. Configure Amazon CloudWatch Application Insights to detect common application performance problems and anomalies and to monitor the specified metrics for the EKS workloads.
https://www.examtopics.com/discussions/amazon/view/402900-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer needs to disable automatic backups for an Amazon RDS instance to optimize costs. When the CloudOps engineer attempts to disable the backups, the CloudOps engineer receives an error message that states the retention period must be between 1 and 35.\nWhat is the likely cause of this issue?
A. The RDS instance has insufficient permissions to change the backup retention period.
B. Read replicas are configured for the RDS instance.
C. The RDS instance is using the default backup window.
*D. The RDS instance is part of a Multi-AZ deployment.
https://www.examtopics.com/discussions/amazon/view/402901-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A financial services company stores customer images in an Amazon S3 bucket in the us-east-1 Region. To comply with regulations, the company must ensure that all existing objects are replicated to an S3 bucket in a second AWS Region. If an object replication fails, the company must be able to retry replication for the object.\nWhich solution will meet these requirements?
A. Configure Amazon S3 Cross-Region Replication (CRR). Use Amazon S3 live replication to replicate existing objects.
*B. Configure Amazon S3 Cross-Region Replication (CRR). Use S3 Batch Replication to replicate existing objects.
C. Configure Amazon S3 Cross-Region Replication (CRR). Use S3 Replication Time Control (S3 RTC) to replicate existing objects.
D. Use S3 Lifecycle rules to move objects to the destination bucket in a second Region.
https://www.examtopics.com/discussions/amazon/view/383639-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A company uses hundreds of Amazon EC2 On-Demand Instances and Spot Instances to run production and non-production workloads. The company installs and configures the AWS Systems Manager Agent (SSM Agent) on the EC2 instances.\nDuring a recent instance patch operation, some instances were not patched because the instances were either busy or down. The company needs to generate a report that lists the current patch version of all instances.\nWhich solution will meet these requirements in the MOST operationally efficient way?
*A. Use Systems Manager Inventory to collect patch versions. Generate a report of all instances.
B. Use Systems Manager Run Command to remotely collect patch version information. Generate a report of all instances.
C. Use AWS Config to track EC2 instance configuration changes by using output from the SSM Agents. Create a custom rule to check for patch versions. Generate a report of all unpatched instances.
D. Use AWS Config to monitor the patch status of the EC2 instances by using output from the SSM Agents. Create a configuration compliance rule to check whether patches are installed. Generate a report of all instances.
https://www.examtopics.com/discussions/amazon/view/383638-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---

Q: A CloudOps engineer is examining the following AWS CloudFormation template:\nWhy will the stack creation fail?
IMG_Q: SOAC03-1.png
A. The Outputs section of the CloudFormation template was omitted.
B. The Parameters section of the CloudFormation template was omitted.
*C. The PrivateDnsName cannot be sot from a CloudFormation template.
D. The VPC was not specified in the CloudFormation template.
https://www.examtopics.com/discussions/amazon/view/369111-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/

---



`;