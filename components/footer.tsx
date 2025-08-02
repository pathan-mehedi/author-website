import Link from "next/link";
import { Mail, MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <span className="text-xl font-bold">Alexandra Sterling</span>
            </div>
            <p className="text-gray-400 text-sm">
              New York Times bestselling author crafting worlds that captivate
              hearts and minds.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Follow on Twitter"
              >
                <span className="text-xs font-bold">T</span>
              </Link>
              <Link
                href="https://facebook.com"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                aria-label="Follow on Facebook"
              >
                <span className="text-xs font-bold">F</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                aria-label="Follow on Instagram"
              >
                <span className="text-xs font-bold">I</span>
              </Link>
              <Link
                href="https://goodreads.com"
                className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                aria-label="Follow on Goodreads"
              >
                <span className="text-xs font-bold">G</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/books"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Alexandra
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog & News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Genres</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Fantasy</span>
              </li>
              <li>
                <span className="text-gray-400">Science Fiction</span>
              </li>
              <li>
                <span className="text-gray-400">Romance</span>
              </li>
              <li>
                <span className="text-gray-400">Thriller</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <a
                  href="mailto:hello@alexandrasterling.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hello@alexandrasterling.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">Seattle, WA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Alexandra Sterling. All rights
            reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Design & Developed with <Heart className="h-4 w-4 text-red-500" />{" "}
            by{" "}
            <span className="text-purple-400 font-medium">Mehedi Pathan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
