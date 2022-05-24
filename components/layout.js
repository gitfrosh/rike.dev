import React, { Fragment, useEffect } from 'react'
import Header from '../blocks/header/Header'
import Footer from '../blocks/footer/Footer'
import CookieConsent from 'react-cookie-consent'
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
      />
      <Header />

      <main style={{ minHeight: '85vH' }} id="main" className="site-main">
        {children}
      </main>
      <CookieConsent
        enableDeclineButton
        onAccept={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', process.env.NEXT_PUBLIC_GTAG);

        }}
        debug={false}
        flipButtons
        buttonStyle={{ background: '#fff' }}
        declineButtonStyle={{ background: '#7c989a', color: '#fff' }}
        style={{
          background: '#f3f3f3',
          color: '#000',
          lineHeight: '1.6',
          fontFamily: 'Ubuntu-Regular, sans-serif',
        }}
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
      >
        This website stores cookies on your computer. These cookies are used
        to collect information about how you interact with this website and
        allow us to remember you.
      </CookieConsent>
      <Footer />
    </Fragment>
  )

}

export default Layout
