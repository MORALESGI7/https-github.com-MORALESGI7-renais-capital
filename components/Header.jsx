
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import ScheduleModal from '@/components/ScheduleModal'; // importa el mismo modal

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // controla el modal

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { label: 'About', href: '#about' },
//     { label: 'Services', href: '#services' },
//     { label: 'Process', href: '#process' },
//     { label: 'Testimonials', href: '#testimonials' },
//     { label: 'Contact', href: '#contact' }
//   ];

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-md shadow-lg'
//             : 'bg-[rgba(11,30,51,0.6)] backdrop-blur-sm border-b border-white/10'
//         }`}
//       >
//         <nav className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             {/* LOGO */}
//             <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold flex items-baseline">
//               <span className={`font-serif ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
//                 Renais
//               </span>
//               <span className="font-serif ml-1 text-[#C6A14B]">
//                 Capital
//               </span>
//             </motion.div>

//             {/* NAVIGATION DESKTOP */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   whileHover={{ y: -2 }}
//                   className={`font-medium transition-colors ${
//                     isScrolled
//                       ? 'text-slate-700 hover:text-slate-900'
//                       : 'text-white/80 hover:text-white'
//                   }`}
//                 >
//                   {item.label}
//                 </motion.a>
//               ))}

//               {/* BOTÓN QUE ABRE EL MODAL */}
//               <Button
//                 onClick={() => setIsModalOpen(true)}
//                 className="font-medium rounded-none px-6 py-3 text-sm transition-all
//                            bg-[#C6A14B] text-slate-900 hover:bg-[#b6923c] hover:text-white border-none"
//               >
//                 Schedule Consultation
//               </Button>
//             </div>

//             {/* ICONO MENÚ MÓVIL */}
//             <button
//               className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* MENÚ MÓVIL */}
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden mt-4 pb-4"
//             >
//               {navItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className={`block py-2 text-base font-medium ${
//                     isScrolled
//                       ? 'text-slate-700 hover:text-slate-900'
//                       : 'text-white/80 hover:text-white'
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}

//               <Button
//                 onClick={() => {
//                   setIsModalOpen(true);
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className="w-full mt-4 font-medium rounded-none px-5 py-3 text-sm bg-[#C6A14B] text-slate-900 hover:bg-[#b6923c] hover:text-white"
//               >
//                 Schedule Consultation
//               </Button>
//             </motion.div>
//           )}
//         </nav>
//       </motion.header>

//       {/* MODAL — igual que el del Hero */}
//       <ScheduleModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScheduleModal from '@/components/ScheduleModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  // 👉 Aquí defines el enlace de WeTransfer
  const weTransferURL = 'https://wetransfer.com';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-[rgba(11,30,51,0.6)] backdrop-blur-sm border-b border-white/10'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold flex items-baseline cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className={`font-serif ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Renais
              </span>
              <span className="font-serif ml-1 text-[#C6A14B]">Capital</span>
            </motion.div>

            {/* NAVIGATION DESKTOP */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:text-slate-900'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* 🔹 NUEVO BOTÓN WeTransfer */}
              <Button
                onClick={() => window.open(weTransferURL, '_blank', 'noopener,noreferrer')}
                className={`font-medium rounded-none px-6 py-3 text-sm transition-all
                  ${isScrolled
                    ? 'border border-slate-300 text-slate-900 hover:bg-slate-100'
                    : 'border border-white text-white hover:bg-white/10'}`}
              >
                Upload Files
              </Button>

              {/* BOTÓN DE CONSULTA */}
              <Button
                onClick={() => setIsModalOpen(true)}
                className="font-medium rounded-none px-6 py-3 text-sm transition-all
                           bg-[#C6A14B] text-slate-900 hover:bg-[#b6923c] hover:text-white border-none"
              >
                Schedule Consultation
              </Button>
            </div>

            {/* ICONO MENÚ MÓVIL */}
            <button
              className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MENÚ MÓVIL */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`block py-2 text-base font-medium ${
                    isScrolled
                      ? 'text-slate-700 hover:text-slate-900'
                      : 'text-white/80 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* 🔹 NUEVO BOTÓN MÓVIL WeTransfer */}
              <Button
                onClick={() => {
                  window.open(weTransferURL, '_blank', 'noopener,noreferrer');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full mt-3 font-medium rounded-none px-5 py-3 text-sm transition-all
                  ${isScrolled
                    ? 'border border-slate-300 text-slate-900 hover:bg-slate-100'
                    : 'border border-white text-white hover:bg-white/10'}`}
              >
                Upload Files
              </Button>

              {/* Schedule Consultation (móvil) */}
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-3 font-medium rounded-none px-5 py-3 text-sm bg-[#C6A14B] text-slate-900 hover:bg-[#b6923c] hover:text-white"
              >
                Schedule Consultation
              </Button>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* MODAL — igual que el del Hero */}
      <ScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;