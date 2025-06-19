import React, { useRef } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Navbar() {
  const menu = useRef()
  const mobile = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from("nav h1", {
      y: -100,
      duration: 1,
      opacity: 0
    })

    tl.from("nav ul li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 1
    })
  }, [])

  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className='desktopmenu'>
        <li><Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>About</Link></li>
        
        <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={600}>Projects</Link></li>
        <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={1200}>Contacts</Link></li>
      </ul>

      <div className="hamberger" ref={menu} onClick={() => {
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      <ul className='mobilemenu' ref={mobile}>
        <li><Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>About</Link></li>
        <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={600}>Projects</Link></li>
        <li><Link to="about" activeClass="active" spy={true} smooth={true} duration={500}offset={1000}>Contacts</Link>
</li>

      </ul>
    </nav>
  )
}

export default Navbar
