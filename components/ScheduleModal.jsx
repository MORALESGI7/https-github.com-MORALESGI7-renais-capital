"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScheduleModal = ({ isOpen, onClose }) => {
  const calendlyContainer = useRef(null);

  // Cargar script solo una vez
  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Inicializar Calendly cuando se abre el modal
  useEffect(() => {
    if (isOpen && window.Calendly && calendlyContainer.current) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/gimorales-renaiscapital",
        parentElement: calendlyContainer.current,
        prefill: {},
        utm: {},
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-[#0B1E33] text-white max-w-3xl w-full mx-4 rounded-lg overflow-hidden shadow-2xl border border-[#C6A14B]/40"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Cerrar */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-[#C6A14B] text-2xl hover:text-white transition"
          >
            ✕
          </button>

          {/* Título */}
          <div className="p-6 text-center border-b border-[#C6A14B]/40">
            <h2 className="text-2xl font-semibold mb-2 text-[#C6A14B]">
              Schedule a Private Consultation
            </h2>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Select a time that works for you. All consultations are confidential.
            </p>
          </div>

          {/* Calendly (contenedor dinámico) */}
          <div className="p-4">
            <div
              ref={calendlyContainer}
              style={{ minWidth: "320px", height: "700px" }}
              className="w-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleModal;
