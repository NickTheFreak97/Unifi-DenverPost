import React from "react";
import Text from '@/components/Common/Text'
import { useTheme } from '@/components/theme/theme'
import { useLoremIpsum } from "@/Context/Placeholder/UseLoremIpsum";
import './sectionbriefcolumn.css'
import PlaceholderA from '@/assets/Placeholders/273x181.svg'
import PlaceholderB from '@/assets/Placeholders/345x230.svg'
import PlaceholderC from '@/assets/Placeholders/589x392.svg'

const loremConfig = {
    minWords: 15,
    maxWords: 30
}

const SectionBriefColumn: React.FC = () => {
    const theme = useTheme();
    const lorem = useLoremIpsum();

    const headlines = (() => {
        let headlines = [];

        for(var i = 0; i < 4; i++) {
            headlines.push(lorem(loremConfig))
        }

        return headlines
    })();

    const titleLength = Math.floor(Math.random() * 2) + 1;
    const briefTitle = lorem({ minWords: titleLength, maxWords: titleLength })

    return (
        <section className="fill-max-width" aria-label={`${briefTitle} brief`}>
            <Text as="h2" font={theme.textStyle.section} className="brief-column-title">
                <a href="#" className="brand-link">{ briefTitle }</a>
            </Text>
            <ul className="brief-column unstyled-list separated-list">
                <li>
                    <SectionTopStory />
                </li>

                {
                    headlines.map((headline) => {
                        return (
                            <li key={headline}>
                                <article>
                                    <h4>
                                        <Text as="a" font={theme.textStyle.header} href="#" className="brand-link">
                                            { headline }
                                        </Text>
                                    </h4>
                                </article>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}


const SectionTopStory: React.FC = () => {
    const theme = useTheme();
    const lorem = useLoremIpsum();

    const randomImage = (() => {
        let number = Math.floor(Math.random() * 3);

        switch(number) {
            case 0:
                return PlaceholderA;
            
            case 1:
                return PlaceholderB;

            case 2:
                return PlaceholderC;

            default:
                return PlaceholderC;
        }
    })()

    return (
        <article>
            <div className="top-story-image-wrapper">
                <img src={randomImage} alt="A placeholder for the top story of this section"/>
            </div>

            <h3>
                <Text as="a" href="#" className="brand-link lh-regular" font={theme.textStyle.title}>
                    { lorem(loremConfig) }
                </Text>
            </h3>


            <Text as="p" font={theme.textStyle.body} className="fw-300">
                { lorem(loremConfig) }
            </Text>
        </article>
    )
}

export default SectionBriefColumn;



