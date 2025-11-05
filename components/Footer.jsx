
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     company: [
//       { label: 'About Us', href: '#about' },
//       { label: 'Services', href: '#services' },
//       { label: 'Process', href: '#process' },
//       { label: 'Contact', href: '#contact' }
//     ],
//     legal: [
//       { label: 'Privacy Policy', href: '#' },
//       { label: 'Terms of Service', href: '#' },
//       { label: 'Compliance', href: '#' },
//       { label: 'Disclosures', href: '#' }
//     ]
//   };

//   const socialLinks = [
//     // { icon: Facebook, href: '#', label: 'Facebook' },
//     // { icon: Twitter, href: '#', label: 'Twitter' },
//     // { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     // { icon: Instagram, href: '#', label: 'Instagram' }
//   ];

//   return (
//     <footer className="bg-slate-900 text-white pt-16 pb-8">
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">
//           <div className="md:col-span-2">
//             <div className="text-3xl font-bold mb-4">
//               <span className="font-serif">Renais</span>
//               <span className="gold-accent font-serif"> Capital</span>
//             </div>
//             <p className="text-slate-400 mb-6 max-w-md">
//               A premier international financing boutique delivering sophisticated financial solutions with modern luxury and unparalleled expertise.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
//                   aria-label={social.label}
//                 >
//                   <social.icon size={20} />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <span className="text-lg font-semibold mb-4 block">Company</span>
//             <ul className="space-y-3">
//               {footerLinks.company.map((link, index) => (
//                 <li key={index}>
//                   <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <span className="text-lg font-semibold mb-4 block">Legal</span>
//             <ul className="space-y-3">
//               {footerLinks.legal.map((link, index) => (
//                 <li key={index}>
//                   <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-slate-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-slate-400 text-sm">
//               © {currentYear} Renais Capital. All rights reserved.
//             </p>
//             <p className="text-slate-400 text-sm">
//               Securities offered through licensed professionals. Member FINRA/SIPC.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import { motion } from "framer-motion";
import LegalModal from "@/components/LegalModal"; // <- asegúrate de la ruta correcta

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { key: "privacy", label: "Privacy Policy" },
      { key: "terms", label: "Terms of Service" },
      { key: "compliance", label: "Compliance" },
      { key: "disclosures", label: "Disclosures" },
    ],
  };

  // ---------- Legal content (compliance-friendly) ----------
  const Legal = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <>
          <p><strong>Last updated:</strong> [DATE]</p>
          <p>
            Renais Capital (“we”, “us”, “our”) provides cross-border finance consulting
            services. This Privacy Policy explains how we collect, use, and protect
            personal information.
          </p>
          <h4 className="font-semibold text-white">1. Information We Collect</h4>
          <ul className="list-disc ml-5">
            <li>Contact data (name, email, phone, company, role)</li>
            <li>Scheduling data via Calendly (time zone, notes)</li>
            <li>Business information you share for scoping</li>
            <li>Technical data (IP, device, browser, pages, cookies/analytics)</li>
            <li>Communications (emails, calls/notes, uploaded files)</li>
          </ul>
          <p className="text-slate-300">
            Do not provide highly sensitive data unless we request it in writing.
          </p>

          <h4 className="font-semibold text-white">2. How We Use Data</h4>
          <ul className="list-disc ml-5">
            <li>Respond to inquiries and schedule consultations</li>
            <li>Provide consulting deliverables you request</li>
            <li>Operate, secure, and improve our website/services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p><strong>We do not sell personal information.</strong></p>

          <h4 className="font-semibold text-white">3. Sharing & Processors</h4>
          <p>
            We use trusted processors (e.g., Calendly, hosting/CDN, email, analytics) under
            data protection agreements. They may not use data for their own purposes.
          </p>

          <h4 className="font-semibold text-white">4. International Transfers</h4>
          <p>Where required, we implement appropriate safeguards (e.g., SCCs).</p>

          <h4 className="font-semibold text-white">5. Your Rights</h4>
          <p>
            Depending on your location, you may request access, correction, deletion,
            restriction, portability, or objection. Contact: <strong>[privacy@yourdomain.com]</strong>
          </p>

          <h4 className="font-semibold text-white">6. Retention & Security</h4>
          <p>We retain data only as necessary and apply reasonable security measures.</p>

          <h4 className="font-semibold text-white">7. Third-Party Links & Embeds</h4>
          <p>Calendly and other embeds are governed by their own privacy policies.</p>

          <h4 className="font-semibold text-white">8. Contact</h4>
          <p>
            Controller: [Renais Capital LLC], [Address, City, Country] — Email:{" "}
            <strong>[privacy@yourdomain.com]</strong>
          </p>
        </>
      ),
    },

    terms: {
      title: "Terms of Service",
      content: (
        <>
          <p><strong>Last updated:</strong> [DATE]</p>
          <h4 className="font-semibold text-white">1. Scope</h4>
          <p>
            We provide independent consulting in cross-border financial structuring,
            documentation readiness, and institutional readiness. We are <strong>not</strong> a
            lender, broker-dealer, placement agent, investment adviser, custodian, or
            money transmitter; we do <strong>not</strong> solicit or sell securities or arrange credit.
          </p>

          <h4 className="font-semibold text-white">2. No Advice</h4>
          <p>
            Website content and case reviews are informational and not legal, tax,
            accounting, investment, or regulatory advice. Obtain independent counsel.
          </p>

          <h4 className="font-semibold text-white">3. Third-Party Services</h4>
          <p>
            Scheduling/embeds (e.g., Calendly), banks, funds, trustees, or advisors are
            independent third parties; we are not responsible for their approvals.
          </p>

          <h4 className="font-semibold text-white">4. Fees</h4>
          <p>
            Fees/retainers/success milestones apply only under a signed consulting
            agreement; website content is not an offer or quote.
          </p>

          <h4 className="font-semibold text-white">5. Disclaimers & Liability</h4>
          <p>
            We do not guarantee financing outcomes. Services/site are provided “as is”.
            To the maximum extent permitted by law, our liability for site use is limited
            to USD $100.
          </p>

          <h4 className="font-semibold text-white">6. Governing Law</h4>
          <p>
            These Terms are governed by the laws of [New York, USA]. Disputes will be
            resolved by confidential arbitration in [New York, NY].
          </p>
        </>
      ),
    },

    compliance: {
      title: "Compliance",
      content: (
        <>
          <p><strong>Last updated:</strong> [DATE]</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Renais Capital acts solely as an independent consulting firm. Where a
              license is required for an activity, we do not perform that activity.
            </li>
            <li>
              KYC/AML and onboarding are performed directly by financial institutions.
            </li>
            <li>
              We collaborate with independent legal/tax counsel across jurisdictions
              (e.g., U.S., Switzerland, Singapore, UAE) as appropriate.
            </li>
            <li>
              Zero tolerance for bribery/corruption; we do not engage with sanctioned
              parties or embargoed jurisdictions.
            </li>
            <li>
              Introductions are informational and not endorsements. Referral fees, if any,
              are disclosed and compliant with applicable law.
            </li>
            <li>We do not hold client funds or securities.</li>
          </ul>
        </>
      ),
    },

    disclosures: {
      title: "Disclosures",
      content: (
        <>
          <p><strong>Last updated:</strong> [DATE]</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Nothing on this site is an offer to sell or a solicitation to buy any
              security, or a commitment to arrange, underwrite, or provide financing.
            </li>
            <li>
              Testimonials/case reviews are anonymized illustrations; outcomes depend on
              third-party decisions and may vary.
            </li>
            <li>
              Calendly & other embeds operate under their own terms and privacy notices.
            </li>
            <li>
              Background media are licensed; reproduction is prohibited.
            </li>
            <li>
              We may use reputable AI tools for drafting/summarizing non-confidential
              materials with human review.
            </li>
          </ul>
        </>
      ),
    },
  };

  // ---------- Modal state ----------
  const [openKey, setOpenKey] = useState(null);
  const open = (key) => setOpenKey(key);
  const close = () => setOpenKey(null);

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4">
                <span className="font-serif">Renais</span>
                <span className="gold-accent font-serif"> Capital</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md text-justify leading-relaxed">
                An international financial advisory boutique specializing in cross-border corporate and private structuring, offering strategic guidance with institutional discipline and family-office discretion.
              </p>
            </div>

            <div>
              <span className="text-lg font-semibold mb-4 block">Company</span>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-lg font-semibold mb-4 block">Legal</span>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => open(link.key)}
                      className="text-left w-full text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                © {currentYear} Renais Capital. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm text-center">
                We provide independent consulting only — not a lender, broker-dealer, investment adviser, or money transmitter.
                Outcomes are determined by independent third parties.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* LEGAL MODAL */}
      {openKey && (
        <LegalModal
          isOpen={!!openKey}
          onClose={close}
          title={Legal[openKey].title}
        >
          {Legal[openKey].content}
        </LegalModal>
      )}
    </>
  );
};

export default Footer;