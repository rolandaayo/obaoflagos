"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      e.preventDefault();
      const searchUrl = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      window.location.href = searchUrl;
    }
  };

  return (
    <>
      <motion.nav
        // initial={{ y: -100 }}
        // animate={{ y: 0 }}
        className={`bg-white fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-green-700 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              OBA OF LAGOS
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/pages/gallery">{t("Gallery")}</NavLink>
              <NavLink href="/pages/about">{t("about")}</NavLink>
              <NavLink href="/pages/theking">{t("obaAkiolu")}</NavLink>
              <div className="relative group">
                <NavLink href="#">{t("history")}</NavLink>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-xl rounded-lg py-2 mt-2 transition-all duration-300">
                  <DropdownLink href="/pages/1600-1700-ado">
                    Year (1600-1700)
                  </DropdownLink>
                  <DropdownLink href="/pages/1701-1800-semoyin">
                    Year (1701-1800)
                  </DropdownLink>
                  <DropdownLink href="/pages/1801-1900/ajosun">
                    Year (1801-1900)
                  </DropdownLink>
                  <DropdownLink href="/pages/history/modern">
                    Year (1901-2000)
                  </DropdownLink>
                </div>
              </div>
              <NavLink href="/pages/blog">{t("blog")}</NavLink>
              <NavLink href="/pages/contact">{t("contact")}</NavLink>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-full bg-green-700 text-white hover:bg-green-800 transition-colors duration-300"
              >
                {language === "english" ? "YO" : "EN"}
              </motion.button>
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-700 p-2 rounded-full hover:bg-green-800 transition-colors duration-300"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </motion.button>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-64"
                  >
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleSearch}
                    />
                  </motion.div>
                )}
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-green-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Scrolling Sub Navigation */}
        <div className="container mx-auto px-4 py-4 block border-t overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <ul className="inline-flex space-x-4 md:space-x-8 text-xs md:text-sm text-gray-600">
              <li className="relative group">
                <motion.a
                  href="/pages/1600-1700-ado"
                  className="hover:text-green-700 font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  {t("foundingMonarch")} (1600-1700)
                </motion.a>
                <ul className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 z-50">
                  <li>
                    <DropdownLink href="/pages/1600-gabaro">
                      Oba Gabaro (1669–1704)
                    </DropdownLink>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <motion.a
                  href="/pages/1701-1800-semoyin"
                  className="hover:text-green-700 font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  Oba Akin Semoyin (1701-1800)
                </motion.a>
                <ul className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-60 z-50">
                  <li>
                    <DropdownLink href="/pages/1749-1775-eletu">
                      Oba Eletu Kekere (1749–1775)
                    </DropdownLink>
                  </li>
                  <li>
                    <DropdownLink href="/pages/1775-1801-ologun">
                      Oba Ologun Kutere (1775–1801)
                    </DropdownLink>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <motion.a
                  href="/pages/1801-1900-ajosun"
                  className="hover:text-green-700 font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  Oba Adele Ajosun (1801-1900)
                </motion.a>
                <ul className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-80 z-50">
                  <li>
                    <DropdownLink href="/pages/1801-1900/ajosun">
                      Oba Adele Ajosun (1801-1900)
                    </DropdownLink>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <motion.a
                  href="/pages/1901-2000-oyekan"
                  className="hover:text-green-700 font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  Oba Oyekan I (1901-2000)
                </motion.a>
                <ul className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-70 z-50">
                  <li>
                    <DropdownLink href="/pages/1901-2000-oyekan">
                      Oba Oyekan I (1901-2000)
                    </DropdownLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
      <div className="h-24"></div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

// Helper Components
const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-700 hover:text-green-700 font-semibold transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const DropdownLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-300"
    whileHover={{ x: 5 }}
  >
    {children}
  </motion.a>
);
