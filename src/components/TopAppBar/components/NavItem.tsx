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
  // Match on pathname or full asPath for query-param routes
  const isNavItemActive =
    router.asPath === href || router.asPath.split('?')[0] === href?.split('?')[0] && href?.includes('?') && router.asPath.includes(href?.split('?')[1] || '');
  const activeStyle = isNavItemActive
    ? { textShadow: '0 0 10px rgba(0, 255, 136, 0.3)' }
    : undefined;

  return (
    <Link
      href={href}
      className={`md:text-base text-2xl font-bold p-4 whitespace-nowrap transition-all duration-300 ${
        isNavItemActive ? 'text-neon' : 'text-neutral-400 hover:text-neon/80'
      }`}
      style={activeStyle}
      {...rest}
    >
      {children}
    </Link>
  );
}
