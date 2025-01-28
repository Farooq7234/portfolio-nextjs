import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { DiPostgresql } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAppwrite, SiKubernetes } from "react-icons/si";

export const DATA = {
  name: "Umar Farooq",
  initials: "A",
  url: "https://github.com/farooq7234",
  location: "Vellore, India",
  locationLink: "https://www.google.com/maps/place/Vellore",
  description:
    "I tinker around with my beloved laptop, exploring tools and bringing ideas to life through code",
  summary: `Computer science undergrad specializing in full-stack development. Built production-ready projects like e-commerce stores and blogs using the MERN stack. Currently seeking internships or freelance opportunities to create impactful web solutions and expand my expertise.`,
  avatarUrl: "/umarfarooq.jpg",
  skills: [
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-3" />,
    },
    {
      name: "Typescript",
      icon: <Icons.typescript className="size-3" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="size-3" />,
    },
    {
      name: "Python",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "Postgres",
      icon: <DiPostgresql className="size-3" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="size-3" />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="size-3" />,
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite className="size-3" />,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://umarfarooq.hashnode.dev",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "umarfarooq19062003@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/farooq7234",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/umarfarooqdev7390", // Replace with your actual LinkedIn URL
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/umarfarooq7390",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:umarfarooq19062003@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance Web Developer",
      href: "https://www.fiverr.com/umar_farooq_73",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/memoji.jpeg",
      start: "2024",
      end: "Present",
      description:
        "Worked on various freelance projects, including building responsive websites, implementing user authentication, and creating RESTful APIs using the MERN stack. Developed an e-commerce platform with product search functionality, CRUD operations, and Appwrite database integration.",
    },
  ],
  education: [
    {
      school: "Thanthai Periyar Government Institute of Technology",
      href: "",
      degree: "Bachelor's Degree in Computer Science Engineering",
      logoUrl: "/tpgit.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "E-Commerce Website",
      href: "https://e-commerce-react-js-six.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Developed a fully functional e-commerce platform using React.js, Tailwind CSS, and Appwrite. Features include product search, user authentication, and a responsive design. Dark mode functionality added for better user experience.",
      technologies: ["React.js", "Tailwind CSS", "Appwrite", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://e-commerce-react-js-six.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Farooq7234/E_Commerce_ReactJS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/e-commerce-website.png",
      video: "",
    },
    {
      title: "Quality Keeper",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Our AI-driven platform optimizes images and videos by compressing them while maintaining quality. It automatically adjusts images to fit social media aspect ratios, ensuring important elements aren’t cropped",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "prisma",
        "cloudinary",
        "shadcn",
        "clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://quality-keeper.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Farooq7234/ai-saas-cloudinary",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quality-keeper.png",
      video: "",
    },
    {
      title: "Anonymous Feedback Website",
      href: "https://true-feed-back-gules.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A platform for collecting anonymous feedback, built using Next.js and Tailwind CSS. Includes features for feedback submission and admin review.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "shadcn",
        "auth.js",
        "resend",
        "zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://true-feed-back-gules.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Farooq7234/TrueFeedBack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/truefeedback.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI-Integrated Freelancing Platform",
      dates: "2024",
      location: "Remote",
      description:
        "Developed a concept for a freelancing platform with AI-driven features to enhance collaboration between clients and sellers, presented through a detailed PowerPoint during the Smart India Hackathon.",
      image: "/smart-india-hackathon.png",
      links: [],
    },
    {
      title: "AI-Based Traffic Management System",
      dates: "2024",
      location: "Remote",
      description:
        "Presented an AI-driven solution for optimizing traffic flow and reducing congestion during the Smart India Hackathon, showcasing the concept through a detailed PowerPoint presentation.",
      image: "/smart-india-hackathon.png",
      links: [],
    },
    {
      title: "IQAC Website Development",
      dates: "2024",
      location: "Remote",
      description:
        "Designed and developed a creative IQAC website for our college, securing second prize for innovation and functionality.",
      image: "/tpgit.jpg",
      links: [
        {
          title: "Preview",
          href: "https://tpgit-iqac.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Kani-thamizh Website Development",
      dates: "2024",
      location: "Remote",
      description:
        "Crafted a traditional-style website for our college to streamline event management and announcements.",
      image: "/tpgit.jpg",
      links: [
        {
          title: "Preview",
          href: "https://kani-thamizh.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Vehicle Rental Website",
      dates: "2024",
      location: "Remote",
      description:
        "Developed a full-stack vehicle rental application, incorporating user authentication, rental management, and seamless booking features for enhanced user experience.",
      image: "/tutedude.jpg",
      links: [
        {
          title: "Source",
          href: "https://github.com/Farooq7234/VehiCart",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
