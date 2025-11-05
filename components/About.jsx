
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from '@/hooks/useInView';
// import { Award, Globe, TrendingUp, Users } from 'lucide-react';

// const About = () => {
//   const [ref, isInView] = useInView({ threshold: 0.2 });

//   const stats = [
//     { icon: Globe, value: '50+', label: 'Jurisdictions Covered' },
//     { icon: Users, value: '500+', label: 'Corporate & Private Clients' },
//     { icon: TrendingUp, value: '$2B+', label: '$2B+ Structured Transactions' },
//     { icon: Award, value: '20+', label: 'Years of Combined Advisory Expertise' }
//   ];

//   return (
//     <section id="about" className="py-24 bg-white" ref={ref}>
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
//               About Renais Capital
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//               Where Expertise Meets Excellence
//             </h2>
//             <p className="text-lg text-slate-600 mb-6">
//              Renais Capital is a premier international financing boutique delivering cross-border financial structuring and strategic banking solutions for high-net-worth individuals and institutional clients.
//             </p>
//             <p className="text-lg text-slate-600 mb-8">
//               Our team of senior advisors combines decades of expertise in private banking, corporate finance, and real estate structuring — delivering institutional-grade results with the discretion and precision of a family office.
//             </p>
            
//             <div className="grid grid-cols-2 gap-6">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: index * 0.1, duration: 0.6 }}
//                   className="text-center p-4 bg-slate-50 rounded-lg"
//                 >
//                   <stat.icon className="w-8 h-8 mx-auto mb-2 gold-accent" />
//                   <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
//                   <div className="text-sm text-slate-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img 
//                 className="w-full h-[600px] object-cover" 
//                 alt="Professional financial team in modern office"
//                src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
//             >
//               <div className="text-4xl font-bold gold-accent mb-2">98%</div>
//               <div className="text-sm text-slate-600">Client Satisfaction Rate</div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Award, Globe, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const stats = [
    { icon: Globe, value: '50+', label: 'Jurisdictions Covered' },
    { icon: Users, value: '500+', label: 'Corporate & Private Clients' },
    { icon: TrendingUp, value: '$2B+', label: 'Structured Transactions' },
    { icon: Award, value: '20+', label: 'Years of Combined Advisory Expertise' }
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
              About Renais Capital
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Where Expertise Meets Excellence
            </h2>

            <p className="text-lg text-slate-600 mb-6">
              Renais Capital is a premier international financing boutique delivering cross-border
              financial structuring and strategic banking solutions for high-net-worth individuals
              and institutional clients.
            </p>

            <p className="text-lg text-slate-600 mb-8">
              Our team of senior advisors combines decades of expertise in private banking,
              corporate finance, and real estate structuring — delivering institutional-grade
              results with the discretion and precision of a family office.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-4 bg-slate-50 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 gold-accent" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE MEDIA (VIDEO BLOCK) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="auto"
                className="w-full h-[600px] object-cover"
              >
                <source src="/NYCNYC.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* FLOATING STAT CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-4xl font-bold gold-accent mb-2">98%</div>
              <div className="text-sm text-slate-600">Client Satisfaction Rate</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;