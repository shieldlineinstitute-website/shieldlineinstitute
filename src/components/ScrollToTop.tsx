import { MouseEvent, useEffect } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const ScrollToTopLink = ({ onClick, ...props }: LinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (onClick) onClick(event);
  };

  return <Link {...props} onClick={handleClick} />;
};
