import whaleSucculent from "../public/assets/projects/homepage.png";
import portfolio from "../public/assets/projects/portfolio.png";
import unknown from "../public/assets/projects/unknown.png";
export const projects = [
  {
    id: 1,
    title: "Whale Succulent E-commerce Website",
    projImage: whaleSucculent,
    projectUrl: "/whale",
    tags: ["React", "Mongo", "Express", "Node", "Stripe", "GraphQL"],
  },
  {
    id: 2,
    title: "Portfolio",
    projImage: portfolio,
    projectUrl: "/portfolio",
    tags: ["Next", "Tailwind", "Material UI", "Framer Motion"],
  },
  {
    id: 3,
    title: "BoostYYC",
    projImage: unknown,
    projectUrl: "/boostyyc",
    tags: [
      "Next",
      "Material UI",
      "Google Maps API",
      "Facebook API",
      "Twitter API",
      "Java Backend",
    ],
  },
];
