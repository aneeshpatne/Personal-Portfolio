import Chat from "@/components/chat";
import style from "./project.module.css";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  console.log("Project slug:", slug);
  return (
    <div className={style.ProjectPage}>
      <h1>Project Page</h1>
      <p>This is the project page.</p>
      <p>Project slug: {slug}</p>
      <Chat />
    </div>
  );
}
