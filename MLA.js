// MLA-C01
var MLA_TEXT = `

Q: Case Study -\nA company is building a web-based AI application by using Amazon SageMaker. The application will provide the following capabilities and features: ML experimentation, training, a central model registry, model deployment, and model monitoring.\nThe application must ensure secure and isolated use of training data during the ML lifecycle. The training data is stored in Amazon S3.\nThe company needs to use the central model registry to manage different versions of models in the application.\nWhich action will meet this requirement with the LEAST operational overhead?
A. Create a separate Amazon Elastic Container Registry (Amazon ECR) repository for each model.
B. Use Amazon Elastic Container Registry (Amazon ECR) and unique tags for each model version.
*C. Use the SageMaker Model Registry and model groups to catalog the models.
D. Use the SageMaker Model Registry and unique tags for each model version.
https://www.examtopics.com/discussions/amazon/view/152098-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Case Study -\nA company is building a web-based AI application by using Amazon SageMaker. The application will provide the following capabilities and features: ML experimentation, training, a central model registry, model deployment, and model monitoring.\nThe application must ensure secure and isolated use of training data during the ML lifecycle. The training data is stored in Amazon S3.\nThe company is experimenting with consecutive training jobs.\nHow can the company MINIMIZE infrastructure startup times for these jobs?
A. Use Managed Spot Training.
*B. Use SageMaker managed warm pools.
C. Use SageMaker Training Compiler.
D. Use the SageMaker distributed data parallelism (SMDDP) library.
https://www.examtopics.com/discussions/amazon/view/152135-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Case Study -\nA company is building a web-based AI application by using Amazon SageMaker. The application will provide the following capabilities and features: ML experimentation, training, a central model registry, model deployment, and model monitoring.\nThe application must ensure secure and isolated use of training data during the ML lifecycle. The training data is stored in Amazon S3.\nThe company must implement a manual approval-based workflow to ensure that only approved models can be deployed to production endpoints.\nWhich solution will meet this requirement?
A. Use SageMaker Experiments to facilitate the approval process during model registration.
B. Use SageMaker ML Lineage Tracking on the central model registry. Create tracking entities for the approval process.
C. Use SageMaker Model Monitor to evaluate the performance of the model and to manage the approval.
*D. Use SageMaker Pipelines. When a model version is registered, use the AWS SDK to change the approval status to "Approved."
https://www.examtopics.com/discussions/amazon/view/152136-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Case Study -\nA company is building a web-based AI application by using Amazon SageMaker. The application will provide the following capabilities and features: ML experimentation, training, a central model registry, model deployment, and model monitoring.\nThe application must ensure secure and isolated use of training data during the ML lifecycle. The training data is stored in Amazon S3.\nThe company needs to run an on-demand workflow to monitor bias drift for models that are deployed to real-time endpoints from the application.\nWhich action will meet this requirement?
*A. Configure the application to invoke an AWS Lambda function that runs a SageMaker Clarify job.
B. Invoke an AWS Lambda function to pull the sagemaker-model-monitor-analyzer built-in SageMaker image.
C. Use AWS Glue Data Quality to monitor bias.
D. Use SageMaker notebooks to compare the bias.
https://www.examtopics.com/discussions/amazon/view/152137-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Case study -\nAn ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3.\nThe dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data.\nWhich AWS service or feature can aggregate the data from the various data sources?
A. Amazon EMR Spark jobs
B. Amazon Kinesis Data Streams
C. Amazon DynamoDB
*D. AWS Lake Formation
https://www.examtopics.com/discussions/amazon/view/152088-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Case study -\nAn ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3.\nThe dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data.\nAfter the data is aggregated, the ML engineer must implement a solution to automatically detect anomalies in the data and to visualize the result.\nWhich solution will meet these requirements?
A. Use Amazon Athena to automatically detect the anomalies and to visualize the result.
B. Use Amazon Redshift Spectrum to automatically detect the anomalies. Use Amazon QuickSight to visualize the result.
*C. Use Amazon SageMaker Data Wrangler to automatically detect the anomalies and to visualize the result.
D. Use AWS Batch to automatically detect the anomalies. Use Amazon QuickSight to visualize the result.
https://www.examtopics.com/discussions/amazon/view/152145-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Case study -\nAn ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3.\nThe dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data.\nThe training dataset includes categorical data and numerical data. The ML engineer must prepare the training dataset to maximize the accuracy of the model.\nWhich action will meet this requirement with the LEAST operational overhead?
A. Use AWS Glue to transform the categorical data into numerical data.
B. Use AWS Glue to transform the numerical data into categorical data.
*C. Use Amazon SageMaker Data Wrangler to transform the categorical data into numerical data.
D. Use Amazon SageMaker Data Wrangler to transform the numerical data into categorical data.
https://www.examtopics.com/discussions/amazon/view/152147-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Case study -\nAn ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3.\nThe dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data.\nBefore the ML engineer trains the model, the ML engineer must resolve the issue of the imbalanced data.\nWhich solution will meet this requirement with the LEAST operational effort?
A. Use Amazon Athena to identify patterns that contribute to the imbalance. Adjust the dataset accordingly.
B. Use Amazon SageMaker Studio Classic built-in algorithms to process the imbalanced dataset.
C. Use AWS Glue DataBrew built-in features to oversample the minority class.
*D. Use the Amazon SageMaker Data Wrangler balance data operation to oversample the minority class.
https://www.examtopics.com/discussions/amazon/view/152148-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Case study -\nAn ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3.\nThe dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data.\nThe ML engineer needs to use an Amazon SageMaker built-in algorithm to train the model.\nWhich algorithm should the ML engineer use to meet this requirement?
*A. LightGBM
B. Linear learner
C. К-means clustering
D. Neural Topic Model (NTM)
https://www.examtopics.com/discussions/amazon/view/152212-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has deployed an XGBoost prediction model in production to predict if a customer is likely to cancel a subscription. The company uses Amazon SageMaker Model Monitor to detect deviations in the F1 score.\nDuring a baseline analysis of model quality, the company recorded a threshold for the F1 score. After several months of no change, the model's F1 score decreases significantly.\nWhat could be the reason for the reduced F1 score?
*A. Concept drift occurred in the underlying customer data that was used for predictions.
B. The model was not sufficiently complex to capture all the patterns in the original baseline data.
C. The original baseline data had a data quality issue of missing values.
D. Incorrect ground truth labels were provided to Model Monitor during the calculation of the baseline.
https://www.examtopics.com/discussions/amazon/view/152149-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has a team of data scientists who use Amazon SageMaker notebook instances to test ML models. When the data scientists need new permissions, the company attaches the permissions to each individual role that was created during the creation of the SageMaker notebook instance.\nThe company needs to centralize management of the team's permissions.\nWhich solution will meet this requirement?
*A. Create a single IAM role that has the necessary permissions. Attach the role to each notebook instance that the team uses.
B. Create a single IAM group. Add the data scientists to the group. Associate the group with each notebook instance that the team uses.
C. Create a single IAM user. Attach the AdministratorAccess AWS managed IAM policy to the user. Configure each notebook instance to use the IAM user.
D. Create a single IAM group. Add the data scientists to the group. Create an IAM role. Attach the AdministratorAccess AWS managed IAM policy to the role. Associate the role with the group. Associate the group with each notebook instance that the team uses.
https://www.examtopics.com/discussions/amazon/view/152166-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to use an ML model to predict the price of apartments in a specific location.\nWhich metric should the ML engineer use to evaluate the model's performance?
A. Accuracy
B. Area Under the ROC Curve (AUC)
C. F1 score
*D. Mean absolute error (MAE)
https://www.examtopics.com/discussions/amazon/view/152167-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer has trained a neural network by using stochastic gradient descent (SGD). The neural network performs poorly on the test set. The values for training loss and validation loss remain high and show an oscillating pattern. The values decrease for a few epochs and then increase for a few epochs before repeating the same cycle.\nWhat should the ML engineer do to improve the training process?
A. Introduce early stopping.
B. Increase the size of the test set.
C. Increase the learning rate.
*D. Decrease the learning rate.
https://www.examtopics.com/discussions/amazon/view/152168-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to process thousands of existing CSV objects and new CSV objects that are uploaded. The CSV objects are stored in a central Amazon S3 bucket and have the same number of columns. One of the columns is a transaction date. The ML engineer must query the data based on the transaction date.\nWhich solution will meet these requirements with the LEAST operational overhead?
*A. Use an Amazon Athena CREATE TABLE AS SELECT (CTAS) statement to create a table based on the transaction date from data in the central S3 bucket. Query the objects from the table.
B. Create a new S3 bucket for processed data. Set up S3 replication from the central S3 bucket to the new S3 bucket. Use S3 Object Lambda to query the objects based on transaction date.
C. Create a new S3 bucket for processed data. Use AWS Glue for Apache Spark to create a job to query the CSV objects based on transaction date. Configure the job to store the results in the new S3 bucket. Query the objects from the new S3 bucket.
D. Create a new S3 bucket for processed data. Use Amazon Data Firehose to transfer the data from the central S3 bucket to the new S3 bucket. Configure Firehose to run an AWS Lambda function to query the data based on transaction date.
https://www.examtopics.com/discussions/amazon/view/152169-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has a large, unstructured dataset. The dataset includes many duplicate records across several key attributes.\nWhich solution on AWS will detect duplicates in the dataset with the LEAST code development?
A. Use Amazon Mechanical Turk jobs to detect duplicates.
B. Use Amazon QuickSight ML Insights to build a custom deduplication model.
C. Use Amazon SageMaker Data Wrangler to pre-process and detect duplicates.
*D. Use the AWS Glue FindMatches transform to detect duplicates.
https://www.examtopics.com/discussions/amazon/view/152170-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to run a batch data-processing job on Amazon EC2 instances. The job will run during the weekend and will take 90 minutes to finish running. The processing can handle interruptions. The company will run the job every weekend for the next 6 months.\nWhich EC2 instance purchasing option will meet these requirements MOST cost-effectively?
*A. Spot Instances
B. Reserved Instances
C. On-Demand Instances
D. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/152171-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer has an Amazon Comprehend custom model in Account A in the us-east-1 Region. The ML engineer needs to copy the model to Account В in the same Region.\nWhich solution will meet this requirement with the LEAST development effort?
A. Use Amazon S3 to make a copy of the model. Transfer the copy to Account B.
*B. Create a resource-based IAM policy. Use the Amazon Comprehend ImportModel API operation to copy the model to Account B.
C. Use AWS DataSync to replicate the model from Account A to Account B.
D. Create an AWS Site-to-Site VPN connection between Account A and Account В to transfer the model.
https://www.examtopics.com/discussions/amazon/view/152172-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is training a simple neural network model. The ML engineer tracks the performance of the model over time on a validation dataset. The model's performance improves substantially at first and then degrades after a specific number of epochs.\nWhich solutions will mitigate this problem? (Choose two.)
*A. Enable early stopping on the model.
*B. Increase dropout in the layers.
C. Increase the number of layers.
D. Increase the number of neurons.
E. Investigate and reduce the sources of model bias.
https://www.examtopics.com/discussions/amazon/view/152173-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has a Retrieval Augmented Generation (RAG) application that uses a vector database to store embeddings of documents. The company must migrate the application to AWS and must implement a solution that provides semantic search of text files. The company has already migrated the text repository to an Amazon S3 bucket.\nWhich solution will meet these requirements?
A. Use an AWS Batch job to process the files and generate embeddings. Use AWS Glue to store the embeddings. Use SQL queries to perform the semantic searches.
B. Use a custom Amazon SageMaker notebook to run a custom script to generate embeddings. Use SageMaker Feature Store to store the embeddings. Use SQL queries to perform the semantic searches.
*C. Use the Amazon Kendra S3 connector to ingest the documents from the S3 bucket into Amazon Kendra. Query Amazon Kendra to perform the semantic searches.
D. Use an Amazon Textract asynchronous job to ingest the documents from the S3 bucket. Query Amazon Textract to perform the semantic searches.
https://www.examtopics.com/discussions/amazon/view/152174-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses Amazon Athena to query a dataset in Amazon S3. The dataset has a target variable that the company wants to predict.\nThe company needs to use the dataset in a solution to determine if a model can predict the target variable.\nWhich solution will provide this information with the LEAST development effort?
*A. Create a new model by using Amazon SageMaker Autopilot. Report the model's achieved performance.
B. Implement custom scripts to perform data pre-processing, multiple linear regression, and performance evaluation. Run the scripts on Amazon EC2 instances.
C. Configure Amazon Macie to analyze the dataset and to create a model. Report the model's achieved performance.
D. Select a model from Amazon Bedrock. Tune the model with the data. Report the model's achieved performance.
https://www.examtopics.com/discussions/amazon/view/152175-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to predict the success of advertising campaigns by considering the color scheme of each advertisement. An ML engineer is preparing data for a neural network model. The dataset includes color information as categorical data.\nWhich technique for feature engineering should the ML engineer use for the model?
A. Apply label encoding to the color categories. Automatically assign each color a unique integer.
B. Implement padding to ensure that all color feature vectors have the same length.
C. Perform dimensionality reduction on the color categories.
*D. One-hot encode the color categories to transform the color scheme feature into a binary matrix.
https://www.examtopics.com/discussions/amazon/view/152176-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses a hybrid cloud environment. A model that is deployed on premises uses data in Amazon 53 to provide customers with a live conversational engine.\nThe model is using sensitive data. An ML engineer needs to implement a solution to identify and remove the sensitive data.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Deploy the model on Amazon SageMaker. Create a set of AWS Lambda functions to identify and remove the sensitive data.
B. Deploy the model on an Amazon Elastic Container Service (Amazon ECS) cluster that uses AWS Fargate. Create an AWS Batch job to identify and remove the sensitive data.
*C. Use Amazon Macie to identify the sensitive data. Create a set of AWS Lambda functions to remove the sensitive data.
D. Use Amazon Comprehend to identify the sensitive data. Launch Amazon EC2 instances to remove the sensitive data.
https://www.examtopics.com/discussions/amazon/view/152177-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to create data ingestion pipelines and ML model deployment pipelines on AWS. All the raw data is stored in Amazon S3 buckets.\nWhich solution will meet these requirements?
A. Use Amazon Data Firehose to create the data ingestion pipelines. Use Amazon SageMaker Studio Classic to create the model deployment pipelines.
*B. Use AWS Glue to create the data ingestion pipelines. Use Amazon SageMaker Studio Classic to create the model deployment pipelines.
C. Use Amazon Redshift ML to create the data ingestion pipelines. Use Amazon SageMaker Studio Classic to create the model deployment pipelines.
D. Use Amazon Athena to create the data ingestion pipelines. Use an Amazon SageMaker notebook to create the model deployment pipelines.
https://www.examtopics.com/discussions/amazon/view/152178-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company that has hundreds of data scientists is using Amazon SageMaker to create ML models. The models are in model groups in the SageMaker Model Registry.\nThe data scientists are grouped into three categories: computer vision, natural language processing (NLP), and speech recognition. An ML engineer needs to implement a solution to organize the existing models into these groups to improve model discoverability at scale. The solution must not affect the integrity of the model artifacts and their existing groupings.\nWhich solution will meet these requirements?
A. Create a custom tag for each of the three categories. Add the tags to the model packages in the SageMaker Model Registry.
B. Create a model group for each category. Move the existing models into these category model groups.
C. Use SageMaker ML Lineage Tracking to automatically identify and tag which model groups should contain the models.
*D. Create a Model Registry collection for each of the three categories. Move the existing model groups into the collections.
https://www.examtopics.com/discussions/amazon/view/152090-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company runs an Amazon SageMaker domain in a public subnet of a newly created VPC. The network is configured properly, and ML engineers can access the SageMaker domain.\nRecently, the company discovered suspicious traffic to the domain from a specific IP address. The company needs to block traffic from the specific IP address.\nWhich update to the network configuration will meet this requirement?
A. Create a security group inbound rule to deny traffic from the specific IP address. Assign the security group to the domain.
*B. Create a network ACL inbound rule to deny traffic from the specific IP address. Assign the rule to the default network Ad for the subnet where the domain is located.
C. Create a shadow variant for the domain. Configure SageMaker Inference Recommender to send traffic from the specific IP address to the shadow endpoint.
D. Create a VPC route table to deny inbound traffic from the specific IP address. Assign the route table to the domain.
https://www.examtopics.com/discussions/amazon/view/152181-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is gathering audio, video, and text data in various languages. The company needs to use a large language model (LLM) to summarize the gathered data that is in Spanish.\nWhich solution will meet these requirements in the LEAST amount of time?
A. Train and deploy a model in Amazon SageMaker to convert the data into English text. Train and deploy an LLM in SageMaker to summarize the text.
*B. Use Amazon Transcribe and Amazon Translate to convert the data into English text. Use Amazon Bedrock with the Jurassic model to summarize the text.
C. Use Amazon Rekognition and Amazon Translate to convert the data into English text. Use Amazon Bedrock with the Anthropic Claude model to summarize the text.
D. Use Amazon Comprehend and Amazon Translate to convert the data into English text. Use Amazon Bedrock with the Stable Diffusion model to summarize the text.
https://www.examtopics.com/discussions/amazon/view/152182-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A financial company receives a high volume of real-time market data streams from an external provider. The streams consist of thousands of JSON records every second.\nThe company needs to implement a scalable solution on AWS to identify anomalous data points.\nWhich solution will meet these requirements with the LEAST operational overhead?
*A. Ingest real-time data into Amazon Kinesis data streams. Use the built-in RANDOM_CUT_FOREST function in Amazon Managed Service for Apache Flink to process the data streams and to detect data anomalies.
B. Ingest real-time data into Amazon Kinesis data streams. Deploy an Amazon SageMaker endpoint for real-time outlier detection. Create an AWS Lambda function to detect anomalies. Use the data streams to invoke the Lambda function.
C. Ingest real-time data into Apache Kafka on Amazon EC2 instances. Deploy an Amazon SageMaker endpoint for real-time outlier detection. Create an AWS Lambda function to detect anomalies. Use the data streams to invoke the Lambda function.
D. Send real-time data to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create an AWS Lambda function to consume the queue messages. Program the Lambda function to start an AWS Glue extract, transform, and load (ETL) job for batch processing and anomaly detection.
https://www.examtopics.com/discussions/amazon/view/152183-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has a large collection of chat recordings from customer interactions after a product release. An ML engineer needs to create an ML model to analyze the chat data. The ML engineer needs to determine the success of the product by reviewing customer sentiments about the product.\nWhich action should the ML engineer take to complete the evaluation in the LEAST amount of time?
A. Use Amazon Rekognition to analyze sentiments of the chat conversations.
B. Train a Naive Bayes classifier to analyze sentiments of the chat conversations.
*C. Use Amazon Comprehend to analyze sentiments of the chat conversations.
D. Use random forests to classify sentiments of the chat conversations.
https://www.examtopics.com/discussions/amazon/view/152184-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has a conversational AI assistant that sends requests through Amazon Bedrock to an Anthropic Claude large language model (LLM). Users report that when they ask similar questions multiple times, they sometimes receive different answers. An ML engineer needs to improve the responses to be more consistent and less random.\nWhich solution will meet these requirements?
A. Increase the temperature parameter and the top_k parameter.
B. Increase the temperature parameter. Decrease the top_k parameter.
C. Decrease the temperature parameter. Increase the top_k parameter.
*D. Decrease the temperature parameter and the top_k parameter.
https://www.examtopics.com/discussions/amazon/view/152185-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using ML to predict the presence of a specific weed in a farmer's field. The company is using the Amazon SageMaker linear learner built-in algorithm with a value of multiclass_dassifier for the predictorjype hyperparameter.\nWhat should the company do to MINIMIZE false positives?
A. Set the value of the weight decay hyperparameter to zero.
B. Increase the number of training epochs.
*C. Increase the value of the target_precision hyperparameter.
D. Change the value of the predictorjype hyperparameter to regressor.
https://www.examtopics.com/discussions/amazon/view/152186-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has implemented a data ingestion pipeline for sales transactions from its ecommerce website. The company uses Amazon Data Firehose to ingest data into Amazon OpenSearch Service. The buffer interval of the Firehose stream is set for 60 seconds. An OpenSearch linear model generates real-time sales forecasts based on the data and presents the data in an OpenSearch dashboard.\nThe company needs to optimize the data ingestion pipeline to support sub-second latency for the real-time dashboard.\nWhich change to the architecture will meet these requirements?
*A. Use zero buffering in the Firehose stream. Tune the batch size that is used in the PutRecordBatch operation.
B. Replace the Firehose stream with an AWS DataSync task. Configure the task with enhanced fan-out consumers.
C. Increase the buffer interval of the Firehose stream from 60 seconds to 120 seconds.
D. Replace the Firehose stream with an Amazon Simple Queue Service (Amazon SQS) queue.
https://www.examtopics.com/discussions/amazon/view/152187-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has trained an ML model in Amazon SageMaker. The company needs to host the model to provide inferences in a production environment.\nThe model must be highly available and must respond with minimum latency. The size of each request will be between 1 KB and 3 MB. The model will receive unpredictable bursts of requests during the day. The inferences must adapt proportionally to the changes in demand.\nHow should the company deploy the model into production to meet these requirements?
*A. Create a SageMaker real-time inference endpoint. Configure auto scaling. Configure the endpoint to present the existing model.
B. Deploy the model on an Amazon Elastic Container Service (Amazon ECS) cluster. Use ECS scheduled scaling that is based on the CPU of the ECS cluster.
C. Install SageMaker Operator on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Deploy the model in Amazon EKS. Set horizontal pod auto scaling to scale replicas based on the memory metric.
D. Use Spot Instances with a Spot Fleet behind an Application Load Balancer (ALB) for inferences. Use the ALBRequestCountPerTarget metric as the metric for auto scaling.
https://www.examtopics.com/discussions/amazon/view/152188-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to use an Amazon EMR cluster to process large volumes of data in batches. Any data loss is unacceptable.\nWhich instance purchasing option will meet these requirements MOST cost-effectively?
A. Run the primary node, core nodes, and task nodes on On-Demand Instances.
B. Run the primary node, core nodes, and task nodes on Spot Instances.
C. Run the primary node on an On-Demand Instance. Run the core nodes and task nodes on Spot Instances.
*D. Run the primary node and core nodes on On-Demand Instances. Run the task nodes on Spot Instances.
https://www.examtopics.com/discussions/amazon/view/152189-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to improve the sustainability of its ML operations.\nWhich actions will reduce the energy usage and computational resources that are associated with the company's training jobs? (Choose two.)
*A. Use Amazon SageMaker Debugger to stop training jobs when non-converging conditions are detected.
B. Use Amazon SageMaker Ground Truth for data labeling.
C. Deploy models by using AWS Lambda functions.
*D. Use AWS Trainium instances for training.
E. Use PyTorch or TensorFlow with the distributed training option.
https://www.examtopics.com/discussions/amazon/view/152190-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is planning to create several ML prediction models. The training data is stored in Amazon S3. The entire dataset is more than 5 ТВ in size and consists of CSV, JSON, Apache Parquet, and simple text files.\nThe data must be processed in several consecutive steps. The steps include complex manipulations that can take hours to finish running. Some of the processing involves natural language processing (NLP) transformations. The entire process must be automated.\nWhich solution will meet these requirements?
A. Process data at each step by using Amazon SageMaker Data Wrangler. Automate the process by using Data Wrangler jobs.
B. Use Amazon SageMaker notebooks for each data processing step. Automate the process by using Amazon EventBridge.
C. Process data at each step by using AWS Lambda functions. Automate the process by using AWS Step Functions and Amazon EventBridge.
*D. Use Amazon SageMaker Pipelines to create a pipeline of data processing steps. Automate the pipeline by using Amazon EventBridge.
https://www.examtopics.com/discussions/amazon/view/152191-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to use AWS CloudFormation to create an ML model that an Amazon SageMaker endpoint will host.\nWhich resource should the ML engineer declare in the CloudFormation template to meet this requirement?
*A. AWS::SageMaker::Model
B. AWS::SageMaker::Endpoint
C. AWS::SageMaker::NotebookInstance
D. AWS::SageMaker::Pipeline
https://www.examtopics.com/discussions/amazon/view/152192-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An advertising company uses AWS Lake Formation to manage a data lake. The data lake contains structured data and unstructured data. The company's ML engineers are assigned to specific advertisement campaigns.\nThe ML engineers must interact with the data through Amazon Athena and by browsing the data directly in an Amazon S3 bucket. The ML engineers must have access to only the resources that are specific to their assigned advertisement campaigns.\nWhich solution will meet these requirements in the MOST operationally efficient way?
A. Configure IAM policies on an AWS Glue Data Catalog to restrict access to Athena based on the ML engineers' campaigns.
B. Store users and campaign information in an Amazon DynamoDB table. Configure DynamoDB Streams to invoke an AWS Lambda function to update S3 bucket policies.
*C. Use Lake Formation to authorize AWS Glue to access the S3 bucket. Configure Lake Formation tags to map ML engineers to their campaigns.
D. Configure S3 bucket policies to restrict access to the S3 bucket based on the ML engineers' campaigns.
https://www.examtopics.com/discussions/amazon/view/152193-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to use data with Amazon SageMaker Canvas to train an ML model. The data is stored in Amazon S3 and is complex in structure. The ML engineer must use a file format that minimizes processing time for the data.\nWhich file format will meet these requirements?
A. CSV files compressed with Snappy
B. JSON objects in JSONL format
C. JSON files compressed with gzip
*D. Apache Parquet files
https://www.examtopics.com/discussions/amazon/view/152194-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is evaluating several ML models and must choose one model to use in production. The cost of false negative predictions by the models is much higher than the cost of false positive predictions.\nWhich metric finding should the ML engineer prioritize the MOST when choosing the model?
A. Low precision
B. High precision
C. Low recall
*D. High recall
https://www.examtopics.com/discussions/amazon/view/152195-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has trained and deployed an ML model by using Amazon SageMaker. The company needs to implement a solution to record and monitor all the API call events for the SageMaker endpoint. The solution also must provide a notification when the number of API call events breaches a threshold.\nWhich solution will meet these requirements?
A. Use SageMaker Debugger to track the inferences and to report metrics. Create a custom rule to provide a notification when the threshold is breached.
B. Use SageMaker Debugger to track the inferences and to report metrics. Use the tensor_variance built-in rule to provide a notification when the threshold is breached.
*C. Log all the endpoint invocation API events by using AWS CloudTrail. Use an Amazon CloudWatch dashboard for monitoring. Set up a CloudWatch alarm to provide notification when the threshold is breached.
D. Add the Invocations metric to an Amazon CloudWatch dashboard for monitoring. Set up a CloudWatch alarm to provide notification when the threshold is breached.
https://www.examtopics.com/discussions/amazon/view/152091-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has AWS Glue data processing jobs that are orchestrated by an AWS Glue workflow. The AWS Glue jobs can run on a schedule or can be launched manually.\nThe company is developing pipelines in Amazon SageMaker Pipelines for ML model development. The pipelines will use the output of the AWS Glue jobs during the data processing phase of model development. An ML engineer needs to implement a solution that integrates the AWS Glue jobs with the pipelines.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Use AWS Step Functions for orchestration of the pipelines and the AWS Glue jobs.
B. Use processing steps in SageMaker Pipelines. Configure inputs that point to the Amazon Resource Names (ARNs) of the AWS Glue jobs.
*C. Use Callback steps in SageMaker Pipelines to start the AWS Glue workflow and to stop the pipelines until the AWS Glue jobs finish running.
D. Use Amazon EventBridge to invoke the pipelines and the AWS Glue jobs in the desired order.
https://www.examtopics.com/discussions/amazon/view/152099-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using an Amazon Redshift database as its single data source. Some of the data is sensitive.\nA data scientist needs to use some of the sensitive data from the database. An ML engineer must give the data scientist access to the data without transforming the source data and without storing anonymized data in the database.\nWhich solution will meet these requirements with the LEAST implementation effort?
*A. Configure dynamic data masking policies to control how sensitive data is shared with the data scientist at query time.
B. Create a materialized view with masking logic on top of the database. Grant the necessary read permissions to the data scientist.
C. Unload the Amazon Redshift data to Amazon S3. Use Amazon Athena to create schema-on-read with masking logic. Share the view with the data scientist.
D. Unload the Amazon Redshift data to Amazon S3. Create an AWS Glue job to anonymize the data. Share the dataset with the data scientist.
https://www.examtopics.com/discussions/amazon/view/152196-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is using a training job to fine-tune a deep learning model in Amazon SageMaker Studio. The ML engineer previously used the same pre-trained model with a similar dataset. The ML engineer expects vanishing gradient, underutilized GPU, and overfitting problems.\nThe ML engineer needs to implement a solution to detect these issues and to react in predefined ways when the issues occur. The solution also must provide comprehensive real-time metrics during the training.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Use TensorBoard to monitor the training job. Publish the findings to an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function to consume the findings and to initiate the predefined actions.
B. Use Amazon CloudWatch default metrics to gain insights about the training job. Use the metrics to invoke an AWS Lambda function to initiate the predefined actions.
C. Expand the metrics in Amazon CloudWatch to include the gradients in each training step. Use the metrics to invoke an AWS Lambda function to initiate the predefined actions.
*D. Use SageMaker Debugger built-in rules to monitor the training job. Configure the rules to initiate the predefined actions.
https://www.examtopics.com/discussions/amazon/view/152197-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A credit card company has a fraud detection model in production on an Amazon SageMaker endpoint. The company develops a new version of the model. The company needs to assess the new model's performance by using live data and without affecting production end users.\nWhich solution will meet these requirements?
A. Set up SageMaker Debugger and create a custom rule.
B. Set up blue/green deployments with all-at-once traffic shifting.
C. Set up blue/green deployments with canary traffic shifting.
*D. Set up shadow testing with a shadow variant of the new model.
https://www.examtopics.com/discussions/amazon/view/152198-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company stores time-series data about user clicks in an Amazon S3 bucket. The raw data consists of millions of rows of user activity every day. ML engineers access the data to develop their ML models.\nThe ML engineers need to generate daily reports and analyze click trends over the past 3 days by using Amazon Athena. The company must retain the data for 30 days before archiving the data.\nWhich solution will provide the HIGHEST performance for data retrieval?
A. Keep all the time-series data without partitioning in the S3 bucket. Manually move data that is older than 30 days to separate S3 buckets.
B. Create AWS Lambda functions to copy the time-series data into separate S3 buckets. Apply S3 Lifecycle policies to archive data that is older than 30 days to S3 Glacier Flexible Retrieval.
*C. Organize the time-series data into partitions by date prefix in the S3 bucket. Apply S3 Lifecycle policies to archive partitions that are older than 30 days to S3 Glacier Flexible Retrieval.
D. Put each day's time-series data into its own S3 bucket. Use S3 Lifecycle policies to archive S3 buckets that hold data that is older than 30 days to S3 Glacier Flexible Retrieval.
https://www.examtopics.com/discussions/amazon/view/152199-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has deployed an ML model that detects fraudulent credit card transactions in real time in a banking application. The model uses Amazon SageMaker Asynchronous Inference. Consumers are reporting delays in receiving the inference results.\nAn ML engineer needs to implement a solution to improve the inference performance. The solution also must provide a notification when a deviation in model quality occurs.\nWhich solution will meet these requirements?
*A. Use SageMaker real-time inference for inference. Use SageMaker Model Monitor for notifications about model quality.
B. Use SageMaker batch transform for inference. Use SageMaker Model Monitor for notifications about model quality.
C. Use SageMaker Serverless Inference for inference. Use SageMaker Inference Recommender for notifications about model quality.
D. Keep using SageMaker Asynchronous Inference for inference. Use SageMaker Inference Recommender for notifications about model quality.
https://www.examtopics.com/discussions/amazon/view/152200-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to implement a solution to host a trained ML model. The rate of requests to the model will be inconsistent throughout the day.\nThe ML engineer needs a scalable solution that minimizes costs when the model is not in use. The solution also must maintain the model's capacity to respond to requests during times of peak usage.\nWhich solution will meet these requirements?
A. Create AWS Lambda functions that have fixed concurrency to host the model. Configure the Lambda functions to automatically scale based on the number of requests to the model.
B. Deploy the model on an Amazon Elastic Container Service (Amazon ECS) cluster that uses AWS Fargate. Set a static number of tasks to handle requests during times of peak usage.
C. Deploy the model to an Amazon SageMaker endpoint. Deploy multiple copies of the model to the endpoint. Create an Application Load Balancer to route traffic between the different copies of the model at the endpoint.
*D. Deploy the model to an Amazon SageMaker endpoint. Create SageMaker endpoint auto scaling policies that are based on Amazon CloudWatch metrics to adjust the number of instances dynamically.
https://www.examtopics.com/discussions/amazon/view/152201-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses Amazon SageMaker Studio to develop an ML model. The company has a single SageMaker Studio domain. An ML engineer needs to implement a solution that provides an automated alert when SageMaker compute costs reach a specific threshold.\nWhich solution will meet these requirements?
A. Add resource tagging by editing the SageMaker user profile in the SageMaker domain. Configure AWS Cost Explorer to send an alert when the threshold is reached.
*B. Add resource tagging by editing the SageMaker user profile in the SageMaker domain. Configure AWS Budgets to send an alert when the threshold is reached.
C. Add resource tagging by editing each user's IAM profile. Configure AWS Cost Explorer to send an alert when the threshold is reached.
D. Add resource tagging by editing each user's IAM profile. Configure AWS Budgets to send an alert when the threshold is reached.
https://www.examtopics.com/discussions/amazon/view/152202-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses Amazon SageMaker for its ML workloads. The company's ML engineer receives a 50 MB Apache Parquet data file to build a fraud detection model. The file includes several correlated columns that are not required.\nWhat should the ML engineer do to drop the unnecessary columns in the file with the LEAST effort?
A. Download the file to a local workstation. Perform one-hot encoding by using a custom Python script.
B. Create an Apache Spark job that uses a custom processing script on Amazon EMR.
C. Create a SageMaker processing job by calling the SageMaker Python SDK.
*D. Create a data flow in SageMaker Data Wrangler. Configure a transform step.
https://www.examtopics.com/discussions/amazon/view/152203-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is creating an application that will recommend products for customers to purchase. The application will make API calls to Amazon Q Business. The company must ensure that responses from Amazon Q Business do not include the name of the company's main competitor.\nWhich solution will meet this requirement?
*A. Configure the competitor's name as a blocked phrase in Amazon Q Business.
B. Configure an Amazon Q Business retriever to exclude the competitor’s name.
C. Configure an Amazon Kendra retriever for Amazon Q Business to build indexes that exclude the competitor's name.
D. Configure document attribute boosting in Amazon Q Business to deprioritize the competitor's name.
https://www.examtopics.com/discussions/amazon/view/152204-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to use Amazon SageMaker to fine-tune a large language model (LLM) for text summarization. The ML engineer must follow a low-code no-code (LCNC) approach.\nWhich solution will meet these requirements?
A. Use SageMaker Studio to fine-tune an LLM that is deployed on Amazon EC2 instances.
B. Use SageMaker Autopilot to fine-tune an LLM that is deployed by a custom API endpoint.
C. Use SageMaker Autopilot to fine-tune an LLM that is deployed on Amazon EC2 instances.
*D. Use SageMaker Autopilot to fine-tune an LLM that is deployed by SageMaker JumpStart.
https://www.examtopics.com/discussions/amazon/view/152205-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has an ML model that needs to run one time each night to predict stock values. The model input is 3 MB of data that is collected during the current day. The model produces the predictions for the next day. The prediction process takes less than 1 minute to finish running.\nHow should the company deploy the model on Amazon SageMaker to meet these requirements?
A. Use a multi-model serverless endpoint. Enable caching.
B. Use an asynchronous inference endpoint. Set the InitialInstanceCount parameter to 0.
C. Use a real-time endpoint. Configure an auto scaling policy to scale the model to 0 when the model is not in use.
*D. Use a serverless inference endpoint. Set the MaxConcurrency parameter to 1.
https://www.examtopics.com/discussions/amazon/view/152206-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer trained an ML model on Amazon SageMaker to detect automobile accidents from dosed-circuit TV footage. The ML engineer used SageMaker Data Wrangler to create a training dataset of images of accidents and non-accidents.\nThe model performed well during training and validation. However, the model is underperforming in production because of variations in the quality of the images from various cameras.\nWhich solution will improve the model's accuracy in the LEAST amount of time?
A. Collect more images from all the cameras. Use Data Wrangler to prepare a new training dataset.
*B. Recreate the training dataset by using the Data Wrangler corrupt image transform. Specify the impulse noise option.
C. Recreate the training dataset by using the Data Wrangler enhance image contrast transform. Specify the Gamma contrast option.
D. Recreate the training dataset by using the Data Wrangler resize image transform. Crop all images to the same size.
https://www.examtopics.com/discussions/amazon/view/152093-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has an application that uses different APIs to generate embeddings for input text. The company needs to implement a solution to automatically rotate the API tokens every 3 months.\nWhich solution will meet this requirement?
*A. Store the tokens in AWS Secrets Manager. Create an AWS Lambda function to perform the rotation.
B. Store the tokens in AWS Systems Manager Parameter Store. Create an AWS Lambda function to perform the rotation.
C. Store the tokens in AWS Key Management Service (AWS KMS). Use an AWS managed key to perform the rotation.
D. Store the tokens in AWS Key Management Service (AWS KMS). Use an AWS owned key to perform the rotation.
https://www.examtopics.com/discussions/amazon/view/152209-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer receives datasets that contain missing values, duplicates, and extreme outliers. The ML engineer must consolidate these datasets into a single data frame and must prepare the data for ML.\nWhich solution will meet these requirements?
*A. Use Amazon SageMaker Data Wrangler to import the datasets and to consolidate them into a single data frame. Use the cleansing and enrichment functionalities to prepare the data.
B. Use Amazon SageMaker Ground Truth to import the datasets and to consolidate them into a single data frame. Use the human-in-the-loop capability to prepare the data.
C. Manually import and merge the datasets. Consolidate the datasets into a single data frame. Use Amazon Q Developer to generate code snippets that will prepare the data.
D. Manually import and merge the datasets. Consolidate the datasets into a single data frame. Use Amazon SageMaker data labeling to prepare the data.
https://www.examtopics.com/discussions/amazon/view/152210-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has historical data that shows whether customers needed long-term support from company staff. The company needs to develop an ML model to predict whether new customers will require long-term support.\nWhich modeling approach should the company use to meet this requirement?
A. Anomaly detection
B. Linear regression
*C. Logistic regression
D. Semantic segmentation
https://www.examtopics.com/discussions/amazon/view/152217-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer has developed a binary classification model outside of Amazon SageMaker. The ML engineer needs to make the model accessible to a SageMaker Canvas user for additional tuning.\nThe model artifacts are stored in an Amazon S3 bucket. The ML engineer and the Canvas user are part of the same SageMaker domain.\nWhich combination of requirements must be met so that the ML engineer can share the model with the Canvas user? (Choose two.)
A. The ML engineer and the Canvas user must be in separate SageMaker domains.
*B. The Canvas user must have permissions to access the S3 bucket where the model artifacts are stored.
*C. The model must be registered in the SageMaker Model Registry.
D. The ML engineer must host the model on AWS Marketplace.
E. The ML engineer must deploy the model to a SageMaker endpoint.
https://www.examtopics.com/discussions/amazon/view/152223-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is building a deep learning model on Amazon SageMaker. The company uses a large amount of data as the training dataset. The company needs to optimize the model's hyperparameters to minimize the loss function on the validation dataset.\nWhich hyperparameter tuning strategy will accomplish this goal with the LEAST computation time?
*A. Hyperband
B. Grid search
C. Bayesian optimization
D. Random search
https://www.examtopics.com/discussions/amazon/view/152224-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is planning to use Amazon Redshift ML in its primary AWS account. The source data is in an Amazon S3 bucket in a secondary account.\nAn ML engineer needs to set up an ML pipeline in the primary account to access the S3 bucket in the secondary account. The solution must not require public IPv4 addresses.\nWhich solution will meet these requirements?
A. Provision a Redshift cluster and Amazon SageMaker Studio in a VPC with no public access enabled in the primary account. Create a VPC peering connection between the accounts. Update the VPC route tables to remove the route to 0.0.0.0/0.
B. Provision a Redshift cluster and Amazon SageMaker Studio in a VPC with no public access enabled in the primary account. Create an AWS Direct Connect connection and a transit gateway. Associate the VPCs from both accounts with the transit gateway. Update the VPC route tables to remove the route to 0.0.0.0/0.
C. Provision a Redshift cluster and Amazon SageMaker Studio in a VPC in the primary account. Create an AWS Site-to-Site VPN connection with two encrypted IPsec tunnels between the accounts. Set up interface VPC endpoints for Amazon S3.
*D. Provision a Redshift cluster and Amazon SageMaker Studio in a VPC in the primary account. Create an S3 gateway endpoint. Update the S3 bucket policy to allow IAM principals from the primary account. Set up interface VPC endpoints for SageMaker and Amazon Redshift.
https://www.examtopics.com/discussions/amazon/view/152225-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using an AWS Lambda function to monitor the metrics from an ML model. An ML engineer needs to implement a solution to send an email message when the metrics breach a threshold.\nWhich solution will meet this requirement?
A. Log the metrics from the Lambda function to AWS CloudTrail. Configure a CloudTrail trail to send the email message.
B. Log the metrics from the Lambda function to Amazon CloudFront. Configure an Amazon CloudWatch alarm to send the email message.
*C. Log the metrics from the Lambda function to Amazon CloudWatch. Configure a CloudWatch alarm to send the email message.
D. Log the metrics from the Lambda function to Amazon CloudWatch. Configure an Amazon CloudFront rule to send the email message.
https://www.examtopics.com/discussions/amazon/view/152226-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has used Amazon SageMaker to deploy a predictive ML model in production. The company is using SageMaker Model Monitor on the model. After a model update, an ML engineer notices data quality issues in the Model Monitor checks.\nWhat should the ML engineer do to mitigate the data quality issues that Model Monitor has identified?
A. Adjust the model's parameters and hyperparameters.
B. Initiate a manual Model Monitor job that uses the most recent production data.
*C. Create a new baseline from the latest dataset. Update Model Monitor to use the new baseline for evaluations.
D. Include additional data in the existing training set for the model. Retrain and redeploy the model.
https://www.examtopics.com/discussions/amazon/view/152227-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has an ML model that generates text descriptions based on images that customers upload to the company's website. The images can be up to 50 MB in total size.\nAn ML engineer decides to store the images in an Amazon S3 bucket. The ML engineer must implement a processing solution that can scale to accommodate changes in demand.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Create an Amazon SageMaker batch transform job to process all the images in the S3 bucket.
*B. Create an Amazon SageMaker Asynchronous Inference endpoint and a scaling policy. Run a script to make an inference request for each image.
C. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that uses Karpenter for auto scaling. Host the model on the EKS cluster. Run a script to make an inference request for each image.
D. Create an AWS Batch job that uses an Amazon Elastic Container Service (Amazon ECS) cluster. Specify a list of images to process for each AWS Batch job.
https://www.examtopics.com/discussions/amazon/view/152228-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to use AWS services to identify and extract meaningful unique keywords from documents.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Use the Natural Language Toolkit (NLTK) library on Amazon EC2 instances for text pre-processing. Use the Latent Dirichlet Allocation (LDA) algorithm to identify and extract relevant keywords.
B. Use Amazon SageMaker and the BlazingText algorithm. Apply custom pre-processing steps for stemming and removal of stop words. Calculate term frequency-inverse document frequency (TF-IDF) scores to identify and extract relevant keywords.
C. Store the documents in an Amazon S3 bucket. Create AWS Lambda functions to process the documents and to run Python scripts for stemming and removal of stop words. Use bigram and trigram techniques to identify and extract relevant keywords.
*D. Use Amazon Comprehend custom entity recognition and key phrase extraction to identify and extract relevant keywords.
https://www.examtopics.com/discussions/amazon/view/152229-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to give its ML engineers appropriate access to training data. The ML engineers must access training data from only their own business group. The ML engineers must not be allowed to access training data from other business groups.\nThe company uses a single AWS account and stores all the training data in Amazon S3 buckets. All ML model training occurs in Amazon SageMaker.\nWhich solution will provide the ML engineers with the appropriate access?
A. Enable S3 bucket versioning.
B. Configure S3 Object Lock settings for each user.
C. Add cross-origin resource sharing (CORS) policies to the S3 buckets.
*D. Create IAM policies. Attach the policies to IAM users or IAM roles.
https://www.examtopics.com/discussions/amazon/view/152230-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to host a custom ML model to perform forecast analysis. The forecast analysis will occur with predictable and sustained load during the same 2-hour period every day.\nMultiple invocations during the analysis period will require quick responses. The company needs AWS to manage the underlying infrastructure and any auto scaling activities.\nWhich solution will meet these requirements?
A. Schedule an Amazon SageMaker batch transform job by using AWS Lambda.
B. Configure an Auto Scaling group of Amazon EC2 instances to use scheduled scaling.
*C. Use Amazon SageMaker Serverless Inference with provisioned concurrency.
D. Run the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on Amazon EC2 with pod auto scaling.
https://www.examtopics.com/discussions/amazon/view/152231-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company's ML engineer has deployed an ML model for sentiment analysis to an Amazon SageMaker endpoint. The ML engineer needs to explain to company stakeholders how the model makes predictions.\nWhich solution will provide an explanation for the model's predictions?
A. Use SageMaker Model Monitor on the deployed model.
*B. Use SageMaker Clarify on the deployed model.
C. Show the distribution of inferences from A/В testing in Amazon CloudWatch.
D. Add a shadow endpoint. Analyze prediction differences on samples.
https://www.examtopics.com/discussions/amazon/view/152232-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is using Amazon SageMaker to train a deep learning model that requires distributed training. After some training attempts, the ML engineer observes that the instances are not performing as expected. The ML engineer identifies communication overhead between the training instances.\nWhat should the ML engineer do to MINIMIZE the communication overhead between the instances?
A. Place the instances in the same VPC subnet. Store the data in a different AWS Region from where the instances are deployed.
B. Place the instances in the same VPC subnet but in different Availability Zones. Store the data in a different AWS Region from where the instances are deployed.
*C. Place the instances in the same VPC subnet. Store the data in the same AWS Region and Availability Zone where the instances are deployed.
D. Place the instances in the same VPC subnet. Store the data in the same AWS Region but in a different Availability Zone from where the instances are deployed.
https://www.examtopics.com/discussions/amazon/view/152233-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is running ML models on premises by using custom Python scripts and proprietary datasets. The company is using PyTorch. The model building requires unique domain knowledge. The company needs to move the models to AWS.\nWhich solution will meet these requirements with the LEAST effort?
A. Use SageMaker built-in algorithms to train the proprietary datasets.
*B. Use SageMaker script mode and premade images for ML frameworks.
C. Build a container on AWS that includes custom packages and a choice of ML frameworks.
D. Purchase similar production models through AWS Marketplace.
https://www.examtopics.com/discussions/amazon/view/152234-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon SageMaker and millions of files to train an ML model. Each file is several megabytes in size. The files are stored in an Amazon S3 bucket. The company needs to improve training performance.\nWhich solution will meet these requirements in the LEAST amount of time?
A. Transfer the data to a new S3 bucket that provides S3 Express One Zone storage. Adjust the training job to use the new S3 bucket.
*B. Create an Amazon FSx for Lustre file system. Link the file system to the existing S3 bucket. Adjust the training job to read from the file system.
C. Create an Amazon Elastic File System (Amazon EFS) file system. Transfer the existing data to the file system. Adjust the training job to read from the file system.
D. Create an Amazon ElastiCache (Redis OSS) cluster. Link the Redis OSS cluster to the existing S3 bucket. Stream the data from the Redis OSS cluster directly to the training job.
https://www.examtopics.com/discussions/amazon/view/152235-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to develop an ML model by using tabular data from its customers. The data contains meaningful ordered features with sensitive information that should not be discarded. An ML engineer must ensure that the sensitive data is masked before another team starts to build the model.\nWhich solution will meet these requirements?
A. Use Amazon Made to categorize the sensitive data.
*B. Prepare the data by using AWS Glue DataBrew.
C. Run an AWS Batch job to change the sensitive data to random values.
D. Run an Amazon EMR job to change the sensitive data to random values.
https://www.examtopics.com/discussions/amazon/view/152288-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to deploy ML models to get inferences from large datasets in an asynchronous manner. The ML engineer also needs to implement scheduled monitoring of the data quality of the models. The ML engineer must receive alerts when changes in data quality occur.\nWhich solution will meet these requirements?
A. Deploy the models by using scheduled AWS Glue jobs. Use Amazon CloudWatch alarms to monitor the data quality and to send alerts.
B. Deploy the models by using scheduled AWS Batch jobs. Use AWS CloudTrail to monitor the data quality and to send alerts.
C. Deploy the models by using Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Use Amazon EventBridge to monitor the data quality and to send alerts.
*D. Deploy the models by using Amazon SageMaker batch transform. Use SageMaker Model Monitor to monitor the data quality and to send alerts.
https://www.examtopics.com/discussions/amazon/view/152289-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer normalized training data by using min-max normalization in AWS Glue DataBrew. The ML engineer must normalize the production inference data in the same way as the training data before passing the production inference data to the model for predictions.\nWhich solution will meet this requirement?
A. Apply statistics from a well-known dataset to normalize the production samples.
*B. Keep the min-max normalization statistics from the training set. Use these values to normalize the production samples.
C. Calculate a new set of min-max normalization statistics from a batch of production samples. Use these values to normalize all the production samples.
D. Calculate a new set of min-max normalization statistics from each production sample. Use these values to normalize all the production samples.
https://www.examtopics.com/discussions/amazon/view/152292-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is planning to use Amazon SageMaker to make classification ratings that are based on images. The company has 6 ТВ of training data that is stored on an Amazon FSx for NetApp ONTAP system virtual machine (SVM). The SVM is in the same VPC as SageMaker.\nAn ML engineer must make the training data accessible for ML models that are in the SageMaker environment.\nWhich solution will meet these requirements?
*A. Mount the FSx for ONTAP file system as a volume to the SageMaker Instance.
B. Create an Amazon S3 bucket. Use Mountpoint for Amazon S3 to link the S3 bucket to the FSx for ONTAP file system.
C. Create a catalog connection from SageMaker Data Wrangler to the FSx for ONTAP file system.
D. Create a direct connection from SageMaker Data Wrangler to the FSx for ONTAP file system.
https://www.examtopics.com/discussions/amazon/view/152294-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company regularly receives new training data from the vendor of an ML model. The vendor delivers cleaned and prepared data to the company's Amazon S3 bucket every 3-4 days.\nThe company has an Amazon SageMaker pipeline to retrain the model. An ML engineer needs to implement a solution to run the pipeline when new data is uploaded to the S3 bucket.\nWhich solution will meet these requirements with the LEAST operational effort?
A. Create an S3 Lifecycle rule to transfer the data to the SageMaker training instance and to initiate training.
B. Create an AWS Lambda function that scans the S3 bucket. Program the Lambda function to initiate the pipeline when new data is uploaded.
*C. Create an Amazon EventBridge rule that has an event pattern that matches the S3 upload. Configure the pipeline as the target of the rule.
D. Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to orchestrate the pipeline when new data is uploaded.
https://www.examtopics.com/discussions/amazon/view/152295-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is developing a fraud detection model by using the Amazon SageMaker XGBoost algorithm. The model classifies transactions as either fraudulent or legitimate.\nDuring testing, the model excels at identifying fraud in the training dataset. However, the model is inefficient at identifying fraud in new and unseen transactions.\nWhat should the ML engineer do to improve the fraud detection for new transactions?
A. Increase the learning rate.
B. Remove some irrelevant features from the training dataset.
C. Increase the value of the max_depth hyperparameter.
*D. Decrease the value of the max_depth hyperparameter.
https://www.examtopics.com/discussions/amazon/view/152298-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has a binary classification model in production. An ML engineer needs to develop a new version of the model.\nThe new model version must maximize correct predictions of positive labels and negative labels. The ML engineer must use a metric to recalibrate the model to meet these requirements.\nWhich metric should the ML engineer use for the model recalibration?
*A. Accuracy
B. Precision
C. Recall
D. Specificity
https://www.examtopics.com/discussions/amazon/view/152299-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon SageMaker to create ML models. The company's data scientists need fine-grained control of the ML workflows that they orchestrate. The data scientists also need the ability to visualize SageMaker jobs and workflows as a directed acyclic graph (DAG). The data scientists must keep a running history of model discovery experiments and must establish model governance for auditing and compliance verifications.\nWhich solution will meet these requirements?
A. Use AWS CodePipeline and its integration with SageMaker Studio to manage the entire ML workflows. Use SageMaker ML Lineage Tracking for the running history of experiments and for auditing and compliance verifications.
B. Use AWS CodePipeline and its integration with SageMaker Experiments to manage the entire ML workflows. Use SageMaker Experiments for the running history of experiments and for auditing and compliance verifications.
*C. Use SageMaker Pipelines and its integration with SageMaker Studio to manage the entire ML workflows. Use SageMaker ML Lineage Tracking for the running history of experiments and for auditing and compliance verifications.
D. Use SageMaker Pipelines and its integration with SageMaker Experiments to manage the entire ML workflows. Use SageMaker Experiments for the running history of experiments and for auditing and compliance verifications.
https://www.examtopics.com/discussions/amazon/view/152095-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to reduce the cost of its containerized ML applications. The applications use ML models that run on Amazon EC2 instances, AWS Lambda functions, and an Amazon Elastic Container Service (Amazon ECS) cluster. The EC2 workloads and ECS workloads use Amazon Elastic Block Store (Amazon EBS) volumes to save predictions and artifacts.\nAn ML engineer must identify resources that are being used inefficiently. The ML engineer also must generate recommendations to reduce the cost of these resources.\nWhich solution will meet these requirements with the LEAST development effort?
A. Create code to evaluate each instance's memory and compute usage.
B. Add cost allocation tags to the resources. Activate the tags in AWS Billing and Cost Management.
C. Check AWS CloudTrail event history for the creation of the resources.
*D. Run AWS Compute Optimizer.
https://www.examtopics.com/discussions/amazon/view/152305-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to create a central catalog for all the company's ML models. The models are in AWS accounts where the company developed the models initially. The models are hosted in Amazon Elastic Container Registry (Amazon ECR) repositories.\nWhich solution will meet these requirements?
A. Configure ECR cross-account replication for each existing ECR repository. Ensure that each model is visible in each AWS account.
B. Create a new AWS account with a new ECR repository as the central catalog. Configure ECR cross-account replication between the initial ECR repositories and the central catalog.
*C. Use the Amazon SageMaker Model Registry to create a model group for models hosted in Amazon ECR. Create a new AWS account. In the new account, use the SageMaker Model Registry as the central catalog. Attach a cross-account resource policy to each model group in the initial AWS accounts.
D. Use an AWS Glue Data Catalog to store the models. Run an AWS Glue crawler to migrate the models from the ECR repositories to the Data Catalog. Configure cross-account access to the Data Catalog.
https://www.examtopics.com/discussions/amazon/view/152097-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has developed a new ML model. The company requires online model validation on 10% of the traffic before the company fully releases the model in production. The company uses an Amazon SageMaker endpoint behind an Application Load Balancer (ALB) to serve the model.\nWhich solution will set up the required online validation with the LEAST operational overhead?
*A. Use production variants to add the new model to the existing SageMaker endpoint. Set the variant weight to 0.1 for the new model. Monitor the number of invocations by using Amazon CloudWatch.
B. Use production variants to add the new model to the existing SageMaker endpoint. Set the variant weight to 1 for the new model. Monitor the number of invocations by using Amazon CloudWatch.
C. Create a new SageMaker endpoint. Use production variants to add the new model to the new endpoint. Monitor the number of invocations by using Amazon CloudWatch.
D. Configure the ALB to route 10% of the traffic to the new model at the existing SageMaker endpoint. Monitor the number of invocations by using AWS CloudTrail.
https://www.examtopics.com/discussions/amazon/view/152310-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to develop an ML model. The model must identify an item in an image and must provide the location of the item.\nWhich Amazon SageMaker algorithm will meet these requirements?
A. Image classification
B. XGBoost
*C. Object detection
D. K-nearest neighbors (k-NN)
https://www.examtopics.com/discussions/amazon/view/168847-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has an Amazon S3 bucket that contains 1 ТВ of files from different sources. The S3 bucket contains the following file types in the same S3 folder: CSV, JSON, XLSX, and Apache Parquet.\nAn ML engineer must implement a solution that uses AWS Glue DataBrew to process the data. The ML engineer also must store the final output in Amazon S3 so that AWS Glue can consume the output in the future.\nWhich solution will meet these requirements?
A. Use DataBrew to process the existing S3 folder. Store the output in Apache Parquet format.
B. Use DataBrew to process the existing S3 folder. Store the output in AWS Glue Parquet format.
*C. Separate the data into a different folder for each file type. Use DataBrew to process each folder individually. Store the output in Apache Parquet format.
D. Separate the data into a different folder for each file type. Use DataBrew to process each folder individually. Store the output in AWS Glue Parquet format.
https://www.examtopics.com/discussions/amazon/view/157315-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A manufacturing company uses an ML model to determine whether products meet a standard for quality. The model produces an output of "Passed" or "Failed." Robots separate the products into the two categories by using the model to analyze photos on the assembly line.\nWhich metrics should the company use to evaluate the model's performance? (Choose two.)
*A. Precision and recall
B. Root mean square error (RMSE) and mean absolute percentage error (MAPE)
*C. Accuracy and F1 score
D. Bilingual Evaluation Understudy (BLEU) score
E. Perplexity
https://www.examtopics.com/discussions/amazon/view/157316-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to encrypt all data in transit when an ML training job runs. The ML engineer must ensure that encryption in transit is applied to processes that Amazon SageMaker uses during the training job.\nWhich solution will meet these requirements?
A. Encrypt communication between nodes for batch processing.
*B. Encrypt communication between nodes in a training cluster.
C. Specify an AWS Key Management Service (AWS KMS) key during creation of the training job request.
D. Specify an AWS Key Management Service (AWS KMS) key during creation of the SageMaker domain.
https://www.examtopics.com/discussions/amazon/view/168853-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to use metrics to assess the quality of a time-series forecasting model.\nWhich metrics apply to this model? (Choose two.)
A. Recall
B. LogLoss
*C. Root mean square error (RMSE)
D. InferenceLatency
*E. Average weighted quantile loss (wQL)
https://www.examtopics.com/discussions/amazon/view/169486-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company runs Amazon SageMaker ML models that use accelerated instances. The models require real-time responses. Each model has different scaling requirements. The company must not allow a cold start for the models.\nWhich solution will meet these requirements?
A. Create a SageMaker Serverless Inference endpoint for each model. Use provisioned concurrency for the endpoints.
B. Create a SageMaker Asynchronous Inference endpoint for each model. Create an auto scaling policy for each endpoint.
*C. Create a SageMaker endpoint. Create an inference component for each model. In the inference component settings, specify the newly created endpoint. Create an auto scaling policy for each inference component. Set the parameter for the minimum number of copies to at least 1.
D. Create an Amazon S3 bucket. Store all the model artifacts in the S3 bucket. Create a SageMaker multi-model endpoint. Point the endpoint to the S3 bucket. Create an auto scaling policy for the endpoint. Set the parameter for the minimum number of copies to at least 1.
https://www.examtopics.com/discussions/amazon/view/169487-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses Amazon SageMaker for its ML process. A compliance audit discovers that an Amazon S3 bucket for training data uses server-side encryption with S3 managed keys (SSE-S3).\nThe company requires customer managed keys. An ML engineer changes the S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). The ML engineer makes no other configuration changes.\nAfter the change to the encryption settings, SageMaker training jobs start to fail with AccessDenied errors.\nWhat should the ML engineer do to resolve this problem?
A. Update the IAM policy that is attached to the execution role for the training jobs. Include the s3:ListBucket and s3:GetObject permissions.
B. Update the S3 bucket policy that is attached to the S3 bucket. Set the value of the aws:SecureTransport condition key to True.
*C. Update the IAM policy that is attached to the execution role for the training jobs. Include the kms:Encrypt and kms:Decrypt permissions.
D. Update the IAM policy that is attached to the user that created the training jobs. Include the kms:CreateGrant permission.
https://www.examtopics.com/discussions/amazon/view/169489-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company runs training jobs on Amazon SageMaker by using a compute optimized instance. Demand for training runs will remain constant for the next 55 weeks. The instance needs to run for 35 hours each week. The company needs to reduce its model training costs.\nWhich solution will meet these requirements?
A. Use a serverless endpoint with a provisioned concurrency of 35 hours for each week. Run the training on the endpoint.
B. Use SageMaker Edge Manager for the training. Specify the instance requirement in the edge device configuration. Run the training.
C. Use the heterogeneous cluster feature of SageMaker Training. Configure the instance_type, instance_count, and instance_groups arguments to run training jobs.
*D. Opt in to a SageMaker Savings Plan with a 1-year term and an All Upfront payment. Run a SageMaker Training job on the instance.
https://www.examtopics.com/discussions/amazon/view/168854-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company deployed an ML model that uses the XGBoost algorithm to predict product failures. The model is hosted on an Amazon SageMaker endpoint and is trained on normal operating data. An AWS Lambda function provides the predictions to the company's application.\nAn ML engineer must implement a solution that uses incoming live data to detect decreased model accuracy over time.\nWhich solution will meet these requirements?
A. Use Amazon CloudWatch to create a dashboard that monitors real-time inference data and model predictions. Use the dashboard to detect drift.
B. Modify the Lambda function to calculate model drift by using real-time inference data and model predictions. Program the Lambda function to send alerts.
*C. Schedule a monitoring job in SageMaker Model Monitor. Use the job to detect drift by analyzing the live data against a baseline of the training data statistics and constraints.
D. Schedule a monitoring job in SageMaker Debugger. Use the job to detect drift by analyzing the live data against a baseline of the training data statistics and constraints.
https://www.examtopics.com/discussions/amazon/view/168855-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has an ML model that uses historical transaction data to predict customer behavior. An ML engineer is optimizing the model in Amazon SageMaker to enhance the model's predictive accuracy. The ML engineer must examine the input data and the resulting predictions to identify trends that could skew the model's performance across different demographics.\nWhich solution will provide this level of analysis?
A. Use Amazon CloudWatch to monitor network metrics and CPU metrics for resource optimization during model training.
B. Create AWS Glue DataBrew recipes to correct the data based on statistics from the model output.
*C. Use SageMaker Clarify to evaluate the model and training data for underlying patterns that might affect accuracy.
D. Create AWS Lambda functions to automate data pre-processing and to ensure consistent quality of input data for the model.
https://www.examtopics.com/discussions/amazon/view/168856-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses 10 Reserved Instances of accelerated instance types to serve the current version of an ML model. An ML engineer needs to deploy a new version of the model to an Amazon SageMaker real-time inference endpoint.\nThe solution must use the original 10 instances to serve both versions of the model. The solution also must include one additional Reserved Instance that is available to use in the deployment process. The transition between versions must occur with no downtime or service interruptions.\nWhich solution will meet these requirements?
A. Configure a blue/green deployment with all-at-once traffic shifting.
B. Configure a blue/green deployment with canary traffic shifting and a size of 10%.
C. Configure a shadow test with a traffic sampling percentage of 10%.
*D. Configure a rolling deployment with a rolling batch size of 1.
https://www.examtopics.com/discussions/amazon/view/168857-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is working on an ML project that will include Amazon SageMaker notebook instances. An ML engineer must ensure that the SageMaker notebook instances do not allow root access.\nWhich solution will prevent the deployment of notebook instances that allow root access?
*A. Use IAM condition keys to stop deployments of SageMaker notebook instances that allow root access.
B. Use AWS Key Management Service (AWS KMS) keys to stop deployments of SageMaker notebook instances that allow root access.
C. Monitor resource creation by using Amazon EventBridge events. Create an AWS Lambda function that deletes all deployed SageMaker notebook instances that allow root access.
D. Monitor resource creation by using AWS CloudFormation events. Create an AWS Lambda function that deletes all deployed SageMaker notebook instances that allow root access.
https://www.examtopics.com/discussions/amazon/view/168859-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon SageMaker to develop ML models. The company stores sensitive training data in an Amazon S3 bucket. The model training must have network isolation from the internet.\nWhich solution will meet this requirement?
A. Run the SageMaker training jobs in private subnets. Create a NAT gateway. Route traffic for training through the NAT gateway.
*B. Run the SageMaker training jobs in private subnets. Create an S3 gateway VPC endpoint. Route traffic for training through the S3 gateway VPC endpoint.
C. Run the SageMaker training jobs in public subnets that have an attached security group. In the security group, use inbound rules to limit traffic from the internet. Encrypt SageMaker instance storage by using server-side encryption with AWS KMS keys (SSE-KMS).
D. Encrypt traffic to Amazon S3 by using a bucket policy that includes a value of True for the aws:SecureTransport condition key. Use default at-rest encryption for Amazon S3. Encrypt SageMaker instance storage by using server-side encryption with AWS KMS keys (SSE-KMS).
https://www.examtopics.com/discussions/amazon/view/168860-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs an AWS solution that will automatically create versions of ML models as the models are created.\nWhich solution will meet this requirement?
A. Amazon Elastic Container Registry (Amazon ECR)
B. Model packages from Amazon SageMaker Marketplace
C. Amazon SageMaker ML Lineage Tracking
*D. Amazon SageMaker Model Registry
https://www.examtopics.com/discussions/amazon/view/169494-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to use Retrieval Augmented Generation (RAG) to supplement an open source large language model (LLM) that runs on Amazon Bedrock. The company's data for RAG is a set of documents in an Amazon S3 bucket. The documents consist of .csv files and .docx files.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Create a pipeline in Amazon SageMaker Pipelines to generate a new model. Call the new model from Amazon Bedrock to perform RAG queries.
B. Convert the data into vectors. Store the data in an Amazon Neptune database. Connect the database to Amazon Bedrock. Call the Amazon Bedrock API to perform RAG queries.
C. Fine-tune an existing LLM by using an AutoML job in Amazon SageMaker. Configure the S3 bucket as a data source for the AutoML job. Deploy the LLM to a SageMaker endpoint. Use the endpoint to perform RAG queries.
*D. Create a knowledge base for Amazon Bedrock. Configure a data source that references the S3 bucket. Use the Amazon Bedrock API to perform RAG queries.
https://www.examtopics.com/discussions/amazon/view/168861-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company plans to deploy an ML model for production inference on an Amazon SageMaker endpoint. The average inference payload size will vary from 100 MB to 300 MB. Inference requests must be processed in 60 minutes or less.\nWhich SageMaker inference option will meet these requirements?
A. Serverless inference
*B. Asynchronous inference
C. Real-time inference
D. Batch transform
https://www.examtopics.com/discussions/amazon/view/168862-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer notices class imbalance in an image classification training job.\nWhat should the ML engineer do to resolve this issue?
A. Reduce the size of the dataset.
B. Transform some of the images in the dataset.
*C. Apply random oversampling on the dataset.
D. Apply random data splitting on the dataset.
https://www.examtopics.com/discussions/amazon/view/169496-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company receives daily .csv files about customer interactions with its ML model. The company stores the files in Amazon S3 and uses the files to retrain the model. An ML engineer needs to implement a solution to mask credit card numbers in the files before the model is retrained.\nWhich solution will meet this requirement with the LEAST development effort?
A. Create a discovery job in Amazon Macie. Configure the job to find and mask sensitive data.
*B. Create Apache Spark code to run on an AWS Glue job. Use the Sensitive Data Detection functionality in AWS Glue to find and mask sensitive data.
C. Create Apache Spark code to run on an AWS Glue job. Program the code to perform a regex operation to find and mask sensitive data.
D. Create Apache Spark code to run on an Amazon EC2 instance. Program the code to perform an operation to find and mask sensitive data.
https://www.examtopics.com/discussions/amazon/view/168863-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A medical company is using AWS to build a tool to recommend treatments for patients. The company has obtained health records and self-reported textual information in English from patients. The company needs to use this information to gain insight about the patients.\nWhich solution will meet this requirement with the LEAST development effort?
A. Use Amazon SageMaker to build a recurrent neural network (RNN) to summarize the data.
*B. Use Amazon Comprehend Medical to summarize the data.
C. Use Amazon Kendra to create a quick-search tool to query the data.
D. Use the Amazon SageMaker Sequence-to-Sequence (seq2seq) algorithm to create a text summary from the data.
https://www.examtopics.com/discussions/amazon/view/168864-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to extract entities from a PDF document to build a classifier model.\nWhich solution will extract and store the entities in the LEAST amount of time?
*A. Use Amazon Comprehend to extract the entities. Store the output in Amazon S3.
B. Use an open source AI optical character recognition (OCR) tool on Amazon SageMaker to extract the entities. Store the output in Amazon S3.
C. Use Amazon Textract to extract the entities. Use Amazon Comprehend to convert the entities to text. Store the output in Amazon S3.
D. Use Amazon Textract integrated with Amazon Augmented AI (Amazon A2I) to extract the entities. Store the output in Amazon S3.
https://www.examtopics.com/discussions/amazon/view/168865-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company shares Amazon SageMaker Studio notebooks that are accessible through a VPN. The company must enforce access controls to prevent malicious actors from exploiting presigned URLs to access the notebooks.\nWhich solution will meet these requirements?
*A. Set up Studio client IP validation by using the aws:sourceIp IAM policy condition.
B. Set up Studio client VPC validation by using the aws:sourceVpc IAM policy condition.
C. Set up Studio client role endpoint validation by using the aws:PrimaryTag IAM policy condition.
D. Set up Studio client user endpoint validation by using the aws:PrincipalTag IAM policy condition.
https://www.examtopics.com/discussions/amazon/view/157638-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to merge and transform data from two sources to retrain an existing ML model. One data source consists of .csv files that are stored in an Amazon S3 bucket. Each .csv file consists of millions of records. The other data source is an Amazon Aurora DB cluster.\nThe result of the merge process must be written to a second S3 bucket. The ML engineer needs to perform this merge-and-transform task every week.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Create a transient Amazon EMR cluster every week. Use the cluster to run an Apache Spark job to merge and transform the data.
*B. Create a weekly AWS Glue job that uses the Apache Spark engine. Use DynamicFrame native operations to merge and transform the data.
C. Create an AWS Lambda function that runs Apache Spark code every week to merge and transform the data. Configure the Lambda function to connect to the initial S3 bucket and the DB cluster.
D. Create an AWS Batch job that runs Apache Spark code on Amazon EC2 instances every week. Configure the Spark code to save the data from the EC2 instances to the second S3 bucket.
https://www.examtopics.com/discussions/amazon/view/169506-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer has deployed an Amazon SageMaker model to a serverless endpoint in production. The model is invoked by the InvokeEndpoint API operation.\nThe model's latency in production is higher than the baseline latency in the test environment. The ML engineer thinks that the increase in latency is because of model startup time.\nWhat should the ML engineer do to confirm or deny this hypothesis?
A. Schedule a SageMaker Model Monitor job. Observe metrics about model quality.
B. Schedule a SageMaker Model Monitor job with Amazon CloudWatch metrics enabled.
*C. Enable Amazon CloudWatch metrics. Observe the ModelSetupTime metric in the SageMaker namespace.
D. Enable Amazon CloudWatch metrics. Observe the ModelLoadingWaitTime metric in the SageMaker namespace.
https://www.examtopics.com/discussions/amazon/view/168918-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to ensure that a dataset complies with regulations for personally identifiable information (PII). The ML engineer will use the data to train an ML model on Amazon SageMaker instances. SageMaker must not use any of the PII.\nWhich solution will meet these requirements in the MOST operationally efficient way?
*A. Use the Amazon Comprehend DetectPiiEntities API call to redact the PII from the data. Store the data in an Amazon S3 bucket. Access the S3 bucket from the SageMaker instances for model training.
B. Use the Amazon Comprehend DetectPiiEntities API call to redact the PII from the data. Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system to the SageMaker instances for model training.
C. Use AWS Glue DataBrew to cleanse the dataset of PII. Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system to the SageMaker instances for model training.
D. Use Amazon Macie for automatic discovery of PII in the data. Remove the PII. Store the data in an Amazon S3 bucket. Mount the S3 bucket to the SageMaker instances for model training.
https://www.examtopics.com/discussions/amazon/view/169509-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company must install a custom script on any newly created Amazon SageMaker notebook instances.\nWhich solution will meet this requirement with the LEAST operational overhead?
*A. Create a lifecycle configuration script to install the custom script when a new SageMaker notebook is created. Attach the lifecycle configuration to every new SageMaker notebook as part of the creation steps.
B. Create a custom Amazon Elastic Container Registry (Amazon ECR) image that contains the custom script. Push the ECR image to a Docker registry. Attach the Docker image to a SageMaker Studio domain. Select the kernel to run as part of the SageMaker notebook.
C. Create a custom package index repository. Use AWS CodeArtifact to manage the installation of the custom script. Set up AWS PrivateLink endpoints to connect CodeArtifact to the SageMaker instance. Install the script.
D. Store the custom script in Amazon S3. Create an AWS Lambda function to install the custom script on new SageMaker notebooks. Configure Amazon EventBridge to invoke the Lambda function when a new SageMaker notebook is initialized.
https://www.examtopics.com/discussions/amazon/view/169510-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is building a real-time data processing pipeline for an ecommerce application. The application generates a high volume of clickstream data that must be ingested, processed, and visualized in near real time. The company needs a solution that supports SQL for data processing and Jupyter notebooks for interactive analysis.\nWhich solution will meet these requirements?
A. Use Amazon Data Firehose to ingest the data. Create an AWS Lambda function to process the data. Store the processed data in Amazon S3. Use Amazon QuickSight to visualize the data.
B. Use Amazon Kinesis Data Streams to ingest the data. Use Amazon Data Firehose to transform the data. Use Amazon Athena to process the data. Use Amazon QuickSight to visualize the data.
C. Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to ingest the data. Use AWS Glue with PySpark to process the data. Store the processed data in Amazon S3. Use Amazon QuickSight to visualize the data.
*D. Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to ingest the data. Use Amazon Managed Service for Apache Flink to process the data. Use the built-in Flink dashboard to visualize the data.
https://www.examtopics.com/discussions/amazon/view/168979-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A medical company needs to store clinical data. The data includes personally identifiable information (PII) and protected health information (PHI).\nAn ML engineer needs to implement a solution to ensure that the PII and PHI are not used to train ML models.\nWhich solution will meet these requirements?
A. Store the clinical data in Amazon S3 buckets. Use AWS Glue DataBrew to mask the PII and PHI before the data is used for model training.
B. Upload the clinical data to an Amazon Redshift database. Use built-in SQL stored procedures to automatically classify and mask the PII and PHI before the data is used for model training.
*C. Use Amazon Comprehend to detect and mask the PII before the data is used for model training. Use Amazon Comprehend Medical to detect and mask the PHI before the data is used for model training.
D. Create an AWS Lambda function to encrypt the PII and PHI. Program the Lambda function to save the encrypted data to an Amazon S3 bucket for model training.
https://www.examtopics.com/discussions/amazon/view/169514-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is developing a classification model. The ML engineer needs to use custom libraries in processing jobs, training jobs, and pipelines in Amazon SageMaker.\nWhich solution will provide this functionality with the LEAST implementation effort?
A. Manually install the libraries in the SageMaker containers.
*B. Build a custom Docker container that includes the required libraries. Host the container in Amazon Elastic Container Registry (Amazon ECR). Use the ECR image in the SageMaker jobs and pipelines.
C. Create a SageMaker notebook instance to host the jobs. Create an AWS Lambda function to install the libraries on the notebook instance when the notebook instance starts. Configure the SageMaker jobs and pipelines to run on the notebook instance.
D. Run code for the libraries externally on Amazon EC2 instances. Store the results in Amazon S3. Import the results into the SageMaker jobs and pipelines.
https://www.examtopics.com/discussions/amazon/view/315658-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company runs an ML model on Amazon SageMaker. The company uses an automatic process that makes API calls to create training jobs for the model. The company has new compliance rules that prohibit the collection of aggregated metadata from training jobs.\nWhich solution will prevent SageMaker from collecting metadata from the training jobs?
*A. Opt out of metadata tracking for any training job that is submitted.
B. Ensure that training jobs are running in a private subnet in a custom VPC.
C. Encrypt the training data with an AWS Key Management Service (AWS KMS) customer managed key.
D. Reconfigure the training jobs to use only AWS Nitro instances.
https://www.examtopics.com/discussions/amazon/view/315656-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is exploring generative AI and wants to add a new product feature. An ML engineer is making API calls from existing Amazon EC2 instances to Amazon Bedrock. The EC2 instances are in a private subnet and must remain private during the implementation. The EC2 instances have an assigned security group that allows access to all IP addresses in the private subnet.\nWhat should the ML engineer do to establish a connection between the EC2 instances and Amazon Bedrock?
A. Modify the security group to allow inbound and outbound traffic to and from Amazon Bedrock.
*B. Use AWS PrivateLink to access Amazon Bedrock through an interface VPC endpoint.
C. Configure Amazon Bedrock to use the private subnet where the EC2 instances are deployed.
D. Link the existing VPC to Amazon Bedrock by using an AWS Direct Connect connection.
https://www.examtopics.com/discussions/amazon/view/315650-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to deploy four ML models in an Amazon SageMaker inference pipeline. The models were built with different frameworks. The ML engineer also needs to give clients the ability to use the invoke_endpoint call to perform inference for each model.\nWhich solution will meet these requirements MOST cost-effectively?
A. Create a SageMaker multi-model endpoint.
*B. Create a SageMaker multi-container endpoint.
C. Create multiple SageMaker single-model endpoints.
D. Run a SparkML job to generate multiple endpoints.
https://www.examtopics.com/discussions/amazon/view/315659-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is planning to create an internal-only chat interface to help employees handle customer queries. Currently, the employees need to refer to a massive knowledge base of internal documents to address customer issues. The new solution must be serverless.\nWhich combination of steps will meet these requirements?
*A. Set up Amazon Bedrock with the Anthropic Claude foundation model.
B. Set up Amazon SageMaker JumpStart with the Llama foundation model.
C. Use Amazon EC2 instances with Amazon API Gateway to invoke the model API.
*D. Use AWS Lambda functions with Amazon API Gateway to invoke the model API.
*E. Use an Amazon S3 bucket to store vector database dumps and embeddings.
F. Use Amazon RDS for MySQL to store vector database dumps and embeddings.
https://www.examtopics.com/discussions/amazon/view/315668-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer wants to use a set of survey responses as training data for an ML classifier. All the survey responses are either “yes” or “no.”\nThe ML engineer needs to convert the responses into a feature that will produce better model training results. The ML engineer must not increase the dimensionality of the dataset.\nWhich methods will meet these requirements? (Choose two.)
*A. Binary encoding
*B. Label encoding
C. One-hot encoding
D. Statistical imputation
E. Tokenization
https://www.examtopics.com/discussions/amazon/view/315665-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is building an ML model by using Amazon SageMaker, AWS owned libraries, and open source libraries. The company must ensure that SageMaker does not collect metadata about usage and errors during training.\nWhich solution will meet these requirements?
A. Associate the SageMaker domain with a custom IAM role. Attach the role to a policy that denies Amazon CloudWatch service usage logs.
B. Add an IAM role to the SageMaker domain to deny Amazon CloudWatch the permission to report metadata.
C. Turn off the setting in the SageMaker domain to share metadata for console jobs. Opt out of metadata collection for each training job that is submitted through the AWS CLI or AWS SDKs.
*D. Set a parameter to opt out of metadata collection for each training job that is submitted through the AWS CLI, Boto3, or the SageMaker Python SDK.
https://www.examtopics.com/discussions/amazon/view/315672-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML model is deployed in production. The model has performed well and has met its metric thresholds for months.\nAn ML engineer who is monitoring the model observes a sudden degradation. The performance metrics of the model are now below the thresholds.\nWhat could be the cause of the performance degradation?
A. Lack of training data
*B. Drift in production data distribution
C. Compute resource constraints
D. Model overfitting
https://www.examtopics.com/discussions/amazon/view/382257-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is using AWS Glue to transform proprietary data from a third-party vendor to a format that the ML engineer intends to use with the Amazon SageMaker DeepAR forecasting algorithm. The data includes several similar time series data files that the ML engineer must convert to the appropriate format. The ML engineer must compress the files to optimize storage costs.\nWhich solution will meet these requirements?
A. Use Snappy to convert the files to RecordIO-Protobuf and to compress the files.
B. Use XZ to convert the files to RecordIO-Protobuf and to compress the files.
C. Use XZ to convert the files to Apache Parquet format and to compress the files.
*D. Use gzip to convert the files to Apache Parquet and to compress the files.
https://www.examtopics.com/discussions/amazon/view/382291-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company’s ML engineer is creating a classification model. The ML engineer explores the dataset and notices a column that is named day_of_week. The column’s data consists of the following values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.\nWhich technique should the ML engineer use to convert this column’s data to binary values?
A. Binary encoding
B. Label encoding
*C. One-hot encoding
D. Tokenization
https://www.examtopics.com/discussions/amazon/view/382261-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A healthcare company wants to detect irregularities in patient vital signs that could indicate early signs of a medical condition. The company has an unlabeled dataset that includes patient health records, medication history, and lifestyle changes.\nWhich algorithm and hyperparameter should the company use to meet this requirement?
A. Use the Amazon SageMaker AI XGBoost algorithm. Set max_depth to greater than 100 to regulate tree complexity.
B. Use the Amazon SageMaker AI k-means clustering algorithm. Set k to determine the number of clusters.
C. Use the Amazon SageMaker AI DeepAR algorithm. Set epochs to the number of training iterations.
*D. Use the Amazon SageMaker AI Random Cut Forest (RCF) algorithm. Set num_trees to greater than 100.
https://www.examtopics.com/discussions/amazon/view/382787-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to build a processing pipeline to identify and remove personally identifiable information (PII) from petabytes of unstructured data. The ML engineer will use the processed data to train ML models in Amazon SageMaker AI.\nWhich solution will meet these requirements?
*A. Use the Apache Spark-based serverless engine from AWS Glue interactive sessions. Use the Detect PII transform feature to identify and remove the PII data.
B. Use AWS Glue Data Wrangler within Amazon SageMaker Canvas to detect and remove the PII.
C. Use the Amazon SageMaker Clarify API to detect and mask the PII data.
D. Use the DetectEntities API action in Amazon Comprehend to identify and remove the PII data.
https://www.examtopics.com/discussions/amazon/view/382788-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is building an ML model in Amazon SageMaker AI. The ML engineer needs to load historical data directly from Amazon S3, Amazon Athena, and Snowflake into SageMaker AI.\nWhich solution will meet this requirement?
A. Use AWS Glue DataBrew to import the data into SageMaker AI.
B. Build a pipeline in SageMaker Pipelines to process the data. Use AWS DataSync to load the processed data into SageMaker AI.
C. Create a feature store in SageMaker Feature Store. Use an Apache Spark connector to Feature Store to access the data.
*D. Use SageMaker Data Wrangler to query and import the data.
https://www.examtopics.com/discussions/amazon/view/383772-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An IoT company uses Amazon SageMaker to train and test an XGBoost model for object detection. ML engineers need to monitor performance metrics when they train the model with variants in hyperparameters. The ML engineers also need to send Short Message Service (SMS) text messages after training is complete.\nWhich solution will meet these requirements?
A. Use Amazon CloudWatch to monitor performance metrics. Use Amazon Simple Queue Service (Amazon SQS) for message delivery.
*B. Use Amazon CloudWatch to monitor performance metrics. Use Amazon Simple Notification Service (Amazon SNS) for message delivery.
C. Use AWS CloudTrail to monitor performance metrics. Use Amazon Simple Queue Service (Amazon SQS) for message delivery.
D. Use AWS CloudTrail to monitor performance metrics. Use Amazon Simple Notification Service (Amazon SNS) for message delivery.
https://www.examtopics.com/discussions/amazon/view/168858-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is deploying a trained model to an Amazon SageMaker endpoint. The ML engineer needs to receive alerts when data quality issues occur in production.\nWhich solution will meet this requirement?
A. Configure an Amazon CloudWatch metric alarm and a corresponding action to send an Amazon Simple Notification Service (Amazon SNS) notification.
B. Integrate the SageMaker endpoint with a SageMaker Clarify processing job. Configure an Amazon CloudWatch alarm to provide alerts.
*C. Configure a monitoring job in SageMaker Model Monitor. Integrate Model Monitor with Amazon CloudWatch to provide alerts.
D. Configure a data flow in SageMaker Data Wrangler. Integrate Data Wrangler with Amazon CloudWatch to provide alerts.
https://www.examtopics.com/discussions/amazon/view/315648-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to use Amazon SageMaker to train a model on more than 300 GB of data. The training data is composed of files that are 200 MB in size. The data is stored in Amazon S3 Standard storage and feeds a dashboard tool.\nWhich SageMaker training ingestion mechanism is the MOST cost-effective solution for this scenario?
A. Amazon Elastic File System (Amazon EFS) file system
B. Amazon FSx for Lustre file system
C. Amazon S3 in fast file mode while using S3 Express One Zone
*D. Amazon S3 in fast file mode without using S3 Express One Zone
https://www.examtopics.com/discussions/amazon/view/315647-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has an ML model that is deployed to an Amazon SageMaker endpoint for real-time inference. The company needs to deploy a new model. The company must compare the new model’s performance to the currently deployed model’s performance before shifting all traffic to the new model.\nWhich solution will meet these requirements with the LEAST operational effort?
A. Deploy the new model to a separate endpoint. Manually split traffic between the two endpoints.
B. Deploy the new model to a separate endpoint. Use Amazon CloudFront to distribute traffic between the two endpoints.
*C. Deploy the new model as a shadow variant on the same endpoint as the current model. Route a portion of live traffic to the shadow model for evaluation.
D. Use AWS Lambda functions with custom logic to route traffic between the current model and the new model.
https://www.examtopics.com/discussions/amazon/view/315649-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to launch a new internal generative AI interface to answer user questions. The interface will be based on a popular open source large language model (LLM).\nWhich combination of steps will deploy the interface with the LEAST operational overhead? (Choose two.)
*A. Use Amazon SageMaker JumpStart to deploy the LLM.
B. Download the LLM as a .zip file. Deploy the LLM on a GPU-based Amazon EC2 instance.
*C. Create a frontend HTML interface that uses an Amazon API Gateway WebSocket API with AWS Lambda functions to handle the user interaction.
D. Use Amazon QuickSight to create a UI to handle the user interaction.
E. Use Amazon Lex to create a UI to handle the user interaction.
https://www.examtopics.com/discussions/amazon/view/315652-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to build a real-time analytics application that uses streaming data from social media. An ML engineer must implement a solution that ingests and transforms 5 GB of data each minute. The solution also must load the data into a data store that supports fast queries for the real-time analytics.\nWhich solution will meet these requirements?
A. Use Amazon EventBridge to ingest the social media data. Use AWS Glue to transform the data. Store the transformed data in Amazon ElastiCache (Memcached).
B. Use Amazon Simple Queue Service (Amazon SQS) to ingest the social media data. Use AWS Lambda to transform the data. Store the transformed data in Amazon S3.
C. Use Amazon Simple Notification Service (Amazon SNS) to ingest the social media data. Use Amazon EMR to transform the data. Store the transformed data in Amazon RDS.
*D. Use Amazon Kinesis Data Streams to ingest the social media data. Use Amazon Managed Service for Apache Flink to transform the data. Store the transformed data in Amazon DynamoDB.
https://www.examtopics.com/discussions/amazon/view/315654-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company stores training data as a .csv file in an Amazon S3 bucket. The company must encrypt the data and must control which applications have access to the encryption key.\nWhich solution will meet these requirements?
A. Create a new SSH access key. Use the AWS Encryption CLI with a reference to the new access key to encrypt the file.
B. Create a new API key by using the Amazon API Gateway CreateApiKey API operation. Use the AWS CLI with a reference to the new API key to encrypt the file.
C. Create a new IAM role. Attach a policy that allows the AWS Key Management Service (AWS KMS) GenerateDataKey action. Use the role to encrypt the file.
*D. Create a new AWS Key Management Service (AWS KMS) key. Use the AWS Encryption CLI with a reference to the new KMS key to encrypt the file.
https://www.examtopics.com/discussions/amazon/view/315655-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to perform feature engineering, aggregation, and data preparation. After the features are produced, the company must implement a solution on AWS to process and store the features.\nWhich solution will meet these requirements?
*A. Use Amazon SageMaker Feature Processing to process and ingest the data. Use SageMaker Feature Store to manage and store the features.
B. Use Amazon SageMaker Model Monitor to automatically ingest and transform the data. Create an Amazon S3 bucket to store the features in JSON format.
C. Use Amazon Managed Service for Apache Flink to transform the data and to ingest the data directly into Amazon SageMaker Feature Store. Use Feature Store to manage and store the features.
D. Use an Amazon SageMaker batch transform job to analyze, transform, and ingest the data. Create an Amazon DynamoDB table to store the features.
https://www.examtopics.com/discussions/amazon/view/315646-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing a new online application to gather information from customers. An ML engineer has developed a new ML model that will determine a score for each customer. The model will use the score to determine which product to display to the customer. The ML engineer needs to minimize response-time latency for the model.\nHow should the ML engineer deploy the application in Amazon SageMaker to meet these requirements?
A. Configure batch transform.
*B. Configure a real-time inference endpoint.
C. Configure a serverless inference endpoint.
D. Configure an asynchronous inference endpoint.
https://www.examtopics.com/discussions/amazon/view/315653-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon EMR. The company has a large dataset in Amazon S3 that needs to be ingested into Amazon SageMaker Feature Store. The dataset contains historical data and real-time streaming data.\nThe company must ensure that the Feature Store online store is updated with the most recent data as soon as the data becomes available. The company also must maintain a complete Feature Store offline store for batch processing.\nWhich solution will meet these requirements?
A. Use the PutRecord API in Feature Store Runtime to ingest all the data into the online store.
B. Use the PutRecord API in Feature Store Runtime to ingest all the data into the offline store.
*C. Use the Feature Store Spark connector to ingest the data as Spark DataFrames with the online store and offline store enabled.
D. Use the Feature Store Spark connector to ingest the data as Spark DataFrames with only the online store enabled.
https://www.examtopics.com/discussions/amazon/view/315651-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer wants an Amazon SageMaker notebook to automatically stop running after 1 hour of idle time.\nHow can the ML engineer accomplish this goal?
*A. Create a lifecycle configuration in SageMaker. Copy the auto-stop-idle script from GitHub to the Start Notebook section.
B. Create a lifecycle configuration in SageMaker. Copy the auto-stop-idle script from GitHub to the Create Notebook section.
C. Track the notebook's CPU metric by using Amazon CloudWatch Logs. Invoke an AWS Lambda function from CloudWatch Logs to shut down the notebook instance if CPU utilization becomes zero.
D. Track the notebook's memory metric by using Amazon CloudWatch Logs. Invoke an AWS Lambda function from CloudWatch Logs to shut down the notebook instance if memory utilization becomes zero.
https://www.examtopics.com/discussions/amazon/view/315664-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to provide services to help other businesses label images. The company wants its labeling specialists to complete human labeling tasks on AWS.\nHow should the company register the labeling specialists to receive tasks on AWS?
A. Use AWS Data Exchange.
*B. Create and use an internal workforce in Amazon SageMaker Ground Truth.
C. Create and use Amazon Mechanical Turk entities in an Amazon SageMaker human loop.
D. Use the Amazon Mechanical Turk website.
https://www.examtopics.com/discussions/amazon/view/315662-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to use Amazon SageMaker to host an ML model that runs on CPU for real-time predictions. The model will have intermittent traffic during business hours and will have periods of no traffic after business hours. The company needs a solution that will serve inference requests in the most cost-effective manner.\nWhich hosting option will meet these requirements?
A. Deploy the model to a SageMaker real-time endpoint. Add a schedule-based auto scaling policy to handle traffic surges during business hours.
*B. Deploy the model to a SageMaker Serverless Inference endpoint. Configure increased provisioned concurrency during business hours.
C. Deploy the model to a SageMaker Asynchronous Inference endpoint. Configure an auto scaling policy that scales in to zero outside business hours.
D. Deploy the model to a SageMaker real-time endpoint. Create a scheduled AWS Lambda function that activates the endpoint during business hours only.
https://www.examtopics.com/discussions/amazon/view/315663-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to train a supervised deep learning model. The available dataset is a large number of unlabeled images that only employees should access. The ML engineer needs to implement a solution that labels the dataset with the highest possible accuracy.\nWhich combination of steps should the ML engineer take to meet these requirements? (Choose two.)
A. Use Amazon Rekognition to automatically label the dataset.
B. Train the deep learning model directly on the raw data. Let the model infer the labels by itself.
*C. Use Amazon SageMaker Ground Truth to create an annotation job that specifies the labeling task and requirements.
*D. Set up workforce teams to access a private workforce to run and review the annotation job created by Amazon SageMaker Ground Truth.
E. Use Amazon Mechanical Turk to complete the annotation job created by Amazon SageMaker Ground Truth.
https://www.examtopics.com/discussions/amazon/view/315666-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using an Amazon S3 bucket to collect data that will be used for ML workflows. The company needs to use AWS Glue DataBrew to clean and normalize the data.\nWhich solution will meet these requirements?
A. Create a DataBrew dataset by using the S3 path. Clean and normalize the data by using a DataBrew profile job.
*B. Create a DataBrew dataset by using the S3 path. Clean and normalize the data by using a DataBrew recipe job.
C. Create a DataBrew dataset by using a Java Database Connectivity (JDBC) driver to connect to the S3 bucket. Clean and normalize the data by using a DataBrew profile job.
D. Create a DataBrew dataset by using a Java Database Connectivity (JDBC) driver to connect to the S3 bucket. Clean and normalize the data by using a DataBrew recipe job.
https://www.examtopics.com/discussions/amazon/view/315661-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing a new ML model that uses the XGBoost algorithm. The company will train the model on data that is stored in an Amazon S3 bucket. The data is in a nested JSON format.\nAn ML engineer needs to convert the JSON files into a tabular format.\nWhich solution will meet this requirement with the LEAST operational overhead?
*A. Create an AWS Glue PySpark job that uses the Relationalize transform to convert the files.
B. Write custom Scala code to convert the files. Use Amazon EMR Serverless to run the Scala code.
C. Create an AWS Lambda function that uses a Python runtime and invokes the reduce() function to convert the files. Invoke the Lambda function.
D. Create an Amazon Athena database that is based on the JSON files. Use the Athena flatten function to convert the data.
https://www.examtopics.com/discussions/amazon/view/315671-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A medical company ingests streams of data from devices that monitor patients’ vital signs. The company uses Amazon SageMaker and plans to prepare ML models to predict adverse events for patients. The dataset is large with thousands of features.\nAn ML engineer needs to run several hundred training iterations with different sets of features, different algorithms, and many potential parameters. The ML engineer must implement a solution to log the characteristics and results of each training iteration.\nWhich solution will meet these requirements with the LEAST implementation effort?
A. Use Amazon CloudWatch to create custom metrics for the characteristics of each iteration.
B. Write the characteristics of each iteration to logs in Amazon S3. Use AWS Glue and Amazon Athena to search the logs.
C. Use the SageMaker Model Registry to track the characteristics and results of each iteration.
*D. Use SageMaker Experiments to track the characteristics and results of each iteration.
https://www.examtopics.com/discussions/amazon/view/315675-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to deploy a trained model that is based on a genetic algorithm. The algorithm solves a complex problem and can take several minutes to generate predictions.\nWhen the model is deployed, the model needs to access large amounts of data to process requests. The requests can involve as much as 100 MB of data.\nWhich deployment solution will meet these requirements with the LEAST operational overhead?
A. Deploy the model to Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer.
B. Deploy the model to an Amazon SageMaker real-time endpoint.
*C. Deploy the model to an Amazon SageMaker Asynchronous Inference endpoint.
D. Package the model as a container. Deploy the model to Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 instances.
https://www.examtopics.com/discussions/amazon/view/315667-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is planning to use an Amazon SageMaker prebuilt algorithm to create a recommendation model. The algorithm must be able to make predictions on high-dimensional sparse data.\nWhich SageMaker algorithm should the company choose for the recommendation model?
A. K-nearest neighbors (k-NN)
*B. Factorization Machines
C. Principal component analysis (PCA)
D. Sequence-to-Sequence (seq2seq)
https://www.examtopics.com/discussions/amazon/view/315660-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has several teams that have developed separate prediction models on their own laptops. The teams developed the models by using Python with scikit-learn and TensorFlow frameworks.\nThe company must rebuild the models and must integrate the models into an ML infrastructure that the company manages by using Amazon SageMaker. The company also must incorporate the models into a model registry.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Export the models from the laptops to an Amazon S3 bucket. Use an Amazon API Gateway REST API and AWS Lambda functions with SageMaker endpoints to access the models. Register the models in the SageMaker Model Registry.
B. Import the models into the SageMaker Model Registry. Use SageMaker to run the imported models.
C. Use code from the laptops to create containers for the models. Use the bring your own container (BYOC) functionality of SageMaker to import and use the models. Register the models in the SageMaker Model Registry.
*D. Import the Python-based models into SageMaker. Rebuild the scikit-learn and TensorFlow models in SageMaker. Register all the models in the SageMaker Model Registry.
https://www.examtopics.com/discussions/amazon/view/315669-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is training a large language model (LLM) by using on-premises infrastructure. A live conversational engine uses the LLM to help customers find real-time insights in credit card data.\nAn ML engineer must implement a solution to train and deploy the LLM on Amazon SageMaker.\nWhich solution will meet these requirements?
*A. Use SageMaker Training Compiler to train the LLM. Deploy the LLM by using SageMaker real-time inference.
B. Use SageMaker with deep learning containers for large model inference to train the LLM. Deploy the LLM by using SageMaker real-time inference.
C. Use SageMaker Notebook Jobs to train the LLM. Deploy the LLM by using SageMaker Asynchronous Inference.
D. Use SageMaker Studio to train the LLM. Deploy the LLM by using SageMaker batch transform.
https://www.examtopics.com/discussions/amazon/view/315674-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has an existing Amazon SageMaker model (v1) on a production endpoint. The company develops a new model version (v2) and needs to test v2 in production before substituting v2 for v1.\nThe company needs to implement a solution to minimize the risk of v2 generating incorrect output in production. The solution must prevent any disruption of production traffic during the change to v2.\nWhich solution will meet these requirements?
A. Create a second production variant for v2. Assign 1% of the traffic to v2 and 99% of the traffic to v1. Collect all the output of v2 in an Amazon S3 bucket. If v2 performs as expected, switch all the traffic to v2.
B. Create a second production variant for v2. Assign 10% of the traffic to v2 and 90% of the traffic to v1. Collect all the output of v2 in an Amazon S3 bucket. If v2 performs as expected, switch all the traffic to v2.
C. Deploy v2 to a new endpoint. Turn on data capturing for the production endpoint. Write a script to pass 100% of input data to v2. If v2 performs as expected, deactivate the v1 endpoint and direct the traffic to v2.
*D. Deploy v2 into a shadow variant that samples 100% of the inference requests. Collect all the output in an Amazon S3 bucket. If v2 performs as expected, promote v2 to production.
https://www.examtopics.com/discussions/amazon/view/315670-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is building an Amazon SageMaker AI pipeline for an ML model. The pipeline uses distributed processing and training.\nAn ML engineer needs to encrypt network communication between instances that run distributed jobs. The ML engineer configures the distributed jobs to run in a private VPC.\nWhat should the ML engineer do to meet the encryption requirement?
A. Enable network isolation.
B. Configure traffic encryption by using security groups.
*C. Enable inter-container traffic encryption.
D. Enable VPC flow logs.
https://www.examtopics.com/discussions/amazon/view/382271-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has significantly increased the amount of data that is stored as .csv files in an Amazon S3 bucket. Data transformation scripts and queries are now taking much longer than they used to take.\nAn ML engineer must implement a solution to optimize the data for query performance.\nWhich solution will meet this requirement with the LEAST operational overhead?
A. Configure an AWS Lambda function to split the .csv files into smaller objects in the S3 bucket.
B. Configure an AWS Glue job to drop columns that have string type values and to save the results to the S3 bucket.
*C. Configure an AWS Glue extract, transform, and load (ETL) job to convert the .csv files to Apache Parquet format.
D. Configure an Amazon EMR cluster to process the data that is in the S3 bucket.
https://www.examtopics.com/discussions/amazon/view/382292-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is analyzing a classification dataset before training a model in Amazon SageMarker AI. The ML engineer suspects that the dataset has a significant imbalance between class labels that could lead to biased model predictions. To confirm class imbalance, the ML engineer needs to select an appropriate pre-training bias metric.\nWhich metric will meet this requirement?
A. Mean square error (MSE)
*B. Difference in proportions of labels (DPL)
C. Silhouette score
D. Structural similarity index measure (SSIM)
https://www.examtopics.com/discussions/amazon/view/382276-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer uses one ML framework to train multiple ML models. The ML engineer needs to optimize the inference costs and host the models on Amazon SageMaker AI.\nWhich solution will meet these requirements MOST cost-effectively?
A. Create a multi-container inference endpoint for direct invocation.
*B. Create a multi-model inference endpoint for all the models.
C. Create a multi-container inference endpoint for sequential invocation.
D. Create multiple single-model inference endpoint for each model.
https://www.examtopics.com/discussions/amazon/view/382264-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using an ML model to classify motion in videos. The data is stored in MP4 format in Amazon S3. When the company created the model, the company needed 4 months to label all the video frames.\nThe company needs to retrain the model with an existing training workflow in Amazon SageMaker AI. An ML engineer must implement a solution that decreases the labeling time.\nWhich solution will meet these requirements?
A. Use SageMaker Ground Truth to annotate the video frames.
B. Use SageMaker JumpStart to use pre-trained computer vision models to develop a labeling model.
C. Use SageMaker Data Wrangler to create a data workflow. Use the workflow to optimize the labeling process.
*D. Use the labeling interface of Amazon Augmented AI (Amazon A2I) with Amazon Rekognition to label the video frames.
https://www.examtopics.com/discussions/amazon/view/382281-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A logistics company has installed in-vehicle cameras for basic monitoring of its drivers. The company wants to improve driver safety by identifying distractions that could lead to accidents.\nWhich solution will meet this requirement with the LEAST operational effort?
*A. Use Amazon Rekognition eye gaze direction detection to monitor driver behavior and identify distractions.
B. Use Amazon SageMaker AI to customize an AI model to monitor driver behavior and identify distractions.
C. Integrate a third-party driver monitoring system with Amazon Rekognition to monitor driver behavior and identify distractions
D. Use Amazon Comprehend to analyze text-based driver feedback and identify distractions.
https://www.examtopics.com/discussions/amazon/view/382288-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has trained an ML model that is packaged in a container. The company will integrate the model with an existing Python web application. The company needs to host the model on AWS by using Kubernetes.\nThe company does not want to manage the control plane and must provision the resources in a repeatable manner. The infrastructure must be provisioned by using Python.\nWhich solution will meet these requirements?
A. Use AWS CloudFormation to provision Amazon EC2 instances in multiple Availability Zones. Set up a Kubernetes cluster. Host the model container on the Kubernetes cluster.
B. Use the AWS CLI to provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Store the image in an Amazon Elastic Container Registry (Amazon ECR) repository. Host the model container on the EKS cluster.
*C. Use the AWS Cloud Development Kit (AWS CDK) to provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Store the image in an Amazon Elastic Container Registry (Amazon ECR) repository. Host the model container on the EKS cluster.
D. Use AWS CloudFormation to provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Store the image in an Amazon Elastic Container Registry (Amazon ECR) repository. Host the model container on the EKS cluster.
https://www.examtopics.com/discussions/amazon/view/382306-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is developing a linear regression ML model. The model shows high accuracy on the training dataset but performs poorly on unseen new data.\nWhich action should the ML engineer take to address this issue?
A. Increase the complexity of the model to capture more patterns in the training data. Use Amazon SageMaker Debugger to monitor for convergence issues.
*B. Apply ML techniques such as cross-validation and regularization. Use Amazon SageMaker Experiments to track and compare different model versions and their performance metrics.
C. Directly deploy the model into production. Use Amazon SageMaker Clarify to interpret model outputs on new data. Adjust the model based on these insights.
D. Increase the size of the training dataset without adjusting the size of the model. Retrain the model on the new data. Generate a confusion matrix to analyze the results.
https://www.examtopics.com/discussions/amazon/view/382322-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is training a new ML model to replace a model that is deployed on an Amazon SageMaker AI real-time endpoint. An ML engineer needs to determine the latency and the accuracy of the new model. The ML engineer must evaluate the new model in a production scenario without affecting the users of the existing model.\nWhich solution will meet these requirements?
A. Perform a blue/green deployment with linear traffic shifting.
B. Perform a blue/green deployment with canary traffic shifting.
C. Perform a rolling deployment with a rolling batch size of 50% of the current fleet.
*D. Perform shadow testing with a traffic sampling percentage of 100%.
https://www.examtopics.com/discussions/amazon/view/382267-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer wants to use, prepare, and load data from Amazon S3 for analytics. The ML engineer must run an extract, transform, and load (ETL) job to discover the schema of the data and to store the metadata.\nWhich solution will meet these requirements with the LEAST manual effort?
*A. Use AWS Glue to run the ETL job. Use the job to discover the schema and to store the associated metadata in the AWS Glue Data Catalog.
B. Create an Amazon SageMaker Data Wrangler flow to run the ETL job. Use the job to discover the schema and to store the associated metadata in an S3 bucket.
C. Create an ETL pipeline by using Amazon Athena integrated with AWs Step Functions. Use the pipeline to run the ETL job to discover the schema and to store the associated metadata in an S3 bucket.
D. Launch an Amazon EC2 instance that includes the scikit-learn library to run the ETL job. Use the job to discover the schema and to store the associated metadata in Amazon Redshift.
https://www.examtopics.com/discussions/amazon/view/382256-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is building an ML pipeline. The pipeline must process a dataset in two ways by using Amazon Athena. The pipeline must use batch processing to perform large-scale data transformations and for model training. The pipeline must also use near real-time processing to perform low-latency queries for inference and analytics.\nWhich file format will provide the LEAST latency for both types of processing?
A. CSV
*B. Apache Parquet
C. Nested JSON
D. Deserialized JSON
https://www.examtopics.com/discussions/amazon/view/382274-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses an Amazon SageMaker AI ML model to make real-time inferences. The company has configured auto scaling for the Amazon EC2 instances that SageMaker AI uses for the inferences.\nDuring times of peak usage, new instances launch before existing instances are fully ready. As a result, the model experiences inefficiencies and delays.\nWhich solution will optimize the scaling process without affecting response times?
A. Change to a multi-model endpoint configuration in SageMaker AI.
B. Integrate Amazon API Gateway and AWS Lambda to manage invocations of the SageMaker AI inference endpoint.
C. Decrease the cooldown period for scale-in activities. Increase the maximum number of instances.
*D. Increase the cooldown period after scale-out activities.
https://www.examtopics.com/discussions/amazon/view/382263-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company deployed an Amazon SageMaker AI ML model to an endpoint by calling the CreateModel API operation. The network that was established with the API call includes two private subnets and one security group.\nThe model must download data from an Amazon S3 bucket and must upload data to the S3 bucket. The traffic to the S3 bucket must not travel across the internet.\nWhich solution will meet these requirements?
A. Create a NAT gateway. Configure the security group to allow outbound connections. Configure route tables to redirect any traffic to the S3 bucket through the NAT gateway.
*B. Create a gateway VPC endpoint. Configure an endpoint policy that restricts access to the S3 bucket. Configure route tables to redirect any traffic to the S3 bucket through the endpoint.
C. Create an interface VPC endpoint. Verify that the security group allows only inbound connections. Configure route tables to redirect any traffic to the S3 bucket through the endpoint.
D. Create a Gateway Load Balancer VPC endpoint. Configure an IAM policy that restricts access to the S3 bucket. Configure route tables to redirect any traffic to the S3 bucket through the endpoint.
https://www.examtopics.com/discussions/amazon/view/382290-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing a new ML model to rank customers in order of their potential to pay back loans. The company needs to use an Amazon SageMaker AI built-in algorithm.\nWhich algorithm should the company use to meet these requirements?
*A. XGBoost
B. K-means clustering
C. Principal component analysis (PCA)
D. Neural Topic Model (NTM)
https://www.examtopics.com/discussions/amazon/view/382280-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is setting up an Amazon SageMaker AI pipeline for an ML model. The pipeline must automatically initiate a re-training job if any data drift is detected.\nHow should the ML engineer set up the pipeline to meet this requirement?
A. Use an AWS Glue crawler and an AWS Glue extract, transform and load (ETL) job to detect data drift. Use AWS Glue triggers to automate the re-training job.
B. Use Amazon Managed Service for Apache Flink to detect data drift. Use an AWS Lambda function to automate the re-training job.
*C. Use SageMaker Model Monitor to detect data drift. Use an AWS Lambda function to automate the re-training job.
D. Use Amazon QuickSight anomaly detection to detect data drift. Use an AWS Step Functions workflow to automate the re-training job.
https://www.examtopics.com/discussions/amazon/view/382279-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has developed a computer vision model. The company needs to deploy the model into production on Amazon SageMaker AI. The company has not hosted a model on SageMaker AI previously.\nAn ML engineer needs to implement a solution to track model versions. The solution also must provide recommendations about which Amazon EC2 instance types to use to host the model.\nWhich solution will meet these requirements?
A. Register the model in Amazon Elastic Container Registry (Amazon ECR). Use AWS Compute Optimizer for recommendations about instance types.
B. Register the model in the SageMaker Model Registry. Use SageMaker Autopilot for recommendations about instance types.
*C. Register the model in the SageMaker Model Registry. Use SageMaker Inference Recommender for recommendations about instance types.
D. Register the model in Amazon Elastic Container Registry (Amazon ECR). Use SageMaker Experiments for recommendations about instance types.
https://www.examtopics.com/discussions/amazon/view/382323-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon SageMaker AI to develop a credit risk assessment model. During model validation, the company finds that the model achieves 82% accuracy on the validation data. However, the model achieved 99% accuracy on the training data. The company needs to address the model accuracy issue before deployment.\nWhich solution will meet this requirement?
A. Add more dense layers to increase model complexity. Implement batch normalization. Use early stopping during training.
*B. Implement dropout layers. Use L1 or L2 regularization. Perform k-fold cross-validation.
C. Use principal component analysis (PCA) to reduce the feature dimensionality. Decrease model layers. Implement cross-entropy loss functions.
D. Augment the training dataset. Remove duplicate records from the training dataset. Implement stratified sampling.
https://www.examtopics.com/discussions/amazon/view/382305-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company collects customer data every day. The company stores the data as compressed files in an Amazon S3 bucket that is partitioned by date. Every month, analysts download the data, process the data to check the data quality, and then upload the data to Amazon QuickSight dashboards.\nAn ML engineer needs to implement a solution to automatically check the data quality before the data is sent to QuickSight.\nWhich solution will meet these requirements with the LEAST operational overhead?
*A. Run an AWS Glue crawler every month to update the AWS Glue Data Catalog. Use AWS Glue Data Quality rules to check the data quality.
B. Use an AWS Glue trigger to run an AWS Glue crawler every month to update the AWS Glue Data Catalog. Create an AWS Glue job that loads the data into a PySpark DataFrame. Configure the job to apply custom functions and to evaluate the data quality.
C. Run Python scripts on an AWS Lambda function every month to evaluate data quality. Configure the S3 bucket to invoke the Lambda function when objects are added to the S3 bucket.
D. Configure the S3 bucket to send event notifications to an Amazon Simple Queue Service (Amazon SQS) queue when objects are uploaded. Use Amazon CloudWatch insights every month for the SQS queue to evaluate the data quality.
https://www.examtopics.com/discussions/amazon/view/382254-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has an ML model in Amazon SageMaker AI. An ML engineer needs to implement a monitoring solution to automatically detect changes in the input data distribution of model features.\nWhich solution will meet this requirement with the LEAST operational overhead?
*A. Configure SageMaker Model Monitor. Establish a data quality baseline. Ensure that the emit_metrics option is enabled in the baseline constraints file. Configure an Amazon CloudWatch alarm to notify the company about changes in specific metrics that are related to data quality.
B. Configure SageMaker Model Monitor. Establish a model quality baseline. Ensure that the comparison_method option is set to Robust in the baseline constraints file. Configure an Amazon CloudWatch alarm to notify the company about changes in model quality metrics.
C. Use SageMaker Debugger with custom rules to track shifts in feature distributions. Configure Amazon CloudWatch alarms to notify the company when the rules detect significant changes.
D. Use Amazon CloudWatch to directly observe the SageMaker AI endpoint’s performance metrics. Manually analyze the CloudWatch logs for indicators of data drift or shifts in feature distribution.
https://www.examtopics.com/discussions/amazon/view/382262-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon SageMaker AI to deploy a new recommendation model for its ecommerce website. The model must use data from all client website interactions as input.\nTraffic is variable throughout the day. The company needs to create an inference endpoint for the model.\nWhich type of inference endpoint will meet these requirements MOST cost-effectively?
A. Batch transform inference endpoint
B. Asynchronous inference endpoint
C. Real-time inference endpoint
*D. Serverless inference endpoint
https://www.examtopics.com/discussions/amazon/view/382294-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company runs an Amazon SageMaker AI domain in a public subnet of a newly created VPC. The network is configured properly, and ML engineers can access the SageMaker AI domain.\nRecently, the company discovered suspicious traffic to the domain from a specific IP address. The company needs to block traffic from the specific IP address.\nWhich update to the network configuration will meet this requirement?
A. Create a security group inbound rule to deny traffic from the specific IP address. Assign the security group to the domain.
*B. Create a network ACL inbound rule to deny traffic from the specific IP address. Assign the rule to the default network ACL for the subnet where the domain is located.
C. Create a shadow variant for the domain. Configure SageMaker Inference Recommender to send traffic from the specific IP address to the shadow endpoint.
D. Create a VPC route table to deny inbound traffic from the specific IP address. Assign the route table to the domain.
https://www.examtopics.com/discussions/amazon/view/382258-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer wants to use Amazon SageMaker AI to prepare data for training. During exploratory data analysis, the ML engineer notices that several categorical features are missing values.\nHow can the ML engineer use SageMaker AI to solve this problem?
A. Use SageMaker Clarify to impute categorical features with the mean value.
B. Use SageMaker Clarity to impute categorical features with the mode value.
C. Use SageMaker Data Wrangler to impute categorical features with the mean value.
*D. Use SageMaker Data Wrangler to impute categorical features with the mode value.
https://www.examtopics.com/discussions/amazon/view/382260-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company stores user clickstream data in an Amazon S3 bucket in AWS Account A. The company needs to use the data to train an ML model in Amazon SageMaker AI in AWS Account B. The training will take 10 days.\nThe company needs to use only private IP addresses in the training. The company also must make sure that no training metadata is shared with AWS.\nWhich solution will meet these requirements?
A. Set up VPC peering between Account A and Account B. Contact AWS by email to opt out of metadata collection.
*B. Set up a VPC endpoint for the S3 bucket. Set the SageMaker AI OPT_OUT_TRACKING environment variable to 1 in the training job.
C. Configure a security group policy that is assigned to the S3 bucket in Account A to allow access from only Account B. Create AI services opt-out policies.
D. Generate presigned URLs with expiration times for the objects that are stored in the S3 bucket. Access the data by using the presigned URLs. Set the SageMaker AI OPT_OUT_TRACKING environment variable to 1 in the training job.
https://www.examtopics.com/discussions/amazon/view/382309-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A music streaming company constantly streams song ratings from an application to an Amazon S3 bucket. The company wants to use the ratings as an input for training and inference of an Amazon SageMaker AI model.\nThe company has an AWS Glue Data Catalog that is configured with the S3 bucket as the source. An ML engineer needs to implement a solution to create a repository for this data. The solution must ensure that the data stays synchronized during batch training and real-time inference.\nWhich solution will meet these requirements?
*A. Ingest data into SageMaker Feature Store from the S3 bucket. Apply tags and indexes.
B. Use Amazon Athena. Create tables by using CREATE TABLE AS SELECT (CTAS) queries to group data.
C. Use AWS Lake Formation. Apply tag-based control on the data.
D. Use the Generate Data Insights function in SageMaker Data Wrangler.
https://www.examtopics.com/discussions/amazon/view/382321-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A hospital is using an ML model to validate x-ray results. The hospital runs a nightly batch inference job. The hospital needs to produce a daily report about model data quality and model performance.\nWhich solution will meet these requirements?
*A. Schedule a monitoring job in Amazon SageMaker Model Monitor. Generate the monitoring results for the model and data.
B. Create an Amazon CloudWatch dashboard that includes the metrics for processing steps in the nightly batch inference job. Compare the baseline resource metrics. Share the dashboard link.
C. Use AWS Glue DataBrew to create a custom recipe job that uses the Numerical Statistics data quality check for the model file. Generate the results.
D. Create a SageMaker AI pipeline that includes a QualityCheck step to run monitoring jobs. Generate the monitoring results for the model and the data.
https://www.examtopics.com/discussions/amazon/view/382259-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to ingest data from data sources into Amazon SageMaker Data Wrangler. The data sources are Amazon S3, Amazon Redshift, and Snowflake. The ingested data must always be up to date with the latest changes in the source systems.\nWhich solution will meet these requirements?
A. Use direct connections to import data from the data sources into Data Wrangler.
*B. Use cataloged connections to import data from the data sources into Data Wrangler.
C. Use AWS Glue to extract data from the data sources. Use AWS Glue also to import the data directly into Data Wrangler.
D. Use AWS Lambda to extract data from the data sources. Use Lambda also to import the data directly into Data Wrangler.
https://www.examtopics.com/discussions/amazon/view/382286-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is using Amazon SageMaker Canvas to build a custom ML model from an imported dataset. The ML engineer wants the model to make continuous numeric predictions based on 10 years of data.\nWhich metric should the ML engineer use to evaluate the model’s performance?
A. Accuracy
B. InferenceLatency
C. Area Under the ROC Curve (AUC)
*D. Root mean square error (RMSE)
https://www.examtopics.com/discussions/amazon/view/382304-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company has built, trained, and tuned two new ML models:\n• Model A detects if a transaction is fraudulent based on the IP address, location, and user credentials. This model will be accessed every time a transaction occurs.\n• Model B forecasts sales totals for the next month based on historical sales data. This model will be accessed one time each month.\nThe company must deploy both models to production by using Amazon SageMaker AI.\nWhich hosting solution for the models should the company use to meet these requirements?
A. Host both models in one container behind one real-time endpoint.
B. Host Model A with an asynchronous endpoint. Host Model B with a real-time endpoint.
*C. Host Model A with a real-time endpoint. Use batch transform for Model B.
D. Use batch transform for Model A. Host Model B with an asynchronous endpoint.
https://www.examtopics.com/discussions/amazon/view/382313-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A bank needs to use Amazon SageMaker AI to create an ML model to determine which customers qualify for a new product. The bank must use algorithms that SageMaker AI directly supports. The model must be explainable to the bank’s regulators.\nWhich modeling approach will meet these requirements?
A. Train the model by using the Object2Vec algorithm.
*B. Train the model by using the linear learner algorithm.
C. Train a neural network.
D. Train the model by using the k-means algorithm.
https://www.examtopics.com/discussions/amazon/view/382300-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is preparing data to train a new ML model on Amazon SageMaker AI. The data has not been used before for ML training. The data includes duplicates and is missing some values.\nThe company needs to increase the data quality and detect any statistical bias in the data.\nWhich solution will meet these requirements?
A. Use SageMaker Clarify to create data quality rules. Use SageMaker Model Monitor to detect bias.
*B. Use SageMaker Data Wrangler to create data quality rules. Use SageMaker Clarify to detect bias.
C. Use SageMaker Debugger to create data quality rules. Use SageMaker Model Monitor to detect bias.
D. Use SageMaker Model Monitor to create data quality rules. Use SageMaker Clarify to detect bias.
https://www.examtopics.com/discussions/amazon/view/382293-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is building a model to predict house and apartment prices. The model uses three features: Square Meters, Price, and Age of Building. The dataset has 10,000 data rows. The data includes data points for one large mansion and one extremely small apartment.\nThe ML engineer must perform preprocessing on the dataset to ensure that the model produces accurate predictions for the typical house or apartment.\nWhich solution will meet these requirements?
*A. Remove the outliers and perform a log transformation on the Square Meters variable.
B. Keep the outliers and perform normalization on the Square Meters variable.
C. Remove the outliers and perform one-hot encoding on the Square Meters variable.
D. Keep the outliers and perform one-hot encoding on the Square Meters variable.
https://www.examtopics.com/discussions/amazon/view/382303-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing an ML model by using Amazon SageMaker AI. The company must monitor bias in the model and must display the results on a dashboard. An ML engineer creates a bias monitoring job.\nHow should the ML engineer capture bias metrics to display on the dashboard?
A. Capture AWS CloudTrail metrics from SageMaker Clarify.
*B. Capture Amazon CloudWatch metrics from SageMaker Clarify.
C. Capture SageMaker Model Monitor metrics from Amazon EventBridge.
D. Capture SageMaker Model Monitor metrics from Amazon Simple Notification Service (Amazon SNS).
https://www.examtopics.com/discussions/amazon/view/382282-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using an Amazon SageMaker AI ML model to predict traffic accidents that potholes cause. An ML engineer has configured SageMaker Model Monitor to run as part of a SageMaker AI pipeline. In the MonitoringExecution output, the ML engineer observes several baseline_drift_check violations that are failing the pipeline.\nWhat should the ML engineer do to resolve this issue?
A. Retrain the model by using a new SageMaker AI training job. Check for errors by using SageMaker Debugger.
B. Retrain the model with new training data. Reuse the original baseline in Model Monitor.
*C. Retrain the model with new training data. Use the new baseline in Model Monitor.
D. Rerun the SageMaker AI pipeline after enabling the emit_metrics option in the baseline constraints file.
https://www.examtopics.com/discussions/amazon/view/382315-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses ML models to predict whether transactions are fraudulent. The company needs to identify as many fraudulent transactions as possible.\nWhich evaluation metric should the company use to evaluate the models to meet this requirement?
A. F1 score
B. Area Under the ROC Curve (AUC)
C. Precision
*D. Recall
https://www.examtopics.com/discussions/amazon/view/382319-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A recommendation model uses ML and calls an Amazon SageMaker AI endpoint to get recommendations. An ML engineer must ensure that the model stays available during an expected increase in user traffic.\nWhich solution will meet these requirements?
*A. Configure auto scaling on the SageMaker AI endpoint.
B. Create a new SageMaker AI endpoint. Deploy the model to the new endpoint.
C. Use SageMaker Neo to optimize the model for inference.
D. Attach an Auto Scaling group to the SageMaker AI endpoint.
https://www.examtopics.com/discussions/amazon/view/382287-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer has trained an ML model by using Amazon SageMaker AI. The ML engineer determines that the model is overfitting and that the training data contains unnecessary features. The ML engineer must reduce the overfitting and the impact of the unnecessary features.\nWhich solution will meet these requirements?
A. Increase the number of training iterations. Retrain the model.
*B. Apply L1 regularization to the training data. Retrain the model.
C. Decrease the number of training iterations. Retrain the model.
D. Use SageMaker Debugger to apply L1 regularization to the running model.
https://www.examtopics.com/discussions/amazon/view/382278-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer wants to use Amazon SageMaker Data Wrangler to perform preprocessing on a dataset. The ML engineer wants to use the processed dataset to train a classification model. During preprocessing, the ML engineer notices that a text feature has a range of thousands of values that differ only by spelling errors. The ML engineer needs to apply an encoding method so that after preprocessing is complete, the text feature can be used to train the model.\nWhich solution will meet these requirements?
A. Perform ordinal encoding to represent categories of the feature.
*B. Perform similarity encoding to represent categories of the feature.
C. Perform one-hot encoding to represent categories of the feature.
D. Perform target encoding to represent categories of the feature.
https://www.examtopics.com/discussions/amazon/view/382314-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is training a text generation model on Amazon SageMaker AI. After several epochs, the loss function does not converge, and the model’s accuracy on the validation dataset starts to show oscillating results.\nThe ML engineer needs to ensure that the model achieves generalization.\nWhich solution will meet this requirement?
A. Increase the learning rate and decrease the mini-batch size.
B. Increase the learning rate as the number of epochs increases.
*C. Decrease the learning rate and increase the mini-batch size.
D. Decrease the learning rate and decrease the mini-batch size.
https://www.examtopics.com/discussions/amazon/view/382299-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses an NFS-based data store to store data for ML training. Linux-based systems access the data store.\nThe company needs a hybrid system to make the shared data store accessible to on-premises servers and Amazon SageMaker AI notebooks that will consume the data. File locking is required for the data producers.\nWhich AWS storage solution will meet these requirements?
A. Use an Amazon S3 bucket to store the data. Use Mountpoint for Amazon S3 to mount the S3 bucket to the on-premises servers and the SageMaker AI notebooks.
*B. Use an Amazon Elastic File System (Amazon EFS) file system to store the data. Mount the file system to the on-premises servers and the SageMaker AI notebooks.
C. Use an Amazon FSx for Lustre file system to store the data. Mount the file system to the on-premises servers and the SageMaker AI notebooks.
D. Use an Amazon Elastic Block Store (Amazon EBS) volume to store the data. Mount the volume to the on-premises servers and the SageMaker AI notebooks.
https://www.examtopics.com/discussions/amazon/view/382273-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to analyze a large dataset that is stored in Amazon S3 in Apache Parquet format. The company wants to use one-hot encoding for some of the columns.\nThe company needs a no-code solution to transform the data. The solution must store the transformed data back to the same S3 bucket for model training.\nWhich solution will meet these requirements?
*A. Configure an AWS Glue DataBrew project that connects to the data. Use the DataBrew interactive interface to create a recipe that performs the one-hot encoding transformation. Create a job to apply the transformation and to write the output back to an S3 bucket.
B. Configure an AWS Glue Data Catalog table that points to the data. Use Amazon Athena to write SQL commands to perform the one-hot encoding transformation. Configure Athena to write the query results back to an S3 bucket.
C. Configure an AWS Glue Data Catalog table that points to the data. Create an AWS Glue ETL interactive notebook. Use the notebook to perform the one-hot encoding transformation. Run the configured cells and write the results back to an S3 bucket.
D. Configure an Amazon Redshift cluster to access the data by using Redshift Spectrum. Use SQL commands to perform the one-hot encoding transformation within Amazon Redshift. Configure Amazon Redshift to write the results back to an S3 bucket.
https://www.examtopics.com/discussions/amazon/view/382266-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to migrate ML models from an on-premises environment to Amazon SageMaker AI. The models are based on the PyTorch algorithm. The company needs to reuse its existing custom scripts as much as possible on AWS.\nWhich feature of SageMaker AI should the company use to meet these requirements?
A. SageMaker AI built-in algorithms
B. SageMaker Canvas
C. SageMaker JumpStart
*D. SageMaker AI script mode
https://www.examtopics.com/discussions/amazon/view/382301-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses an Amazon QuickSight dashboard to track the sale prices of sneakers over time. The dashboard aggregates sale prices scraped from many retail websites. The company wants to determine which prices are unusually high outliers and to display the outliers visually.\nWhich solution will meet these requirements?
A. Use a vertical bar chart to visualize the outliers. Use a calculated field in QuickSight to take the square roots of the outlier prices to generate the chart. Configure a custom AWS Lambda function to scan the data for anomalies.
B. Use AWS Glue DataBrew to preprocess the data. Set the REMOVE_OUTLIERS operation to eliminate data rows that include unusually high prices. Invoke an AWS Lambda function to store the removed rows in Amazon DynamoDB.
*C. Use a vertical bar chart to visualize the outliers. Use a calculated field in QuickSight to square the outlier prices to generate the chart. Use QuickSight anomaly detection insights to determine which prices are unusually high.
D. Use a QuickSight filter to find the lowest 10 values for sneaker price. Assign a specific color to the 10 lowest values.
https://www.examtopics.com/discussions/amazon/view/382268-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is using Amazon QuickSight anomaly detection to detect very high or very low machine operating temperatures compared to normal. The ML engineer sets the Severity parameter to Low and above. The ML engineer sets the Direction parameter to All.\nWhat effect will the ML engineer observe in the anomaly detection results if the ML engineer changes the Direction parameter to Lower than expected?
A. Increased anomaly identification frequency and increased recall
*B. Decreased anomaly identification frequency and decreased recall
C. Increased anomaly identification frequency and decreased recall
D. Decreased anomaly identification frequency and increased recall
https://www.examtopics.com/discussions/amazon/view/382312-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company runs its ML workflows on an on-premises Kubernetes cluster. The ML workflows include ML services that perform training and inferences for ML models. Each ML service runs from its own standalone Docker image.\nThe company needs to perform a lift and shift from the on-premises Kubernetes cluster to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.\nWhich solution will meet this requirement with the LEAST operational overhead?
A. Redesign the ML services to be configured in Kubeflow. Deploy the new Kubeflow managed ML services to the EKS cluster.
*B. Upload the Docker images to an Amazon Elastic Container Registry (Amazon ECR) repository. Configure a deployment pipeline to deploy the images to the EKS cluster.
C. Migrate the training data to an Amazon Redshift cluster. Retrain the models from the migrated training data by using Amazon Redshift ML. Deploy the retrained models to the EKS cluster.
D. Configure an Amazon SageMaker AI notebook. Retrain the models with the same code. Deploy the retrained models to the EKS cluster.
https://www.examtopics.com/discussions/amazon/view/382297-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to run intensive model training jobs each month that can take 48 to 72 hours to run. The training jobs can be interrupted and resumed without major issues. The ML engineer has a fixed budget and needs to optimize computing resources.\nWhich solution will meet these requirements MOST cost-effectively?
A. Purchase Reserved Instances with a partial upfront payment.
B. Purchase On-Demand Instances with no commitment.
C. Purchase Amazon SageMaker AI Savings Plans.
*D. Purchase Spot Instances that use automated checkpoints.
https://www.examtopics.com/discussions/amazon/view/382285-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A retail company is creating an AI-powered assistant for customers. The company has a large body of documentation that the assistant needs to use for general inquiries. The company wants any responses about prices to use only documentation that is less than 1 month old.\nWhich solution will meet these requirements?
*A. Use Amazon Q Business to develop the responses. Configure a document attribute filter so that responses about prices use only the documents from the past month.
B. Use Amazon Q Business to develop the responses. Configure the source attribution citation so that responses about prices use only the documents from the past month.
C. Segment the documents into folders based on the month of document creation. Configure Amazon Q Developer to use only the documents from the past month to develop responses about prices.
D. Segment the documents into folders based on the month of document creation. Grant the assistant access to only the documents from the past month for responses about prices. Use Amazon Q Developer to develop the responses.
https://www.examtopics.com/discussions/amazon/view/382317-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A travel company wants to create an ML model to recommend the next airport destination for its users. The company has collected millions of data records about user location, recent search history on the company’s website, and 2,000 available airports. The data has several categorical features with a target column that is expected to have a high-dimensional sparse matrix.\nThe company needs to use Amazon SageMaker AI built-in algorithms for the model. An ML engineer converts the categorical features by using one-hot encoding.\nWhich algorithm should the ML engineer implement to meet these requirements?
A. Use the CatBoost algorithm to recommend the next airport destination.
B. Use the DeepAR forecasting algorithm to recommend the next airport destination.
*C. Use the Factorization Machines algorithm to recommend the next airport destination.
D. Use the k-means algorithm to cluster users into groups. Map each group to the next airport destination based on user search history.
https://www.examtopics.com/discussions/amazon/view/382269-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is configuring auto scaling for an inference component of a model that runs behind an Amazon SageMaker AI endpoint. The ML engineer configures SageMaker AI auto scaling with a target tracking scaling policy set to 100 invocations per model per minute. The SageMaker AI endpoint scales appropriately during normal business hours. However, the ML engineer notices that at the start of each business day, there are zero instances available to handle requests, which causes delays in processing.\nThe ML engineer must ensure that the SageMaker AI endpoint can handle incoming requests at the start of each business day.\nWhich solution will meet this requirement?
A. Reduce the SageMaker AI auto scaling cooldown period to the minimum supported value. Add an auto scaling lifecycle hook to scale the SageMaker AI instances.
B. Change the target metric to CPU utilization.
C. Modify the scaling policy target value to one.
*D. Apply a step scaling policy that scales based on an Amazon CloudWatch alarm. Apply a second CloudWatch alarm and scaling policy to scale the minimum number of instances from zero to one at the start of each business day.
https://www.examtopics.com/discussions/amazon/view/382307-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is using an Amazon SageMaker Studio notebook to train a neural network by creating an estimator. The estimator runs a Python training script that uses Distributed Data Parallel (DDP) on a single instance that has more than one GPU.\nThe ML engineer discovers that the training script is underutilizing GPU resources. The ML engineer must identify the point in the training script where resource utilization can be optimized.\nWhich solution will meet this requirement?
A. Use Amazon CloudWatch metrics to create a report that describes GPU utilization over time.
*B. Add SageMaker Profiler annotations to the training script. Run the script and generate a report from the results.
C. Use AWS CloudTrail to create a report that describes GPU utilization and GPU memory utilization over time.
D. Create a default monitor in Amazon SageMaker Model Monitor and suggest a baseline. Generate a report based on the constraints and statistics the monitor generates.
https://www.examtopics.com/discussions/amazon/view/382320-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer at an insurance company trains a regression model to predict the number of insurance policy sales each month. After training the model, the ML engineer uses Amazon SageMaker AI to deploy the model for inference. The ML engineer wants to monitor the model predictions to detect whether the production data distribution differs from the training data distribution when there are changes in customer behaviors.\nWhich solution will meet these requirements?
*A. Determine whether there is drift in the data quality.
B. Determine whether there is drift in the model quality.
C. Determine whether there is drift in the model bias.
D. Determine whether there is drift in the feature attribution.
https://www.examtopics.com/discussions/amazon/view/382270-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing an internal cost-estimation tool that uses an ML model in Amazon SageMaker AI. Users upload high-resolution images to the tool.\nThe model must process each image and predict the cost of the object in the image. The model also must notify the user when processing is complete.\nWhich solution will meet these requirements?
A. Store the images in an Amazon S3 bucket. Deploy the model on SageMaker AI. Use batch transform jobs for model inference. Use an Amazon Simple Queue Service (Amazon SQS) queue to notify users.
*B. Store the images in an Amazon S3 bucket. Deploy the model on SageMaker AI. Use an asynchronous inference strategy for model inference. Use an Amazon Simple Notification Service (Amazon SNS) topic to notify users.
C. Store the images in an Amazon Elastic File System (Amazon EFS) file system. Deploy the model on SageMaker AI. Use batch transform jobs for model inference. Use an Amazon Simple Queue Service (Amazon SQS) queue to notify users.
D. Store the images in an Amazon Elastic File System (Amazon EFS) file system. Deploy the model on SageMaker AI. Use an asynchronous inference strategy for model inference. Use an Amazon Simple Notification Service (Amazon SNS) topic to notify users.
https://www.examtopics.com/discussions/amazon/view/382310-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A healthcare company uses an Amazon SageMaker AI endpoint to host a model that predicts patient readmission risk to hospitals. The company wants to predict patient readmissions with high accuracy and is willing to tolerate false positives. The current model performance has degraded over the previous year.\nThe company trains and deploys a new model as a shadow variant for testing on live traffic from hospitals. The company monitors the performance of the new model for a month. During the month of testing, the shadow variant has a higher recall than the existing model but has a lower precision.\nWhat should the company do next?
*A. Promote the shadow variant to full production.
B. Extend the shadow testing period to capture more data. Monitor the new model to determine whether precision improves.
C. Use a blue/green deployment strategy to allocate a small percentage of traffic to the shadow variant to reduce model errors.
D. Disable the shadow variant and roll back to the main variant.
https://www.examtopics.com/discussions/amazon/view/382316-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An airline company uses an ML model to adjust ticket prices based on demand. The model runs on Amazon SageMaker real-time endpoints. During previous deployments, the model failed to scale quickly enough when website traffic increased, which caused delays in price adjustments.\nAn ML engineer needs to configure auto scaling for the SageMaker endpoints to respond rapidly to traffic changes. The solution must use target tracking scaling policies.\nWhich configuration will be MOST responsive to sudden changes in traffic?
A. Configure auto scaling based on the SageMaker AI InvocationsPerInstance standard metric. Configure 10-second interval resolution, and set the default 300-second scale-in cooldown period.
B. Configure auto scaling based on the SageMaker AI InvocationsPerInstance metric. Configure high-resolution 10-second intervals, and set a 600-second scale-in cooldown period.
C. Configure auto scaling based on the SageMaker InvocationsPerInstance standard metric. Configure 10-second intervals resolution, and set a 600-second scale-in cooldown period.
*D. Configure auto scaling based on the SageMaker InvocationsPerInstance metric. Configure high-resolution 10-second intervals, and set the default 300-second scale-in cooldown period.
https://www.examtopics.com/discussions/amazon/view/382308-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is collecting data to train a classification ML model by using Amazon SageMaker AI. The target column can have two possible values: Class A or Class B. The ML engineer wants to ensure that the number of samples for both Class A and Class B are balanced, without losing any existing training data. The ML engineer must test the balance of the training data.\nWhich solution will meet this requirement?
A. Use SageMaker Clarify to check for class imbalance (CI). If the value is equal to 0, then use random undersampling in SageMaker Data Wrangler to balance the classes.
*B. Use SageMaker Clarify to check for class imbalance (CI). If the value is greater than 0, then use synthetic minority oversampling technique (SMOTE) in SageMaker Data Wrangler to balance the classes.
C. Use SageMaker JumpStart to generate a class imbalance (CI) report. If the value is greater than 0, then use random undersampling in SageMaker Studio to balance the classes.
D. Use SageMaker JumpStart to generate a class imbalance (CI) report. If the value is equal to 0, then use synthetic minority oversampling technique (SMOTE) in SageMaker Studio to balance the classes.
https://www.examtopics.com/discussions/amazon/view/382275-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is building a logistic regression model to predict customer churn for subscription services. The ML engineer is using a dataset that contains two string variables: location and job_seniority_level. The location variable has 3 distinct values, and the job_seniority_level variable has over 10 distinct values.\nThe ML engineer must perform preprocessing on the variables.\nWhich solution will meet this requirement?
A. Apply tokenization to location. Apply ordinal encoding to job_seniority_level.
*B. Apply one-hot encoding to location. Apply ordinal encoding to job_seniority_level
C. Apply binning to location. Apply standard scaling to job_seniority_level.
D. Apply one-hot encoding to location. Apply standard scaling to job_seniority_level.
https://www.examtopics.com/discussions/amazon/view/382289-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company needs to deploy a custom-trained classification ML model on AWS. The model must make near real-time predictions with low latency and must handle variable request volumes.\nWhich solution will meet these requirements?
A. Create an Amazon SageMaker AI batch transform job to process inference requests in batches.
B. Use Amazon API Gateway to receive prediction requests. Use an Amazon S3 bucket to host and serve the model.
*C. Deploy an Amazon SageMaker AI endpoint. Configure auto scaling for the endpoint.
D. Launch AWS Deep Learning AMIs (DLAMI) on two Amazon EC2 instances. Run the instances behind an Application Load Balancer.
https://www.examtopics.com/discussions/amazon/view/382283-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company runs a neural network model and retrains the model when the performance degrades. The company uses a training job that uses Amazon SageMaker AI distributed data parallelism (DDP). The training job takes several hours to run.\nThe company wants to decrease the required time for the training job.\nWhich solution will meet this requirement?
A. Increase the number of epochs.
B. Increase the number of neurons in the hidden layers.
C. Increase the number of layers.
*D. Increase the number of instances.
https://www.examtopics.com/discussions/amazon/view/382272-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer decides to use Amazon SageMaker AI automated model tuning (AMT) for hyperparameter optimization (HPO). The ML engineer requires a tuning strategy that uses regression to slowly and sequentially select the next set of hyperparameters based on previous runs. The strategy must work across small hyperparameter ranges.\nWhich solution will meet these requirements?
A. Grid search
B. Random search
*C. Bayesian optimization
D. Hyperband
https://www.examtopics.com/discussions/amazon/view/383764-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is training an image classification model on Amazon SageMaker AI to differentiate between images of cats and dogs. The company is using images from a third-party source. The company needs to label the images of cats and dogs by adding the correct label to a metadata summary file that is attached to each image. The company wants to ensure that the dataset includes an equal number of images of cats and dogs.\nWhich solution will meet this requirement?
A. Use SageMaker Clarify to check for class imbalance (CI). If the value is close to 1, then the dataset is balanced.
*B. Use SageMaker Clarify to check for class imbalance (CI). If the value is close to 0, then the dataset is balanced.
C. Use SageMaker Data Wrangler to check for difference in proportions of labels (DPL). If the value is close to 1, then the dataset is balanced.
D. Use SageMaker Data Wrangler to check for difference in proportions of labels (DPL). If the value is close to -1, then the dataset is balanced.
https://www.examtopics.com/discussions/amazon/view/383765-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer at an entertainment company is refining an ML model to predict audience preferences. As the model learns from data, the ML engineer notices that the model’s performance peaks early and then begins to gradually decline. The ML engineer must prevent the performance degradation after initial success.\nWhich solution will meet this requirement?
A. Increase the number of layers.
*B. Implement early stopping.
C. Add more neurons to each layer to capture complex patterns.
D. Examine model bias and variance to understand performance issues.
https://www.examtopics.com/discussions/amazon/view/383766-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is tuning an image classification model that shows poor performance on one of two available classes during prediction. Analysis reveals that the images whose class the model performed poorly on represent an extremely small fraction of the whole training dataset.\nThe ML engineer must improve the model’s performance.\nWhich solution will meet this requirement?
A. Optimize for accuracy. Use image augmentation on the less common images to generate new samples.
*B. Optimize for F1 score. Use image augmentation on the less common images to generate new samples.
C. Optimize for accuracy. Use Synthetic Minority Oversampling Technique (SMOTE) on the less common images to generate new samples.
D. Optimize for F1 score. Use Synthetic Minority Oversampling Technique (SMOTE) on the less common images to generate new samples.
https://www.examtopics.com/discussions/amazon/view/383767-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A healthcare analytics company wants to segment patients into groups that have similar risk factors to develop personalized treatment plans. The company has a dataset that includes patient health records, medication history, and lifestyle changes. The company must identify the appropriate algorithm to determine the number of groups by using hyperparameters.\nWhich solution will meet these requirements?
A. Use the Amazon SageMaker AI XGBoost algorithm. Set max_depth to control tree complexity for risk groups.
*B. Use the Amazon SageMaker k-means clustering algorithm. Set k to specify the number of clusters.
C. Use the Amazon SageMaker AI DeepAR algorithm. Set epochs to determine the number of training iterations for risk groups.
D. Use the Amazon SageMaker AI Random Cut Forest (RCF) algorithm. Set a contamination hyperparameter for risk anomaly groups.
https://www.examtopics.com/discussions/amazon/view/383768-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer needs to develop an AI assistant by using Retrieval Augmented Generation (RAG) in Amazon Bedrock. The company stores a collection of PDF text files in an Amazon S3 bucket. The ML engineer must create an Amazon Bedrock knowledge base to process the PDF files and to store the processed files in a vector store.\nWhich solution will meet these requirements?
A. Use the latest version of Amazon Titan Text Premier to perform document embedding.
B. Use the latest version of Mistral 7B Instruct to perform instruction tuning.
C. Use the latest version of Anthropic Claude Sonnet to perform instruction tuning.
*D. Use Cohere Embed Multilingual to perform document embedding.
https://www.examtopics.com/discussions/amazon/view/383769-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company develops a recommendation model and hosts the model on an Amazon SageMaker AI endpoint. The model uses the SageMaker AI endpoint to perform near real-time inference to deliver personalized product recommendations to customers based on browsing history, purchase records, and in-app user interactions.\nAfter a major marketing campaign, the company observes a sharp drop in the model’s performance. The company needs a solution to proactively monitor, detect, and validate model performance before future marketing campaigns.\nWhich solution will meet these requirements?
*A. Use SageMaker Clarify to analyze changes in feature distribution. Configure SageMaker Model Monitor for near real-time input validation.
B. Use Amazon CloudWatch dashboards to monitor endpoint metrics. Use SageMaker Model Monitor to track feature attribution.
C. Use SageMaker Clarify for bias detection. Set up Amazon CloudWatch alarms to monitor model latency.
D. Use SageMaker Model Monitor to monitor constraints. Use Amazon CloudWatch Logs Insights to analyze error patterns.
https://www.examtopics.com/discussions/amazon/view/389700-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon SageMaker AI to create a classification model to categorize the company’s sales performance for each month of the previous 20 years on a scale from 1 to 5. The dataset includes fields for month, sales region, regional aggregate sales, and the number of stores in each sales region. The company notices that during two months of every year, the aggregate sales values are unexpectedly high. The company performs one-hot encoding on all non-numerical features in the training and validation datasets. The company uses the training dataset to train the classification model. When the company evaluates the model against the validation dataset, the results are less accurate than expected.\nThe company must improve the model’s accuracy on the validation dataset.\nWhich solution will meet this requirement?
A. Remove records that include outliers across all features.
*B. Use a stratified split on the month and sales region features.
C. Perform normalization on the aggregate sales feature.
D. Perform normalization on the aggregate sales feature for each sales region.
https://www.examtopics.com/discussions/amazon/view/383770-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is creating an ML model to identify defects in a product. The company has gathered a dataset and has stored the dataset in TIFF format in Amazon S3. The dataset contains 200 images in which the most common defects are visible. The dataset also contains 1,800 images in which there is no defect visible.\nAn ML engineer trains the model and notices poor performance in some classes. The ML engineer identifies a class imbalance problem in the dataset.\nWhat should the ML engineer do to solves this problem?
A. Use a few hundred images and Amazon Rekognition Custom Labels to train a new model.
B. Undersample the 200 images in which the most common defects are visible.
*C. Oversample the 200 images in which the most common defects are visible.
D. Use all 2,000 images and Amazon Rekognition Custom Labels to train a new model.
https://www.examtopics.com/discussions/amazon/view/384791-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer has developed a custom scikit-learn script to transform tabular data to train a regression model. The ML engineer wants to use Amazon SageMaker AI to prepare data and to train and evaluate the model.\nWhich solution will meet these requirements?
A. Create an AWS Lambda function to run the custom script. Load the processed data into SageMaker AI to train the model.
*B. Use the SKLearnProcessor class within the SageMaker Python SDK to run the custom script.
C. Apply the HuggingFaceProcessor class within the SageMaker Python SDK to run the custom script.
D. Use AWS Glue ETL custom recipes to perform data transformations. Load the processed data into SageMaker AI to train the model.
https://www.examtopics.com/discussions/amazon/view/383771-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing an application that reads animal descriptions from user prompts and generates images based on the information from the prompts. The application reads a message from an Amazon Simple Queue Service (Amazon SQS) queue. Then the application uses Amazon Titan Image Generator on Amazon Bedrock to generate an image based on the information in the message. Finally, the application removes the message from SQS queue.\nWhich IAM permissions should the company assign to the application’s IAM role? (Choose two.)
*A. Allow the bedrock:InvokeModel action for the Amazon Titan Image Generator resource.
B. Allow the bedrock:Get* action for the Amazon Titan Image Generator resource.
*C. Allow the sqs:ReceiveMessage action and the sqs:DeleteMessage action for the SQS queue resource.
D. Allow the sqs:GetQueueAttributes action and the sqs:DeleteMessage action for the SQS queue resource.
E. Allow the sagemaker:PutRecord* action for the Amazon Titan Image Generator resource.
https://www.examtopics.com/discussions/amazon/view/389698-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is training an ML model to identify people’s health risk based on 20 features and 1 target. The target class has two values:\n• Likely to have health risk (positive class)\n• Unlikely to have health risk (negative class)\nThe age range of people in the dataset is 30 years old to 60 years old. Age is one of the features.\nThe ML engineer analyzes the features. For the positive class, the difference in proportions of labels (DPL) value is (+0.9) for the age range of 40 to 45 compared with all other age ranges.\nWhat should the ML engineer do to correct this data imbalance?
A. Oversample the positive class for the age range of 40 to 45.
*B. Undersample the positive class for the age range of 40 to 45.
C. Undersample the positive class for all age ranges except 40 to 45.
D. Oversample the negative class for all age ranges except 40 to 45.
https://www.examtopics.com/discussions/amazon/view/315477-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ecommerce company trains an ML model to forecast demand for near real-time inventory management based on historical customer activity. The company successfully deploys the trained model to a production Amazon SageMaker AI endpoint. However, the company notices that the model’s forecast performance degrades over time. The company needs a long-term and automated solution to mitigate the performance degradation.\nWhich solution will meet these requirements?
A. Use Amazon SageMaker Debugger to automatically send alerts when model performance anomalies are detected.
B. Use AWS X-Ray to monitor the performance of the SageMaker AI endpoint and the incoming requests to inform model re-training.
C. Use Amazon SageMaker Ground Truth to curate a high-quality dataset. Use the dataset to re-train the model.
*D. Use Amazon SageMaker Clarify to monitor model and feature attribution bias to inform model re-training.
https://www.examtopics.com/discussions/amazon/view/382255-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is setting up a continuous integration and continuous delivery (CI/CD) pipeline for an ML workflow in Amazon SageMaker AI. The pipeline needs to automate model re-training, testing, and deployment whenever new data is uploaded to an Amazon S3 bucket. New data files are approximately 10 GB in size. The ML engineer wants to track model versions for auditing.\nWhich solution will meet these requirements?
A. Use AWS CodePipeline. Amazon S3, and AWS CodeBuild to retrain and deploy the model automatically and to track model versions.
*B. Use SageMaker Pipelines with the SageMaker Model Registry to orchestrate model training and version tracking.
C. Create an AWS Lambda function to re-train and deploy the model. Use Amazon EventBridge to invoke the Lambda function. Reference the Lambda logs to track model versions.
D. Use SageMaker AI notebook instances to manually re-train and deploy the model when needed. Reference AWS CloudTrail logs to track model versions.
https://www.examtopics.com/discussions/amazon/view/404825-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineering team is spread across multiple locations. When the lead ML engineer opens an Amazon SageMaker Al notebook, the ML engineer does not see the latest merged notebook made by other team members from a Git repository.\nThe lead ML engineer must see the latest SageMaker AI notebook updates.\nWhich solution will meet this requirement?
*A. Run the !git pull origin master command.
B. Run the !git commit command.
C. Run the !git push origin master command.
D. Run the !git branch command.
https://www.examtopics.com/discussions/amazon/view/404827-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is preparing data for binary classification modeling. The ML engineer runs an Amazon SageMaker Clarify processing job. The bias report shows that the difference in proportions of labels (DPL) score is 0.4. The ML engineer wants the occurrence of labels across classes to be equal. The ML engineer decides to use SageMaker Data Wrangler to balance the data.\nWhat should the ML engineer do to most of the data to meet these requirements?
A. Use random oversampling to increase the DPL score.
B. Use random undersampling to increase the DPL score
*C. Use random oversampling to reduce the DPL score.
D. Use random undersampling to reduce the DPL score.
https://www.examtopics.com/discussions/amazon/view/404828-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is using Amazon SageMaker AI to train a deep learning model. During testing, the model shows high variance. The ML engineer needs to adjust a hyperparameter to improve generalization without significantly increasing training time.\nWhich solution will MOST improve the model generalization?
A. Increase the number of layers in the neural network.
B. Reduce the learning rate of the optimizer.
*C. Increase the L2 regularization parameter
D. Increase the batch size significantly.
https://www.examtopics.com/discussions/amazon/view/404829-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is running a hyperparameter tuning job in Amazon SageMaker AI. The hyperparameter tuning job will train an XGBoost model on a tabular dataset that has millions of rows.\nEach individual training job is configured to use up to 8 GPU instances, which leads to high costs if too many jobs run concurrently. The ML engineer wants to ensure that no more than five training jobs run in parallel at any time while still exploring all hyperparameter configurations.\nWhich solution will meet these requirements?
A. Set the resource limit for the MaxNumberOfTrainingJobs parameter to 5 in the hyperparameter tuning job.
*B. Set the resource limit for the MaxParallelTrainingJobs parameter to 5 in the hyperparameter tuning job.
C. Set the stopping condition for the MaxRuntimeInSeconds parameter to 5 in the hyperparameter tuning job.
D. Set the resource limit for the MaxNumberOfTrainingJobs parameter to 5 inside the script in the hyperparameter training job.
https://www.examtopics.com/discussions/amazon/view/404830-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing an ML model to forecast future values based on time series data. The dataset includes historical measurements collected at regular intervals and categorical features. The model needs to predict future values based on past patterns and trends.\nWhich algorithm and hyperparameters should the company use to develop the model?
A. Use the Amazon SageMaker AI XGBoost algorithm. Set the scale_pos_weight hyperparameter to adjust for class imbalance.
B. Use k-means clustering with k to specify the number of clusters.
*C. Use the Amazon SageMaker AI DeepAR algorithm with matching context_length and prediction_length hyperparameters.
D. Use the Amazon SageMaker AI Random Cut Forest (RCF) algorithm with contamination to set the expected proportion of anomalies.
https://www.examtopics.com/discussions/amazon/view/404831-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses an Amazon EMR cluster to run a data ingestion process for an ML model. An ML engineer notices that the processing time is increasing.\nWhich solution will reduce the processing time MOST cost-effectively?
A. Use Spot Instances to increase the number of primary nodes.
B. Use Spot Instances to increase the number of core nodes.
*C. Use Spot Instances to increase the number of task nodes.
D. Use On-Demand Instances to increase the number of core nodes.
https://www.examtopics.com/discussions/amazon/view/404832-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is designing an AI-powered traffic management system to adjust traffic lights during predicted congestion. The system must use near real-time inference to generate predictions to help prevent traffic collisions. The system must use a batch processing pipeline to perform historical analysis of the predictions to continuously refine and improve the model. The historical analysis will take several hours to evaluate how well the predictions correlate with actual outcomes. The system must be able to scale inference endpoints appropriately to meet demand.\nWhich combination of solutions will meet these requirements? (Choose two.)
*A. Use Amazon SageMaker real-time inference endpoints. Configure the endpoints to scale automatically based on a target tracking scaling policy that uses the metric ConcurrentInvocationsPerinstance.
B. Configure reserved concurrency for AWS Lambda functions to process streaming data. Use Lambda SnapStart to connect the Lambda functions to Amazon SageMaker real-time endpoints to support near real-time traffic predictions.
*C. Configure an Amazon SageMaker Processing job for batch analysis of historical prediction data. Use Amazon EventBridge to schedule the job to run daily. Allow several hours for in-depth analysis to refine and improve the traffic management model.
D. Use an Amazon EC2 Auto Scaling group to host containers to support the batch analysis of historical prediction data. Configure scaling based on Amazon CloudWatch metrics to analyze historical traffic patterns and model performance over multiple hours.
E. Use an AWS Lambda function to perform the historical analysis. Use Amazon EventBridge to invoke the Lambda function.
https://www.examtopics.com/discussions/amazon/view/404833-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to launch a new website feature that predicts home prices based on user-supplied home attributes. The attributes include location, square footage, and number of bedrooms and bathrooms.\nAn ML engineer has trained a regression model by using the Amazon SageMaker AI XGBoost algorithm. The model performs well with training data. However, the model significantly underperforms when it is validated against real-world data.\nWhich solution will improve the model’s validation score with the LEAST implementation effort?
A. Create a larger training dataset that includes more real-world data. Retrain the model.
B. Increase the value of the num_round hyperparameter.
C. Change the eval_metric hyperparameter from Root Mean Square Error (RMSE) to Error.
*D. Increase the value of the lambda hyperparameter.
https://www.examtopics.com/discussions/amazon/view/404834-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing an ML model for a customer. The company will train the model on data that is in an Amazon S3 bucket in the customer’s AWS account, named Account A. The company will use Amazon SageMaker AI training jobs in a separate AWS account, named Account B.\nThe company requires cross-account access to the S3 bucket to train the model. The company defines an S3 bucket policy and an IAM policy to allow reads to the S3 bucket that contains the training data.\nWhich additional steps will meet these requirements?
A. Create the S3 bucket policy in Account Attach the IAM policy to an IAM role that SageMaker AI uses in Account A.
*B. Create the S3 bucket policy in Account A. Attach the IAM policy to an IAM role that SageMaker AI uses in Account B.
C. Create the S3 bucket policy in Account B. Attach the IAM policy to an IAM role that SageMaker AI uses in Account A.
D. Create the S3 bucket policy in Account B. Attach the IAM policy to an IAM role that SageMaker AI uses in Account B.
https://www.examtopics.com/discussions/amazon/view/404835-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is performing A/B testing on a model that provides product recommendations. The company has deployed two versions of the model and is showing each version of the model to 50% of users randomly.\nWhich metric should the company use to evaluate whether users act on a recommendation?
*A. The conversion rates between the two versions of the model
B. The number of recommendations provided to each user
C. The model accuracy on held-out test data
D. The latency of model inference
https://www.examtopics.com/discussions/amazon/view/404836-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon SageMaker AI to build an ML model to predict customer behavior. The company needs to explain the bias in the model to an auditor. The explanation must focus on demographics data of the customers.\nWhich solution will meet these requirements?
*A. Use SageMaker Clarify to generate a bias report. Send the report to the auditor.
B. Use AWS Glue DataBrew to create a job to detect drift in the model's data quality. Send the job output to the auditor.
C. Use Amazon Quick Suite (previously known as Amazon QuickSight) integration with SageMaker AI to generate a bias report from Quick Suite. Send the report to the auditor.
D. Use Amazon CloudWatch metrics from the SageMaker AI namespace to create a bias dashboard. Share the dashboard with the auditor.
https://www.examtopics.com/discussions/amazon/view/404837-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A digital media entertainment company needs real-time video content moderation to ensure compliance during live streaming events.\nWhich solution will meet these requirements with the LEAST operational overhead?
*A. Use Amazon Rekognition and AWS Lambda to extract and analyze the metadata from the videos’ image frames.
B. Use Amazon Rekognition and a large language model (LLM) hosted on Amazon Bedrock to extract and analyze the metadata from the videos’ image frames.
C. Use Amazon SageMaker AI to extract and analyze the metadata from the videos’ image frames.
D. Use Amazon Transcribe and Amazon Comprehend to extract and analyze the metadata from the videos’ image frames.
https://www.examtopics.com/discussions/amazon/view/404838-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is working on a project to predict customer churn. The dataset contains customer information and is stored in an Amazon S3 bucket. A few rows have blank values in the monthly spend column.\nThe ML engineer needs to replace the blank values by using the mean value of the column. The replacement must be performed as part of an automated data preparation pipeline.\nWhat should the ML engineer do to prepare the data?
A. Use Amazon Athena with a SQL query that uses the AVG function and an UPDATE operation to replace the missing values.
*B. Use AWS Glue DataBrew with the impute missing values transformation to replace the missing values.
C. Use Amazon Quick Suite (previously known as Amazon QuickSight) with the Calculated Field feature to replace the missing values.
D. Use AWS Glue with the DropColumns transformation to replace the missing values.
https://www.examtopics.com/discussions/amazon/view/404839-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is using Amazon SageMaker AI to train a face detection ML model. The company uses the model to ensure that only authorized employees are present on the company premises.\nThe facial data used to train the model must be encrypted. The company must manage the encryption control. Only authorized employees must be able to view the data.\nWhich solution will meet these requirements?
*A. Use SageMaker AI IAM roles and policies to control access. Use AWS Key Management Service (AWS KMS) for encryption.
B. Use AWS PrivateLink for SageMaker AI to control access. Use AWS Key Management Service (AWS KMS) for encryption.
C. Use AWS PrivateLink for SageMaker AI to control access. Use VPC only mode for encryption.
D. Use SageMaker AI IAM roles and policies to control access. Use AWS CloudTrail for encryption.
https://www.examtopics.com/discussions/amazon/view/404840-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is evaluating options to deploy an ML model that will be used to make predictions. The model performs image classification on photos that customers upload.\nThe application that will use the model needs the model to operate with low latency. The company has limited capacity to manage infrastructure and needs to minimize costs.\nHow should the company deploy the model to meet these requirements?
A. Deploy the model on Amazon EC2 instances behind an Application Load Balancer.
*B. Deploy the model to Amazon SageMaker AI real-time inference endpoints.
C. Deploy the model on Amazon Elastic Container Service (Amazon ECS) containers that run on AWS Fargate.
D. Deploy the model on Kubernetes nodes on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.
https://www.examtopics.com/discussions/amazon/view/404841-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer uses A/B testing to dynamically select recommendation models. The models are deployed on Amazon SageMaker AI endpoints. The ML engineer needs to monitor system metrics such as latency, call volume, and HTTP status codes when the endpoints are invoked.\nWhich solution will meet these requirements with the LEAST operational overhead?
A. Use AWS X-Ray tracing to monitor SageMaker AI endpoints.
*B. Configure Amazon CloudWatch dashboards with AWS Lambda log processors.
C. Enable AWS Identity and Access Management (IAM) Access Analyzer to track SageMaker AI endpoint metrics.
D. Deploy AWS Trusted Advisor checks on SageMaker AI endpoint instances.
https://www.examtopics.com/discussions/amazon/view/404842-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer at a credit card company used Amazon SageMaker AI to build and deploy a new ML model. The model was trained on a copy of transactions from the production environment. The copy of transactions contained only a few fraudulent transactions.\nAfter deployment to production, the model is underperforming.\nWhat should the ML engineer do to improve the model’s performance?
A. Retrain the model with a different built-in algorithm that is available in SageMaker AI.
B. Use random undersampling in SageMaker Data Wrangler to randomly reduce the majority class samples. Retrain the model.
*C. Use Synthetic Minority Oversampling Technique (SMOTE) in SageMaker Data Wrangler to generate synthetic minority samples. Retrain the model.
D. Use random oversampling in SageMaker Data Wrangler to randomly duplicate minority samples. Retrain the model.
https://www.examtopics.com/discussions/amazon/view/404843-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is importing a custom model from the Hugging Face Hub into Amazon Bedrock. The ML engineer wants to use the model with the Amazon Bedrock API in an agentic AI application.\nWhich combination of steps will meet these requirements? (Choose two.)
A. Import the model for deployment by using Amazon Bedrock On-Demand mode.
*B. Convert the model to a quantized format. Import the quantized model after conversion.
C. Import the model directly by using the Amazon SageMaker AI SDK in the agentic AI application.
D. During the model import process, configure an auto-scaling policy before using the model in the agentic AI application.
*E. In the import job, provide the complete Amazon S3 URI that points to the Hugging Face model files. Ensure that the S3 URI is in the same AWS account as the Amazon Bedrock import job.
https://www.examtopics.com/discussions/amazon/view/404844-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing a classification model to predict profitability. The company wants to incorporate new unstructured data that the company bought from another company. The company needs data access to be restricted to only the company’s data science team to maintain data security.\nWhich solution will meet these requirements?
*A. Store the new data in an encrypted Amazon S3 bucket. Create an IAM role for the data science team. Use IAM policies to allow access only by using the new IAM role.
B. Load the new data into an Amazon RDS database with public access disabled. Share the connection credentials with the data science team in an email message.
C. Upload the new data into a feature group in Amazon SageMaker Feature Store. Enable all Amazon SageMaker AI users.
D. Store the new data in a local file on each data scientist’s laptop to ensure that only that specific data scientists can access the data.
https://www.examtopics.com/discussions/amazon/view/404845-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company is developing ML models by using PyTorch and TensorFlow estimators with Amazon SageMaker AI. An ML engineer configures the SageMaker AI estimator and now needs to initiate a training job that uses a training dataset.\nWhich SageMaker AI SDK method can initiate the training job?
*A. fit method
B. create_model method
C. deploy method
D. predict method
https://www.examtopics.com/discussions/amazon/view/404846-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is preparing a dataset of medical records to train an ML model. The model will predict the likelihood of patients developing a specific disease. The dataset includes numeric features and categorical features. The ML engineer will train the model by using a custom container that accesses data stored in an Amazon Elastic File System (Amazon EFS) file system.\nHow should the ML engineer prepare the dataset to train the model?
A. Select a random sample of records. Encode the categorical features. Load the pre-processed data into the file system.
*B. Perform data validation to check for missing or invalid values. Encode the categorical features. Scale the numeric features. Select a random sample of records.
C. Scale the numeric features. Select a random sample of records for the initial model training. Load the pre-processed data into the file system.
D. Compress the data files. Remove duplicate records. Load the pre-processed data into the file system.
https://www.examtopics.com/discussions/amazon/view/404847-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer used Amazon SageMaker Studio to train a neural network. The neural network logs its information into TensorBoard and uses stochastic gradient descent (SGD) as the optimizer.\nThe ML engineer reviewed training graphs and discovered that the accuracy was not increasing and the loss was decreasing very slowly. The ML engineer needs to improve the model’s performance without increasing the total training time.\nWhich solution will meet these requirements?
*A. Increase the initial learning rate.
B. Decrease the initial learning rate.
C. Increase the total number of epochs.
D. Decrease the total number of epochs.
https://www.examtopics.com/discussions/amazon/view/404848-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company wants to use large language models (LLMs) that are supported by Amazon Bedrock to develop a chat interface for the company’s internal technical documentation. The company stores the documentation as dozens of text files that are several megabytes in total size. The company updates the text files often.\nWhich solution will meet these requirements MOST cost-effectively?
A. Create a new LLM on Amazon Bedrock. Train the new LLM on the original dataset and the company documentation. Make the new model available in Bedrock for calls from the chat interface.
B. Integrate the company documentation with Amazon Bedrock guardrails. Invoke the guardrails for all Amazon Bedrock calls from the chat interface.
C. Use all the text files to fine tune a model in Amazon Bedrock. Use the fine-tuned model to process user prompts.
*D. Upload all the text files to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when the chat interface makes calls to Amazon Bedrock.
https://www.examtopics.com/discussions/amazon/view/404849-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: An ML engineer is using AWS CodeDeploy to deploy new versions of containers that perform inference to an Amazon Elastic Container Service (Amazon ECS) compute platform. The ML engineer needs to define a deployment configuration to shift traffic to the updated ECS task set. The deployment configuration must shift 10% of traffic to the updated containers in the first increment. The remaining 90% of traffic must shift to the updated containers within 10 to 15 minutes.\nWhich deployment configuration will meet these requirements?
A. CodeDeployDefault.LambdaLinear10PercentEvery10Minutes
B. CodeDeployDefault.ECSAllAtOnce
*C. CodeDeployDefault.ECSCanary10Percent15Minutes
D. CodeDeployDefault.LambdaCanary10Percent15Minutes
https://www.examtopics.com/discussions/amazon/view/404850-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: A company uses an ML model to recommend videos to users. The model is deployed on Amazon SageMaker AI. The model performed well initially after deployment, but the model’s performance has degraded over time.\nWhich solution can the company use to identify model drift in the future?
A. Create a monitoring job in SageMaker Model Monitor. Then create a baseline from the training dataset.
*B. Create a baseline from the training dataset. Then create a monitoring job in SageMaker Model Monitor.
C. Create a baseline by using a built-in rule in SageMaker Clarify. Monitor the drift in Amazon CloudWatch.
D. Retrain the model on new data. Compare the retrained model's performance to the original model’s performance.
https://www.examtopics.com/discussions/amazon/view/404851-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA company stores historical data in .csv files in Amazon S3. Only some of the rows and columns in the .csv files are populated. The columns are not labeled. An ML engineer needs to prepare and store the data so that the company can use the data to train ML models.\nSelect and order the correct steps from the following list to perform this task. Each step should be selected one time or not at all.\n• Create an Amazon SageMaker batch transform job for data cleaning and feature engineering.\n• Store the resulting data back in Amazon S3.\n• Use Amazon Athena to infer the schemas and available columns.\n• Use AWS Glue crawlers to infer the schemas and available columns.\n• Use AWS Glue DataBrew for data cleaning and feature engineering\n(Select and order three.).
TYPE: hotspot
HOTSPOT_OPTIONS: Create an Amazon SageMaker batch transform job for data cleaning and feature engineering. | Store the resulting data back in Amazon S3. | Use Amazon Athena to infer the schemas and available columns. | Use AWS Glue crawlers to infer the schemas and available columns. | Use AWS Glue DataBrew for data cleaning and feature engineering.
HOTSPOT_ROW: Step 1: | Use AWS Glue crawlers to infer the schemas and available columns.
HOTSPOT_ROW: Step 2: | Use AWS Glue DataBrew for data cleaning and feature engineering.
HOTSPOT_ROW: Step 3: | Store the resulting data back in Amazon S3.
https://www.examtopics.com/discussions/amazon/view/156754-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn ML engineer needs to use Amazon SageMaker Feature Store to create and manage features to train a model.\nSelect and order the steps from the following list to create and use the features in Feature Store. Each step should be selected one time.\n• Access the store to build datasets for training.\n• Create a feature group.\n• Ingest the records\n(Select and order three.).
TYPE: hotspot
HOTSPOT_OPTIONS: Access the store to build datasets for training. | Create a feature group. | Ingest the records.
HOTSPOT_ROW: Step 1: | Create a feature group.
HOTSPOT_ROW: Step 2: | Ingest the records.
HOTSPOT_ROW: Step 3: | Access the store to build datasets for training.
https://www.examtopics.com/discussions/amazon/view/156755-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA company wants to host an ML model on Amazon SageMaker. An ML engineer is configuring a continuous integration and continuous delivery (Cl/CD) pipeline in AWS CodePipeline to deploy the model. The pipeline must run automatically when new training data for the model is uploaded to an Amazon S3 bucket.\nSelect and order the pipeline's correct steps from the following list. Each step should be selected one time or not at all.\n• An S3 event notification invokes the pipeline when new data is uploaded.\n• S3 Lifecycle rule invokes the pipeline when new data is uploaded.\n• SageMaker retrains the model by using the data in the S3 bucket.\n• The pipeline deploys the model to a SageMaker endpoint.\n• The pipeline deploys the model to SageMaker Model Registry\n(Select and order three.).
TYPE: hotspot
HOTSPOT_OPTIONS: An S3 event notification invokes the pipeline when new data is uploaded. | An 53 Lifecycle rule invokes the pipeline when new data is uploaded. | SageMaker retrains the model by using the data in the S3 bucket. | The pipeline deploys the model to a SageMaker endpoint. | The pipeline deploys the model to SageMaker Model Registry.
HOTSPOT_ROW: Step 1: | An S3 event notification invokes the pipeline when new data is uploaded.
HOTSPOT_ROW: Step 2: | SageMaker retrains the model by using the data in the S3 bucket.
HOTSPOT_ROW: Step 3: | The pipeline deploys the model to a SageMaker endpoint.
https://www.examtopics.com/discussions/amazon/view/154557-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn ML engineer is building a generative AI application on Amazon Bedrock by using large language models (LLMs).\nSelect the correct generative AI term from the following list for each description. Each term should be selected one time or not at all.\n• Embedding\n• Retrieval Augmented Generation (RAG)\n• Temperature\n• Token\n(Select three.)
TYPE: hotspot
HOTSPOT_OPTIONS: Embedding | Retrieval Augmented Generation (RAG) | Temperature | Token
HOTSPOT_ROW: Text representation of basic units of data processed by LLMs: | Token
HOTSPOT_ROW: High-dimensional vectors that contain the semantic meaning of text: | Embedding
HOTSPOT_ROW: Enrichment of information from additional data sources to improve a generated response: | Retrieval Augmented Generation (RAG)
https://www.examtopics.com/discussions/amazon/view/156757-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn ML engineer is working on an ML model to predict the prices of similarly sized homes. The model will base predictions on several features The ML engineer will use the following feature engineering techniques to estimate the prices of the homes:\n• Feature splitting\n• Logarithmic transformation\n• One-hot encoding\n• Standardized distribution\nSelect the correct feature engineering techniques for the following list of features. Each feature engineering technique should be selected one time or not at all (Select three.)
TYPE: hotspot
HOTSPOT_OPTIONS: Feature splitting | Logarithmic transformation | One-hot encoding | Standardized distribution
HOTSPOT_ROW: City (name): | One-hot encoding
HOTSPOT_ROW: Type_year (type of home and year the home was built): | Feature splitting
HOTSPOT_ROW: Size of the building (square feet or square meters): | Logarithmic transformation
https://www.examtopics.com/discussions/amazon/view/155580-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA company needs to train an ML model that will use historical transaction data to predict customer behavior.\nSelect the correct AWS service from the following list to perform each task on the data. Each service should be selected one time or not at all.\n• Amazon Athena\n• AWS Glue\n• Amazon Kinesis Data Streams\n• Amazon S3\n(Select three.)
TYPE: hotspot
HOTSPOT_OPTIONS: Amazon Athena | AWS Glue | Amazon Kinesis Data Streams | Amazon S3
HOTSPOT_ROW: Query the data for exploration and analysis. | Amazon Athena
HOTSPOT_ROW: Store the data. | Amazon S3
HOTSPOT_ROW: Transform the data. | AWS Glue
https://www.examtopics.com/discussions/amazon/view/310754-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn ecommerce company is using Amazon SageMaker Clarify Foundation Model Evaluations (FMEval) to evaluate ML models.\n• Classification evaluation\n• Open-ended generation\n• Question answering\n• Text summarization\nSelect the correct model evaluation task from the following list for each ecommerce use case. Each model evaluation task should be selected one time.
TYPE: hotspot
HOTSPOT_OPTIONS: Classification evaluation | Open-ended generation | Question answering | Text summarization
HOTSPOT_ROW: Categorize customer reviews as positive, neutral, or negative sentiment. | Classification evaluation
HOTSPOT_ROW: Create concise product descriptions from complete manufacturer details. | Text summarization
HOTSPOT_ROW: Recommend products based on a user's browsing history. | Open-ended generation
HOTSPOT_ROW: Respond to specific customer queries about product features. | Question answering
https://www.examtopics.com/discussions/amazon/view/315657-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn ML engineer must choose the appropriate Amazon SageMaker algorithm to solve specific AI problems.\n• Random Cut Forest (RCF) algorithm\n• Semantic segmentation algorithm\n• Sequence-to-Sequence (seq2seq) algorithm\nSelect the correct SageMaker built-in algorithm from the following list for each use case. Each algorithm should be selected one time.
TYPE: hotspot
HOTSPOT_OPTIONS: Random Cut Forest (RCF) algorithm | Semantic segmentation algorithm | Sequence-to-Sequence (seq2seq) algorithm
HOTSPOT_ROW: Summarize the text of a research paper. | Sequence-to-Sequence (seq2seq) algorithm
HOTSPOT_ROW: Scan every pixel of an image to help self-driving cars identify objects in their path. | Semantic segmentation algorithm
HOTSPOT_ROW: Identify abnormal data points in a dataset. | Random Cut Forest (RCF) algorithm
https://www.examtopics.com/discussions/amazon/view/315673-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA hospital wants to predict patient outcomes for the coming year. An ML engineer must improve several existing ML models that currently perform poorly.\nSelect the correct regularization method from the following list to improve each model. Select each regularization method one time, more than one time, or not at all.\n• L1 regularization\n• L2 regularization\n• Early stopping\n(Choose three.)
TYPE: hotspot
HOTSPOT_OPTIONS: L1 regularization | L2 regularization | Early stopping
HOTSPOT_ROW: A linear regression model whose coefficients should shrink but not become zero: | L2 regularization
HOTSPOT_ROW: A polynomial regression model with irrelevant polynomial terms that should be eliminated: | L1 regularization
HOTSPOT_ROW: A logistic regression model that has highly correlated features to eliminate highly redundant predictors: | L1 regularization
https://www.examtopics.com/discussions/amazon/view/382295-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn ML engineer needs to use Amazon SageMaker hyperparameter tuning to reduce the training time for an ML model.\nSelect and order the correct steps from the following list to meet this requirement. Each step should be selected one time or not at all.\n• Choose Bayesian optimization and increase the number of parameters.\n• Choose Hyperband tuning and decrease the number of parameters.\n• Choose random search and use a random seed of -1.\n• Deploy the model to a SageMaker endpoint.\n• Evaluate the change in training time.\n• Retrain the model.\n(Select and order three.)
TYPE: hotspot
HOTSPOT_OPTIONS: ‎Choose Bayesian optimization and increase the number of parameters. | Choose Hyperband tuning and decrease the number of parameters. | Choose random search and use a random seed of -1. | Deploy the model to a SageMaker endpoint. | Evaluate the change in training time. | Retrain the model.
HOTSPOT_ROW: Step 1: | Choose Hyperband tuning and decrease the number of parameters.
HOTSPOT_ROW: Step 2: | Retrain the model.
HOTSPOT_ROW: Step 3: | Evaluate the change in training time.
https://www.examtopics.com/discussions/amazon/view/382311-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA company develops an ML model to classify products. The model uses textual data and visual data to classify the products into a hierarchical taxonomy. An ML engineer must use specific strategies to enhance the model’s accuracy and handle class imbalances.\nSelect the correct strategy from the following list for each use case. Select each strategy one time.\n• Categorical cross-entropy\n• Fallback metric\n• Hierarchical loss\n• General oversampling\n• Synthetic Minority Oversampling Technique (SMOTE) for text\n(Choose four.)
TYPE: hotspot
HOTSPOT_OPTIONS: Categorical cross-entropy | Fallback metric | Hierarchical loss | General oversampling | Synthetic Minority Oversampling Technique (SMOTE) for text
HOTSPOT_ROW: Evaluate predictions with tolerance for broader category matches. | Fallback metric
HOTSPOT_ROW: Balance the training data by increasing the presence of minority categories. | General oversampling
HOTSPOT_ROW: Enhance the model's ability to recognize nested structures within product categories. | Hierarchical loss
HOTSPOT_ROW: Enhance textual data representation for underrepresented categories. | Synthetic Minority Oversampling Technique (SMOTE) for text
https://www.examtopics.com/discussions/amazon/view/382296-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn ML engineer needs to automate the rebuild and redeployment of an ML model. Updates will occur when changes are made to the model’s code base. The ML engineer must use AWS services to configure a continuous integration and continuous delivery (CI/CD) pipeline for the rebuild and redeployment.\nSelect and order the steps from the following list to configure the CI/CD pipeline. Each step should be selected one time.\n• Invoke Amazon SageMaker Pipelines to run all steps required for model training and deployment.\n• Create a pipeline in AWS CodePipeline. Build and test containers in AWS CodeBuild.\n• Create a Git source code repository.\n(Select and order three.)
TYPE: hotspot
HOTSPOT_OPTIONS: Invoke Amazon SageMaker Pipelines to run all steps required for model training and deployment. | Create a pipeline in AWS CodePipeline. Build and test containers in AWS CodeBuild. | Create a Git source code repository.
HOTSPOT_ROW: Step 1: | Create a Git source code repository.
HOTSPOT_ROW: Step 2: | Create a pipeline in AWS CodePipeline. Build and test containers in AWS CodeBuild.
HOTSPOT_ROW: Step 3: | Invoke Amazon SageMaker Pipelines to run all steps required for model training and deployment.
https://www.examtopics.com/discussions/amazon/view/382302-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn airline company deploys ML models to one dozen Amazon SageMaker AI inference endpoints. The inference endpoints must be able to handle different types of workloads in a cost-effective way.\nSelect the correct inference option from the following list to handle each type of workload. Select each inference option one time.\n• Asynchronous inference\n• Batch inference\n• Real-time inference\n• Serverless inference\n(Choose four.)
TYPE: hotspot
HOTSPOT_OPTIONS: Asynchronous inference | Batch inference | Real-time inference | Serverless inference
HOTSPOT_ROW: Provide flight departure, arrival, and delay information, and provide updates for low-latency workloads. | Real-time inference
HOTSPOT_ROW: Advertise holiday travel promotional deals to millions of users in multiple markets before holiday seasons for spiky workloads. | Serverless inference
HOTSPOT_ROW: Generate quarterly and annual flight reports and insights for trend analysis of large datasets. | Batch inference
HOTSPOT_ROW: Generate online image and audio stories for passengers to watch or listen to while waiting at an airport. | Asynchronous inference
https://www.examtopics.com/discussions/amazon/view/382265-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA company uses Amazon SageMaker AI to support ML workflows such as model training and deployment.\nSelect the correct registry from the following list to meet the requirements for each use case with the LEAST operational overhead. Each registry should be selected one or more times. (Choose four.)
TYPE: hotspot
HOTSPOT_OPTIONS: Amazon Elastic Container Registry (Amazon ECR) | SageMaker Model Registry
HOTSPOT_ROW: Tag model packages and use model package groups that include container images for training and deployment. | SageMaker Model Registry
HOTSPOT_ROW: Store predefined language packages, kernels, and relevant dependencies. | Amazon Elastic Container Registry (Amazon ECR)
HOTSPOT_ROW: Organize models and their images into model groups for better discoverability. | SageMaker Model Registry
HOTSPOT_ROW: Pull built-in SageMaker Al images for model training. | Amazon Elastic Container Registry (Amazon ECR)
https://www.examtopics.com/discussions/amazon/view/382284-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA company is using Amazon SageMaker to deploy a new version of its ML model.\nSelect the correct SageMaker traffic shifting strategy from the following list for each use case. Each traffic shifting strategy should be selected one time.\n• All at once traffic shifting\n• Canary traffic shifting\n• Linear traffic shifting\n(Choose three.)
TYPE: hotspot
HOTSPOT_OPTIONS: All at once traffic shifting | Canary traffic shifting | Linear traffic shifting
HOTSPOT_ROW: Shift traffic in two steps to validate the new model version. | Canary traffic shifting
HOTSPOT_ROW: Shift traffic to the new model version in the shortest amount of time. | All at once traffic shifting
HOTSPOT_ROW: Incrementally shift traffic to the new model version over time. | Linear traffic shifting
https://www.examtopics.com/discussions/amazon/view/382318-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA company needs to combine data from multiple sources. The company must use Amazon Redshift Serverless to query an AWS Glue Data Catalog database and underlying data that is stored in an Amazon S3 bucket.\nSelect and order the correct steps from the following list to meet these requirements. Select each step one time or not at all.\n• Attach the IAM role to the Redshift cluster.\n• Attach the IAM role to the Redshift namespace.\n• Create an external database in Amazon Redshift to point to the Data Catalog schema.\n• Create an external schema in Amazon Redshift to point to the Data Catalog database.\n• Create an IAM role for Amazon Redshift to use to access only the S3 bucket that contains underlying data.\n• Create an IAM role for Amazon Redshift to use to access the Data Catalog and the S3 bucket that contains underlying data.\n(Select and order three.)
TYPE: hotspot
HOTSPOT_OPTIONS: Attach the TAM role to the Redshift cluster. | Attach the TAM role to the Redshift namespace. | Create an external database in Amazon Redshift to point to the Data Catalog schema. | Create an external schema in Amazon Redshift to point to the Data Catalog database. | Create an IAM role for Amazon Redshift to use to access only the S3 bucket that contains underlying data. | Create an IAM role for Amazon Redshift to use to access the Data Catalog and the S3 bucket that contains underlying data.
HOTSPOT_ROW: Step 1: | Create an IAM role for Amazon Redshift to use to access the Data Catalog and the S3 bucket that contains underlying data.
HOTSPOT_ROW: Step 2: | Attach the TAM role to the Redshift namespace.
HOTSPOT_ROW: Step 3: | Create an external schema in Amazon Redshift to point to the Data Catalog database.
https://www.examtopics.com/discussions/amazon/view/382298-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nAn ML engineer needs to use Amazon SageMaker to develop an ML solution for a company. The solution will use streaming video from cameras to count the number of people who walk past the company’s store every day.\nSelect and order the steps from the following list to implement the first version of the algorithm. Each step should be selected one time.\n• Choose a built-in algorithm or pre-trained model.\n• Decide the data input format and apply data augmentation if necessary.\n• Determine if the challenge is a classification, detection, or segmentation problem.\n(Select and order three.)
TYPE: hotspot
HOTSPOT_OPTIONS: Choose a built-in algorithm or pre-trained model. | Decide the data input format and apply data augmentation if necessary. | Determine if the challenge is a classification, detection, or segmentation problem.
HOTSPOT_ROW: Step 1: | Determine if the challenge is a classification, detection, or segmentation problem.
HOTSPOT_ROW: Step 2: | Decide the data input format and apply data augmentation if necessary.
HOTSPOT_ROW: Step 3: | Choose a built-in algorithm or pre-trained model.
https://www.examtopics.com/discussions/amazon/view/382277-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: HOTSPOT\nA company develops an ML model to classify products. The model uses textual data and visual data to classify the products into a hierarchical taxonomy. An ML engineer must use specific strategies to enhance the model’s accuracy and handle class imbalances.\nSelect the correct strategy from the following list for each use case. Select each strategy one time.\n• Categorical cross-entropy\n• Fallback metric\n• Hierarchical loss\n• General oversampling\n• Synthetic Minority Oversampling Technique (SMOTE) for text\n(Choose five.)
TYPE: hotspot
HOTSPOT_OPTIONS: Categorical cross-entropy | Fallback metric | Hierarchical loss | General oversampling | Synthetic Minority Oversampling Technique (SMOTE) for text
HOTSPOT_ROW: Evaluate predictions with tolerance for broader category matches. | Fallback metric
HOTSPOT_ROW: Balance the training data by increasing the presence of minority categories. | General oversampling
HOTSPOT_ROW: Enhance the model's ability to recognize nested structures within product categories. | Hierarchical loss
HOTSPOT_ROW: Enhance textual data representation for underrepresented categories. | Synthetic Minority Oversampling Technique (SMOTE) for text
HOTSPOT_ROW: Measure the model's success for exact category matching. | Categorical cross-entropy
https://www.examtopics.com/discussions/amazon/view/389699-exam-aws-certified-machine-learning-engineer-associate-mla/

---

Q: Q: HOTSPOT\nAn ML engineer needs to monitor the behavior of an ML model and track bias drift. The ML engineer must detect issues from an Amazon SageMaker Al endpoint so the ML engineer can take actions to address any identified issues. The ML engineer has collected Amazon SageMaker Ground Truth labels that show correct results for a set of test data.\nSelect the AWS service feature from the following list to correctly answer each of the following questions.\n• Amazon CloudWatch alarms\n• Amazon CloudWatch metrics\n• Amazon S3 bucket\n• Amazon SageMaker Clarify\nSelect each service feature one time.
TYPE: hotspot
HOTSPOT_OPTIONS: Amazon CloudWatch alarms | Amazon CloudWatch metrics | Amazon S3 bucket | Amazon SageMaker Clarify
HOTSPOT_ROW: Where can the ML engineer view findings and results related to data quality and accuracy drift? | Amazon CloudWatch metrics
HOTSPOT_ROW: Where can the ML engineer store labels to compare with predictions to measure model quality? | Amazon S3 bucket
HOTSPOT_ROW: Which service feature can the ML engineer use to monitor bias metrics for a deployed model? | Amazon SageMaker Clarify
HOTSPOT_ROW: Which service feature can the ML engineer use to roll back to a previous endpoint if a new endpoint's average error rate exceeds a specified threshold? | Amazon CloudWatch alarms
https://www.examtopics.com/discussions/amazon/view/404826-exam-aws-certified-machine-learning-engineer-associate-mla/



`;