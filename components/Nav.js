import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
      {/* navigation */}
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/services">
          <a>Services</a>
        </Link>
        {' | '}
        <Link href="/movies">
          <a>Movies</a>
        </Link>
        {' | '}
        <Link href="/aboutus">
          <a>About US</a>
        </Link>
      </nav>
    </>
  )
}
