'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navigation() {
  const pathname = usePathname();
  console.log('hello');

  console.log(pathname);
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>Home</Link> {pathname === '/' ? '⭐️' : ''}
        </li>
        <li>
          <Link href={'/about-us'}>About Us</Link> {pathname === '/about-us' ? '⭐️' : ''}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
