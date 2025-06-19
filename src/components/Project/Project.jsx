import React from 'react'
import "./Project.css"
import Card from "../Card/Card"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png" 
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Project() {
  useGSAP(() => {
    gsap.from("#para", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#para",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      stagger: 0.2,
    });
    gsap.from(".slider", {
      x:100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="project">
        <h1 id='para'>2+ YEARS OF EXPERIENCE IN PROJECTS</h1>
        <div className="slider">
            <Card title="VIRTUAL ASSISTANT" image={va} />
            <Card title="AI POWERED FITNESS WEBSITE" image={fw}  />
            {/* <Card />
            <Card />
            <Card /> */}

        </div>
    </div>
  )
}

export default Project