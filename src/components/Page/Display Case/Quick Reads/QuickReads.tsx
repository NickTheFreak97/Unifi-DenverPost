import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import Text from "@/components/Common/Text";
import { useTheme } from "@/components/theme/theme";
import './quickreads.css'
import '../Section Brief/briefs.css'

import Placeholder from '@/assets/Placeholders/391x260.svg'
import { useLoremIpsum } from "@/Context/Placeholder/UseLoremIpsum";

const loremConfig = {
    minWords: 15,
    maxWords: 20
}


const QuickReads: React.FC = () => {
    const theme = useTheme();
    const lorem = useLoremIpsum();

    const quickReads = (() => {
        let quickReads = []

        for(var i = 0; i < 4; i++) {
            quickReads.push(lorem(loremConfig))
        }

        return quickReads
    })()

    const randomLength = Math.floor(Math.random() % 2 + 1);
    const quickReadsTitle = lorem({ minWords: randomLength, maxWords: randomLength })

    return (
        <section className="quick-reads-container" aria-label={`${quickReadsTitle} quick reads`}>
            <Text as="h2" className="brief-column-title" font={theme.textStyle.section}>
                <a href="#" className="brand-link">{ quickReadsTitle }</a>
            </Text>

            <div className="quick-reads-list-container">
                <FeaturedQuickRead />
                <ul className="unstyled-list separated-list">
                    {
                        quickReads.map(quickRead => {
                            return (
                                <li key={quickRead} role="listitem">
                                    <article>
                                        <h4>
                                            <Text as="a" href="#" font={theme.textStyle.secondaryHeadline} className="brand-link">
                                                { quickRead }
                                            </Text>
                                        </h4>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}


const FeaturedQuickRead: React.FC = () => {
    const theme = useTheme()
    const lorem = useLoremIpsum()

    return (
        <article className="quick-reads-featured-article">
            <img src={Placeholder} alt="A placeholder for a prominent news in the quick reads" width="100%" height="auto" />
            <div className="quick-reads-news-body-wrapper">
                <h3>
                    <Text as="a" href="#" font={theme.textStyle.title} className="brand-link">
                            { lorem(loremConfig) }
                    </Text>
                </h3>

                <div className="quick-reads-container">
                    <Text as="p" font={theme.textStyle.body}>
                        { lorem(loremConfig) }
                    </Text>
                </div>
            </div>
        </article>
    )
}

export default QuickReads;