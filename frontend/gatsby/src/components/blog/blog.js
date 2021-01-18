import React, { useState } from 'react'
import LoadMoreButton from '../loadmore/LoadMore'
import { Link } from 'gatsby'
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Blog = ({ posts }) => {
    const lang = (navigator.language || navigator.userLanguage)?.substring(0, 2)
    const [isGermanSelected, toggleGerman] = useState(lang === 'de')
    const [isEnglishSelected, toggleEnglish] = useState(true)
    const [postAmount, increasePostAmount] = useState(3)
    const totalPostAmount = posts?.length


    const filteredPosts = posts.slice(0, postAmount).filter(item => {
        if ((isGermanSelected && item.node.language === "de") || (isEnglishSelected && item.node.language === "en")) {
            return item
        }
    })
    return (
        <div id="blog" className="bg-gray-light block spacer p-top-xl">
            <div className="wrapper">
                <h2 className="text-right">
                    <button
                        onClick={() => toggleGerman(!isGermanSelected)}
                        type="button"
                        className="btn btn-link border-0 p-0 transform-scale-h"
                    >
                        <span className={isGermanSelected && 'underline'}>de</span>
                    </button> { }
                    <button
                        onClick={() => toggleEnglish(!isEnglishSelected)}
                        style={{ marginRight: '2rem' }}
                        type="button"
                        className="btn btn-link border-0 p-0 transform-scale-h"
                    >
                        <span className={isEnglishSelected && 'underline'}>en</span>

                    </button>
                    <a
                        title="Blogging"
                        className="transform-scale-h"
                        href={process.env.PUBLIC_URL + '/journal'}
                    >
                        <span className="line">Blog</span>
                    </a>
                </h2>
            </div>
            <div className="ptb-blog">
                <div className="wrapper">
                        {!filteredPosts.length && <div className="wrapper">
                            <div className="ptb-blog text-center"><span>No items.</span></div></div>}
                        <CSSTransitionGroup
                            transitionName="example"
                            className="row smooth-resize gutter-width-lg with-pb-lg"
                            transitionAppear={true}
                            transitionEnter={true}
                            transitionLeave={true}
                            transitionAppearTimeout={100}
                            transitionEnterTimeout={600}
                            transitionLeaveTimeout={800}>
                            {

                                filteredPosts.map((item, key) => {
                                    return (
                                        <div
                                            key={item.node.title}
                                            className="example col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                                        >
                                            <div className="card border-0">
                                                <div className="card-body p-0">
                                                    <h4>
                                                        <Link to={`/${item.node.slug}/`}>
                                                            {item.node.title}
                                                        </Link>
                                                    </h4>

                                                    <p className="p-small text-secondary bold">
                                                        {item.node.publishedAt}
                                                    </p>

                                                    <p
                                                        className="text"
                                                        dangerouslySetInnerHTML={{
                                                            __html: `${item.node.description?.description}`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </CSSTransitionGroup>
                    <div className="text-center">
                        <LoadMoreButton postAmount={postAmount} totalPostAmount={totalPostAmount} increasePostAmount={increasePostAmount} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
