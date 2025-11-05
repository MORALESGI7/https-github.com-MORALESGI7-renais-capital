
// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import ScheduleModal from '@/components/ScheduleModal'; // ajusta la ruta si tu modal vive en otra carpeta

// // const Hero = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   return (
// //     <section className="relative h-screen flex items-center justify-center overflow-hidden text-center">
// //       {/* Fondo de video */}
// //       <div className="absolute inset-0 z-0">
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           preload="auto"
// //           className="w-full h-full object-cover"
// //           poster="/blokyng.jpg"
// //         >
// //           <source src="/videos/NYCNYC.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>

// //         {/* Overlay oscuro para contraste */}
// //         <div className="absolute inset-0 bg-[#0B1E33] opacity-60"></div>
// //       </div>

// //       {/* Contenido */}
// //       <div className="container mx-auto px-6 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: 'easeOut' }}
// //           className="max-w-3xl mx-auto"
// //         >
// //           {/* TAGLINE */}
// //           <motion.span
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.3, duration: 0.8 }}
// //             className="inline-block text-sm tracking-widest uppercase text-slate-300 mb-4"
// //           >
// //             International Financing Boutique
// //           </motion.span>

// //           {/* HEADLINE */}
// //           <motion.h1
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.5, duration: 0.8 }}
// //             className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
// //           >
// //             Elevate Your <br />
// //             <span className="text-[#C6A14B]">Financial Future</span>
// //           </motion.h1>

// //           {/* SUBTEXT */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.7, duration: 0.8 }}
// //             className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
// //           >
// //             Exclusive international financial structuring and strategic banking
// //             advisory for discerning clients who demand excellence.
// //           </motion.p>

// //           {/* BOTÓN ÚNICO CENTRADO */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.9, duration: 0.8 }}
// //             className="flex justify-center mt-10"
// //           >
// //             <button
// //               onClick={() => setIsModalOpen(true)}
// //               className="bg-[#C6A14B] text-slate-900 hover:bg-[#b3903e] transition px-8 py-3 font-medium text-base rounded-none"
// //             >
// //               Schedule Consultation
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* Indicador de scroll */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 1.2, duration: 0.8 }}
// //         className="absolute bottom-8 left-1/2 -translate-x-1/2"
// //       >
// //         <motion.div
// //           animate={{ y: [0, 10, 0] }}
// //           transition={{ repeat: Infinity, duration: 2 }}
// //           className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
// //         >
// //           <div className="w-1 h-3 bg-white/50 rounded-full"></div>
// //         </motion.div>
// //       </motion.div>

// //       {/* MODAL */}
// //       <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
// //     </section>
// //   );
// // };

// // export default Hero;


// // components/ScheduleModal.jsx
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ScheduleModal from "@/components/ScheduleModal";

// const Hero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // (opcional) abrir en nueva pestaña directo
//   const openCalendlyNewTab = () => {
//     window.open(
//       "https://calendly.com/gimorales-renaiscapital/30min",
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden text-center">
//       {/* Fondo de video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           className="w-full h-full object-cover"
//           poster="/blokyng.jpg"
//         >
//           <source src="/videos/NYCNYC.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-[#0B1E33] opacity-60"></div>
//       </div>

//       {/* Contenido */}
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-3xl mx-auto"
//         >
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="inline-block text-sm tracking-widest uppercase text-slate-300 mb-4"
//           >
//             International Financing Boutique
//           </motion.span>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
//           >
//             Elevate Your <br />
//             <span className="text-[#C6A14B]">Financial Future</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//             className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
//           >
//             Exclusive international financial structuring and strategic banking
//             advisory for discerning clients who demand excellence.
//           </motion.p>

//           {/* Botones */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 0.8 }}
//             className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
//           >
//             {/* Abre Modal (embed) */}
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-[#C6A14B] text-slate-900 hover:bg-[#b3903e] transition px-8 py-3 font-medium text-base rounded-none"
//             >
//               Schedule Consultation
//             </button>

//             {/* Respaldo en nueva pestaña */}
//             <button
//               onClick={openCalendlyNewTab}
//               className="border border-white/80 text-white hover:bg-white/10 transition px-8 py-3 font-medium text-base rounded-none"
//             >
//               Open in New Tab
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Indicador de scroll */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
//         >
//           <div className="w-1 h-3 bg-white/50 rounded-full"></div>
//         </motion.div>
//       </motion.div>

//       {/* Modal Calendly */}
//       <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScheduleModal from '@/components/ScheduleModal'; // ajusta la ruta si tu modal vive en otra carpeta

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-center">
      {/* Fondo de video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/blokyng.jpg"
        >
          <source src="/videos/NYCNYC.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-[#0B1E33] opacity-60"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          {/* TAGLINE */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block text-sm tracking-widest uppercase text-slate-300 mb-4"
          >
            International Financing Boutique
          </motion.span>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Elevate Your <br />
            <span className="text-[#C6A14B]">Financial Future</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Exclusive international financial structuring and strategic banking
            advisory for discerning clients who demand excellence.
          </motion.p>

          {/* BOTÓN ÚNICO CENTRADO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C6A14B] text-slate-900 hover:bg-[#b3903e] transition px-8 py-3 font-medium text-base rounded-none"
            >
              Schedule Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* MODAL */}
      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;