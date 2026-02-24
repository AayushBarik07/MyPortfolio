import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_wgo8wec', 'template_zudlrrh', form.current, {
        publicKey: 'va0_xXIbVC3vM64Tl',
      })
      .then(
        () => {
          setIsSubmitted(true);
          setIsSubmitting(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section className="py-15 bg-black relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
            Let's <span className="font-light bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="mb-12">
              <h3 className="text-2xl font-light text-white mb-8">Get in Touch</h3>
              <div className="h-px w-16 bg-gradient-to-r from-amber-500 to-transparent mb-8"></div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 border border-white/10 group-hover:border-amber-500/50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-light text-sm uppercase tracking-wider mb-2">Email</h4>
                  <a href="mailto:superbsup45@gmail.com" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                    superbsup45@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 border border-white/10 group-hover:border-amber-500/50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 6.5C2 5.12 3.12 4 4.5 4h1.28c.54 0 1.03.33 1.22.84l1.06 2.83c.18.48.04 1.03-.36 1.37l-1.15 1a14.5 14.5 0 006.29 6.29l1-1.15c.34-.4.89-.54 1.37-.36l2.83 1.06c.51.19.84.68.84 1.22v1.28c0 1.38-1.12 2.5-2.5 2.5H18C9.16 22 2 14.84 2 6v.5z"/>
                  </svg>
                </div>

                <div>
                  <h4 className="text-white font-light text-sm uppercase tracking-wider mb-2">
                    Phone
                  </h4>
                  <a
                    href="tel:+919110911867"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    +91 91109 11867
                  </a>
                </div>
              </div>

              
              <div className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 border border-white/10 group-hover:border-amber-500/50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-light text-sm uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-gray-400">India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 border border-white/10 group-hover:border-amber-500/50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-light text-sm uppercase tracking-wider mb-2">Social</h4>
                  <div className="flex space-x-4 mt-3">
                    <a href="https://github.com/AayushBarik07" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/aayush-barik-49882b247/" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://x.com/aayush_barik?t=bWm06lh1NO0qEkfc4KMJpg&s=09" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.5 3h3.4l4.6 6.6L17.8 3H21l-6.8 9.3L21.5 21h-3.5l-5-7.1L7 21H3.5l7.3-10L4.5 3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-b from-gray-900/30 to-black/30 border border-white/5 p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-green-500/30 bg-green-500/10 mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">Message Sent Successfully</h3>
                  <p className="text-gray-400 font-light">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6" method="POST" autoComplete="off">
                  <div>
                    <label className="block text-xs font-light uppercase tracking-wider text-gray-400 mb-3" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-light uppercase tracking-wider text-gray-400 mb-3" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-light uppercase tracking-wider text-gray-400 mb-3" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors duration-300 resize-none"
                      rows="5"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative w-full py-4 overflow-hidden group transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'border border-white/20 hover:border-amber-500/50'
                    }`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                    {isSubmitting ? (
                      <span className="relative flex items-center justify-center text-white font-light tracking-wider uppercase text-sm">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="relative flex items-center justify-center text-white font-light tracking-wider uppercase text-sm">
                        Send Message
                        <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;