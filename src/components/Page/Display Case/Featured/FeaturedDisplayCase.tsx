import React from "react";

import Text from "../../../Common/Text"; 
import { useTheme } from "../../../theme/theme";
import { useScreenWidth } from "../../../../Context/Screen Size/UseScreenWidth";
import { useLoremIpsum } from "@/Context/Placeholder/UseLoremIpsum";
import './featureddisplaycase.css'
import MainPlaceholder from '../../../../assets/Placeholders/391x260.svg';
import { Breakpoint } from "../../../../Context/Screen Size/Breakpoint";
import FeaturedHeadlinesFeed from "../Headlines Feed/FeaturedHeadlinesFeed";
import ProminentNewsGrid from "../Prominent News Grid/ProminentNewsGrid";
import Advertisement from "../Advertisement/Advertisement";

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
    const lorem = useLoremIpsum();



    const articleImage = <img src={MainPlaceholder} alt="placeholder image for the most prominent story" />

    return (
        <article className="featured-prominent-news-wrapper">
            <div className="featured-prominent-news-headline-wrapper">
                <Text as="h2">
                    <a href="#" className="brand-link">{lorem()}</a>
                </Text>

                {
                    (screenWidth <= Breakpoint.mobile || (screenWidth >= Breakpoint.tablet && screenWidth <= Breakpoint.laptop)) &&
                        articleImage
                }

                <Text as="p" font={theme.textStyle.body} className="fw-300">
                    {lorem()}
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
        className="mt-related"
    />
}

export default FeaturedDisplayCase;





