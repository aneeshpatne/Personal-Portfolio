import Chat from "@/components/chat";
import style from "./project.module.css";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/data/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const projectData = await data.json();
  if (!data.ok) {
    return <div>Project not found</div>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  // Convert comma-separated strings to arrays
  const techStackArray = projectData.techStack
    ? projectData.techStack.split(",").map((tech) => tech.trim())
    : [];
  const topicsArray = projectData.topic
    ? projectData.topic.split(",").map((topic) => topic.trim())
    : [];

  return (
    <div className={style.ProjectPage}>
      <div className={style.content}>
        <h1 className={style.title}>{projectData.title}</h1>

        <div className={style.imageContainer}>
          <Image
            src={projectData.image}
            alt={projectData.title}
            width={500}
            height={500}
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={style.meta}>
          <div className={style.dates}>
            {formatDate(projectData.startDate)} -{" "}
            {projectData.endDate ? formatDate(projectData.endDate) : "Present"}
          </div>

          <div className={style.techStack}>
            {techStackArray.map((tech, index) => (
              <span key={index} className={style.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={style.topics}>
            {topicsArray.map((topic, index) => (
              <span key={index} className={style.topic}>
                {topic}
              </span>
            ))}
          </div>
        </div>

        <p className={style.description}>{projectData.description}</p>
      </div>

      <Chat dataDump={projectData.description} />
    </div>
  );
}
