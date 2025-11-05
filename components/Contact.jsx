// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { useInView } from '@/hooks/useInView';
// // import { Mail, Phone, MapPin, Send } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { useToast } from '@/components/ui/use-toast';

// // const Contact = () => {
// //   const [ref, isInView] = useInView({ threshold: 0.1 });
// //   const { toast } = useToast();
// //   const [loading, setLoading] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     message: '',
// //     botcheck: '' // honeypot (anti spam)
// //   });

// //   // ✅ Tu access key de Web3Forms
// //   const WEB3FORMS_KEY = '902cf1db-58ea-41c7-93f2-edf00433c0bb';

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (loading) return;
// //     if (formData.botcheck) return; // honeypot check

// //     setLoading(true);
// //     try {
// //       const form = new FormData();
// //       form.append('access_key', WEB3FORMS_KEY);
// //       form.append('from_name', 'Renais Capital Website');
// //       form.append('subject', 'New Contact Submission — Renais Capital');
// //       form.append('name', formData.name);
// //       form.append('email', formData.email);
// //       form.append('phone', formData.phone);
// //       form.append('message', formData.message);

// //       // ⚙️ Envío a Web3Forms API
// //       const res = await fetch('https://api.web3forms.com/submit', {
// //         method: 'POST',
// //         body: form
// //       });
// //       const data = await res.json();

// //       if (data.success) {
// //         toast({
// //           title: 'Message Sent! ✅',
// //           description: "We've received your message. We'll contact you within 24 hours.",
// //         });
// //         setFormData({ name: '', email: '', phone: '', message: '', botcheck: '' });
// //       } else {
// //         toast({
// //           title: 'Error sending message',
// //           description: data.message || 'Please try again later.',
// //           variant: 'destructive',
// //         });
// //       }
// //     } catch (err) {
// //       toast({
// //         title: 'Network error',
// //         description: 'Unable to send message. Try again later.',
// //         variant: 'destructive',
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // ✅ Información de contacto con enlace a Google Maps
// //   const contactInfo = [
// //     { icon: Phone, label: '+1 (929)665-4772', href: 'tel:+19296654772' },
// //     { icon: Mail, label: 'contact@renaiscapital.com', href: 'mailto:gimorales@renaiscapital.com' },
// //     { 
// //       icon: MapPin, 
// //       label: '515 Madison Avenue New York, NY 10022', 
// //       href: 'https://www.google.com/maps?q=515+Madison+Avenue+New+York,+NY+10022',
// //       target: '_blank',
// //       rel: 'noopener noreferrer'
// //     },
// //   ];

// //   return (
// //     <section id="contact" className="py-24 bg-slate-50" ref={ref}>
// //       <div className="container mx-auto px-6">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={isInView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-16"
// //         >
// //           <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
// //             Get In Touch
// //           </span>
// //           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
// //             Start Your Financial Journey
// //           </h2>
// //           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
// //             Connect with our team of experts to explore how we can help achieve your financial goals.
// //           </p>
// //         </motion.div>

// //         <div className="grid lg:grid-cols-2 gap-12">
// //           {/* FORM */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={isInView ? { opacity: 1, x: 0 } : {}}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <div className="bg-white p-8 rounded-xl shadow-lg">
// //               <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 {/* Hidden honeypot */}
// //                 <input
// //                   type="text"
// //                   name="botcheck"
// //                   value={formData.botcheck}
// //                   onChange={handleChange}
// //                   className="hidden"
// //                   tabIndex={-1}
// //                   autoComplete="off"
// //                 />

// //                 <div>
// //                   <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
// //                     placeholder="John Doe"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
// //                     placeholder="john@example.com"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
// //                   <input
// //                     type="tel"
// //                     name="phone"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
// //                     placeholder="+1 (555) 123-4567"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
// //                   <textarea
// //                     name="message"
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     required
// //                     rows="4"
// //                     className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
// //                     placeholder="Tell us about your financing needs..."
// //                   ></textarea>
// //                 </div>

// //                 <Button
// //                   type="submit"
// //                   disabled={loading}
// //                   className="w-full bg-slate-900 hover:bg-slate-800 text-white group disabled:opacity-60"
// //                 >
// //                   {loading ? 'Sending...' : 'Send Message'}
// //                   <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
// //                 </Button>
// //               </form>
// //             </div>
// //           </motion.div>

// //           {/* CONTACT INFO */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={isInView ? { opacity: 1, x: 0 } : {}}
// //             transition={{ duration: 0.8 }}
// //             className="space-y-8"
// //           >
// //             <div className="bg-white p-8 rounded-xl shadow-lg">
// //               <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
// //               <div className="space-y-6">
// //                 {contactInfo.map((info, index) => (
// //                   <motion.a
// //                     key={index}
// //                     href={info.href}
// //                     target={info.target || '_self'}
// //                     rel={info.rel || ''}
// //                     whileHover={{ x: 8 }}
// //                     className="flex items-center space-x-4 text-slate-600 hover:text-slate-900 transition-colors"
// //                   >
// //                     <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
// //                       <info.icon className="w-6 h-6" />
// //                     </div>
// //                     <span className="text-lg">{info.label}</span>
// //                   </motion.a>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="bg-slate-900 p-8 rounded-xl text-white">
// //               <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
// //               <div className="space-y-2 text-slate-300">
// //                 <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
// //                 <p>Saturday: 10:00 AM - 2:00 PM</p>
// //                 <p>Sunday: Closed</p>
// //               </div>
// //               <div className="mt-6 pt-6 border-t border-slate-700">
// //                 <p className="text-sm text-slate-400">
// //                   For urgent matters outside business hours, please email us and we'll respond as soon as possible.
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from '@/hooks/useInView';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/use-toast';

// const Contact = () => {
//   const [ref, isInView] = useInView({ threshold: 0.1 });
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     botcheck: '' // honeypot (anti spam)
//   });

//   // ✅ Tu access key de Web3Forms
//   const WEB3FORMS_KEY = '902cf1db-58ea-41c7-93f2-edf00433c0bb';

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;
//     if (formData.botcheck) return;

//     setLoading(true);
//     try {
//       const form = new FormData();
//       form.append('access_key', WEB3FORMS_KEY);
//       form.append('from_name', 'Renais Capital Website');
//       form.append('subject', 'New Contact Submission — Renais Capital');
//       form.append('name', formData.name);
//       form.append('email', formData.email);
//       form.append('phone', formData.phone);
//       form.append('message', formData.message);

//       const res = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: form
//       });
//       const data = await res.json();

//       if (data.success) {
//         toast({
//           title: 'Message Sent! ✅',
//           description: "We've received your message. We'll contact you within 24 hours.",
//         });
//         setFormData({ name: '', email: '', phone: '', message: '', botcheck: '' });
//       } else {
//         toast({
//           title: 'Error sending message',
//           description: data.message || 'Please try again later.',
//           variant: 'destructive',
//         });
//       }
//     } catch (err) {
//       toast({
//         title: 'Network error',
//         description: 'Unable to send message. Try again later.',
//         variant: 'destructive',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 📍 Información de contacto (con Google Maps link)
//   const contactInfo = [
//     { icon: Phone, label: '+1 (929)665-4772', href: 'tel:+19296654772' },
//     { icon: Mail, label: 'contact@renaiscapital.com', href: 'mailto:gimorales@renaiscapital.com' },
//     { 
//       icon: MapPin, 
//       label: '515 Madison Avenue New York, NY 10022', 
//       href: 'https://www.google.com/maps?q=515+Madison+Avenue+New+York,+NY+10022',
//       target: '_blank',
//       rel: 'noopener noreferrer'
//     },
//   ];

//   return (
//     <section id="contact" className="py-24 bg-slate-50" ref={ref}>
//       <div className="container mx-auto px-6">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
//             Get In Touch
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             Start Your Financial Journey
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Connect with our team of experts to explore how we can help achieve your financial goals.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* FORMULARIO */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Hidden honeypot */}
//                 <input
//                   type="text"
//                   name="botcheck"
//                   value={formData.botcheck}
//                   onChange={handleChange}
//                   className="hidden"
//                   tabIndex={-1}
//                   autoComplete="off"
//                 />

//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
//                     placeholder="+1 (555) 123-4567"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
//                     placeholder="Tell us about your financing needs..."
//                   ></textarea>
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-slate-900 hover:bg-slate-800 text-white group disabled:opacity-60"
//                 >
//                   {loading ? 'Sending...' : 'Send Message'}
//                   <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
//                 </Button>
//               </form>
//             </div>
//           </motion.div>

//           {/* CONTACT INFO con fondo del edificio */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <div
//               className="relative p-8 rounded-xl shadow-lg text-white overflow-hidden"
//               style={{
//                 backgroundImage: "url('/515-2.jpg')",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             >
//               {/* Overlay oscuro */}
//               <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

//               {/* Contenido */}
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
//                 <div className="space-y-6">
//                   {contactInfo.map((info, index) => (
//                     <motion.a
//                       key={index}
//                       href={info.href}
//                       target={info.target || '_self'}
//                       rel={info.rel || ''}
//                       whileHover={{ x: 8 }}
//                       className="flex items-center space-x-4 text-gray-100 hover:text-[#C6A14B] transition-colors"
//                     >
//                       <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
//                         <info.icon className="w-6 h-6 text-[#C6A14B]" />
//                       </div>
//                       <span className="text-lg font-medium">{info.label}</span>
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Office Hours */}
//             <div className="bg-slate-900 p-8 rounded-xl text-white">
//               <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
//               <div className="space-y-2 text-slate-300">
//                 <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
//                 <p>Saturday: 10:00 AM - 2:00 PM</p>
//                 <p>Sunday: Closed</p>
//               </div>
//               <div className="mt-6 pt-6 border-t border-slate-700">
//                 <p className="text-sm text-slate-400">
//                   For urgent matters outside business hours, please email us and we'll respond as soon as possible.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    botcheck: '' // honeypot (anti spam)
  });

  // ✅ Tu access key de Web3Forms
  const WEB3FORMS_KEY = '902cf1db-58ea-41c7-93f2-edf00433c0bb';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (formData.botcheck) return;

    setLoading(true);
    try {
      const form = new FormData();
      form.append('access_key', WEB3FORMS_KEY);
      form.append('from_name', 'Renais Capital Website');
      form.append('subject', 'New Contact Submission — Renais Capital');
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('message', formData.message);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });
      const data = await res.json();

      if (data.success) {
        toast({
          title: 'Message Sent! ✅',
          description: "We've received your message. We'll contact you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', message: '', botcheck: '' });
      } else {
        toast({
          title: 'Error sending message',
          description: data.message || 'Please try again later.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Network error',
        description: 'Unable to send message. Try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📍 Información de contacto
  const contactInfo = [
    { icon: Phone, label: '+1 (929)665-4772', href: 'tel:+19296654772' },
    { icon: Mail, label: 'contact@renaiscapital.com', href: 'mailto:gimorales@renaiscapital.com' },
    {
      icon: MapPin,
      label: '515 Madison Avenue New York, NY 10022',
      href: 'https://www.google.com/maps?q=515+Madison+Avenue+New+York,+NY+10022',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase gold-accent mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Start Your Financial Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connect with our team of experts to explore how we can help achieve your financial goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORMULARIO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden honeypot */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your financing needs..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white group disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* CONTACT INFO con fondo que cubre completamente */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div
              className="relative p-8 rounded-xl shadow-lg text-white overflow-hidden flex flex-col justify-center items-start min-h-[420px]"
              style={{
                backgroundImage: "url('/515.jpg')",
                backgroundSize: 'cover', // ✅ la imagen cubre todo el fondo
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 85%',
              }}
            >
              {/* Overlay elegante */}
              <div className="absolute inset-0 bg-black/55 rounded-xl"></div>

              {/* Contenido */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.target || '_self'}
                      rel={info.rel || ''}
                      whileHover={{ x: 8 }}
                      className="flex items-center space-x-4 text-gray-100 hover:text-[#C6A14B] transition-colors"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <info.icon className="w-6 h-6 text-[#C6A14B]" />
                      </div>
                      <span className="text-lg font-medium">{info.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-slate-900 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-slate-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  For urgent matters outside business hours, please email us and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
