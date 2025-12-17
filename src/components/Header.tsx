import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from 'figma:asset/fc4a7f2c4f5c238cb5928f70172c7c72565bd3ee.png';

export function Header() {
  const location = useLocation();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const aboutPages = [
    { name: 'Company', path: '/company' },
    { name: 'Leadership', path: '/leadership' },
  ];

  const servicePages = [
    { name: 'PeopleSoft', path: '/services/peoplesoft' },
    { name: 'NetSuite', path: '/services/netsuite' },
    { name: 'OneStream', path: '/services/onestream' },
    { name: 'SAP', path: '/services/sap' },
    { name: 'Oracle', path: '/services/oracle' },
  ];

  const solutionPages = [
    { name: 'Enterprise Solutions', path: '/solutions/enterprise' },
    { name: 'Digital Transformation', path: '/solutions/digital-transformation' },
    { name: 'Robotic Process Automation', path: '/solutions/rpa' },
    { name: 'Cyber Security', path: '/solutions/cybersecurity' },
    { name: 'Management Consulting', path: '/solutions/consulting' },
    { name: 'Outsourcing Services', path: '/solutions/outsourcing' },
    { name: 'Staffing Solutions', path: '/solutions/staffing' },
  ];

  const isActivePath = (path: string) => location.pathname === path;
  const isActiveSection = (paths: string[]) => paths.some(path => location.pathname.startsWith(path));

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Ijnag Consultancy Services" className="h-14 md:h-16 lg:h-20 transition-all" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-[#FFCC33] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`transition-colors ${
              isActivePath('/')
                ? 'text-[#FFCC33]'
                : 'text-gray-700 hover:text-[#FFCC33]'
            }`}
          >
            Home
          </Link>

          <div 
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-2 ${
                isActiveSection(['/company', '/leadership'])
                  ? 'text-[#FFCC33]'
                  : 'text-gray-700 hover:text-[#FFCC33]'
              }`}
            >
              About
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 transition-all duration-200 ${
              aboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              {aboutPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className={`block px-4 py-2 transition-colors ${
                    isActivePath(page.path)
                      ? 'bg-[#FFCC33] text-black'
                      : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-2 ${
                location.pathname.startsWith('/services')
                  ? 'text-[#FFCC33]'
                  : 'text-gray-700 hover:text-[#FFCC33]'
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 transition-all duration-200 ${
              servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <Link
                to="/services"
                className={`block px-4 py-2 transition-colors ${
                  isActivePath('/services')
                    ? 'bg-[#FFCC33] text-black'
                    : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                }`}
              >
                All Services
              </Link>
              {servicePages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className={`block px-4 py-2 transition-colors ${
                    isActivePath(page.path)
                      ? 'bg-[#FFCC33] text-black'
                      : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-2 ${
                location.pathname.startsWith('/solutions')
                  ? 'text-[#FFCC33]'
                  : 'text-gray-700 hover:text-[#FFCC33]'
              }`}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 transition-all duration-200 ${
              solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <Link
                to="/solutions"
                className={`block px-4 py-2 transition-colors ${
                  isActivePath('/solutions')
                    ? 'bg-[#FFCC33] text-black'
                    : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                }`}
              >
                All Solutions
              </Link>
              {solutionPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className={`block px-4 py-2 transition-colors ${
                    isActivePath(page.path)
                      ? 'bg-[#FFCC33] text-black'
                      : 'text-gray-700 hover:bg-[#FFCC33] hover:text-black'
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/partners"
            className={`transition-colors ${
              isActivePath('/partners')
                ? 'text-[#FFCC33]'
                : 'text-gray-700 hover:text-[#FFCC33]'
            }`}
          >
            Partners
          </Link>

          <Link
            to="/contact"
            className={`transition-colors ${
              isActivePath('/contact')
                ? 'text-[#FFCC33]'
                : 'text-gray-700 hover:text-[#FFCC33]'
            }`}
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`py-3 px-4 rounded-lg transition-colors ${
              isActivePath('/')
                ? 'bg-[#FFCC33] text-black'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Home
          </Link>

          {/* Mobile About Dropdown */}
          <div>
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                isActiveSection(['/company', '/leadership'])
                  ? 'bg-[#FFCC33] text-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileAboutOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {aboutPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      isActivePath(page.path)
                        ? 'bg-[#FFCC33] text-black'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                location.pathname.startsWith('/services')
                  ? 'bg-[#FFCC33] text-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    isActivePath('/services')
                      ? 'bg-[#FFCC33] text-black'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All Services
                </Link>
                {servicePages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      isActivePath(page.path)
                        ? 'bg-[#FFCC33] text-black'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Solutions Dropdown */}
          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                location.pathname.startsWith('/solutions')
                  ? 'bg-[#FFCC33] text-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/solutions"
                  onClick={closeMobileMenu}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    isActivePath('/solutions')
                      ? 'bg-[#FFCC33] text-black'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All Solutions
                </Link>
                {solutionPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      isActivePath(page.path)
                        ? 'bg-[#FFCC33] text-black'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/partners"
            onClick={closeMobileMenu}
            className={`py-3 px-4 rounded-lg transition-colors ${
              isActivePath('/partners')
                ? 'bg-[#FFCC33] text-black'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Partners
          </Link>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className={`py-3 px-4 rounded-lg transition-colors ${
              isActivePath('/contact')
                ? 'bg-[#FFCC33] text-black'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}