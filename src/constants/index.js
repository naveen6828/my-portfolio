import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable APIs and web applications. With nearly 4 years of hands-on experience, I have honed my skills in front-end technologies like React and Angular, as well as back-end technologies like  Java, SpringBoot, Python, Flask, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly APIs and web applications. With nearly 4 years of professional experience, I have worked with a variety of technologies, including Java, SpringBoot, Python, Flask, Microservices, Kafka, ActiveMQ, Angular, React, Node.js, MySQL, PostgreSQL, MongoDB, AWS, Azure, Docker and Kubernetes. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Mar 2024",
    role: "Full Stack Java Developer",
    company: "Deloitte",
    description: `I built high-performance microservices using Java and Spring Boot, designed user-friendly interfaces with React and Node.js, and implemented cloud solutions with AWS, Docker, and Kubernetes. I enhanced system reliability by 20% through RESTful APIs, real-time data synchronization with Kafka, and efficient data management with PostgreSQL and MongoDB, while ensuring robust security with OAuth, Spring Security, JWT, and API Gateway.`,
    technologies: ["Java", "SpringBoot", "Kafka", "Javascript", "React.js", "AWS", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "Mokito", "Git"],
  },
  {
    year: "Sep 2020 - Aug 2022",
    role: "Cloud Engineer",
    company: "Tata Consultancy Services",
    description: `I managed multi-cloud infrastructure on AWS and Azure, achieving 99.99% uptime. I improved deployment cycles by 30% using Git and Jenkins, enhanced application portability by 20% with Docker and Kubernetes, reduced manual errors by 25% with Ansible, and sped up infrastructure provisioning by 40% using Terraform and Python. Additionally, I optimized AWS services for performance and cost-effectiveness.`,
    technologies: ["AWS", "Python", "Boto3", "Terraform", "Docker", "Kubernetes", "Ansible", "Azure"],
  },
  {
    year: "Sep 2019 - Aug 2020",
    role: "Java Developer Intern",
    company: "VisonTEK",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Java", "SpringBoot", "MySQL", "Angular", "JavaScript", "JUnit"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Java", "SpringBoot", "Kafka", "Javascript", "React", "HTML", "CSS", "Node.js", "MongoDB", "PostgreSQL", "Docker"],
  },
  {
    title: "Book Social Network App",
    image: project2,
    description:
      "An application for managing brrowing, reading, tracking, uploading, sharinng the books in an online platform ",
    technologies: ["Java", "SpringBoot", "Javascript", "Angular", "PostgreSQL", "Docker", "OpenAPI", "Swagger", "Github Actions", "CI/CD"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Tailwind"],
  },
  {
    title: "Customer Engagement Prediction on Kroger Data",
    image: project4,
    description:
      "An interactive web application on Google Cloud Platform to analyze anonymized retail data to predict which demographic factors have the most significant impact on customer engagement.",
    technologies: ["Python", "Flask", "GCP", "Azure"],
  },
];

export const CONTACT = {
  address: "Dallas, TX - 76201",
  phoneNo: "+1 513 923 6828 ",
  email: "naveenkumar.jakkula98@gmail.com",
};
