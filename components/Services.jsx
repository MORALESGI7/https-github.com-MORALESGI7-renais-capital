
// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { useInView } from '@/hooks/useInView';
// // // import { Building2, Briefcase, PiggyBank, LineChart, Shield, Wallet } from 'lucide-react';

// // // const Services = () => {
// // //   const [ref, isInView] = useInView({ threshold: 0.1 });

// // //   const services = [
// // //     {
// // //       icon: Building2,
// // //       title: 'Corporate Finance',
// // //       description: (
// // //         <>
// // //           <p>Strategic Financial Structuring & Cross-Border Advisory.</p>
// // //           <p className="mt-1">We provide tailored advisory services in corporate finance, including debt restructuring, financial strategy, and cross-border credit negotiations with international banking partners.</p>
// // //         </>
// // //       )
// // //     },

// // //     {
// // //   icon: Briefcase,
// // //   title: 'Real Estate Structuring',
// // //   description: (
// // //     <>
// // //       Advisory for International Real Estate Financing & Investments.<br />
// // //       We advise developers and investors on the optimal financial structures to access institutional real-estate funding through international lenders, private offices, or banking networks.
// // //     </>
// // //   )
// // // },
// // // {
// // //   icon: PiggyBank,
// // //   title: 'Alternative Financing',
// // //   description: (
// // //     <>
// // //       Multi-Jurisdictional Wealth and Corporate Defense Planning.<br />
// // //       We design and coordinate international corporate structures, asset-holding entities, and legal frameworks to safeguard business and personal assets across jurisdictions.
// // //     </>
// // //   )
// // // },
// // // {
// // //   icon: LineChart,
// // //   title: 'Asset Protection & Corporate Structuring',
// // //   description: (
// // //     <>
// // //       Multi-Jurisdictional Wealth and Corporate Defense Planning.<br />
// // //       We design and coordinate international corporate structures, asset-holding entities, and legal frameworks to safeguard business and personal assets across jurisdictions.
// // //     </>
// // //   )
// // // },
// // // {
// // //   icon: Shield,
// // //   title: 'Private Banking Coordination',
// // //   description: (
// // //     <>
// // //       Access to Global Private Banking Networks.<br />
// // //       Through our network of trusted international partners, we coordinate introductions to private banking and wealth management institutions for qualified clients seeking global diversification.
// // //     </>
// // //   )
// // // },
// // // {
// // //   icon: Wallet,
// // //   title: 'Investment Strategy Advisory',
// // //   description: (
// // //     <>
// // //       Collaborative Advisory with Licensed Investment Professionals.<br />
// // //       We work alongside regulated investment advisers and private offices to align global investment strategies with corporate and personal financial objectives.
// // //     </>
// // //   )
// // // },
// // // {
// // //   icon: Wallet,
// // //   title: 'Strategic Capital Partnerships',
// // //   description: (
// // //     <>
// // //       Private Co-Investment Opportunities for Select Partners.<br />
// // //       Renais Capital occasionally develops exclusive investment vehicles and co-investment structures with a small circle of accredited institutional and private partners.
// // //     </>
// // //   )
// // // }
// // //   ];

// // //   return (
// // //     <section id="services" className="py-24 bg-slate-50" ref={ref}>
// // //       <div className="container mx-auto px-6">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// // //           transition={{ duration: 0.8 }}
// // //           className="text-center mb-16"
// // //         >
// // //           <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
// // //             Our Services
// // //           </span>
// // //           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
// // //             Comprehensive Financial Solutions
// // //           </h2>
// // //           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
// // //             Tailored services designed to meet the sophisticated needs of our distinguished clientele
// // //           </p>
// // //         </motion.div>

// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {services.map((service, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               animate={isInView ? { opacity: 1, y: 0 } : {}}
// // //               transition={{ delay: index * 0.1, duration: 0.6 }}
// // //               whileHover={{ y: -8, transition: { duration: 0.3 } }}
// // //               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
// // //             >
// // //               <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
// // //                 <service.icon className="w-8 h-8 text-white" />
// // //               </div>
// // //               <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
// // //               <p className="text-slate-600 leading-relaxed">{service.description}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Services;

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { useInView } from '@/hooks/useInView';
// // import { Building2, Briefcase, PiggyBank, LineChart, Shield, Wallet } from 'lucide-react';

// // const Services = () => {
// //   const [ref, isInView] = useInView({ threshold: 0.1 });

// //   const services = [
// //     {
// //       icon: Building2,
// //       title: 'Corporate Finance',
// //       description: (
// //         <>
// //           <p>Strategic Financial Structuring & Cross-Border Advisory.</p>
// //           <p className="mt-1">
// //             We provide tailored advisory services in corporate finance, including debt restructuring, financial strategy, and cross-border credit negotiations with international banking partners.
// //           </p>
// //         </>
// //       )
// //     },
// //     {
// //       icon: Briefcase,
// //       title: 'Real Estate Structuring',
// //       description: (
// //         <>
// //           Advisory for International Real Estate Financing & Investments.<br />
// //           We advise developers and investors on the optimal financial structures to access institutional real-estate funding through international lenders, private offices, or banking networks.
// //         </>
// //       )
// //     },
// //     {
// //       icon: PiggyBank,
// //       title: 'Alternative Financing',
// //       description: (
// //         <>
// //           Multi-Jurisdictional Wealth and Corporate Defense Planning.<br />
// //           We design and coordinate international corporate structures, asset-holding entities, and legal frameworks to safeguard business and personal assets across jurisdictions.
// //         </>
// //       )
// //     },
// //     {
// //       icon: LineChart,
// //       title: 'Asset Protection & Corporate Structuring',
// //       description: (
// //         <>
// //           Multi-Jurisdictional Wealth and Corporate Defense Planning.<br />
// //           We design and coordinate international corporate structures, asset-holding entities, and legal frameworks to safeguard business and personal assets across jurisdictions.
// //         </>
// //       )
// //     },
// //     {
// //       icon: Shield,
// //       title: 'Private Banking Coordination',
// //       description: (
// //         <>
// //           Access to Global Private Banking Networks.<br />
// //           Through our network of trusted international partners, we coordinate introductions to private banking and wealth management institutions for qualified clients seeking global diversification.
// //         </>
// //       )
// //     },
// //     {
// //       icon: Wallet,
// //       title: 'Investment Strategy Advisory',
// //       description: (
// //         <>
// //           Collaborative Advisory with Licensed Investment Professionals.<br />
// //           We work alongside regulated investment advisers and private offices to align global investment strategies with corporate and personal financial objectives.
// //         </>
// //       )
// //     },
// //     {
// //       icon: Wallet,
// //       title: 'Strategic Capital Partnerships',
// //       description: (
// //         <>
// //           Private Co-Investment Opportunities for Select Partners.<br />
// //           Renais Capital occasionally develops exclusive investment vehicles and co-investment structures with a small circle of accredited institutional and private partners.
// //         </>
// //       )
// //     }
// //   ];

// //   return (
// //     <section id="services" className="py-24 bg-slate-50" ref={ref}>
// //       <div className="container mx-auto px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-16"
// //         >
// //           <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
// //             Our Services
// //           </span>
// //           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
// //             Comprehensive Financial Solutions
// //           </h2>
// //           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
// //             Tailored services designed to meet the sophisticated needs of our distinguished clientele
// //           </p>
// //         </motion.div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {services.map((service, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={isInView ? { opacity: 1, y: 0 } : {}}
// //               transition={{ delay: index * 0.1, duration: 0.6 }}
// //               whileHover={{
// //                 y: -12,
// //                 transition: { duration: 0.3 }
// //               }}
// //               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer hover:bg-gradient-to-b hover:from-white hover:to-slate-100"
// //             >
// //               <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-6 
// //                               group-hover:bg-gradient-to-r group-hover:from-[#bfa14a] group-hover:to-[#f9d976] 
// //                               transition-all duration-300">
// //                 <service.icon className="w-8 h-8 text-white group-hover:text-slate-900 transition-colors duration-300" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-slate-900 mb-4 
// //                             group-hover:text-[#d4af37] transition-colors duration-300">
// //                 {service.title}
// //               </h3>
// //               <p className="text-slate-600 leading-relaxed 
// //                             group-hover:text-slate-800 transition-colors duration-300">
// //                 {service.description}
// //               </p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from '@/hooks/useInView';
// import { Building2, Briefcase, PiggyBank, LineChart, Shield, Wallet } from 'lucide-react';

// const Services = () => {
//   const [ref, isInView] = useInView({ threshold: 0.1 });

//   const services = [
//     {
//       icon: Building2,
//       title: 'Corporate Finance',
//       subtitle: 'Strategic Financial Structuring & Cross-Border Advisory',
//       body:
//         'We provide tailored corporate-finance advisory focused on strategic debt restructuring, capital-structure optimization, and cross-border credit negotiations with reputable international banking partners.'
//     },
//     {
//       icon: Briefcase,
//       title: 'Real Estate Structuring',
//       subtitle: 'Advisory for International Real Estate Financing & Investments',
//       body:
//         'We advise developers and investors on structuring international real-estate projects to access institutional or private financing through global banking and capital-market networks.'
//     },
//     {
//       icon: PiggyBank,
//       title: 'Alternative Financing',
//       subtitle: 'Multi-Jurisdictional Capital & Corporate Planning',
//       body:
//         'We design flexible international structures that enable clients to optimize access to credit and protect assets through compliant cross-border corporate frameworks'
//     },
//     {
//       icon: LineChart,
//       title: 'Asset Protection & Corporate Structuring',
//       subtitle: 'Cross-Border Corporate Architecture & Governance',
//       body:
//         'We coordinate the implementation of holding entities, trusts, and governance structures aimed at long-term asset preservation and operational efficiency across jurisdictions.'
//     },
//     {
//       icon: Shield,
//       title: 'Private Banking Coordination',
//       subtitle: 'Access to International Private-Banking Networks',
//       body:
//         'Through our established relationships with global financial institutions, we assist clients in preparing and introducing their corporate or personal profiles to suitable private-banking partners.'
//     },

//     {
//       icon: Wallet,
//       title: 'Strategic Capital Partnerships',
//       subtitle: 'Private Co-Investment Opportunities for Select Partners',
//       body:
//         'Renais Capital occasionally participates in the structuring of exclusive co-investment initiatives in collaboration with accredited institutional and private partners.'
//     },
//     {
//       icon: Wallet,
//       title: 'Investment Strategy Advisory',
//       subtitle: 'Collaborative Planning with Regulated Investment Professionals',
//       body: (
//         <>
//           We work alongside licensed investment advisers and fiduciary offices to align global financial strategies with each client’s corporate and personal objectives.
//           <br />
//           <span className="block mt-2 text-sm font-semibold tracking-wide uppercase text-[#C6A14B]">
//             Coming Soon
//           </span>
//         </>
//       )
//     }
//   ];

//   return (
//     <section id="services" className="py-24 bg-slate-50" ref={ref}>
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
//             Our Services
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             Comprehensive Financial Solutions
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Tailored services designed to meet the sophisticated needs of our distinguished clientele
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               whileHover={{ y: -12, transition: { duration: 0.3 } }}
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer hover:bg-gradient-to-b hover:from-white hover:to-slate-100"
//             >
//               <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-6 
//                               group-hover:bg-gradient-to-r group-hover:from-[#bfa14a] group-hover:to-[#f9d976] 
//                               transition-all duration-300">
//                 <service.icon className="w-8 h-8 text-white group-hover:text-slate-900 transition-colors duration-300" />
//               </div>

//               {/* Título + SUBTÍTULO en dorado (igual que la #9) */}
//               <h3 className="text-2xl font-bold text-slate-900 leading-snug group-hover:text-[#d4af37] transition-colors duration-300">
//                 {service.title}
//               </h3>
//               <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#C6A14B] mb-3">
//                 {service.subtitle}
//               </p>

//               <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300 text-justify">
//                 {service.body}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Building2, Briefcase, PiggyBank, LineChart, Shield, Wallet } from 'lucide-react';

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Building2,
      title: 'Corporate Finance',
      subtitle: 'Strategic Financial Structuring & Cross-Border Advisory',
      body:
        'We provide tailored corporate-finance advisory focused on strategic debt restructuring, capital-structure optimization, and cross-border credit negotiations with reputable international banking partners.'
    },
    {
      icon: Briefcase,
      title: 'Real Estate Structuring',
      subtitle: 'Advisory for International Real Estate Financing & Investments',
      body:
        'We advise developers and investors on structuring international real-estate projects to access institutional or private financing through global banking and capital-market networks.'
    },
    {
      icon: PiggyBank,
      title: 'Alternative Financing',
      subtitle: 'Multi-Jurisdictional Capital & Corporate Planning',
      body:
        'We design flexible international structures that enable clients to optimize access to credit and protect assets through compliant cross-border corporate frameworks.'
    },
    {
      icon: LineChart,
      title: 'Asset Protection & Corporate Structuring',
      subtitle: 'Cross-Border Corporate Architecture & Governance',
      body:
        'We coordinate the implementation of holding entities, trusts, and governance structures aimed at long-term asset preservation and operational efficiency across jurisdictions.'
    },
    {
      icon: Shield,
      title: 'Private Banking Coordination',
      subtitle: 'Access to International Private-Banking Networks',
      body:
        'Through our established relationships with global financial institutions, we assist clients in preparing and introducing their corporate or personal profiles to suitable private-banking partners.'
    },
    {
      icon: Wallet,
      title: 'Strategic Capital Partnerships',
      subtitle: 'Private Co-Investment Opportunities for Select Partners',
      body:
        'Renais Capital occasionally participates in the structuring of exclusive co-investment initiatives in collaboration with accredited institutional and private partners.'
    },
    {
      icon: Wallet,
      title: 'Investment Strategy Advisory',
      subtitle: 'Collaborative Planning with Regulated Investment Professionals',
      body: (
        <>
          We work alongside licensed investment advisers and fiduciary offices to align global financial strategies with each client’s corporate and personal objectives.
          <br />
          <span className="block mt-2 text-sm font-semibold tracking-wide uppercase text-[#C6A14B] text-center">
            Coming Soon
          </span>
        </>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored services designed to meet the sophisticated needs of our distinguished clientele
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="h-full min-h-[420px] bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                         transition-all group cursor-pointer hover:bg-gradient-to-b hover:from-white hover:to-slate-100
                         flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-6 
                              group-hover:bg-gradient-to-r group-hover:from-[#bfa14a] group-hover:to-[#f9d976] 
                              transition-all duration-300">
                <service.icon className="w-8 h-8 text-white group-hover:text-slate-900 transition-colors duration-300" />
              </div>

              {/* Title + Subtitle */}
              <div className="min-h-[88px]">
                <h3 className="text-2xl font-bold text-slate-900 leading-snug 
                               group-hover:text-[#d4af37] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#C6A14B] mt-1">
                  {service.subtitle}
                </p>
              </div>

              {/* Body */}
              <p className="text-slate-600 leading-relaxed mt-3 
                            group-hover:text-slate-800 transition-colors duration-300 text-justify">
                {service.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;