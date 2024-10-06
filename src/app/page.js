'use client';
import Header from "@/components/Header";
import NameCompoenent from "@/components/Name";
import Aboutme from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import { useRef, useState,useEffect } from "react";
export default function Home() {
  const [client, isClient] = useState(false);
  useEffect(() => {
    isClient(true);
  }, []);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const homeScroll = () =>{
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const skillScroll = () =>{
    skillRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const projectScroll = () =>{
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  if (!client){
    return null;
  }
  return (
<>
<Header homeScroll={homeScroll} skillScroll={skillScroll} projectScroll={projectScroll} />
<NameCompoenent />
<div ref={aboutRef}>
<Aboutme />
</div>
<div ref={skillRef}>
<Skills />
</div>
<div ref={projectRef}>
<Project />
</div>

</>

  );
}
