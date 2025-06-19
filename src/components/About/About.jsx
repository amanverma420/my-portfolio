import React from 'react'
import "./About.css"
import Card from "../../components/Card/Card"
import mern from "../../assets/mern.png"
import dsa from "../../assets/dsa.webp"
import cyber from "../../assets/cyber.webp"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".circle",
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
      stagger: 0.2,
    });
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".line",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      stagger: 0.2,
    });
    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      stagger: 0.2,
    });

    gsap.from(".aboutdetails ul", {
      y:100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      stagger: 0.2,
    });

    gsap.from(".rightabout", {
      y:100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".rightabout",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      stagger: 0.2,
    });
  }, []);

  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal info </h1>
            <ul>
              <li><span>NAME </span> : AMAN VERMA</li>
              <li><span>AGE  </span> : 21 YEARS</li>
              <li><span>GENDER </span> : MALE</li>
              <li><span>LANGUAGE KNOWN </span> : HINDI , ENGLISH</li>
            </ul>
          </div>
          <div className="education">
            <h1>Education </h1>
            <ul>
              <li><span>DEGREE </span> : B-TECH</li>
              <li><span>BRANCH  </span> : COMPUTER SCIENCE</li>
              <li><span>COLLEGE  </span> : COEP TECH UNIVERSITY</li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills </h1>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>DSA</li>
              <li>CYBERSECURITY ANALYST</li>
              <li><span>LANGUAGE KNOWN </span> : HINDI , ENGLISH</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="DSA" image={dsa} />
        <Card title="CYBERSECURITY ANALYST" image={cyber} />
      </div>
    </div>
  )
}

export default Home
 