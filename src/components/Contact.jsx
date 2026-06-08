import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');
    setStatusMessage('Sending your message...');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Message failed');
      }

      setStatus('success');
      setStatusMessage('Message sent successfully. I will contact you soon.');
      form.reset();
    } catch {
      setStatus('error');
      setStatusMessage('Message failed to send. Please try again.');
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full flex justify-center overflow-hidden pointer-events-none z-0 pt-6 md:pt-0"
      >
        <h1 
          className="text-[18vw] leading-none font-black text-white/10 uppercase tracking-normal select-none"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-20 md:pt-32">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full p-7 md:p-12 text-white flex flex-col justify-between rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-10 md:mb-14 uppercase opacity-90">
            Reach Us
          </div>

          <form
            action="https://formspree.io/f/mpwpjnrd"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 md:gap-12 w-full"
          >
            <input type="hidden" name="_subject" value="New portfolio contact message" />
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    placeholder="First Name" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Email" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder="Phone Number" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message here" 
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  name="permission"
                  required
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address or phone number.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by NELTECH GROUP IN CORPORATION WITH the Google <a href="https://NELTECHGROUP.VERCEL.APP" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                  </p>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send'}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                {statusMessage && (
                  <div
                    role="status"
                    className={`rounded-xl border px-4 py-3 text-sm font-black ${
                      status === 'success'
                        ? 'border-white/30 bg-white text-[#ff2a2a]'
                        : status === 'error'
                          ? 'border-black/20 bg-black text-white'
                          : 'border-white/30 bg-white/10 text-white'
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
