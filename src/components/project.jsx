export const revalidate = 86400;

import styles from "./style/ProjectNew.module.css";
import { Title } from "./ProjectNew";
import TechPill from "./TechPill";
import { ReadMoreText } from "./ProjectNew";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { mapper } from "./data";
import { db } from "@/lib/db";
import { projectList } from "@/lib/schema";
import { desc, asc, sql } from "drizzle-orm";
import { ProjectContainer } from "./projectClient";
export default async function ProjectNew() {
  let project = null;

  try {
    project = await db
      .select()
      .from(projectList)
      .orderBy(
        sql`CASE WHEN ${projectList.endDate} IS NULL THEN 0 ELSE 1 END`,
        sql`CASE WHEN ${projectList.endDate} IS NULL THEN ${projectList.startDate} END DESC`,
        desc(projectList.endDate)
      );
  } catch (error) {
    console.error("Error fetching project data:", error);
    return <div>Fetching Error</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }
  const processedData = project.map((project) => ({
    ...project,
    techStack: project.techStack.split(",").map((tech) => tech.trim()),
    isInProgress: project.endDate === null,
  }));
  return (
    <div className={styles.projects}>
      <Title />
      <div className={styles.projectBox}>
        {processedData.map((project, index) => (
          <ProjectContainer
            key={index}
            stack={project.techStack}
            name={project.title}
            description={project.description}
            image={project.image}
            id={project.id}
            isInProgress={project.isInProgress}
          />
        ))}
      </div>
    </div>
  );
}
