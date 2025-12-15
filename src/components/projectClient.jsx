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
import { useState, Suspense } from "react";
import { FolderX } from "lucide-react";

export function ProjectContainerWrapper({ processedData, tags }) {
  const [filter, setFilter] = useState({ sort: "default", filter: [] });

  // 1. Filter first
  let filteredData = processedData;
  if (filter.filter.length > 0) {
    filteredData = processedData.filter((p) =>
      filter.filter.every((f) => p.tags.includes(f))
    );
  }

  // 2. Sort second
  let finalData =
    filter.sort === "reverse" ? [...filteredData].reverse() : filteredData;

  const toggleTag = (tag) => {
    setFilter((prev) => {
      const isActive = prev.filter.includes(tag);
      const newFilter = isActive
        ? prev.filter.filter((t) => t !== tag)
        : [...prev.filter, tag];
      return { ...prev, filter: newFilter };
    });
  };

  return (
    <>
      <SortStatus setFilter={setFilter} filter={filter} />
      <div className={styles.tagBox}>
        {tags.map((tag, index) => {
          const isActive = filter.filter.includes(tag);
          return (
            <button
              key={index}
              onClick={() => toggleTag(tag)}
              className={`${styles.tagButton} ${isActive ? styles.active : ""}`}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className={styles.projectBox}>
        {finalData.length === 0 ? (
          <div className={styles.emptyState}>
            <FolderX size={48} strokeWidth={1.5} />
            <p>No projects found</p>
            <span>Try adjusting your filters</span>
          </div>
        ) : (
          finalData.map((project, index) => (
            <ProjectContainer
              key={index}
              stack={project.techStack}
              name={project.title}
              description={project.description}
              image={project.image}
              id={project.id}
              isInProgress={project.isInProgress}
            />
          ))
        )}
      </div>
    </>
  );
}
export function FilterStatus() {}
export function SortStatus({ setFilter, filter }) {
  return (
    <div className={styles.sortContainer}>
      <button
        onClick={() => setFilter((prev) => ({ ...prev, sort: "default" }))}
        className={`${styles.sortButton} ${
          filter.sort === "default" ? styles.active : ""
        }`}
        title="Default Sort"
      >
        <ArrowDownNarrowWide size={20} />
      </button>
      <button
        onClick={() => setFilter((prev) => ({ ...prev, sort: "reverse" }))}
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
