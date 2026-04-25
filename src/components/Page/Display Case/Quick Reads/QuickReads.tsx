import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import Text from "@/components/Common/Text";
import { useTheme } from "@/components/theme/theme";
import './quickreads.css'
import '../Section Brief/briefs.css'

import Placeholder from '@/assets/Placeholders/391x260.svg'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 20,
    min: 15
  }
});


const QuickReads: React.FC = () => {
    const theme = useTheme();

    const quickReads = (() => {
        let quickReads = []

        for(var i = 0; i < 4; i++) {
            quickReads.push(lorem.generateSentences(1))
        }

        return quickReads
    })()

    return (
        <section className="quick-reads-container">
            <Text as="h2" className="brief-column-title" font={theme.textStyle.section}>
                <a href="#">{ lorem.generateWords(Math.floor(Math.random() % 2 + 1)) }</a>
            </Text>

            <div className="quick-reads-list-container">
                <FeaturedQuickRead />
                <ul>
                    {
                        quickReads.map(quickRead => {
                            return (
                                <li key={quickRead}>
                                    <article>
                                        <Text as="span" font={theme.textStyle.secondaryHeadline}>
                                            { quickRead }
                                        </Text>
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

    return (
        <article className="quick-reads-featured-article">
            <img src={Placeholder} alt="A placeholder for a prominent news in the quick reads" width="100%" height="auto" />
            <div className="quick-reads-news-body-wrapper">
                <Text as="a" href="#" font={theme.textStyle.subtitle}>
                    <h2>
                        { lorem.generateSentences(1) }
                    </h2>
                </Text>
                <div className="quick-reads-container">
                    <Text as="span" font={theme.textStyle.body}>
                        { lorem.generateSentences(1) }
                    </Text>
                </div>
            </div>
        </article>
    )
}

export default QuickReads;