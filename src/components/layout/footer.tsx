import Link from 'next/link';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contacts' },
  ],
  services: [
    { name: 'Video Production', href: '/services/video-production' },
    { name: 'Event Coverage', href: '/services/event-coverage' },
    { name: 'Commercial Ads', href: '/services/commercial-ads' },
    { name: 'Post Production', href: '/services/post-production' },
  ],
  social: [
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
    { name: 'Vimeo', href: '#', icon: 'vimeo' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-display font-bold text-brand-primary">
              MediaStudio
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Professional video production studio creating stunning visual content for brands, 
              events, and creative projects. Bringing your vision to life with cutting-edge 
              technology and creative expertise.
            </p>
            <div className="mt-6 flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-brand-primary transition-colors duration-200"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="w-6 h-6 bg-current opacity-80 hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Phone</h4>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Email</h4>
            <p className="text-gray-300">hello@mediastudio.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-gray-300">123 Creative Ave, Studio City, CA 91604</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MediaStudio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}