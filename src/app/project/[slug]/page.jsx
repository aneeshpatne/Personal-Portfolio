export const dynamic = "force-static";
export const revalidate = 86400;

import ProjectChatWrapper from "./ProjectChatWrapper";
import style from "./project.module.css";
import Image from "next/image";
import Link from "next/link";
import { mapper } from "@/components/data";
import { db } from "@/lib/db";
import { projects } from "@/lib/schema";
import { eq } from "drizzle-orm";
import ClientPage from "./clientpage";

const SITE_DOMAIN = "https://www.aneeshpatne.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await db.query.projects.findFirst({
    where: eq(projects.id, slug),
  });
  if (!project) {
    return {
      title: "Project Not Found | Aneesh Patne",
      description: "The requested project could not be located.",
      robots: { index: false },
    };
  }
  const url = `${SITE_DOMAIN}/project/${slug}`;
  const ogImage = `${url}/opengraph-image`;
  const title = project.title || slug;
  const desc = project.shortDesc;
  console.log(desc);
  const techList = project.techStack
    ? project.techStack
        .split(/[,|]/)
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 5)
    : [];
  return {
    title: `${title} | Project | Aneesh Patne`,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Aneesh Patne`,
      description: desc,
      url,
      siteName: "Aneesh Patne Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Aneesh Patne`,
      description: desc,
      images: [ogImage],
    },
    other: techList.length ? { "project:tech": techList.join("|") } : undefined,
  };
}
import MarkdownRenderer from "./MarkdownRenderer";
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const projectData =
    (await db.query.projects.findFirst({
      where: eq(projects.id, slug),
    })) || null;

  if (!projectData) {
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

  const hasGithubLink =
    projectData.github && projectData.github.trim().length > 0;

  return (
    <>
      <div className={style.ProjectPage}>
        <div className={style.backgroundGlow}></div>
        <div className={style.content}>
          <h1 className={style.title}>{projectData.title}</h1>

          <div className={style.projectHeader}>
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

            <div className={style.projectMeta}>
              <div className={style.dates}>
                <span>{formatDate(projectData.startDate)}</span>
                <span className={style.datesDivider}>—</span>
                <span>
                  {projectData.endDate
                    ? formatDate(projectData.endDate)
                    : "Present"}
                </span>
              </div>

              <div className={style.buttons}>
                {hasGithubLink ? (
                  <Link
                    href={projectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.button}
                  >
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
                  <button
                    className={`${style.button} ${style.disabled}`}
                    disabled
                  >
                    <Image
                      src="/assets/img/githubLight.svg"
                      alt="GitHub"
                      width={18}
                      height={18}
                      className={style.buttonIcon}
                    />
                    View on GitHub
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className={style.description}>
            <MarkdownRenderer content={projectData.description} />
          </div>

          <div className={style.metaSection}>
            <h3 className={style.metaTitle}>Technologies</h3>
            <div className={style.techStack}>
              {techStackArray.map((tech, index) => (
                <span
                  key={index}
                  className={style.tech}
                  style={{
                    backgroundColor:
                      mapper[tech]?.color || "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {mapper[tech]?.icon && (
                    <span className={style.techIcon}>{mapper[tech].icon}</span>
                  )}
                  {tech}
                </span>
              ))}
            </div>

            {topicsArray.length > 0 && (
              <>
                <h3 className={style.metaTitle}>Topics</h3>
                <div className={style.topics}>
                  {topicsArray.map((topic, index) => (
                    <span
                      key={index}
                      className={style.topic}
                      style={{
                        backgroundColor:
                          mapper[topic]?.color || "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {mapper[topic]?.icon && (
                        <span className={style.techIcon}>
                          {mapper[topic].icon}
                        </span>
                      )}
                      {topic}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <ProjectChatWrapper dataDump={projectData.LLMdump} />
      </div>
    </>
  );
}
