import { pgTable, text, date } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: text("id").primaryKey(),
  title: text("title"),
  techStack: text("techStack"),
  description: text("description"),
  image: text("image"),
  startDate: date("startDate"),
  endDate: date("endDate"),
  topic: text("topic"),
  LLMdump: text("LLMdump"),
  shortDesc: text("shortDesc"),
});

export const projectList = pgTable("projectList", {
  id: text("id").primaryKey(),
  title: text("title"),
  techStack: text("techStack"),
  description: text("description"),
  image: text("image"),
  startDate: date("startDate"),
  endDate: date("endDate"),
  tags: text("date"),
});
