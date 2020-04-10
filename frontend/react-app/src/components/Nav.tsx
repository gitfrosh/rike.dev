import React from 'react';
import './Nav.css';

function Nav() {
    const segment : string = "page"

  return (
    <header>
    <nav>
      <a aria-current={segment === undefined ? 'page' : undefined} href="/">
        home
      </a>
      <a aria-current={segment === 'projects' ? 'page' : undefined} href="/projects">
        projects
      </a>

      
      <a
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="/blog">
        blog
      </a>
    </nav>

</header>

  );
}

export default Nav;