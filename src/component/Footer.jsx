import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">MyLogo</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Building modern websites using React and Tailwind CSS.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">Email</span>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
       12 feb 2026 MyWebsite. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
