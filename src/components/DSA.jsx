"use client";
import styles from "./style/DSA.module.css";
import DoughnutChart from "./chart";
import { Bug } from "lucide-react";
import { Fira_Code } from "next/font/google";
import TechBadge from "./TechBadge";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const words = ["Perseverance", "Mastery", "Dedication"];
const dsaData = [
  "Arrays & Hashing",
  "Two Pointers",
  "Stack",
  "Binary Search",
  "Sliding Window",
  "Linked List",
  "Trees",
  "Tries",
  "Heap / Priority Queue",
  "Intervals",
  "Greedy",
  "Advanced Graphs",
  "Backtracking",
  "Graphs",
  "2-D DP",
  "1-D DP",
  "Bit Manipulation",
  "Math & Geometry",
  "Recursion",
  "Sorting & Searching",
  "Merge Intervals",
  "Graph Traversal (BFS & DFS)",
  "Topological Sorting",
  "Union-Find / Disjoint Set",
  "Segment Tree",
  "Fenwick Tree (Binary Indexed Tree)",
  "Kadanes Algorithm",
  "Prefix Sum",
  "Suffix Array",
  "Dynamic Connectivity",
  "Trie Applications",
  "Network Flow Algorithms",
  "Game Theory",
  "Bitmasking",
  "Modular Arithmetic",
  "Number Theory",
  "Matrix Exponentiation",
  "Combinatorics",
];

const ibm_font = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
export default function DSA() {
  return (
    <div className={styles.Container}>
      <h1 className={`${styles.heading} ${ibm_font.className}`}>
        Coding <Bug size={30} />
      </h1>
      <div className={styles.Content}>
        <div className={styles.chart}>
          <DoughnutChart />
        </div>
        <div className={styles.info}>
          <h1 className={styles.Title}>Deep Understanding of Algorithms</h1>
          <div className={styles.topics}>Topics</div>
          <div className={styles.topicList}>
            {dsaData.map((topic, index) => (
              <TechBadge key={index} name={topic} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
