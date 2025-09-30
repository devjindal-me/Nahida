import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Image 
          src="/assets/logo.svg" 
          alt="logo" 
          width={200} 
          height={50} 
          priority
        />
        <nav className="header-menu">
          <a href="#profile">Profile</a>
          <a href="#history">History</a>
          <a href="#skills">Skills</a>
        </nav>
        <Link 
          href="https://devjindal.me" 
          id="port-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio
        </Link>
      </div>
    </header>
  );
};
