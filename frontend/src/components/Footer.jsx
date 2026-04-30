export default function Footer() {
    return (
      <footer className="bg-[#1f1f27] text-white px-8 py-20">
        <div className="mx-auto max-w-[1400px] grid gap-12 md:grid-cols-3">
  
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Star eye</h2>
            <p className="text-gray-300 leading-7">
              Star eye General Contracting Inc. has completed multiple projects with
              exceptional safety and customer satisfaction. We are known for
              superior workmanship and reliable service.
            </p>
  
            <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
            </div>
          </div>
  
          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact Us</li>
              
            </ul>
  
            <h3 className="text-xl font-semibold mt-10 mb-4">Timings</h3>
            <p className="text-gray-300">Mon – Fri: 8:30 AM to 6:00 PM</p>
            <p className="text-gray-300 mt-2">Sat & Sun: Closed</p>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li>Greater Toronto Area, ON</li>
          
              <li>info@stareye.ca</li>
              <li>(416)618-4222</li>
            </ul>
          </div>
  
        </div>
  
        {/* Bottom */}
        <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400">
          © 2026 All Rights Reserved – Stareye Electrical
        </div>
      </footer>
    );
  }