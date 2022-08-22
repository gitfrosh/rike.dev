import React, { useState, useEffect, useMemo } from 'react'
import LoadMoreButton from '../loadmore/LoadMore'
import Link from 'next/link'
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { getBrowserLanguage } from '../../util/helpers';
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

const Blog = ({ posts }) => {
    const [lang] = useState(getBrowserLanguage())
    const [isGermanSelected, toggleGerman] = useState(false)
    const [isEnglishSelected, toggleEnglish] = useState(true)
    const [postAmount, increasePostAmount] = useState(3)
    const totalPostAmount = posts?.length

    useEffect(() => {
        if (lang === "de") {
            toggleGerman(true)
        }
    }, [lang])

    const filteredPosts = useMemo(() => posts?.filter(item => {
        if (!item) return;
        if (!item.featured) return;
        if ((isGermanSelected && item.language === "de") || (isEnglishSelected && item.language === "en")) {
            return item
        }
    }).slice(0, postAmount), [posts, postAmount, isGermanSelected, isEnglishSelected]);

    return (
        <div id="blog" className="bg-gray-light block spacer p-top-xl">
            <div className="wrapper">
                <h2 className="text-right">
                    <button
                        onClick={() => toggleGerman(!isGermanSelected)}
                        type="button"
                        className="btn btn-link border-0 p-0 transform-scale-h"
                    >
                        <span className={isGermanSelected ? 'underline' : undefined}>de</span>
                    </button> { }
                    <button
                        onClick={() => toggleEnglish(!isEnglishSelected)}
                        style={{ marginRight: '2rem' }}
                        type="button"
                        className="btn btn-link border-0 p-0 transform-scale-h"
                    >
                        <span className={isEnglishSelected ? 'underline' : undefined}>en</span>

                    </button>

                    <span className="line">Blog</span>

                </h2>
            </div>
            <div className="ptb-blog">
                <div className="wrapper">
                    <span className="row smooth-resize gutter-width-lg with-pb-lg">
                        {!filteredPosts?.length && <div className="wrapper">
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

                                filteredPosts?.map((item, key) => {
                                    return (
                                        <div
                                            key={item.title}
                                            className="example col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                                        >
                                            <div className="card border-0">
                                                <div className="card-body p-0">
                                                    <h4>
                                                        <Link href={`/blog/${item.slug}/`}>
                                                            {item.title}
                                                        </Link>
                                                    </h4>

                                                    <p className="p-small text-secondary bold">
                                                        {dayjs(item.publishedAt).format('LL')}
                                                    </p>

                                                    <p
                                                        className="text"
                                                        dangerouslySetInnerHTML={{
                                                            __html: `${item.description}`,
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
                    </span>

                    <div className="text-center">
                        <LoadMoreButton posts={posts} postAmount={postAmount} totalPostAmount={totalPostAmount} increasePostAmount={increasePostAmount} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Blog