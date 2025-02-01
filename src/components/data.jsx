import {
  SiNextdotjs,
  SiReact,
  SiSvelte,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiRedis,
} from "react-icons/si";
import { FaRocket, FaDatabase } from "react-icons/fa";

export const mapper = {
  "Next.js": {
    color: "#1a1a1a",
    icon: <SiNextdotjs size={16} />,
  },
  React: {
    color: "#1a2c2c",
    icon: <SiReact size={16} />,
  },
  Sveltekit: {
    color: "#2c1a1a",
    icon: <SiSvelte size={16} />,
  },
  HTML: {
    color: "#2c1f1a",
    icon: <SiHtml5 size={16} />,
  },
  CSS: {
    color: "#1a1f2c",
    icon: <SiCss3 size={16} />,
  },
  "Tailwind CSS": {
    color: "#1a262c",
    icon: <SiTailwindcss size={16} />,
  },
  "Node.js": {
    color: "#1a2c1a",
    icon: <SiNodedotjs size={16} />,
  },
  "Express.js": {
    color: "#1a1a1c",
    icon: <SiExpress size={16} />,
  },
  FastAPI: {
    color: "#2c1a29",
    icon: <FaRocket size={16} />,
  },
  Flask: {
    color: "#1c1c1c",
    icon: <SiFlask size={16} />,
  },
  MySQL: {
    color: "#1a1f2c",
    icon: <SiMysql size={16} />,
  },
  PostgreSQL: {
    color: "#1a2c2c",
    icon: <SiPostgresql size={16} />,
  },
  MongoDB: {
    color: "#1a2c1a",
    icon: <SiMongodb size={16} />,
  },
  SQLite: {
    color: "#1f1a2c",
    icon: <SiSqlite size={16} />,
  },
  ChromaDB: {
    color: "#2c1a2c",
    icon: <FaDatabase size={16} />,
  },
  Redis: {
    color: "#2c1a1a",
    icon: <SiRedis size={16} />,
  },
};
