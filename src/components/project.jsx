export const revalidate = 86400;

import styles from "./style/ProjectNew.module.css";
import { Title } from "./ProjectNew";
import { TechStack1 } from "./WebDev";
import { ReadMoreText } from "./ProjectNew";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { mapper } from "./data";
import { db } from "@/lib/db";
import { projectList } from "@/lib/schema";
import { desc, asc, sql } from "drizzle-orm";

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

export function ProjectContainer({
  name,
  stack,
  description,
  image,
  id,
  isInProgress,
}) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.ImageContaier}>
        {isInProgress && (
          <div className={styles.ongoingBadge}>
            <span>Ongoing</span>
          </div>
        )}
        <Image
          src={image}
          width={300}
          height={180}
          style={{ objectFit: "cover" }}
          draggable={false}
          alt="Project Image"
        />
        <div className={styles.overlay}>
          <h2 className={styles.overlayText}>{name}</h2>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.projectTechStackContainer}>
          {stack.map((tech, index) => (
            <TechStack1
              key={index}
              name={tech}
              color={mapper[tech]?.color}
              icon={mapper[tech]?.icon}
            />
          ))}
        </div>
        <div className={styles.projectDescription}>
          <ReadMoreText text={description} />
        </div>
        <Link className={styles.projectLearnMore} href={`project/${id}`}>
          <p className={styles.projectLearnMoreText}>Learn More</p>
          <ExternalLink size={20} />
        </Link>
      </div>
    </div>
  );
}
