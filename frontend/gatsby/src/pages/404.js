


import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PageTitle404 from '../blocks/page-title/PageTitle404';
import BackToHome from '../components/button/BackToHome';

class Page404 extends React.Component {
    render() {
        return (
            <>
                <Layout location={this.props.location}>
                    <Helmet />
                    <PageTitle404 />

                    <div id="page-content" className="block">
                        <div className="wrapper">
                            <p className="spacer p-top-lg w-50 m-0">The page you were looking for couldn't be found. The page could be removed, sorry :(.</p>

                            <div className="spacer p-top-xs d-xl-flex d-lg-flex d-md-flex justify-content-between block m-top-extrasmall">
                                <BackToHome />
                            </div>
                        </div>
                    </div>

                </Layout>

            </>
        )
    }
}

export default Page404