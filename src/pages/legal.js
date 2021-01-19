import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PageTitleLegal from '../blocks/page-title/PageTitleLegal';

class Legal extends React.Component {
    render() {

        return (
            <>
                <Layout location={this.props.location}>
                    <Helmet>
                        <title>rike.dev - Contact</title>
                    </Helmet>
                    <PageTitleLegal />

                    <section id="page-content" className="block spacer p-top-lg">
                        <div className="wrapper">
                            <p>
                                Ulrike Exner, Wichertstr. 30a, 10439 Berlin, Germany
<br />
Email: hello[at] rike.dev<br />
                </p>
                            <h3>                Limitation of liability for internal content
</h3>
                            <p>

                                The content of our website has been compiled with meticulous care and to the best of our knowledge. However, we cannot assume any liability for the up-to-dateness, completeness or accuracy of any of the pages.

                                Pursuant to section 7, para. 1 of the TMG (Telemediengesetz – Tele Media Act by German law), we as service providers are liable for our own content on these pages in accordance with general laws. However, pursuant to sections 8 to 10 of the TMG, we as service providers are not under obligation to monitor external information provided or stored on our website. Once we have become aware of a specific infringement of the law, we will immediately remove the content in question. Any liability concerning this matter can only be assumed from the point in time at which the infringement becomes known to us.

                                Limitation of liability for external links

                                Our website contains links to the websites of third parties (“external links”). As the content of these websites is not under our control, we cannot assume any liability for such external content. In all cases, the provider of information of the linked websites is liable for the content and accuracy of the information provided. At the point in time when the links were placed, no infringements of the law were recognisable to us. As soon as an infringement of the law becomes known to us, we will immediately remove the link in question.

                </p>

                            <h3>Copyright Website and Blog
</h3>

<p>The content and works published on this website are governed by the copyright laws of Germany. Any duplication, processing, distribution or any form of utilisation beyond the scope of copyright law shall require the prior written consent of the author or authors in question. The authors retain full copyright to their work. Unauthorised use of any part of the text or graphics on this website is strictly prohibited. Unauthorised use of content or photos is theft and an infringement of copyright. If permission is granted, kindly provide a link back to the site at https://.fictioncanteen.blog. Fiction Canteen’s website contents are written and edited by Anton Lang and Lucy Jones. The views and opinions expressed on this blog are purely our own.</p>
<h3>Sources</h3>
                            <p>Template: Oxer by adveits</p>


                        </div>
                    </section>

                </Layout>

            </>
        )
    }
}

export default Legal






