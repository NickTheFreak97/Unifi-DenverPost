import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import Text from "../../../Common/Text";
import { useTheme } from "../../../theme/theme";
import './photos.css'
import '../Section Brief/briefs.css'

import FeaturedPlaceholder from '@/assets/Placeholders/589x392.svg'

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


const Photos: React.FC = () => {
    const theme = useTheme();

    const headlines = ( ()=>{
        const numberOfHeadlines: number = Math.floor(Math.random() * (7 - 4 + 1)) + 4

        let theHeadlines = [];

        for(var i=0; i < numberOfHeadlines; i++) {
            theHeadlines.push(lorem.generateSentences(1))
        }

        return theHeadlines
    })()

    return (
        <div id="photos-container">
            <Text as="h2" className="brief-column-title" font={theme.textStyle.section}>
                <a href="#">Photos</a>
            </Text>

            <div id="photos-wrapper">
                <FeaturedPhoto />
                <ul>
                    {
                        headlines.map( headline => {
                            return (
                                <li key={headline}>
                                    <article>
                                        <div className="photos-img-wrapper" style={{width: "90px"}}>
                                            <img src={FeaturedPlaceholder} alt="headline alt" width="90px" height="auto" />
                                        </div>
                                        <Text as="a" href="#" font={theme.textStyle.secondaryHeadline}>
                                            <h2>
                                                { `PHOTOS: ${headline}` }
                                            </h2>
                                        </Text>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
                <div id="more-photos-indicator" inert aria-hidden="true" tabIndex={-1}/>


                <Text as="a" href="#" font={theme.textStyle.secondaryHeadline} style={{textTransform: 'uppercase'}} id="show-more-photos">
                    Show More Photos
                </Text>
            </div>
        </div>
    )
}


const FeaturedPhoto: React.FC = () => {
    const theme = useTheme();

    return (
        <article>
            <div className="photos-img-wrapper">
                <img src={FeaturedPlaceholder} alt="An alt placeholder for the featured story of Photo section" width="100%" height="auto" />
            </div>

            <Text as="a" href="#" font={theme.textStyle.title}>
                <h2>{ `PHOTOS: ${lorem.generateSentences(1)}` } </h2>
            </Text>
            <Text as="span" font={theme.textStyle.body}>
                { lorem.generateSentences(1) }
            </Text>
        </article>
    )
}

export default Photos;