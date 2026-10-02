import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1><Link href="/">BIT LINKS</Link></h1>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">About</Link></li>
        <li>
          <button>
            <Link href="https://github.com/nishantrana012" className="bg-white font-semibold text-blue-500 px-4 py-1 rounded hover:bg-blue-50">
              GitHub
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
