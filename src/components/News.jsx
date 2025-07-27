import React, { useState } from 'react';
import { format, parseISO, isThisMonth, isThisWeek } from 'date-fns';
import { FaCalendarAlt, FaNewspaper, FaSearch, FaRegCalendarCheck } from 'react-icons/fa';

const NewsEventsPage = () => {
  // Sample news data
  const [news] = useState([
    {
      id: 1,
      title: "New Research on Poultry Nutrition Published",
      date: "2025-07-15",
      category: "Research",
      excerpt: "Groundbreaking study reveals optimal nutrition formulas for layer hens, increasing egg production by 18%.",
      content: "A team of researchers from the Poultry Science Department has published a comprehensive study on layer hen nutrition. The 3-year study examined various feed formulas and their impact on egg production, shell quality, and hen health. Results show that a combination of specific amino acids and minerals can increase production by up to 18% while reducing feed costs by 12%."
    },
    {
      id: 2,
      title: "Annual Conference 2025 Registration Now Open",
      date: "2025-07-10",
      category: "Event",
      excerpt: "Join us for the premier poultry industry event in Chicago, October 15-17, 2025.",
      content: "We're excited to announce that registration is now open for the 2025 Poultry Professionals Society Annual Conference. This year's theme is 'Innovation in Poultry: Sustainable Practices for Tomorrow'. The event will feature over 50 speakers, 30 workshops, and networking opportunities with industry leaders from around the world."
    },
    {
      id: 3,
      title: "Industry Alert: New Biosecurity Guidelines",
      date: "2025-07-05",
      category: "Industry Update",
      excerpt: "Updated protocols released to combat emerging poultry diseases.",
      content: "In response to recent disease outbreaks in neighboring regions, the Poultry Professionals Society has released updated biosecurity guidelines for all members. These include enhanced sanitation protocols, visitor management procedures, and monitoring recommendations. All members are urged to review and implement these guidelines immediately."
    },
    {
      id: 4,
      title: "Student Research Grant Winners Announced",
      date: "2025-06-28",
      category: "Awards",
      excerpt: "Three students receive funding for innovative poultry research projects.",
      content: "The Poultry Professionals Society is proud to announce the winners of our 2025 Student Research Grants. Funding has been awarded to projects focusing on alternative protein sources, automated health monitoring systems, and waste management solutions. Each winner will receive $10,000 to support their research."
    },
  ]);

  // Sample events data
  const [events] = useState([
    {
      id: 1,
      title: "Poultry Health Workshop",
      date: "2025-08-10",
      time: "9:00 AM - 4:00 PM",
      location: "Virtual & In-Person (Chicago)",
      description: "Comprehensive workshop covering the latest in poultry disease prevention and treatment."
    },
    {
      id: 2,
      title: "Feed Formulation Seminar",
      date: "2025-08-22",
      time: "1:00 PM - 5:00 PM",
      location: "Virtual",
      description: "Learn cost-effective feed formulation strategies from industry experts."
    },
    {
      id: 3,
      title: "Annual Conference 2025",
      date: "2025-10-15",
      time: "8:00 AM",
      location: "Chicago Convention Center",
      description: "The premier event for poultry professionals featuring keynote speakers, workshops, and networking."
    },
    {
      id: 4,
      title: "Farm Biosecurity Webinar",
      date: "2025-09-05",
      time: "2:00 PM - 3:30 PM",
      location: "Virtual",
      description: "Best practices for maintaining biosecurity on poultry farms of all sizes."
    },
    {
      id: 5,
      title: "Student Research Symposium",
      date: "2025-11-12",
      time: "10:00 AM - 3:00 PM",
      location: "University of Illinois",
      description: "Showcasing innovative research from the next generation of poultry scientists."
    },
  ]);

  // State for filters and search
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);

  // Filter news based on category and search term
  const filteredNews = news.filter(item => {
    const matchesCategory = activeFilter === "all" || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filter events - for simplicity, we'll just display all events
  const upcomingEvents = events.filter(event => {
    const eventDate = parseISO(event.date);
    return isThisMonth(eventDate) || isThisWeek(eventDate) || new Date() < eventDate;
  });

  // Function to handle news item click
  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
  };

  // Function to close news detail view
  const closeNewsDetail = () => {
    setSelectedNews(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">News & Events</h1>
              <p className="mt-4 text-xl max-w-3xl">
                Stay updated with the latest research, industry news, and upcoming events in the poultry industry.
              </p>
            </div>
            <div className="hidden md:block">
              <FaNewspaper className="text-white opacity-20 w-32 h-32" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* News Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
              Latest News & Updates
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  className={`px-4 py-2 ${activeFilter === "all" ? "bg-blue-600 text-white" : "bg-white"}`}
                  onClick={() => setActiveFilter("all")}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 ${activeFilter === "Research" ? "bg-blue-600 text-white" : "bg-white"}`}
                  onClick={() => setActiveFilter("Research")}
                >
                  Research
                </button>
                <button
                  className={`px-4 py-2 ${activeFilter === "Event" ? "bg-blue-600 text-white" : "bg-white"}`}
                  onClick={() => setActiveFilter("Event")}
                >
                  Events
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleNewsClick(item)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{format(parseISO(item.date), 'MMM d, yyyy')}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                  <button className="mt-4 text-blue-600 font-medium flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <div className="flex items-center text-blue-600 font-medium">
              <FaRegCalendarCheck className="mr-2" />
              <span>Add to Calendar</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-12 py-3 px-4 bg-gray-50 text-gray-500 text-sm font-medium">
                    <div className="col-span-3">Date</div>
                    <div className="col-span-5">Event</div>
                    <div className="col-span-4">Location</div>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="grid grid-cols-12 py-4 px-4 hover:bg-blue-50">
                      <div className="col-span-3 flex items-center">
                        <FaCalendarAlt className="text-blue-600 mr-2" />
                        <div>
                          <div className="font-medium">{format(parseISO(event.date), 'MMM d, yyyy')}</div>
                          <div className="text-sm text-gray-500">{event.time}</div>
                        </div>
                      </div>
                      <div className="col-span-5">
                        <div className="font-medium text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-500">{event.description}</div>
                      </div>
                      <div className="col-span-4 text-gray-600">{event.location}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Calendar */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Event Calendar</h3>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold">August 2025</h4>
                  <div className="flex">
                    <button className="p-1 rounded hover:bg-gray-100">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 ml-2">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={index} className="text-center text-sm font-medium text-gray-500 py-1">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(31)].map((_, index) => {
                    const day = index + 1;
                    const hasEvent = [10, 22].includes(day);
                    return (
                      <div 
                        key={index} 
                        className={`text-center py-2 rounded-full relative ${
                          day === 10 ? 'bg-blue-100 font-bold' : 
                          day === 22 ? 'bg-green-100 font-bold' : 
                          'hover:bg-gray-100'
                        }`}
                      >
                        {day}
                        {hasEvent && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-bold mb-3">Key Events</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                    <div>
                      <div className="font-medium">Aug 10: Poultry Health Workshop</div>
                      <div className="text-sm text-gray-500">Chicago</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                    <div>
                      <div className="font-medium">Aug 22: Feed Formulation Seminar</div>
                      <div className="text-sm text-gray-500">Virtual</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {selectedNews.category}
                  </span>
                  <p className="text-gray-500 mt-2">
                    {format(parseISO(selectedNews.date), 'MMMM d, yyyy')}
                  </p>
                </div>
                <button 
                  onClick={closeNewsDetail}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <h2 className="text-3xl font-bold mt-4 mb-6 text-gray-900">{selectedNews.title}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{selectedNews.excerpt}</p>
                <p className="text-gray-700">{selectedNews.content}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-3">Share this article:</h3>
                <div className="flex space-x-3">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 3 5.3 3 9.24c0 2.4 1.9 5.44 5.13 6.54.38.08.5-.17.5-.38 0-.19-.01-.82-.01-1.49-1.85.34-2.3-.82-2.3-.82-.35-.86-.84-1.1-.84-1.1-.68-.44.05-.44.05-.44.76.05 1.16.76 1.16.76.67 1.13 1.75.81 2.18.62.07-.48.26-.81.48-1-.88-.1-1.8-.42-1.8-1.9 0-.42.15-.78.4-1.04-.13-.1-.17-.48 0-.98 0 0 .34-.1 1.1.4.32-.08.66-.13 1-.13.34 0 .68.05 1 .13.76-.5 1.1-.4 1.1-.4.17.5.04.88 0 .98.25.27.4.62.4 1.04 0 1.48-.92 1.8-1.8 1.9.27.23.5.69.5 1.4 0 1-.01 1.8-.01 2.05 0 .21.12.46.5.38 3.23-1.1 5.13-4.15 5.13-6.54C21 5.3 17.42 2 12.04 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-800 to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="mt-2 max-w-lg">
                Subscribe to our newsletter for the latest news, research updates, and event announcements in the poultry industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 w-full rounded-l-lg focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-r-lg hover:bg-yellow-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-sm opacity-75">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsPage;