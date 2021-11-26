import React, { Fragment } from 'react'
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import "fontsource-roboto-mono"
import "fontsource-roboto"
import './assets/sass/style.scss';
import CookieConsent from "react-cookie-consent";
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
class Layout extends React.Component {
  render() {
    const { location, children, lang } = this.props

    return (
      <Fragment>

        <Header location={location} />

        <main id="main" className="site-main">
          {children}
        </main>
        <CookieConsent
          enableDeclineButton
          onAccept={() => {
            initializeAndTrack(location)
          }}
          debug={false}
          flipButtons
          buttonStyle={{ background: '#fff' }}
          declineButtonStyle={{ background: '#7c989a', color:'#fff' }}

          style={{ background: "#f3f3f3", color: '#000',
           lineHeight: '1.6',  fontFamily: "Ubuntu-Regular, sans-serif" }}
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          This website stores cookies on your computer. These cookies are used to collect information about how you interact with this website and allow us to remember you.</CookieConsent>
        <Footer />
      </Fragment>


    )
  }
}

export default Layout
