"use client";
import { useEffect, useState } from "react";
import { UseThemeContext } from "./ThemeContext";
import styles from "./style/Project.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function TechStack({ imgSrc, Name }) {
  return (
    <div id={styles.TechStack}>
      <div id={styles.TechstackLogo}>
        <Image
          src={imgSrc}
          height={22}
          width={22}
          alt={Name}
          style={{ objectFit: "cover" }}
          draggable={false}
        />
      </div>
      <div id={styles.TechstackName}>{Name}</div>
    </div>
  );
}

function ProjectContainer({
  imgSrc,
  title,
  desc,
  tech,
  id,
  logoMapper,
  theme,
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function redirect(id) {
    if (mounted) {
      router.push(`project/${id}`);
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectImage}>
        <p className={styles.projectTitle}>Project Title</p>
      </div>
    </div>
  );
}

function TopicSelector({ topic, theme, isSelected, toggleTopic }) {
  function changeTopic() {
    toggleTopic(topic);
  }

  return (
    <button
      className={`${styles.topicButton} ${
        theme === "LightMode" ? styles.LightMode : ""
      } ${isSelected ? styles.active : ""}`}
      onClick={changeTopic}
      aria-pressed={isSelected}
    >
      {topic}
    </button>
  );
}

/**
 * Project Component
 * Main component that fetches project data, manages state, and renders projects and topic selectors.
 */
export default function Project() {
  const { theme } = UseThemeContext();
  const [projectData, setData] = useState([]);
  const [ogData, setOgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [logoMapper, setLogoMapper] = useState([]);
  const [topicList, setTopicList] = useState([]);
  const [sort, setSort] = useState("asc");

  /**
   * Fetches project data and logo mapper data from APIs.
   */
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const cacheData = localStorage.getItem("projectData");
        const cacheLogoMapper = localStorage.getItem("logoMapper");
        if (cacheData && cacheLogoMapper) {
          const data = JSON.parse(cacheData);
          const data1 = JSON.parse(cacheLogoMapper);
          setLogoMapper(data1);
          setData(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
          setOgData(data);
          setLoading(false);
          return;
        }
        const res = await fetch("api/project/projectMainPage");
        const res1 = await fetch("/api/project/logoMapper");

        if (!res.ok) {
          throw new Error("Failed to fetch project data");
        }
        if (!res1.ok) {
          throw new Error("Failed to fetch logo mapper data");
        }

        const data = await res.json();
        const data1 = await res1.json();

        // Ensure that 'topic' is an array

        localStorage.setItem("projectData", JSON.stringify(data));
        localStorage.setItem("logoMapper", JSON.stringify(data1));
        setLogoMapper(data1);
        setData(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
        setOgData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);

  function SortbyDate() {
    if (sort === "asc") {
      setData(
        [...projectData].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
    } else {
      setData(
        [...projectData].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  }

  function handleSortChange(value) {
    setSort(value);
    SortbyDate();
  }

  function toggleTopic(topic) {
    setTopicList((prevList) =>
      prevList.includes(topic)
        ? prevList.filter((t) => t !== topic)
        : [...prevList, topic]
    );
  }

  useEffect(() => {
    if (topicList.length === 0) {
      setData(ogData);
    } else {
      const filteredData = ogData.filter((data) =>
        topicList.every((selectedTopic) => data.topic.includes(selectedTopic))
      );
      setData(filteredData);
    }
  }, [topicList, ogData]);

  return (
    <div id={styles.ProjectContainerFull}>
      <h1 className={styles.MainTitle}>Projects</h1>
      {loading ? (
        <div className={styles.LoaderContainer}>
          <h1>Fetching</h1>
        </div>
      ) : (
        <>
          <div
            className={`${styles.SortContainer} ${
              theme === "LightMode" ? styles.LightMode : ""
            }`}
          >
            <select
              className={`${styles.SortDropdown} ${
                theme === "LightMode" ? styles.LightMode : ""
              }`}
              onChange={(e) => handleSortChange(e.target.value)}
              value={sort}
            >
              <option value="asc">Sort by Date (Newest)</option>
              <option value="desc">Sort by Date (Oldest)</option>
            </select>
          </div>
          <div className={styles.topicContainer}>
            <TopicSelector
              topic="ML"
              theme={theme}
              isSelected={topicList.includes("ML")}
              toggleTopic={toggleTopic}
            />
            <TopicSelector
              topic="Web Development"
              theme={theme}
              isSelected={topicList.includes("Web Development")}
              toggleTopic={toggleTopic}
            />
          </div>
          <div id={styles.ProjectContainerMain}>
            <ProjectContainer
              imgSrc={
                theme === "LightMode"
                  ? "/assets/img/personalPortfolioLight.png"
                  : "/assets/img/personalPortfolio.png"
              }
              title={"Example Project"}
              desc={"A websocket based file sharing application"}
              tech={["React", "Node.js", "Socket.io"]}
              key={1}
              id={"example-project"}
              logoMapper={logoMapper}
              theme={theme}
            />
          </div>
        </>
      )}
    </div>
  );
}

export { TechStack };
