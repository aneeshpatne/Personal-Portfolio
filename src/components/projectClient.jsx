"use client";
import TechPill from "./TechPill";
import { ReadMoreText } from "./ProjectNew";
import {
  ExternalLink,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./style/ProjectNew.module.css";
import { mapper } from "./data";
import { useState } from "react";

export function ProjectContainerWrapper({ processedData }) {
  const [filter, setFilter] = useState({ sort: "default", filter: [] });
  let tempData =
    filter.sort === "reverse" ? [...processedData].reverse() : processedData;
  if (filter.filter.length > 0) {
    tempData = filter.filter.reduce((acc, f) => {
      return acc.filter((p) => p.tags.includes(f));
    }, tempData);
  }

  return (
    <>
      <SortStatus setFilter={setFilter} filter={filter} />
      <div className={styles.projectBox}>
        {tempData.map((project, index) => (
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
    </>
  );
}
export function FilterStatus() {}
export function SortStatus({ setFilter, filter }) {
  return (
    <div className={styles.sortContainer}>
      <button
        onClick={() => setFilter({ sort: "default" })}
        className={`${styles.sortButton} ${
          filter.sort === "default" ? styles.active : ""
        }`}
        title="Default Sort"
      >
        <ArrowDownNarrowWide size={20} />
      </button>
      <button
        onClick={() => setFilter({ sort: "reverse" })}
        className={`${styles.sortButton} ${
          filter.sort === "reverse" ? styles.active : ""
        }`}
        title="Reverse Sort"
      >
        <ArrowUpNarrowWide size={20} />
      </button>
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
