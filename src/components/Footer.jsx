import SocialLinks from './SocialLinks';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-white px-6 md:px-12 pt-20 pb-8 w-full font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr_0.75fr] gap-10 lg:gap-16 pb-14">
          <div>
            <a href="#" className="inline-flex items-center text-3xl md:text-4xl font-black tracking-tight mb-6">
              IT LIONEL<span className="text-[#ff2a2a]">.</span>
            </a>
            <p className="text-white/65 text-base md:text-lg leading-relaxed font-medium max-w-xl mb-8">
              Full-stack developer building modern websites, business platforms, e-commerce tools, desktop apps, and cloud products for real users.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#ff2a2a] px-6 py-3 text-sm font-black text-white hover:bg-white hover:text-black transition-colors"
              >
                View Projects
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-black text-white hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#ff2a2a] mb-6">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white font-bold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#ff2a2a] mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-white/70 font-bold">
              <a href="mailto:lionel@abafollowers.com" className="hover:text-white transition-colors">
                lionel@abafollowers.com
              </a>
              <a href="tel:+250787864583" className="hover:text-white transition-colors">
                +250 000 000 000
              </a>
              <a href="https://wa.me/250787864583" className="hover:text-white transition-colors">
                WhatsApp
              </a>
              <p>Kigali, Rwanda</p>
            </div>

            <div className="mt-8">
              <SocialLinks compact />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-y border-white/10 py-10 md:py-14">
          <p className="text-[18vw] md:text-[13vw] leading-none font-black lowercase text-white/[0.06] select-none text-center">
            lionel
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-[#080808]/80 px-7 py-3 text-sm font-black text-white backdrop-blur-md hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-colors"
            >
              Let&apos;s build something
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 text-xs font-bold text-white/45">
          <p>&copy; {new Date().getFullYear()} IT Hirwa Lionel. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-colors">Hire Me</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
