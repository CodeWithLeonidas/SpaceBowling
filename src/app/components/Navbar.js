// src/app/components/Navbar.js
export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Space Bowling</h1>
          <ul className="flex space-x-6">
            <li className="relative">
              <a
                href="#home"
                className="relative inline-block text-white group transform transition-all hover:translate-y-[-5px] duration-500"
              >
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400 transform -translate-x-1/2 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative">
              <a
                href="#about"
                className="relative inline-block text-white group transform transition-all hover:translate-y-[-5px] duration-500"
              >
                About
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400 transform -translate-x-1/2 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative">
              <a
                href="#open-hours"
                className="relative inline-block text-white group transform transition-all hover:translate-y-[-5px] duration-500"
              >
                Open Hours
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400 transform -translate-x-1/2 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative">
              <a
                href="#services"
                className="relative inline-block text-white group transform transition-all hover:translate-y-[-5px] duration-500"
              >
                Services
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400 transform -translate-x-1/2 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative">
              <a
                href="#contact"
                className="relative inline-block text-white group transform transition-all hover:translate-y-[-5px] duration-500"
              >
                Contact
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400 transform -translate-x-1/2 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  