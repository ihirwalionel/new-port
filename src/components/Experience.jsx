const milestones = [
  {
    year: '2023',
    title: 'Frontend foundations',
    text: 'Built responsive interfaces with HTML, CSS, JavaScript, and modern layout systems.',
  },
  {
    year: '2024',
    title: 'React and full-stack growth',
    text: 'Moved into React, Node.js, API integration, authentication, and production-ready UI workflows.',
  },
  {
    year: '2025',
    title: 'Business platforms',
    text: 'Created marketplace, e-commerce, and service platforms for real users and local businesses.',
  },
  {
    year: '2026',
    title: 'Modern product builder',
    text: 'Focused on fast deployments, payment integrations, cloud storage, desktop apps, and polished portfolio work.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white text-gray-950 py-20 md:py-28 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-12 max-w-3xl">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-5 bg-white">
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            My development journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {milestones.map((item, index) => (
            <article
              key={item.year}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-2xl border border-gray-200 bg-[#f7f7f7] p-6 hover:border-[#ff2a2a] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="text-[#ff2a2a] text-sm font-black mb-4">{item.year}</div>
              <h3 className="text-xl font-black tracking-tight mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
