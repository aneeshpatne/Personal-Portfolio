import TechPill from "./TechPill";
import { ReadMoreText } from "./ProjectNew";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            <TechPill
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
