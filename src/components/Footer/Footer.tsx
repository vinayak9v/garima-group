import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f8f9fa] border-t border-gray-200">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-10 md:py-12 flex flex-col items-center">
        {/* Top Section: Accreditations */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-10 w-full">
          {/* CBSE Affiliation */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center p-2 rounded-full border border-teal-200 bg-white shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 h-8 text-teal-600"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-[#1c1b1b] text-base md:text-lg">
                CBSE Affiliation
              </span>
              <span className="font-body text-[#4b5563] text-sm leading-tight">
                Official CBSE
                <br />
                Certification #235577
              </span>
            </div>
          </div>

          {/* MP Board Recognition */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center p-2 rounded-full border border-blue-200 bg-white shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 h-8 text-blue-600"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
                <path d="M6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M14 6v6" />
                <path d="M10 6v6" />
                <line x1="8" y1="16" x2="16" y2="16" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-[#1c1b1b] text-base md:text-lg">
                MP Board Recognition
              </span>
              <span className="font-body text-[#4b5563] text-sm leading-tight">
                MP Board Recognition
                <br />
                Certification #3220227
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[95%] h-px bg-gray-200 mb-6" />

        {/* Bottom Section: Links & Social */}
        <div className="w-full max-w-[95%] flex flex-col items-center justify-center gap-8 mb-6">
          {/* Detailed Sitemap Navigation */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-b border-gray-200 pb-8">
            {/* Column 1: Institutions */}
            <div className="flex flex-col gap-3">
              <h4 className="font-heading font-bold text-lg text-[#1c1b1b] mb-2">
                Our Institutions
              </h4>
              <Link
                href="/institutions#garima-vidya-vihar"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Garima Vidya Vihar (CBSE)
              </Link>
              <Link
                href="/institutions#shree-garima-vidya-mandir"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Shree Garima Vidya Mandir
              </Link>
              <Link
                href="/institutions#preschool"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Little Garimayans Preschool
              </Link>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-3">
              <h4 className="font-heading font-bold text-lg text-[#1c1b1b] mb-2">
                Quick Links
              </h4>
              <Link
                href="/about"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/innovation"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Innovation & Tech
              </Link>
              <Link
                href="/media"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Media & Events
              </Link>
              <Link
                href="/blog"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Blog & Insights
              </Link>
            </div>

            {/* Column 3: Get in Touch */}
            <div className="flex flex-col gap-3">
              <h4 className="font-heading font-bold text-lg text-[#1c1b1b] mb-2">
                Get in Touch
              </h4>
              <Link
                href="/admissions"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Admissions Portal
              </Link>
              <Link
                href="/franchise"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Partner With Us
              </Link>
              <Link
                href="/contact"
                className="font-body text-sm font-medium text-gray-500 hover:text-[#a71515] transition-colors"
              >
                Contact Directory
              </Link>
            </div>
          </div>

          {/* Bottom Bar: Socials & Copyright */}
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <span className="font-body text-xs font-semibold text-gray-400">
              © {new Date().getFullYear()} Garima Group Education. All Rights
              Reserved.
            </span>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f4f7f9] text-gray-600 hover:bg-[#a71515] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.7 9-11.25z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f4f7f9] text-gray-600 hover:bg-[#a71515] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#f4f7f9] text-gray-600 hover:bg-[#a71515] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/garimagroup_indore?igsh=MXdtcm5jMmVsZ2hqMQ=="
                className="w-10 h-10 rounded-full bg-[#f4f7f9] text-gray-600 hover:bg-[#a71515] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full pb-8 flex justify-center">
        <p className="font-body text-[#4b5563] text-xs md:text-sm font-medium">
          &copy; {currentYear} Garima Group Education. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
