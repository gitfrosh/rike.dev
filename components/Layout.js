import Link from "next/link";

const Nav = () => (
  <nav className="nav">
    <div className="container">
      <Link href="/" className="brand">
        <span>rike.dev</span>
      </Link>
      <ul>
        <li><a href="/#work">Work</a></li>
        <li><a href="/#talks">Talks</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <span>© {new Date().getFullYear()} Ulrike Exner</span>
      <ul>
        <li>
          <a href="https://github.com/gitfrosh/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ulrike-exner-80aa28205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <Link href="/legal">Legal</Link>
        </li>
      </ul>
    </div>
  </footer>
);

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
