import React from "react";
import { LoremIpsum } from "lorem-ipsum";

import Text from "../../../Common/Text"; 
import { useTheme } from "../../../theme/theme";
import { useScreenWidth } from "../../../../Context/Screen Size/UseScreenWidth";

import './featureddisplaycase.css'
import MainPlaceholder from '../../../../assets/Placeholders/391x260.svg';
import { Breakpoint } from "../../../../Context/Screen Size/Breakpoint";
import FeaturedHeadlinesFeed from "./Headlines Feed/FeaturedHeadlinesFeed";
import ProminentNewsGrid from "./Prominent News Grid/ProminentNewsGrid";
import Advertisement from "./Advertisement/Advertisement";

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
                <Text as="a" aria-role="heading" aria-level={1} font={theme.textStyle.title} style={{ lineHeight: 1 }}>
                    {lorem.generateSentences(1)}
                </Text>

                {
                    (screenWidth <= Breakpoint.mobile || (screenWidth >= Breakpoint.tablet && screenWidth <= Breakpoint.laptop)) &&
                        articleImage
                }

                <Text as="h1" font={theme.textStyle.body} style={{ fontWeight: 300 }}>
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
    return <div 
        aria-hidden="true" 
        tabIndex={-1} 
        style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--separator-color)",
            marginTop: "16px"
        }}
        inert
    />
}

export default FeaturedDisplayCase;





