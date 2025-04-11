import Chat from "@/components/chat";
import style from "./project.module.css";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const data = await fetch("http://localhost:3000/api/data/" + slug, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const projectData = await data.json();
  if (!data.ok) {
    return <div>Project not found</div>;
  }

  return (
    <div className={style.ProjectPage}>
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      <p>Project slug: {slug}</p>
      <Chat dataDump={projectData.description} />
    </div>
  );
}
