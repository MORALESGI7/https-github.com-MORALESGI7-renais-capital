// import React, { useRef, useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

// const cases = [
//   // 1) Industrial Manufacturing — Cross-Border Debt Advisory
//   {
//     quote:
//       "An industrial group explored a USD refinancing under U.S. law. Renais Capital advised on cross-border structure options and coordinated with independent counsel; the client subsequently obtained terms that lowered total funding costs.",
//     author: "Confidential — Industrial Manufacturing",
//     role: "Cross-Border Debt Advisory",
//   },
//   // 2) Swiss Finance Structuring Advisory
//   {
//     quote:
//       "A European holding company evaluated establishing a Swiss finance vehicle to centralize regional lending. Renais Capital advised on governance design, SARON-linked framework, and cross-border compliance alongside Swiss counsel.",
//     author: "Confidential — European Industrial Holding",
//     role: "Swiss Finance Structuring Advisory"
//   },
//   // 3) Renewable Energy — Project Finance Review
//   {
//     quote:
//       "A renewable energy company evaluated restructuring of project debt. We prepared lender-ready analytics and covenant maps; the client later executed amendments extending maturities with its existing institutions.",
//     author: "Confidential — Renewable Energy",
//     role: "Project Finance Review",
//   },
//   // 4) Private Credit Fund — Structuring Framework
//   {
//     quote:
//       "A private credit fund assessed market entry via co-lending. Renais Capi tal drafted a cross-border framework with legal counsel, clarifying risk allocation and onboarding pathways.",
//     author: "Confidential — Private Credit Fund",
//     role: "Structuring Framework",
//   },
//   // 5) Family Office — Wealth Liquidity Consulting
//   {
//     quote:
//       "A family office reviewed liquidity diversification via credit secured by financial and real assets. Renais Capital supported onboarding documentation and risk analysis; final facilities were approved by the bank’s independent underwriting.",
//     author: "Confidential — Family Office",
//     role: "Wealth Liquidity Consulting",
//   },
//   // 6) Dubai Holding & Investment Structuring (logística / Golfo)
//   {
//     quote:
//       "A logistics consortium planned an intermodal expansion via a UAE-based holding to attract Gulf co-investors. Renais Capital provided structuring guidance, banking introductions, and financial modeling compliant with Dubai DIFC standards.",
//     author: "Confidential — Logistics & Infrastructure Group",
//     role: "Dubai Holding & Investment Structuring"
//   },
//   // 7) Real Estate Developer — Debt Consolidation Advisory
//   {
//     quote:
//       "A real estate developer assessed consolidating multiple loans into a single foreign-law facility. We outlined scenarios with counsel and tax advisors; the client proceeded with an option that simplified covenants and reporting.",
//     author: "Confidential — Real Estate Developer",
//     role: "Debt Consolidation Advisory",
//   },

//   // ---- Resto de casos (en el orden que tenías) ----
//   {
//     quote:
//       "A Latin American export group explored setting up a Singapore trade subsidiary to improve access to Asian supply-chain finance. Renais Capital coordinated feasibility studies, fintech integration, and KYC alignment with regional banking partners.",
//     author: "Confidential — Global Logistics & Trade Group",
//     role: "Singapore Trade Structuring"
//   },
//   {
//     quote:
//       "A logistics operator evaluated a revolving facility to modernize its fleet. We supported financial modeling and lender presentation materials; the client negotiated a line backed by domestic receivables through its own U.S. entity.",
//     author: "Confidential — Logistics Group",
//     role: "Working-Capital Strategy",
//   },
//   {
//     quote:
//       "A technology company considered a short-term bridge while pursuing equity. We advised on venture-debt norms and instruments; the client independently agreed a facility with private lenders.",
//     author: "Confidential — Technology Company",
//     role: "Venture Debt Advisory",
//   },
//   {
//     quote:
//       "A healthcare group analyzed equipment financing tied to property assets. We prepared financial packages and peer metrics; financing decisions were made by third-party institutions.",
//     author: "Confidential — Healthcare Group",
//     role: "Asset-Backed Options Review",
//   },
//   {
//     quote:
//       "A mining services company transitioned from local factoring to structured trade credit. Our role included cash-flow modeling and lender communications; facilities were approved by an independent commodity lender.",
//     author: "Confidential — Mining & Commodities",
//     role: "Trade Finance Advisory",
//   },
//   {
//     quote:
//       "A hospitality platform evaluated refinancing via an offshore SPV to mitigate FX volatility. We coordinated with counsel and tax advisors on feasibility; the client completed its own negotiations with lenders.",
//     author: "Confidential — Hospitality",
//     role: "Offshore Structure Assessment",
//   },
//   {
//     quote:
//       "An infrastructure contractor needed advance-payment and performance support. We outlined surety options and prepared submissions; guarantees were issued by an international surety based on its underwriting.",
//     author: "Confidential — Construction & Infrastructure",
//     role: "Surety Program Advisory",
//   },
//   {
//     quote:
//       "A fintech group expanded to the U.S. through a finance subsidiary. Renais Capital advised on entity design and institutional onboarding requirements with external counsel.",
//     author: "Confidential — Fintech",
//     role: "Corporate/Onboarding Advisory",
//   },
//   {
//     quote:
//       "An agribusiness pursued export receivables financing through a U.S. vehicle. We prepared data rooms and buyer concentration analyses; credit decisions were made by independent funders.",
//     author: "Confidential — Agribusiness",
//     role: "Receivables Finance Strategy",
//   },
//   {
//     quote:
//       "A private investor considered a Swiss vehicle for distressed acquisitions. We supported structure selection and banking introductions; transactions proceeded under third-party approvals.",
//     author: "Confidential — Private Investor",
//     role: "Cross-Border Holding Design",
//   },
//   {
//     quote:
//       "An industrial conglomerate reviewed a hybrid debt-equity solution under New York law. Renais Capital advised on market conventions and term mechanics; capital was ultimately provided by institutional parties.",
//     author: "Confidential — Industrial Conglomerate",
//     role: "Hybrid Capital Advisory",
//   },
//   {
//     quote:
//       "A luxury residential developer analyzed pre-sale financing via an EU SPV. We coordinated financial models, risk factors and governance notes; lenders concluded underwriting independently.",
//     author: "Confidential — Luxury Real Estate",
//     role: "Development Finance Advisory",
//   },
//   {
//     quote:
//       "A media group sought to consolidate USD liabilities after regional expansion. We designed a credit map and lender pack; the client executed a consolidated facility with its bank group.",
//     author: "Confidential — Media & Entertainment",
//     role: "Corporate Credit Consolidation",
//   },
//   {
//     quote:
//       "A retail distributor evaluated import lines with a trade bank to fund seasonal inventory. Renais Capital prepared projections and sensitivity cases; the bank’s credit team approved terms directly with the client.",
//     author: "Confidential — Retail Distribution",
//     role: "Import Finance Advisory",
//   },
//   {
//     quote:
//       "A private client relocated assets to a multi-jurisdictional holding. We coordinated banking, trust providers and documentation; implementations were completed under local regulations.",
//     author: "Confidential — Private Client",
//     role: "Wealth Relocation & Governance",
//   },
//   {
//     quote:
//       "An energy contractor examined project finance via a U.S. entity for infrastructure bids. Renais Capital advised on structure, covenant design and presentation materials; financing was granted by third-party institutions.",
//     author: "Confidential — Energy Contractor",
//     role: "Project Finance Advisory",
//   },
// ];

// const CaseReviewsSlider = () => {
//   const trackRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const GAP = 24;

//   const scrollTo = (i) => {
//     const el = trackRef.current;
//     if (!el) return;
//     const card = el.querySelector("[data-card]");
//     if (!card) return;
//     const cardWidth = card.offsetWidth;
//     el.scrollTo({ left: i * (cardWidth + GAP), behavior: "smooth" });
//     setIndex(i);
//   };

//   const prev = () => scrollTo(Math.max(index - 1, 0));
//   const next = () => scrollTo(Math.min(index + 1, cases.length - 1));

//   // Autoplay
//   useEffect(() => {
//     const timer = setInterval(() => next(), 8000);
//     return () => clearInterval(timer);
//   }, [index]); // mantiene autoplay estable

//   return (
//     <section id="case-reviews" className="py-24 bg-[#0B1E33]">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <span className="text-sm tracking-widest uppercase text-[#C6A14B] mb-3 block">
//             Selected Client Experiences
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Confidential Case Reviews
//           </h2>
//           <p className="text-slate-300 text-lg max-w-3xl mx-auto">
//             Illustrative outcomes from cross-border financial consulting. Client results reflect third-party decisions and underwriting.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative">
//           <button
//             onClick={prev}
//             className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white"
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             onClick={next}
//             className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white"
//           >
//             <ChevronRight />
//           </button>

//           <div
//             ref={trackRef}
//             className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2
//                        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
//           >
//             {cases.map((item, i) => (
//               <article
//                 key={i}
//                 data-card
//                 className="snap-start shrink-0 w-[88%] sm:w-[520px] md:w-[560px]
//                            bg-[#11263D]/80 backdrop-blur-sm border border-white/10
//                            rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
//               >
//                 <div className="flex justify-start mb-4">
//                   <ShieldCheck className="w-8 h-8 text-[#C6A14B]" />
//                 </div>
//                 <p className="text-slate-200 italic text-justify leading-relaxed">
//                   “{item.quote}”
//                 </p>
//                 <div className="mt-6">
//                   <p className="text-[#C6A14B] font-semibold">{item.author}</p>
//                   <p className="text-slate-400 text-sm">{item.role}</p>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {cases.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => scrollTo(i)}
//                 className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-[#C6A14B]" : "w-3 bg-white/30"}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Disclaimer */}
//         <p className="text-slate-500 text-xs italic mt-8 text-center max-w-3xl mx-auto">
//           Renais Capital provides independent consulting services only. We are not a lender, broker-dealer, investment adviser, or issuer, and we do not solicit or sell securities or arrange credit. Any financing outcomes were determined by independent third parties and are shown in anonymized form.
//         </p>
//       </div>
//     </section>
//   );
// };


// export default CaseReviewsSlider;

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

const cases = [
  // 1) Industrial Manufacturing — Cross-Border Debt Advisory
  {
    quote:
      "An industrial group explored a USD refinancing under U.S. law. Renais Capital advised on cross-border structure options and coordinated with independent counsel; the client subsequently obtained terms that lowered total funding costs.",
    author: "Confidential — Industrial Manufacturing",
    role: "Cross-Border Debt Advisory",
  },
  // 2) Swiss Finance Structuring Advisory
  {
    quote:
      "A European holding company evaluated establishing a Swiss finance vehicle to centralize regional lending. Renais Capital advised on governance design, SARON-linked framework, and cross-border compliance alongside Swiss counsel.",
    author: "Confidential — European Industrial Holding",
    role: "Swiss Finance Structuring Advisory"
  },
  // 3) Renewable Energy — Project Finance Review
  {
    quote:
      "A renewable energy company evaluated restructuring of project debt. We prepared lender-ready analytics and covenant maps; the client later executed amendments extending maturities with its existing institutions.",
    author: "Confidential — Renewable Energy",
    role: "Project Finance Review",
  },
  // 4) Private Credit Fund — Structuring Framework
  {
    quote:
      "A private credit fund assessed market entry via co-lending. Renais Capital drafted a cross-border framework with legal counsel, clarifying risk allocation and onboarding pathways.",
    author: "Confidential — Private Credit Fund",
    role: "Structuring Framework",
  },
  // 5) Family Office — Wealth Liquidity Consulting
  {
    quote:
      "A family office reviewed liquidity diversification via credit secured by financial and real assets. Renais Capital supported onboarding documentation and risk analysis; final facilities were approved by the bank’s independent underwriting.",
    author: "Confidential — Family Office",
    role: "Wealth Liquidity Consulting",
  },
  // 6) Dubai Holding & Investment Structuring (logística / Golfo)
  {
    quote:
      "A logistics consortium planned an intermodal expansion via a UAE-based holding to attract Gulf co-investors. Renais Capital provided structuring guidance, banking introductions, and financial modeling compliant with Dubai DIFC standards.",
    author: "Confidential — Logistics & Infrastructure Group",
    role: "Dubai Holding & Investment Structuring"
  },
  // 7) Real Estate Developer — Debt Consolidation Advisory
  {
    quote:
      "A real estate developer assessed consolidating multiple loans into a single foreign-law facility. We outlined scenarios with counsel and tax advisors; the client proceeded with an option that simplified covenants and reporting.",
    author: "Confidential — Real Estate Developer",
    role: "Debt Consolidation Advisory",
  },

  // ---- Resto de casos ----
  {
    quote:
      "A Latin American export group explored setting up a Singapore trade subsidiary to improve access to Asian supply-chain finance. Renais Capital coordinated feasibility studies, fintech integration, and KYC alignment with regional banking partners.",
    author: "Confidential — Global Logistics & Trade Group",
    role: "Singapore Trade Structuring"
  },
  {
    quote:
      "A logistics operator evaluated a revolving facility to modernize its fleet. We supported financial modeling and lender presentation materials; the client negotiated a line backed by domestic receivables through its own U.S. entity.",
    author: "Confidential — Logistics Group",
    role: "Working-Capital Strategy",
  },
  {
    quote:
      "A technology company considered a short-term bridge while pursuing equity. We advised on venture-debt norms and instruments; the client independently agreed a facility with private lenders.",
    author: "Confidential — Technology Company",
    role: "Venture Debt Advisory",
  },
  {
    quote:
      "A healthcare group analyzed equipment financing tied to property assets. We prepared financial packages and peer metrics; financing decisions were made by third-party institutions.",
    author: "Confidential — Healthcare Group",
    role: "Asset-Backed Options Review",
  },
  {
    quote:
      "A mining services company transitioned from local factoring to structured trade credit. Our role included cash-flow modeling and lender communications; facilities were approved by an independent commodity lender.",
    author: "Confidential — Mining & Commodities",
    role: "Trade Finance Advisory",
  },
  {
    quote:
      "A hospitality platform evaluated refinancing via an offshore SPV to mitigate FX volatility. We coordinated with counsel and tax advisors on feasibility; the client completed its own negotiations with lenders.",
    author: "Confidential — Hospitality",
    role: "Offshore Structure Assessment",
  },
  {
    quote:
      "An infrastructure contractor needed advance-payment and performance support. We outlined surety options and prepared submissions; guarantees were issued by an international surety based on its underwriting.",
    author: "Confidential — Construction & Infrastructure",
    role: "Surety Program Advisory",
  },
  {
    quote:
      "A fintech group expanded to the U.S. through a finance subsidiary. Renais Capital advised on entity design and institutional onboarding requirements with external counsel.",
    author: "Confidential — Fintech",
    role: "Corporate/Onboarding Advisory",
  },
  {
    quote:
      "An agribusiness pursued export receivables financing through a U.S. vehicle. We prepared data rooms and buyer concentration analyses; credit decisions were made by independent funders.",
    author: "Confidential — Agribusiness",
    role: "Receivables Finance Strategy",
  },
  {
    quote:
      "A private investor considered a Swiss vehicle for distressed acquisitions. We supported structure selection and banking introductions; transactions proceeded under third-party approvals.",
    author: "Confidential — Private Investor",
    role: "Cross-Border Holding Design",
  },
  {
    quote:
      "An industrial conglomerate reviewed a hybrid debt-equity solution under New York law. Renais Capital advised on market conventions and term mechanics; capital was ultimately provided by institutional parties.",
    author: "Confidential — Industrial Conglomerate",
    role: "Hybrid Capital Advisory",
  },
  {
    quote:
      "A luxury residential developer analyzed pre-sale financing via an EU SPV. We coordinated financial models, risk factors and governance notes; lenders concluded underwriting independently.",
    author: "Confidential — Luxury Real Estate",
    role: "Development Finance Advisory",
  },
  {
    quote:
      "A media group sought to consolidate USD liabilities after regional expansion. We designed a credit map and lender pack; the client executed a consolidated facility with its bank group.",
    author: "Confidential — Media & Entertainment",
    role: "Corporate Credit Consolidation",
  },
  {
    quote:
      "A retail distributor evaluated import lines with a trade bank to fund seasonal inventory. Renais Capital prepared projections and sensitivity cases; the bank’s credit team approved terms directly with the client.",
    author: "Confidential — Retail Distribution",
    role: "Import Finance Advisory",
  },
  {
    quote:
      "A private client relocated assets to a multi-jurisdictional holding. We coordinated banking, trust providers and documentation; implementations were completed under local regulations.",
    author: "Confidential — Private Client",
    role: "Wealth Relocation & Governance",
  },
  {
    quote:
      "An energy contractor examined project finance via a U.S. entity for infrastructure bids. Renais Capital advised on structure, covenant design and presentation materials; financing was granted by third-party institutions.",
    author: "Confidential — Energy Contractor",
    role: "Project Finance Advisory",
  },
];

const CaseReviewsSlider = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const GAP = 24;

  const scrollTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    el.scrollTo({ left: i * (cardWidth + GAP), behavior: "smooth" });
    setIndex(i);
  };

  const prev = () => scrollTo(Math.max(index - 1, 0));
  const next = () => scrollTo(Math.min(index + 1, cases.length - 1));

  // Autoplay estable (un solo intervalo)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prevIdx) => {
        const nextIdx = prevIdx + 1 >= cases.length ? 0 : prevIdx + 1;
        // scroll sin depender del estado asincrónico
        const el = trackRef.current;
        if (el) {
          const card = el.querySelector("[data-card]");
          if (card) {
            const cardWidth = card.offsetWidth;
            el.scrollTo({ left: nextIdx * (cardWidth + GAP), behavior: "smooth" });
          }
        }
        return nextIdx;
      });
    }, 8000);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section
      id="testimonials"            // <- ancla para el menú
      className="py-24 bg-[#0B1E33] scroll-mt-28"  // <- compensa header fijo
      aria-label="Client testimonials and case reviews"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm tracking-widest uppercase text-[#C6A14B] mb-3 block">
            Selected Client Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Confidential Case Reviews
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Illustrative outcomes from cross-border financial consulting. Client results reflect third-party decisions and underwriting.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white"
            aria-label="Previous testimonials"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white"
            aria-label="Next testimonials"
          >
            <ChevronRight />
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {cases.map((item, i) => (
              <article
                key={i}
                data-card
                className="snap-start shrink-0 w-[88%] sm:w-[520px] md:w-[560px]
                           bg-[#11263D]/80 backdrop-blur-sm border border-white/10
                           rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-start mb-4">
                  <ShieldCheck className="w-8 h-8 text-[#C6A14B]" />
                </div>
                <p className="text-slate-200 italic text-justify leading-relaxed">
                  “{item.quote}”
                </p>
                <div className="mt-6">
                  <p className="text-[#C6A14B] font-semibold">{item.author}</p>
                  <p className="text-slate-400 text-sm">{item.role}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-[#C6A14B]" : "w-3 bg-white/30"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-slate-500 text-xs italic mt-8 text-center max-w-3xl mx-auto">
          Renais Capital provides independent consulting services only. We are not a lender, broker-dealer, investment adviser, or issuer, and we do not solicit or sell securities or arrange credit. Any financing outcomes were determined by independent third parties and are shown in anonymized form.
        </p>
      </div>
    </section>
  );
};

export default CaseReviewsSlider;