export const allowedFileFormats = {
  "application/pdf": [],
  "application/msword": [],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
};

export const serverUri = "http://172.16.4.163:8000";

export const responseObj = {
  personal_statement: {
    description:
      "Programming enthusiast, loves to take on new challenges. Currently exploring back-end.",
  },
  personal_information: {
    name: "Prashant Chaudhary",
    title: "Node.js Developer",
    email: "prashantchy265@gmail.com",
    github: "github.com/prashantch265",
    linkedin: "linkedin.com/in/prashant-ch265",
  },
  education: [
    {
      degree: "Bachelor of Information Management",
      university_name: "Shanker Dev Campus",
      start_date: "2018",
      end_date: "Present",
    },
    {
      degree: "+2",
      university_name: "Liverpool Int'l Higher Secondary School",
      start_date: "2016",
      end_date: "2018",
    },
  ],
  work_experience: [
    {
      job_title: "Node.js Developer",
      company: "Infodevelopers Pvt. Ltd.",
      start_date: "04/2021",
      end_date: "Present",
      descriptions: [
        "Participate in the entire application lifecycle, focusing on coding and debugging",
        "Write clean code to develop functional web applications",
        "Troubleshoot and debug applications",
        "Collaborate with front-end developers to integrate user-facing elements with server-side logic",
        "Write efficient queries and design robust data schema",
      ],
      uuid: "6ca7464d612740ba9c5c73e974b132aa",
    },
    {
      job_title: "React Intern",
      company: "Teamone Technologies",
      start_date: "01/2021",
      end_date: "03/2021",
      descriptions: [
        "Responsible for developing front-end with React.js and Bootstrap",
        "Worked on geo-visualization of cooperatives of Province 5",
        "Worked with Leaflet and Google Maps API",
      ],
      uuid: "0537de0d41f34ea29eacf1c8033e36c0",
    },
  ],
  project_experience: [
    {
      project_name: "Digital Money Lending System - Rapimoney",
      project_description: [
        "Developed a digital money lending system using Node.js and micro-service architecture",
      ],
      "tools/technologies": ["Node.js", "Micro-service architecture"],
      uuid: "45af5a5b38ed4824ad91e64c025e6c74",
    },
    {
      project_name: "Inventory Management System",
      project_description: [
        "Developed an inventory management system using Node.js",
      ],
      "tools/technologies": ["Node.js"],
      uuid: "5e9d104193c942caa4e7abdec2bc0b14",
    },
    {
      project_name: "Network Management Tool for Infra Team",
      project_description: [
        "Developed a network management tool for the Infra team using Node.js",
      ],
      "tools/technologies": ["Node.js"],
      uuid: "2ce3257dc135488bab4438faf8d32c0e",
    },
    {
      project_name: "Student Report Management System",
      project_description: [
        "Developed a MIS that helps to manage the student's data and generate and helps interpret reports",
      ],
      "tools/technologies": ["Express", "PostgreSQL", "AdminLTE", "Vanilla JS"],
      uuid: "b9d982f3286947c29188cb1c0c456b61",
    },
    {
      project_name: "Edxplor",
      project_description: [
        "Developed back-end for a startup education consultant",
      ],
      "tools/technologies": ["Typestack", "Express"],
      uuid: "799e1cc997f649b0a5127601a9524074",
    },
    {
      project_name: "Pg-Event-Listener",
      project_description: [
        "Developed a Postgres event listener built with Node.js that listens to the event call",
      ],
      "tools/technologies": ["Node.js", "PostgreSQL"],
      uuid: "1c7315bb154740e7a7e54c5cc36a09fc",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Java",
    "Node.js",
    "Express",
    "Nest.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Routing Controllers",
    "Sequelize",
    "TypeORM",
    "MikroORM",
    "Mongoose",
    "REST API",
    "GraphQL",
    "WebSocket",
    "HTML",
    "CSS",
    "Bootstrap",
    "React",
    "Git",
    "Heroku",
    "AWS",
    "Passport",
    "Keycloak",
    "OpenID",
    "Docker",
  ],
  certifications: [
    {
      certification_name: "Best Futuristic Model @AsianHack2022",
      certification_link: "",
      issued_organization: "AsianHack2022",
      certification_description:
        "Built a fire detection and alert system by using sound spectrum analysis that helps to detect and prevent wildfire.",
    },
  ],
  trainings: [
    {
      title: "Courses",
    },
  ],
};
