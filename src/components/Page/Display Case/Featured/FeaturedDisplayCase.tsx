import React from "react";
import { LoremIpsum } from "lorem-ipsum";

import Text from "../../../Common/Text"; 
import { useTheme } from "../../../theme/theme";
import { useScreenWidth } from "../../../../Context/Screen Size/UseScreenWidth";

import './featureddisplaycase.css'
import MainPlaceholder from '../../../../assets/Placeholders/391x260.svg';
import { Breakpoint } from "../../../../Context/Screen Size/Breakpoint";
import FeaturedHeadlinesFeed from "../Headlines Feed/FeaturedHeadlinesFeed";
import ProminentNewsGrid from "../Prominent News Grid/ProminentNewsGrid";
import Advertisement from "../Advertisement/Advertisement";

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
        <section className="featured-display-wrapper" aria-label="featured news">
            <div className="featured-display-main-flow">
                <ProminentNews />
                <Divider />
                <ProminentNewsGrid />
            </div>
            <FeaturedHeadlinesFeed />
            <Advertisement />
        </section>
    );
};



const ProminentNews: React.FC = () => {
    const theme = useTheme();
    const screenWidth = useScreenWidth();

    const articleImage = <img src={MainPlaceholder} alt="placeholder image for the most prominent story" />

    return (
        <article className="featured-prominent-news-wrapper">
            <div className="featured-prominent-news-headline-wrapper">
                <Text as="h2" font={theme.textStyle.title} style={{ lineHeight: 1 }}>
                    <a href="#" className="brand-link">{lorem.generateSentences(1)}</a>
                </Text>

                {
                    (screenWidth <= Breakpoint.mobile || (screenWidth >= Breakpoint.tablet && screenWidth <= Breakpoint.laptop)) &&
                        articleImage
                }

                <Text as="p" font={theme.textStyle.body} style={{ fontWeight: 300 }}>
                    {lorem.generateSentences(1)}
                </Text>
            </div>

        {
            (screenWidth == Breakpoint.phablet || screenWidth > Breakpoint.laptop) &&
                articleImage
        }            
        </article>
    )
}


const Divider: React.FC = () => {
    return <hr 
        aria-hidden="true" 
        style={{
            border: "none",
            borderTop: "0.3px solid var(--separator-color)",
            marginTop: "16px"
        }}
    />
}

export default FeaturedDisplayCase;





