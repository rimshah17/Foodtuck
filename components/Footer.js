import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="subHeadingFooter ">
            <h3 className="text-2xl font-bold mainColor">
              Still You Need Our Support?
            </h3>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Don’t wait; make a smart & logical move here. It’s pretty easy.
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-800 border border-gray-700 text-sm text-white px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="buttonBg-color text-white px-6 py-2 rounded-r-md">Subscribe Now</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm text-gray-400">
              Corporate clients and leisure travelers have been relying on
              Cloudwalk for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="mt-4">
              <p className="text-sm font-bold">Opening Hours:</p>
              <p className="text-sm">Mon - Fri: 9:00 - 6:00</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-bold mb-4">Help?</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Term & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Reporting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Post */}
          <div>
            <h4 className="text-lg font-bold mb-4">Recent Post</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Image
                  src="https://via.placeholder.com/50"
                  alt="Post"
                  className="w-12 h-12 rounded object-cover mr-4"
                />
                <div>
                  <p className="text-sm text-gray-400">20 Feb 2022</p>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Keep Your Business Safe
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Post"
                  className="w-12 h-12 rounded object-cover mr-4"
                />
                <div>
                  <p className="text-sm text-gray-400">20 Feb 2022</p>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Keep Your Business Safe
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            Copyright © 2022 by Ayman. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
