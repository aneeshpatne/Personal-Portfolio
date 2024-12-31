'use client';
import { useEffect, useState } from 'react';
import { UseThemeContext } from './ThemeContext';
import styles from './style/Project.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ClipLoader } from 'react-spinners';


function TechStack({ imgSrc, Name }) {
    return (
        <div id={styles.TechStack}>
            <div id={styles.TechstackLogo}>
                <Image
                    src={imgSrc}
                    height={22}
                    width={22}
                    alt={Name}
                    style={{ objectFit: 'cover' }}
                    draggable={false}
                />
            </div>
            <div id={styles.TechstackName}>{Name}</div>
        </div>
    );
}


function ProjectContainer({ imgSrc, title, desc, tech, id, logoMapper, theme }) {
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
        <div
            id={styles.ProjectContainer}
            className={theme === 'LightMode' ? styles.LightMode : ''}
        >
            <div id={styles.ProjectImg}>
                <Image src={imgSrc} alt={title} width={300} height={180} draggable={false} />
                <button
                    className={styles.ProjectBtn}
                    onClick={() => redirect(id)}
                    aria-label={`Go to project ${title}`}
                >
                    <img src="/assets/img/arrow.svg" alt="Arrow Icon" />
                </button>
            </div>
            <h1
                id={styles.ProjectName}
                className={theme === 'LightMode' ? styles.LightMode : ''}
            >
                {title}
            </h1>
            <div
                id={styles.ProjectDesc}
                className={theme === 'LightMode' ? styles.LightMode : ''}
            >
                {desc}
            </div>
            <p className={styles.smallText}>Tools and Technologies</p>
            <div id={styles.TechstackContainer}>
                {tech.map((val, index) => (
                    <TechStack
                        Name={val}
                        imgSrc={logoMapper[0][val]}
                        key={index}
                    />
                ))}
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
                theme === 'LightMode' ? styles.LightMode : ''
            } ${isSelected ? styles.active : ''}`}
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
    const [sort, setSort] = useState('asc');

    /**
     * Fetches project data and logo mapper data from APIs.
     */
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch('api/project/projectMainPage');
                const res1 = await fetch('/api/project/logoMapper');

                if (!res.ok) {
                    throw new Error('Failed to fetch project data');
                }
                if (!res1.ok) {
                    throw new Error('Failed to fetch logo mapper data');
                }

                const data = await res.json();
                const data1 = await res1.json();

                // Ensure that 'topic' is an array


                setLogoMapper(data1);
                setData(
                    data.sort(
                        (a, b) => new Date(b.date) - new Date(a.date)
                    )
                );
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
        if (sort === 'asc') {
            setData([...projectData].sort((a, b) => new Date(a.date) - new Date(b.date)));
        } else {
            setData([...projectData].sort((a, b) => new Date(b.date) - new Date(a.date)));
        }
    }


    function handleSortChange(value) {
        setSort(value);
        SortbyDate();
    }


    function toggleTopic(topic) {
        setTopicList(prevList =>
            prevList.includes(topic)
                ? prevList.filter(t => t !== topic)
                : [...prevList, topic]
        );
    }


    useEffect(() => {
        if (topicList.length === 0) {
            setData(ogData);
        } else {
            const filteredData = ogData.filter(data =>
                topicList.every(selectedTopic => data.topic.includes(selectedTopic))
            );
            setData(filteredData);
        }
    }, [topicList, ogData]);

    return (
        <div id={styles.ProjectContainerFull}>
            <h1 className={styles.MainTitle}>Projects</h1>
            {loading ? (
                <div className={styles.LoaderContainer}>
                    <ClipLoader color="#f11946" loading={loading} size={50} />
                </div>
            ) : (
                <>
                    <div
                        className={`${styles.SortContainer} ${
                            theme === 'LightMode' ? styles.LightMode : ''
                        }`}
                    >
                        <select
                            className={`${styles.SortDropdown} ${
                                theme === 'LightMode' ? styles.LightMode : ''
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
                            isSelected={topicList.includes('ML')}
                            toggleTopic={toggleTopic}
                        />
                        <TopicSelector
                            topic="Web Development"
                            theme={theme}
                            isSelected={topicList.includes('Web Development')}
                            toggleTopic={toggleTopic}
                        />
                    </div>
                    <div id={styles.ProjectContainerMain}>
                        {projectData.length > 0 ? (
                            projectData.map((data, index) => (
                                <ProjectContainer
                                    imgSrc={theme === 'LightMode' ? data.ImgLight : data.Img}
                                    title={data.Title}
                                    desc={data.desc}
                                    tech={data.tech}
                                    key={data.id || index}
                                    id={data.id}
                                    logoMapper={logoMapper}
                                    theme={theme}
                                />
                            ))
                        ) : (
                            <p>No projects match the selected topics.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export { TechStack };
