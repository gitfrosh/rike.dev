import React, { Fragment } from 'react'
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import "fontsource-roboto-mono" 
import "fontsource-roboto"
import './assets/sass/style.scss';

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    // let header

    // let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Fragment>

      <Header />

      <main id="main" className="site-main">
{children}
      </main>

      <Footer />
  </Fragment>
  

    )
  }
}

export default Layout
