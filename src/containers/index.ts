'use client'

import React, { useEffect } from 'react';
import About from './About';
import Contact from './Contact';
import Email from './Email';
import Experience from './Experience';
import FeaturedProjects from './FeaturedProjects';
import Hero from './Hero';
import Footer from './layout/Footer';
import Layout from './layout/Layout';
import Navbar from './layout/Navbar';
import Projects from './Projects';
import Skills from './Skills';
import Social from './Social';
import SocialLinks from './Social/SocialLinks';

const GoogleTag = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-2PW52VZB98";
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2PW52VZB98');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null; // This component does not render anything
};

export {
  About,
  Contact,
  Email,
  Experience,
  FeaturedProjects,
  Footer,
  Hero,
  Layout,
  Navbar,
  Projects,
  Skills,
  Social,
  SocialLinks,
  GoogleTag, // Export the GoogleTag component
};
