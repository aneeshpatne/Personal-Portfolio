import Chat from "@/components/chat";
import style from "./project.module.css";
import Image from "next/image";
import Link from "next/link";

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

  // Check if GitHub link exists
  const hasGithubLink = projectData.github && projectData.github.trim().length > 0;

  return (
    <div className={style.ProjectPage}>
      <div className={style.content}>
        <h1 className={style.title}>{projectData.title}</h1>

        <div className={style.imageContainer}>
          <Image
            src={projectData.image}
            alt={projectData.title}
            width={100}
            height={100}
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
        
        <div className={style.buttons}>
          {hasGithubLink ? (
            <Link href={projectData.github} target="_blank" rel="noopener noreferrer" className={`${style.button} ${style.github}`}>
              <Image 
                src="/assets/img/githubLight.svg" 
                alt="GitHub" 
                width={18} 
                height={18}
                className={style.buttonIcon} 
              />
              View on GitHub
            </Link>
          ) : (
            <button className={`${style.button} ${style.github} ${style.disabled}`} disabled>
              <Image 
                src="/assets/img/githubLight.svg" 
                alt="GitHub" 
                width={18} 
                height={18}
                className={style.buttonIcon} 
              />
              GitHub Unavailable
            </button>
          )}
        </div>
      </div>

      <Chat dataDump={projectData.description} />
    </div>
  );
}
