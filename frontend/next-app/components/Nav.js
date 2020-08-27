import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  display: inline-block;
  color: #242424;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-right: 30px;
  padding: 5px;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

function Nav() {
  return (
    <>
      <header>
        <nav role="navigation">
          <div id="menuBig">
            <Link href="/projects">
              <StyledLink>projects</StyledLink>
            </Link>
            <Link href="/blog">
              <StyledLink>blog</StyledLink>
            </Link>
            <Link href="/about">
              <StyledLink>about</StyledLink>
            </Link>
            <Link href="/">
              <StyledLink>
                <b>rike.dev</b>
              </StyledLink>
            </Link>
          </div>
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
            <Link href="/projects">
              <StyledLink>projects</StyledLink>
            </Link>< br/>
            <Link href="/blog">
              <StyledLink>blog</StyledLink>
            </Link>< br/>
            <Link href="/about">
              <StyledLink>about</StyledLink>
            </Link>< br/>
            <Link href="/">
              <StyledLink>
                <b>rike.dev</b>
              </StyledLink>
            </Link>
            </ul>
          </div>
        </nav>
      </header>
      <style jsx>{`
        

        @media only screen and (max-width: 480px) {
          nav #menuBig {
            display: none;
          }
        }

        @media only screen and (min-width: 480px) {
          header {
            width: auto;
            text-align: right;
            top: 0;
            left: 0;
            overflow: hidden;
            padding: 17px 15px;
            background: #fff;
            -webkit-transform: translateX(0);
            transform: translateX(0);
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
          }
          nav {
            float: right;
          }
          nav #menuToggle {
            display: none;
          }
        }

        #menuToggle {
          margin-bottom: 20px;
          display: block;
          position: relative;
          top: 20px;
          left: 20px;
          z-index: 1;
          -webkit-user-select: none;
          user-select: none;
        }

        #menuToggle a {
          text-decoration: none;
          color: #232323;
          transition: color 0.3s ease;
        }

        #menuToggle a:hover {
          color: tomato;
        }

        #menuToggle input {
          display: block;
          width: 40px;
          height: 32px;
          position: absolute;
          top: -7px;
          left: -5px;
          cursor: pointer;
          opacity: 0; /* hide this */
          z-index: 2; /* and place it over the hamburger */

          -webkit-touch-callout: none;
        }

        #menuToggle span {
          display: block;
          width: 33px;
          height: 4px;
          margin-bottom: 5px;
          position: relative;
          background: #aaa;
          border-radius: 3px;
          z-index: 1;
          transform-origin: 4px 0px;
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
        }

        #menuToggle span:first-child {
          transform-origin: 0% 0%;
        }

        #menuToggle span:nth-last-child(2) {
          transform-origin: 0% 100%;
        }

        #menuToggle input:checked ~ span {
          opacity: 1;
          transform: rotate(45deg) translate(-2px, -1px);
          background: #aaa;
        }


        #menuToggle input:checked ~ span:nth-last-child(3) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }

        #menuToggle input:checked ~ span:nth-last-child(2) {
          transform: rotate(-45deg) translate(0, -1px);
        }


        #menu {
          position: absolute;
          width: 100%;
          margin: -100px 0 0 -60px;
          padding: 50px;
          padding-top: 125px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          background: #ededed;
          list-style-type: none;
          -webkit-font-smoothing: antialiased;
          transform-origin: 0% 0%;
          transform: translate(-100%, 0);
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
        }

        #menu li {
          padding: 10px 0;
          font-size: 22px;
        }

        #menuToggle input:checked ~ ul {
          transform: none;
        }
      `}</style>
    </>
  );
}

export default Nav;
