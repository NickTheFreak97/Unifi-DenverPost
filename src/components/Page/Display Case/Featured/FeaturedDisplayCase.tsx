import React from "react";
import { Placeholder } from 'placeholder';
import { LoremIpsum } from "lorem-ipsum";

import Text from "../../../Common/Text"; 
import { useTheme } from "../../../theme/theme";

import './featureddisplaycase.css'
import MainPlaceholder from '../../../../assets/Placeholders/391x260.svg';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 9
  }
});


const FeaturedDisplayCase: React.FC = () => {
    return (
        <section className="featured-display-wrapper">
            <div className="featured-display-main-flow">
                <ProminentNews />
            </div>
        </section>
    );
};


/*
* @todo: Implement reactivity of this component. Headline -> Image -> Subheadline
*/
const ProminentNews: React.FC = () => {
    const theme = useTheme();

    return (
        <article className="featured-prominent-news-wrapper">
            <div className="featured-prominent-news-headline-wrapper">
                <Text as="h1" font={theme.textStyle.title}>
                    {lorem.generateSentences(1)}
                </Text>

                <Text as="h1" font={theme.textStyle.body} style={{ fontWeight: 300 }}>
                    {lorem.generateSentences(1)}
                </Text>
            </div>
            <img src={MainPlaceholder} alt="placeholder image for the most prominent story" />
        </article>
    )
}

export default FeaturedDisplayCase;


