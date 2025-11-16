import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children, external }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (!external) {
      e.preventDefault();
      navigate(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <li>
      <a
        href={to}
        onClick={handleClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

export default FooterLink;