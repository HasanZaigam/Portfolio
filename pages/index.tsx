import MobileNavbar from '@/Components/MobileNavbar';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react'
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';
import Project from '@/Components/Project';
import Footer from '@/Components/Footer';
import Icons from '@/Components/Icons';

const HomePage= () => {
  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <section id='index'>
       <div className="overflow-x-hidden">
       <div>
        {/*Navbar Section */}
        <MobileNavbar nav={nav} closeNav ={closeNav}  />
        <Navbar openNav={openNav} />
        {/* Hero Section*/}
        <Hero />
        <Icons/>
        {/*About Section*/}
        <div className=' relative z-[30]' >
          <About />
          
        {/* Section*/} 
        <Services />
        {/*Skills section */}
        <Skills/>
        <Project />
       
        <Footer />
        </div>
       </div>
    </div>
    </section>
  );
  }
export default HomePage;