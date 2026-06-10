'use client'

import React from 'react';
import { useState, useEffect } from 'react';

// Scroll Animation Hook
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-rotate'
    );
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};









export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useScrollAnimation();

  useEffect(() => {
    // Manage body overflow when menu is open
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = () => {
      setMobileMenuOpen(false);
    };

    const links = document.querySelectorAll('.lists a');
    links.forEach(link => {
      link.addEventListener('click', handleClickOutside);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClickOutside);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-blue-950">
      {/* ==================== HEADER ==================== */}
      <header className="head fixed top-0 left-0 right-0 z-50" id="head">
        <div className="menu-toggle">
          <img 
            className="logo"
            src="khal.png"
            alt="Logo"
            width={100}
            height={50}
          />
          
          <ul className={`lists ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#home" className="text-white hover:bg-blue-500 rounded-lg transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white hover:bg-blue-500 rounded-lg transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:bg-blue-500 rounded-lg transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contacts" className="text-white hover:bg-blue-500 rounded-2xl transition-colors">Contacts</a>
            </li>
          </ul>
        </div>

        <button 
          className={`toggle ${mobileMenuOpen ? 'open' : ''}`}
          id="toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
   
   
{/* HOME */}
    <section id="home" className="relative pt-40 bg-blue-950 w-100% h-180 flex flex-row gap-30 scroll-animate mt-16">
    <div className="-pt-10">
<h1 className="top-text text-white text-5xl font-bold pt-30 pl-10 leading-16 transition delay-150 duration-300 ease animate-wiggle
  ">ALKHALILY, EXPERIENCED <br></br> AND COMPETENT
    FRONTEND <br></br>SOFTWARE DEVELOPER
</h1><br></br>
<div className="tops gap-10 flex flex-row ml-30">
<a href="#contacts" className="top-button text-white text-2xl font-bold font-arial  border border-black-300 p-5 rounded-4xl transition delay-200 duration-300 ease-in-out bg-blue-700   hover:rounded-4xl p-1 focus:outline-2  hover:shadow-2xl hover:scale-105 hover:from-blue-600 hover:to-cyan-600">contact me</a> 
<a href="#projects" className="top-button text-white text-2xl font-bold font-arial border border-black-300 p-5 rounded-4xl transition delay-200 duration-300 ease-in-out  hover:bg-blue-700 rounded-4xl p-1 focus:outline-2  hover:shadow-2xl hover:scale-105 hover:from-blue-600 hover:to-cyan-600">view project</a>
</div>
</div>
<img src="

kha.jpg"

className="loading-lazy image  right-40 w-110 h-110 rounded-full 
border-4 border-white transition delay-150 duration-300 ease
 hover:scale-110"/>

    </section>
    {/* ABOUT */}
    <section id="about" className=" bg-gradient-to-b from-blue-900 to-blue-950 py-15 px-8 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-16 text-center">ABOUT ME</h1>
        
        <div className="about  flex flex-row-2 lg:flex-row-2 gap-25 mb-16">
          <div className="flex items-center justify-center scroll-animate-left">
            <div className="relative w-100 h-100 animate-wiggle">
              <img 
                src="about.png"
                alt="Profile"
                className="w-full h-full rounded-3xl shadow-2xl object-cover border-4 border-blue-400 transition duration-300 hover:scale-105"
              />
              <div className=" -bottom-2 -right-2 w-20 h-20 bg-blue-500 rounded-full opacity-50 blur-lg"></div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center scroll-animate-right">
 <p className="text-xl font-arial text-gray-200 leading-relaxed mb-6 ">
  I am a Frontend Developer focused on engineering high-performance, scalable web applications using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS and API integrations. I build clean, responsive interfaces with a strong emphasis on usability, performance optimization, and maintainable architecture.
   </p>
 
            <p className="text-xl font-arial text-gray-200 leading-relaxed mb-6 ">
              I create more than just interfaces—I build clean, data-driven user experiences optimized for performance, usability, and real-world results.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6 text-xl font-arial  ">
              From landing pages to dynamic web applications, my work is structured to load quickly, adapt seamlessly across all devices, and deliver smooth interaction.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed text-xl font-arial ">
              I’ve developed multiple projects, including portfolios and business websites, where I’ve handled real challenges in responsiveness, layout precision, styling systems, and API integration. My approach is centered on <span className="text-blue-300 font-semibold">clean architecture</span>, reusable components, and maintainable code, from planning through to production-ready delivery.
            </p>
          </div>
        </div>
            </div>
            
            
             
             
       
        




<h1 className="h-55 p-5 text-3xl text-center text-white rounded-xl">Available for frontend roles and freelance projects—let’s build something that performs.</h1>


    </section>
{/* PROJECTS */}
 <section id="projects"  
  className="bg-gradient-to-b from-blue-900 to-blue-950 py-20 px-8 h-290 w-100% scroll-animate">

  <p className="text-5xl font-bold text-white mb-16 text-center">MY PROJECTS</p>


<div className="projects flex flex-row gap-29 ">
  {/* first project */}
  <div className="project relative h-210 w-100 border-4 border-blue-500 rounded-4xl transition delay-150 duration-300 
    bg-blue-700  shadow-sm shadow-gray-100 hover:-translate-y-10 scroll-animate-left">
  <p className="text-xl text-gray-100 text-center font-arial text-center">Resposive landing page with login form - vanilla javascript  </p>

 <a href="https://first-project-eight-weld-36.vercel.app/" target="_blank" rel="noopener noreferrer">
   <img src="htmlcss.png"
     className="project-image
   loading-lazy
    
    rounded-4xl "/>
 </a>
 <p className=" text-xl text-gray-100 font-arial text-start font-bold">
  Tech: <span className="text-lg text-gray-100 font-arial text-start">HTML5, CSS3, JavaScript (ES6)</span></p>
 <p className="text-xl text-gray-100 font-arial text-start font-bold">Key Features</p>
 <ul>
  
  <li className="text-xl text-gray-100 font-arial text-start">- Dynamic DOM manipulation for interactive UI</li>


  <li className="text-xl text-gray-100 font-arial text-start">- Smooth scrolling and transition effects</li>
  <li className="text-xl text-gray-100 font-arial text-start">- Responsive design using Flexbox and CSS Grid</li>
  <li className="text-xl text-gray-100 font-arial text-start">- Responsive design using Flexbox and CSS Grid</li>
 </ul>

<p className=" text-xl text-gray-100 font-arial text-start font-bold">Intent:Built to demonstrate strong understanding of frontend fundamentals and ability to create scalable interfaces without framework dependency.</p>
<a href="https://first-project-eight-weld-36.vercel.app/" target="_blank"><span className="text-blue-950 font-arial text-2xl animate-change hover:text-green-400">view project....</span></a><br></br>
<a href="https://github.com/owolabiibrohim2023-cell/first-project/" target="_blank"><span className="text-blue-950 font-arial text-2xl animate-change hover:text-green-400">view repository....</span></a>
  </div>
  {/* second project */}

<div className="project relative h-210 w-100 border-4 border-blue-500 rounded-4xl transition delay-150 duration-300 
    bg-blue-700  shadow-sm shadow-gray-100 hover:-translate-y-10 scroll-animate">
 <p className="text-xl text-gray-100 text-center font-arial text-center">inventory management system -  react + vite  </p>

 <a href="https://seconds-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
   <img src="react.png"
     className="project-image
     loading-lazy
   h-75
    pl-5
    rounded-4xl "/>
 </a>
 <p className=" text-xl text-gray-100 font-arial text-start font-bold">
  Tech: <span className="text-lg text-gray-100 font-arial text-start">React, JavaScript (ES6), Tailwind CSS,CSS3,HTML5</span></p>
 <p className="text-xl text-gray-100 font-arial text-start font-bold">Key Features</p>
 <ul>
  
  <li className="text-xl text-gray-100 font-arial text-start">- State management using hooks (useState, useEffect)</li>


  <li className="text-xl text-gray-100 font-arial text-start">-Component-based architecture</li>
  <li className="text-xl text-gray-100 font-arial text-start">- Reusable UI components</li>
  <li className="text-xl text-gray-100 font-arial text-start">- Separation between logic and presentation</li>
 </ul>

<p className=" text-xl text-gray-100 font-arial text-start font-bold">Intent:Improved scalability and maintainability through modular component design</p>
<a href="https://seconds-nine.vercel.app/" target="_blank" rel="noopener noreferrer"><span className="text-blue-950 font-arial text-2xl animate-change hover:text-green-400">view project....</span></a><br></br>
<a href="second repository https://github.com/owolabiibrohim2023-cell/second-project/" target="_blank" rel="noopener noreferrer"><span className="text-blue-950 font-arial text-2xl animate-change hover:text-green-400">view repository....</span></a>
  </div>
  {/* Third project */}
  <div className="project relative h-210 w-100 border-4 border-blue-500 rounded-4xl transition delay-150 duration-300 
    bg-blue-700  shadow-sm shadow-gray-100 hover:-translate-y-10 scroll-animate-right">
  <p className="text-xl text-gray-100 text-center font-arial ">Weather Dashboard – API Integration Project</p>
 <a href="https://third-project-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
   <img src="API.png"
     className="project-image
  loading-lazy
    
    rounded-4xl "/>
 </a>
 <p className=" text-xl text-gray-100 font-arial text-start font-bold">
  Tech: <span className="text-lg text-gray-100 font-arial text-start">JavaScript (ES6),REACT, REST API, HTML5, CSS3,</span></p>
 <p className="text-xl text-gray-100 font-arial text-start font-bold">Key Features</p>
 <ul>
  
  <li className="text-xl text-gray-100 font-arial text-start">-API integration using Fetch/Axios</li>


  <li className="text-xl text-gray-100 font-arial text-start">- Asynchronous data handling</li>
  <li className="text-xl text-gray-100 font-arial text-start">- Dynamic UI updates based on API response</li>
  <li className="text-xl text-gray-100 font-arial text-start">- User feedback (loading, errors, empty states)</li>
 </ul>

<p className=" text-xl text-gray-100 font-arial text-start font-bold">Intent:Demonstrates ability to work with real-world data and build interactive, data-driven interfaces.</p>
<a href="https://third-project-iota.vercel.app/" target="_blank" rel="noopener noreferrer"><span className="text-blue-950 font-arial text-2xl animate-change hover:text-green-400">view project....</span></a><br></br>
<a href="https://github.com/owolabiibrohim2023-cell/third-project/tree/main" target="_blank" rel="noopener noreferrer"><span className="text-blue-950 font-arial text-2xl animate-change hover:text-green-400">view repository....</span></a>
  </div>
 
</div>

 </section>
 {/* CONTACTS */}
 <section id="contacts" className="relative bg-gradient-to-b from-blue-900 via-blue-950 to-blue-950 py-32 px-8 w-100%  scroll-animate">
 {/* Attractive Background Elements */}
 <div className="absolute inset-0 opacity-10">
   <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
   <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
 </div>
 
 <div className="relative z-10 max-w-6xl mx-auto">
   <h1 className="text-6xl font-bold text-white mb-6 text-center animate-bounce">CONTACT ME</h1>
   
   <div className="text-center mb-12">
     <p className="text-2xl text-gray-100 font-bold font-arial mb-3">Get in touch</p>
     <p className="text-lg text-gray-300 font-arial">Have a project in mind or want to collaborate? Let's connect and create something amazing together!</p>
   </div>
   
   {/* Contact Icons */}
   <div className="flex flex-wrap justify-center gap-10 mt-16 mb-12">
     {/* WhatsApp */}
     <a href="https://wa.me/2349059524250" target="_blank" rel="noopener noreferrer" className="group scroll-animate-scale scroll-animate-delay-1">
       <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-110">
         <img src="whatsapp.jpg" alt="WhatsApp" className="w-full h-full rounded-full object-cover p-1 hover:p-0 transition duration-300"/>
         <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-green-600 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">WhatsApp</div>
       </div>
     </a>
     
     {/* Email */}
     <a href="mailto:owolabiibrohim2023@gmail.com" className="group scroll-animate-scale scroll-animate-delay-2">
       <div className="relative w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-110">
         <img src="email.png" alt="Email" className="w-full h-full rounded-full object-cover p-1 hover:p-0 transition duration-300"/>
         <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-red-600 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">Email</div>
       </div>
     </a>
     
     {/* Facebook */}
     <a href="https://www.facebook.com/profile.php?id=61557764174428" target="_blank" rel="noopener noreferrer" className="group scroll-animate-scale scroll-animate-delay-3">
       <div className="relative w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-110">
         <img src="facebook.png" alt="Facebook" className="w-full h-full rounded-full object-cover p-1 hover:p-0 transition duration-300"/>
         <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-blue-600 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">Facebook</div>
       </div>
     </a>
     
     {/* GitHub */}
     <a href="https://github.com/owolabiibrohim2023-cell/" target="_blank" rel="noopener noreferrer" className="group scroll-animate-scale scroll-animate-delay-4">
       <div className="relative w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-110">
         <img src="github.jpg" alt="GitHub" className="w-full h-full rounded-full object-cover p-1 hover:p-0 transition duration-300"/>
         <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">GitHub</div>
       </div>
     </a>
     
     {/* LinkedIn */}
     <a href="https://www.linkedin.com/in/owolabi-ibrohim-396849413?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="group scroll-animate-scale scroll-animate-delay-5">
       <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-110">
         <img src="linkedin.png" alt="LinkedIn" className="w-full h-full rounded-full object-cover p-1 hover:p-0 transition duration-300"/>
         <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-blue-600 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">LinkedIn</div>
       </div>
     </a>
   </div>
   
   {/* Extra CTA */}
   <div className="text-center mt-20 scroll-animate-scale">
     <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-full shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 hover:from-blue-600 hover:to-cyan-600">
       Start a Conversation
     </button>
   </div>
 </div>
 </section>

 {/* FOOTER */}
 <footer id="footer" className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 border-t-2 border-blue-500 py-20 px-8 w-100% scroll-animate">
   <div className="max-w-6xl mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
       {/* Brand */}
       <div>
         <h3 className="text-2xl font-bold text-white mb-4 font-arial">ALKHALILY</h3>
         <p className="text-gray-300 text-sm font-arial leading-relaxed">
           Frontend Developer crafting high-performance web experiences with clean code and modern technologies.
         </p>
       </div>
       
       {/* Quick Links */}
       <div>
         <h4 className="text-lg font-bold text-white mb-6 font-arial">Quick Links</h4>
         <ul className="space-y-3">
           <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 font-arial">Home</a></li>
           <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 font-arial">About</a></li>
           <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 font-arial">Projects</a></li>
           <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 font-arial">Contact</a></li>
         </ul>
       </div>
       
       {/* Services */}
       <div>
         <h4 className="text-lg font-bold text-white mb-6 font-arial">Services</h4>
         <ul className="space-y-3">
           <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 font-arial">Web Development</a></li>
           <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 font-arial">UI/UX Design</a></li>
           <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 font-arial">API Integration</a></li>
           <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 font-arial">Consulting</a></li>
         </ul>
       </div>
       
       {/* Contact Info */}
       <div>
         <h4 className="text-lg font-bold text-white mb-6 font-arial">Get in Touch</h4>
         <div className="space-y-3">
           <p className="text-gray-300 text-sm font-arial">
             <span className="font-bold">Email:</span><br/>
             <a href="mailto:owolabiibrohim2023@email.com" target="_blank" className="hover:text-blue-400 transition duration-300">owolabiibrohim2023@gmail.com</a>
           </p>
           <p className="text-gray-300 text-sm font-arial">
             <span className="font-bold">Phone:</span><br/>
             <a href="tel:+2349059524250" target="_blank" className="hover:text-blue-400 transition duration-300">+234 9059524250</a>
           </p>
         </div>
       </div>
     </div>
     
     {/* Divider */}
     <div className="border-t border-blue-700 py-8 mb-8"></div>
     
     {/* Bottom Section */}
     <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
       <div className="text-gray-400 text-sm font-arial text-center md:text-left">
         <p>&copy; 2026 ALKHALILY. All rights reserved. | Designed & Built with <span className="text-red-500">❤️</span> by AlKhalily Tech</p>
       </div>
       
       {/* Social Links */}
       <div className="flex gap-6">
         <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300" title="Twitter">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.5-7 9.5"/></svg>
         </a>
         <a href="https://linkedin.com/in/owolabiibrohim/" target="_blank" className="text-gray-400 hover:text-blue-400 transition duration-300" title="GitHub">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
         </a>
         <a href="" className="text-gray-400 hover:text-blue-400 transition duration-300" title="LinkedIn">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.829 0-9.744h3.554v1.378c-.009.015-.021.029-.033.042h.033v-.042c.431-.665 1.199-1.61 2.920-1.61 2.134 0 3.734 1.392 3.734 4.385v5.591zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.715 0-.955.77-1.715 1.959-1.715 1.188 0 1.915.76 1.932 1.715 0 .954-.744 1.715-1.976 1.715zm1.946 11.597H3.392V9.708h3.891v10.744zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
         </a>
         <a href="https://www.facebook.com/profile.php?id=61557764174428"  target="_blank" className="text-gray-400 hover:text-blue-400 transition duration-300" title="Facebook">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
         </a>
       </div>
     </div>
   </div>
 </footer>

  </div>
  );
}
