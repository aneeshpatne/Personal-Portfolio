export const revalidate = 86400;

import styles from "./style/ProjectNew.module.css";
import { ProjectContainer } from "./ProjectNew";
import { Title } from "./ProjectNew";
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export default async function ProjectNew() {
  const project = await prisma.projects.findMany();
  if (!project) {
    return <div>Project not found</div>;
  }
  const processedData = project.map((project) => ({
    ...project,
    techStack: project.techStack.split(",").map((tech) => tech.trim()),
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
          />
        ))}
      </div>
    </div>
  );
}
