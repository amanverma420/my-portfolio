import React from 'react'
import con from "../../assets/contact.png"
import "./COntact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".leftcontact img",
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form",
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={con} alt="" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/mwpbqakn" method='post'>
          <input name='Username' type="text" placeholder='Enter name' />
          <input name='Email' type="email" placeholder='Enter email' />
          <textarea name="messege" id="textarea" placeholder='messege me'></textarea>
          <input type="submit" id='btn' />
        </form>
      </div>
    </div>
  )
} 

export default Contact
