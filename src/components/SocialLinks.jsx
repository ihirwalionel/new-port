const icons = {
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.2-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.93c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M5.34 7.74a2.37 2.37 0 1 1 0-4.74 2.37 2.37 0 0 1 0 4.74ZM3.3 21h4.08V9.15H3.3V21Zm6.38-11.85V21h4.08v-5.86c0-1.55.29-3.05 2.21-3.05 1.9 0 1.92 1.78 1.92 3.15V21H22v-6.49c0-3.19-.68-5.64-4.41-5.64-1.79 0-2.99.98-3.48 1.91h-.05V9.15H9.68Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.1a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM12 7.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Z" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12.04 2a9.86 9.86 0 0 0-8.48 14.88L2.2 22l5.25-1.34A9.86 9.86 0 1 0 12.04 2Zm0 1.97a7.89 7.89 0 0 1 6.68 12.08 7.9 7.9 0 0 1-9.84 2.8l-.36-.18-3.12.8.81-3.03-.2-.38a7.89 7.89 0 0 1 6.03-12.09Zm-3.23 3.8c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.17.86 2.31.98 2.47.12.16 1.67 2.68 4.12 3.65 2.03.8 2.45.64 2.9.6.44-.04 1.43-.59 1.63-1.16.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.41h-.46Z" />
    </svg>
  ),
};

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ihirwalionel', icon: icons.GitHub },
  { label: 'LinkedIn', href: 'https://instagram.com/ih.lionel', icon: icons.LinkedIn },
  { label: 'Instagram', href: 'https://instagram.com/i.t.lionel', icon: icons.Instagram },
  { label: 'WhatsApp', href: 'wa.me/250787864583', icon: icons.WhatsApp },
];

const SocialLinks = ({ compact = false, onClick }) => {
  return (
    <div className={`flex flex-wrap items-center ${compact ? 'gap-2' : 'gap-3'}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClick}
          aria-label={link.label}
          title={link.label}
          className={`inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-colors ${
            compact ? 'w-10 h-10' : 'w-11 h-11'
          }`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
