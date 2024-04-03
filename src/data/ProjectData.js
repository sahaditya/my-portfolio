// --------------------------------------- Project List
import AtherImageShort from '../Assets/Ather energy.png';
import AtherImageLong from '../Assets/Ather energy long.png';
import TMobileShort from '../Assets/T-mobile.png';
import InvestOnHealthLong from '../Assets/IoH_2.png';

import KafkaLogo from '../Assets/kafka-icon.svg';
import JavaLogo from '../Assets/java.svg';
import NodeJSLogo from '../Assets/nodejs-original-wordmark.svg';
import SpringBoot from '../Assets/spring-boot.svg';
import MongoDB from '../Assets/mongodb-original.svg';
import Python from '../Assets/python.svg';
import Docker from '../Assets/docker.svg';
import NextJS from '../Assets/next-js.svg';
import Kubernetes from '../Assets/kubernetes.svg';
import AWS from '../Assets/aws.svg';
import GCP from '../Assets/gcp-color.svg';
import NoSql from '../Assets/nosql.svg';
import SQL from '../Assets/file-type-pgsql.svg';
import TypeScript from '../Assets/typescript-icon.svg';

export const ProjectList = [
  {
    img: AtherImageShort,
    title: "Payment gateway Microservice",
    description: `There were many microservices utilizing the same payment gateway. As a result, we created a single microservice as a payment gateway, allowing for integration in a single location and future changes to be made solely to this microservice. Other services will make API calls to this microservice.`,
    tech_stack: "Java, SpringBoot, MongoDB, Docker, K8, GCP.",
  },
  {
    img: AtherImageLong,
    title: "Ather energy website with website backend",
    description: `Migrated website from EJS and JQuery to Next JS. Designed and developed career page end to end. Introduced CMS for faster 
    delivery of work and automating dynamic page creation on run time. Educated non-tech people to use CMS and virtue of this reducing dev efforts.`,
    tech_stack: "Node JS, Next JS, PGSql, SpringBoot, GCP kubernetes, cloudflare as CDN and DNS, Docker. ",
    demo_url: "Website:https://www.atherenergy.com/",
  },
  {
    img: AtherImageLong,
    title: "Test ride & Home test ride and Pre-order booking of scooter",
    description: `Designed and implemented the end-to-end flow of scooter testride and pre-order booking, transferring data to multiple systems and making it available for marketing, brand people, and CREs to convert, directly increasing ather revenue.
    Tracing user behaviors using Google Analytics, executing many A/B tests, and identifying and resolving flow gaps, allowing campaigns to target people for conversions.
    Moved the whole flow to a WhatsApp chatbot, which increased bookings by 40% and had a direct impact on revenue.`,
    tech_stack: "Node JS, Next JS, PGSql, GCP kubernetes, cloudflare, CDN, DNS, Docker.",
    demo_url: "TR:https://www.atherenergy.com/testride/450x, Booking:https://app.atherenergy.com/product/scooter/book",
  },
  {
    img: AtherImageShort,
    title: "Ather Backend System",
    description:
      "Catering data to all frontend request, user, order management, subscription and service on app and integration with different third party ERP tools.",
    tech_stack: "Node JS, SpringBoot, K8, Docker, MongoDb, PGSQL",
  },
  {
    img: AtherImageShort,
    title: "Ather Merchandise Service",
    description:
      "Developed a merchandise microservice that integrates with an e-commerce website and is used for third-party ERP tool invoicing and logistics.",
    tech_stack: "SpringBoot, Kafka, K8, Docker, PGSQL",
    demo_url: "Merch:https://shop.atherenergy.com/",
  },
  {
    img: TMobileShort,
    title: "Trial ON",
    description: `I worked on a Convolutional Neural Network (CNN) computer vision project, developing a gender classification model with PyTorch as a sub-feature of a product trial and performing data cleaning phases. Along with online scraping of photos from various media websites.`,
    tech_stack: "PyTorch, Python, GCP, Jupyter Notebook.",
  },
  {
    img: TMobileShort,
    title: "Canvas",
    description: `Developed an end-to-end system to create a dashboard with various statistics and several actions for the customer T-Mobile, including many graphs, utilising multiple techs mentioned below.
    The dashboard is called Canvas because it displays analytics from T-Mobile's many verticals.`,
    tech_stack: "D3 JS, React JS, Node JS, Javascript, MongoDB, and Microsoft Azure.",
  },
  {
    img: TMobileShort,
    title: "Incident Reporting Dashboard",
    description: `Developed an end-to-end incident reporting dashboard to speed up debugging in production and notify relevant stakeholders.`,
    tech_stack: "React JS, Node JS, Javascript, MongoDB, and Microsoft Azure.",
  },
  {
    img: TMobileShort,
    title: "T-Polls",
    description:
      "Designed and constructed an end-to-end system for real-time polling with a variety of questions and answers displayed in graphs. The purpose of this initiative is to provide anonymous feedback to individuals.",
    tech_stack: "React JS, Node JS, Javascript, MongoDB, and Microsoft Azure.",
  },
  {
    img: InvestOnHealthLong,
    title: "Obesity management",
    description:
      `worked on the obesity management-focused startup Invest on Health.
      created a backend system to capture data for the mobile app and a website for the company's marketing.
      Excell sheet data of foods with 60 properties is processed, cleaned, and then pipelined via several Mongo Scripts before being pushed to a production database for testing.
      Food search was implemented using several caching strategies.
      created group and individual chat rooms for nutritionists and clinician on a website.`,
    tech_stack: "SpringBoot, Angular JS, FireBase, MongoDB, AWS",
    demo_url: "Website:https://www.investonhealth.com/",
  },
  {
    img: InvestOnHealthLong,
    title: "Personal project",
    description:
      `Developed a sentiment analysis solution to determine the best phone on the market based on many phone parameters. Web scraping data from several mobile review websites, storing it in MongoDB, and loading it to a server using the R programming language, building an emotion graph and a word cloud detailing the most talked-about aspects.`,
    tech_stack: "R, R Studio, MongoDB",
    demo_url: "Website:https://github.com/sahaditya/sentiment-analysis-model/tree/master",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: JavaLogo,
    name: "Java",
  },
  {
    img: NodeJSLogo,
    name: "Node JS",
  },
  {
    img: SpringBoot,
    name: "SpringBoot",
  },
  {
    img: NextJS,
    name: "Next JS",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg",
    name: "ReactJS",
  },
  {
    img: MongoDB,
    name: "MongoDB",
  },
  {
    img: NoSql,
    name: "NoSql",
  },
  {
    img: SQL,
    name: "PGSQL",
  },
  {
    img: KafkaLogo,
    name: "Kafka",
  },
  {
    img: Docker,
    name: "Docker",
  },
  {
    img: Kubernetes,
    name: "Kubernetes",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg",
    name: "JavaScript",
  },
  {
    img: TypeScript,
    name: "TypeScript",
  },
  {
    img: Python,
    name: "Python",
  },
  {
    img: AWS,
    name: "AWS",
  },
  {
    img: GCP,
    name: "GCP",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/html5.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/bootstrap.svg",
    name: "Bootstrap",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/sass.svg",
    name: "Scss",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/git.svg",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/responsive.svg",
    name: "Responsive",
  },
];
