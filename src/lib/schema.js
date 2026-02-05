import { pgTable, text, date } from "drizzle-orm/pg-core";

export const projects = pgTable("project", {
  id: text("id").primaryKey(),
  title: text("name"),
  techStack: text("stack"),
  description: text("desc"),
  image: text("img"),
  startDate: date("start"),
  endDate: date("end"),
  topic: text("topics"),
  LLMdump: text("dump"),
  shortDesc: text("short"),
});

export const projectList = pgTable("projects", {
  id: text("id").primaryKey(),
  title: text("name"),
  techStack: text("stack"),
  description: text("desc"),
  image: text("img"),
  startDate: date("start"),
  endDate: date("end"),
  tags: text("tag"),
});
