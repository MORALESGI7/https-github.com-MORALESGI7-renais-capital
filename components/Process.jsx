// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from '@/hooks/useInView';
// import { MessageSquare, FileSearch, Lightbulb, Briefcase, Rocket } from 'lucide-react';

// const Process = () => {
//   const [ref, isInView] = useInView({ threshold: 0.1 });

//   const steps = [
//     {
//       icon: MessageSquare,
//       title: 'Initial Consultation',
//       subtitle: 'Strategic Diagnosis',
//       description:
//         'We begin with a focused conversation to understand your financial structure, debt exposure, and international objectives. Our goal is to identify your current banking position and uncover cross-border opportunities.'
//     },
//     {
//       icon: FileSearch,
//       title: 'Comprehensive Analysis',
//       subtitle: 'Structuring Blueprint',
//       description:
//         'We conduct a full financial, legal, and strategic review to design a bespoke structure — whether for refinancing, real estate development, or corporate expansion.'
//     },
//     {
//       icon: Lightbulb,
//       title: 'Strategic Planning',
//       subtitle: 'Cross-Border Positioning',
//       description:
//         'We prepare your financial package, credit model, and institutional presentation for lenders or partners — ensuring regulatory compliance and credibility.'
//     },
//     {
//       icon: Briefcase,
//       title: 'Implementation',
//       subtitle: 'Institutional Engagement',
//       description:
//         'We coordinate introductions and negotiations with banks, private offices, and capital partners, representing your interests until structure approval or term sheet issuance.'
//     },
//     {
//       icon: Rocket,
//       title: 'Execution & Support',
//       subtitle: 'Long-Term Strategy',
//       description:
//         'Once funding or structure is in place, we oversee compliance, post-closing integration, and maintain ongoing institutional relationships for future growth.'
//     }
//   ];

//   return (
//     <section
//       id="process"
//       ref={ref}
//       className="py-24 bg-gradient-to-b from-white to-slate-50 flex flex-col items-center justify-center"
//     >
//       <div className="container mx-auto px-6 text-center max-w-6xl">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-16"
//         >
//           <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
//             Our Process
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
//             From Diagnosis to International Execution
//           </h2>

//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             A disciplined 5-phase methodology designed to lower capital costs,
//             enhance global access, and protect long-term value.
//           </p>
//         </motion.div>

//         {/* Cards grid */}
//         <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.12, duration: 0.7 }}
//               className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all px-8 py-12 border border-slate-100 w-full max-w-sm min-h-[420px]"
//             >
//               {/* Step number */}
//               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#C6A14B] text-white font-semibold text-lg flex items-center justify-center shadow-md">
//                 {index + 1}
//               </div>

//               {/* Icon */}
//               <div className="w-20 h-20 bg-[#0B1E33] rounded-full flex items-center justify-center mb-6 mt-4 shadow-md">
//                 <step.icon className="w-10 h-10 text-white" />
//               </div>

//               {/* Title + subtitle */}
//               <h3 className="text-xl font-bold text-slate-900 leading-snug">
//                 {step.title}
//               </h3>
//               <p className="text-sm font-medium text-[#C6A14B] tracking-wide uppercase mb-4">
//                 {step.subtitle}
//               </p>

//               {/* Description (JUSTIFIED) */}
//               <p className="text-slate-600 text-base leading-relaxed max-w-xs text-justify">
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Footer */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ delay: 0.8, duration: 0.8 }}
//           className="text-center mt-20"
//         >
//           <p className="text-slate-500 text-sm italic leading-relaxed">
//             Typical engagement timeline: 5–6 months from initial assessment to
//             institutional approval, followed by ongoing advisory.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Process;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { MessageSquare, FileSearch, Lightbulb, Briefcase, Rocket } from 'lucide-react';

const Process = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const steps = [
    {
      icon: MessageSquare,
      title: 'Initial Consultation',
      subtitle: 'Strategic Diagnosis',
      description:
        'We begin with a focused conversation to understand your financial structure, debt exposure, and international objectives. Our goal is to identify your current banking position and uncover cross-border opportunities.'
    },
    {
      icon: FileSearch,
      title: 'Comprehensive Analysis',
      subtitle: 'Structuring Blueprint',
      description:
        'We conduct a full financial, legal, and strategic review to design a bespoke structure — whether for refinancing, real estate development, or corporate expansion.'
    },
    {
      icon: Lightbulb,
      title: 'Strategic Planning',
      subtitle: 'Positioning',
      description:
        'We prepare your financial package, credit model, and institutional presentation for lenders or partners — ensuring regulatory compliance and credibility.'
    },
    {
      icon: Briefcase,
      title: 'Implementation',
      subtitle: 'Institutional Engagement',
      description:
        'We coordinate introductions and negotiations with banks, private offices, and capital partners, representing your interests until structure approval or term sheet issuance.'
    },
    {
      icon: Rocket,
      title: 'Execution & Support',
      subtitle: 'Long-Term Strategy',
      description:
        'Once funding or structure is in place, we oversee compliance, post-closing integration, and maintain ongoing institutional relationships for future growth.'
    }
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-slate-50 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 text-center max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            From Diagnosis to International Execution
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A disciplined 5-phase methodology designed to lower capital costs,
            enhance global access, and protect long-term value.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-2xl 
                         transition-all px-8 py-12 border border-slate-100 w-full max-w-sm min-h-[420px] 
                         hover:border-[#d4af37]/70 hover:bg-gradient-to-b hover:from-white hover:to-slate-100 group"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#bfa14a] to-[#f9d976] 
                              text-white font-semibold text-lg flex items-center justify-center shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-[#0B1E33] rounded-full flex items-center justify-center mb-6 mt-4 shadow-md 
                              group-hover:bg-gradient-to-r group-hover:from-[#bfa14a] group-hover:to-[#f9d976] transition-all duration-300">
                <step.icon className="w-10 h-10 text-white group-hover:text-slate-900 transition-colors duration-300" />
              </div>

              {/* Title + subtitle */}
              <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#d4af37] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-[#C6A14B] tracking-wide uppercase mb-4">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-600 text-base leading-relaxed max-w-xs text-justify 
                            group-hover:text-slate-800 transition-colors duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-slate-500 text-sm italic leading-relaxed">
            Typical engagement timeline: 5–6 months from initial assessment to
            institutional approval, followed by ongoing advisory.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;