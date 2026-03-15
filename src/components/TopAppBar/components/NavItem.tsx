import { LinkHTMLAttributes, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface NavItemProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  target?: string;
}

export function NavItem({ children, href, ...rest }: NavItemProps) {
  const router = useRouter();
  const isNavItemActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`md:text-base text-2xl font-bold p-4 whitespace-nowrap transition-all duration-300 ${
        isNavItemActive
          ? 'text-neon'
          : 'text-neutral-400 hover:text-neon/80'
      }`}
      style={isNavItemActive ? { textShadow: '0 0 10px rgba(0, 255, 136, 0.3)' } : {}}
      {...rest}
    >
      {children}
    </Link>
  );
}
