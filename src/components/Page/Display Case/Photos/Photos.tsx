import React from "react";
import { useLoremIpsum } from "@/Context/Placeholder/UseLoremIpsum";
import Text from "../../../Common/Text";
import { useTheme } from "../../../theme/theme";
import './photos.css'
import '../Section Brief/briefs.css'

import FeaturedPlaceholder from '@/assets/Placeholders/589x392.svg'


const Photos: React.FC = () => {
    const theme = useTheme();
    const lorem = useLoremIpsum();

    const headlines = ( ()=>{
        const numberOfHeadlines: number = Math.floor(Math.random() * (7 - 4 + 1)) + 4

        let theHeadlines = [];

        for(var i=0; i < numberOfHeadlines; i++) {
            theHeadlines.push(lorem())
        }

        return theHeadlines
    })()

    return (
        <section id="photos-container" aria-label="photos">
            <Text as="h2" className="brief-column-title no-max-width-ch-limit" font={theme.textStyle.section}>
                <a href="#" className="brand-link">Photos</a>
            </Text>

            <div id="photos-wrapper">
                <FeaturedPhoto />
                <ul className="unstyled-list separated-list">
                    {
                        headlines.map( headline => {
                            return (
                                <li key={headline}>
                                    <article>
                                        <div className="photos-img-wrapper">
                                            <img src={FeaturedPlaceholder} alt="headline alt" width="90px" height="auto" />
                                        </div>
                                        <h4>
                                            <Text as="a" href="#" font={theme.textStyle.secondaryHeadline} className="brand-link">
                                                { `PHOTOS: ${headline}` }
                                            </Text>
                                        </h4>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
                <div id="more-photos-indicator" inert aria-hidden="true" tabIndex={-1}/>


                <Text as="a" href="#" font={theme.textStyle.secondaryHeadline} className="text-uppercased" id="show-more-photos">
                    Show More Photos
                </Text>
            </div>
        </section>
    )
}


const FeaturedPhoto: React.FC = () => {
    const theme = useTheme();
    const lorem = useLoremIpsum();

    return (
        <article>
            <div className="photos-img-wrapper">
                <img src={FeaturedPlaceholder} alt="An alt placeholder for the featured story of Photo section" width="100%" height="auto" />
            </div>

            <h3 className="mb-related">
                <Text as="a" href="#" font={theme.textStyle.title} className="brand-link">
                    { `PHOTOS: ${lorem()}` }
                </Text>
            </h3>

            <Text as="p" font={theme.textStyle.body}>
                { lorem() }
            </Text>
        </article>
    )
}

export default Photos;