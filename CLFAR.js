// CLFAR
var CLFAR_TEXT = `

س: تخطط شركة لاستخدام جهاز Amazon Snowball Edge لنقل الملفات إلى سحابة AWS.\nأي الأنشطة المتعلقة بجهاز Snowball Edge تتوفر للشركة بدون تكلفة؟
أ. استخدام جهاز Snowball Edge لمدة 10 أيام
ب. نقل البيانات خارج Amazon S3 وإلى جهاز Snowball Edge
*ج. نقل البيانات من جهاز Snowball Edge إلى Amazon S3
د. الاستخدام اليومي لجهاز Snowball Edge بعد 10 أيام
https://www.examtopics.com/discussions/amazon/view/123345-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: قامت شركة بنشر تطبيقات على مثيلات Amazon EC2. تحتاج الشركة إلى تقييم نقاط الضعف في التطبيق ويجب عليها تحديد عمليات نشر البنية التحتية التي لا تلتزم بأفضل الممارسات.\nأي خدمة AWS يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Trusted Advisor
*ب. Amazon Inspector
ج. AWS Config
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123348-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة مجموعة مركزية من المستخدمين لديها متطلبات تخزين ملفات كبيرة تجاوزت المساحة المتاحة في المقر. تريد الشركة توسيع قدرات تخزين الملفات لهذه المجموعة مع الاحتفاظ بفائدة مشاركة المحتوى محليًا.\nما هو الحل الأكثر كفاءة من الناحية التشغيلية من AWS لهذا السيناريو؟
أ. إنشاء دلو S3 لكل مستخدم. تثبيت كل دلو باستخدام أداة تثبيت نظام ملفات S3.
*ب. تكوين ونشر بوابة تخزين AWS Storage Gateway من نوع file gateway. توصيل محطة عمل كل مستخدم ببوابة الملفات.
ج. نقل بيئة عمل كل مستخدم إلى Amazon WorkSpaces. إعداد حساب Amazon WorkDocs لكل مستخدم.
د. نشر مثيل Amazon EC2 وإرفاق وحدة Amazon Elastic Block Store (Amazon EBS) من نوع Provisioned IOPS. مشاركة وحدة EBS مباشرة مع المستخدمين.
https://www.examtopics.com/discussions/amazon/view/123447-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: وفقًا لأفضل ممارسات الأمان، كيف يجب منح مثيل Amazon EC2 حق الوصول إلى دلو Amazon S3؟
أ. ترميز المفتاح السري و مفتاح الوصول الخاص بمستخدم IAM مباشرة في التطبيق، ثم رفع الملف.
ب. تخزين المفتاح السري و مفتاح الوصول الخاص بمستخدم IAM في ملف نصي على مثيل EC2، وقراءة المفاتيح، ثم رفع الملف.
*ج. جعل مثيل EC2 يفترض دورًا (role) للحصول على الصلاحيات اللازمة لرفع الملف.
د. تعديل سياسة دلو S3 بحيث يمكن لأي خدمة رفع الملف إليه في أي وقت.
https://www.examtopics.com/discussions/amazon/view/123448-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو مسؤولية العميل عند استخدام Amazon DynamoDB بموجب نموذج المسؤولية المشتركة لـ AWS؟
أ. الأمان المادي لـ DynamoDB
ب. تصحيح أخطاء (patching) DynamoDB
*ج. الوصول إلى جداول DynamoDB
د. تشفير البيانات أثناء الراحة (data at rest) في DynamoDB
https://www.examtopics.com/discussions/amazon/view/123449-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو منظور يتضمن القدرات الأساسية لإطار اعتماد سحابة AWS (AWS CAF)؟
أ. الاستدامة
ب. كفاءة الأداء
*ج. الحوكمة
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/123349-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتشغيل وإدارة بيئة Docker الخاصة بها على مثيلات Amazon EC2. تريد الشركة بديلاً للمساعدة في إدارة حجم المجموعة (cluster size) والجدولة وصيانة البيئة.\nأي خدمة AWS تلبي هذه المتطلبات؟
أ. AWS Lambda
ب. Amazon RDS
*ج. AWS Fargate
د. Amazon Athena
https://www.examtopics.com/discussions/amazon/view/123499-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تشغيل قاعدة بيانات NoSQL على مثيلات Amazon EC2.\nأي مهمة هي مسؤولية AWS في هذا السيناريو؟
أ. تحديث نظام التشغيل الضيف (guest operating system) لمثيلات EC2.
ب. الحفاظ على التوفر العالي (high availability) في طبقة قاعدة البيانات.
*ج. تصحيح البنية التحتية المادية (physical infrastructure) التي تستضيف مثيلات EC2.
د. تكوين جدار حماية مجموعة الأمان (security group).
https://www.examtopics.com/discussions/amazon/view/123538-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمات أو أدوات AWS يمكنها تحديد فرص التحجيم المناسب (rightsizing opportunities) لمثيلات Amazon EC2؟ (اختر اثنين)
*أ. AWS Cost Explorer
ب. AWS Billing Conductor
ج. Amazon CodeGuru
د. Amazon SageMaker
*هـ. AWS Compute Optimizer
https://www.examtopics.com/discussions/amazon/view/123553-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من الفوائد التالية لاستخدام AWS Trusted Advisor؟ (اختر اثنين)
أ. توفير تنظيم حاويات عالي الأداء
ب. إنشاء وتدوير مفاتيح التشفير
*ج. اكتشاف الموارد غير المستغلة بشكل كافٍ لتوفير التكاليف
*د. تحسين الأمان من خلال المراقبة الاستباقية لبيئة AWS
هـ. تطبيق وضع علامات (tagging) إلزامي عبر موارد AWS
https://www.examtopics.com/discussions/amazon/view/123456-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من المزايا التالية يختبرها المستخدمون当他们将 أعباء العمل المحلية (on-premises) إلى سحابة AWS؟
*أ. التخلص من نفقات تشغيل وصيانة مراكز البيانات
ب. خصومات سعرية مطابقة لخصومات مقدمي الأجهزة
ج. توزيع جميع الضوابط التشغيلية على AWS
د. التخلص من النفقات التشغيلية
https://www.examtopics.com/discussions/amazon/view/123455-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إدارة خدمات تكنولوجيا المعلومات المنشورة وحكم قوالب البنية التحتية ككود (IaC).\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS Resource Explorer
*ب. AWS Service Catalog
ج. AWS Organizations
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/123350-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو أداة AWS تساعد المستخدمين على تصور وفهم وإدارة الإنفاق والاستخدام بمرور الوقت؟
أ. AWS Organizations
ب. AWS Pricing Calculator
*ج. AWS Cost Explorer
د. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/123457-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستخدم شركة منصة بيانات مركزية لإدارة أنواع متعددة من البيانات لعملائها. تريد الشركة استخدام خدمات AWS لاكتشاف البيانات وتحويلها وتصورها.\nأي مجموعة من خدمات AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟ (اختر اثنين)
*أ. AWS Glue
ب. Amazon Elastic File System (Amazon EFS)
ج. Amazon Redshift
*د. Amazon QuickSight
هـ. Amazon Quantum Ledger Database (Amazon QLDB)
https://www.examtopics.com/discussions/amazon/view/123610-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة عالمية ترحيل تطبيقات الطرف الثالث الخاصة بها إلى سحابة AWS. تريد الشركة مساعدة من فريق عالمي من الخبراء لإكمال الترحيل بشكل أسرع وبموثوقية أكبر وفقًا لأفضل الممارسات الداخلية لـ AWS.\nأي خدمة أو مورد AWS سيلبي هذه المتطلبات؟
أ. AWS Support
*ب. AWS Professional Services
ج. AWS Launch Wizard
د. AWS Managed Services (AMS)
https://www.examtopics.com/discussions/amazon/view/123458-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج منصة تعليم إلكتروني إلى تشغيل تطبيق لمدة شهرين كل عام. سيتم نشر التطبيق على مثيلات Amazon EC2. يجب تجنب أي توقف للتطبيق خلال هذين الشهرين.\nأي خيار شراء EC2 سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. Reserved Instances
ب. Dedicated Hosts
ج. Spot Instances
*د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/123459-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يريد مطور نشر تطبيق بسرعة على AWS دون إنشاء الموارد المطلوبة يدويًا.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon EC2
*ب. AWS Elastic Beanstalk
ج. AWS CodeBuild
د. Amazon Personalize
https://www.examtopics.com/discussions/amazon/view/123460-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتخزين بيانات العملاء الحساسة في دلو Amazon S3. تريد الشركة حماية البيانات من الحذف أو الكتابة فوقها عن طريق الخطأ.\nأي ميزة من ميزات S3 يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. قواعد دورة حياة S3 (S3 Lifecycle rules)
*ب. إصدار S3 (S3 Versioning)
ج. سياسات دلو S3 (S3 bucket policies)
د. تشفير من جانب الخادم لـ S3 (S3 server-side encryption)
https://www.examtopics.com/discussions/amazon/view/123462-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS توفر القدرة على إدارة البنية التحتية ككود (Infrastructure as Code)؟
أ. AWS CodePipeline
ب. AWS CodeDeploy
ج. AWS Direct Connect
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/123464-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة ألعاب عبر الإنترنت إلى اختيار خيار شراء لتشغيل مثيلات Amazon EC2 الخاصة بها لمدة عام واحد. حركة مرور الويب ثابتة، وأي زيادات في حركة المرور يمكن التنبؤ بها. يجب أن تكون مثيلات EC2 متصلة بالإنترنت ومتاحة دون أي انقطاع.\nأي خيار شراء مثيل EC2 سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. On-Demand Instances
*ب. Reserved Instances
ج. Spot Instances
د. Spot Fleet
https://www.examtopics.com/discussions/amazon/view/123674-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS تسمح للمستخدم بإنشاء اتصال شبكة مخصص بين مركز بيانات الشركة المحلي وسحابة AWS؟
*أ. AWS Direct Connect
ب. VPC peering
ج. AWS VPN
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/123613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو موقع مادي للبنية التحتية العالمية لـ AWS؟
أ. AWS DataSync
*ب. منطقة AWS (AWS Region)
ج. Amazon Connect
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة حماية معلومات وأنظمة وأصول AWS السحابية الخاصة بها أثناء أداء مهام تقييم المخاطر والتخفيف من حدتها.\nأي ركيزة من ركائز إطار عمل AWS Well-Architected Framework تدعمها هذه الأهداف؟
أ. الموثوقية
*ب. الأمان
ج. التميز التشغيلي
د. كفاءة الأداء
https://www.examtopics.com/discussions/amazon/view/123679-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ما هو الغرض من وجود بوابة إنترنت (internet gateway) داخل VPC؟
أ. لإنشاء اتصال VPN بـ VPC
*ب. للسماح بالاتصال بين VPC والإنترنت
ج. لفرض قيود على عرض النطاق الترددي لحركة مرور الإنترنت
د. لموازنة حركة مرور الإنترنت عبر مثيلات Amazon EC2
https://www.examtopics.com/discussions/amazon/view/123467-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتشغيل تطبيق متجانس (monolithic) محليًا لا يتوسع ويصعب صيانته. لدى الشركة خطة لترحيل التطبيق إلى AWS وتقسيم التطبيق إلى خدمات مصغرة (microservices).\nأي أفضل ممارسة من إطار عمل AWS Well-Architected Framework تتبعها الشركة بهذه الخطة؟
أ. دمج الاختبار الوظيفي كجزء من نشر AWS.
ب. استخدام الأتمتة لنشر التغييرات.
ج. نشر التطبيق في مواقع متعددة.
*د. تنفيذ تبعيات غير محكمة (loosely coupled dependencies).
https://www.examtopics.com/discussions/amazon/view/123680-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة حساب AWS. تريد الشركة تدقيق تفاصيل تدوير كلمة المرور ومفتاح الوصول لأغراض الامتثال.\nأي خدمة أو أداة AWS ستلبي هذا المطلب؟
أ. IAM Access Analyzer
ب. AWS Artifact
*ج. تقرير بيانات اعتماد IAM (IAM credential report)
د. AWS Audit Manager
https://www.examtopics.com/discussions/amazon/view/123614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تلقي إشعار عند الوصول إلى حد تكلفة AWS محدد.\nأي خدمات أو أدوات AWS يمكن للشركة استخدامها لتلبية هذا المطلب؟ (اختر اثنين)
أ. Amazon Simple Queue Service (Amazon SQS)
*ب. AWS Budgets
ج. Cost Explorer
*د. Amazon CloudWatch
هـ. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/123563-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو مورد AWS يقدم إجابات للأسئلة الأكثر شيوعًا المتعلقة بالأمان التي تتلقاها AWS من مستخدميها؟
أ. AWS Artifact
ب. Amazon Connect
ج. AWS Chatbot
*د. AWS Knowledge Center
https://www.examtopics.com/discussions/amazon/view/123440-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي المهام هي مسؤوليات العميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟ (اختر اثنين)
*أ. تكوين جدار حماية مجموعة الأمان (security group) الذي توفره AWS.
*ب. تصنيف أصول الشركة في سحابة AWS.
ج. تحديد مناطق التوفر (Availability Zones) التي سيتم استخدامها دلاء Amazon S3.
د. تصحيح أو ترقية Amazon DynamoDB.
هـ. تحديد مثيلات Amazon EC2 لتشغيل AWS Lambda عليها.
https://www.examtopics.com/discussions/amazon/view/123758-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هي ركائز إطار عمل AWS Well-Architected Framework؟ (اختر اثنين)
أ. التوفر
*ب. الموثوقية
ج. قابلية التوسع
د. التصميم سريع الاستجابة
*هـ. التميز التشغيلي
https://www.examtopics.com/discussions/amazon/view/123564-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS تُستخدم لإرسال رسائل نصية ورسائل بريد إلكتروني من التطبيقات الموزعة؟
*أ. Amazon Simple Notification Service (Amazon SNS)
ب. Amazon Simple Email Service (Amazon SES)
ج. تنبيهات Amazon CloudWatch
د. Amazon Simple Queue Service (Amazon SQS)
https://www.examtopics.com/discussions/amazon/view/123480-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يحتاج مستخدم إلى وصول برمجي (programmatic access) إلى موارد AWS عبر AWS CLI أو AWS API.\nأي خيار سيزود المستخدم بالوصول المناسب؟
أ. Amazon Inspector
*ب. مفاتيح الوصول (Access keys)
ج. مفاتيح SSH العمومية
د. مفاتيح AWS Key Management Service (AWS KMS)
https://www.examtopics.com/discussions/amazon/view/123691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تدير شركة آلاف المحاكاة المتزامنة باستخدام AWS Batch. كل محاكاة هي عديمة الحالة (stateless) ومتسامحة مع الأخطاء (fault tolerant) وتعمل لمدة تصل إلى 3 ساعات.\nأي نموذج تسعير يمكن الشركة من تحسين التكاليف وتلبية هذه المتطلبات؟
أ. Reserved Instances
*ب. Spot Instances
ج. On-Demand Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123847-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ماذا يعني مفهوم الرشاقة (agility) في الحوسبة السحابية لـ AWS؟ (اختر اثنين)
*أ. السرعة التي يتم بها تنفيذ موارد AWS
ب. السرعة التي تنشئ بها AWS مناطق AWS جديدة
*ج. القدرة على التجربة بسرعة
د. التخلص من السعة المهدرة
هـ. انخفاض تكلفة الدخول إلى الحوسبة السحابية
https://www.examtopics.com/discussions/amazon/view/123423-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى منع هجمات حقن SQL (SQL injection).\nأي خدمة أو ميزة AWS يمكنها تلبية هذا المطلب؟
*أ. AWS WAF
ب. AWS Shield
ج. قوائم التحكم بالوصول إلى الشبكة (Network ACLs)
د. مجموعات الأمان (Security groups)
https://www.examtopics.com/discussions/amazon/view/123632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS تحدد ما إذا كان دلو Amazon S3 أو دور IAM قد تمت مشاركته مع كيان خارجي؟
أ. AWS Service Catalog
ب. AWS Systems Manager
*ج. AWS IAM Access Analyzer
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123692-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يحتاج ممارس سحابي (cloud practitioner) إلى الحصول على تقارير الامتثال الخاصة بـ AWS قبل ترحيل بيئة إلى سحابة AWS.\nكيف يمكن إنشاء هذه التقارير؟
أ. الاتصال بفريق الامتثال في AWS.
*ب. تنزيل التقارير من AWS Artifact.
ج. فتح حالة مع AWS Support.
د. إنشاء التقارير باستخدام Amazon Macie.
https://www.examtopics.com/discussions/amazon/view/123693-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: قامت شركة تجارة إلكترونية بترحيل البنية التحتية لتكنولوجيا المعلومات الخاصة بها من مركز بيانات محلي إلى سحابة AWS.\nأي تكلفة هي المسؤولية المباشرة للشركة؟
*أ. تكلفة تراخيص برامج التطبيقات
ب. تكلفة الأجهزة (hardware) الخاصة بالبنية التحتية على AWS
ج. تكلفة الطاقة لخوادم AWS
د. تكلفة الأمان المادي لمركز بيانات AWS
https://www.examtopics.com/discussions/amazon/view/123694-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بإعداد AWS Identity and Access Management (IAM) على حساب AWS.\nأي توصية تتوافق مع أفضل ممارسات أمان IAM؟
أ. استخدام مفاتيح الوصول الخاصة بمستخدم الجذر (root user) للحساب للمهام الإدارية.
ب. منح أذونات واسعة النطاق حتى يتمكن جميع موظفي الشركة من الوصول إلى الموارد التي يحتاجونها.
*ج. تشغيل المصادقة متعددة العوامل (MFA) لمزيد من الأمان أثناء عملية تسجيل الدخول.
د. تجنب تدوير بيانات الاعتماد لمنع حدوث مشكلات في التطبيقات الإنتاجية.
https://www.examtopics.com/discussions/amazon/view/123695-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تشير المرونة (Elasticity) في سحابة AWS إلى أي من التالي؟ (اختر اثنين)
أ. مدى السرعة التي يمكن بها إعادة تشغيل مثيل Amazon EC2
*ب. القدرة على تحديد الحجم المناسب (rightsize) للموارد مع تغير الطلب
ج. الحد الأقصى من ذاكرة الوصول العشوائي (RAM) التي يمكن لمثيل Amazon EC2 استخدامها
د. نموذج الفوترة عند الدفع عند الاستخدام (pay-as-you-go)
*هـ. مدى سهولة شراء الموارد عند الحاجة إليها
https://www.examtopics.com/discussions/amazon/view/123412-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة تمكن العملاء من تدقيق استدعاءات API (API calls) في حسابات AWS الخاصة بهم؟
*أ. AWS CloudTrail
ب. AWS Trusted Advisor
ج. Amazon Inspector
د. AWS X-Ray
https://www.examtopics.com/discussions/amazon/view/123877-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ما هي مسؤولية العميل عند استخدام AWS Lambda وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
*أ. إدارة الكود داخل دالة Lambda
ب. التأكد من أن الأجهزة تعمل في مركز البيانات
ج. تصحيح نظام التشغيل
د. إيقاف تشغيل دوال Lambda عندما لا تكون قيد الاستخدام
https://www.examtopics.com/discussions/amazon/view/123716-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة 5 تيرابايت من البيانات المخزنة في Amazon S3. تخطط الشركة لتشغيل استعلامات على البيانات من حين لآخر لتحليلها.\nأي خدمة AWS يجب على الشركة استخدامها لتشغيل هذه الاستعلامات بأكثر طريقة فعالة من حيث التكلفة؟
أ. Amazon Redshift
*ب. Amazon Athena
ج. Amazon Kinesis
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123715-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكن استخدامها بدون تكلفة إضافية؟
أ. Amazon SageMaker
ب. AWS Config
*ج. AWS Organizations
د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/123717-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي قدرة من قدرات إطار اعتماد سحابة AWS (AWS CAF) تنتمي إلى منظور الأشخاص (people perspective)؟
أ. بنية البيانات
ب. إدارة الأحداث
*ج. إلمام السحابة (Cloud fluency)
د. الشراكة الاستراتيجية
https://www.examtopics.com/discussions/amazon/view/123718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تقديم التزام مسبق (upfront commitment) للاستخدام المستمر لمثيلات Amazon EC2 الإنتاجية الخاصة بها مقابل الحصول على تكلفة إجمالية مخفضة.\nأي خيارات التسعير تلبي هذه المتطلبات بأقل تكلفة؟ (اختر اثنين)
أ. Spot Instances
ب. On-Demand Instances
*ج. Reserved Instances
*د. Savings Plans
هـ. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123719-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل قواعد البيانات العلائقية المحلية (on-premises) إلى سحابة AWS. تريد الشركة استخدام بنية تحتية قريبة قدر الإمكان من موقعها الجغرافي الحالي.\nأي خدمة أو مورد AWS يجب على الشركة استخدامه لتحديد منطقة نشر Amazon RDS الخاصة بها؟
أ. Amazon Connect
ب. AWS Wavelength
*ج. مناطق AWS (AWS Regions)
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/123785-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستكشف شركة استخدام سحابة AWS وتحتاج إلى إنشاء تقدير تكلفة لمشروع ما قبل توفير البنية التحتية.\nأي خدمة أو ميزة AWS يمكن استخدامها لتقدير التكاليف قبل النشر؟
أ. AWS Free Tier
*ب. AWS Pricing Calculator
ج. AWS Billing and Cost Management
د. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/123720-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة ببناء تطبيق يحتاج إلى تسليم الصور ومقاطع الفيديو عالميًا بأقل زمن وصول (latency).\nأي نهج يمكن للشركة استخدامه لتحقيق ذلك بطريقة فعالة من حيث التكلفة؟
*أ. تسليم المحتوى من خلال Amazon CloudFront.
ب. تخزين المحتوى على Amazon S3 وتمكين النسخ المتماثل عبر المناطق (S3 cross-region replication).
ج. تنفيذ VPN عبر مناطق AWS متعددة.
د. تسليم المحتوى من خلال AWS PrivateLink.
https://www.examtopics.com/discussions/amazon/view/124319-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو فائدة من وفورات الحجم (economies of scale) بناءً على مزايا الحوسبة السحابية؟
أ. القدرة على مقايضة النفقات المتغيرة بنفقات ثابتة
ب. زيادة السرعة والرشاقة
*ج. انخفاض التكاليف المتغيرة مقارنة بالتكاليف الثابتة
د. زيادة التكاليف التشغيلية عبر مراكز البيانات
https://www.examtopics.com/discussions/amazon/view/123959-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو إطار تطوير برمجيات (software development framework) يمكن للشركة استخدامه لتعريف موارد السحابة ككود (code) وتوفير الموارد من خلال AWS CloudFormation؟
أ. AWS CLI
ب. AWS Developer Center
*ج. AWS Cloud Development Kit (AWS CDK)
د. AWS CodeStar
https://www.examtopics.com/discussions/amazon/view/123762-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتطوير تطبيق يستخدم خدمات AWS متعددة. يحتاج التطبيق إلى استخدام بيانات اعتماد مؤقتة ومحدودة الصلاحية للمصادقة مع واجهات برمجة تطبيقات AWS الأخرى.\nأي خدمة أو ميزة AWS يجب على الشركة استخدامها لتلبية متطلبات المصادقة هذه؟
أ. Amazon API Gateway
ب. مستخدمو IAM
*ج. AWS Security Token Service (AWS STS)
د. ملفات تعريف مثيل IAM (IAM instance profiles)
https://www.examtopics.com/discussions/amazon/view/123721-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS هي خدمة إدارة وضع الأمان السحابي (CSPM) التي تجمع التنبيهات من خدمات AWS المختلفة ومنتجات الشركاء في تنسيق موحد؟
*أ. AWS Security Hub
ب. AWS Trusted Advisor
ج. Amazon EventBridge
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123550-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يتم توفيرها دائمًا بدون تكلفة؟
أ. Amazon S3
*ب. AWS Identity and Access Management (IAM)
ج. موازنات التحميل المرنة (Elastic Load Balancers)
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/123551-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لتقليل التكاليف، تخطط شركة لترحيل قاعدة بيانات NoSQL إلى AWS.\nأي خدمة AWS مدارة بالكامل (fully managed) ويمكنها قياس سعة الإنتاجية (throughput capacity) تلقائيًا لتلبية متطلبات أعباء عمل قاعدة البيانات؟
أ. Amazon Redshift
ب. Amazon Aurora
*ج. Amazon DynamoDB
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123552-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستخدم شركة Amazon DynamoDB.\nأي مهمة هي مسؤولية الشركة، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. تصحيح نظام التشغيل.
ب. توفير المضيفات (hosts).
*ج. إدارة أذونات الوصول إلى قاعدة البيانات.
د. تأمين نظام التشغيل.
https://www.examtopics.com/discussions/amazon/view/124402-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة بيئة اختبار AWS. تخطط شركة لاختبار تطبيق داخل AWS. يمكن مقاطعة اختبار التطبيق ولا يحتاج إلى العمل بشكل مستمر.\nأي خيار شراء Amazon EC2 سيلبي هذه المتطلبات بأكبر قدر من الفعالية من حيث التكلفة؟
أ. On-Demand Instances
ب. Dedicated Instances
*ج. Spot Instances
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/124403-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تمنح المستخدمين القدرة على اكتشاف وحماية البيانات الحساسة المخزنة في دلاء Amazon S3؟
*أ. Amazon Macie
ب. Amazon Detective
ج. Amazon GuardDuty
د. AWS IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/123736-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من الخدمات التالية يمكن استخدامها لمنع حركة مرور الشبكة إلى مثيل؟ (اختر اثنين)
*أ. مجموعات الأمان (Security groups)
ب. سجلات تدفق Amazon Virtual Private Cloud (Amazon VPC) flow logs
*ج. قوائم التحكم بالوصول إلى الشبكة (Network ACLs)
د. Amazon CloudWatch
هـ. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/123965-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكنها تحديد متى تم إنهاء (terminated) مثيل Amazon EC2؟
أ. AWS Identity and Access Management (IAM)
*ب. AWS CloudTrail
ج. AWS Compute Optimizer
د. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/123966-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو قاعدة بيانات متوافقة مع MySQL ومدارة بالكامل (fully managed)؟
أ. Amazon S3
ب. Amazon DynamoDB
ج. Amazon Redshift
*د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/123969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تدعم بنية هجينة (hybrid architecture) تمنح المستخدمين القدرة على توسيع بنية AWS التحتية وخدمات AWS وواجهات برمجة التطبيقات (APIs) والأدوات إلى مراكز البيانات أو بيئات التموقع المشترك (co-location) أو المرافق المحلية (on-premises)؟
أ. AWS Snowmobile
ب. AWS Local Zones
*ج. AWS Outposts
د. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/123971-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكنها تشغيل قاعدة بيانات PostgreSQL مُدارة توفر معالجة المعاملات عبر الإنترنت (OLTP)؟
أ. Amazon DynamoDB
ب. Amazon Athena
*ج. Amazon RDS
د. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/123972-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة توفير أجهزة سطح مكتب Windows افتراضية وتطبيقات مُدارة لموظفيها عن بُعد عبر اتصالات شبكة آمنة.\nأي خدمات AWS يمكن للشركة استخدامها لتلبية هذه المتطلبات؟ (اختر اثنين)
أ. Amazon Connect
*ب. Amazon AppStream 2.0
*ج. Amazon WorkSpaces
د. AWS Site-to-Site VPN
هـ. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/123973-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة مراقبة مجموعات الأمان (security groups) التي تم تكوينها بشكل خاطئ وتسمح بالوصول غير المقيد إلى منافذ محددة.\nأي خدمة AWS ستلبي هذا المطلب؟
*أ. AWS Trusted Advisor
ب. Amazon CloudWatch
ج. Amazon GuardDuty
د. AWS Health Dashboard
https://www.examtopics.com/discussions/amazon/view/123528-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS هي قاعدة بيانات من نوع مفتاح-قيمة (key-value database) توفر زمن وصول أقل من ميلي ثانية (sub-millisecond latency) على نطاق واسع؟
*أ. Amazon DynamoDB
ب. Amazon Aurora
ج. Amazon DocumentDB (with MongoDB compatibility)
د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/123282-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بنشر مشروع بحث في مجال التعلم الآلي (ML) سيتطلب قدرًا كبيرًا من الطاقة الحاسوبية على مدى عدة أشهر. لا يلزم تشغيل مهام معالجة التعلم الآلي في أوقات محددة.\nأي خيار شراء مثيل Amazon EC2 سيلبي هذه المتطلبات بأقل تكلفة؟
أ. On-Demand Instances
*ب. Spot Instances
ج. Reserved Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123450-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمات أو ميزات AWS توفر حلول التعافي من الكوارث (disaster recovery) لمثيلات Amazon EC2؟ (اختر اثنين)
أ. EC2 Reserved Instances
*ب. صور أمازون ماشين (EC2 Amazon Machine Images - AMIs)
*ج. لقطات Amazon Elastic Block Store (Amazon EBS) snapshots
د. AWS Shield
هـ. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/123975-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS توفر الوصول إلى أدوات وموارد AWS عبر سطر الأوامر (command line) مباشرة من متصفح الويب؟
أ. AWS CloudHSM
*ب. AWS CloudShell
ج. Amazon WorkSpaces
د. AWS Cloud Map
https://www.examtopics.com/discussions/amazon/view/125683-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يحتاج مهندس شبكات إلى بناء بنية سحابية هجينة تربط الشبكات المحلية بسحابة AWS باستخدام AWS Direct Connect. لدى الشركة عدد قليل من VPCs في منطقة AWS واحدة وتتوقع زيادة عدد VPCs إلى المئات بمرور الوقت.\nأي خدمة أو ميزة AWS يجب على المهندس استخدامها لتبسيط هذا الاتصال وتوسيع نطاقه مع زيادة عدد VPCs؟
أ. نقاط نهاية VPC (VPC endpoints)
*ب. AWS Transit Gateway
ج. Amazon Route 53
د. AWS Secrets Manager
https://www.examtopics.com/discussions/amazon/view/123722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تقييم جاهزيتها التشغيلية. كما تريد تحديد وتخفيف أي مخاطر تشغيلية قبل إطلاق منتج جديد.\nأي خطة دعم AWS تقدم إرشادات ودعمًا لهذا النوع من الأحداث بدون تكلفة إضافية؟
أ. AWS Business Support
ب. AWS Basic Support
ج. AWS Developer Support
*د. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/125425-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة وضع جدول زمني لتدوير بيانات اعتماد (credentials) مستخدم قاعدة البيانات.\nأي خدمة AWS ستدعم هذا المطلب بأقل قدر من العبء التشغيلي (operational overhead)؟
أ. AWS Systems Manager
*ب. AWS Secrets Manager
ج. AWS License Manager
د. AWS Managed Services
https://www.examtopics.com/discussions/amazon/view/125684-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS يمكن استخدامها لإنشاء اتصال خاص بين عبء عمل محلي (on-premises) وعبء عمل في سحابة AWS؟
أ. Amazon Route 53
ب. Amazon Macie
*ج. AWS Direct Connect
د. AWS PrivateLink
https://www.examtopics.com/discussions/amazon/view/123418-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تُستخدم لتوفير التشفير لـ Amazon EBS؟
أ. AWS Certificate Manager
ب. AWS Systems Manager
*ج. AWS KMS
د. AWS Config
https://www.examtopics.com/discussions/amazon/view/123723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إدارة موارد AWS السحابية الخاصة بها من خلال واجهة ويب.\nأي خدمة AWS ستلبي هذا المطلب؟
*أ. AWS Management Console
ب. AWS CLI
ج. AWS SDK
د. AWS Cloud9
https://www.examtopics.com/discussions/amazon/view/125685-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هي مزايا سحابة AWS؟ (اختر اثنين)
أ. مقايضة النفقات المتغيرة بنفقات رأسمالية
*ب. وفورات الحجم العالية (High economies of scale)
*ج. الإطلاق عالميًا في دقائق
د. التركيز على إدارة البنية التحتية للأجهزة
هـ. التوفير المفرط (Overprovision) لضمان السعة
https://www.examtopics.com/discussions/amazon/view/124444-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي فائدة من فوائد سحابة AWS تظهر من خلال قدرة البنية على تحمل الأعطال بأقل وقت توقف؟
أ. الرشاقة
ب. المرونة
ج. قابلية التوسع
*د. التوفر العالي
https://www.examtopics.com/discussions/amazon/view/123529-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يحتاج مطور إلى الحفاظ على بنية تحتية لبيئة التطوير وبنية تحتية لبيئة الإنتاج بطريقة قابلة للتكرار (repeatable fashion).\nأي خدمة AWS يجب على المطور استخدامها لتلبية هذه المتطلبات؟
أ. AWS Ground Station
ب. AWS Shield
ج. AWS IoT Device Defender
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/124445-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة هي مسؤولية العميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. الحفاظ على أمان سحابة AWS.
*ب. تكوين جدران الحماية (firewalls) والشبكات.
ج. تصحيح نظام تشغيل مثيلات Amazon RDS.
د. تنفيذ الضوابط المادية والبيئية.
https://www.examtopics.com/discussions/amazon/view/125689-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تساعد في تقديم تطبيقات عالية التوفر مع تجاوز الفشل السريع (fast failover) للهندسات متعددة المناطق (multi-Region) ومتعددة مناطق التوفر (Multi-AZ)؟
أ. AWS WAF
*ب. AWS Global Accelerator
ج. AWS Shield
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/123611-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة مجموعة من تطبيقات التجارة الإلكترونية. يجب أن تكون التطبيقات قادرة على إرسال الرسائل لبعضها البعض.\nأي خدمة AWS تلبي هذا المطلب؟
أ. AWS Auto Scaling
ب. Elastic Load Balancing
*ج. Amazon Simple Queue Service (Amazon SQS)
د. Amazon Kinesis Data Streams
https://www.examtopics.com/discussions/amazon/view/125690-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ما هي فوائد الفوترة الموحدة (consolidated billing) لخدمات AWS السحابية؟ (اختر اثنين)
*أ. الخصومات على الحجم (Volume discounts)
ب. رسوم إضافية ضئيلة للاستخدام
*ج. فاتورة واحدة لحسابات متعددة
د. خيارات سداد بالتقسيط
هـ. إنشاء ميزانية تكلفة واستخدام مخصصة
https://www.examtopics.com/discussions/amazon/view/124496-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يريد مستخدم مراجعة جميع دلاء Amazon S3 التي تحتوي على قوائم التحكم بالوصول (ACLs) وسياسات دلو S3 في وحدة تحكم S3.\nأي خدمة أو مورد AWS سيلبي هذا المطلب؟
أ. نقاط وصول S3 متعددة المناطق (S3 Multi-Region Access Points)
ب. S3 Storage Lens
ج. AWS IAM Identity Center (AWS Single Sign-On)
*د. Access Analyzer for S3
https://www.examtopics.com/discussions/amazon/view/123420-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ما هو أفضل مورد للمستخدم للعثور على معلومات وتقارير متعلقة بالامتثال (compliance) حول AWS؟
*أ. AWS Artifact
ب. AWS Marketplace
ج. Amazon Inspector
د. AWS Support
https://www.examtopics.com/discussions/amazon/view/123615-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تمكن الشركات من نشر تطبيق قريب من المستخدمين النهائيين؟
*أ. Amazon CloudFront
ب. AWS Auto Scaling
ج. AWS AppSync
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/123616-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS تعمل على تحسين أداء الشبكة عن طريق إرسال حركة المرور عبر البنية التحتية لشبكة AWS العالمية؟
أ. جدول التوجيه (Route table)
ب. AWS Transit Gateway
*ج. AWS Global Accelerator
د. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/123617-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS توفر تخزين كائنات (object storage) عالي المتانة (highly durable)؟
*أ. Amazon S3
ب. Amazon Elastic File System (Amazon EFS)
ج. Amazon Elastic Block Store (Amazon EBS)
د. Amazon FSx
https://www.examtopics.com/discussions/amazon/view/123618-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مسؤولية تقع على عاتق AWS عندما تستضيف شركة قواعد بياناتها على مثيلات Amazon EC2؟
أ. النسخ الاحتياطي لقاعدة البيانات
ب. تصحيحات برامج قاعدة البيانات
ج. تصحيحات نظام التشغيل
*د. تثبيتات نظام التشغيل
https://www.examtopics.com/discussions/amazon/view/125691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هي مزايا الانتقال إلى سحابة AWS؟ (اختر اثنين)
أ. القدرة على تحويل المسؤولية عن جميع جوانب الأمان إلى AWS.
*ب. القدرة على استخدام نموذج الدفع عند الاستخدام (pay-as-you-go).
ج. القدرة على التحكم الكامل في البنية التحتية المادية.
*د. عدم الاضطرار بعد الآن إلى تخمين السعة المطلوبة.
هـ. عدم القلق بعد الآن بشأن ضوابط وصول المستخدمين.
https://www.examtopics.com/discussions/amazon/view/125692-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS هي خدمة تخزين سحابية هجينة توفر للمستخدمين المحليين (on-premises) وصولاً إلى سعة تخزين سحابية غير محدودة تقريبًا؟
أ. AWS DataSync
ب. Amazon S3 Glacier
*ج. AWS Storage Gateway
د. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/124497-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة للترحيل إلى AWS وتريد إنشاء تقديرات التكلفة لحالات استخدام AWS الخاصة بها.\nأي خدمة أو أداة AWS يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Pricing Calculator
ب. Amazon CloudWatch
ج. AWS Cost Explorer
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/123620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي أداة يجب على المطور استخدامها لدمج ميزات خدمة AWS مباشرة في تطبيق؟
*أ. AWS Software Development Kit
ب. AWS CodeDeploy
ج. AWS Lambda
د. AWS Batch
https://www.examtopics.com/discussions/amazon/view/125693-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو مبدأ تصميم موصى به في إطار عمل AWS Well-Architected Framework؟
أ. تقليل وقت التوقف عن طريق إجراء تغييرات البنية التحتية بشكل غير متكرر وبكميات كبيرة.
ب. استثمار الوقت في تكوين البنية التحتية يدويًا.
*ج. تعلم التحسين من حالات الفشل التشغيلي.
د. استخدام تصميم التطبيق المتجانس (monolithic) من أجل المركزية.
https://www.examtopics.com/discussions/amazon/view/124504-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: استخدام AWS Identity and Access Management (IAM) لمنح الوصول فقط إلى الموارد اللازمة لأداء مهمة هو مفهوم يُعرف باسم:
أ. الوصول المقيد (restricted access)
ب. الوصول عند الحاجة (as-needed access)
*ج. وصول أقل الامتيازات (least privilege access)
د. الوصول بالرمز (token access)
https://www.examtopics.com/discussions/amazon/view/125694-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو أداة AWS يمكن استخدامها لإعداد جدار حماية (firewall) للتحكم في حركة المرور الداخلة والخارجة من شبكة فرعية (subnet) في Amazon VPC؟
أ. مجموعة أمان (Security group)
ب. AWS WAF
ج. AWS Firewall Manager
*د. قائمة التحكم بالوصول إلى الشبكة (Network ACL)
https://www.examtopics.com/discussions/amazon/view/123621-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تشغيل مستودع بيانات (data warehouse) لتحليل البيانات دون إدارة البنية التحتية لمستودع البيانات.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. Amazon Aurora
*ب. Amazon Redshift Serverless
ج. AWS Lambda
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/123622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: كيف تساعد الحوسبة السحابية لـ AWS الشركات على تقليل التكاليف؟ (اختر اثنين)
أ. تفرض AWS نفس الأسعار للخدمات في كل منطقة AWS.
*ب. تمكن AWS من تعديل السعة حسب الطلب.
ج. تقدم AWS خصومات لمثيلات Amazon EC2 التي تظل خاملة لأكثر من أسبوع واحد.
د. لا تفرض AWS رسومًا على البيانات المرسلة من سحابة AWS إلى الإنترنت.
*هـ. تلغي AWS العديد من تكاليف بناء وصيانة مراكز البيانات المحلية.
https://www.examtopics.com/discussions/amazon/view/125700-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة منح المستخدمين في حساب AWS واحد حق الوصول إلى الموارد في حساب AWS آخر. لا يمتلك المستخدمون حاليًا إذنًا للوصول إلى الموارد.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. مجموعة IAM (IAM group)
*ب. دور IAM (IAM role)
ج. علامة IAM (IAM tag)
د. IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/125809-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة هي مسؤولية AWS عند استخدام خدمات AWS؟
أ. إدارة أذونات مستخدم IAM
ب. إنشاء قواعد مجموعة الأمان للوصول الصادر (outbound access)
*ج. صيانة الضوابط المادية والبيئية
د. تطبيق تصحيحات نظام التشغيل على مثيل Amazon EC2
https://www.examtopics.com/discussions/amazon/view/123623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة أتمتة نشر البنية التحتية باستخدام البنية التحتية ككود (IaC). تريد الشركة توسيع نطاق أكوام الإنتاج (production stacks) بحيث يمكن نشرها في مناطق AWS متعددة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon CloudWatch
ب. AWS Config
ج. AWS Trusted Advisor
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/123624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو قدرة منظور المنصة (platform perspective) في إطار اعتماد سحابة AWS (AWS CAF)؟
*أ. بنية البيانات (Data architecture)
ب. حماية البيانات (Data protection)
ج. حوكمة البيانات (Data governance)
د. علم البيانات (Data science)
https://www.examtopics.com/discussions/amazon/view/123729-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتشغيل عبء عمل في سحابة AWS.\nأي أفضل ممارسة لـ AWS تضمن البنية الأكثر فعالية من حيث التكلفة لعبء العمل؟
أ. الاقتران غير المحكم (Loose coupling)
*ب. التحجيم المناسب (Rightsizing)
ج. التخزين المؤقت (Caching)
د. التكرار (Redundancy)
https://www.examtopics.com/discussions/amazon/view/124553-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستخدم شركة خدمة طرف ثالث لعمل نسخة احتياطية (backup) من 10 تيرابايت من البيانات إلى مكتبة أشرطة (tape library). خادم النسخ الاحتياطي المحلي ينفد منه المساحة. تريد الشركة استخدام خدمات AWS للنسخ الاحتياطي دون تغيير سير العمل الحالي للنسخ الاحتياطي.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Elastic Block Store (Amazon EBS)
*ب. AWS Storage Gateway
ج. Amazon Elastic Container Service (Amazon ECS)
د. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/124134-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي أداة AWS تمنح المستخدمين القدرة على تخطيط استخدام الخدمة وتكاليف الخدمة وحجوزات المثيلات (instance reservations)، وتسمح لهم أيضًا بتعيين تنبيهات مخصصة عندما تتجاوز تكاليفهم أو استخدامهم الحدود المحددة؟
أ. Cost Explorer
*ب. AWS Budgets
ج. AWS Cost and Usage Report
د. تقارير Reserved Instance
https://www.examtopics.com/discussions/amazon/view/123681-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي المهام هي مسؤولية العميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟ (اختر اثنين)
أ. إنشاء البنية التحتية العالمية.
*ب. إجراء تشفير البيانات من جانب العميل (client-side data encryption).
*ج. تكوين بيانات اعتماد IAM.
د. تأمين مواقع الحافة (edge locations).
هـ. تصحيح مثيلات Amazon RDS DB.
https://www.examtopics.com/discussions/amazon/view/125703-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تم تعيين مطور من قبل شركة كبيرة ويحتاج إلى بيانات اعتماد AWS.\nأي من أفضل ممارسات الأمان التي يجب اتباعها؟ (اختر اثنين)
*أ. منح المطور حق الوصول فقط إلى موارد AWS اللازمة لأداء الوظيفة.
ب. مشاركة بيانات اعتماد المستخدم الجذر (root user) للحساب مع المطور.
ج. إضافة المطور إلى مجموعة المسؤولين في AWS IAM.
د. تكوين سياسة كلمة مرور تضمن عدم إمكانية تغيير كلمة مرور المطور.
*هـ. التأكد من أن سياسة كلمة مرور الحساب تتطلب حدًا أدنى للطول.
https://www.examtopics.com/discussions/amazon/view/124048-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة حسابات AWS متعددة تتضمن أعباء عمل حاسوبية لا يمكن مقاطعتها. تريد الشركة الحصول على خصومات فوترة بناءً على استخدام الشركة لخدمات AWS.\nأي ميزة أو خيار شراء AWS سيلبي هذه المتطلبات؟
أ. وضع علامات على الموارد (Resource tagging)
*ب. الفوترة الموحدة (Consolidated billing)
ج. تسعير الدفع عند الاستخدام (Pay-as-you-go pricing)
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/123730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يريد مستخدم السماح للتطبيقات التي تعمل على مثيل Amazon EC2 بإجراء استدعاءات لخدمات AWS الأخرى. يجب أن يكون الوصول الممنوح آمنًا.\nأي خدمة أو ميزة AWS يجب استخدامها؟
أ. مجموعات الأمان (Security groups)
ب. AWS Firewall Manager
*ج. أدوار IAM (IAM roles)
د. مفاتيح SSH لمستخدم IAM
https://www.examtopics.com/discussions/amazon/view/123731-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة خادم ملفات Windows مُدار بالكامل (fully managed Windows file server) لتطبيقاتها القائمة على Windows.\nأي خدمة AWS ستلبي هذا المطلب؟
*أ. Amazon FSx
ب. Amazon Elastic Kubernetes Service (Amazon EKS)
ج. Amazon Elastic Container Service (Amazon ECS)
د. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/124131-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل عبء عمل NFS المحلي (on-premises) إلى AWS.\nأي نوع من AWS Storage Gateway يجب على الشركة استخدامه لتلبية هذا المطلب؟
أ. Tape Gateway
ب. Volume Gateway
ج. Amazon FSx File Gateway
*د. Amazon S3 File Gateway
https://www.examtopics.com/discussions/amazon/view/123798-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تتبع النشاط في حسابات AWS الخاصة بها، وتحتاج إلى معرفة وقت إجراء استدعاء API (API call) ضد موارد AWS الخاصة بها.\nأي أداة أو خدمة AWS يمكن استخدامها لتلبية هذه المتطلبات؟
أ. Amazon CloudWatch
ب. Amazon Inspector
*ج. AWS CloudTrail
د. AWS IAM
https://www.examtopics.com/discussions/amazon/view/123799-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة تطبيق لا يمكن مقاطعته (uninterruptible application) يعمل على مثيلات Amazon EC2. يقوم التطبيق باستمرار بمعالجة قائمة انتظار (backlog) من الملفات في قائمة انتظار Amazon Simple Queue Service (Amazon SQS). من المتوقع أن يستمر هذا الاستخدام في النمو لسنوات.\nما هو نموذج شراء مثيل EC2 الأكثر فعالية من حيث التكلفة لتلبية هذه المتطلبات؟
أ. Spot Instances
ب. On-Demand Instances
*ج. Savings Plans
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة خدمة AWS لتقديم توصيات المنتج (product recommendations) بناءً على بيانات عملائها.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. Amazon Polly
*ب. Amazon Personalize
ج. Amazon Comprehend
د. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/123800-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة للترحيل إلى سحابة AWS. تقوم الشركة بتحديد فجوات قدراتها (capability gaps) باستخدام وجهات نظر إطار اعتماد سحابة AWS (AWS CAF).\nأي مرحلة من مراحل رحلة التحول السحابي (cloud transformation journey) تتضمن أنشطة التحديد هذه؟
أ. التصور (Envision)
*ب. المواءمة (Align)
ج. التوسع (Scale)
د. الإطلاق (Launch)
https://www.examtopics.com/discussions/amazon/view/123916-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة وسائط اجتماعية حماية تطبيق الويب الخاص بها من الاستغلالات الشائعة للويب مثل حقن SQL والبرمجة النصية عبر المواقع (cross-site scripting).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon Inspector
*ب. AWS WAF
ج. Amazon GuardDuty
د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/123917-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS مُدارة بالكامل (fully managed) تساعد في إنشاء واختبار وإدارة صور Amazon EC2 المخصصة (custom images)؟
*أ. EC2 Image Builder
ب. Amazon Machine Image (AMI)
ج. AWS Launch Wizard
د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/123919-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة عملية آلية (automated process) لفحص مثيلات Amazon EC2 الخاصة بها بشكل مستمر بحثًا عن ثغرات البرامج (software vulnerabilities).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon GuardDuty
*ب. Amazon Inspector
ج. Amazon Detective
د. Amazon Cognito
https://www.examtopics.com/discussions/amazon/view/123920-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى إجراء معالجة البيانات مرة واحدة في الأسبوع، وتستغرق عادةً حوالي 5 ساعات لإكمالها.\nأي خدمة AWS يجب على الشركة استخدامها لعبء العمل هذا؟
أ. AWS Lambda
*ب. Amazon EC2
ج. AWS CodeDeploy
د. AWS Wavelength
https://www.examtopics.com/discussions/amazon/view/123896-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS توفر معلومات سجل (log information) لحركة مرور الشبكة الواردة والصادرة على واجهات الشبكة في VPC؟
أ. Amazon CloudWatch Logs
ب. AWS CloudTrail
*ج. VPC Flow Logs
د. AWS Identity and Access Management (IAM)
https://www.examtopics.com/discussions/amazon/view/123732-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تصميم نظام تخزين مركزي لإدارة بيانات التكوين (configuration data) وكلمات المرور لتطبيقات الأعمال الهامة الخاصة بها.\nأي خدمة أو قدرة AWS ستلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
*أ. AWS Systems Manager Parameter Store
ب. AWS Secrets Manager
ج. AWS Config
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/123897-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة لنشر حاويات (containers) على AWS. تريد الشركة السيطرة الكاملة على موارد الحوسبة التي تستضيف الحاويات. أي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon Elastic Kubernetes Service (Amazon EKS)
ب. AWS Fargate
*ج. Amazon EC2
د. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/125718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS تسمح للمستخدمين بإنشاء حسابات AWS جديدة، وتجميع حسابات متعددة لتنظيم سير العمل، وتطبيق السياسات على مجموعات الحسابات؟
أ. AWS Identity and Access Management (IAM)
ب. AWS Trusted Advisor
ج. AWS CloudFormation
*د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/123921-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تخزين واسترجاع الملفات في Amazon S3 لتطبيقاتها المحلية الحالية باستخدام بروتوكولات نظام ملفات قياسية (industry-standard file system protocols).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS DataSync
ب. AWS Snowball Edge
*ج. Amazon S3 File Gateway
د. AWS Transfer Family
https://www.examtopics.com/discussions/amazon/view/123922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة منع هجمات حقن SQL (SQL injection attacks).\nأي خدمة أو ميزة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
*أ. AWS WAF
ب. قوائم التحكم بالوصول إلى الشبكة (Network ACLs)
ج. مجموعات الأمان (Security groups)
د. AWS Certificate Manager (ACM)
https://www.examtopics.com/discussions/amazon/view/123923-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة أداة موحدة (unified tool) لتوفير طريقة متسقة للتفاعل مع خدمات AWS.\nأي خدمة أو أداة AWS ستلبي هذا المطلب؟
*أ. AWS CLI
ب. Amazon Elastic Container Service (Amazon ECS)
ج. AWS Cloud9
د. AWS Virtual Private Network (AWS VPN)
https://www.examtopics.com/discussions/amazon/view/123924-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تقييم بيئة AWS الخاصة بها وتقديم توصيات بأفضل الممارسات في خمس فئات: التكلفة والأداء وحدود الخدمة والتسامح مع الأخطاء (fault tolerance) والأمان.\nأي خدمة AWS يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Shield
ب. AWS WAF
*ج. AWS Trusted Advisor
د. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/125802-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي منظور في إطار اعتماد سحابة AWS (AWS CAF) يتضمن قدرات إدارة التكوين (configuration management) وإدارة التصحيحات (patch management)؟
أ. المنصة (Platform)
*ب. العمليات (Operations)
ج. الأمان (Security)
د. الحوكمة (Governance)
https://www.examtopics.com/discussions/amazon/view/123925-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة عبء عمل حاسوبي (compute workload) ثابت ويمكن التنبؤ به ولا يمكن مقاطعته.\nأي خيارات شراء مثيل Amazon EC2 تلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟ (اختر اثنين)
أ. On-Demand Instances
*ب. Reserved Instances
ج. Spot Instances
*د. Saving Plans
هـ. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/123425-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي نموذج تسعير Amazon EC2 هو الأكثر كفاءة من حيث التكلفة لعبء عمل لا يمكن مقاطعته (uninterruptible workload) يتم تشغيله مرة واحدة في السنة لمدة 24 ساعة؟
*أ. On-Demand Instances
ب. Reserved Instances
ج. Spot Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/123424-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو مسؤولية مشتركة بين AWS وعملائها بموجب نموذج المسؤولية المشتركة لـ AWS؟
أ. تكوين أنظمة تشغيل مثيلات Amazon EC2
ب. تشفير من جانب خادم نظام ملفات التطبيق
*ج. إدارة التصحيحات (Patch management)
د. أمان البنية التحتية المادية
https://www.examtopics.com/discussions/amazon/view/123930-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل أعباء العمل المحلية (on-premises) إلى سحابة AWS. تريد الشركة فصل أعباء العمل لاسترداد التكاليف (chargeback) إلى أقسام مختلفة.\nأي خدمات أو ميزات AWS ستلبي هذه المتطلبات؟ (اختر اثنين)
أ. مجموعات المواضع (Placement groups)
*ب. الفوترة الموحدة (Consolidated billing)
ج. مواقع الحافة (Edge locations)
د. AWS Config
*هـ. حسابات AWS متعددة (Multiple AWS accounts)
https://www.examtopics.com/discussions/amazon/view/125983-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة هي مسؤولية AWS، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. تمكين تشفير من جانب العميل (client-side encryption) للكائنات المخزنة في Amazon S3.
ب. تكوين سياسات أمان IAM للامتثال لمبدأ الامتيازات الأقل.
ج. تصحيح نظام التشغيل الضيف (guest operating system) على مثيل Amazon EC2.
*د. تطبيق التحديثات على Hypervisor Nitro (Nitro Hypervisor).
https://www.examtopics.com/discussions/amazon/view/123931-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو فائدة من استخدام AWS للحوسبة السحابية؟
أ. مقايضة النفقات المتغيرة بنفقات ثابتة
*ب. تسعير الدفع عند الاستخدام (Pay-as-you-go pricing)
ج. انخفاض السرعة والرشاقة
د. إنفاق الأموال على تشغيل وصيانة مراكز البيانات
https://www.examtopics.com/discussions/amazon/view/123426-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو قدرة منظور الأعمال (business perspective) في إطار اعتماد سحابة AWS (AWS CAF)؟
أ. تطور الثقافة (Culture evolution)
ب. إدارة الأحداث (Event management)
*ج. تحقيق الدخل من البيانات (Data monetization)
د. بنية المنصة (Platform architecture)
https://www.examtopics.com/discussions/amazon/view/123427-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتقييم خطة دعم AWS Business Support الخاصة بها لتحديد ما إذا كانت الخطة لا تزال تلبي احتياجات الشركة. تفكر الشركة في التحول إلى AWS Enterprise Support.\nأي فائدة إضافية ستحصل عليها الشركة مع AWS Enterprise Support؟
أ. مجموعة كاملة من فحوصات AWS Trusted Advisor
ب. الوصول عبر الهاتف والبريد الإلكتروني والدردشة إلى مهندسي دعم السحابة على مدار 24 ساعة طوال أيام الأسبوع
*ج. مدير حساب تقني مخصص (TAM) للمساعدة في المراقبة والتحسين
د. مراجعة استشارية وتوجيه معماري لتطبيقات الشركة
https://www.examtopics.com/discussions/amazon/view/125792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي نموذج تسعير سيقاطع مثيل Amazon EC2 قيد التشغيل إذا أصبحت السعة غير متوفرة مؤقتًا؟
أ. On-Demand Instances
ب. Standard Reserved Instances
*ج. Spot Instances
د. Convertible Reserved Instances
https://www.examtopics.com/discussions/amazon/view/125804-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي الخيارات هي قدرات منظور الأمان (security perspective) في إطار اعتماد سحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. قابلية المراقبة (Observability)
ب. إدارة الحوادث والمشكلات
*ج. الاستجابة للحوادث (Incident response)
*د. حماية البنية التحتية (Infrastructure protection)
هـ. التوفر والاستمرارية (Availability and continuity)
https://www.examtopics.com/discussions/amazon/view/125805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تشغيل عبء العمل الخاص بها على مثيلات Amazon EC2 لأكثر من عام واحد. سيعمل عبء العمل هذا بشكل مستمر.\nأي خيار يقدم سعرًا مخفضًا لكل ساعة مقارنة بسعر On-Demand Instances؟
أ. معالج AWS Graviton
ب. Dedicated Hosts
*ج. EC2 Instance Savings Plans
د. مثيلات Amazon EC2 Auto Scaling
https://www.examtopics.com/discussions/amazon/view/126182-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خاصية من خصائص سحابة AWS تساعد المستخدمين على التخلص من سعة وحدة المعالجة المركزية (CPU) غير المستغلة بشكل كافٍ؟
أ. الرشاقة
*ب. المرونة
ج. الموثوقية
د. المتانة
https://www.examtopics.com/discussions/amazon/view/126207-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمات AWS يمكن للشركة استخدامها لتحقيق بنية غير محكمة الاقتران (loosely coupled architecture)؟ (اختر اثنين)
أ. Amazon WorkSpaces
*ب. Amazon Simple Queue Service (Amazon SQS)
ج. Amazon Connect
د. AWS Trusted Advisor
*هـ. AWS Step Functions
https://www.examtopics.com/discussions/amazon/view/126046-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة سحابية AWS يمكنها إرسال تنبيهات للعملاء إذا تم تجاوز حدود الإنفاق المخصصة (custom spending thresholds)؟
*أ. AWS Budgets
ب. AWS Cost Explorer
ج. AWS Cost Allocation Tags
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/126205-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة للترحيل إلى سحابة AWS. تريد الشركة استخدام إطار اعتماد سحابة AWS (AWS CAF) لتحديد وتتبع نتائج الأعمال (business outcomes) كجزء من رحلة التحول السحابي الخاصة بها.\nأي قدرة من منظور الحوكمة (governance perspective) في AWS CAF ستلبي هذه المتطلبات؟
*أ. إدارة الفوائد (Benefits management)
ب. إدارة المخاطر (Risk management)
ج. إدارة محفظة التطبيقات (Application portfolio management)
د. الإدارة المالية للسحابة (Cloud financial management)
https://www.examtopics.com/discussions/amazon/view/126183-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى نقل الملفات بسرعة وأمان عبر مسافات طويلة بين عميلها ودلو Amazon S3.\nأي ميزة من ميزات S3 ستلبي هذا المطلب؟
أ. S3 Versioning
*ب. S3 Transfer Acceleration
ج. S3 ACLs
د. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/126184-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تشغيل عبء عمل تجريبي (experimental workload) بشكل مستمر على مثيل Amazon EC2 وإيقاف المثيل بعد 12 ساعة.\nأي خيار شراء مثيل سيلبي هذا المطلب بأكثر طريقة فعالة من حيث التكلفة؟
*أ. On-Demand Instances
ب. Reserved Instances
ج. Spot Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/126185-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مرحلة من مراحل رحلة التحول السحابي (cloud transformation journey) في إطار اعتماد سحابة AWS (AWS CAF) تركز على إظهار كيف تساعد السحابة في تسريع نتائج الأعمال؟
أ. التوسع (Scale)
*ب. التصور (Envision)
ج. المواءمة (Align)
د. الإطلاق (Launch)
https://www.examtopics.com/discussions/amazon/view/126186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو مسؤولية العميل بموجب نموذج المسؤولية المشتركة لـ AWS؟
أ. صيانة الأجهزة الأساسية لمثيلات Amazon EC2
*ب. أمان بيانات التطبيق (Application data security)
ج. الأمان المادي لمراكز البيانات
د. صيانة مكونات VPC
https://www.examtopics.com/discussions/amazon/view/126187-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة أن تعمل مثيلات Amazon EC2 الخاصة بها في بيئة عالية التوفر (highly available environment)، حتى في حالة حدوث كارثة طبيعية في منطقة جغرافية معينة.\nأي نهج سيحقق هذا الهدف؟
*أ. استخدام مثيلات EC2 في مناطق AWS متعددة.
ب. استخدام مثيلات EC2 في مواقع Amazon CloudFront متعددة.
ج. استخدام مثيلات EC2 في مواقع حافة (edge locations) متعددة.
د. استخدام مثيلات EC2 في AWS Local Zones.
https://www.examtopics.com/discussions/amazon/view/126188-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تحديث (modernize) وتحويل تطبيق متجانس (monolithic) إلى خدمات مصغرة (microservices). تريد الشركة نقل التطبيق إلى AWS.\nأي استراتيجية ترحيل (migration strategy) يجب على الشركة استخدامها؟
أ. إعادة الاستضافة (Rehost)
ب. إعادة النظام الأساسي (Replatform)
ج. إعادة الشراء (Repurchase)
*د. إعادة البنية (Refactor)
https://www.examtopics.com/discussions/amazon/view/126189-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: قام مسؤول الأنظمة بإنشاء مستخدم IAM جديد لمطور وقام بتعيين مفتاح وصول (access key) للمستخدم بدلاً من اسم المستخدم وكلمة المرور. ما هو استخدام مفتاح الوصول؟
أ. للوصول إلى حساب AWS كمستخدم جذر (root user) للحساب
ب. للوصول إلى حساب AWS من خلال AWS Management Console
*ج. للوصول إلى حساب AWS من خلال CLI
د. للوصول إلى جميع حسابات AWS الخاصة بالشركة
https://www.examtopics.com/discussions/amazon/view/126190-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو بيئة تتكون من مركز بيانات واحد أو أكثر؟
أ. Amazon CloudFront
*ب. منطقة التوفر (Availability Zone)
ج. VPC
د. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/128037-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بنقل مركز بيانات محلي إلى سحابة AWS. يجب على الشركة ترحيل 50 بيتابايت من بيانات تخزين الملفات إلى AWS بأقل عبء تشغيلي ممكن.\nأي خدمة أو مورد AWS يجب على الشركة استخدامه لتلبية هذه المتطلبات؟
*أ. AWS Snowmobile
ب. AWS Snowball Edge
ج. AWS Data Exchange
د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/126191-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة تطبيق بمتطلبات أجهزة قوية. يجب أن يتمكن الطلاب الذين يستخدمون أجهزة كمبيوتر محمولة خفيفة الوزن ومنخفضة التكلفة من الوصول إلى التطبيق.\nأي خدمة AWS ستساعد الشركة على نشر التطبيق دون استثمار في البنية التحتية الخلفية أو أجهزة العميل عالية المستوى؟
*أ. Amazon AppStream 2.0
ب. AWS AppSync
ج. Amazon WorkLink
د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/126192-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة الاستعلام عن سجلات الخادم (server logs) الخاصة بها للحصول على رؤى حول تجارب عملائها.\nأي خدمة AWS ستخزن هذه البيانات بأكثر طريقة فعالة من حيث التكلفة؟
أ. Amazon Aurora
ب. Amazon Elastic File System (Amazon EFS)
ج. Amazon Elastic Block Store (Amazon EBS)
*د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/127169-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو مبدأ تصميم موصى به لهندسة AWS السحابية؟
أ. تصميم مكونات محكمة الاقتران (tightly coupled).
ب. بناء مكون تطبيق واحد يمكنه التعامل مع جميع وظائف التطبيق.
ج. إجراء تغييرات كبيرة في عدد أقل من التكرارات لتقليل فرص الفشل.
*د. تجنب الهندسة المتجانسة (monolithic architecture) عن طريق تجزئة أعباء العمل.
https://www.examtopics.com/discussions/amazon/view/126343-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تساعد المستخدمين على تدقيق نشاط API عبر حساب AWS الخاص بهم؟
*أ. AWS CloudTrail
ب. Amazon Inspector
ج. AWS WAF
د. AWS Config
https://www.examtopics.com/discussions/amazon/view/127331-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة هي مسؤولية العميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
*أ. إدارة أنظمة التشغيل الضيف (guest operating systems)
ب. صيانة تكوين أجهزة البنية التحتية
ج. إدارة أنظمة تشغيل المضيف (host operating systems) والمحاكاة الافتراضية (virtualization)
د. صيانة البرنامج الذي يشغل مناطق التوفر (Availability Zones)
https://www.examtopics.com/discussions/amazon/view/128052-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إضافة وإزالة مثيلات Amazon EC2 تلقائيًا. تريد الشركة أن تتكيف مثيلات EC2 مع أعباء العمل المتفاوتة ديناميكيًا.\nأي خدمة أو ميزة ستلبي هذه المتطلبات؟
أ. Amazon DynamoDB
ب. Amazon EC2 Spot Instances
ج. AWS Snow Family
*د. Amazon EC2 Auto Scaling
https://www.examtopics.com/discussions/amazon/view/126193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يريد مستخدم أتمتة إدارة وتدوير بيانات الاعتماد (credentials) التي تتم مشاركتها بين التطبيقات بشكل آمن، مع قضاء أقل قدر من الوقت في مهام الإدارة.\nأي خدمة أو ميزة AWS يمكن استخدامها لتحقيق ذلك؟
أ. AWS CloudHSM
ب. AWS Key Management Service (AWS KMS)
*ج. AWS Secrets Manager
د. تشفير من جانب الخادم (Server-side encryption)
https://www.examtopics.com/discussions/amazon/view/126194-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أمان تتعرف تلقائيًا على البيانات الحساسة أو الملكية الفكرية على AWS وتصنفها؟
أ. Amazon GuardDuty
*ب. Amazon Macie
ج. Amazon Inspector
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126195-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي الإجراءات هي أفضل الممارسات للمستخدم الجذر (root user) لحساب AWS؟ (اختر اثنين)
أ. مشاركة بيانات اعتماد المستخدم الجذر مع أعضاء الفريق.
ب. إنشاء عدة مستخدمين جذر للحساب، مفصولة حسب البيئة.
*ج. تمكين المصادقة متعددة العوامل (MFA) على المستخدم الجذر.
*د. إنشاء مستخدم IAM بصلاحيات مسؤول للمهام الإدارية اليومية، بدلاً من استخدام المستخدم الجذر.
هـ. استخدام الوصول البرمجي (programmatic access) بدلاً من المستخدم الجذر وكلمة المرور.
https://www.examtopics.com/discussions/amazon/view/126196-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتشغيل عبء عمل هام على مثيل Amazon RDS DB. تحتاج الشركة إلى أن يكون مثيل DB عالي التوفر (highly available) مع وقت استرداد أقل من 5 دقائق.\nأي حل سيلبي هذه المتطلبات؟
أ. إنشاء نسخة متماثلة للقراءة (read replica) من مثيل DB.
ب. إنشاء قالب (template) لمثيل DB باستخدام AWS CloudFormation.
ج. أخذ لقطات متكررة (frequent snapshots) من مثيل DB. تخزين اللقطات في Amazon S3.
*د. تعديل مثيل DB ليكون نشرًا عبر مناطق توفر متعددة (Multi-AZ deployment).
https://www.examtopics.com/discussions/amazon/view/126197-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة لترحيل تطبيقها إلى AWS وتشغيل التطبيق على مثيلات Amazon EC2. سيكون للتطبيق استخدام مستمر لمدة عام واحد.\nأي خيار شراء مثيل EC2 سيلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
*أ. Reserved Instances
ب. Spot Instances
ج. On-Demand Instances
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/126198-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى نقل البيانات بين دلو Amazon S3 وتطبيق محلي (on-premises).\nمن المسؤول عن أمان هذه البيانات، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
*أ. الشركة
ب. AWS
ج. بائع جدار الحماية
د. شريك AWS Marketplace
https://www.examtopics.com/discussions/amazon/view/126199-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي ركيزة من ركائز إطار عمل AWS Well-Architected Framework تشير إلى قدرة النظام على التعافي من اضطرابات البنية التحتية أو الخدمة والحصول ديناميكيًا على موارد حاسوبية لتلبية الطلب؟
أ. الأمان
*ب. الموثوقية
ج. كفاءة الأداء
د. تحسين التكلفة
https://www.examtopics.com/discussions/amazon/view/126200-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تحديد دلاء Amazon S3 التي تتم مشاركتها مع حساب AWS آخر.\nأي خدمة أو ميزة AWS ستلبي هذه المتطلبات؟
أ. AWS Lake Formation
ب. تقرير بيانات اعتماد IAM (IAM credential report)
ج. Amazon CloudWatch
*د. IAM Access Analyzer
https://www.examtopics.com/discussions/amazon/view/126201-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تمنح المستخدمين القدرة على بناء لوحات معلومات ذكاء الأعمال (BI dashboards) تفاعلية تتضمن رؤى التعلم الآلي (machine learning insights)؟
أ. Amazon Athena
ب. Amazon Kendra
*ج. Amazon QuickSight
د. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/126202-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو عرض قيمة (value proposition) لـ AWS يصف قدرة المستخدم على توسيع نطاق البنية التحتية بناءً على الطلب؟
أ. سرعة الابتكار
*ب. مرونة الموارد (Resource elasticity)
ج. البنية غير المحكمة (Decoupled architecture)
د. النشر العالمي
https://www.examtopics.com/discussions/amazon/view/128063-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي إجراء هو أفضل ممارسة أمنية للوصول إلى البيانات الحساسة المخزنة في دلو Amazon S3؟
أ. تمكين النسخ المتماثل عبر المناطق (S3 Cross-Region Replication - CRR) على دلو S3.
*ب. استخدام أدوار IAM (IAM roles) للتطبيقات التي تتطلب الوصول إلى دلو S3.
ج. تكوين AWS WAF لمنع الوصول غير المصرح به إلى دلو S3.
د. تكوين Amazon GuardDuty لمنع الوصول غير المصرح به إلى دلو S3.
https://www.examtopics.com/discussions/amazon/view/126203-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة معرفة المزيد عن الفوائد التي تقدمها الحوسبة السحابية. تريد الشركة فهم الميزة التشغيلية للرشاقة (agility). كيف توفر AWS الرشاقة للمستخدمين؟
أ. القدرة على ضمان التوفر العالي (high availability) عن طريق نشر أعباء العمل في مناطق متعددة
ب. نموذج الدفع عند الاستخدام (pay-as-you-go) للعديد من الخدمات والموارد
ج. القدرة على نقل إدارة البنية التحتية إلى سحابة AWS
*د. القدرة على توفير وإلغاء توفير الموارد بسرعة بأقل جهد
https://www.examtopics.com/discussions/amazon/view/127933-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى بوابة مستخدم مركزية (central user portal) بحيث يمكن للمستخدمين تسجيل الدخول إلى تطبيقات الأعمال التابعة لجهات خارجية التي تدعم Security Assertion Markup Language (SAML) 2.0.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS Identity and Access Management (IAM)
ب. Amazon Cognito
*ج. AWS IAM Identity Center (AWS Single Sign-On)
د. AWS CLI
https://www.examtopics.com/discussions/amazon/view/126204-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يجب على المستخدمين استخدامها للتعرف على مدى توفر خدمة AWS وعملياتها؟
أ. Amazon EventBridge
ب. AWS Service Catalog
ج. AWS Control Tower
*د. AWS Health Dashboard
https://www.examtopics.com/discussions/amazon/view/126217-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو أداة AWS يمكن استخدامها لالتقاط معلومات حول حركة مرور الشبكة الواردة والصادرة في Amazon VPC؟
*أ. VPC Flow Logs
ب. Amazon Inspector
ج. خدمات نقطة نهاية VPC (VPC endpoint services)
د. بوابة NAT (NAT gateway)
https://www.examtopics.com/discussions/amazon/view/127173-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ما هي المسؤولية التي يتحملها العميل دائمًا في إدارتها، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. تراخيص البرامج
ب. الشبكات
*ج. بيانات العميل
د. مفاتيح التشفير
https://www.examtopics.com/discussions/amazon/view/126319-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكن استخدامها لاسترداد تقارير الامتثال (compliance reports) عند الطلب؟
أ. AWS Secrets Manager
*ب. AWS Artifact
ج. AWS Security Hub
د. AWS Certificate Manager
https://www.examtopics.com/discussions/amazon/view/127176-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تمكن المستخدمين من التحقق من وجود ثغرات (vulnerabilities) على مثيلات Amazon EC2 باستخدام قوالب تقييم محددة مسبقًا (predefined assessment templates)؟
أ. AWS WAF
ب. AWS Trusted Advisor
*ج. Amazon Inspector
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126320-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة للترحيل إلى سحابة AWS. تقوم الشركة بجمع معلومات حول البنية التحتية المحلية (on-premises) الخاصة بها وتحتاج إلى معلومات مثل اسم المضيف (hostname) وعنوان IP وعنوان MAC.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS DataSync
ب. AWS Application Migration Service
*ج. AWS Application Discovery Service
د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/126211-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي إجراء سيساعد في زيادة الأمان في سحابة AWS؟
أ. تمكين الوصول البرمجي (programmatic access) لجميع مستخدمي IAM.
ب. استخدام مستخدمي IAM بدلاً من أدوار IAM (IAM roles) لتفويض الأذونات.
*ج. تدوير مفاتيح الوصول (access keys) بشكل متكرر.
د. استخدام السياسات المضمنة (inline policies) بدلاً من السياسات المدارة من قبل العميل (customer managed policies).
https://www.examtopics.com/discussions/amazon/view/127398-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة لترحيل تطبيقها إلى سحابة AWS.\nأي أداة أو مجموعة موارد AWS يجب على الشركة استخدامها لتحليل وتقييم مدى استعدادها للترحيل؟
*أ. إطار اعتماد سحابة AWS (AWS Cloud Adoption Framework - AWS CAF)
ب. AWS Pricing Calculator
ج. إطار عمل AWS Well-Architected Framework
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/126209-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي يصف بعض الوظائف الأساسية لـ Amazon S3؟
أ. Amazon S3 هي خدمة تخزين كتل (block storage) عالية الأداء مصممة للاستخدام مع Amazon EC2.
*ب. Amazon S3 هي خدمة تخزين كائنات (object storage) توفر أداءً عاليًا وأمانًا وقابلية تطوير وتوفر بيانات.
ج. Amazon S3 هو نظام تخزين ملفات (file storage) مُدار بالكامل وموثوق للغاية وقابل للتطوير ويمكن الوصول إليه عبر بروتوكول SMB القياسي في الصناعة.
د. Amazon S3 هو نظام NFS مرن وقابل للتطوير ومُدار بالكامل للاستخدام مع خدمات AWS السحابية والموارد المحلية.
https://www.examtopics.com/discussions/amazon/view/127399-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي فائدة من فوائد AWS تتجلى في خدمات التكنولوجيا حسب الطلب (on-demand technology services) التي تمكن الشركات من استبدال النفقات الثابتة المقدمة (upfront fixed expenses) بنفقات متغيرة؟
أ. التوفر العالي
ب. وفورات الحجم
*ج. تسعير الدفع عند الاستخدام
د. الوصول العالمي
https://www.examtopics.com/discussions/amazon/view/127400-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمات أو ميزات AWS تمكن المستخدمين من توصيل الشبكات المحلية (on-premises networks) بـ VPC؟ (اختر اثنين)
*أ. AWS VPN
ب. Elastic Load Balancing
*ج. AWS Direct Connect
د. VPC peering
هـ. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/126220-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يحتاج مستخدم إلى نشر قاعدة بيانات غير علائقية (nonrelational database) بسرعة على AWS. لا يرغب المستخدم في إدارة الأجهزة الأساسية أو برنامج قاعدة البيانات.\nأي خدمة AWS يمكن استخدامها لتحقيق ذلك؟
أ. Amazon RDS
*ب. Amazon DynamoDB
ج. Amazon Aurora
د. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/126722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي الإجراءات هي أمثلة على جهود الشركة لتحديد الحجم المناسب (rightsizing) لموارد AWS الخاصة بها للتحكم في تكاليف السحابة؟ (اختر اثنين)
أ. التبديل من Amazon RDS إلى Amazon DynamoDB لاستيعاب مجموعات بيانات NoSQL.
*ب. اعتماد اختيار أنواع مثيلات Amazon EC2 على أنماط الاستخدام السابقة.
*ج. استخدام سياسات دورة حياة Amazon S3 (S3 Lifecycle policies) لنقل الكائنات التي يصل إليها المستخدمون بشكل غير متكرر إلى طبقات تخزين أقل تكلفة.
د. استخدام نشرات متعددة مناطق التوفر (Multi-AZ deployments) لـ Amazon RDS.
هـ. استبدال مثيلات Amazon EC2 الحالية بـ AWS Elastic Beanstalk.
https://www.examtopics.com/discussions/amazon/view/126723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS يمكن للشركة استخدامها لتطبيق قواعد أمان على مثيلات Amazon EC2 محددة؟
أ. قوائم التحكم بالوصول إلى الشبكة (Network ACLs)
*ب. مجموعات الأمان (Security groups)
ج. AWS Trusted Advisor
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/126222-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مبادئ التصميم تدعم ركيزة الموثوقية (reliability pillar) في إطار عمل AWS Well-Architected Framework؟ (اختر اثنين)
أ. تنفيذ العمليات ككود (Perform operations as code).
ب. تمكين إمكانية التتبع (Enable traceability).
*ج. القياس التلقائي لتلبية الطلب (Automatically scale to meet demand).
د. نشر الموارد عالميًا لتحسين وقت الاستجابة.
*هـ. التعافي التلقائي من الفشل (Automatically recover from failure).
https://www.examtopics.com/discussions/amazon/view/126223-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة تستخدم AWS إلى نقل 2 تيرابايت من البيانات.\nأي نوع من نقل تلك البيانات لن يكلف الشركة أي شيء؟
*أ. نقل البيانات الواردة (inbound) من الإنترنت
ب. نقل البيانات الصادرة (outbound) إلى الإنترنت
ج. نقل البيانات بين مناطق AWS
د. نقل البيانات بين مناطق التوفر
https://www.examtopics.com/discussions/amazon/view/126744-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إنشاء قوالب (templates) يمكن للشركة إعادة استخدامها لنشر موارد AWS متعددة.\nأي خدمة أو ميزة AWS يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Marketplace
ب. Amazon Machine Image (AMI)
*ج. AWS CloudFormation
د. AWS OpsWorks
https://www.examtopics.com/discussions/amazon/view/126224-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة ببناء تطبيق يتطلب القدرة على إرسال الرسائل وتخزينها واستلامها بين مكونات التطبيق. لدى الشركة مطلب آخر وهو معالجة الرسائل بترتيب الوارد أولاً يصرف أولاً (FIFO).\nأي خدمة AWS يجب على الشركة استخدامها؟
أ. AWS Step Functions
ب. Amazon Simple Notification Service (Amazon SNS)
ج. Amazon Kinesis Data Streams
*د. Amazon Simple Queue Service (Amazon SQS)
https://www.examtopics.com/discussions/amazon/view/127193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS هي خدمة تعتمد على المتصفح (browser-based) ومصادقة مسبقة (pre-authenticated) يمكن تشغيلها مباشرة من AWS Management Console؟
أ. AWS API
ب. AWS Lightsail
ج. AWS Cloud9
*د. AWS CloudShell
https://www.examtopics.com/discussions/amazon/view/126225-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل قاعدة البيانات الخاصة بها إلى خدمة AWS مُدارة تتوافق مع PostgreSQL.\nأي خدمات AWS ستلبي هذه المتطلبات؟ (اختر اثنين)
أ. Amazon Athena
*ب. Amazon RDS
ج. Amazon EC2
د. Amazon DynamoDB
*هـ. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/126226-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة أسطول من سفن الشحن. تحتوي سفن الشحن على أجهزة استشعار (sensors) تجمع البيانات في البحر، حيث لا يوجد اتصال بالإنترنت أو يكون متقطعًا. تحتاج الشركة إلى جمع البيانات وتنسيقها ومعالجتها في البحر ونقل البيانات إلى AWS لاحقًا.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS IoT Core
ب. Amazon Lightsail
ج. AWS Storage Gateway
*د. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/126227-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستضيف شركة تطبيقًا على مثيلات Amazon EC2 متعددة. يستخدم التطبيق Amazon Simple Notification Service (Amazon SNS) لإرسال الرسائل.\nأي خدمة أو ميزة AWS ستمنح التطبيق الإذن للوصول إلى خدمات AWS المطلوبة؟
أ. AWS Certificate Manager (ACM)
*ب. أدوار IAM (IAM roles)
ج. AWS Security Hub
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/127402-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى مستخدم معرفة محدودة بخدمات AWS، ولكنه يريد نشر تطبيق Node.js قابل للتطوير بسرعة في سحابة AWS.\nأي خدمة يجب استخدامها لنشر التطبيق؟
أ. AWS CloudFormation
*ب. AWS Elastic Beanstalk
ج. Amazon EC2
د. AWS OpsWorks
https://www.examtopics.com/discussions/amazon/view/126354-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى شبكة توصيل محتوى (CDN) توفر تسليمًا آمنًا للبيانات ومقاطع الفيديو والتطبيقات وواجهات برمجة التطبيقات للمستخدمين عالميًا مع زمن وصول منخفض وسرعات نقل عالية.\nأي خدمة AWS تلبي هذه المتطلبات؟
*أ. Amazon CloudFront
ب. Elastic Load Balancing
ج. Amazon S3
د. Amazon Elastic Transcoder
https://www.examtopics.com/discussions/amazon/view/128024-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى استخدام برامج طرف ثالث (third-party software) لعبء العمل الخاص بها على AWS.\nأي خدمة أو ميزة AWS يمكن للشركة استخدامها لشراء البرنامج؟
أ. AWS Resource Access Manager
ب. AWS Managed Services
ج. AWS License Manager
*د. AWS Marketplace
https://www.examtopics.com/discussions/amazon/view/128065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تخزين ملفات (file storage) مُدار بالكامل وموثوق للغاية وقابل للتطوير ويمكن الوصول إليه عبر بروتوكول Server Message Block (SMB).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon S3
ب. Amazon Elastic File System (Amazon EFS)
*ج. Amazon FSx for Windows File Server
د. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/126229-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تكوين وإدارة مجموعات أمان (security groups) Amazon VPC بشكل مركزي عبر حسابات AWS متعددة داخل مؤسسة في AWS Organizations.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Firewall Manager
ب. Amazon GuardDuty
ج. Amazon Detective
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/126230-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة هي مسؤولية AWS، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. تكوين إدارة الهوية والوصول (identity and access management) للتطبيقات.
ب. إدارة خيارات التشفير للبيانات المخزنة على AWS.
ج. تكوين مجموعات الأمان (security groups) لمثيلات Amazon EC2.
*د. صيانة الأجهزة المادية (physical hardware) للبنية التحتية.
https://www.examtopics.com/discussions/amazon/view/126231-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة مثيل Amazon EC2 في شبكة فرعية خاصة (private subnet). تريد الشركة بدء اتصال بالإنترنت لسحب تحديثات نظام التشغيل مع منع حركة المرور من الإنترنت من الوصول إلى مثيل EC2.\nأي خدمة AWS مُدارة تسمح بذلك؟
أ. نقطة نهاية VPC (VPC endpoint)
*ب. بوابة NAT (NAT gateway)
ج. Amazon PrivateLink
د. VPC peering
https://www.examtopics.com/discussions/amazon/view/126232-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي الإجراءات هي مسؤولية AWS، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟ (اختر اثنين)
*أ. تأمين طبقة المحاكاة الافتراضية (virtualization layer)
ب. تصحيح نظام التشغيل على مثيلات Amazon EC2
ج. فرض سياسة كلمة مرور صارمة لمستخدمي IAM
*د. تصحيح نظام التشغيل على مثيلات Amazon RDS
هـ. تكوين مجموعات الأمان (security groups) وقوائم التحكم بالوصول إلى الشبكة (network ACLs)
https://www.examtopics.com/discussions/amazon/view/126234-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتخزين بيانات لن يتم الوصول إليها بشكل متكرر في سحابة AWS. إذا احتاجت الشركة إلى الوصول إلى البيانات، فيجب استرداد البيانات في غضون 12 ساعة. تريد الشركة حلاً فعالاً من حيث التكلفة لتكاليف التخزين لكل جيجابايت.\nأي فئة تخزين Amazon S3 ستلبي هذه المتطلبات؟
أ. S3 Standard
*ب. S3 Glacier Flexible Retrieval
ج. S3 One Zone-Infrequent Access (S3 One Zone-IA)
د. S3 Standard-Infrequent Access (S3 Standard-IA)
https://www.examtopics.com/discussions/amazon/view/126235-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو مورد AWS يمكن استخدامه لتحديد الخدمات التي استخدمها مستخدم ضمن نطاق تاريخ محدد؟
أ. قوائم التحكم بالوصول (ACLs) لـ Amazon S3
ب. AWS Certificate Manager (ACM)
ج. Network Access Analyzer
*د. AWS Identity and Access Management Access Analyzer
https://www.examtopics.com/discussions/amazon/view/126237-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى إشراك مستشارين من جهات خارجية للمساعدة في صيانة ودعم بيئة AWS الخاصة بها واحتياجات أعمال الشركة.\nأي خدمة أو مورد AWS سيلبي هذه المتطلبات؟
أ. AWS Support
ب. AWS Organizations
ج. AWS Service Catalog
*د. AWS Partner Network (APN)
https://www.examtopics.com/discussions/amazon/view/126238-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إنشاء لوحات معلومات Amazon QuickSight كل أسبوع باستخدام بيانات الفوترة الخاصة بها.\nأي ميزة أو أداة AWS يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Budgets
ب. AWS Cost Explorer
*ج. AWS Cost and Usage Report
د. AWS Cost Anomaly Detection
https://www.examtopics.com/discussions/amazon/view/126239-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة لنقل النسخ الاحتياطية للبيانات (data backups) إلى سحابة AWS. تحتاج الشركة إلى استبدال التخزين المحلي بتخزين قائم على السحابة ولكن مخزنة محليًا مؤقتًا (locally cached).\nأي خدمة AWS تلبي هذه المتطلبات؟
*أ. AWS Storage Gateway
ب. AWS Snowcone
ج. AWS Backup
د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/126241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تنظيم مواردها وتتبع تكاليف AWS على مستوى مفصل. تحتاج الشركة إلى تصنيف التكاليف حسب قسم الأعمال والبيئة والتطبيق.\nأي حل سيلبي هذه المتطلبات؟
أ. الوصول إلى وحدة تحكم إدارة تكاليف AWS (AWS Cost Management console) لتنظيم الموارد، وتعيين ميزانية AWS، وتلقي إشعارات الاستخدام غير المقصود.
*ب. استخدام العلامات (tags) لتنظيم الموارد. تفعيل علامات تخصيص التكلفة (cost allocation tags) لتتبع تكاليف AWS على مستوى مفصل.
ج. إنشاء لوحات معلومات Amazon CloudWatch لتنظيم وتتبع التكاليف بشكل فردي بصريًا.
د. الوصول إلى لوحة تحكم فوترة AWS وإدارة التكاليف (AWS Billing and Cost Management dashboard) لتنظيم وتتبع استهلاك الموارد على مستوى مفصل.
https://www.examtopics.com/discussions/amazon/view/128514-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تخطيط وجدولة وتشغيل مئات الآلاف من مهام الحوسبة (computing jobs) على AWS.\nأي خدمة AWS يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Step Functions
ب. AWS Service Catalog
ج. Amazon Simple Queue Service (Amazon SQS)
*د. AWS Batch
https://www.examtopics.com/discussions/amazon/view/126242-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمات أو ميزات AWS توفر توفرًا عاليًا وزمن وصول منخفضًا من خلال تمكين تجاوز الفشل (failover) عبر مناطق AWS مختلفة؟ (اختر اثنين)
*أ. Amazon Route 53
ب. Network Load Balancer
ج. Amazon S3 Transfer Acceleration
*د. AWS Global Accelerator
هـ. Application Load Balancer
https://www.examtopics.com/discussions/amazon/view/126244-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو طريقة لاستخدام مجموعات Auto Scaling الخاصة بـ Amazon EC2 لقياس السعة في سحابة AWS؟
*أ. قياس عدد مثيلات EC2 داخليًا أو خارجيًا تلقائيًا، بناءً على الطلب.
ب. استخدام مثيلات EC2 بدون خادم (serverless).
ج. قياس حجم مثيلات EC2 لأعلى أو لأسفل تلقائيًا، بناءً على الطلب.
د. نقل موارد وحدة المعالجة المركزية غير المستخدمة بين مثيلات EC2.
https://www.examtopics.com/discussions/amazon/view/126245-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي القدرات هي فوائد سحابة AWS؟ (اختر اثنين)
أ. مقايضة النفقات المتغيرة بنفقات رأسمالية.
*ب. النشر عالميًا في دقائق.
ج. تخطيط السعة مقدمًا على عمليات النشر.
*د. الاستفادة من وفورات الحجم (economies of scale).
هـ. تقليل الاعتماد على اتصال الشبكة.
https://www.examtopics.com/discussions/amazon/view/126247-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أمان AWS تحمي التطبيقات من هجمات الحرمان من الخدمات (DDoS) مع كشف دائم دائم (always-on detection) وتخفيف تلقائي مضمن (automatic inline mitigations)؟
أ. Amazon Inspector
ب. AWS Web Application Firewall (AWS WAF)
ج. Elastic Load Balancing (ELB)
*د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/126248-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تسمح للمستخدمين بنمذجة وتوفير موارد AWS باستخدام لغات البرمجة الشائعة؟
أ. AWS CloudFormation
ب. AWS CodePipeline
*ج. AWS Cloud Development Kit (AWS CDK)
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/127409-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي نموذج تسعير مثيل Amazon EC2 يمكن أن يوفر خصومات تصل إلى 90%؟
أ. Reserved Instances
ب. On-Demand
ج. Dedicated Hosts
*د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/126252-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي يعمل كجدار حماية على مستوى المثيل (instance-level firewall) للتحكم في الوصول الوارد والصادر؟
أ. قائمة التحكم بالوصول إلى الشبكة (Network access control list)
*ب. مجموعات الأمان (Security groups)
ج. AWS Trusted Advisor
د. بوابات خاصة افتراضية (Virtual private gateways)
https://www.examtopics.com/discussions/amazon/view/126253-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يجب أن تكون الشركة قادرة على تطوير واختبار وإطلاق تطبيق في سحابة AWS بسرعة.\nأي ميزة من ميزات الحوسبة السحابية ستلبي هذه المتطلبات؟
أ. التوقف عن تخمين السعة
ب. مقايضة النفقات الثابتة بنفقات متغيرة
ج. تحقيق وفورات الحجم
*د. زيادة السرعة والرشاقة
https://www.examtopics.com/discussions/amazon/view/128426-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة فرق لها أدوار وظيفية ومسؤوليات مختلفة. غالبًا ما يغير موظفو الشركة فرقهم. تحتاج الشركة إلى إدارة الأذونات للموظفين بحيث تكون الأذونات مناسبة للمسؤوليات الوظيفية.\nأي مورد IAM يجب على الشركة استخدامه لتلبية هذا المطلب بأقل عبء تشغيلي؟
*أ. مجموعات مستخدمي IAM (IAM user groups)
ب. أدوار IAM (IAM roles)
ج. ملفات تعريف مثيل IAM (IAM instance profiles)
د. سياسات IAM للمستخدمين الفرديين
https://www.examtopics.com/discussions/amazon/view/126504-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكن للشركة استخدامها لتخزين وتشفير كلمات مرور قاعدة البيانات بشكل آمن؟
أ. AWS Shield
*ب. AWS Secrets Manager
ج. AWS Identity and Access Management (IAM)
د. Amazon Cognito
https://www.examtopics.com/discussions/amazon/view/126254-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ما الذي يمكن لممارس السحابة (cloud practitioner) استخدامه لاسترداد مستندات أمان وامتثال AWS وتقديمها كدليل إلى مدقق حسابات (auditor) أو جهة تنظيمية (regulator)؟
أ. AWS Certificate Manager
ب. AWS Systems Manager
*ج. AWS Artifact
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/126255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي أنواع التشفير يمكن استخدامها لحماية الكائنات أثناء الراحة (at rest) في Amazon S3؟ (اختر اثنين)
*أ. التشفير من جانب الخادم باستخدام مفاتيح تشفير S3 المدارة من Amazon (SSE-S3)
*ب. التشفير من جانب الخادم باستخدام مفاتيح AWS KMS المدارة (SSE-KMS)
ج. TLS
د. SSL
هـ. تشفير البيانات الشفاف (Transparent Data Encryption - TDE)
https://www.examtopics.com/discussions/amazon/view/126325-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة دمج موقع التسوق عبر الإنترنت الخاص بها مع بيانات اعتماد تسجيل الدخول إلى وسائل التواصل الاجتماعي.\nأي خدمة AWS يمكن للشركة استخدامها لإجراء هذا التكامل؟
أ. AWS Directory Service
ب. AWS Identity and Access Management (IAM)
*ج. Amazon Cognito
د. AWS IAM Identity Center (AWS Single Sign-On)
https://www.examtopics.com/discussions/amazon/view/127428-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تُستخدم لتتبع وتسجيل وتدقيق تغييرات التكوين (configuration changes) التي تم إجراؤها على موارد AWS؟
أ. AWS Shield
*ب. AWS Config
ج. AWS IAM
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/126256-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يقوم عميل بتشغيل مثيل Amazon Linux EC2 بنظام On-Demand لمدة 3 ساعات و 5 دقائق و 6 ثوانٍ.\nكم من الوقت ستتم فوترة العميل؟
أ. 3 ساعات و 5 دقائق
*ب. 3 ساعات و 5 دقائق و 6 ثوانٍ
ج. 3 ساعات و 6 دقائق
د. 4 ساعات
https://www.examtopics.com/discussions/amazon/view/126258-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: موقع ويب لشركة يعاني من هجمات DDoS.\nأي خدمة AWS يمكن أن تساعد في حماية موقع الشركة على الويب من هذه الهجمات؟
أ. AWS Resource Access Manager
ب. AWS Amplify
*ج. AWS Shield
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/129691-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تقييمًا مخصصًا (customized assessment) لبيئتها المحلية الحالية. تريد الشركة فهم تكاليف التشغيل المتوقعة في سحابة AWS.\nأي خدمة أو أداة AWS ستلبي هذه المتطلبات؟
أ. AWS Trusted Advisor
ب. Amazon Inspector
ج. AWS Control Tower
*د. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/127411-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: شركة لديها وحدات أعمال متعددة تريد إدارة بيئات AWS السحابية الخاصة بها ومراقبتها مركزيًا. تريد الشركة أتمتة إنشاء حسابات AWS، وتطبيق سياسات التحكم في الخدمة (SCPs)، وتبسيط عمليات الفوترة.\nأي خدمة أو أداة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Organizations
ب. Cost Explorer
ج. AWS Budgets
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/127623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستضيف شركة تطبيقًا في سحابة AWS. تريد الشركة التحقق من أن خدمات AWS الأساسية والبنية التحتية العامة لـ AWS تعمل بشكل طبيعي.\nأي مجموعة من خدمات AWS يمكن للشركة استخدامها لجمع المعلومات المطلوبة؟ (اختر اثنين)
*أ. لوحة معلومات الصحة الشخصية AWS (AWS Personal Health Dashboard)
ب. AWS Systems Manager
ج. AWS Trusted Advisor
*د. لوحة معلومات صحة الخدمة AWS (AWS Service Health Dashboard)
هـ. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/127483-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى ترحيل قاعدة بيانات PostgreSQL من محلي (on-premises) إلى Amazon RDS.\nأي خدمة أو أداة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. Cloud Adoption Readiness Tool
ب. AWS Migration Hub
*ج. AWS Database Migration Service (AWS DMS)
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/127413-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مفهوم سحابي يتم توضيحه باستخدام AWS Compute Optimizer؟
أ. التحقق من الأمان
*ب. التحجيم المناسب (Rightsizing)
ج. المرونة
د. الوصول العالمي
https://www.examtopics.com/discussions/amazon/view/126261-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستضيف شركة كمية كبيرة من البيانات في AWS. تريد الشركة تحديد ما إذا كان ينبغي اعتبار أي من البيانات حساسة.\nأي خدمة AWS ستلبي المطلب؟
أ. Amazon Inspector
*ب. Amazon Macie
ج. AWS Identity and Access Management (IAM)
د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/128167-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى مستخدم عبء عمل ذو حالة (stateful workload) سيعمل على Amazon EC2 للسنوات الثلاث القادمة.\nما هو نموذج التسعير الأكثر فعالية من حيث التكلفة لعبء العمل هذا؟
أ. On-Demand Instances
*ب. Reserved Instances
ج. Dedicated Instances
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/127624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: من الذي يقوم بتمكين تشفير البيانات أثناء الراحة (data at rest) لـ Amazon Elastic Block Store (Amazon EBS)؟
أ. AWS Support
*ب. عملاء AWS
ج. AWS Key Management Service (AWS KMS)
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/126262-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ما الذي يمكن للمستخدم إنجازه باستخدام AWS CloudTrail؟
أ. إنشاء تقرير بيانات اعتماد مستخدم IAM.
*ب. تسجيل استدعاءات API (API calls) التي تتم لخدمات AWS.
ج. تقييم امتثال تكوينات موارد AWS للسياسات والإرشادات.
د. التأكد من تحديث مثيلات Amazon EC2 بأحدث تصحيحات الأمان.
https://www.examtopics.com/discussions/amazon/view/130356-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة لاستضافة أعباء العمل الخاصة بها على AWS.\nأي خدمة AWS تتطلب من الشركة تحديث وتصحيح نظام التشغيل الضيف (guest operating system)؟
أ. Amazon DynamoDB
ب. Amazon S3
*ج. Amazon EC2
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/130357-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS ستبحث عن موارد AWS التي تتم مشاركتها خارجيًا وتحددها؟
أ. Amazon OpenSearch Service
ب. AWS Control Tower
*ج. AWS IAM Access Analyzer
د. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/126263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بترحيل أعباء العمل الخاصة بها إلى سحابة AWS. يجب على الشركة الاحتفاظ بالتحكم الكامل في إدارة التصحيحات (patch management) لأنظمة التشغيل الضيف (guest operating systems) التي تستضيف تطبيقاتها.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon DynamoDB
*ب. Amazon EC2
ج. AWS Lambda
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/130358-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: في أي مستوى دعم (support level) يحصل المستخدمون على إمكانية الوصول إلى مسؤول علاقات مخصص (support concierge)؟
أ. Basic Support
ب. Developer Support
ج. Business Support
*د. Enterprise Support
https://www.examtopics.com/discussions/amazon/view/126265-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكن للشركة استخدامها لتصميم وبناء تطبيقات بدون خادم (serverless applications) بصريًا؟
أ. AWS Lambda
ب. AWS Batch
*ج. AWS Application Composer
د. AWS App Runner
https://www.examtopics.com/discussions/amazon/view/126065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة الترحيل إلى AWS واستخدام نفس برنامج الأمان الذي تستخدمه محليًا. يقدم بائع برنامج الأمان برنامجه كخدمة على AWS.\nأين يمكن للشركة شراء حل الأمان؟
أ. AWS Partner Solutions Finder
ب. AWS Support Center
ج. AWS Management Console
*د. AWS Marketplace
https://www.examtopics.com/discussions/amazon/view/126270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: قامت شركة بنشر مثيل Amazon EC2.\nأي خيار هو مسؤولية AWS بموجب نموذج المسؤولية المشتركة لـ AWS؟
أ. إدارة وتشفير بيانات التطبيق
ب. تثبيت تحديثات وتصحيحات أمان نظام التشغيل الضيف
*ج. تكوين أجهزة البنية التحتية
د. تكوين مجموعات الأمان (security groups) على كل مثيل
https://www.examtopics.com/discussions/amazon/view/126969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل قاعدة بيانات PostgreSQL الخاصة بها إلى AWS. لا تستخدم الشركة قاعدة البيانات بشكل متكرر.\nأي خدمة أو مورد AWS سيلبي هذه المتطلبات بأقل عبء إداري (management overhead)؟
أ. PostgreSQL على Amazon EC2
ب. Amazon RDS for PostgreSQL
ج. Amazon Aurora PostgreSQL-Compatible Edition
*د. Amazon Aurora Serverless
https://www.examtopics.com/discussions/amazon/view/127239-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستخدم شركة Amazon DynamoDB لقاعدة بيانات تطبيقها.\nأي المهام هي مسؤولية AWS، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟ (اختر اثنين)
أ. تصنيف البيانات.
ب. تكوين أذونات الوصول.
ج. إدارة خيارات التشفير.
*د. توفير نقاط نهاية عامة (public endpoints) لتخزين البيانات واستردادها.
*هـ. إدارة طبقة البنية التحتية ونظام التشغيل.
https://www.examtopics.com/discussions/amazon/view/127485-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إنشاء منصة تجارة إلكترونية يمكن الوصول إليها عالميًا لعملائها. تريد الشركة استخدام خدمة DNS عالية التوفر وقابلة للتطوير لربط المستخدمين بالمنصة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon EC2
ب. Amazon VPC
*ج. Amazon Route 53
د. Amazon RDS
https://www.examtopics.com/discussions/amazon/view/130359-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة صيانة هي مسؤولية العميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. الاتصال المادي بين مناطق التوفر
ب. صيانة محولات الشبكة (Network switch maintenance)
ج. تحديثات الأجهزة وتصحيحات البرامج الثابتة (firmware patches)
*د. تحديثات وتصحيحات أمان Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129470-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تحسين وضع الأمان (security posture) لديها من خلال مراجعة نشاط المستخدم عبر استدعاءات API.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS WAF
ب. Amazon Detective
ج. Amazon CloudWatch
*د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/127843-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بالترحيل إلى سحابة AWS وتخطط لتشغيل أعباء عمل تجريبية (experimental workloads) لمدة 3 إلى 6 أشهر على AWS.\nأي نموذج تسعير سيلبي هذه المتطلبات؟
أ. استخدام Savings Plans لمدة 3 سنوات.
ب. استخدام Dedicated Hosts.
ج. شراء Reserved Instances.
*د. استخدام On-Demand Instances.
https://www.examtopics.com/discussions/amazon/view/131648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: شركة لديها AWS Enterprise Support تقوم بإطلاق نسخة جديدة من منتج شائع بعد شهرين. تتوقع الشركة زيادة كبيرة في حركة المرور إلى موقعها على الويب. موقع الويب مستضاف على مثيلات Amazon EC2.\nأي إجراء يجب على الشركة اتخاذه لتقييم جاهزيتها للتوسع (scale) لهذا الإطلاق؟
أ. استبدال مثيلات EC2 بدوال AWS Lambda.
*ب. استخدام دعم إدارة الأحداث للبنية التحتية لـ AWS (AWS Infrastructure Event Management - IEM).
ج. تقديم طلب على AWS Marketplace لمراقبة الحدث.
د. مراجعة تقارير التغطية (coverage reports) في وحدة تحكم إدارة تكاليف AWS (AWS Cost Management console).
https://www.examtopics.com/discussions/amazon/view/126280-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إطلاق أعباء عمل متعددة على AWS. يرتبط كل عبء عمل بوحدة أعمال مختلفة. تريد الشركة فصل وتتبع التكاليف لكل وحدة أعمال.\nأي حل سيلبي هذه المتطلبات بأقل عبء تشغيلي؟
*أ. استخدام AWS Organizations وإنشاء حساب واحد لكل وحدة أعمال.
ب. استخدام جدول بيانات (spreadsheet) للتحكم في مالكي وتكلفة كل مورد.
ج. استخدام جدول Amazon DynamoDB لتسجيل التكاليف لكل وحدة أعمال.
د. استخدام وحدة تحكم فوترة AWS (AWS Billing console) لتعيين مالكين للموارد وتتبع التكاليف.
https://www.examtopics.com/discussions/amazon/view/133860-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة خدمة قاعدة بيانات سلاسل زمنية (time-series database service) تسهل تخزين وتحليل تريليونات الأحداث كل يوم.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. Amazon Neptune
*ب. Amazon Timestream
ج. Amazon Forecast
د. Amazon DocumentDB (with MongoDB compatibility)
https://www.examtopics.com/discussions/amazon/view/126060-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو عنصر تحكم مشترك (shared control) بين AWS والعميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
*أ. إدارة التكوين (Configuration management)
ب. الضوابط المادية والبيئية
ج. مصادقة سلامة البيانات (Data integrity authentication)
د. إدارة الهوية والوصول (Identity and access management)
https://www.examtopics.com/discussions/amazon/view/126208-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: غالبًا لا تستخدم شركة كل سعة Amazon EC2 الحالية لتشغيل أعباء عمل عديمة الحالة (stateless workloads). تريد الشركة تحسين تكاليف EC2 الخاصة بها.\nأي نوع مثيل EC2 سيلبي هذه المتطلبات؟
*أ. Spot Instances
ب. Dedicated Instances
ج. Reserved Instances
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/127842-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تخزين البيانات في Amazon S3. نادرًا ما تصل الشركة إلى البيانات، ويمكن إعادة إنشاء البيانات إذا لزم الأمر. تريد الشركة تخزين البيانات في فئة التخزين الأكثر فعالية من حيث التكلفة.\nأي فئة تخزين S3 ستلبي هذا المطلب؟
أ. S3 Standard
ب. S3 Intelligent-Tiering
ج. S3 Standard-Infrequent Access (S3 Standard-IA)
*د. S3 One Zone-Infrequent Access (S3 One Zone-IA)
https://www.examtopics.com/discussions/amazon/view/127414-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: قامت شركة بترحيل أعباء العمل الخاصة بها إلى AWS. تريد الشركة اعتماد AWS على نطاق واسع (at scale) والعمل بكفاءة وأمان أكبر. أي خدمة أو إطار عمل AWS يجب على الشركة استخدامه للدعم التشغيلي؟
أ. AWS Support
ب. إطار اعتماد سحابة AWS (AWS Cloud Adoption Framework - AWS CAF)
*ج. AWS Managed Services (AMS)
د. إطار عمل AWS Well-Architected Framework
https://www.examtopics.com/discussions/amazon/view/126059-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة توفير وإدارة البنية التحتية لـ AWS باستخدام لغات البرمجة الشائعة Typescript و Python و Java و .NET.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS CodeBuild
ب. AWS CloudFormation
ج. AWS CLI
*د. AWS Cloud Development Kit (AWS CDK)
https://www.examtopics.com/discussions/amazon/view/129598-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي نموذج تسعير Amazon EC2 يوفر أكبر قدر من التوفير في التكاليف لخادم قاعدة بيانات يعمل دائمًا (always-up) وذو حجم مناسب (right-sized) لمشروع سيستمر لمدة عام واحد؟
أ. On-Demand Instances
ب. Convertible Reserved Instances
ج. Spot Instances
*د. Standard Reserved Instances
https://www.examtopics.com/discussions/amazon/view/129604-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة مكتبة أشرطة فعلية (physical tape library) لتخزين النسخ الاحتياطية للبيانات. مكتبة الأشرطة تنفد منها المساحة. تحتاج الشركة إلى توسيع سعة مكتبة الأشرطة إلى سحابة AWS.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon Elastic File System (Amazon EFS)
ب. Amazon Elastic Block Store (Amazon EBS)
ج. Amazon S3
*د. AWS Storage Gateway
https://www.examtopics.com/discussions/amazon/view/129660-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستخدم شركة AWS Free Tier للعديد من خدمات AWS لتطبيق ما.\nماذا سيحدث إذا انتهت فترة استخدام Free Tier أو تجاوز استخدام التطبيق حدود استخدام Free Tier؟
*أ. سيتم محاسبة الشركة بمعدلات الدفع عند الاستخدام (pay-as-you-go) القياسية للخدمات مقابل الاستخدام الذي يتجاوز استخدام Free Tier.
ب. سيتصل AWS Support بالشركة لإعداد رسوم الخدمة القياسية.
ج. سيتم محاسبة الشركة مقابل الخدمات التي استهلكتها خلال فترة Free Tier، بالإضافة إلى رسوم إضافية مقابل استهلاك الخدمة بعد فترة Free Tier.
د. سيتم تجميد حساب AWS الخاص بالشركة ويمكن إعادة تشغيله بعد وضع خطة سداد.
https://www.examtopics.com/discussions/amazon/view/129593-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة مراقبة أداء عبء العمل الخاص بها. تريد الشركة التأكد من تسليم الخدمات السحابية بمستوى يلبي احتياجات أعمالها.\nأي منظور من إطار اعتماد سحابة AWS (AWS CAF) سيلبي هذه المتطلبات؟
أ. الأعمال (Business)
ب. الحوكمة (Governance)
ج. المنصة (Platform)
*د. العمليات (Operations)
https://www.examtopics.com/discussions/amazon/view/129605-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل تطبيقاتها إلى سحابة AWS. تخطط الشركة لتحديد فرص تحويل الأعمال (business transformation opportunities) وتقييم مدى استعدادها لـ AWS Cloud وتحديد أولوياتها.\nأي خدمة أو أداة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. إطار اعتماد سحابة AWS (AWS Cloud Adoption Framework - AWS CAF)
ب. AWS Managed Services (AMS)
ج. إطار عمل AWS Well-Architected Framework
د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129640-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى خدمة AWS توفر خط أساس واضح (clear baseline) لما تشغله الشركة في مراكز البيانات المحلية الخاصة بها. تحتاج الشركة إلى التكلفة المتوقعة لتشغيل أعباء العمل المحلية في سحابة AWS.\nما هي خدمة أو أداة AWS التي ستلبي هذه المتطلبات؟
أ. AWS Compute Optimizer
ب. AWS Cost Explorer
ج. AWS Systems Manager Agent (SSM Agent)
*د. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/129613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: استحوذت شركة على شركة أخرى. لدى الشركة الآن حسابان AWS.\nأي خدمة أو أداة AWS يمكن للشركة استخدامها لتوحيد الفوترة (consolidate billing) لهذين الحسابين؟
أ. AWS Systems Manager
*ب. AWS Organizations
ج. AWS License Manager
د. Cost Explorer
https://www.examtopics.com/discussions/amazon/view/129614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إعداد أعباء العمل الخاصة بها لأداء وظائفها المقصودة والتعافي بسرعة من الفشل.\nأي ركيزة من ركائز إطار عمل AWS Well-Architected Framework تتماشى مع هذه الأهداف؟
أ. كفاءة الأداء
ب. الاستدامة
*ج. الموثوقية
د. الأمان
https://www.examtopics.com/discussions/amazon/view/129615-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو خدمة AWS مُدارة تُستخدم خصيصًا لبيانات الاستخراج والتحويل والتحميل (ETL)؟
أ. Amazon Athena
*ب. AWS Glue
ج. Amazon S3
د. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/129616-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل بيتابايت من البيانات من مركز البيانات المحلي (on-premises) الخاص بها إلى AWS. لا تريد الشركة استخدام اتصال إنترنت لإجراء الترحيل.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS DataSync
ب. Amazon Connect
*ج. AWS Snowmobile
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/129695-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تلقي تنبيهات لمراقبة تكاليف التشغيل الإجمالية (overall operating costs) للبنية التحتية السحابية العامة لـ AWS.\nأي عرض AWS سيلبي هذه المتطلبات؟
أ. Amazon EventBridge
ب. Compute Savings Plans
*ج. AWS Budgets
د. Migration Evaluator
https://www.examtopics.com/discussions/amazon/view/129560-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: كيف يساعد فريق Concierge التابع لـ AWS Enterprise Support المستخدمين؟
أ. دعم تطوير التطبيقات
ب. تقديم التوجيه المعماري
*ج. الإجابة على استفسارات الفوترة والحساب
د. الإجابة على الأسئلة المتعلقة بحالات الدعم الفني
https://www.examtopics.com/discussions/amazon/view/129618-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تشغيل محاكاة لمدة 3 سنوات بدون انقطاع.\nأي خيار شراء مثيل Amazon EC2 سيلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
أ. Spot Instances
*ب. Reserved Instances
ج. Dedicated Hosts
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/129619-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو مورد AWS يمكنه تقديم خصومات على بعض تكاليف خدمة AWS مقابل التزام بالإنفاق (spending commitment)؟
أ. Amazon Detective
ب. AWS Pricing Calculator
*ج. Savings Plans
د. Basic Support
https://www.examtopics.com/discussions/amazon/view/129620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هي ركائز إطار عمل AWS Well-Architected Framework؟ (اختر اثنين)
أ. التوفر العالي
*ب. كفاءة الأداء
*ج. تحسين التكلفة
د. النشر العالمي في دقائق
هـ. التطوير المستمر
https://www.examtopics.com/discussions/amazon/view/129621-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة استخدام مثيلات Amazon EC2 لتوفير موقع ويب ثابت (static website) للمستخدمين في جميع أنحاء العالم. تحتاج الشركة إلى تقليل زمن الوصول (latency) للمستخدمين.\nأي حل يلبي هذه المتطلبات؟
أ. استخدام مثيلات EC2 في مواقع حافة (edge locations) متعددة.
ب. استخدام مثيلات EC2 في نفس منطقة التوفر (Availability Zone) ولكن في مناطق AWS مختلفة.
*ج. استخدام Amazon CloudFront مع تكوين مثيلات EC2 كمصدر (source).
د. استخدام مثيلات EC2 في نفس منطقة التوفر ولكن في حسابات AWS مختلفة.
https://www.examtopics.com/discussions/amazon/view/129641-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: سيقوم فريق من الباحثين بجمع البيانات في مواقع نائية حول العالم. العديد من المواقع لا تتصل بالإنترنت. يحتاج الفريق إلى التقاط البيانات في الميدان، ونقلها إلى سحابة AWS لاحقًا.\nأي خدمة AWS ستدعم هذه المتطلبات؟
أ. AWS Outposts
ب. AWS Transfer Family
*ج. AWS Snow Family
د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هي فوائد تحصل عليها الشركة عندما تنقل عبء عمل إنتاجي محلي (on-premises production workload) إلى AWS؟ (اختر اثنين)
أ. تقوم AWS بتدريب موظفي الشركة على استخدام جميع خدمات AWS.
ب. تدير AWS جميع جوانب الأمان في السحابة.
ج. تقدم AWS دعمًا مجانيًا من مديري الحسابات التقنيين (TAMs).
*د. تقدم AWS توفرًا عاليًا (high availability).
*هـ. توفر AWS وفورات الحجم (economies of scale).
https://www.examtopics.com/discussions/amazon/view/129642-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: قررت شركة اعتماد بنية Amazon EC2 الأساسية وتريد توسيع نطاق العديد من الخدمات عديمة الحالة (stateless services) للاستخدام قصير الأجل.\nأي نموذج تسعير EC2 هو الأكثر كفاءة من حيث التكلفة لتلبية هذه المتطلبات؟
*أ. Spot Instances
ب. On-Demand Instances
ج. Reserved Instances
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/129822-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هي فوائد AWS Trusted Advisor؟ (اختر اثنين)
أ. الوصول إلى Amazon Simple Queue Service (Amazon SQS)
*ب. توصيات تحسين التكلفة
ج. تحديث ساعي (hourly refresh) لفحوصات حد الخدمة
*د. فحوصات الأمان
هـ. إدارة موافقات AWS Identity and Access Management (IAM)
https://www.examtopics.com/discussions/amazon/view/129644-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة توفير التكاليف عن طريق أرشفة البيانات التي لم يعد يصل إليها المستخدمون النهائيون بشكل متكرر.\nأي ميزة من ميزات Amazon S3 ستلبي هذا المطلب؟
أ. S3 Versioning
*ب. S3 Lifecycle
ج. S3 Object Lock
د. S3 Inventory
https://www.examtopics.com/discussions/amazon/view/129626-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي ميزة من ميزات الحوسبة السحابية تطبقها الشركة عندما تستخدم مناطق AWS (AWS Regions) لزيادة توفر التطبيق للمستخدمين في مختلف البلدان؟
أ. تسعير الدفع عند الاستخدام
ب. التنبؤ بالسعة
ج. وفورات الحجم
*د. الوصول العالمي (Global reach)
https://www.examtopics.com/discussions/amazon/view/129627-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة خدمة AWS لجمع ومعالجة 10 تيرابايت من البيانات محليًا ونقل البيانات إلى AWS. الاتصال متقطع (intermittent connectivity).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Database Migration Service (AWS DMS)
ب. AWS DataSync
ج. AWS Backup
*د. AWS Snowball Edge
https://www.examtopics.com/discussions/amazon/view/129628-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو مبدأ تصميم إطار عمل AWS Well-Architected Framework للتميز التشغيلي (operational excellence) في سحابة AWS؟
أ. النشر عالميًا في دقائق.
*ب. إجراء تغييرات متكررة وصغيرة وقابلة للعكس.
ج. تنفيذ أساس قوي لإدارة الهوية والوصول.
د. التوقف عن إنفاق الأموال على البنية التحتية للأجهزة لعمليات مركز البيانات.
https://www.examtopics.com/discussions/amazon/view/129629-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ما هي فائدة استخدام الحوسبة بدون خادم (serverless computing) من AWS؟
أ. نشر التطبيق وإدارته غير مطلوبين.
ب. سيتم إدارة أمان التطبيق بالكامل بواسطة AWS.
ج. المراقبة والتسجيل (monitoring and logging) غير مطلوبين.
*د. يتم تفريغ إدارة البنية التحتية (offloaded) إلى AWS.
https://www.examtopics.com/discussions/amazon/view/129646-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يريد مطور أن يتمكن مستخدمو AWS من الوصول إلى خدمات AWS باستخدام بيانات اعتماد أمان مؤقتة (temporary security credentials).\nأي خدمة أو ميزة AWS يجب على المطور استخدامها لتوفير هذه البيانات الاعتمادية؟
أ. سياسات IAM
ب. مجموعات مستخدمي IAM
*ج. AWS Security Token Service (AWS STS)
د. AWS IAM Identity Center (AWS Single Sign-On)
https://www.examtopics.com/discussions/amazon/view/129562-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة عالمية استخدام خدمة أمان مُدارة للحماية من هجمات حقن SQL. يجب أن توفر الخدمة أيضًا معلومات تسجيل مفصلة (detailed logging information) حول الوصول إلى تطبيقات التجارة الإلكترونية للشركة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Network Firewall
ب. Amazon RDS for SQL Server
ج. Amazon GuardDuty
*د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/129662-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بترحيل خادمها المحلي إلى مثيل Amazon EC2. يجب أن يظل الخادم نشطًا في جميع الأوقات خلال الـ 12 شهرًا القادمة.\nأي خيار تسعير EC2 هو الأكثر فعالية من حيث التكلفة لعبء عمل الشركة؟
أ. On-Demand
ب. Dedicated Hosts
ج. Spot Instances
*د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/131699-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو مسؤولية العميل بموجب نموذج المسؤولية المشتركة لـ AWS؟ (اختر اثنين)
أ. الحفاظ على تكوين أجهزة البنية التحتية.
ب. الحفاظ على التصحيح والتحديثات داخل البنية التحتية للأجهزة.
*ج. الحفاظ على تكوين أنظمة التشغيل الضيف (guest operating systems) والتطبيقات.
*د. إدارة القرارات التي تتضمن خيارات التشفير.
هـ. صيانة أجهزة البنية التحتية.
https://www.examtopics.com/discussions/amazon/view/129664-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة التحقق مما إذا كانت المصادقة متعددة العوامل (MFA) مفعلة لجميع المستخدمين داخل حسابات AWS الخاصة بها.\nأي خدمة أو مورد AWS سيلبي هذا المطلب؟
أ. AWS Cost and Usage Report
*ب. تقارير بيانات اعتماد IAM (IAM credential reports)
ج. AWS Artifact
د. تقارير Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/129962-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستخدم شركة خدمات وأدوات أمان AWS. تحتاج الشركة إلى خدمة للمساعدة في إدارة تنبيهات الأمان ويجب عليها تنظيم التنبيهات في لوحة تحكم واحدة (single dashboard).\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon GuardDuty
ب. Amazon Inspector
ج. Amazon Macie
*د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/129647-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تشغيل أعباء العمل الخاصة بها في سحابة AWS بشكل فعال، وتقليل العبء الإداري (management overhead)، وتحسين العمليات.\nأي ركيزة من إطار عمل AWS Well-Architected Framework تمثل هذه المتطلبات؟
أ. الموثوقية
*ب. التميز التشغيلي
ج. كفاءة الأداء
د. تحسين التكلفة
https://www.examtopics.com/discussions/amazon/view/129632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تستخدم شركة Amazon S3 لتخزين السجلات التي قد تحتوي على معلومات تعريف شخصية (PII). تريد الشركة حلاً يمكنه مراقبة جميع دلاء S3 بحثًا عن PII وتنبيه الموظفين على الفور بشأن الثغرات الأمنية (vulnerabilities).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon GuardDuty
ب. Amazon Detective
*ج. Amazon Macie
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/129634-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تسمح للمستخدمين بتنزيل تقارير الأمان والامتثال حول البنية التحتية لـ AWS عند الطلب؟
أ. Amazon GuardDuty
ب. AWS Security Hub
*ج. AWS Artifact
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/129666-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: طلب مدقق حسابات خارجي (external auditor) من الشركة تقديم قائمة بجميع مستخدمي IAM الخاصين بها، بما في ذلك حالة بيانات اعتماد المستخدمين ومفاتيح الوصول.\nما هي أبسط طريقة (SIMPLEST) لتقديم هذه المعلومات؟
أ. إنشاء حساب مستخدم IAM للمدقق، ومنح المدقق أذونات المسؤول.
ب. أخذ لقطة شاشة (screenshot) لصفحة كل مستخدم في AWS Management Console، ثم تقديم لقطات الشاشة إلى المدقق.
*ج. تنزيل تقرير بيانات اعتماد IAM (IAM credential report)، ثم تقديم التقرير إلى المدقق.
د. تنزيل تقرير AWS Trusted Advisor، ثم تقديم التقرير إلى المدقق.
https://www.examtopics.com/discussions/amazon/view/129566-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة يمكن للشركة تنفيذها باستخدام مجموعات الأمان (security groups) في سحابة AWS؟
*أ. السماح بالوصول إلى مثيل Amazon EC2 من خلال منفذ محدد فقط.
ب. رفض الوصول إلى عناوين IP الضارة على مستوى الشبكة الفرعية (subnet level).
ج. حماية البيانات المخزنة مؤقتًا بواسطة Amazon CloudFront.
د. تطبيق جدار حماية عديم الحالة (stateless firewall) على مثيل Amazon EC2.
https://www.examtopics.com/discussions/amazon/view/129653-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة لتشغيل عبء عمل مكثف حاسوبيًا (compute-intensive) يستخدم وحدات معالجة الرسومات (GPUs).\nأي نوع مثيل Amazon EC2 يجب على الشركة استخدامه؟
*أ. الحوسبة المتسارعة (Accelerated computing)
ب. مُحسَّن للحوسبة (Compute optimized)
ج. مُحسَّن للتخزين (Storage optimized)
د. الأغراض العامة (General purpose)
https://www.examtopics.com/discussions/amazon/view/129903-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هي ميزات قوائم التحكم بالوصول إلى الشبكة (network ACLs) كما هي مستخدمة في سحابة AWS؟ (اختر اثنين)
*أ. هي عديمة الحالة (stateless).
ب. هي ذات حالة (stateful).
ج. تقوم بتقييم جميع القواعد قبل السماح بحركة المرور.
*د. تقوم بمعالجة القواعد بالترتيب، بدءًا من القاعدة ذات الرقم الأقل، عند اتخاذ قرار السماح بحركة المرور.
هـ. تعمل على مستوى المثيل.
https://www.examtopics.com/discussions/amazon/view/129654-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي القدرات موجودة في منظور المنصة (platform perspective) لإطار اعتماد سحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. إدارة الأداء والسعة (Performance and capacity management)
*ب. هندسة البيانات (Data engineering)
*ج. التكامل المستمر والتسليم المستمر (Continuous integration and continuous delivery - CI/CD)
د. حماية البنية التحتية (Infrastructure protection)
هـ. إدارة التغيير والإصدار (Change and release management)
https://www.examtopics.com/discussions/amazon/view/129638-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: وفقًا لنموذج المسؤولية المشتركة لـ AWS، يكون العميل مسؤولاً عن تطبيق أحدث تحديثات وتصحيحات الأمان لأي من التالي؟
أ. Amazon DynamoDB
*ب. مثيلات Amazon EC2
ج. مثيلات Amazon RDS
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/129648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي فئة تخزين Amazon S3 هي الأكثر فعالية من حيث التكلفة لأنماط الوصول غير المعروفة (unknown access patterns)؟
أ. S3 Standard
ب. S3 Standard-Infrequent Access (S3 Standard-IA)
ج. S3 One Zone-Infrequent Access (S3 One Zone-IA)
*د. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/129649-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي الخيارات هي قدرات منظور الأمان (security perspective) في إطار اعتماد سحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. قابلية المراقبة (Observability)
ب. إدارة الحوادث والمشكلات
*ج. الاستجابة للحوادث (Incident response)
*د. حماية البنية التحتية (Infrastructure protection)
هـ. التوفر والاستمرارية (Availability and continuity)
https://www.examtopics.com/discussions/amazon/view/129655-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: لدى شركة سياسة IAM مُدارة (managed IAM policy) لا تمنح الأذونات اللازمة للمستخدمين لإنجاز المهام المطلوبة.\nكيف يمكن حل ذلك؟
أ. تمكين AWS Shield Advanced.
*ب. إنشاء سياسة IAM مخصصة (custom IAM policy).
ج. استخدام قاعدة مُدارة من طرف ثالث لجدار حماية تطبيقات الويب (WAF) من AWS Marketplace.
د. استخدام AWS Key Management Service (AWS KMS) لإنشاء مفتاح مُدار من قبل العميل (customer-managed key).
https://www.examtopics.com/discussions/amazon/view/129650-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: من المسؤول عن إدارة وصول مستخدم IAM والمفاتيح السرية (secret keys) وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. مفاتيح الوصول والوصول إلى IAM ثابتة، لذلك لا حاجة لتدويرها.
*ب. العميل مسؤول عن تدوير المفاتيح.
ج. ستقوم AWS بتدوير المفاتيح كلما دعت الحاجة.
د. سيقوم فريق AWS Support بتدوير المفاتيح عندما يطلب العميل ذلك.
https://www.examtopics.com/discussions/amazon/view/129651-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تشغيل جدار حماية لجهة خارجية مثبت مسبقًا (pre-installed third-party firewall) على مثيل Amazon EC2.\nأي خدمة أو ميزة AWS يمكنها توفير هذا الحل؟
أ. قوائم التحكم بالوصول إلى الشبكة (Network ACLs)
ب. مجموعات الأمان (Security groups)
*ج. AWS Marketplace
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/129904-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي فائدة من فوائد سحابة AWS تمنح الشركة القدرة على نشر موارد السحابة بسرعة للوصول إلى البنى التحتية للحوسبة والتخزين وقواعد البيانات في غضون دقائق؟
أ. المرونة
ب. توفير التكاليف
*ج. الرشاقة
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/129969-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو مسؤولية AWS بالكامل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. الوعي الأمني والتدريب
ب. تطوير سياسة كلمة مرور IAM
ج. تصحيح نظام التشغيل الضيف
*د. الضوابط المادية والبيئية
https://www.examtopics.com/discussions/amazon/view/129905-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو خاصية للمستخدم الجذر (root user) لحساب AWS؟
أ. المستخدم الجذر هو المستخدم الوحيد الذي يمكن تكوينه باستخدام المصادقة متعددة العوامل (MFA).
ب. المستخدم الجذر هو المستخدم الوحيد الذي يمكنه الوصول إلى AWS Management Console.
*ج. المستخدم الجذر هو هوية تسجيل الدخول الأولى المتاحة عند إنشاء حساب AWS.
د. المستخدم الجذر لديه كلمة مرور لا يمكن تغييرها.
https://www.examtopics.com/discussions/amazon/view/129740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: مثيل Amazon EC2 كان يستخدم سابقًا للتطوير وأصبح غير قابل للوصول ولم يعد يظهر في AWS Management Console.\nأي خدمة AWS يجب استخدامها لتحديد الإجراء الذي جعل مثيل EC2 هذا غير قابل للوصول؟
أ. Amazon CloudWatch Logs
ب. AWS Security Hub
ج. Amazon Inspector
*د. AWS CloudTraiI
https://www.examtopics.com/discussions/amazon/view/130557-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يحتاج مطورو تطبيقات الشركة إلى توفير وإدارة خدمات AWS بسرعة باستخدام البرامج النصية (scripts).\nأي عرض AWS يجب على المطورين استخدامه لتلبية هذه المتطلبات؟
*أ. AWS CLI
ب. AWS CodeBuild
ج. إطار اعتماد سحابة AWS (AWS Cloud Adoption Framework - AWS CAF)
د. AWS Systems Manager Session Manager
https://www.examtopics.com/discussions/amazon/view/129742-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل بيانات غير منظمة (unstructured data) إلى AWS. يجب نقل البيانات بشكل آمن مع تشفير أثناء النقل (inflight encryption) والتحقق من صحة البيانات من طرف إلى طرف (end-to-end data validation).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Application Migration Service
ب. Amazon Elastic File System (Amazon EFS)
*ج. AWS DataSync
د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/129743-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يريد فريق تطوير نشر بيئات اختبار متعددة (multiple test environments) لتطبيق ما بطريقة سريعة وقابلة للتكرار (repeatable).\nأي خدمة AWS يجب على الفريق استخدامها؟
أ. Amazon EC2
*ب. AWS CloudFormation
ج. Amazon QuickSight
د. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/129748-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تنفيذ خط أنابيب تكامل مستمر/تسليم مستمر (CI/CD pipeline) بسرعة.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS Config
ب. Amazon Cognito
ج. AWS DataSync
*د. AWS CodeStar
https://www.examtopics.com/discussions/amazon/view/129754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي نموذج نشر سحابي AWS (AWS Cloud deployment model) يستخدم AWS Outposts كجزء من البنية التحتية لنشر التطبيق؟
أ. محلي (On-premises)
ب. بدون خادم (Serverless)
ج. سحابي أصلي (Cloud-native)
*د. هجين (Hybrid)
https://www.examtopics.com/discussions/amazon/view/129763-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو خدمة قاعدة بيانات رسوم بيانية (graph database) مُدارة بالكامل على AWS؟
أ. Amazon Aurora
ب. Amazon FSx
ج. Amazon DynamoDB
*د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/129765-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكن للمسؤول استخدامها لتوفير بيئات سطح مكتب (desktop environments) للعديد من الموظفين؟
أ. AWS Organizations
ب. AWS Fargate
ج. AWS WAF
*د. AWS WorkSpaces
https://www.examtopics.com/discussions/amazon/view/129767-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو ميزة AWS تمنح المستخدمين القدرة على التقاط معلومات حول حركة مرور الشبكة في VPC؟
*أ. VPC Flow Logs
ب. Amazon Inspector
ج. جداول توجيه VPC (VPC route tables)
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/129769-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي نوع من تخزين AWS هو مؤقت (ephemeral) ويتم حذفه عند إيقاف (stopped) أو إنهاء (terminated) مثيل Amazon EC2؟
أ. Amazon Elastic Block Store (Amazon EBS)
*ب. مخزن مثيل Amazon EC2 (Amazon EC2 instance store)
ج. Amazon Elastic File System (Amazon EFS)
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/129772-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة توفير الوصول إلى مشاركات ملفات Windows (Windows file shares) في AWS من أعباء العمل المحلية (on-premises) الخاصة بها. لا تريد الشركة توفير أي بنية تحتية أو تطبيقات إضافية في مركز البيانات الخاص بها.\nأي خدمة AWS ستلبي هذه المتطلبات؟
*أ. Amazon FSx File Gateway
ب. AWS DataSync
ج. Amazon S3
د. AWS Snow Family
https://www.examtopics.com/discussions/amazon/view/129776-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تخزينًا دائمًا (durable storage) للمحتوى الثابت وبنية تحتية لتخزين البيانات قابلة للتوسع بشكل لا نهائي (infinitely scalable) بأقل تكلفة.\nأي خدمة AWS يجب على الشركة اختيارها؟
أ. Amazon Elastic Block Store (Amazon EBS)
*ب. Amazon S3
ج. AWS Storage Gateway
د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/129777-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تجارة إلكترونية استخدام Amazon EC2 Auto Scaling لإضافة وإزالة مثيلات EC2 بناءً على استخدام وحدة المعالجة المركزية (CPU utilization).\nأي خدمة أو ميزة AWS يمكنها بدء إجراء Auto Scaling لـ Amazon EC2 لتحقيق هذا الهدف؟
أ. Amazon Simple Queue Service (Amazon SQS)
ب. Amazon Simple Notification Service (Amazon SNS)
ج. AWS Systems Manager
*د. تنبيه Amazon CloudWatch (Amazon CloudWatch alarm)
https://www.examtopics.com/discussions/amazon/view/129764-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تحويل قوتها العاملة (workforce) من خلال جذب وتطوير قوة عاملة عالية الأداء وملمة رقميًا (digitally fluent). تريد الشركة جذب قوة عاملة متنوعة وشاملة بمزيج مناسب من المهارات التقنية وغير التقنية.\nأي منظور من إطار اعتماد سحابة AWS (AWS CAF) سيلبي هذه المتطلبات؟
أ. الأعمال (Business)
*ب. الأشخاص (People)
ج. المنصة (Platform)
د. العمليات (Operations)
https://www.examtopics.com/discussions/amazon/view/130576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة نقل قواعد البيانات المحلية (on-premises) الخاصة بها إلى خدمات قواعد بيانات سحابية مُدارة باستخدام عملية ترحيل مبسطة.\nأي خدمة أو أداة AWS يمكنها مساعدة الشركة في تلبية هذا المطلب؟
أ. AWS Storage Gateway
ب. AWS Application Migration Service
ج. AWS DataSync
*د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/130577-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى خادم ملفات مُدار بالكامل (fully managed file server) يدعم أصلاً (natively) أعباء عمل Microsoft وأنظمة الملفات. يجب أن يدعم خادم الملفات أيضًا بروتوكول SMB.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Elastic File System (Amazon EFS)
ب. Amazon FSx for Lustre
*ج. Amazon FSx for Windows File Server
د. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/130578-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: كانت شركة تخزن تقارير شهرية في دلو Amazon S3. تقوم الشركة بتصدير بيانات التقرير إلى ملفات بقيم مفصولة بفواصل (.csv). يريد مطور كتابة استعلام بسيط يمكنه قراءة كل هذه الملفات وإنشاء تقرير ملخص.\nأي خدمة أو ميزة AWS يجب على المطور استخدامها لتلبية هذه المتطلبات بأقل قدر من العبء التشغيلي؟
أ. Amazon S3 Select
*ب. Amazon Athena
ج. Amazon Redshift
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129766-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي ميزة AWS توفر منصة بدون تكلفة لمستخدمي AWS للانضمام إلى مجموعات المجتمع وطرح الأسئلة والعثور على إجابات وقراءة المقالات التي ينشئها المجتمع حول أفضل الممارسات؟
أ. AWS Knowledge Center
*ب. AWS re:Post
ج. AWS IQ
د. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/129768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى البحث عن نص في المستندات المخزنة في Amazon S3.\nأي خدمة AWS ستلبي هذه المتطلبات؟
*أ. Amazon Kendra
ب. Amazon Rekognition
ج. Amazon Polly
د. Amazon Lex
https://www.examtopics.com/discussions/amazon/view/129770-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمات AWS تستخدم مواقع الحافة العالمية (global edge locations)؟ (اختر اثنين)
أ. AWS Fargate
*ب. Amazon CloudFront
*ج. AWS Global Accelerator
د. AWS Wavelength
هـ. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/129771-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يحتاج مستخدم إلى قاعدة بيانات علائقية (relational database) ولكن ليس لديه الموارد اللازمة لإدارة الأجهزة والمرونة (resiliency) والنسخ المتماثل (replication).\nأي خيار خدمة AWS يلبي متطلبات المستخدم؟
أ. تشغيل MySQL على Amazon Elastic Container Service (Amazon ECS).
ب. تشغيل MySQL على Amazon EC2.
*ج. اختيار Amazon RDS for MySQL.
د. اختيار Amazon ElastiCache for Redis.
https://www.examtopics.com/discussions/amazon/view/130584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى نشر التطبيقات في سحابة AWS في أسرع وقت ممكن. تحتاج الشركة أيضًا إلى تقليل التعقيد المرتبط بإدارة موارد AWS.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Config
*ب. AWS Elastic Beanstalk
ج. Amazon EC2
د. Amazon Personalize
https://www.examtopics.com/discussions/amazon/view/129773-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي آلية تسمح للمطورين بالوصول إلى خدمات AWS من كود التطبيق (application code)؟
*أ. AWS Software Development Kit
ب. AWS Management Console
ج. AWS CodePipeline
د. AWS Config
https://www.examtopics.com/discussions/amazon/view/130586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بالترحيل إلى سحابة AWS. تريد الشركة فهم وتحديد التكوينات الخاطئة الأمنية المحتملة (potential security misconfigurations) أو السلوكيات غير المتوقعة. تريد الشركة تحديد أولويات أي ضوابط وقائية (protective controls) قد تحتاجها.\nأي قدرة من منظور الأمان (security perspective) في إطار اعتماد سحابة AWS (AWS CAF) ستلبي هذه المتطلبات؟
أ. إدارة الهوية والوصول
*ب. كشف التهديدات (Threat detection)
ج. هندسة المنصة (Platform engineering)
د. إدارة التوفر والاستمرارية
https://www.examtopics.com/discussions/amazon/view/129892-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إنشاء اتصال شبكة خاص (private network connection) بين AWS وشبكة الشركة الخاصة بها.\nأي خدمة أو ميزة AWS ستلبي هذا المطلب؟
أ. Amazon Connect
ب. Amazon Route 53
*ج. AWS Direct Connect
د. VPC peering
https://www.examtopics.com/discussions/amazon/view/129805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمات أو ميزات AWS تمنح المستخدمين القدرة على إنشاء اتصال شبكة بين اثنين من VPCs؟ (اختر اثنين)
أ. نقاط نهاية VPC (VPC endpoints)
ب. Amazon Route 53
*ج. VPC peering
د. AWS Direct Connect
*هـ. AWS Transit Gateway
https://www.examtopics.com/discussions/amazon/view/129915-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تحول النص إلى أصوات شبيهة بالبشر (lifelike voices)؟
أ. Amazon Transcribe
ب. Amazon Rekognition
*ج. Amazon Polly
د. Amazon Textract
https://www.examtopics.com/discussions/amazon/view/129806-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة استخدام أكوام التطبيقات (application stacks) لتشغيل عبء عمل في سحابة AWS. تريد الشركة استخدام مثيلات مهيأة مسبقًا (pre-configured instances).\nأي خدمة AWS ستلبي هذه المتطلبات؟
*أ. Amazon Lightsail
ب. Amazon Athena
ج. AWS Outposts
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129995-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمات AWS مدعومة بـ Savings Plans؟ (اختر اثنين)
*أ. Amazon EC2
ب. Amazon RDS
*ج. Amazon SageMaker
د. Amazon Redshift
هـ. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/129779-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو أداة AWS يمكنها تقديم توصيات التحجيم المناسب (rightsizing recommendations) لموارد Amazon EC2 بدون تكلفة إضافية؟
أ. AWS Well-Architected Tool
ب. Amazon CloudWatch
*ج. AWS Cost Explorer
د. Amazon S3 analytics
https://www.examtopics.com/discussions/amazon/view/129809-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تدير شركة مستودع بيانات (data warehouse) بمقياس بيتابايت (petabyte-scale) لتحليل بياناتها. تريد الشركة حلاً لن يتطلب إدارة الأجهزة والبرامج يدويًا.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon DocumentDB (with MongoDB compatibility)
*ب. Amazon Redshift
ج. Amazon Neptune
د. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/129922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد مكتبة أتمتة تصنيف الكتب الإلكترونية بناءً على محتويات الكتب.\nأي خدمة AWS يجب على المكتبة استخدامها لتلبية هذا المطلب؟
أ. Amazon Redshift
ب. Amazon CloudSearch
*ج. Amazon Comprehend
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/129780-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة هي مسؤولية AWS، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. تشفير بيانات التطبيق
ب. مصادقة مستخدمي التطبيق
*ج. حماية البنية التحتية للشبكة المادية (physical network infrastructure)
د. تكوين جدران الحماية (firewalls)
https://www.examtopics.com/discussions/amazon/view/129810-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي الخيارات هي توصيات مرحلة رحلة التحول السحابي (cloud transformation journey) في إطار اعتماد سحابة AWS (AWS CAF)؟ (اختر اثنين)
*أ. مرحلة التصور (Envision phase)
*ب. مرحلة المواءمة (Align phase)
ج. مرحلة التقييم (Assess phase)
د. مرحلة التعبئة (Mobilize phase)
هـ. مرحلة الترحيل والتحديث (Migrate and modernize phase)
https://www.examtopics.com/discussions/amazon/view/129811-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إنشاء قائمة بمستخدمي IAM. تريد الشركة أيضًا عرض حالة بيانات الاعتماد المختلفة المرتبطة بالمستخدمين، مثل كلمة المرور ومفاتيح الوصول وأجهزة المصادقة متعددة العوامل (MFA).\nأي خدمة أو ميزة AWS ستلبي هذه المتطلبات؟
*أ. تقرير بيانات اعتماد IAM (IAM credential report)
ب. AWS IAM Identity Center (AWS Single Sign-On)
ج. AWS Identity and Access Management Access Analyzer
د. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/129898-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بتصميم أعباء عمل AWS الخاصة بها بحيث يمكن تحديث المكونات بانتظام ويمكن إجراء التغييرات بزيادات صغيرة قابلة للعكس (small, reversible increments).\nأي ركيزة من إطار عمل AWS Well-Architected Framework يدعمها هذا التصميم؟
أ. الأمان
ب. كفاءة الأداء
*ج. التميز التشغيلي
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/129812-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تتبع العلامات (tags) والدلاء (buckets) والبادئات (prefixes) لكائنات Amazon S3 الخاصة بها.\nأي ميزة S3 ستلبي هذا المطلب؟
*أ. تقرير جرد S3 (S3 Inventory report)
ب. S3 Lifecycle
ج. S3 Versioning
د. S3 ACLs
https://www.examtopics.com/discussions/amazon/view/129899-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة السماح للمستخدمين بالمصادقة والتفويض لحسابات AWS متعددة باستخدام مجموعة واحدة من بيانات الاعتماد.\nأي خدمة أو مورد AWS سيلبي هذا المطلب؟
أ. AWS Organizations
ب. مستخدم IAM
*ج. AWS IAM Identity Center (AWS Single Sign-On)
د. AWS Control Tower
https://www.examtopics.com/discussions/amazon/view/130740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أنشأت شركة مثيل Amazon EC2. تريد الشركة التحكم في حركة مرور الشبكة الواردة والصادرة على مستوى المثيل.\nأي مورد أو خدمة AWS ستلبي هذا المطلب؟
أ. AWS Shield
*ب. مجموعات الأمان (Security groups)
ج. Network Access Analyzer
د. نقاط نهاية VPC (VPC endpoints)
https://www.examtopics.com/discussions/amazon/view/129816-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة استخدام سحابة AWS لنشر تطبيق عالميًا.\nأي نموذج بنية نشر (architecture deployment model) يجب على الشركة استخدامه لتلبية هذا المطلب؟
*أ. متعدد المناطق (Multi-Region)
ب. منطقة واحدة (Single-Region)
ج. متعدد مناطق التوفر (Multi-AZ)
د. منطقة توفر واحدة (Single-AZ)
https://www.examtopics.com/discussions/amazon/view/130199-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة أن يتفاعل تطبيق ويب مع خدمات AWS المختلفة.\nأي خدمة أو مورد AWS سيلبي هذا المطلب؟
أ. AWS CloudShell
ب. AWS Marketplace
*ج. AWS Management Console
د. AWS CLI
https://www.examtopics.com/discussions/amazon/view/129781-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بترحيل تطبيقاتها من محلي (on-premises) إلى سحابة AWS. تريد الشركة التأكد من منح التطبيقات الحد الأدنى فقط من الأذونات اللازمة لأداء جميع العمليات.\nأي خدمة AWS ستلبي هذه المتطلبات؟
*أ. AWS Identity and Access Management (IAM)
ب. Amazon CloudWatch
ج. Amazon Macie
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/129782-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي الخيارات هي قدرات منظور الحوكمة (governance perspective) في إطار اعتماد سحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. إدارة الهوية والوصول
*ب. الإدارة المالية للسحابة (Cloud financial management)
*ج. إدارة محفظة التطبيقات (Application portfolio management)
د. إدارة الابتكار
هـ. إدارة المنتج
https://www.examtopics.com/discussions/amazon/view/129821-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS توفر موقعًا واحدًا لتتبع تقدم ترحيل التطبيقات؟
أ. AWS Application Discovery Service
ب. AWS Application Migration Service
ج. AWS Service Catalog
*د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/130754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أطلقت شركة مثيل Amazon EC2 باستخدام أحدث Amazon Machine Image (AMI) من Amazon Linux 2.\nأي الإجراءات يمكن لمسؤول النظام اتخاذها للاتصال بمثيل EC2؟ (اختر اثنين)
*أ. استخدام Amazon EC2 Instance Connect.
ب. استخدام اتصال Remote Desktop Protocol (RDP).
ج. استخدام AWS Batch.
*د. استخدام AWS Systems Manager Session Manager.
هـ. استخدام Amazon Connect.
https://www.examtopics.com/discussions/amazon/view/129783-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مفهوم معماري يصف القدرة على نشر الموارد عند الطلب وتحرير الموارد عندما لا تكون هناك حاجة إليها؟
أ. التوفر العالي
ب. البنية غير المحكمة (Decoupled architecture)
ج. المرونة (Resilience)
*د. المرونة (Elasticity)
https://www.examtopics.com/discussions/amazon/view/129577-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة تتطلب من المستخدم تسجيل الدخول كمستخدم جذر (root user) لحساب AWS؟
أ. حذف مستخدمي IAM
*ب. حذف حساب AWS
ج. إنشاء مؤسسة في AWS Organizations
د. حذف مثيلات Amazon EC2
https://www.examtopics.com/discussions/amazon/view/129576-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ماذا تقدم فئة تخزين Amazon S3 Intelligent-Tiering؟
أ. مرونة في الدفع عن طريق حجز سعة التخزين
ب. الاحتفاظ بالبيانات على المدى الطويل عن طريق نسخ البيانات إلى وحدة Amazon Elastic Block Store (Amazon EBS) مشفرة
*ج. توفير التكاليف تلقائيًا عن طريق نقل الكائنات بين الطبقات بناءً على تغييرات نمط الوصول
د. تخزين آمن ودائم ومنخفض التكلفة لأرشفة البيانات
https://www.examtopics.com/discussions/amazon/view/129784-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى مثيلات Amazon EC2 لعبء عمل يمكنه تحمل الانقطاعات (tolerate interruptions).\nأي خيار شراء مثيل EC2 يلبي هذا المطلب بأكبر خصم مقارنة بأسعار On-Demand؟
*أ. Spot Instances
ب. Convertible Reserved Instances
ج. Standard Reserved Instances
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/129575-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تخطط شركة للترحيل إلى سحابة AWS. تريد الشركة تحديد نتائج الأعمال القابلة للقياس (measurable business outcomes) التي ستشرح قيمة قرار الشركة بالترحيل.\nأي مرحلة من مراحل رحلة التحول السحابي تشمل هذه الأنشطة؟
*أ. التصور (Envision)
ب. المواءمة (Align)
ج. التوسع (Scale)
د. الإطلاق (Launch)
https://www.examtopics.com/discussions/amazon/view/129658-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو مكون AWS يسمح بحركة المرور الواردة من الإنترنت للوصول إلى VPC؟
*أ. بوابة الإنترنت (Internet gateway)
ب. بوابة NAT (NAT gateway)
ج. AWS WAF
د. VPC peering
https://www.examtopics.com/discussions/amazon/view/129574-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكن للشركات استخدامها لإنشاء بنية تحتية من الكود (infrastructure from code)؟
أ. Amazon Elastic Kubernetes Service (Amazon EKS)
ب. AWS Outposts
ج. AWS CodePipeline
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/129572-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي إرشاد (guideline) هو مبدأ تصميم جيد الهندسة (well-architected design principle) لبناء تطبيقات سحابية؟
أ. إبقاء البيانات الثابتة (static data) أقرب إلى موارد الحوسبة.
ب. توفير الموارد لسعة الذروة (peak capacity).
*ج. التصميم للتعافي التلقائي من الفشل.
د. استخدام مكونات محكمة الاقتران (tightly coupled).
https://www.examtopics.com/discussions/amazon/view/129883-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى نقل 75 بيتابايت من البيانات من مراكز البيانات المحلية الخاصة بها إلى AWS.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
أ. AWS Snowball Edge Storage Optimized
*ب. AWS Snowmobile
ج. AWS Direct Connect
د. AWS Storage Gateway
https://www.examtopics.com/discussions/amazon/view/131193-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هي ركائز إطار عمل AWS Well-Architected Framework؟ (اختر اثنين)
أ. قابلية توسع الموارد
*ب. كفاءة الأداء
ج. مرونة النظام
د. التطوير الرشيق (Agile development)
*هـ. التميز التشغيلي
https://www.examtopics.com/discussions/amazon/view/129657-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى توصيل مركز البيانات المحلي (on-premises) الخاص بها بسحابة AWS. تحتاج الشركة إلى اتصال مخصص (dedicated) ومنخفض زمن الوصول (low-latency) مع أداء شبكة ثابت (consistent network performance).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Global Accelerator
ب. Amazon CloudFront
*ج. AWS Direct Connect
د. AWS Managed VPN
https://www.examtopics.com/discussions/amazon/view/129656-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مبادئ التصميم يجب على الشركة تطبيقها على أعباء عمل AWS السحابية لتحقيق أقصى قدر من الاستدامة (sustainability) وتقليل التأثير البيئي؟ (اختر اثنين)
*أ. زيادة استخدام مثيلات Amazon EC2 إلى أقصى حد.
ب. تقليل استخدام مثيلات Amazon EC2.
ج. تقليل استخدام الخدمات المُدارة.
د. فرض إعادة تثبيت التطبيقات بشكل متكرر من قبل المستخدمين.
*هـ. تقليل حاجة المستخدمين إلى إعادة تثبيت التطبيقات.
https://www.examtopics.com/discussions/amazon/view/129884-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: بأي الطرق تقدم سحابة AWS تكلفة ملكية إجمالية (TCO) أقل لموارد الحوسبة من مراكز البيانات المحلية؟ (اختر اثنين)
*أ. تستبدل AWS النفقات الرأسمالية المقدمة (upfront capital expenditures) بتكاليف الدفع عند الاستخدام.
ب. تم تصميم AWS لتحقيق توفر عالٍ، مما يلغي وقت توقف المستخدم.
ج. تلغي AWS الحاجة إلى موظفي تكنولوجيا المعلومات المحليين.
*د. تستخدم AWS وفورات الحجم لخفض الأسعار باستمرار.
هـ. تقدم AWS نموذج تسعير واحد لمثيلات Amazon EC2.
https://www.examtopics.com/discussions/amazon/view/129571-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة نشر بعض مواردها في سحابة AWS. لتلبية المتطلبات التنظيمية، يجب أن تظل البيانات محلية وعلى المباني. يجب أن يكون هناك زمن وصول منخفض بين AWS وموارد الشركة.\nأي خدمة أو ميزة AWS يمكن استخدامها لتلبية هذه المتطلبات؟
أ. AWS Local Zones
ب. مناطق التوفر (Availability Zones)
*ج. AWS Outposts
د. AWS Wavelength Zones
https://www.examtopics.com/discussions/amazon/view/129570-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من خدمات AWS التالية هي بدون خادم (serverless)؟ (اختر اثنين)
أ. AWS Outposts
ب. Amazon EC2
ج. Amazon Elastic Kubernetes Service (Amazon EKS)
*د. AWS Fargate
*هـ. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/130755-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: عندما يريد مستخدم استخدام تراخيص البرامج الحالية لكل مقبس (per-socket) أو لكل نواة (per-core) أو لكل جهاز افتراضي (per-virtual machine) لخادم Microsoft Windows يعمل على AWS، أي نوع مثيل Amazon EC2 مطلوب؟
أ. Spot Instances
ب. Dedicated Instances
*ج. Dedicated Hosts
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/130756-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: يحتاج مهندس حلول إلى صيانة أسطول من مثيلات Amazon EC2 بحيث يتم استبدال أي مثيلات معطلة (impaired) بأخرى جديدة.\nأي خدمة AWS يجب على مهندس الحلول استخدامها؟
أ. Amazon Elastic Container Service (Amazon ECS)
ب. Amazon GuardDuty
ج. AWS Shield
*د. AWS Auto Scaling
https://www.examtopics.com/discussions/amazon/view/129786-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS توفر للتطبيقات المحلية (on-premises applications) وصولاً منخفض زمن الوصول (low-latency access) إلى البيانات المخزنة في سحابة AWS؟
أ. Amazon CloudFront
*ب. AWS Storage Gateway
ج. AWS Backup
د. AWS DataSync
https://www.examtopics.com/discussions/amazon/view/129787-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: ماذا توفر Amazon CloudFront؟
أ. قياسًا تلقائيًا (automatic scaling) لجميع الموارد لتشغيل تطبيق من واجهة واحدة موحدة
*ب. تسليمًا آمنًا للبيانات ومقاطع الفيديو والتطبيقات وواجهات برمجة التطبيقات للمستخدمين عالميًا مع زمن وصول منخفض
ج. القدرة على إدارة حركة المرور عالميًا مباشرة من خلال مجموعة متنوعة من أنواع التوجيه، بما في ذلك التوجيه على أساس زمن الوصول (latency-based routing) و DNS الجغرافي (geo DNS) والقرب الجغرافي (geoproximity) وال round robin الموزون (weighted round robin)
د. التوزيع التلقائي لحركة مرور التطبيق الواردة عبر أهداف متعددة، مثل مثيلات Amazon EC2 والحاويات وعناوين IP ودوال AWS Lambda
https://www.examtopics.com/discussions/amazon/view/129888-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تدعم نشر وإدارة التطبيقات في سحابة AWS؟
أ. Amazon CodeGuru
ب. AWS Fargate
ج. AWS CodeCommit
*د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/129889-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة دمج معالجة اللغة الطبيعية (NLP) في لوحات معلومات ذكاء الأعمال (BI dashboards). تريد الشركة طرح الأسئلة وتلقي الإجابات مع تصورات ذات صلة (relevant visualizations).\nأي خدمة أو أداة AWS ستلبي هذه المتطلبات؟
أ. Amazon Macie
ب. Amazon Rekognition
*ج. Amazon QuickSight Q
د. Amazon Lex
https://www.examtopics.com/discussions/amazon/view/130757-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي ميزة أو فئة تخزين في Amazon S3 تستخدم شبكة AWS الأساسية (AWS backbone network) ومواقع الحافة (edge locations) لتقليل زمن الوصول من المستخدم النهائي إلى Amazon S3؟
أ. S3 Cross-Region Replication
*ب. S3 Transfer Acceleration
ج. S3 Event Notifications
د. S3 Standard-Infrequent Access (S3 Standard-IA)
https://www.examtopics.com/discussions/amazon/view/129890-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS توفر القدرة على استضافة قاعدة بيانات NoSQL في سحابة AWS؟
أ. Amazon Aurora
*ب. Amazon DynamoDB
ج. Amazon RDS
د. Amazon Redshift
https://www.examtopics.com/discussions/amazon/view/131206-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS هي قاعدة بيانات علائقية متوافقة مع MySQL و PostgreSQL؟
أ. Amazon Redshift
ب. Amazon DynamoDB
*ج. Amazon Aurora
د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/129788-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مبدأ تصميم معماري يصف الحاجة إلى عزل حالات الفشل (isolate failures) بين المكونات التابعة (dependent components) في سحابة AWS؟
أ. استخدام تصميم متجانس (monolithic design).
ب. التصميم للأتمتة.
ج. التصميم لنقاط الفشل الفردية (single points of failure).
*د. اقتران المكونات بشكل غير محكم (Loosely couple components).
https://www.examtopics.com/discussions/amazon/view/129789-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي فائدة من فوائد الحوسبة السحابية تمنح الشركة القدرة على نشر التطبيقات للمستخدمين في جميع أنحاء العالم من خلال شبكة من مناطق AWS ومناطق التوفر ومواقع الحافة؟
أ. وفورات الحجم
*ب. الوصول العالمي
ج. الرشاقة
د. التوفر العالي
https://www.examtopics.com/discussions/amazon/view/129790-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تسهل مراقبة سجلات التطبيق (application logs) وموارد السحابة واستكشاف أخطائها وإصلاحها؟
أ. Amazon EC2
ب. AWS Identity and Access Management (IAM)
*ج. Amazon CloudWatch
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/129791-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تستخدم AWS Compute Optimizer لتوفير توصيات التحجيم (sizing recommendations) بناءً على مقاييس عبء العمل؟
*أ. Amazon EC2
ب. Amazon RDS
ج. Amazon Lightsail
د. AWS Step Functions
https://www.examtopics.com/discussions/amazon/view/129792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS ستساعد الشركة في التخطيط للترحيل إلى AWS من خلال جمع بيانات التكوين والاستخدام والسلوك لمراكز البيانات المحلية؟
أ. AWS Resource Groups
*ب. AWS Application Discovery Service
ج. AWS Service Catalog
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/129793-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS تستخدم مزيجًا من الناشرين (publishers) والمشتركين (subscribers)؟
أ. AWS Lambda
*ب. Amazon Simple Notification Service (Amazon SNS)
ج. Amazon CloudWatch
د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/129794-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة في المراحل المبكرة من التخطيط للترحيل إلى AWS. تريد الشركة الحصول على التكلفة الإجمالية المتوقعة لـ AWS شهريًا لمثيلات Amazon EC2 المستقبلية والتخزين المرتبط بها.\nأي خدمة أو أداة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Pricing Calculator
ب. AWS Compute Optimizer
ج. AWS Trusted Advisor
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/129795-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو أداة AWS ستراقب موارد وتطبيقات AWS في الوقت الفعلي (real time)؟
أ. AWS Trusted Advisor
*ب. Amazon CloudWatch
ج. AWS CloudTrail
د. AWS Cost Explorer
https://www.examtopics.com/discussions/amazon/view/137916-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي قدرة من إطار اعتماد سحابة AWS (AWS CAF) تنتمي إلى منظور الأعمال (business perspective)؟
أ. إدارة البرامج والمشاريع
*ب. علم البيانات (Data science)
ج. قابلية المراقبة (Observability)
د. إدارة التغيير والإصدار
https://www.examtopics.com/discussions/amazon/view/137917-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مورد AWS يمكن أن يساعد الشركة في تقليل تكاليفها مقابل التزام بالاستخدام (usage commitment) عند استخدام مثيلات Amazon EC2؟
*أ. Compute Savings Plans
ب. مجموعة Auto Scaling
ج. On-Demand Instance
د. مخزن مثيل EC2 (EC2 instance store)
https://www.examtopics.com/discussions/amazon/view/137918-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي منظور في إطار اعتماد سحابة AWS (AWS CAF) يتضمن قدرة لهندسة البيانات والتحليلات المصممة جيدًا (well-designed data and analytics architecture)؟
أ. الأمان
ب. الحوكمة
ج. العمليات
*د. المنصة
https://www.examtopics.com/discussions/amazon/view/137919-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي الخيارات هي قدرات منظور الأشخاص (people perspective) في إطار اعتماد سحابة AWS (AWS CAF)؟ (اختر اثنين)
*أ. المواءمة التنظيمية (Organizational alignment)
ب. إدارة المحفظة (Portfolio management)
*ج. تصميم المنظمة (Organization design)
د. إدارة المخاطر
هـ. تطوير التطبيقات الحديثة (Modern application development)
https://www.examtopics.com/discussions/amazon/view/137920-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى جسر (bridge) بين التكنولوجيا والأعمال للمساعدة في التطور إلى ثقافة النمو المستمر والتعلم.\nأي منظور في إطار اعتماد سحابة AWS (AWS CAF) يعمل كجسر؟
*أ. الأشخاص (People)
ب. الحوكمة
ج. العمليات
د. الأمان
https://www.examtopics.com/discussions/amazon/view/137921-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خيار هو مسؤولية AWS بموجب نموذج المسؤولية المشتركة لـ AWS؟
أ. أمان بيانات التطبيق
ب. إدارة التصحيحات (patch management) للتطبيقات التي تعمل على مثيلات Amazon EC2
*ج. إدارة التصحيحات للبنية التحتية الأساسية (underlying infrastructure) للخدمات المُدارة
د. إدارة هوية والوصول للتطبيق
https://www.examtopics.com/discussions/amazon/view/137922-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو مورد AWS يمكنه تحديد وتقديم تقارير عن موارد IAM في حساب AWS واحد يتم مشاركتها مع حساب AWS آخر؟
أ. تقرير بيانات اعتماد IAM (IAM credential report)
ب. AWS IAM Identity Center (AWS Single Sign-On)
*ج. AWS Identity and Access Management Access Analyzer
د. مجموعة مستخدمي Amazon Cognito
https://www.examtopics.com/discussions/amazon/view/139884-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي ركيزة من إطار عمل AWS Well-Architected Framework تركز على التخصيص المنظم والمبسط (structured and streamlined allocation) لموارد الحوسبة؟
أ. الموثوقية
ب. التميز التشغيلي
*ج. كفاءة الأداء
د. الاستدامة
https://www.examtopics.com/discussions/amazon/view/138027-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي قدرات إطار اعتماد سحابة AWS (AWS CAF) تنتمي إلى منظور الحوكمة (governance perspective)؟ (اختر اثنين)
*أ. إدارة البرامج والمشاريع
ب. إدارة المنتج
ج. إدارة المحفظة (Portfolio management)
*د. إدارة المخاطر
هـ. إدارة الأحداث
https://www.examtopics.com/discussions/amazon/view/138028-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة استخدام AWS Managed Services (AMS) للدعم التشغيلي وتريد فهم نطاق AMS.\nأي ميزة من ميزات AMS ستلبي هذه المتطلبات؟
*أ. منطقة الهبوط (Landing zone) وإدارة الشبكة
ب. تطوير تطبيقات العملاء
ج. تكوين خط أنابيب DevSecOps
د. مراقبة سجل التطبيق (Application log monitoring)
https://www.examtopics.com/discussions/amazon/view/138046-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة ترحيل عبء عمل NoSQL المحلي (on-premises) إلى Amazon DynamoDB.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS Migration Hub
*ب. AWS Database Migration Service (AWS DMS)
ج. Migration Evaluator
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/138047-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: شركة في طور العثور على أنواع وأحجام مثيلات Amazon EC2 الصحيحة لتلبية متطلبات الأداء والسعة. تريد الشركة إيجاد أقل تكلفة ممكنة.\nأي خيار يصف بدقة إجراءات الشركة؟
أ. Auto Scaling
ب. طبقات التخزين (Storage tiering)
*ج. التحجيم المناسب (Rightsizing)
د. جدولة المثيلات (Instance scheduling)
https://www.examtopics.com/discussions/amazon/view/138048-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة إدارة أمان تسجيل الدخول (sign-in security) لمستخدمي القوى العاملة (workforce users). تحتاج الشركة إلى إنشاء مستخدمي القوى العاملة وإدارة وصولهم مركزيًا عبر جميع حسابات وتطبيقات AWS الخاصة بالشركة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Audit Manager
ب. Amazon Cognito
ج. AWS Security Hub
*د. AWS IAM Identity Center (AWS Single Sign-On)
https://www.examtopics.com/discussions/amazon/view/138561-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تقريرًا يسرد حالة أجهزة المصادقة متعددة العوامل (MFA) التي يستخدمها جميع المستخدمين في حساب AWS الخاص بالشركة.\nأي ميزة أو خدمة AWS ستلبي هذا المطلب؟
أ. تقارير AWS Cost and Usage
*ب. تقارير بيانات اعتماد IAM (IAM credential reports)
ج. تقارير الفوترة التفصيلية (Detailed Billing Reports)
د. تقارير AWS Cost Explorer
https://www.examtopics.com/discussions/amazon/view/144065-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة استخدام قدرات التعلم الآلي (machine learning capabilities) لتحليل بيانات السجل (log data) من مثيلات Amazon EC2 الخاصة بها وإجراء تحقيقات أمنية بكفاءة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon Inspector
ب. Amazon QuickSight
*ج. Amazon Detective
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/137985-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بإطلاق تطبيق جوال في سحابة AWS. تريد الشركة لمستخدمي التطبيق تسجيل الدخول من خلال موفري هوية وسائل التواصل الاجتماعي (social media identity providers - IdPs).\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS Lambda
*ب. Amazon Cognito
ج. AWS Secrets Manager
د. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/137984-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو أداة AWS المجانية تنشئ حالات أعمال قائمة على البيانات (data-driven business cases) للتخطيط السحابي؟
*أ. Migration Evaluator
ب. AWS Billing Conductor
ج. AWS Billing Console
د. Amazon Forecast
https://www.examtopics.com/discussions/amazon/view/137978-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مفهوم سحابي يتم توضيحه باستخدام AWS Cost Explorer؟
*أ. التحجيم المناسب (Rightsizing)
ب. الموثوقية
ج. المرونة (Resilience)
د. التحديث (Modernization)
https://www.examtopics.com/discussions/amazon/view/140118-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة نشر تطبيق ويب قائم على Java غير معبأ في حاويات (non-containerized) على AWS. تريد الشركة استخدام خدمة مُدارة لنشر التطبيق بسرعة. تريد الشركة من الخدمة توفير السعة تلقائيًا (automatically provision capacity) وموازنة التحميل (load balance) والقياس (scale) ومراقبة صحة التطبيق.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon Elastic Container Service (Amazon ECS)
ب. AWS Lambda
ج. Amazon Elastic Kubernetes Service (Amazon EKS)
*د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/137983-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة أو أداة AWS تمنح المستخدمين القدرة على الاتصال بـ AWS ونشر الموارد برمجيًا (programmatically)؟
أ. Amazon QuickSight
ب. AWS PrivateLink
ج. AWS Direct Connect
*د. AWS SDKs
https://www.examtopics.com/discussions/amazon/view/137982-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: قامت شركة بنشر تطبيق ويب على مثيلات Amazon EC2. مثيلات EC2 ذات استخدام منخفض.\nأي خدمة أو ميزة AWS يجب على الشركة استخدامها لتحديد الحجم المناسب (rightsize) لمثيلات EC2؟
أ. AWS Config
ب. AWS Cost Anomaly Detection
ج. AWS Budgets
*د. AWS Compute Optimizer
https://www.examtopics.com/discussions/amazon/view/138777-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تحديد سياسة مركزية لحماية البيانات (central data protection policy) تعمل عبر خدمات AWS للحوسبة والتخزين وموارد قواعد البيانات.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS Batch
ب. AWS Elastic Disaster Recovery
*ج. AWS Backup
د. Amazon FSx
https://www.examtopics.com/discussions/amazon/view/138049-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى تصنيف وتتبع تكلفة استخدام AWS بناءً على فئات الأعمال (business categories).\nأي خدمة أو ميزة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. علامات تخصيص التكلفة (Cost allocation tags)
ب. AWS Organizations
ج. AWS Security Hub
د. AWS Cost and Usage Report
https://www.examtopics.com/discussions/amazon/view/137986-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خدمة AWS يمكنها ترحيل البيانات بين خدمات التخزين AWS؟
*أ. AWS DataSync
ب. AWS Direct Connect
ج. AWS Lake Formation
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/140726-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي العبارات تمثل فعالية تكلفة سحابة AWS (cost-effectiveness)؟ (اختر اثنين)
*أ. يمكن للمستخدمين مقايضة النفقات الثابتة بنفقات متغيرة.
ب. يمكن للمستخدمين النشر في جميع أنحاء العالم في دقائق.
ج. تقدم AWS زيادة في السرعة والرشاقة.
د. AWS مسؤولة عن تصحيح البنية التحتية.
*هـ. يستفيد المستخدمون من وفورات الحجم.
https://www.examtopics.com/discussions/amazon/view/142943-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تريد شركة تصميم هندستها السحابية بحيث يمكنها دعم ابتكارات التطوير وتحسين العمليات والإجراءات باستمرار.\nهذا مثال على أي ركيزة من إطار عمل AWS Well-Architected Framework؟
أ. الأمان
ب. كفاءة الأداء
*ج. التميز التشغيلي
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/144068-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تحتاج شركة إلى توحيد الفوترة (consolidate billing) لحسابات AWS متعددة. تحتاج الشركة إلى استخدام حساب واحد للدفع نيابة عن جميع الحسابات الأخرى.\nأي خدمة أو أداة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Trusted Advisor
*ب. AWS Organizations
ج. AWS Budgets
د. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/143146-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: تقوم شركة بنقل بعض خدمات تكنولوجيا المعلومات المحلية الخاصة بها إلى سحابة AWS. يريد قسم المالية رؤية الفاتورة بأكملها حتى يتمكن من توقع حدود الإنفاق.\nأي خدمة AWS يمكن للشركة استخدامها لتعيين حدود الإنفاق وتلقي الإشعارات إذا تم تجاوز تلك الحدود؟
أ. تقارير AWS Cost and Usage
*ب. AWS Budgets
ج. الفوترة الموحدة لـ AWS Organizations
د. Cost Explorer
https://www.examtopics.com/discussions/amazon/view/142696-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي خطط دعم AWS توفر الوصول إلى مدير حساب تقني (TAM) من AWS؟ (اختر اثنين)
أ. AWS Basic Support
ب. AWS Developer Support
ج. AWS Business Support
*د. AWS Enterprise On-Ramp Support
*هـ. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/141581-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أين يمكن للمستخدمين العثور على أمثلة لتصميمات حلول AWS السحابية؟
أ. AWS Marketplace
ب. AWS Service Catalog
*ج. AWS Architecture Center
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/141313-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي مهمة هي مسؤولية شركة تستخدم Amazon RDS؟
أ. توفير البنية التحتية الأساسية.
*ب. إنشاء سياسات IAM للتحكم في الوصول الإداري إلى الخدمة.
ج. تثبيت الكابلات لتوصيل الأجهزة للحوسبة والتخزين.
د. تثبيت وتصحيح نظام تشغيل RDS.
https://www.examtopics.com/discussions/amazon/view/141324-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

---

س: أي من التالي هو ميزة توفرها سحابة AWS للمستخدمين؟
*أ. المستخدمون يلغي الحاجة إلى التخمين بشأن متطلبات سعة البنية التحتية.
ب. يقلل المستخدمون من تكاليفهم المتغيرة من خلال الاحتفاظ بالملكية الكاملة لأجهزة تكنولوجيا المعلومات.
ج. يحتفظ المستخدمون بالتحكم في أجهزة البنية التحتية لتكنولوجيا المعلومات الأساسية.
د. يحتفظ المستخدمون بالتحكم في أنظمة التشغيل للخدمات المُدارة.
https://www.examtopics.com/discussions/amazon/view/142945-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي ميزة من ميزات Amazon RDS توفر القدرة على إنشاء مثيل قاعدة بيانات أولي (primary database instance) تلقائيًا ونسخ البيانات بشكل متزامن (synchronously replicate) إلى مثيل في منطقة توفر أخرى؟
أ. نسخ القراءة (Read replicas)
ب. النشر الأزرق/الأخضر (Blue/green deployment)
*ج. النشر عبر مناطق توفر متعددة (Multi-AZ deployment)
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/142698-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى التحقق من مفاتيح الوصول IAM (IAM access keys) التي لم يتم تدويرها (rotated) مؤخرًا.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. AWS WAF
ب. AWS Shield
ج. Amazon Cognito
*د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/143147-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة العديد من مثيلات Amazon EC2 في VPC الخاصة بها. تريد الشركة استخدام مورد أمان AWS أصلي (native AWS security resource) للتحكم في حركة مرور الشبكة بين مثيلات EC2 معينة.\nأي خدمة أو ميزة AWS ستلبي هذا المطلب؟
أ. قوائم التحكم بالوصول إلى الشبكة (Network ACLs)
ب. AWS WAF
ج. Amazon GuardDuty
*د. مجموعات الأمان (Security groups)
https://www.examtopics.com/discussions/amazon/view/142699-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يمكن أن تكون مكونات VPC في سحابة AWS؟ (اختر اثنين)
أ. Amazon API Gateway
ب. دلاء وكائنات Amazon S3
ج. AWS Storage Gateway
*د. بوابة الإنترنت (Internet gateway)
*هـ. الشبكة الفرعية (Subnet)
https://www.examtopics.com/discussions/amazon/view/142946-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء تطبيق جديد على AWS. تحتاج الشركة إلى أن يظل التطبيق متاحًا في حالة فشل أحد مكونات التطبيق الفردية.\nأي مبدأ تصميم يجب على الشركة استخدامه لتلبية هذا المطلب؟
أ. الموارد القابلة للاستبدال (Disposable resources)
ب. الأتمتة (Automation)
ج. التحجيم المناسب (Rightsizing)
*د. الاقتران غير المحكم (Loose coupling)
https://www.examtopics.com/discussions/amazon/view/144069-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام خدمة مُدارة لتحديد وحماية البيانات الحساسة المخزنة في Amazon S3.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS IAM Access Analyzer
ب. Amazon GuardDuty
ج. Amazon Inspector
*د. Amazon Macie
https://www.examtopics.com/discussions/amazon/view/147523-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS يمكن للمستخدم تكوينها لتقييد الوصول إلى الشبكة على مستوى الشبكة الفرعية (subnet level)؟
أ. AWS Shield
ب. AWS WAF
*ج. قائمة التحكم بالوصول إلى الشبكة (Network ACL)
د. مجموعة الأمان (Security group)
https://www.examtopics.com/discussions/amazon/view/143148-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يمكن للشركة استخدامها لإدارة مفاتيح التشفير (encryption keys) في السحابة؟
أ. AWS License Manager
ب. AWS Certificate Manager (ACM)
*ج. AWS CloudHSM
د. AWS Directory Service
https://www.examtopics.com/discussions/amazon/view/141200-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تعزيز الأمان عن طريق تشغيل نظام كشف التسلل (ISP intrusion detection system) تابع لجهة خارجية من حساب AWS الخاص بها.\nأي خدمة أو مورد AWS يجب على الشركة استخدامه لتلبية هذا المطلب؟
أ. AWS Security Hub
*ب. AWS Marketplace
ج. AWS Quick Starts
د. AWS Security Center
https://www.examtopics.com/discussions/amazon/view/143149-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: كيف تساعد سحابة AWS الشركات على بناء الرشاقة (agility) في عملياتها وبنيتها التحتية السحابية؟
أ. يمكن للشركات تجنب توفير سعة كبيرة جدًا عندما لا تعرف مقدار السعة المطلوبة.
ب. يمكن للشركات التوسع في مناطق جغرافية جديدة.
*ج. يمكن للشركات الوصول إلى مجموعة من التقنيات للتجربة والابتكار بسرعة.
د. يمكن للشركات الدفع مقابل موارد تكنولوجيا المعلومات فقط عند استخدام الموارد.
https://www.examtopics.com/discussions/amazon/view/141201-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو أداة AWS تمنح الشركة القدرة على إصدار تغييرات التطبيق (release application changes) بطريقة آلية (automated way)؟
أ. Amazon AppFlow
*ب. AWS CodeDeploy
ج. AWS PrivateLink
د. Amazon EKS Distro
https://www.examtopics.com/discussions/amazon/view/141314-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي منظور من إطار اعتماد سحابة AWS (AWS CAF) يركز على إدارة الهويات والأذونات (identities and permissions) على نطاق واسع؟
أ. العمليات (Operations)
ب. المنصة (Platform)
ج. الحوكمة (Governance)
*د. الأمان (Security)
https://www.examtopics.com/discussions/amazon/view/141315-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS تسمح للمستخدمين بتخزين بيانات الاعتماد المشفرة (encrypted credentials) بشكل آمن واسترداد هذه البيانات الاعتمادية عند الحاجة؟
أ. AWS Encryption SDK
ب. AWS Security Hub
*ج. AWS Secrets Manager
د. AWS Artifact
https://www.examtopics.com/discussions/amazon/view/141316-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو مورد AWS يمكن للشركة استخدامه لنشر قواعد AWS WAF؟
أ. Amazon EC2
*ب. Application Load Balancer
ج. AWS Trusted Advisor
د. Network Load Balancer
https://www.examtopics.com/discussions/amazon/view/140727-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة موقعها على الويب على مثيلات Amazon EC2. تحتاج الشركة إلى التأكد من أن موقع الويب يصل إلى جمهور عالمي ويوفر أقل زمن وصول (minimum latency) للمستخدمين.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Route 53
*ب. Amazon CloudFront
ج. Elastic Load Balancing
د. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/142786-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تزويد أحد موظفيها بإمكانية الوصول إلى Amazon RDS. تريد الشركة أيضًا تقييد التفاعل فقط على AWS CLI و AWS SDKs.\nأي مجموعة من الإجراءات يجب على الشركة اتخاذها لتلبية هذه المتطلبات مع اتباع مبدأ الامتيازات الأقل (least privilege)؟ (اختر اثنين)
أ. إنشاء مستخدم IAM وتوفير الوصول إلى AWS Management Console فقط.
*ب. إنشاء مستخدم IAM وتوفير وصول برمجي (programmatic access) فقط.
ج. إنشاء دور IAM (IAM role) وتوفير الوصول إلى AWS Management Console فقط.
د. إنشاء سياسة IAM مع وصول المسؤول وإرفاقها بمستخدم IAM.
*هـ. إنشاء سياسة IAM مع الوصول إلى Amazon RDS وإرفاقها بمستخدم IAM.
https://www.examtopics.com/discussions/amazon/view/144452-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة اكتشاف وإعداد ونقل ودمج البيانات من مصادر متعددة لتحليلات البيانات والتعلم الآلي.\nأي خدمة تكامل بيانات بدون خادم (serverless data integration service) من AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Glue
ب. AWS Data Exchange
ج. Amazon Athena
د. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/141317-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة بناء تطبيق يستخدم AWS Lambda لتشغيل كود Python.\nبموجب نموذج المسؤولية المشتركة لـ AWS، أي المهام ستكون مسؤولية الشركة؟ (اختر اثنين)
أ. إدارة البنية التحتية الأساسية.
ب. إدارة نظام التشغيل.
*ج. كتابة منطق الأعمال (business logic code).
د. تثبيت بيئة تشغيل لغة الكمبيوتر (computer language runtime).
*هـ. توفير وصول AWS Identity and Access Management (IAM) إلى خدمة Lambda.
https://www.examtopics.com/discussions/amazon/view/146539-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام خدمة AWS مركزية لفرض الامتثال (enforce compliance) لمعايير الأعمال التنظيمية. تريد الشركة استخدام خدمة AWS يمكنها حوكمة والتحكم في من يمكنه نشر وإدارة وإلغاء موارد AWS.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon CloudWatch
*ب. AWS Service Catalog
ج. Amazon GuardDuty
د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/143768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ماذا يشير مصطلح "أمان السحابة (security of the cloud)" في نموذج المسؤولية المشتركة لـ AWS؟
أ. توفر خدمات AWS مثل Amazon EC2
*ب. أمان البنية التحتية السحابية التي تشغل جميع خدمات AWS
ج. تنفيذ سياسات كلمة المرور لمستخدمي IAM
د. أمان بيئات العملاء باستخدام شركاء AWS Network Firewall
https://www.examtopics.com/discussions/amazon/view/146541-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة تطبيق ينتج بيانات غير منظمة (unstructured data) بشكل مستمر. تحتاج الشركة إلى تخزين البيانات بحيث تكون البيانات دائمة (durable) وسهلة الاستعلام (easy to query).\nأي خدمة AWS يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon RDS
ب. Amazon Aurora
ج. Amazon QuickSight
*د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/146542-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي الخيارات هي وجهات نظر (perspectives) في إطار اعتماد سحابة AWS (AWS CAF)؟ (اختر اثنين)
أ. إلمام السحابة (Cloud fluency)
*ب. الأمان (Security)
ج. تسريع التغيير (Change acceleration)
د. الهندسة المعمارية (Architecture)
*هـ. الأعمال (Business)
https://www.examtopics.com/discussions/amazon/view/142848-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة ترحيل البنية التحتية للحاويات المحلية (on-premises container infrastructure) للشركة إلى سحابة AWS. تريد الشركة منع الإدارة غير المخطط لها (unplanned administration) وتكلفة التشغيل والتكيف مع بنية بدون خادم (serverless architecture).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon Connect
*ب. AWS Fargate
ج. Amazon Lightsail
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/145240-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أن تكون مثيلات Amazon EC2 الخاصة بها في مواقع مختلفة ولكن تشترك في نفس المنطقة الجغرافية. تريد الشركة أيضًا استخدام شبكات كهرباء متعددة (multiple power grids) واتصال شبكي مستقل (independent networking connectivity) لمثيلات EC2.\nأي حل يلبي هذه المتطلبات؟
أ. استخدام مثيلات EC2 في مواقع حافة (edge locations) متعددة في نفس منطقة AWS.
*ب. استخدام مثيلات EC2 في مناطق توفر (Availability Zones) متعددة في نفس منطقة AWS.
ج. استخدام مثيلات EC2 في مواقع Amazon Connect متعددة في نفس منطقة AWS.
د. استخدام مثيلات EC2 في مواقع AWS Artifact متعددة في نفس منطقة AWS.
https://www.examtopics.com/discussions/amazon/view/145242-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة تجارة إلكترونية بنشر تطبيق ويب جديد على مثيلات Amazon EC2. تريد الشركة توزيع حركة HTTP الواردة بالتساوي عبر جميع المثيلات الجارية.\nأي خدمة أو مورد AWS سيلبي هذا المطلب؟
أ. Amazon EC2 Auto Scaling
*ب. Application Load Balancer
ج. Gateway Load Balancer
د. Network Load Balancer
https://www.examtopics.com/discussions/amazon/view/145241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS تمنح المستخدمين القدرة على توصيل VPCs والشبكات المحلية (on-premises networks) بمحور مركزي (central hub)؟
أ. بوابة افتراضية خاصة (Virtual private gateway)
*ب. AWS Transit Gateway
ج. بوابة الإنترنت (Internet gateway)
د. بوابة العميل (Customer gateway)
https://www.examtopics.com/discussions/amazon/view/142678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتوصيل عدة VPCs وشبكات محلية. تحتاج الشركة إلى استخدام خدمة AWS كموجه سحابي (cloud router) لتبسيط علاقات الند للند (peering relationships).\nأي خدمة AWS يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Direct Connect
*ب. AWS Transit Gateway
ج. Amazon Connect
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/143380-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخزن شركة كمية كبيرة من البيانات لا يصل إليها المدققون (auditors) إلا مرتين كل عام.\nأي فئة تخزين Amazon S3 يجب على الشركة استخدامها لتخزين البيانات بأقل تكلفة؟
أ. Amazon S3 Outposts
*ب. Amazon S3 Glacier Instant Retrieval
ج. Amazon S3 Standard
د. Amazon S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/142852-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي هي طرق لتحسين الأمان على AWS؟ (اختر اثنين)
أ. استخدام AWS Artifact
ب. منح أوسع الأذونات لجميع أدوار IAM
ج. تشغيل كود التطبيق مع AWS Cloud
*د. تمكين المصادقة متعددة العوامل (MFA) مع Amazon Cognito
*هـ. استخدام فحوصات أمان AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/141620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يمكن للشركة استخدامها لإدارة مفاتيح التشفير (encryption keys) في السحابة؟
أ. AWS License Manager
ب. AWS Certificate Manager (ACM)
*ج. AWS CloudHSM
د. AWS Directory Service
https://www.examtopics.com/discussions/amazon/view/146543-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة AWS لجميع بنيتها التحتية لتكنولوجيا المعلومات. يُسمح لمطوري الشركة بنشر التطبيقات بأنفسهم. يريد المطورون نشر تطبيقاتهم دون الحاجة إلى توفير البنية التحتية بأنفسهم.\nأي خدمة AWS يجب على المطورين استخدامها لتلبية هذه المتطلبات؟
أ. AWS CloudFormation
ب. AWS CodeBuild
*ج. AWS Elastic Beanstalk
د. AWS CodeDeploy
https://www.examtopics.com/discussions/amazon/view/142503-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الحصول على رؤى من بياناتها وبناء لوحات معلومات تفاعلية لتصور البيانات (interactive data visualization dashboards).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon SageMaker
ب. Amazon Rekognition
*ج. Amazon QuickSight
د. Amazon Kinesis
https://www.examtopics.com/discussions/amazon/view/145248-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مهندس سحابي (cloud engineer) تخزين البيانات في Amazon S3. سيقوم المهندس بالوصول إلى بعض البيانات سنويًا وبعض البيانات يوميًا.\nأي فئة تخزين S3 ستلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
أ. S3 Standard
ب. S3 Glacier Deep Archive
ج. S3 One Zone-Infrequent Access (S3 One Zone-IA)
*د. S3 Intelligent-Tiering
https://www.examtopics.com/discussions/amazon/view/147611-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يقوم مستخدم بنقل عبء عمل من مركز بيانات محلي إلى بنية موزعة بين مركز البيانات المحلي وسحابة AWS.\nأي نوع من الترحيل هذا؟
أ. من محلي إلى سحابي أصلي (On-premises to cloud native)
ب. هجين إلى سحابي أصلي (Hybrid to cloud native)
*ج. من محلي إلى هجين (On-premises to hybrid)
د. من سحابي أصلي إلى هجين (Cloud native to hybrid)
https://www.examtopics.com/discussions/amazon/view/142940-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS توفر للمستخدمين تقارير وشهادات واعتمادات (certifications, accreditations) صادرة عن AWS وإقرارات طرف ثالث (third-party attestations)؟
*أ. AWS Artifact
ب. AWS Trusted Advisor
ج. AWS Health Dashboard
د. AWS Config
https://www.examtopics.com/discussions/amazon/view/142948-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة مركز اتصال (contact center) محليًا للعملاء. تحتاج الشركة إلى الترحيل إلى حل قائم على السحابة يمكنه تقديم ميزات الذكاء الاصطناعي لتحسين تجربة المستخدم.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Wavelength
ب. AWS IAM Identity Center (AWS Single Sign-On)
ج. AWS Direct Connect
*د. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/144460-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لترحيل تطبيق التسويق المخصص (custom marketing application) وتطبيق معالجة الطلبات (order-processing application) إلى AWS. تحتاج الشركة إلى نشر التطبيقات على أنواع مختلفة من المثيلات مع تكوينات متنوعة لوحدة المعالجة المركزية والذاكرة والتخزين وسعة الشبكة.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Lambda
ب. Amazon Cognito
ج. Amazon Athena
*د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/141191-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة مراقبة ومنع طلبات HTTP و HTTPS الضارة التي تتلقاها توزيعات Amazon CloudFront الخاصة بها.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon GuardDuty
ب. Amazon Inspector
*ج. AWS WAF
د. Amazon Detective
https://www.examtopics.com/discussions/amazon/view/150407-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يمكنها إنشاء معلومات يمكن استخدامها من قبل المدققين الخارجيين (external auditors)؟
أ. Amazon Cognito
ب. Amazon FSx
*ج. AWS Config
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/151152-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS تتطلب مزود خدمة إنترنت (ISP) وموقع تموقع مشترك (colocation facility) لتنفيذها؟
أ. AWS VPN
ب. Amazon Connect
*ج. AWS Direct Connect
د. بوابة الإنترنت (Internet gateway)
https://www.examtopics.com/discussions/amazon/view/148056-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بترحيل موقعها الإلكتروني العام إلى AWS. تريد الشركة استضافة اسم نطاق (domain name) موقع الويب على AWS.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Lambda
*ب. Amazon Route 53
ج. Amazon CloudFront
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/148586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة موفر هوية تابع لجهة خارجية (third-party identity provider - IdP). تريد الشركة تزويد موظفيها بإمكانية الوصول إلى حسابات وخدمات AWS دون الحاجة إلى مجموعة أخرى من بيانات اعتماد تسجيل الدخول.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS Directory Service
ب. Amazon Cognito
*ج. AWS IAM Identity Center
د. AWS Resource Access Manager (AWS RAM)
https://www.examtopics.com/discussions/amazon/view/140270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة عبء عمل قديم (legacy workload) في مركز بيانات محلي. تريد الشركة ترحيل عبء العمل إلى AWS. لا تريد الشركة إجراء أي تغييرات على عبء العمل.\nأي استراتيجية ترحيل (migration strategy) يجب على الشركة استخدامها؟
أ. إعادة الشراء (Repurchase)
ب. إعادة النظام الأساسي (Replatform)
*ج. إعادة الاستضافة (Rehost)
د. إعادة البنية (Refactor)
https://www.examtopics.com/discussions/amazon/view/146686-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لترحيل التطبيقات إلى سحابة AWS. أثناء تدقيق النظام، تجد الشركة أن تطبيق نظام إدارة المحتوى (CMS) الخاص بها غير متوافق مع البيئات السحابية.\nأي استراتيجيات الترحيل ستساعد الشركة على ترحيل تطبيق CMS بأقل جهد؟ (اختر اثنين)
أ. التقاعد (Retire)
*ب. إعادة الاستضافة (Rehost)
*ج. إعادة الشراء (Repurchase)
د. إعادة النظام الأساسي (Replatform)
هـ. إعادة البنية (Refactor)
https://www.examtopics.com/discussions/amazon/view/140728-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هي مسؤولية AWS بموجب نموذج المسؤولية المشتركة لـ AWS؟
أ. تكوين الشبكة وجدار الحماية
ب. تشفير البيانات من جانب العميل (Client-side data encryption)
ج. إدارة أذونات المستخدم
*د. الأجهزة والبنية التحتية (Hardware and infrastructure)
https://www.examtopics.com/discussions/amazon/view/145257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أن يكون استخدام AWS أكثر استدامة (more sustainable). تريد الشركة تتبع وقياس ومراجعة وتوقع الانبعاثات الملوثة (polluting emissions) الناتجة عن تطبيقات AWS الخاصة بها.\nأي خدمة أو أداة AWS يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Health Dashboard
*ب. أداة البصمة الكربونية للعميل (AWS customer carbon footprint tool)
ج. AWS Support Center
د. Amazon QuickSight
https://www.examtopics.com/discussions/amazon/view/151232-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي أداة أو ميزة AWS تعمل كجدار حماية VPC على مستوى الشبكة الفرعية (subnet level)؟
أ. مجموعة الأمان (Security group)
*ب. قائمة التحكم بالوصول إلى الشبكة (Network ACL)
ج. انعكاس حركة المرور (Traffic Mirroring)
د. بوابة الإنترنت (Internet gateway)
https://www.examtopics.com/discussions/amazon/view/151256-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: وفقًا لنموذج المسؤولية المشتركة لـ AWS، أي مهمة هي مسؤولية العميل؟
أ. صيانة البنية التحتية اللازمة لتشغيل AWS Lambda
ب. تحديث نظام تشغيل مثيلات Amazon DynamoDB
ج. صيانة البنية التحتية لـ Amazon S3
*د. تحديث نظام التشغيل الضيف (guest operating system) على مثيلات Amazon EC2
https://www.examtopics.com/discussions/amazon/view/144072-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة أعباء عمل قاعدة بيانات MySQL على خوادم ذاتية الإدارة (self-managed servers) في مركز بيانات محلي. تريد الشركة ترحيل أعباء عمل قاعدة البيانات إلى خدمة AWS مُدارة.\nأي استراتيجية ترحيل (migration strategy) يجب على الشركة استخدامها؟
أ. إعادة الاستضافة (Rehost)
ب. إعادة الشراء (Repurchase)
ج. إعادة البنية (Refactor)
*د. إعادة النظام الأساسي (Replatform)
https://www.examtopics.com/discussions/amazon/view/140730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تنفيذ تتبع مفصل (detailed tracking) لتكاليف السحابة الخاصة بها حسب القسم والمشروع.\nأي ميزة أو خدمة AWS يجب على الشركة استخدامها؟
أ. الفوترة الموحدة (Consolidated billing)
*ب. علامات تخصيص التكلفة (Cost allocation tags)
ج. AWS Marketplace
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/143584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة قاعدة بيانات MariaDB محليًا. تريد الشركة نقل البيانات إلى سحابة AWS.\nأي خدمة AWS ستستضيف قاعدة البيانات هذه بأقل قدر من العبء التشغيلي (operational overhead)؟
*أ. Amazon RDS
ب. Amazon Neptune
ج. Amazon S3
د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/144186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى خدمة كشف التهديدات (threat detection service) تراقب باستمرار حسابات AWS وأعباء العمل ودلاء Amazon S3 الخاصة بها بحثًا عن النشاط الضار (malicious activity) والسلوك غير المصرح به.\nأي خدمة AWS تلبي هذه المتطلبات؟
أ. AWS Shield
ب. AWS Firewall Manager
*ج. Amazon GuardDuty
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/144965-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة موارد السحابة الخاصة بها باستخدام قوالب البنية التحتية ككود (IaC templates). تحتاج الشركة إلى تلبية متطلبات الامتثال.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Artifact
ب. AWS Resource Explorer
ج. AWS License Manager
*د. AWS Service Catalog
https://www.examtopics.com/discussions/amazon/view/142885-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مسؤول أنظمة مراقبة استخدام وحدة المعالجة المركزية (CPU utilization) لمثيلات Amazon EC2 الخاصة بالشركة.\nأي خدمة AWS يمكنها توفير هذه المعلومات؟
أ. AWS Config
ب. AWS Trusted Advisor
ج. AWS CloudTrail
*د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/143586-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد بائع برامج مستقل (independent software vendor) تسليم ومشاركة صور Amazon Machine Images (AMIs) المخصصة الخاصة به للعملاء المحتملين.\nأي خدمة AWS ستلبي هذه المتطلبات؟
*أ. AWS Marketplace
ب. AWS Data Exchange
ج. Amazon EC2
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/146161-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مكون يجب إرفاقه بـ VPC لتمكين الوصول إلى الإنترنت الوارد (inbound internet access)؟
أ. بوابة NAT (NAT gateway)
ب. نقطة نهاية VPC (VPC endpoint)
ج. اتصال VPN
*د. بوابة الإنترنت (Internet gateway)
https://www.examtopics.com/discussions/amazon/view/146162-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خطة دعم AWS تقدم المجموعة الكاملة من فحوصات AWS Trusted Advisor بأقل تكلفة؟
أ. AWS Developer Support
*ب. AWS Business Support
ج. AWS Enterprise On-Ramp Support
د. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/142143-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يعمل تطبيق الشركة على مثيلات Amazon EC2. تخطط الشركة لترحيل جزئي إلى بنية بدون خادم (serverless architecture) في العام القادم وتريد الدفع مقابل الموارد مقدمًا (up front).\nأي خيار شراء AWS سيعمل على تحسين تكاليف الشركة؟
أ. Convertible Reserved Instances
ب. Spot Instances
ج. EC2 Instance Savings Plans
*د. Compute Savings Plan
https://www.examtopics.com/discussions/amazon/view/141434-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بيع بالتجزئة ببناء تطبيق جوال جديد. تقوم الشركة بتقييم ما إذا كانت ستبني التطبيق في مركز بيانات محلي أو في سحابة AWS.\nأي من التالي هي فوائد بناء هذا التطبيق في سحابة AWS؟ (اختر اثنين)
أ. نفقة رأسمالية كبيرة مقدمة (large, upfront capital expense) ونفقات متغيرة منخفضة
*ب. زيادة السرعة لتجربة مشاريع جديدة
ج. السيطرة الكاملة على الأمان المادي للبنية التحتية
*د. المرونة للتوسع (scale up) في دقائق مع زيادة شعبية التطبيق
هـ. القدرة على اختيار مراكز البيانات المحددة التي ستستضيف خوادم التطبيق
https://www.examtopics.com/discussions/amazon/view/143626-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يجب على الشركة أرشفة مستنداتها باستخدام نموذج كتابة مرة واحدة وقراءة مرات عديدة (write-once, read-many - WORM) لتلبية الالتزامات القانونية ومتطلبات الامتثال.\nأي ميزة من ميزات Amazon S3 يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. S3 Versioning
ب. سياسة دلو S3 (S3 bucket policy)
*ج. S3 Glacier Vault Lock
د. حذف المصادقة متعددة العوامل لـ S3 (S3 multi-factor authentication - MFA delete)
https://www.examtopics.com/discussions/amazon/view/140776-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة أعباء عمل مجمعة (batch workloads) تحتاج إلى التشغيل لفترات زمنية قصيرة على Amazon EC2. يمكن لأعباء العمل التعامل مع الانقطاعات ويمكن أن تبدأ مرة أخرى من حيث توقفت.\nما هو خيار شراء مثيل EC2 الأكثر فعالية من حيث التكلفة لتلبية هذه المتطلبات؟
أ. Reserved Instances
*ب. Spot Instances
ج. Dedicated Instances
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/141830-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استضافة تطبيق في منطقة جغرافية محددة للامتثال للوائح.\nأي ميزة من البنية التحتية العالمية لـ AWS ستساعد الشركة على تلبية هذا المطلب؟
أ. قابلية التوسع
*ب. البصمة العالمية (Global footprint)
ج. التوفر
د. الأداء
https://www.examtopics.com/discussions/amazon/view/140805-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة تجارة إلكترونية لنقل عبء عمل مركز البيانات الخاص بها إلى سحابة AWS لدعم أنماط الاستخدام الديناميكية للغاية (highly dynamic usage patterns).\nأي الفوائد تجعل AWS فعالة من حيث التكلفة لترحيل هذا النوع من عبء العمل؟ (اختر اثنين)
أ. الموثوقية
ب. الأمان
*ج. المرونة (Elasticity)
*د. موارد الدفع عند الاستخدام (Pay-as-you-go resource)
هـ. التوفر العالي
https://www.examtopics.com/discussions/amazon/view/147624-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي حل AWS يمنح الشركات القدرة على استخدام بروتوكولات مثل NFS لتخزين واسترجاع الكائنات في Amazon S3؟
أ. Amazon FSx for Lustre
ب. AWS Storage Gateway volume gateway
*ج. AWS Storage Gateway file gateway
د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/143774-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام تحليل الفيديو الآلي (automated video analysis) لتحديد الموظفين الذين يدخلون إلى مكاتبها.\nأي خدمة AWS ستلبي هذا المطلب؟
*أ. Amazon Rekognition
ب. Amazon Polly
ج. Amazon Cognito
د. AWS Lambda
https://www.examtopics.com/discussions/amazon/view/144990-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استضافة خادم ويب على مثيلات Amazon EC2 لمدة عام واحد على الأقل. لا يمكن لخادم الويب تحمل الانقطاع.\nأي خيار شراء مثيل EC2 سيلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
أ. On-Demand Instances
*ب. Partial Upfront Reserved Instances
ج. Spot Instances
د. No Upfront Reserved Instances
https://www.examtopics.com/discussions/amazon/view/151270-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تطلب شركة تقارير PCI (Payment Card Industry) تتحقق من الفعالية التشغيلية لضوابط أمان AWS.\nكيف يجب على الشركة الحصول على هذه التقارير؟
أ. الاتصال بـ AWS Support.
*ب. تنزيل التقارير من AWS Artifact.
ج. تنزيل التقارير من AWS Security Hub.
د. الاتصال بمدير حساب تقني (TAM) من AWS.
https://www.examtopics.com/discussions/amazon/view/142140-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon Aurora كخدمة قاعدة بيانات لها. تريد الشركة تشفير قواعد البيانات والنسخ الاحتياطية لقاعدة البيانات.\nأي طرف يدير تشفير مجموعات قواعد البيانات (database clusters) ولقطات قاعدة البيانات (database snapshots)، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. AWS
*ب. الشركة
ج. شركاء AWS Marketplace
د. شركاء الطرف الثالث
https://www.examtopics.com/discussions/amazon/view/140766-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة تطبيق ويب على مثيلات Amazon EC2. تريد الشركة تنفيذ شروط مخصصة (custom conditions) لتصفية والتحكم في حركة مرور الويب الواردة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon GuardDuty
*ب. AWS WAF
ج. Amazon Macie
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/140806-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الحفاظ على إنتاجية النطاق الترددي (bandwidth throughput) وتوفير تجربة شبكة أكثر اتساقًا من اتصالات الإنترنت العامة.\nأي خدمة AWS يجب على الشركة اختيارها؟
أ. AWS VPN
*ب. AWS Direct Connect
ج. Amazon Connect
د. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/143208-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام بناء جملة SQL (SQL syntax) لإجراء استعلام مباشر (direct query) للكائنات في دلو Amazon S3.\nأي خدمة AWS يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Glue
*ب. Amazon Athena
ج. AWS Lambda
د. Amazon Kinesis
https://www.examtopics.com/discussions/amazon/view/141280-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مبادئ التصميم مضمنة في ركيزة الموثوقية (reliability pillar) لإطار عمل AWS Well-Architected Framework؟ (اختر اثنين)
*أ. التعافي التلقائي من الفشل (Automatically recover from failure).
ب. منح حق الوصول للجميع لزيادة حصص خدمة AWS.
*ج. التوقف عن تخمين السعة (Stop guessing capacity).
د. تصميم التطبيقات للعمل في منطقة توفر واحدة (single Availability Zone).
هـ. التخطيط لزيادة حصص خدمة AWS أولاً في منطقة AWS ثانوية.
https://www.examtopics.com/discussions/amazon/view/151278-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يمكن للشركات استخدامها للاشتراك في خلاصات RSS (RSS feeds) للحصول على تحديثات حول جميع مشكلات خدمة AWS؟
أ. Amazon Simple Notification Service (Amazon SNS)
*ب. AWS Health Dashboard
ج. AWS Config
د. AWS CodeCommit
https://www.examtopics.com/discussions/amazon/view/140792-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة مثيلات Amazon EC2 في معمل أبحاث. تعمل المثيلات لمدة 3 ساعات كل أسبوع ولا يمكن مقاطعتها.\nما هو خيار شراء المثيلات الأكثر فعالية من حيث التكلفة لتلبية هذه المتطلبات؟
أ. Compute Savings Plan
*ب. On-Demand Instances
ج. Convertible Reserved Instances
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/142886-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مستخدم AWS جديد إلى التفاعل مع AWS Support باستخدام استدعاءات API.\nأي خطة دعم AWS ستلبي هذا المطلب بأكثر طريقة فعالة من حيث التكلفة؟
أ. AWS Basic Support
ب. AWS Developer Support
*ج. AWS Business Support
د. AWS Enterprise Support
https://www.examtopics.com/discussions/amazon/view/140767-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: هاجرت شركة إلى سحابة AWS. الآن تدفع الشركة مقابل الخدمات حسب الحاجة.\nأي ميزة من ميزات الحوسبة السحابية تستفيد منها الشركة؟
أ. التوقف عن إنفاق الأموال على تشغيل وصيانة مراكز البيانات
ب. زيادة السرعة والرشاقة
ج. النشر عالميًا في دقائق
*د. مقايضة النفقات الثابتة بنفقات متغيرة
https://www.examtopics.com/discussions/amazon/view/144995-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ستقوم شركة بتشغيل عبء عمل حاسوبي يمكن التنبؤ به (predictable compute workload) على مثيلات Amazon EC2 للسنوات الثلاث القادمة. عبء العمل هام للشركة. تريد الشركة تحسين التكاليف لتشغيل عبء العمل.\nأي حل سيلبي هذه المتطلبات؟
أ. Spot Instances
ب. Dedicated Hosts
*ج. Savings Plans
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/142508-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تقدير تكلفة بنية AWS الخاصة بها قبل الترحيل.\nأي خدمة أو ميزة AWS ستلبي هذا المطلب؟
أ. Amazon Detective
ب. AWS Budgets
ج. AWS Resource Explorer
*د. AWS Pricing Calculator
https://www.examtopics.com/discussions/amazon/view/140768-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة وصول موظفيها إلى حسابات AWS متعددة بشكل مركزي.\nأي خدمة أو ميزة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. AWS Identity and Access Management Access Analyzer
ب. AWS Secrets Manager
*ج. AWS IAM Identity Center
د. AWS Security Token Service (AWS STS)
https://www.examtopics.com/discussions/amazon/view/144491-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تتلقى جامعة منحة لإجراء بحث باستخدام خدمات AWS. يحتاج فريق البحث إلى التأكد من أن أموال المنحة تكفي طوال العام الدراسي. قرر الفريق تخصيصًا شهريًا يصل إلى إجمالي مبلغ المنحة.\nأي خدمة أو ميزة AWS ستخطر الفريق إذا تجاوز الإنفاق المبلغ المخطط له؟
*أ. AWS Budgets
ب. Cost Explorer
ج. علامات تخصيص التكلفة (Cost allocation tags)
د. فئات التكلفة (Cost categories)
https://www.examtopics.com/discussions/amazon/view/141003-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: شركة لديها حسابات وفرق متعددة تريد إعداد بيئة AWS جديدة متعددة الحسابات (multi-account).\nأي خدمة AWS تدعم هذا المطلب؟
أ. AWS CloudFormation
*ب. AWS Control Tower
ج. AWS Config
د. Amazon Virtual Private Cloud (Amazon VPC)
https://www.examtopics.com/discussions/amazon/view/141005-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى الوصول إلى الفحوصات والتوصيات التي تساعد الشركة على اتباع أفضل ممارسات AWS لتحسين التكلفة والأمان والتسامح مع الأخطاء والأداء وحصص الخدمة.\nأي مجموعة من خدمة AWS وخطة دعم AWS على حساب AWS ستلبي هذه المتطلبات؟
أ. AWS Trusted Advisor مع AWS Developer Support
ب. AWS Health Dashboard مع AWS Enterprise Support
*ج. AWS Trusted Advisor مع AWS Business Support
د. AWS Health Dashboard مع AWS Enterprise On-Ramp Support
https://www.examtopics.com/discussions/amazon/view/141006-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تساعد المستخدمين على تخطيط وتتبع بيانات ترحيل مخزون الخادم والتطبيق (server and application inventory migration data) إلى AWS؟
أ. Amazon CloudWatch
ب. AWS DataSync
*ج. AWS Migration Hub
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/141007-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي فريق أو عرض AWS يساعد العملاء على تسريع اعتماد السحابة من خلال المشاركات المدفوعة (paid engagements) في أي من عدة مجالات تخصصية؟
أ. AWS Enterprise Support
ب. مهندسو حلول AWS (AWS solutions architects)
*ج. AWS Professional Services
د. مديرو حسابات AWS (AWS account managers)
https://www.examtopics.com/discussions/amazon/view/141008-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى شراء مثيلات Amazon EC2 لدعم تطبيق سيعمل بشكل مستمر لأكثر من عام واحد.\nأي خيار شراء مثيل EC2 يلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
أ. Dedicated Instances
ب. Spot Instances
*ج. Reserved Instances
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/141009-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي لغات برمجة يدعمها حاليًا AWS Cloud Development Kit (AWS CDK)؟ (اختر اثنين)
*أ. Python
ب. Swift
*ج. TypeScript
د. Ruby
هـ. PHP
https://www.examtopics.com/discussions/amazon/view/141010-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS تمنح المستخدمين القدرة على توفير البنية التحتية لـ AWS برمجيًا (programmatically)؟
*أ. AWS Cloud Development Kit (AWS CDK)
ب. Amazon CodeGuru
ج. AWS Config
د. AWS CodeCommit
https://www.examtopics.com/discussions/amazon/view/144997-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS تسمح للشركة بامتلاك القسم الخاص بها المعزول منطقيًا (logically isolated section) من سحابة AWS؟
أ. AWS VPN
ب. مناطق التوفر (Availability Zones)
*ج. Amazon Virtual Private Cloud (Amazon VPC)
د. مناطق AWS (AWS Regions)
https://www.examtopics.com/discussions/amazon/view/147627-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من الإجراءات التالية يتم التحكم فيها باستخدام AWS Identity and Access Management (IAM)؟ (اختر اثنين)
*أ. التحكم في الوصول إلى واجهات برمجة تطبيقات خدمة AWS (AWS service APIs) والموارد المحددة الأخرى.
ب. توفير كشف التهديدات الذكي (intelligent threat detection) والمراقبة المستمرة.
*ج. حماية بيئة AWS باستخدام المصادقة متعددة العوامل (MFA).
د. منح المستخدمين حق الوصول إلى مراكز بيانات AWS.
هـ. توفير حماية جدار الحماية للتطبيقات من هجمات الويب الشائعة.
https://www.examtopics.com/discussions/amazon/view/151281-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لماذا يتم استخدام قوالب AWS CloudFormation؟
*أ. لتقليل وقت التوفير (provisioning time) باستخدام الأتمتة.
ب. لنقل البنية التحتية الحالية إلى شركة أخرى.
ج. لإعادة استخدام البنية التحتية المحلية في سحابة AWS.
د. لنشر بنية تحتية كبيرة دون آثار تكلفة.
https://www.examtopics.com/discussions/amazon/view/151282-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة AWS Identity and Access Management (IAM).\nمن يمكنه إدارة مفاتيح الوصول للمستخدم الجذر (root user) لحساب AWS؟
أ. مستخدمو IAM في نفس الحساب الذين مُنحوا الإذن
ب. أدوار IAM في أي حساب مُنحت الإذن
ج. مستخدمو وأدوار IAM الذين مُنحوا الإذن
*د. مالك حساب AWS
https://www.examtopics.com/discussions/amazon/view/147628-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مجموعة تشارك المسؤولية مع AWS لأمان وامتثال حسابات وموارد AWS؟
أ. بائعو الطرف الثالث
*ب. العملاء
ج. شركاء إعادة البيع (Reseller partners)
د. موفرو الإنترنت
https://www.examtopics.com/discussions/amazon/view/151283-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحديث تطبيق معالجة البيانات عبر الإنترنت (online data processing application) الخاص بها من خلال تنفيذ خدمات قائمة على الحاويات (container-based services) تعمل لمدة 4 ساعات في كل مرة. لا تريد الشركة توفير أو إدارة مثيلات الخادم.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Lambda
*ب. AWS Fargate
ج. Amazon EC2
د. AWS Elastic Beanstalk
https://www.examtopics.com/discussions/amazon/view/148241-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي منظور من إطار اعتماد سحابة AWS (AWS CAF) يركز على تنظيم جرد (inventory) لمنتجات البيانات في كتالوج البيانات (data catalog)؟
أ. العمليات (Operations)
*ب. الحوكمة (Governance)
ج. الأعمال (Business)
د. المنصة (Platform)
https://www.examtopics.com/discussions/amazon/view/144137-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة عبء عمل الإنتاج الخاص بها في سحابة AWS. تحتاج الشركة إلى اختيار إحدى خطط دعم AWS.\nأي من خطط دعم AWS ستلبي هذه المتطلبات بأقل تكلفة؟
أ. Developer
ب. Enterprise On-Ramp
ج. Enterprise
*د. Business
https://www.examtopics.com/discussions/amazon/view/144492-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام Amazon S3 لتخزين الملفات الصوتية التي يبلغ حجم كل منها 5 ميغابايت. نادرًا ما تصل الشركة إلى الملفات، ولكن يجب أن تكون الشركة قادرة على استرداد الملفات فورًا.\nأي فئة تخزين S3 ستلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
أ. S3 Standard
*ب. S3 Standard-Infrequent Access (S3 Standard-IA)
ج. S3 Glacier Flexible Retrieval
د. S3 Glacier Deep Archive
https://www.examtopics.com/discussions/amazon/view/150492-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إعداد اتصال شبكة آمن (secure network connection) من المباني المحلية إلى سحابة AWS في غضون أسبوع واحد.\nأي حل سيلبي هذه المتطلبات؟
أ. AWS Direct Connect
ب. Amazon VPC
*ج. AWS Site-to-Site VPN
د. موقع حافة (Edge location)
https://www.examtopics.com/discussions/amazon/view/145421-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مسؤول الامتثال في الشركة مراجعة تقارير AWS Service Organization Control (SOC).\nأي خدمة أو ميزة AWS يجب على مسؤول الامتثال استخدامها لإكمال هذه المهمة؟
*أ. AWS Artifact
ب. AWS Concierge Support
ج. AWS Support
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147642-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتصميم أعباء عمل في سحابة AWS. تريد الشركة أن تؤدي أعباء العمل وظيفتها المقصودة بشكل صحيح ومتسق طوال دورة حياتها.\nأي ركيزة من إطار عمل AWS Well-Architected Framework يمثل هذا الهدف؟
أ. التميز التشغيلي
ب. الأمان
*ج. الموثوقية
د. كفاءة الأداء
https://www.examtopics.com/discussions/amazon/view/147650-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تُستخدم لتوفير بيانات اعتماد أمان اتحادية (federated security credentials) مؤقتًا للوصول إلى موارد AWS؟
أ. Amazon GuardDuty
*ب. AWS Simple Token Service (AWS STS)
ج. AWS Secrets Manager
د. AWS Certificate Manager
https://www.examtopics.com/discussions/amazon/view/147651-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تحويل ملفات الفيديو والملفات الصوتية إلى تنسيق يمكن تشغيله على الهواتف الذكية.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. Amazon Comprehend
ب. Amazon Rekognition
*ج. Amazon Elastic Transcoder
د. Amazon Polly
https://www.examtopics.com/discussions/amazon/view/145422-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مطور إلى استخدام قالب موحد (standardized template) لإنشاء نسخ من بنية AWS الخاصة بالشركة لبيئات التطوير والاختبار والإنتاج.\nأي خدمة AWS يجب على المطور استخدامها لتلبية هذا المطلب؟
أ. AWS Cloud Map
*ب. AWS CloudFormation
ج. Amazon Cloud Front
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/151290-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يمكنها إنشاء اتصال شبكة خاص (private network connection) من المباني المحلية إلى سحابة AWS؟
أ. AWS Config
ب. Virtual Private Cloud (Amazon VPC)
*ج. AWS Direct Connect
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/147660-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: بموجب نموذج المسؤولية المشتركة لـ AWS، أي من التالي هو مسؤولية العميل؟
أ. تدمير محركات الأقراص (Shred disk drives) قبل مغادرتها مركز البيانات.
ب. منع العملاء من جمع الحزم (packets) أو جمع حركة المرور على مستوى برنامج Hypervisor.
*ج. تصحيح نظام التشغيل الضيف (guest operating system) بأحدث تصحيحات الأمان.
د. الحفاظ على أنظمة الأمان التي توفر المراقبة المادية لمراكز البيانات.
https://www.examtopics.com/discussions/amazon/view/147661-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تستخدم تحويل الكلام إلى نص (speech-to-text conversion) لمساعدة المستخدمين في إنشاء ملاحظات الاجتماع؟
أ. Amazon Polly
ب. Amazon Textract
ج. Amazon Rekognition
*د. Amazon Transcribe
https://www.examtopics.com/discussions/amazon/view/147662-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو أداة AWS توفر للمستخدمين واجهة رسومية (graphical interface) يمكنهم استخدامها لإدارة خدمات AWS؟
أ. AWS Copilot
ب. AWS CLI
*ج. AWS Management Console
د. مجموعات تطوير البرامج (SDKs) من AWS
https://www.examtopics.com/discussions/amazon/view/147663-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة عبء عمل سيعمل بشكل مستمر لمدة عام واحد. لا يمكن لعبء العمل تحمل انقطاعات الخدمة.\nأي خيار شراء Amazon EC2 سيكون الأكثر فعالية من حيث التكلفة؟
*أ. All Upfront Reserved Instances
ب. Partial Upfront Reserved Instances
ج. Dedicated Instances
د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/147664-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: هاجرت شركة أنظمتها إلى سحابة AWS. الأنظمة ذات حجم مناسب (rightsized)، ولم يكشف مراجعة الأمان عن أي مشكلات. يجب على الشركة ضمان عدم تعريض هذه البنية التحتية المحسّنة (optimized) لـ AWS للخطر بسبب التطورات أو التكاملات أو التغييرات أو نمو استخدام النظام.\nأي خدمة AWS يجب على الشركة استخدامها للإبلاغ عن التحسين والأمان المستمرين؟
*أ. AWS Trusted Advisor
ب. AWS Health Dashboard
ج. Amazon Connect
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/147665-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تتكامل مع خدمات AWS الأخرى لتوفير القدرة على تشفير البيانات أثناء الراحة (data at rest)؟
*أ. AWS Key Management Service (AWS KMS)
ب. AWS Certificate Manager (ACM)
ج. AWS Identity and Access Management (IAM)
د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/147666-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تتبع التكلفة والاستخدام الشهري لجميع مثيلات Amazon EC2 في بيئة AWS محددة.\nأي خدمة أو أداة AWS ستلبي هذه المتطلبات؟
أ. AWS Cost Anomaly Detection
*ب. AWS Budgets
ج. AWS Compute Optimizer
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147667-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تستخدم مواقع الحافة (edge locations) لتخزين المحتوى مؤقتًا (cache content)؟
أ. Amazon Kinesis
ب. Amazon Simple Queue Service (Amazon SQS)
*ج. Amazon CloudFront
د. Amazon Route 53
https://www.examtopics.com/discussions/amazon/view/147673-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الوصول بشكل آمن إلى دلو Amazon S3 من مثيل Amazon EC2 دون الوصول إلى الإنترنت.\nما الذي يجب على الشركة استخدامه لتحقيق هذا الهدف؟
أ. اتصال VPN
ب. بوابة الإنترنت (Internet gateway)
*ج. نقطة نهاية VPC (VPC endpoint)
د. بوابة NAT (NAT gateway)
https://www.examtopics.com/discussions/amazon/view/147674-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمات AWS هي بدون خادم (serverless)؟ (اختر اثنين)
*أ. AWS Fargate
ب. Amazon Managed Streaming for Apache Kafka
ج. Amazon EMR
*د. Amazon S3
هـ. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147676-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحسين العمليات والإجراءات باستمرار لتقديم قيمة تجارية (business value).\nأي ركيزة من إطار عمل AWS Well-Architected Framework يمثل هذا الهدف؟
أ. كفاءة الأداء
*ب. التميز التشغيلي
ج. الموثوقية
د. الاستدامة
https://www.examtopics.com/discussions/amazon/view/146252-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يجب على الشركة استخدامها لتنظيم وتوصيف والبحث عن أعداد كبيرة من الصور؟
أ. Amazon Transcribe
*ب. Amazon Rekognition
ج. Amazon Aurora
د. Amazon QuickSight
https://www.examtopics.com/discussions/amazon/view/147678-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS متاحة دائمًا مجانًا للمستخدمين؟
أ. Amazon Athena
*ب. AWS Identity and Access Management (IAM)
ج. AWS Secrets Manager
د. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/147679-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تشغيل بعض أعباء العمل الخاصة بها محليًا للامتثال للمبادئ التوجيهية التنظيمية. تريد الشركة استخدام سحابة AWS لتشغيل أعباء العمل غير المطلوب أن تكون محلية. تريد الشركة أيضًا أن تكون قادرة على استخدام نفس استدعاءات API لأعباء العمل المحلية وأعباء العمل السحابية.\nأي خدمة أو ميزة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Dedicated Hosts
*ب. AWS Outposts
ج. مناطق التوفر (Availability Zones)
د. AWS Wavelength
https://www.examtopics.com/discussions/amazon/view/147680-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو حالة الاستخدام الموصى بها (recommended use case) لمثيلات Amazon EC2 On-Demand؟
أ. عبء عمل بحالة مستقرة (steady-state workload) يتطلب تكوين مثيل EC2 معين لفترة طويلة من الزمن
ب. عبء عمل يمكن مقاطعته (interrupted) لمشروع يتطلب أقل تكلفة ممكنة
*ج. عبء عمل لا يمكن التنبؤ به (unpredictable workload) لا يتطلب التزامًا طويل الأجل
د. عبء عمل من المتوقع أن يستمر لأكثر من عام واحد
https://www.examtopics.com/discussions/amazon/view/147681-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لاحظ مسؤول أنه تم حذف موارد AWS متعددة أمس.\nأي خدمة AWS ستساعد في تحديد السبب ومعرفة المستخدم الذي حذف الموارد؟
*أ. AWS CloudTrail
ب. Amazon Inspector
ج. Amazon GuardDuty
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/146253-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: في أي الحالات يجب على الشركة إنشاء مستخدم IAM بدلاً من دور IAM (IAM role)؟
أ. عندما يتطلب تطبيق يعمل على مثيلات Amazon EC2 الوصول إلى خدمات AWS الأخرى
*ب. عندما تنشئ الشركة بيانات اعتماد الوصول إلى AWS للأفراد
ج. عندما تنشئ الشركة تطبيقًا يعمل على هاتف محمول يقدم طلبات إلى AWS
د. عندما تحتاج الشركة إلى إضافة مستخدمين إلى مجموعات IAM
هـ. عندما يتم مصادقة المستخدمين في شبكة الشركة ويريدون أن يكونوا قادرين على استخدام AWS دون الحاجة إلى تسجيل الدخول مرة ثانية
https://www.examtopics.com/discussions/amazon/view/147684-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستضيف شركة تطبيق ويب على AWS. قامت الشركة بتحسين توفر (availability) تطبيقها عن طريق توفير مثيلات Amazon EC2 متعددة. تريد الشركة توزيع حركة المرور الخاصة بها عبر مثيلات EC2 مع توفير نقطة اتصال واحدة (single point of contact) لعملاء الويب.\nأي خدمة AWS يمكنها توزيع حركة المرور على مثيلات EC2 المتعددة كأهداف (targets)؟
أ. نقاط نهاية VPC (VPC endpoints)
*ب. Application Load Balancer
ج. بوابة NAT (NAT gateway)
د. بوابة الإنترنت (Internet gateway)
https://www.examtopics.com/discussions/amazon/view/146255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نقل خادم Windows Server 2022 افتراضي يعمل حاليًا في مركز البيانات الخاص بها إلى AWS. تريد الشركة تحويل الخادم الحالي تلقائيًا ليعمل مباشرة على البنية التحتية لـ AWS بدلاً من الأجهزة الظاهرية (visualized hardware).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS DataSync
ب. AWS Database Migration Service (AWS DMS)
ج. AWS Application Discovery Service
*د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/146257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة ترحيل تطبيقاتها القائمة على الخادم (server-based applications) إلى سحابة AWS. تريد الشركة تحديد التكلفة الإجمالية للملكية (total cost of ownership) لموارد الحوسبة الخاصة بها التي ستستضيف على سحابة AWS.\nأي مجموعة من خدمات أو أدوات AWS ستلبي هذه المتطلبات؟ (اختر اثنين)
*أ. AWS Pricing Calculator
*ب. Migration Evaluator
ج. AWS Support Center
د. AWS Application Discovery Service
هـ. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147718-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة بحيرات بيانات (data lakes) مصممة لأعباء عمل الحوسبة عالية الأداء (HPC).\nأي نوع مثيل Amazon EC2 يجب على الشركة استخدامه لتلبية هذه المتطلبات؟
أ. مثيلات الأغراض العامة (General purpose instances)
*ب. مثيلات محسّنة للحوسبة (Compute optimized instances)
ج. مثيلات محسّنة للذاكرة (Memory optimized instances)
د. مثيلات محسّنة للتخزين (Storage optimized instances)
https://www.examtopics.com/discussions/amazon/view/147719-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للترحيل إلى سحابة AWS. تجري الشركة تحولًا تنظيميًا وتريد أن تصبح أكثر استجابة لاستفسارات العملاء وملاحظاتهم.\nأي مهمة يجب على الشركة تنفيذها لتلبية هذه المتطلبات، وفقًا لإطار اعتماد سحابة AWS (AWS CAF)؟ (اختر اثنين)
*أ. إعادة تنظيم الفرق للتركيز على المنتجات وتدفقات القيمة (value streams).
ب. إنشاء عروض قيمة جديدة (new value propositions) بمنتجات وخدمات جديدة.
*ج. استخدام الأساليب الرشيقة (agile methods) للتكرار والتطور بسرعة.
د. استخدام منصة بيانات وتحليلات جديدة لإنشاء رؤى قابلة للتنفيذ (actionable insights).
هـ. ترحيل وتحديث البنية التحتية القديمة (legacy infrastructure).
https://www.examtopics.com/discussions/amazon/view/147721-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة بناء وتدريب ونشر نماذج التعلم الآلي (ML).\nأي خدمة AWS يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon Personalize
ب. Amazon Comprehend
ج. Amazon Forecast
*د. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/147732-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو أداة AWS تقدم توصيات لمساعدة المستخدمين في الحصول على مثيلات Amazon EC2 ذات الحجم المناسب (rightsized) بناءً على بيانات استخدام عبء العمل التاريخية (historical workload usage data)؟
أ. AWS Pricing Calculator
*ب. AWS Compute Optimizer
ج. AWS App Runner
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/147733-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تشغيل تطبيق على مثيلات Amazon EC2 دون انقطاع.\nأي خيار شراء مثيل EC2 سيلبي هذا المطلب بأكثر طريقة فعالة من حيث التكلفة؟
أ. Standard Reserved Instances
ب. Convertible Reserved Instances
*ج. On-Demand Instances
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/147735-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مبدأ تصميم يتماشى مع ركيزة كفاءة الأداء (performance efficiency pillar) في إطار عمل AWS Well-Architected Framework؟
*أ. استخدام البنى بدون خادم (serverless architectures)
ب. القياس الأفقي (Scaling horizontally)
ج. قياس تكلفة أعباء العمل
د. استخدام الخدمات المُدارة (managed services)
https://www.examtopics.com/discussions/amazon/view/145417-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي نوع من أعباء العمل يجب على الشركة تشغيله على Amazon EC2 Spot Instances؟
أ. عبء عمل بحالة مستقرة (steady-state workload) يتطلب تكوين مثيل EC2 معين لفترة طويلة من الزمن
*ب. عبء عمل يمكن مقاطعته (interrupted) ويمكنه التحكم في التكاليف
ج. عبء عمل بحالة مستقرة لا يتطلب التزامًا طويل الأجل
د. عبء عمل لا يمكن مقاطعته ويمكنه التحكم في التكاليف
https://www.examtopics.com/discussions/amazon/view/147739-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة حسابات AWS متعددة. تحتاج الشركة إلى تلقي فاتورة موحدة (consolidated bill) من AWS ويجب عليها إدارة الأمان والامتثال مركزيًا.\nأي خدمة أو ميزة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Cost and Usage Report
*ب. AWS Organizations
ج. AWS Config
د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/147740-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لأي حالة استخدام تكون مثيلات Amazon EC2 On-Demand الأكثر فعالية من حيث التكلفة؟
أ. تحويل ترميز فيديو مكثف حسابيًا (Compute-intensive video transcoding) يمكن إعادة تشغيله إذا لزم الأمر
*ب. مثيل قيد الاستخدام المستمر لمدة شهر واحد لإجراء اختبارات ضمان الجودة (quality assurance tests)
ج. مثيل يقوم بتشغيل خادم ويب سيعمل لمدة عام واحد
د. مثيل يقوم بتشغيل قاعدة بيانات ستعمل لمدة 3 سنوات
https://www.examtopics.com/discussions/amazon/view/146791-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي عرض AWS يمكنه تحليل بيئة AWS الخاصة بالشركة لاكتشاف الثغرات الأمنية (security vulnerabilities) على مثيلات Amazon EC2؟
*أ. Amazon Inspector
ب. Amazon Macie
ج. AWS Shield Standard
د. مجموعات الأمان (Security groups)
https://www.examtopics.com/discussions/amazon/view/147742-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لتعيين موظفين جدد سيعملون عن بُعد. تحتاج الشركة إلى إعداد أجهزة سطح مكتب Windows افتراضية لإنشاء بيئة عمل للموظفين الجدد. يجب أن يكون الموظفون قادرين على الوصول إلى بيئة العمل من أي مكان وباستخدام أجهزة الكمبيوتر الخاصة بهم أو متصفح الويب.\nأي خدمة أو ميزة AWS ستلبي هذه المتطلبات؟
أ. Dedicated Hosts
ب. AWS Global Accelerator
*ج. Amazon Workspaces
د. Amazon CloudFront
https://www.examtopics.com/discussions/amazon/view/147743-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تصور وإدارة تكاليف واستخدام AWS Cloud لفترة زمنية محددة.\nأي خدمة أو ميزة AWS ستلبي هذه المتطلبات؟
*أ. Cost Explorer
ب. Consolidated billing
ج. AWS Organizations
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/146263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تدعم محركات قاعدة بيانات MySQL؟
أ. Amazon Dynamo DВ
*ب. Amazon RDS
ج. Amazon DocumentDB (with MongoDB compatibility)
د. Amazon ElastiCache
https://www.examtopics.com/discussions/amazon/view/147744-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بإصدار تطبيق هام للأعمال. قبل الإصدار، تحتاج الشركة إلى مساعدة في التخطيط الاستراتيجي من AWS. أثناء الإصدار، تحتاج الشركة إلى إدارة الأحداث (infrastructure event management) ودعم في الوقت الفعلي من AWS.\nما الذي يجب على الشركة فعله لتلبية هذه المتطلبات؟
أ. الوصول إلى AWS Trusted Advisor
ب. الاتصال بـ AWS Partner Network (APN)
*ج. الاشتراك في AWS Enterprise Support
د. الاتصال بـ AWS Professional Services
https://www.examtopics.com/discussions/amazon/view/147746-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحسين إنتاجية الموظفين من خلال توفير طريقة للموظفين للبحث عن الأسئلة واسترداد إجابات محددة. تريد الشركة استخدام واجهة بحث ذكية واحدة (single intelligent search interface).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon Connect
*ب. Amazon Kendra
ج. Amazon Lex
د. Amazon Comprehend
https://www.examtopics.com/discussions/amazon/view/147747-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة حلاً من Amazon S3 يوفر الوصول إلى تخزين الكائنات (object storage) في حدود ملي ثانية واحدة (single-digit milliseconds).\nأي حل سيلبي هذه المتطلبات؟
*أ. S3 Express One Zone
ب. S3 Standard
ج. S3 Glacier Flexible Retrieval
د. S3 Glacier Instant Retrieval
https://www.examtopics.com/discussions/amazon/view/145956-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة عبء عمل Amazon EC2 لا يمكن مقاطعته على AWS 24 ساعة في اليوم، 7 أيام في الأسبوع. ستحتاج الشركة إلى نفس عائلة المثيل ونوع المثيل لتشغيل عبء العمل للـ 12 شهرًا القادمة.\nأي مجموعة من خيارات الشراء يجب على الشركة اختيارها لتحسين التكاليف إلى أقصى حد؟ (اختر اثنين)
*أ. Standard Reserved Instance
ب. Convertible Reserved Instance
ج. Compute Savings Plan
د. Spot Instance
*هـ. All Upfront payment
https://www.examtopics.com/discussions/amazon/view/147111-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل كود تطبيقها دون الحاجة إلى توفير وإدارة الخوادم.\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS Glue
*ب. AWS Lambda
ج. AWS CodeDeploy
د. Amazon CodeGuru
https://www.examtopics.com/discussions/amazon/view/147748-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للترحيل إلى سحابة AWS. تحتاج الشركة إلى فهم الاستخدام والتكوين المحلي الحالي. لا تريد الشركة تكرار أعباء العمل الخاصة بها على AWS، بعد.\nأي خدمة أو أداة AWS ستلبي هذه المتطلبات؟
*أ. AWS Application Discovery Service
ب. AWS Application Migration Service
ج. Cloud Migration Factory
د. AWS Transfer Family
https://www.examtopics.com/discussions/amazon/view/147185-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لإطلاق موقع ويب للتجارة الإلكترونية يحتوي على العديد من الصور لكتالوج المنتجات. تريد الشركة إبقاء تكلفة تشغيل موقع الويب ضمن ميزانية محددة.\nأي خدمة أو أداة AWS يجب على الشركة استخدامها لمراقبة التكاليف المستمرة لموقع الويب؟
*أ. AWS Cost Explorer
ب. AWS SDKs
ج. EC2 Image Builder
د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/147751-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنشر العديد من التطبيقات العامة خلف Application Load Balancers. تريد الشركة تحسين أداء التطبيقات.\nأي خدمة AWS ستلبي هذه المتطلبات؟
*أ. AWS Global Accelerator
ب. Amazon Connect
ج. Amazon ElastiCache
د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/147752-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة تطبيق محلي. أوقات معالجة التطبيق أقل من 5 دقائق ولا يتم استدعاؤه إلا عدة مرات كل يوم. تريد الشركة نقل التطبيق إلى سحابة AWS.\nأي خدمة AWS ستدعم هذا التطبيق بأكثر طريقة فعالة من حيث التكلفة؟
أ. Amazon Elastic Container Service (Amazon ECS)
*ب. AWS Lambda
ج. Amazon Elastic Kubernetes Service (Amazon EKS)
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147186-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة دمج مراكز الاتصال الخاصة بها لتحسين تجربة صوت العميل والدردشة مع وكلاء مركز الاتصال.\nأي خدمة أو أداة AWS ستلبي هذه المتطلبات؟
أ. Amazon Simple Notification Service (Amazon SNS)
ب. AWS Support Center
ج. Amazon Cognito
*د. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/147754-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى توفير مثيلات Amazon EC2 لا يمكن مقاطعتها، عند الحاجة، والدفع مقابل سعة الحوسبة بالثانية.\nأي خيار شراء مثيل EC2 سيلبي هذه المتطلبات؟
أ. Reserved Instances
ب. Spot Instances
*ج. On-Demand Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/147755-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يمكنها ترحيل مثيلات Amazon EC2 من منطقة AWS إلى أخرى؟
*أ. AWS Application Migration Service
ب. AWS Database Migration Service (AWS DMS)
ج. AWS DataSync
د. AWS Migration Hub
https://www.examtopics.com/discussions/amazon/view/147187-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى منع هجمات حقن SQL.\nأي خدمة أو ميزة AWS توفر هذه الوظيفة؟
*أ. AWS WAF
ب. قوائم التحكم بالوصول إلى الشبكة (Network ACLs)
ج. مجموعات الأمان (Security groups)
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147756-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل تطبيقها على مثيلات Amazon EC2. تحتاج الشركة إلى الاحتفاظ بالتطبيق محليًا (on-premises) لتلبية متطلبات الامتثال.\nأي عرض AWS سيلبي هذه المتطلبات؟
أ. Dedicated Instances
ب. Amazon CloudFront
ج. AWS Fargate
*د. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/147757-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة توصيل خدمات AWS المدعومة و VPCs الخاصة بها. لا تريد الشركة تعريض حركة المرور الداخلية للإنترنت العام.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon Inspector
*ب. AWS PrivateLink
ج. Amazon Connect
د. AWS Internet Gateway
https://www.examtopics.com/discussions/amazon/view/147758-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يمكنها إدارة أذونات (permissions) لموارد AWS باستخدام السياسات (policies)؟
أ. Amazon Inspector
ب. Amazon Detective
*ج. AWS Identity and Access Management (IAM)
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/147759-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تشغيل بعض أعباء العمل الخاصة بها في سحابة AWS. تحتاج الشركة إلى الاحتفاظ ببعض أعباء العمل في مركز البيانات الخاص بها لأسباب تتعلق بالامتثال.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWSConfig
*ب. AWS Outposts
ج. Amazon Lightsail
د. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/147760-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نشر تطبيق يخزن البيانات في قاعدة بيانات علائقية. تريد الشركة أن تتم إدارة مهام قاعدة البيانات، مثل النسخ الاحتياطية التلقائية (automated backups) ولقطات قاعدة البيانات (database snapshots)، بواسطة AWS.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon DocumentDB
*ب. Amazon RDS
ج. Amazon Elastic Block Store (Amazon EBS)
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/147188-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: شركة تدير خوادم محلية (on-premises servers) تقرر بدء خط أعمال جديد. تحدد الشركة أن هناك حاجة إلى خوادم إضافية لأعباء العمل الجديدة.\nأي ميزة من ميزات الحوسبة السحابية يمكن أن تساعد الشركة في توفير بنية تحتية إضافية بأسرع وقت ممكن؟
أ. الاستفادة من وفورات الحجم الهائلة
*ب. زيادة السرعة والرشاقة
ج. مقايضة النفقات الثابتة بنفقات متغيرة
د. النشر عالميًا في دقائق
https://www.examtopics.com/discussions/amazon/view/147761-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي ركيزة من إطار عمل AWS Well-Architected Framework تتماشى مع القدرة على إجراء تغييرات متكررة وصغيرة وقابلة للعكس على بنية AWS السحابية؟
أ. الأمان
ب. تحسين التكلفة
*ج. التميز التشغيلي
د. كفاءة الأداء
https://www.examtopics.com/discussions/amazon/view/147524-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مبدأ تصميم AWS يؤكد على تقليل الترابط (interdependencies) بين مكونات التطبيق؟
أ. قابلية التوسع
*ب. الاقتران غير المحكم (Loose coupling)
ج. الأتمتة
د. التخزين المؤقت (Caching)
https://www.examtopics.com/discussions/amazon/view/141202-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتشغيل تطبيق خادم ويب لإعداد التقارير على مثيلات Amazon EC2. يتم تشغيل التطبيق مرة واحدة كل أسبوع ومرة أخرى في نهاية الشهر. يمكن إيقاف تشغيل مثيلات EC2 عندما لا تكون قيد الاستخدام.\nما هو نموذج الفوترة الأكثر فعالية من حيث التكلفة لحالة الاستخدام هذه؟
أ. Standard Reserved Instances
ب. Convertible Reserved Instances
ج. On-Demand Capacity Reservations
*د. On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/147525-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بنقل بيئات التطوير والاختبار الخاصة بها إلى AWS لزيادة الرشاقة وتقليل التكلفة. نظرًا لأن هذه ليست أعباء عمل إنتاجية والخوادم غير مستغلة بالكامل، فإن الانقطاع العرضي (occasional unavailability) مقبول.\nما هو نموذج تسعير Amazon EC2 الأكثر فعالية من حيث التكلفة الذي سيلبي هذه المتطلبات؟
أ. Reserved Instances
ب. On-Demand Instances
*ج. Spot Instances
د. Dedicated Hosts
https://www.examtopics.com/discussions/amazon/view/144148-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تنشر شركة تطبيقها على مثيلات Amazon EC2. يواجه التطبيق أحيانًا زيادات مفاجئة في الطلب. تريد الشركة التأكد من أن تطبيقها يمكنه الاستجابة للتغيرات في الطلب بأقل تكلفة ممكنة.\nأي خدمة أو مفهوم AWS سيلبي هذه المتطلبات؟
*أ. AWS Auto Scaling
ب. AWS Compute Optimizer
ج. AWS Cost Explorer
د. إطار عمل AWS Well-Architected Framework
https://www.examtopics.com/discussions/amazon/view/151213-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تنظيم مستخدميها بحيث يمكن للشركة منح الأذونات للمستخدمين كمجموعة.\nأي خدمة أو أداة AWS يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. مجموعات الأمان (Security groups)
*ب. AWS Identity and Access Management (IAM)
ج. مجموعات الموارد (Resource groups)
د. AWS Security Hub
https://www.examtopics.com/discussions/amazon/view/151214-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تحديد من قام بالوصول إلى خدمة AWS والإجراء الذي تم تنفيذه لفترة زمنية معينة.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon CloudWatch
*ب. AWS CloudTrail
ج. AWS Security Hub
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/147526-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل عبء عمل مكثف لوحدة المعالجة المركزية (CPU-intensive) عبر مثيلات Amazon EC2 متعددة.\nأي نوع مثيل EC2 يجب على الشركة استخدامه لتلبية هذا المطلب؟
أ. مثيلات الأغراض العامة (General purpose instances)
*ب. مثيلات محسّنة للحوسبة (Compute optimized instances)
ج. مثيلات محسّنة للذاكرة (Memory optimized instances)
د. مثيلات محسّنة للتخزين (Storage optimized instances)
https://www.examtopics.com/discussions/amazon/view/147610-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي إجراء يجب على الشركة اتخاذه لتحسين الأمان في حساب AWS الخاص بها؟
*أ. طلب المصادقة متعددة العوامل (MFA) للمستخدمين المتميزين (privileged users).
ب. إزالة حساب المستخدم الجذر (root user).
ج. إنشاء مفتاح وصول (access key) للمستخدم الجذر لحساب AWS.
د. إنشاء مفتاح وصول لكل مستخدم متميز.
https://www.examtopics.com/discussions/amazon/view/151216-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تخزين ملفاتها في سحابة AWS. يحتاج المستخدمون إلى أن يكونوا قادرين على تنزيل هذه الملفات مباشرة باستخدام عنوان URL عام (public URL).\nأي خدمة أو ميزة AWS ستلبي هذا المطلب؟
أ. Amazon Redshift
ب. Amazon Elastic Block Store (Amazon EBS)
ج. Amazon Elastic File System (Amazon EFS)
*د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/142849-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي هي فوائد اقتصادية (economic benefits) لاستخدام سحابة AWS؟ (اختر اثنين)
*أ. التسعير على أساس الاستهلاك (Consumption-based pricing)
ب. التراخيص الدائمة (Perpetual licenses)
*ج. وفورات الحجم (Economies of scale)
د. AWS Enterprise Support بدون تكلفة إضافية
هـ. نموذج أحضر أجهزتك الخاصة (Bring-your-own-hardware model)
https://www.examtopics.com/discussions/amazon/view/147612-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تخزين بيانات غير متكررة الاستخدام (infrequently used data) لأرشفة البيانات والنسخ الاحتياطية طويلة الأجل.\nأي خدمة AWS أو فئة تخزين ستلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
أ. Amazon FSx for Lustre
ب. Amazon Elastic Block Store (Amazon EBS)
ج. Amazon Elastic File System (Amazon EFS)
*د. Amazon S3 Glacier Flexible Retrieval
https://www.examtopics.com/discussions/amazon/view/148583-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إنشاء ونشر لوحات معلومات ذكاء الأعمال التفاعلية (interactive business intelligence dashboards). تتطلب لوحات المعلومات رؤى مدعومة بالتعلم الآلي (machine learning).\nأي خدمة أو أداة AWS ستلبي هذه المتطلبات؟
أ. AWS Glue Studio
*ب. Amazon QuickSight
ج. Amazon Redshift
د. Amazon Athena
https://www.examtopics.com/discussions/amazon/view/151218-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام AWS. لدى الشركة متطلبات صارمة بشأن الوصول منخفض زمن الوصول (low-latency access) إلى الأنظمة المحلية وموقع البيانات (data residency).\nأي خدمة AWS يجب على الشركة استخدامها لتصميم حل يلبي هذه المتطلبات؟
أ. AWS Wavelength
ب. AWS Transit Gateway
ج. AWS Ground Station
*د. AWS Outposts
https://www.examtopics.com/discussions/amazon/view/144123-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى القدرة على الحصول على الموارد عندما تكون الموارد مطلوبة. تحتاج الشركة أيضًا إلى القدرة على تحرير الموارد عندما لا تكون هناك حاجة إليها.\nأي مفهوم AWS يمثل أهداف الشركة؟
أ. قابلية التوسع (Scalability)
ب. الاستدامة (Sustainability)
*ج. المرونة (Elasticity)
د. التميز التشغيلي
https://www.examtopics.com/discussions/amazon/view/151219-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام مثيلات Amazon EC2 لعبء عمل إنتاجي مستقر (stable production workload) سيعمل لمدة عام واحد.\nأي خيار شراء مثيل يلبي هذه المتطلبات بأكثر طريقة فعالة من حيث التكلفة؟
أ. Dedicated Hosts
*ب. Reserved Instances
ج. On-Demand Instances
د. Spot Instances
https://www.examtopics.com/discussions/amazon/view/151221-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تسجيل الدخول بشكل آمن إلى مثيلات Linux Amazon EC2.\nكيف يمكن للشركة تحقيق هذا الهدف؟
*أ. استخدام مفاتيح SSH.
ب. استخدام VPN.
ج. استخدام التشفير من طرف إلى طرف (end-to-end encryption).
د. استخدام Amazon Route 53.
https://www.examtopics.com/discussions/amazon/view/148514-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام خدمة حوسبة بدون خادم (serverless compute service) لتطبيق ما.\nأي خدمة AWS ستلبي هذا المطلب؟
*أ. AWS Lambda
ب. AWS CloudFormation
ج. AWS Elastic Beanstalk
د. Elastic Load Balancing
https://www.examtopics.com/discussions/amazon/view/148584-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة حلاً من شأنه أن يضبط تلقائيًا عدد مثيلات Amazon EC2 المستخدمة بناءً على الحمل الحالي.\nأي عرض AWS سيلبي هذه المتطلبات؟
أ. Dedicated Hosts
ب. مجموعات المواضع (Placement groups)
*ج. مجموعات Auto Scaling (Auto Scaling groups)
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/148055-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء بنية AWS لتسليم خلاصات بيانات في الوقت الفعلي (real-time data feeds) من مركز بيانات محلي إلى تطبيق يعمل على AWS. تحتاج الشركة إلى اتصال شبكة ثابت (consistent network connection) مع الحد الأدنى من زمن الوصول.\nما الذي يجب على الشركة استخدامه لتوصيل التطبيق ومركز البيانات لتلبية هذه المتطلبات؟
*أ. AWS Direct Connect
ب. الإنترنت العام
ج. AWS VPN
د. Amazon Connect
https://www.examtopics.com/discussions/amazon/view/151222-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمات AWS يمكنها استضافة قواعد بيانات PostgreSQL؟ (اختر اثنين)
أ. Amazon S3
*ب. Amazon Aurora
*ج. Amazon EC2
د. Amazon OpenSearch Service
هـ. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/148515-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة أن تعمل مثيلات Amazon EC2 الخاصة بها في بيئة عالية التوفر (highly available environment)، حتى في حالة حدوث كارثة طبيعية في منطقة جغرافية معينة.\nأي حل يحقق هذا الهدف؟
*أ. استخدام مثيلات EC2 في مناطق AWS متعددة.
ب. استخدام مثيلات EC2 في مواقع حافة (edge locations) متعددة.
ج. استخدام مثيلات EC2 في نفس منطقة التوفر (Availability Zone) ولكن في مناطق AWS مختلفة.
د. استخدام Amazon CloudFront مع تكوين مثيلات EC2 كمصدر (source).
https://www.examtopics.com/discussions/amazon/view/143583-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تسمح بمشاركة الملفات بين مثيلات Amazon EC2 متعددة؟
أ. AWS Direct Connect
ب. AWS Snowball Edge
ج. AWS Backup
*د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/148585-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى إدارة عمليات تسجيل دخول متعددة (multiple logins) عبر حسابات AWS متعددة داخل نفس المؤسسة في AWS Organizations.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon VPC
ب. Amazon GuardDuty
ج. Amazon Cognito
*د. AWS IAM Identity Center
https://www.examtopics.com/discussions/amazon/view/148387-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon WorkSpaces.\nأي مهمة هي مسؤولية AWS، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. إعداد المصادقة متعددة العوامل (MFA) لكل حساب مستخدم WorkSpaces.
*ب. ضمان السلامة البيئية والأمان للبنية التحتية لـ AWS التي تستضيف WorkSpaces.
ج. توفير الأمان لحسابات مستخدمي WorkSpaces من خلال AWS Identity and Access Management (IAM).
د. تكوين AWS CloudTrail لتسجيل استدعاءات API ونشاط المستخدم.
https://www.examtopics.com/discussions/amazon/view/151226-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مجموعة من خدمات AWS يمكن استخدامها لنقل قاعدة بيانات علائقية تجارية (commercial relational database) إلى قاعدة بيانات مفتوحة المصدر مُدارة بواسطة Amazon (Amazon-managed open-source database)؟ (اختر اثنين)
*أ. AWS Database Migration Service (AWS DMS)
ب. مجموعات تطوير البرامج (SDKs) من AWS
*ج. AWS Schema Conversion Tool
د. AWS Systems Manager
هـ. Amazon EMR
https://www.examtopics.com/discussions/amazon/view/151228-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تمنح المستخدمين وصولاً حسب الطلب ومُدار ذاتيًا (on-demand, self-service access) إلى تقارير التحكم في الامتثال (compliance control reports) لـ AWS؟
أ. AWS Config
ب. Amazon GuardDuty
ج. AWS Trusted Advisor
*د. AWS Artifact
https://www.examtopics.com/discussions/amazon/view/151229-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي هي توصيات أفضل ممارسات AWS لاستخدام AWS Identity and Access Management (IAM)؟ (اختر اثنين)
أ. استخدام المستخدم الجذر (root user) لحساب AWS للوصول اليومي.
ب. استخدام مفاتيح الوصول (access keys) والمفاتيح السرية (secret access keys) على Amazon EC2.
*ج. تدوير بيانات الاعتماد (credentials) بشكل منتظم.
د. إنشاء مجموعة مشتركة من مفاتيح الوصول لمسؤولي النظام.
*هـ. تكوين المصادقة متعددة العوامل (MFA).
https://www.examtopics.com/discussions/amazon/view/151230-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل استعلام رسم بياني (graph query) يوفر أسماء مستخدمي بطاقات الائتمان وعناوينهم ومعاملاتهم. تريد الشركة أن يظهر الرسم البياني ما إذا كانت الأسماء والعناوين والمعاملات تشير إلى احتمال وجود احتيال.\nأي خدمة قاعدة بيانات AWS ستلبي هذه المتطلبات؟
أ. Amazon DocumentDB (with MongoDB compatibility)
ب. Amazon Timestream
ج. Amazon DynamoDB
*د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/144181-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS توفر قدرة التعلم الآلي لاكتشاف وتحليل المحتوى في الصور ومقاطع الفيديو؟
أ. Amazon Connect
ب. Amazon Lightsail
ج. Amazon Personalize
*د. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/151231-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تمنح المستخدمين القدرة على نشر تكوينات بنية تحتية قابلة للتكرار بدرجة عالية (highly repeatable infrastructure configurations)؟
*أ. AWS CloudFormation
ب. AWS CodeDeploy
ج. AWS CodeBuild
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148520-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى توفير خدمة العملاء باستخدام المكالمات الصوتية وميزات الدردشة عبر الويب.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Aurora
*ب. Amazon Connect
ج. Amazon WorkSpaces
د. AWS Organizations
https://www.examtopics.com/discussions/amazon/view/147613-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS مصممة لمساعدة المستخدمين في التعامل مع كميات كبيرة من البيانات في بيئة مستودع بيانات (data warehouse environment)؟
أ. Amazon RDS
ب. Amazon DynamoDB
*ج. Amazon Redshift
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/144183-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء تطبيق ويب باستخدام AWS.\nأي خدمة AWS ستساعد في منع هجمات DDoS على طبقة الشبكة (network layer DDoS attacks) ضد تطبيق الويب؟
أ. AWS WAF
ب. AWS Firewall Manager
ج. Amazon GuardDuty
*د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/147614-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي هي مزايا الانتقال إلى سحابة AWS؟ (اختر اثنين)
أ. يمكن للمستخدمين تنفيذ جميع خدمات AWS في ثوانٍ.
ب. تتحمل AWS المسؤولية الكاملة عن أمان البنية التحتية والتطبيقات.
*ج. يختبر المستخدمون زيادة في السرعة والرشاقة.
*د. يستفيد المستخدمون من وفورات الحجم الهائلة.
هـ. يمكن للمستخدمين نقل الأجهزة من مركز البيانات الخاص بهم إلى سحابة AWS.
https://www.examtopics.com/discussions/amazon/view/175890-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة حوسبة AWS تمنح المستخدمين القدرة على تشغيل الحاويات (containers) بشكل آمن وموثوق على نطاق واسع؟
*أ. Amazon Elastic Container Service (Amazon ECS)
ب. Amazon Aurora
ج. Amazon Athena
د. Amazon Polly
https://www.examtopics.com/discussions/amazon/view/169698-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تدير شركة تطبيقًا على AWS يقوم بمهام مجمعة (batch jobs). التطبيق متسامح مع الأخطاء (fault-tolerant) ويمكنه التعامل مع الانقطاعات. تريد الشركة تحسين التكلفة لتشغيل التطبيق.\nأي عرض AWS سيلبي هذه المتطلبات؟
أ. Amazon Macie
ب. Amazon Neptune
*ج. Amazon EC2 Spot Instances
د. Amazon EC2 On-Demand Instances
https://www.examtopics.com/discussions/amazon/view/151257-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS يمكن استخدامها لإرسال تنبيهات عند استدعاء تنبيه Amazon CloudWatch محدد (specific Amazon CloudWatch alarm)؟
أ. AWS CloudTrail
*ب. Amazon Simple Notification Service (Amazon SNS)
ج. Amazon Simple Queue Service (Amazon SQS)
د. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/151258-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد ممارس سحابي (cloud practitioner) استخدام خدمة DNS عالية التوفر وقابلة للتطوير لعبء عمل AWS الخاص به.\nأي خدمة AWS ستلبي هذا المطلب؟
*أ. Amazon Route 53
ب. Amazon Lightsail
ج. AWS Amplify Hosting
د. Amazon S3
https://www.examtopics.com/discussions/amazon/view/151259-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تتعلم شركة عن مسؤولياتها المتعلقة بإدارة مثيلات Amazon EC2.\nأي مهام لمثيلات EC2 هي مسؤولية الشركة، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟ (اختر اثنين)
أ. تثبيت وتصحيح Hypervisor الجهاز.
*ب. تصحيح نظام التشغيل الضيف (guest operating system).
*ج. تشفير البيانات أثناء الراحة (data at rest) على التخزين المرتبط.
د. تثبيت الأجهزة المادية والكابلات.
هـ. توفير الأمان المادي لمثيلات EC2.
https://www.examtopics.com/discussions/amazon/view/151260-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لترحيل تطبيق متجانس (monolithic) إلى AWS. تريد الشركة تحديث (modernize) التطبيق عن طريق تقسيمه إلى خدمات مصغرة (microservices). ستقوم الشركة بنشر الخدمات المصغرة على AWS.\nأي استراتيجية ترحيل (migration strategy) يجب على الشركة استخدامها؟
أ. إعادة الاستضافة (Rehost)
ب. إعادة الشراء (Repurchase)
ج. إعادة النظام الأساسي (Replatform)
*د. إعادة البنية (Refactor)
https://www.examtopics.com/discussions/amazon/view/151154-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مستخدم استدعاء دالة AWS Lambda عندما يدخل مثيل Amazon EC2 في حالة "الإيقاف (stopping)".\nأي خدمة AWS مناسبة لحالة الاستخدام هذه؟
*أ. Amazon EventBridge
ب. AWS Config
ج. Amazon Simple Notification Service (Amazon SNS)
د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/143585-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS تدعم الحوكمة (governance) والامتثال (compliance) وتدقيق مخاطر (risk auditing) حسابات AWS؟
أ. المصادقة متعددة العوامل (MFA)
ب. AWS Lambda
ج. Amazon Simple Notification Service (Amazon SNS)
*د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/148074-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مبدأ تصميم AWS السحابي تستخدمه شركة عندما تقوم بتنفيذ AWS CloudTrail؟
*أ. تفعيل إمكانية التتبع (Activate traceability).
ب. استخدام بنى حوسبة بدون خادم (serverless compute architectures).
ج. تنفيذ العمليات ككود (Perform operations as code).
د. النشر عالميًا في دقائق.
https://www.examtopics.com/discussions/amazon/view/147619-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للترحيل إلى سحابة AWS. تجري الشركة تحولًا تنظيميًا وتريد أن تصبح أكثر استجابة لاستفسارات العملاء وملاحظاتهم.\nأي مهمة يجب على الشركة تنفيذها لتلبية هذه المتطلبات، وفقًا لإطار اعتماد سحابة AWS (AWS CAF)؟
*أ. إعادة تنظيم الفرق للتركيز على المنتجات وتدفقات القيمة (value streams).
ب. إنشاء عروض قيمة جديدة (new value propositions) بمنتجات وخدمات جديدة.
ج. استخدام منصة بيانات وتحليلات جديدة لإنشاء رؤى قابلة للتنفيذ (actionable insights).
د. ترحيل وتحديث البنية التحتية القديمة (legacy infrastructure).
https://www.examtopics.com/discussions/amazon/view/148521-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تحديد الحجم المناسب (rightsize) لمثيلات Amazon EC2 الخاصة بها.\nأي تغيير في التكوين سيلبي هذا المطلب بأقل عبء تشغيلي (operational overhead)؟
أ. إضافة مثيلات EC2 في منطقة توفر (Availability Zone) أخرى.
*ب. تغيير حجم ونوع مثيلات EC2 بناءً على الاستخدام.
ج. تحويل طريقة الدفع من On-Demand إلى Savings Plans.
د. إعادة توفير مثيلات EC2 بنوع مثيل أكبر.
https://www.examtopics.com/discussions/amazon/view/147620-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تدعم وظيفة تسجيل المستخدم (user sign-up functionality) والمصادقة (authentication) للتطبيقات المحمولة وتطبيقات الويب؟
*أ. Amazon Cognito
ب. AWS Config
ج. Amazon GuardDuty
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148581-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي فائدة من فوائد سحابة AWS تساعد الشركات على تحقيق تكاليف استخدام أقل بسبب الاستخدام الإجمالي (aggregate usage) لجميع مستخدمي AWS؟
أ. عدم الحاجة إلى تخمين السعة
ب. القدرة على النشر عالميًا في دقائق
*ج. وفورات الحجم (Economies of scale)
د. زيادة السرعة والرشاقة
https://www.examtopics.com/discussions/amazon/view/151155-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مهمة هي مسؤولية العميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. تصحيح نظام تشغيل Amazon DynamoDB.
ب. تأمين مواقع حافة Amazon CloudFront (edge locations) من خلال السماح بالوصول المادي وفقًا لمبدأ الامتيازات الأقل.
ج. حماية الأجهزة التي تشغل خدمات AWS.
*د. استخدام AWS Identity and Access Management (IAM) وفقًا لمبدأ الامتيازات الأقل.
https://www.examtopics.com/discussions/amazon/view/151261-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة ترحيل جميع بنيتها التحتية المحلية (on-premises) إلى سحابة AWS. قبل الترحيل، تريد الشركة تقدير التكاليف لتشغيل بنيتها التحتية كما هي.\nأي خدمة أو مبدأ AWS يجب على الشركة استخدامه لتلبية هذا المطلب؟
*أ. AWS Pricing Calculator
ب. إطار عمل AWS Well-Architected Framework
ج. نموذج المسؤولية المشتركة لـ AWS
د. إطار اعتماد سحابة AWS (AWS CAF)
https://www.examtopics.com/discussions/amazon/view/151262-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تدعم قدرة الشركة على التعامل مع البنية التحتية ككود (treat infrastructure as code)؟
أ. AWS CodeDeploy
ب. AWS Elastic Beanstalk
ج. Amazon API Gateway
*د. AWS CloudFormation
https://www.examtopics.com/discussions/amazon/view/151263-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة ببناء تطبيق سيتلقى ملايين استعلامات قاعدة البيانات كل ثانية. تحتاج الشركة إلى أن يكون مخزن البيانات (data store) للتطبيق قابلاً للتوسع لتلبية هذه الاحتياجات.\nأي خدمة AWS ستلبي هذا المطلب؟
*أ. Amazon DynamoDB
ب. AWS Cloud9
ج. Amazon ElastiCache for Memcached
د. Amazon Neptune
https://www.examtopics.com/discussions/amazon/view/148076-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يريد مستخدم AWS اكتشاف ما إذا كان المثيل أو الحساب قد يكون مخترقًا أو إذا كانت هناك تهديدات ناتجة عن هجمات بشكل استباقي.\nأي خدمة AWS يجب على المستخدم اختيارها؟
*أ. Amazon GuardDuty
ب. AWS WAF
ج. AWS Shield
د. Amazon Inspector
https://www.examtopics.com/discussions/amazon/view/148077-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نشر قاعدة بيانات PostgreSQL في Amazon RDS. يجب أن تكون قاعدة البيانات عالية التوفر (highly available) ومتسامحة مع الأخطاء (fault tolerant).\nأي حل AWS يجب على الشركة استخدامه لتلبية هذه المتطلبات؟
أ. Amazon RDS مع منطقة توفر واحدة (single Availability Zone)
ب. لقطات Amazon RDS (snapshots)
*ج. Amazon RDS مع مناطق توفر متعددة (multiple Availability Zones)
د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147622-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي الطريقة الأكثر أمانًا لتخزين كلمات المرور على AWS؟
أ. تخزين كلمات المرور في دلو Amazon S3.
ب. تخزين كلمات المرور كمعاملات AWS CloudFormation.
ج. تخزين كلمات المرور في AWS Storage Gateway.
*د. تخزين كلمات المرور في AWS Secrets Manager.
https://www.examtopics.com/discussions/amazon/view/148078-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي العبارات تصف بدقة العلاقات بين مكونات البنية التحتية العالمية لـ AWS؟ (اختر اثنين)
أ. هناك مناطق AWS (Regions) أكثر من مناطق التوفر (Availability Zones).
*ب. هناك مواقع حافة (edge locations) أكثر من مناطق AWS.
ج. موقع الحافة (edge location) هو منطقة توفر (Availability Zone).
د. هناك مناطق AWS (Regions) أكثر من مواقع الحافة.
*هـ. هناك مناطق توفر (Availability Zones) أكثر من مناطق AWS.
https://www.examtopics.com/discussions/amazon/view/147623-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS توفر تحليل عناوين DNS (DNS resolution)؟
أ. Amazon CloudFront
ب. Amazon VPC
*ج. Amazon Route 53
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/151265-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: عند تصميم أعباء عمل AWS لتكون تشغيلية حتى عند وجود أعطال في المكونات، ما هي أفضل ممارسة AWS؟
أ. إجراء اختبارات التعافي من الكوارث (disaster recovery tests) بشكل ربع سنوي.
ب. وضع المكون الرئيسي في منطقة us-east-1.
*ج. التصميم لتجاوز الفشل التلقائي (automatic failover) إلى الموارد السليمة.
د. تصميم أعباء العمل لتناسب مثيل Amazon EC2 واحد.
https://www.examtopics.com/discussions/amazon/view/151266-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي يمكن أن تفعله AWS Pricing Calculator؟
*أ. توقع تكاليف AWS الشهرية.
ب. حساب تكاليف AWS التاريخية.
ج. تقديم معلومات متعمقة حول استراتيجيات تسعير AWS.
د. تزويد المستخدمين بإمكانية الوصول إلى فواتيرهم الشهرية.
https://www.examtopics.com/discussions/amazon/view/151267-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تم منح مستخدم الإذن لتغيير كلمة مرور مستخدم IAM الخاصة به.\nأي خدمات AWS يمكن للمستخدم استخدامها لتغيير كلمة المرور؟ (اختر اثنين)
*أ. AWS Command Line Interface (AWS CLI)
ب. AWS Key Management Sen/ice (AWS KMS)
*ج. AWS Management Console
د. AWS Resource Access Manager (AWS RAM)
هـ. AWS Secrets Manager
https://www.examtopics.com/discussions/amazon/view/148582-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مهمة هي مسؤولية العميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
*أ. تصحيح نظام تشغيل ضيف (guest operating system) تم نشره على مثيل Amazon EC2.
ب. التحكم في الوصول المادي إلى مركز بيانات AWS.
ج. التحكم في الوصول إلى الأجهزة الأساسية لـ AWS.
د. تصحيح نظام تشغيل مضيف (host operating system) تم نشره على Amazon S3.
https://www.examtopics.com/discussions/amazon/view/151268-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS توفر جدار حماية (firewall) على مستوى الشبكة الفرعية (subnet level) داخل VPC؟
أ. مجموعة الأمان (Security group)
*ب. قائمة التحكم بالوصول إلى الشبكة (Network ACL)
ج. واجهة الشبكة المرنة (Elastic network interface)
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/151269-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي الإرشادات هي أفضل الممارسات لاستخدام AWS Identity and Access Management (IAM)؟ (اختر اثنين)
أ. مشاركة مفاتيح الوصول.
*ب. إنشاء مستخدمي IAM فرديين.
ج. استخدام السياسات المضمنة (inline policies) بدلاً من السياسات المدارة من قبل العميل.
د. منح أقصى الصلاحيات (maximum privileges) لمستخدمي IAM.
*هـ. استخدام المجموعات (groups) لتعيين الأذونات لمستخدمي IAM.
https://www.examtopics.com/discussions/amazon/view/151271-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي ميزة من ميزات الحوسبة السحابية تسمح للمستخدمين بتوسيع نطاق الموارد لأعلى ولأسفل بناءً على مقدار الحمل الذي يدعمه التطبيق؟
أ. النشر عالميًا في دقائق
*ب. التوقف عن تخمين السعة (Stop guessing capacity)
ج. الاستفادة من وفورات الحجم الهائلة
د. مقايضة النفقات الثابتة بنفقات متغيرة
https://www.examtopics.com/discussions/amazon/view/151272-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تجارة إلكترونية توزيع حركة المرور بين مثيلات Amazon EC2 التي تستضيف موقعها على الويب.\nأي خدمة أو مورد AWS سيلبي هذه المتطلبات؟
*أ. Application Load Balancer
ب. AWS WAF
ج. AWS CloudHSM
د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/148101-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمات أو ميزات AWS تشكل البنية التحتية العالمية لـ AWS Cloud؟ (اختر اثنين)
*أ. مناطق التوفر (Availability Zones)
ب. Amazon ElastiCache
*ج. مناطق AWS (AWS Regions)
د. Amazon S3
هـ. Amazon VPC
https://www.examtopics.com/discussions/amazon/view/151273-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: وفقًا لنموذج المسؤولية المشتركة لـ AWS، أي من التالي هي مسؤوليات AWS؟ (اختر اثنين)
*أ. البنية التحتية للشبكة (Network infrastructure) والمحاكاة الافتراضية للبنية التحتية (virtualization of infrastructure)
ب. أمان بيانات التطبيق
ج. أنظمة التشغيل الضيف (Guest operating systems)
*د. الأمان المادي للأجهزة (Physical security of hardware)
هـ. بيانات الاعتماد والسياسات (Credentials and policies)
https://www.examtopics.com/discussions/amazon/view/150428-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة عبء عمل مؤقت (temporary workload) ومتغير أيضًا. تحتاج الشركة إلى استخدام مثيلات Amazon EC2 لعبء العمل. تحتاج مثيلات EC2 إلى التعامل مع دفعات قصيرة من العمل (short bursts of work) لا يمكن أن تتوقف قبل الانتهاء.\nأي خيار شراء سيلبي هذه المتطلبات؟
أ. Spot Instances
*ب. On-Demand Instances
ج. Savings Plan
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/141279-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يعمل موظفو الشركة من المنزل. تريد الشركة أن يستخدم موظفوها أجهزتهم الشخصية للاتصال بمحطة عمل مُدارة (managed workstation) في سحابة AWS.\nأي خدمة AWS يجب على الشركة استخدامها لتوفير البيئة عن بُعد؟
*أ. Amazon Workspaces
ب. AWS Cloud9
ج. AWS Outposts
د. Amazon Lightsail
https://www.examtopics.com/discussions/amazon/view/151175-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة Amazon RDS لقاعدة بيانات المنتج. تريد الشركة التأكد من أن قاعدة البيانات عالية التوفر (highly available).\nأي ميزة من ميزات Amazon RDS ستلبي هذا المطلب؟
أ. نسخ القراءة (Read replicas)
ب. النشر الأزرق/الأخضر (Blue/green deployment)
*ج. النشر عبر مناطق توفر متعددة (Multi-AZ deployment)
د. Reserved Instances
https://www.examtopics.com/discussions/amazon/view/151274-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS توفر حوسبة بدون خادم (serverless compute) للاستخدام مع الحاويات؟
أ. Amazon Simple Queue Service (Amazon SQS)
*ب. AWS Fargate
ج. AWS Elastic Beanstalk
د. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/151275-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة حسابات AWS متعددة لفرق الأعمال المختلفة. يريد فريق المالية تلقي فاتورة واحدة لجميع حسابات الشركة.\nأي خدمة أو أداة AWS يجب على فريق المالية استخدامها لتلبية هذا المطلب؟
*أ. AWS Organizations
ب. AWS Trusted Advisor
ج. Cost Explorer
د. AWS Budgets
https://www.examtopics.com/discussions/amazon/view/151276-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى جدار حماية (firewall) يتحكم في اتصالات الشبكة من وإلى مثيل Amazon EC2 واحد. لن يتحكم جدار الحماية هذا في اتصالات الشبكة من وإلى المثيلات الأخرى الموجودة في نفس الشبكة الفرعية.\nأي خدمة أو ميزة AWS يمكن للشركة استخدامها لتلبية هذه المتطلبات؟
أ. قائمة التحكم بالوصول إلى الشبكة (Network ACL)
ب. AWS WAF
ج. جدول التوجيه (Route table)
*د. مجموعة الأمان (Security group)
https://www.examtopics.com/discussions/amazon/view/143630-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لاستخدام مثيلات Amazon EC2 كخوادم ويب. سوف يستخدم العملاء من جميع أنحاء العالم خوادم الويب. سيستخدم معظم العملاء خوادم الويب فقط خلال ساعات معينة من اليوم.\nكيف يجب على الشركة نشر مثيلات EC2 لتحقيق أقل تكلفة تشغيلية (LOWEST operational cost)؟
أ. في مناطق توفر (Availability Zones) متعددة
*ب. في مجموعة Auto Scaling (Auto Scaling group)
ج. في مجموعة مواضع (placement group)
د. في شبكات فرعية خاصة (private subnets)
https://www.examtopics.com/discussions/amazon/view/151277-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي فائدة تكون مجانية دائمًا (always free of charge) مع AWS، بغض النظر عن خطة دعم AWS الخاصة بالمستخدم؟
أ. AWS Developer Support
*ب. منتديات مطوري AWS (AWS Developer Forums)
ج. إدارة الحالات برمجيًا (Programmatic case management)
د. مدير حساب تقني (TAM) من AWS
https://www.examtopics.com/discussions/amazon/view/147625-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تستخدم شركة مثيلات Amazon EC2 لتشغيل تطبيقها. يجب أن يكون التطبيق متاحًا ويعمل بشكل مستمر لمدة ثلاث سنوات أو أكثر.\nأي نوع من مثيلات EC2 يجب على الشركة شراؤه للحصول على خصم على تسعير EC2؟
*أ. Reserved Instances
ب. Spot Instances
ج. On-Demand Instances
د. EC2 Fleet
https://www.examtopics.com/discussions/amazon/view/140999-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى إجراء تدقيق (audit) لنشاط حساب AWS الأخير. سيبحث التدقيق في من بدأ الحدث وما هي الإجراءات التي تم تنفيذها.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. AWS Config
ب. Amazon Rekognition
*ج. AWS CloudTrail
د. Amazon Simple Notification Service (Amazon SNS)
https://www.examtopics.com/discussions/amazon/view/141000-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام تقنية AWS لنشر موقع ويب ثابت (static website).\nأي حل يلبي هذا المطلب بأقل قدر من العبء التشغيلي (LEAST amount of operational overhead)؟
أ. نشر موقع الويب على Amazon EC2.
ب. استضافة موقع الويب على AWS Elastic Beanstalk.
ج. نشر موقع الويب باستخدام Amazon Lightsail.
*د. استضافة موقع الويب على Amazon S3.
https://www.examtopics.com/discussions/amazon/view/148525-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي توصية يمكن أن تقدمها AWS Cost Explorer للمساعدة في تقليل التكلفة؟
أ. استخدام محرك قاعدة بيانات محدد.
ب. تغيير لغة البرمجة لتطبيق ما.
ج. نشر نظام تشغيل محدد.
*د. إنهاء مثيل خامل (idle instance).
https://www.examtopics.com/discussions/amazon/view/141001-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نشر تطبيق في مناطق توفر متعددة (multiple Availability Zones) في منطقة AWS واحدة.\nأي فائدة سيوفر هذا النشر للشركة؟
أ. تحسين أداء الاتصال للعملاء العالميين
*ب. بنية مرنة (Resilient architecture) وحل عالي التوفر (highly available solution)
ج. تقليل تكاليف تخزين البيانات الإجمالية
د. القدرة على إيقاف تشغيل منطقة توفر (Availability Zone) خلال فترات انخفاض الطلب
https://www.examtopics.com/discussions/amazon/view/141002-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي التزام بمدة (term commitment) لـ Amazon EC2 Reserved Instances سيمنح المستخدمين أكبر قدر من التوفير في التكاليف؟
أ. سنة واحدة
ب. سنتان
*ج. 3 سنوات
د. 5 سنوات
https://www.examtopics.com/discussions/amazon/view/140924-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بتشغيل تحليلات البيانات الضخمة (big data analytics) والحسابات المتوازية الضخمة (massive parallel computations) على خوادم الاختبار والتطوير (test and development servers) الخاصة بـ AWS. يمكن للشركة تحمل فترات التوقف العرضية (occasional downtime).\nما هو خيار شراء Amazon EC2 الأكثر فعالية من حيث التكلفة للشركة لاستخدامه؟
أ. On-Demand Instances
*ب. Spot Instances
ج. Reserved Instances
د. Savings Plans
https://www.examtopics.com/discussions/amazon/view/151279-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بترحيل عبء العمل الخاص بها إلى سحابة AWS. تريد الشركة تحسين موارد Amazon EC2 الحالية.\nأي خدمات أو أدوات AWS توفر هذه الوظيفة؟ (اختر اثنين)
أ. AWS Elastic Beanstalk
*ب. AWS Cost Explorer
ج. Amazon Detective
*د. AWS Compute Optimizer
هـ. AWS Billing Conductor
https://www.examtopics.com/discussions/amazon/view/141004-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تاريخ الأحداث (event history) لموارد AWS التي أنشأتها الشركة.\nأي خدمة AWS ستوفر هذه المعلومات؟
أ. Amazon CloudWatch
*ب. AWS CloudTrail
ج. Amazon Aurora
د. Amazon EventBridge
https://www.examtopics.com/discussions/amazon/view/147629-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تشغيل قواعد بيانات علائقية (relational databases) في سحابة AWS. تريد الشركة استخدام خدمة مُدارة (managed service) من شأنها تثبيت قاعدة البيانات وتشغيل تحديثات البرامج المنتظمة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon S3
*ب. Amazon RDS
ج. Amazon Elastic Block Store (Amazon EBS)
د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/151284-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS توفر قاعدة بيانات رسوم بيانية مُدارة بالكامل (fully managed graph database) لمجموعات البيانات شديدة الاتصال (highly connected datasets)؟
أ. Amazon DynamoDB
ب. Amazon RDS
*ج. Amazon Neptune
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/151285-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تتضمن بيئة السحابة للشركة مثيلات Amazon EC2 و Application Load Balancers. تريد الشركة تحسين الحماية لمواردها السحابية ضد هجمات DDoS. تريد الشركة أيضًا أن يكون لديها رؤية في الوقت الفعلي (real-time visibility) لأي هجمات DDoS.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Shield Standard
ب. AWS Firewall Manager
*ج. AWS Shield Advanced
د. Amazon GuardDuty
https://www.examtopics.com/discussions/amazon/view/148240-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS تمكن المستخدمين من إنشاء نسخ من الموارد عبر مناطق AWS (AWS Regions)؟
أ. Amazon ElastiCache
*ب. AWS CloudFormation
ج. AWS CloudTrail
د. AWS Systems Manager
https://www.examtopics.com/discussions/amazon/view/148245-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مهمة هي مسؤولية AWS، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. تطبيق تصحيحات نظام التشغيل الضيف (guest operating system) على مثيلات Amazon EC2.
ب. توفير مراقبة لأنظمة إدارة معلومات الموارد البشرية (HRIM).
*ج. إجراء نسخ احتياطي تلقائي (automated backups) لمثيلات Amazon RDS.
د. تحسين تكاليف تشغيل خدمات AWS.
https://www.examtopics.com/discussions/amazon/view/151287-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مستخدم إلى إجراء نسخ احتياطي لمرة واحدة (one-time backup) لوحدة Amazon Elastic Block Store (Amazon EBS) مرتبطة بمثيل Amazon EC2.\nما هي الطريقة الأكثر كفاءة من الناحية التشغيلية (MOST operationally efficient) لإجراء هذا النسخ الاحتياطي؟
أ. إرفاق وحدة EBS أخرى بمثيل EC2، ونسخ المحتويات.
ب. نسخ وحدة EBS إلى خادم يعمل خارج AWS ومتصل باستخدام AWS Direct Connect.
*ج. إنشاء لقطة (snapshot) من EBS للوحدة.
د. إنشاء برنامج نصي مخصص لنسخ محتويات ملف EBS إلى Amazon S3.
https://www.examtopics.com/discussions/amazon/view/147631-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: مطور ليس لديه خبرة في AWS Cloud يريد استخدام تقنية AWS لبناء تطبيق ويب.\nأي خدمة AWS يجب على المطور استخدامها لبدء بناء التطبيق؟
أ. Amazon SageMaker
ب. AWS Lambda
*ج. Amazon Lightsail
د. Amazon Elastic Container Service (Amazon ECS)
https://www.examtopics.com/discussions/amazon/view/147632-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إدارة الوصول والأذونات (access and permissions) لتطبيقات البرمجيات كخدمة (SaaS) التابعة لجهات خارجية. تريد الشركة استخدام بوابة (portal) حيث يمكن للمستخدمين النهائيين الوصول إلى حسابات AWS المعينة وتطبيقات AWS Cloud.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Cognito
*ب. AWS IAM Identity Center (AWS Single Sign-On)
ج. AWS Identity and Access Management (IAM)
د. AWS Directory Service for Microsoft Active Directory
https://www.examtopics.com/discussions/amazon/view/148255-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS مصممة للمستخدمين الذين يقومون بتشغيل أعباء عمل تتضمن قاعدة بيانات NoSQL؟
أ. Amazon RDS
ب. Amazon S3
ج. Amazon Redshift
*د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/150416-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة موقع ويب على AWS. تريد الشركة تسليم موقع الويب إلى جمهور عالمي وتوفير أوقات استجابة منخفضة زمن الوصول (low-latency response times) للمستخدمين العالميين.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS CloudFormation
*ب. Amazon CloudFront
ج. Amazon ElastiCache
د. Amazon DynamoDB
https://www.examtopics.com/discussions/amazon/view/151288-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة إضافة روبوت محادثة تفاعلي (conversational chatbot) إلى موقعها على الويب.\nأي خدمة AWS يمكن للشركة استخدامها لتلبية هذا المطلب؟
أ. Amazon Textract
*ب. Amazon Lex
ج. AWS Glue
د. Amazon Rekognition
https://www.examtopics.com/discussions/amazon/view/147635-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو ميزة AWS يمكن استخدامها لمراقبة الارتفاعات المحتملة في كتابة القرص (potential disk write spikes) على نظام يعمل على Amazon EC2؟
أ. AWS CloudTrail
ب. AWS Health Dashboard
ج. AWS Trusted Advisor
*د. Amazon CloudWatch
https://www.examtopics.com/discussions/amazon/view/147634-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة تطبيقات تتحكم في معدات المصنع المحلية (on-premises factory equipment).\nأي خدمة AWS يجب على الشركة استخدامها لتشغيل هذه التطبيقات بأقل زمن وصول (LEAST latency)؟
*أ. AWS Outposts
ب. Amazon EC2
ج. AWS Lambda
د. AWS Fargate
https://www.examtopics.com/discussions/amazon/view/147633-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو حالة الاستخدام الأساسية (primary use case) لـ Amazon GuardDuty؟
أ. منع هجمات DDoS
ب. الحماية من هجمات حقن SQL
*ج. المراقبة التلقائية للتهديدات (automatic monitoring for threats) لأعباء عمل AWS
د. التزويد التلقائي (automatic provisioning) لموارد AWS
https://www.examtopics.com/discussions/amazon/view/147636-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مكون VPC يمكن للشركة استخدامه لإعداد جدار حماية افتراضي (virtual firewall) على مستوى مثيل Amazon EC2؟
أ. قائمة التحكم بالوصول إلى الشبكة (Network ACL)
*ب. مجموعة الأمان (Security group)
ج. جدول التوجيه (Route table)
د. بوابة NAT (NAT gateway)
https://www.examtopics.com/discussions/amazon/view/147637-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: يحتاج مطور إلى التفاعل مع AWS باستخدام AWS CLI.\nأي ميزة أمان أو خدمة AWS يجب توفيرها في حساب المطور لتلبية هذا المطلب؟
أ. اسم المستخدم وكلمة المرور
ب. AWS Systems Manager
ج. الوصول بكلمة مرور الجذر (Root password access)
*د. مفتاح الوصول إلى AWS (AWS access key)
https://www.examtopics.com/discussions/amazon/view/147638-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة توصيل طعام إلى منع المستخدمين في بلدان معينة من الوصول إلى موقعها على الويب.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذا المطلب؟
*أ. AWS WAF
ب. AWS Control Tower
ج. Amazon Fraud Detector
د. Amazon Pinpoint
https://www.examtopics.com/discussions/amazon/view/147639-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي مسؤولية العميل بموجب نموذج المسؤولية المشتركة لـ AWS عند استخدام AWS Lambda؟
أ. صيانة أجهزة Lambda الأساسية.
ب. صيانة البنية التحتية للشبكات لـ Lambda.
*ج. الكود والمكتبات (code and libraries) التي تعمل في دوال Lambda.
د. برنامج خادم Lambda (Lambda server software).
https://www.examtopics.com/discussions/amazon/view/147640-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي المهام هي مسؤولية AWS وفقًا لنموذج المسؤولية المشتركة لـ AWS؟ (اختر اثنين)
أ. تكوين AWS Identity and Access Management (IAM).
ب. تكوين مجموعات الأمان (security groups) على مثيلات Amazon EC2.
*ج. تأمين الوصول إلى مرافق AWS الفعلية (physical AWS facilities).
د. تصحيح التطبيقات التي تعمل على مثيلات Amazon EC2.
*هـ. إجراء تصحيحات البنية التحتية (infrastructure patching) والصيانة.
https://www.examtopics.com/discussions/amazon/view/147641-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة متطلب امتثال (compliance requirement) لتسجيل وتقييم تغييرات التكوين (configuration changes)، بالإضافة إلى تنفيذ إجراءات التصحيح (remediation actions) على موارد AWS.\nأي خدمة AWS يجب على الشركة استخدامها؟
*أ. AWS Config
ب. AWS Secrets Manager
ج. AWS CloudTrail
د. AWS Trusted Advisor
https://www.examtopics.com/discussions/amazon/view/147643-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لإجراء ترحيل لمرة واحدة (one-time migration) لمجموعة بيانات كبيرة (large dataset) تحتوي على ملايين الملفات من مركز البيانات المحلي الخاص بها إلى سحابة AWS.\nأي خدمة AWS يجب على الشركة استخدامها للترحيل؟
أ. AWS Database Migration Service (AWS DMS)
*ب. AWS DataSync
ج. AWS Migration Hub
د. AWS Application Migration Service
https://www.examtopics.com/discussions/amazon/view/147644-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمات أو ميزات شبكة AWS تسمح بتدوين CIDR block عند توفير نطاق عنوان IP؟ (اختر اثنين)
*أ. مجموعات الأمان (Security groups)
ب. Amazon Machine Image (AMI)
*ج. قائمة التحكم بالوصول إلى الشبكة (network access control list - network ACL)
د. AWS Budgets
هـ. Amazon Elastic Block Store (Amazon EBS)
https://www.examtopics.com/discussions/amazon/view/147645-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تطوير تطبيق إمكانية الوصول (accessibility application) من شأنه تحويل النص إلى كلام مسموع (audible speech).\nأي خدمة AWS ستلبي هذا المطلب؟
أ. Amazon MQ
*ب. Amazon Polly
ج. Amazon Neptune
د. Amazon Timestream
https://www.examtopics.com/discussions/amazon/view/147646-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى إعداد اتصال شبكة مخصص (dedicated network connectivity) بين مركز البيانات المحلي (on-premises) الخاص بها وسحابة AWS. لا يمكن للشبكة استخدام الإنترنت العام.\nأي خدمة أو ميزة AWS ستلبي هذه المتطلبات؟
أ. AWS Transit Gateway
ب. AWS VPN
ج. Amazon CloudFront
*د. AWS Direct Connect
https://www.examtopics.com/discussions/amazon/view/147647-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى استخدام لوحات المعلومات (dashboards) والرسوم البيانية (charts) لتحليل الرؤى من بيانات الأعمال.\nأي خدمة AWS ستوفر لوحات المعلومات والرسوم البيانية لهذه الرؤى؟
أ. Amazon Macie
ب. Amazon Aurora
*ج. Amazon QuickSight
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/147648-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة ترحيل البنية التحتية المحلية (on-premises) الخاصة بها إلى سحابة AWS.\nأي ميزة من ميزات الحوسبة السحابية ستساعد الشركة على تقليل التكاليف الأولية (upfront costs)؟
أ. النشر عالميًا في دقائق
ب. زيادة السرعة والرشاقة
ج. الاستفادة من وفورات الحجم الهائلة
*د. مقايضة النفقات الثابتة بنفقات متغيرة
https://www.examtopics.com/discussions/amazon/view/147649-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هي فائدة استخدام موازن تحميل Elastic Load Balancing (ELB) مع التطبيقات التي تعمل في سحابة AWS؟
أ. سيقوم ELB تلقائيًا بتوسيع نطاق الموارد (automatically scale resources) لتلبية احتياجات السعة.
*ب. يمكن لـ ELB موازنة حركة المرور عبر موارد حاسوبية متعددة.
ج. يمكن أن يمتد ELB عبر مناطق AWS متعددة.
د. يمكن لـ ELB موازنة حركة المرور بين بوابات إنترنت متعددة.
https://www.examtopics.com/discussions/amazon/view/147652-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة تخزين بيانات اعتماد قاعدة بيانات Amazon RDS بشكل آمن وتدوير كلمات مرور المستخدم (rotate user passwords) تلقائيًا بشكل دوري.\nأي خدمة أو قدرة AWS ستلبي هذه المتطلبات؟
أ. Amazon S3
ب. AWS Systems Manager Parameter Store
*ج. AWS Secrets Manager
د. AWS CloudTrail
https://www.examtopics.com/discussions/amazon/view/147654-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى القدرة على إعداد البنية التحتية لتطبيقات جديدة في دقائق.\nأي ميزة من ميزات الحوسبة السحابية ستساعد الشركة على تلبية هذا المطلب؟
أ. مقايضة النفقات الثابتة بنفقات متغيرة
ب. النشر عالميًا في دقائق
*ج. زيادة السرعة والرشاقة
د. التوقف عن تخمين السعة
https://www.examtopics.com/discussions/amazon/view/147655-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى نظام ملفات NFS مُدار (managed NFS file system) يمكن للشركة استخدامه مع موارد الحوسبة AWS الخاصة بها.\nأي خدمة أو ميزة AWS ستلبي هذه المتطلبات؟
أ. Amazon Elastic Block Store (Amazon EBS)
ب. AWS Storage Gateway Tape Gateway
ج. Amazon S3 Glacier Flexible Retrieval
*د. Amazon Elastic File System (Amazon EFS)
https://www.examtopics.com/discussions/amazon/view/147656-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة للترحيل إلى سحابة AWS. تريد الشركة جمع معلومات حول مركز البيانات المحلي (on-premises) الخاص بها.\nأي خدمة AWS يجب على الشركة استخدامها لتلبية هذه المتطلبات؟
*أ. AWS Application Discovery Service
ب. AWS DataSync
ج. AWS Storage Gateway
د. AWS Database Migration Service (AWS DMS)
https://www.examtopics.com/discussions/amazon/view/147657-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي المهام هي مسؤوليات العميل، وفقًا لنموذج المسؤولية المشتركة لـ AWS؟ (اختر اثنين)
أ. تأمين طبقة المحاكاة الافتراضية (virtualization layer).
*ب. تشفير البيانات والحفاظ على سلامة البيانات (maintain data integrity).
ج. تصحيح نظام تشغيل Amazon RDS.
*د. الحفاظ على ضوابط إدارة الهوية والوصول (identity and access management controls).
هـ. تأمين مناطق التوفر (Availability Zones).
https://www.examtopics.com/discussions/amazon/view/147658-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة بيع بالتجزئة عبر الإنترنت ترحيل عبء العمل المحلي الخاص بها إلى AWS. تحتاج الشركة إلى التعامل تلقائيًا مع زيادة عبء العمل الموسمية (seasonal workload increase) بطريقة فعالة من حيث التكلفة.\nأي ميزات AWS Cloud ستساعد الشركة على تلبية هذا المطلب؟ (اختر اثنين)
أ. نشر عبء العمل عبر المناطق (Cross-Region workload deployment)
*ب. تسعير الدفع عند الاستخدام (Pay-as-you-go pricing)
ج. قدرات تدقيق AWS CloudTrail المضمنة (built-in)
*د. سياسات Auto Scaling (Auto Scaling policies)
هـ. التسجيل المركزي (Centralized logging)
https://www.examtopics.com/discussions/amazon/view/147659-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة القدرة على الحصول على الموارد تلقائيًا عند الحاجة وتحرير الموارد عندما لا تكون هناك حاجة إليها.\nأي مفهوم سحابي يصف هذه الوظيفة؟
أ. التوفر
*ب. المرونة (Elasticity)
ج. المتانة
د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/147668-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خيارًا فعالاً من حيث التكلفة عند تشغيل تطبيقاتها في مثيل Amazon EC2 لفترات زمنية قصيرة. يمكن مقاطعة التطبيقات.\nأي نوع مثيل EC2 سيلبي هذه المتطلبات؟
*أ. Spot Instances
ب. On-Demand Instances
ج. Reserved Instances
د. Dedicated Instances
https://www.examtopics.com/discussions/amazon/view/147669-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة خطة دعم AWS Business Support. تحتاج الشركة إلى الحصول على حق الوصول إلى AWS DDoS Response Team (DRT) للمساعدة في تخفيف أحداث DDoS.\nأي خدمة أو مورد AWS يجب على الشركة استخدامه لتلبية هذه المتطلبات؟
أ. AWS Shield Standard
ب. AWS Enterprise Support
ج. AWS WAF
*د. AWS Shield Advanced
https://www.examtopics.com/discussions/amazon/view/147670-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة أو أداة AWS توفر تصورًا (visualization) لأنماط الإنفاق التاريخية لـ AWS وتوقعات تكاليف AWS المستقبلية؟
أ. AWS Cost and Usage Report
ب. AWS Budgets
*ج. Cost Explorer
د. Amazon Cloud Watch
https://www.examtopics.com/discussions/amazon/view/147671-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تقوم شركة بالترحيل إلى سحابة AWS بدلاً من تشغيل بنيتها التحتية محليًا.\nأي من التالي هي مزايا هذا الترحيل؟ (اختر اثنين)
أ. التخلص من الحاجة إلى إجراء تدقيق أمني (security auditing)
*ب. زيادة الوصول العالمي والرشاقة (increased global reach and agility)
*ج. القدرة على النشر عالميًا في دقائق
د. التخلص من تكلفة موظفي تكنولوجيا المعلومات
هـ. التكرار (Redundancy) افتراضيًا لجميع خدمات الحوسبة
https://www.examtopics.com/discussions/amazon/view/147672-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خدمة AWS يمكنها أتمتة نشر البرامج (automate software deployment) في مثيلات Amazon EC2 والمثيلات المحلية (on-premises instances).\nأي خدمة AWS ستلبي هذا المطلب؟
أ. AWS CodeCommit
ب. AWS CodeBuild
*ج. AWS CodeDeploy
د. AWS CodePipeline
https://www.examtopics.com/discussions/amazon/view/147675-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي من التالي هو مسؤولية العميل وفقًا لنموذج المسؤولية المشتركة لـ AWS؟
أ. تطبيق تصحيحات الأمان لأجهزة البنية التحتية لـ Amazon S3.
ب. توفير الأمان المادي لمراكز بيانات AWS.
ج. تثبيت تحديثات نظام التشغيل على Lambda@Edge.
*د. تنفيذ المصادقة متعددة العوامل (MFA) لحسابات مستخدمي IAM.
https://www.examtopics.com/discussions/amazon/view/147677-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استخدام حل شبكات AWS يمكن أن يعمل كبوابة مركزية (centralized gateway) بين VPCs متعددة والشبكات المحلية (on-premises networks).\nأي خدمة أو ميزة AWS ستلبي هذا المطلب؟
أ. Gateway VPC endpoint
ب. AWS Direct Connect
*ج. AWS Transit Gateway
د. AWS PrivateLink
https://www.examtopics.com/discussions/amazon/view/147682-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لمساعدة الشركات في الامتثال لمعيار أمان بيانات صناعة بطاقات الدفع (PCI DSS) في السحابة، توفر AWS:
أ. عمليات تفتيش مادية (physical inspections) لمراكز البيانات عن طريق التعيين.
ب. شهادات امتثال PCI مطلوبة لأي تطبيق يعمل على AWS.
*ج. تقرير إقرار الامتثال (Attestation of Compliance - AOC) لخدمات AWS محددة.
د. خدمات امتثال PCI احترافية.
https://www.examtopics.com/discussions/amazon/view/147683-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: ما هو الحجم الإجمالي للبيانات التي يمكن تخزينها في Amazon S3؟
أ. 10 PB
ب. 50 PB
ج. 100 PB
*د. غير محدود عمليًا (Virtually unlimited)
https://www.examtopics.com/discussions/amazon/view/147685-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مبدأ تصميم مرتبط بركيزة الموثوقية (reliability pillar) وفقًا لإطار عمل AWS Well-Architected Framework؟
*أ. اختبار إجراءات الاسترداد (Test recovery procedures)
ب. التجربة في كثير من الأحيان (Experiment more often)
ج. النشر عالميًا في دقائق
د. تحليل وعزو إلى الإنفاق (Analyze and attribute to expenditure)
https://www.examtopics.com/discussions/amazon/view/147686-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخزن شركة البيانات في دلو Amazon S3.\nأي مهمة هي مسؤولية AWS؟
أ. تكوين سياسة دورة حياة S3 (S3 Lifecycle policy).
ب. تفعيل S3 Versioning.
ج. تكوين سياسات دلو S3 (S3 bucket policies).
*د. حماية البنية التحتية التي تدعم تخزين S3.
https://www.examtopics.com/discussions/amazon/view/147687-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خدمة AWS هي خدمة قاعدة بيانات NoSQL مُدارة بالكامل (fully managed NoSQL database service)؟
أ. Amazon RDS
ب. Amazon Redshift
*ج. Amazon DynamoDB
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/147713-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنشر تطبيق في مناطق AWS متعددة حول العالم. تريد الشركة تحسين أداء التطبيق وتوافره (availability).\nأي خدمة AWS ستلبي هذه المتطلبات؟
*أ. AWS Global Accelerator
ب. Amazon DataZone
ج. AWS Cloud Map
د. AWS Auto Scaling
https://www.examtopics.com/discussions/amazon/view/147714-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة ترحيل قاعدة بيانات SQL Server المحلية (on-premises) الخاصة بها إلى سحابة AWS. تريد الشركة أن تتولى AWS مسؤولية الإدارة اليومية لقاعدة البيانات.\nأي خدمة AWS ستلبي متطلبات الشركة؟
أ. Amazon EC2 for Microsoft SQL Server
ب. Amazon DynamoDB
*ج. Amazon RDS
د. Amazon Aurora
https://www.examtopics.com/discussions/amazon/view/147715-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تحتاج شركة إلى تصفية شبكة عديمة الحالة (stateless network filtering) لـ VPC الخاص بها.\nأي خدمة أو أداة أو ميزة AWS ستلبي هذا المطلب؟
أ. AWS PrivateLink
ب. مجموعة الأمان (Security group)
*ج. قائمة التحكم بالوصول إلى الشبكة (Network access control list - ACL)
د. AWS WAF
https://www.examtopics.com/discussions/amazon/view/147716-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي خيار هو ميزة من ميزات الحوسبة السحابية لـ AWS تعمل على تقليل التكاليف المتغيرة (minimizes variable costs)؟
أ. التوفر العالي
*ب. وفورات الحجم (Economies of scale)
ج. الوصول العالمي
د. الرشاقة
https://www.examtopics.com/discussions/amazon/view/147717-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي فوائد تكسبها الشركة عندما تنتقل من بنية تكنولوجيا المعلومات المحلية (on-premises) إلى سحابة AWS؟ (اختر اثنين)
*أ. تقليل أو إلغاء المهام الخاصة باستكشاف أخطاء الأجهزة (hardware troubleshooting) وتخطيط السعة (capacity planning) والشراء (procurement)
ب. التخلص من الحاجة إلى موظفي تكنولوجيا المعلومات المدربين
ج. التكوين الأمني التلقائي (automatic security configuration) لجميع التطبيقات التي تم ترحيلها إلى السحابة
د. التخلص من الحاجة إلى التخطيط للتعافي من الكوارث (disaster recovery planning)
*هـ. نشر أسرع للميزات والتطبيقات الجديدة
https://www.examtopics.com/discussions/amazon/view/147720-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: شركة تخطط للترحيل إلى سحابة AWS مقرها في منطقة نائية ذات اتصال إنترنت محدود. تحتاج الشركة إلى إجراء معالجة البيانات المحلية (local data processing) في المباني. تحتاج الشركة إلى حل يمكنه العمل بدون اتصال إنترنت ثابت.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon S3
*ب. AWS Snowball Edge
ج. AWS Storage Gateway
د. AWS Backup
https://www.examtopics.com/discussions/amazon/view/147722-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة بناء استعلامات الرسم البياني (graph queries) لاكتشاف أنماط الاحتيال في الوقت الفعلي (real-time fraud pattern detection).\nأي خدمة AWS ستلبي هذا المطلب؟
*أ. Amazon Neptune
ب. Amazon DynamoDB
ج. Amazon Timestream
د. Amazon Forecast
https://www.examtopics.com/discussions/amazon/view/147723-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة الترحيل إلى سحابة AWS. تحتاج الشركة إلى القدرة على الحصول على الموارد عندما تكون الموارد ضرورية. تحتاج الشركة أيضًا إلى القدرة على تحرير تلك الموارد عندما لا تكون هناك حاجة إليها.\nأي مفهوم معماري لسحابة AWS يلبي هذه المتطلبات؟
*أ. المرونة (Elasticity)
ب. التوفر
ج. الموثوقية
د. المتانة
https://www.examtopics.com/discussions/amazon/view/147724-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة نشر تطبيق ويب كتطبيق معبأ في حاويات (containerized application). تريد الشركة استخدام خدمة مُدارة يمكنها إنشاء صور الحاويات (container images) تلقائيًا من الكود المصدري (source code) ونشر التطبيق المعبأ في حاويات.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Elastic Beanstalk
ب. Amazon Elastic Container Service (Amazon ECS)
*ج. AWS App Runner
د. Amazon EC2
https://www.examtopics.com/discussions/amazon/view/147725-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بنقل جميع بنيتها التحتية إلى سحابة AWS. للتخطيط مسبقًا لكل ربع سنة، يريد فريق المالية تتبع بيانات التكلفة والاستخدام (cost and usage data) للموارد من الأشهر السابقة. يريد فريق المالية إنشاء تقارير تلقائيًا (automatically generate reports) تحتوي على البيانات.\nأي خدمة أو ميزة AWS يجب على فريق المالية استخدامها لتلبية هذه المتطلبات؟
أ. Amazon Detective
ب. AWS Pricing Calculator
*ج. AWS Budgets
د. AWS Savings Plans
https://www.examtopics.com/discussions/amazon/view/147726-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي منظور من إطار اعتماد سحابة AWS (AWS CAF) يركز على الرؤى في الوقت الفعلي (real-time insights) ويجيب على أسئلة حول الإستراتيجية؟
أ. العمليات (Operations)
ب. الأشخاص (People)
*ج. الأعمال (Business)
د. المنصة (Platform)
https://www.examtopics.com/discussions/amazon/view/147727-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة ترحيل أنظمة الإنتاج الحرجة المحلية (critical on-premises production systems) إلى مثيلات Amazon EC2. سيتم استخدام مثيلات الإنتاج لمدة 3 سنوات على الأقل. تريد الشركة خيار تسعير من شأنه تقليل التكلفة.\nأي حل سيلبي هذه المتطلبات؟
أ. On-Demand Instances
*ب. Reserved Instances
ج. Spot Instances
د. AWS Free Tier
https://www.examtopics.com/discussions/amazon/view/147728-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي مفهوم من إطار عمل AWS Well-Architected Framework يمثل قدرة النظام على البقاء وظيفيًا (remain functional) عندما يواجه النظام مشكلات تشغيلية؟
أ. الاتساق (Consistency)
ب. المرونة (Elasticity)
*ج. المتانة (Durability)
د. زمن الوصول (Latency)
https://www.examtopics.com/discussions/amazon/view/147729-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: أي ركيزة من إطار عمل AWS Well-Architected Framework تركز على القدرة على التعافي تلقائيًا من انقطاعات الخدمة (recover automatically from service interruptions)؟
أ. الأمان
ب. كفاءة الأداء
ج. التميز التشغيلي
*د. الموثوقية
https://www.examtopics.com/discussions/amazon/view/147730-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: لدى شركة قواعد بيانات متعددة تعتمد على SQL (multiple SQL-based databases) موجودة في مركز بيانات. تحتاج الشركة إلى ترحيل جميع خوادم قواعد البيانات إلى سحابة AWS لتقليل تكلفة تشغيل الخوادم المادية.\nأي خدمة أو مورد AWS سيلبي هذه المتطلبات بأقل عبء تشغيلي (LEAST operational overhead)؟
أ. مثيلات Amazon EC2
*ب. Amazon RDS
ج. Amazon DynamoDB
د. OpenSearch
https://www.examtopics.com/discussions/amazon/view/147731-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة استكشاف وتحليل البيانات في Amazon S3 باستخدام لغة برمجة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. Amazon Kendra
*ب. Amazon Athena
ج. Amazon Comprehend
د. Amazon SageMaker
https://www.examtopics.com/discussions/amazon/view/147734-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة خدمة مُدارة بالكامل (fully managed service) تعمل على مركزية وأتمتة حماية البيانات (centralizes and automates data protection) عبر خدمات AWS وأعباء العمل الهجينة (hybrid workloads).\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Artifact
*ب. AWS Backup
ج. AWS Batch
د. AWS Shield
https://www.examtopics.com/discussions/amazon/view/147736-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تخطط شركة لترحيل تطبيقها من محلي (on premises) إلى سحابة AWS. تحتاج الشركة إلى جمع بيانات الاستخدام والتكوين (usage and configuration data) لمكونات التطبيق.\nأي خدمة AWS ستلبي هذه المتطلبات؟
أ. AWS Database Migration Service (AWS DMS)
ب. AWS Transfer Family
*ج. AWS Application Discovery Service
د. AWS Global Accelerator
https://www.examtopics.com/discussions/amazon/view/147737-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة توفير زمن وصول منخفض (low latency) لمستخدميها حول العالم.\nأي ميزة من ميزات سحابة AWS تلبي هذا المطلب؟
*أ. البنية التحتية العالمية (Global infrastructure)
ب. تسعير الدفع عند الاستخدام
ج. الخدمات المُدارة (Managed services)
د. وفورات الحجم
https://www.examtopics.com/discussions/amazon/view/147738-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: قامت شركة بتطوير تطبيق داخلي جديد (new In-house application). ليس لدى الشركة طريقة لتحديد أو التنبؤ بطلب الاستخدام (usage demand) الذي سيخلقه التطبيق.\nأي فائدة من فوائد الحوسبة السحابية لـ AWS تسعى إليها الشركة؟
أ. سهل الاستخدام
ب. فعال من حيث التكلفة
ج. آمن
*د. قابل للتطوير وعالي الأداء (Scalable and high performance)
https://www.examtopics.com/discussions/amazon/view/147741-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: اشترت شركة Amazon EC2 Standard Reserved Instances (RIs) لعبء عمل في سحابة AWS. تحتاج الشركة إلى نقل جزء من عبء العمل إلى عائلة مثيلات (instance family) لا تتطابق مع عائلة مثيلات هذه الـ Standard RIs.\nكيف يمكن للشركة الاستفادة من الـ Standard RIs التي لم تعد بحاجة إليها؟
أ. الاتصال بفريق AWS Support، وطلب من الفريق بيع الـ Standard RIs
*ب. بيع الـ Standard RIs في سوق Amazon EC2 Reserved Instance Marketplace
ج. بيع الـ Standard RIs كبائع طرف ثالث (third-party seller) في AWS Marketplace
د. تحويل الـ Standard RIs إلى Savings Plans
https://www.examtopics.com/discussions/amazon/view/147745-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة السماح لموظفيها بالعمل عن بُعد من المنزل. يستخدم موظفو الشركة أجهزة سطح مكتب Windows أو Linux. يحتاج موظفو الشركة إلى الوصول من أي مكان وفي أي وقت باستخدام أي أجهزة مدعومة.\nأي خدمة AWS ستلبي هذه المتطلبات؟
*أ. Amazon Workspaces
ب. Amazon AppStream 2.0
ج. Amazon Keyspaces (for Apache Cassandra)
د. AWS Cloud9
https://www.examtopics.com/discussions/amazon/view/147749-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تريد شركة اختبار تطبيق جديد.\nأي مبدأ AWS سيساعد الشركة على اختبار التطبيق؟
أ. تقديم التزامات طويلة الأجل (long-term commitments) مقابل خصم على التكلفة.
*ب. التوسع لأعلى ولأسفل عند الحاجة دون أي التزامات طويلة الأجل.
ج. السيطرة الكاملة على البنية التحتية للتطبيق.
د. إدارة جميع مهام الصيانة المرتبطة بالسحابة.
https://www.examtopics.com/discussions/amazon/view/147750-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/

س: تتعلم شركة عن وجهات نظر إطار اعتماد سحابة AWS (AWS CAF).\nأي منظور من AWS CAF يتناول قدرة إدارة الإستراتيجية (strategy management capability)؟
*أ. منظور الأعمال (Business perspective)
ب. منظور الأشخاص (People perspective)
ج. منظور الحوكمة (Governance perspective)
د. منظور العمليات (Operations perspective)
https://www.examtopics.com/discussions/amazon/view/147753-exam-aws-certified-cloud-practitioner-clf-c02-topic-1/



`;