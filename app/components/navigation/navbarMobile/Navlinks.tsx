'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { href: "/", label: "Home" },
  { href: "/calendar", label: "Calendar" },
  // { href: "/preview", label: "Preview" },
];

interface NavlinksProps {
  onClick: () => void;
}

const Navlinks: React.FC<NavlinksProps> = ({ onClick }) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link href={link.href} key={link.href} onClick={onClick} className={`${pathname === link.href ? "text-accentPrimary" : "text-mainText"} hover:text-accentPrimaryHover font-bold p-4`}>
          {link.label}
        </Link>
      ))}
    </>
  )
}

export default Navlinks
