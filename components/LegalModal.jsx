// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// const LegalModal = ({ isOpen, onClose, title, children }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           aria-modal="true"
//           role="dialog"
//         >
//           <motion.div
//             className="bg-[#0B1E33] text-slate-100 border border-white/10 rounded-xl shadow-2xl max-w-4xl w-[92%] md:w-full max-h-[85vh] overflow-hidden"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 20, opacity: 0 }}
//           >
//             <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
//               <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
//               <button
//                 onClick={onClose}
//                 className="p-2 rounded-md hover:bg-white/10 transition-colors"
//                 aria-label="Close"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <div className="px-6 py-5 overflow-y-auto space-y-4 leading-relaxed text-slate-200">
//               {children}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default LegalModal;

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LegalModal = ({ isOpen, onClose, title, children }) => {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            // Alto fijo del panel + layout en columnas
            className="bg-[#0B1E33] text-slate-100 border border-white/10 rounded-xl shadow-2xl w-[92%] md:w-full max-w-4xl h-[85vh] flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            {/* Header fijo */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
              <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Contenido scrollable */}
            <div
              className="px-6 py-5 overflow-y-auto grow space-y-4 leading-relaxed text-slate-200
                         [-webkit-overflow-scrolling:touch]"
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;