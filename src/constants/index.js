import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg"
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";



export const HERO_CONTENT = `I am a Java Developer with a strong foundation in backend development and a passion for building scalable and efficient web applications. I specialize in Core Java, Object-Oriented Programming, and Spring Boot, with hands-on experience in developing RESTful APIs and database-driven applications.

I am eager to contribute to building efficient and maintainable software solutions while continuously enhancing my technical expertise and problem-solving abilities.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented Java Developer with a strong foundation in backend development. I have completed my MCA from Dr. B.V. Hiray College of Management and Research Center, where I built solid knowledge in Core Java, Object-Oriented Programming, and Spring Boot.

I have hands-on experience in developing web applications using technologies like Spring Boot, Hibernate, and MySQL, along with basic knowledge of frontend technologies such as HTML, CSS, JavaScript, and React. I enjoy building RESTful APIs and working with database-driven applications to create efficient and scalable solutions.

I have developed projects like an Employee Management System, demonstrating my ability to implement CRUD operations, authentication, and responsive user interfaces.

I am always eager to learn new technologies, improve my skills, and contribute to meaningful and innovative software solutions.`;

// 

export const EXPERIENCES = [
  {
    year: "2025 - 2026",
    role: "Full Stack Java Developer (Hands-on Training & Projects)",
    company: "Hefshine Softwares, Pune",
    description: `Gained practical experience in developing full stack applications using Java, Spring Boot, Hibernate, and MySQL. Created responsive UIs with HTML, CSS, and Bootstrap, and deployed projects integrating backend APIs with relational databases.`,
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "Bootstrap"],
  },
  {
    year: "2023 - 2025",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description: `Delivered customized academic projects for MCA students. Modified and enhanced project structures, built JSP-based web pages, configured MySQL databases, and ensured complete functionality across front-end, back-end, and database integration.`,
    technologies: ["HTML", "CSS", "JSP", "Java", "MySQL", "Hibernate", "SpringBoot", "Android"],
  },

];


export const PROJECTS = [
  {
    title: "(EMS) Employee Management System",
    image: project1,
    description:
      "A full-stack Employee Management System designed to manage employee data efficiently. The application supports CRUD operations, secure authentication, and RESTful API integration. It features a responsive user interface and ensures smooth interaction between frontend and backend systems.",
    technologies: ["HTML", "CSS", "Bootstrap", "Java", "Spring Boot", "Hibernate", "MySQL"],
  },

  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },

  {
    title: "Job Portal",
    image: project3,
    description:
      "Developed a scalable Job Portal application with functionalities such as user registration, job posting, job search, and application management. Designed RESTful APIs using Spring Boot and integrated database operations for efficient data handling.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST API"]
  },

  {
    title: "Ground Booking System",
    image: project4,
    description: `Developed an online platform for users to reserve sports grounds with real-time booking management.
    Implemented secure user authentication, booking and payment functionalities.
    Built REST APIs using Spring Boot and integrated responsive React frontend.
    Designed MySQL database for managing users, bookings and payment records.`,
    technologies: [
      "React.js",
      "JavaScript",
      "Java",
      "Spring Boot",
      "MySQL",
      "Bootstrap"
    ],
  },




];

export const CONTACT = {
  address: "Malegaon Dist-Nashik ",
  phoneNo: "7058623174 ",
  email: "rohitkhadke05@gmail.com",
};
