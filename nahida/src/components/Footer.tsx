import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-p">
        Project by{' '}
        <Link 
          href="https://github.com/devjindal-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev Jindal
        </Link>{' '}
        on GitHub.
        <br />
        Game and character by{' '}
        <Link 
          href="https://genshin.hoyoverse.com/en/home?utm_source=fab&utm_medium=home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Genshin Hoyoverse
        </Link>
        .
      </p>
    </footer>
  );
};
