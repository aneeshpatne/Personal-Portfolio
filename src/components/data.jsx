import React from "react";
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
  SiJavascript,
  SiPython,
  SiVercel,
  SiFramer,
  SiDjango,
  SiGooglecloud,
  SiFirebase,
  SiApachekafka,
  SiSupabase,
  SiCloudflare,
  SiKotlin,
  SiEspressif,
  SiFfmpeg,
  SiOpensearch,
} from "react-icons/si";
import {
  TbBrandRedhat,
  TbTerminal2,
  TbBrandRadixUi,
  TbDroplet,
  TbComponents,
} from "react-icons/tb";
import { VscBroadcast } from "react-icons/vsc";
import { RiRobot2Line } from "react-icons/ri";
import {
  FaRocket,
  FaDatabase,
  FaBolt,
  FaBrain,
  FaNetworkWired,
  FaMapMarkedAlt,
  FaMicrochip,
  FaRobot,
  FaCogs,
  FaProjectDiagram,
  FaImage,
  FaShapes,
  FaSearch,
  FaComment,
  FaCode,
  FaChartBar,
  FaPencilRuler,
  FaLightbulb,
  FaSitemap,
  FaPuzzlePiece,
  FaGamepad,
} from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";

export const mapper = {
  // Existing mappings
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

  // New mappings for techs used in projects
  WebSocket: {
    color: "#2c2a1a",
    icon: <FaBolt size={16} />,
  },
  LLM: {
    color: "#2c2a2a",
    icon: <FaBrain size={16} />,
  },
  "Vector Databases": {
    color: "#2a2c1a",
    icon: <FaShapes size={16} />,
  },
  "REST APIs": {
    color: "#2a2a2c",
    icon: <FaNetworkWired size={16} />,
  },
  JavaScript: {
    color: "#2a2c2a",
    icon: <SiJavascript size={16} />,
  },
  Python: {
    color: "#2a2a1a",
    icon: <SiPython size={16} />,
  },
  Vercel: {
    color: "#2a2a29",
    icon: <SiVercel size={16} />,
  },
  "Framer Motion": {
    color: "#2c2a2a",
    icon: <SiFramer size={16} />,
  },
  // Map "React.js" to the same as "React"
  "React.js": {
    color: "#1a2c2c",
    icon: <SiReact size={16} />,
  },
  Django: {
    color: "#2a2c29",
    icon: <SiDjango size={16} />,
  },
  GCP: {
    color: "#2a292a",
    icon: <SiGooglecloud size={16} />,
  },
  Firebase: {
    color: "#2c2a29",
    icon: <SiFirebase size={16} />,
  },
  "Google Maps API": {
    color: "#292a2c",
    icon: <FaMapMarkedAlt size={16} />,
  },
  SQL: {
    color: "#2a292c",
    icon: <FaDatabase size={16} />,
  },
  IoT: {
    color: "#2c2a1a",
    icon: <FaMicrochip size={16} />,
  },
  ESP8266: {
    color: "#2c2a1a",
    icon: <FaMicrochip size={16} />,
  },
  "Machine Learning": {
    color: "#2a2c1a",
    icon: <FaRobot size={16} />,
  },
  DLIB: {
    color: "#2a2a29",
    icon: <FaCogs size={16} />,
  },
  KNN: {
    color: "#2a2929",
    icon: <FaProjectDiagram size={16} />,
  },
  "Digital Image Processing": {
    color: "#2a2a2a",
    icon: <FaImage size={16} />,
  },
  Figma: {
    color: "#2a2c2a",
    icon: <FiFigma size={16} />,
  },
  "Auto Gen": {
    color: "#2c1a1a",
    icon: <IoSparklesSharp size={16} />,
  },
  "Web Scraping": {
    color: "#2c1a2a",
    icon: <FaSearch size={16} />,
  },
  Chatbots: {
    color: "#1a2a2c",
    icon: <FaComment size={16} />,
  },
  "Artificial Intelligence": {
    color: "#291a2c",
    icon: <FaBrain size={16} />,
  },
  ML: {
    color: "#1a2c26",
    icon: <FaRobot size={16} />,
  },
  "Image Processing": {
    color: "#261a2c",
    icon: <FaImage size={16} />,
  },
  "Web Dev": {
    color: "#1a222c",
    icon: <FaCode size={16} />,
  },
  CRUD: {
    color: "#222c1a",
    icon: <FaDatabase size={16} />,
  },
  "Internet of Things": {
    color: "#2c1a22",
    icon: <FaMicrochip size={16} />,
  },
  "UI / UX Design": {
    color: "#2c1a26",
    icon: <FaPencilRuler size={16} />,
  },
  "Mind Map": {
    color: "#1a2c22",
    icon: <FaSitemap size={16} />,
  },
  "Web Extension": {
    color: "#221a2c",
    icon: <FaPuzzlePiece size={16} />,
  },
  "Gamified Learning": {
    color: "#1a262c",
    icon: <FaGamepad size={16} />,
  },
  Kafka: {
    color: "#1a1a1a",
    icon: <SiApachekafka size={16} />,
  },
  Redpanda: {
    color: "#2c1a1a",
    icon: <TbBrandRedhat size={16} />,
  },
  SSH: {
    color: "#1a2a1a",
    icon: <TbTerminal2 size={16} />,
  },
  Zustand: {
    color: "#2a1a1a",
    icon: <TbBrandRadixUi size={16} />,
  },
  "Pub/Sub": {
    color: "#1a1a2c",
    icon: <VscBroadcast size={16} />,
  },
  Playwright: {
    color: "#2c1a2a",
    icon: <FaCode size={16} />,
  },
  "Shadcn/ui": {
    color: "#1a1a1a",
    icon: <TbComponents size={16} />,
  },
  Supabase: {
    color: "#1a2c2a",
    icon: <SiSupabase size={16} />,
  },
  Drizzle: {
    color: "#1a2a2a",
    icon: <TbDroplet size={16} />,
  },
  "Vercel AI SDK": {
    color: "#1a1a1c",
    icon: <RiRobot2Line size={16} />,
  },
  Cloudflare: {
    color: "#2a2a1a",
    icon: <SiCloudflare size={16} />,
  },
  Kotlin: {
    color: "#1a1a2c",
    icon: <SiKotlin size={16} />,
  },
  ESP32: {
    color: "#2c1a1a",
    icon: <SiEspressif size={16} />,
  },
  Express: {
    color: "#1a1a1c", // Same as Express.js
    icon: <SiExpress size={16} />,
  },
  FFmpeg: {
    color: "#1a2c1a",
    icon: <SiFfmpeg size={16} />,
  },
  Opensearch: {
    color: "#1a1f2c",
    icon: <SiOpensearch size={16} />,
  },
};
