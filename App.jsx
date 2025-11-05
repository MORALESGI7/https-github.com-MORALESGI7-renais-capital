
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Renais Capital - International Financing Boutique</title>
        <meta name="description" content="Renais Capital is a premier international financing boutique offering exclusive financial solutions with a modern luxury approach." />
      </Helmet>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
