'use client'; // Mark this file as a client component

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; // Correct path to Navbar component

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  // Intersection Observer for Welcome section (fade in effect)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(document.getElementById('welcome'));
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for Contact section (fade in effect)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContactVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(document.getElementById('contact'));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section without section-wide animation */}
      <section
        id="welcome"
        className="relative bg-cover bg-center h-[70vh] pt-20 sm:pt-32 md:pt-40"
        style={{
          backgroundImage: "url('/bowling-bg.jpg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 text-center text-white p-6 sm:p-8">
          {/* Header Animation */}
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}
          >
            Welcome to <span className="text-yellow-400">Space Bowling</span>
          </h1>

          {/* Paragraph Animation */}
          <p
            className={`text-lg sm:text-xl mb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-200`}
          >
            Experience strikes, spares, and memories in the heart of Greece!
          </p>

          {/* Button Animation */}
          <a
            href="#services"
            className={`bg-yellow-500 text-black py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-110 focus:ring-4 focus:ring-yellow-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-400`}
          >
            Discover Our Services
          </a>
        </div>
      </section>


      {/* About Section with pop-in effect (no section-wide animation) */}
      <section id="about" className="py-16 px-8 bg-gray-100 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          About Us
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 delay-200`}
        >
          Space Bowling is a fun, vibrant, and unique bowling bar located in Greece. Come enjoy our fantastic lanes, delicious food, and great company.
        </p>
      </section>

      {/* Services Section with pop-in effect (no section-wide animation) */}
      <section id="services" className="py-16 px-8 bg-white text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Item 1 */}
          <div
            className={`bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000 delay-200`}
          >
            <h3 className="text-xl font-semibold mb-4">Bowling Lanes</h3>
            <p>Enjoy our premium bowling lanes with automatic scoring and plenty of space for groups.</p>
          </div>
          {/* Service Item 2 */}
          <div
            className={`bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000 delay-400`}
          >
            <h3 className="text-xl font-semibold mb-4">Food & Drinks</h3>
            <p>We offer a variety of delicious snacks, meals, and drinks to keep you fueled up for fun.</p>
          </div>
          {/* Service Item 3 */}
          <div
            className={`bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000 delay-600`}
          >
            <h3 className="text-xl font-semibold mb-4">Events</h3>
            <p>Book our space for private events, tournaments, and parties. We’ll handle the details.</p>
          </div>
        </div>
      </section>

      {/* Contact Section with pop-in effect (no section-wide animation) */}
      <section
        id="contact"
        className="py-16 px-8 bg-gray-900 text-white"
      >
        <h2
          className={`text-4xl font-bold mb-4 text-center ${
            isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div
            className={`mb-4 ${
              isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000`}
          >
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 text-gray-800 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div
            className={`mb-4 ${
              isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000 delay-200`}
          >
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 text-gray-800 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div
            className={`mb-4 ${
              isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-1000 delay-400`}
          >
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 text-gray-800 rounded-lg"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
