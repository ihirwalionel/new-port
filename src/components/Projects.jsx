import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

const projects = [
  {
    number: '01',
    title: 'Lycee de Nyanza',
    label: 'Official School Website',
    status: 'Live project',
    image: '/project-previews/lycee-de-nyanza.svg',
    siteUrl: 'https://lyceenyanza.vercel.app',
    sourceUrl: '#',
    description:
      'Official school website - responsive, multi-page, modern design for education institution in Nyanza, Rwanda. Built with clean HTML/CSS/JS.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
  },
  {
    number: '02',
    title: 'Abafollowers dot com',
    label: 'Social Media Growth',
    status: 'Live business',
    image: '/project-previews/abafollowers.svg',
    siteUrl: 'https://abafollowers.com',
    sourceUrl: '#',
    description:
      'Social media growth platform - Instagram followers service with MTN MoMo payment integration for the Rwandan market. Built with Next.js and Tailwind.',
    tools: ['Next.js', 'Tailwind', 'Payment API', 'Vercel'],
  },
  {
    number: '03',
    title: 'Kazingufu.com',
    label: 'Business Marketplace',
    status: 'Marketplace',
    image: '/project-previews/kazingufu.svg',
    siteUrl: 'https://kazingufu.com',
    sourceUrl: '#',
    description:
      'Full web platform - business listing and services marketplace. Built with WordPress, PHP, and MySQL for the Rwandan market.',
    tools: ['WordPress', 'PHP', 'MySQL'],
  },
  {
    number: '04',
    title: 'Neltech store',
    label: 'E-commerce Electronics',
    status: 'E-commerce',
    image: '/project-previews/nelplug.svg',
    siteUrl: 'https://cashiraa.com',
    sourceUrl: '#',
    description:
      'Premium electronics e-commerce platform - product catalog, categories, shopping cart, and delivery management for Rwandan customers.',
    tools: ['Next.js', 'React', 'Stripe', 'Vercel'],
  },
  {
    number: '05',
    title: 'Kairo Browser',
    label: 'Desktop Browser App',
    status: 'Desktop app',
    image: '/project-previews/kairo-browser.svg',
    siteUrl: 'https://github.com/ihirwalionel',
    sourceUrl: '#',
    description:
      'Custom web browser built with Electron - fast, lightweight, and privacy-focused for everyday browsing. Modern UI with tab management.',
    tools: ['Electron', 'JavaScript', 'Desktop App'],
  },
  {
    number: '06',
    title: 'NelDrive.vercel.app',
    label: 'Secure Cloud Storage',
    status: 'Cloud platform',
    image: '/project-previews/neldrive.svg',
    siteUrl: 'https://neldrive.vercel.app',
    sourceUrl: '#',
    description:
      'Secure cloud storage platform with terminal-style UI, AES-256 encryption, user authentication, and file management system. Built with Next.js.',
    tools: ['Next.js', 'Auth', 'AES-256', 'Vercel'],
  },
];

const ProjectCard = ({ project, index, progress, containerRef }) => {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(progress, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardCenter = cardRect.top - containerRect.top + cardRect.height * 0.45;
    const progressY = latest * containerRect.height;

    setIsActive(progressY >= cardCenter);
  });

  return (
    <motion.article
      ref={cardRef}
      data-aos="fade-up"
      data-aos-delay={(index % 2) * 120}
      initial={{ opacity: 0, y: 35, rotate: index % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -6, rotate: index % 2 === 0 ? 0.4 : -0.4 }}
      className={`group relative rounded-2xl border p-5 md:p-6 transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] border-red-400 shadow-[0_24px_70px_rgba(255,42,42,0.28)]'
          : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.07] hover:border-[#ff2a2a]/60'
      }`}
    >
      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide transition-colors duration-700 ${
            isActive ? 'bg-white text-[#ff2a2a]' : 'bg-[#ff2a2a] text-white'
          }`}
        >
          {project.status}
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-700 ${
            isActive
              ? 'bg-white text-[#ff2a2a] shadow-[0_12px_30px_rgba(0,0,0,0.18)]'
              : 'bg-[#ff2a2a] text-white shadow-[0_12px_30px_rgba(255,42,42,0.28)]'
          }`}
        >
          {project.number}
        </div>
        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">
            {project.title}
          </h3>
          <p className={`text-sm font-bold mt-1 transition-colors duration-700 ${isActive ? 'text-red-100' : 'text-[#ff6b6b]'}`}>
            {project.label}
          </p>
        </div>
      </div>

      <p className={`text-sm md:text-base leading-relaxed font-medium mt-5 transition-colors duration-700 ${isActive ? 'text-white/90' : 'text-white/65'}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className={`rounded-full border px-3 py-1 text-xs font-bold transition-colors duration-700 ${
              isActive
                ? 'border-white/25 bg-white/15 text-white'
                : 'border-white/10 bg-white/[0.05] text-white/70'
            }`}
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href={project.siteUrl}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition-colors ${
            isActive
              ? 'bg-black text-white hover:bg-white hover:text-black'
              : 'bg-white text-black hover:bg-[#ff2a2a] hover:text-white'
          }`}
        >
          View site <span aria-hidden="true">-&gt;</span>
        </a>
        <a
          href={project.sourceUrl}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black transition-colors ${
            isActive
              ? 'border-white/30 text-white hover:bg-white hover:text-black'
              : 'border-white/20 text-white hover:border-[#ff2a2a] hover:text-[#ff2a2a]'
          }`}
        >
          Source <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0a0a0a] text-white py-20 md:py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="hidden md:block absolute left-1/2 top-44 bottom-0 w-px bg-[#ff2a2a] origin-top pointer-events-none"
          style={{ scaleY: progress }}
        />
        <div className="hidden md:block absolute left-1/2 top-44 bottom-0 w-px bg-white/10 pointer-events-none" />

        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/70 font-bold mb-5 bg-white/5">
              Real projects
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-2xl">
              Projects I have built
            </h2>
          </div>
          <p className="text-white/60 text-base max-w-md font-medium leading-relaxed">
            Real websites, platforms, and apps built for education, business, e-commerce, cloud storage, and desktop browsing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              progress={progress}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
