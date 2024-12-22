// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 px-8 bg-gray-900 text-white">
      <nav className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">Claude Bejjani - Full-Stack Web Developer</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">Resume</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/contact-Claude-Bejjani-web-developer">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
