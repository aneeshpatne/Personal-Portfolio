import "server-only";

import { cache } from "react";
import { readFile } from "fs/promises";
import path from "path";

const PROJECTS_JSON_PATH = path.join(
  process.cwd(),
  "public",
  "assets",
  "json",
  "projects_rows.json"
);

function splitList(value) {
  return (value || "")
    .split(/[,|]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeProject(project) {
  const techStack = splitList(project.techStack);
  const topics = splitList(project.topic);

  return {
    ...project,
    description: project.description?.trim() || "",
    shortDesc: project.shortDesc?.trim() || "",
    techStack,
    topics,
    tags: topics,
    isInProgress: project.endDate === null,
  };
}

function compareProjects(a, b) {
  if (a.endDate === null && b.endDate !== null) {
    return -1;
  }

  if (a.endDate !== null && b.endDate === null) {
    return 1;
  }

  if (a.endDate === null && b.endDate === null) {
    return b.startDate.localeCompare(a.startDate);
  }

  return (b.endDate || "").localeCompare(a.endDate || "");
}

export const getAllProjects = cache(async function getAllProjects() {
  const raw = await readFile(PROJECTS_JSON_PATH, "utf8");
  const projects = JSON.parse(raw);

  return projects.map(normalizeProject).sort(compareProjects);
});

export async function getProjectBySlug(slug) {
  const projects = await getAllProjects();
  return projects.find((project) => project.id === slug) || null;
}

export async function getProjectTags() {
  const projects = await getAllProjects();
  return [...new Set(projects.flatMap((project) => project.tags))];
}
