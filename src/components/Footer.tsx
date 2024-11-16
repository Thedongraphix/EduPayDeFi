import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Edupay</h3>
            <p className="text-gray-400">Revolutionizing school payments with crypto solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-gray-300">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-gray-300">How It Works</Link></li>
              <li><Link href="#pricing" className="hover:text-gray-300">Pricing</Link></li>
              <li><Link href="#faq" className="hover:text-gray-300">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300"><Facebook /></Link>
              <Link href="#" className="hover:text-gray-300"><Twitter /></Link>
              <Link href="#" className="hover:text-gray-300"><Instagram /></Link>
              <Link href="#" className="hover:text-gray-300"><Linkedin /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Edupay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}