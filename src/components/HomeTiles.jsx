import React from 'react';

const links = [
  { title: "About PPS", href: "#about" },
  { title: "Committees", href: "#committees" },
  { title: "Membership", href: "#membership" },
  { title: "News & Events", href: "#news" },
  { title: "Calendar", href: "#calendar" },
  { title: "Opportunities", href: "#opportunities" },
  { title: "Publications", href: "#publications" },
  { title: "Sponsors/Partners", href: "#sponsors" },
];

const HomeTiles = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        Explore PPS Programs and Resources
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
          >
            {link.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default HomeTiles;
