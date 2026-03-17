export const revalidate = 86400;

import styles from "./style/ProjectNew.module.css";
import { Title } from "./ProjectNew";
import { getAllProjects, getProjectTags } from "@/lib/projects";
import { ProjectContainer, ProjectContainerWrapper } from "./projectClient";

export default async function ProjectNew() {
  let project = null;

  try {
    project = await getAllProjects();
  } catch (error) {
    console.error("Error fetching project data:", error);
    return <div>Fetching Error</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }
  const tags = await getProjectTags();
  return (
    <div className={styles.projects}>
      <Title />
      <ProjectContainerWrapper processedData={project} tags={tags} />
    </div>
  );
}
