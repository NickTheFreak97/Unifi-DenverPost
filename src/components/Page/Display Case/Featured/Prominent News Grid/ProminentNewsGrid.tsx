import React from "react";
import { LoremIpsum } from "lorem-ipsum";

import Text from "../../../../Common/Text";
import { useTheme } from "../../../../theme/theme";

import './prominentnewsgrid.css'
import NewsPlaceholder from '../../../../../assets/Placeholders/273x181.svg'

const ProminentNewsGrid: React.FC = () => {
    return (
        <div className="prominent-news-grid">
            <ProminentNewsCell />
            <ProminentNewsCell />
            <ProminentNewsCell />
            <ProminentNewsCell />
        </div>
    )
}

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

const ProminentNewsCell: React.FC = () => {
    const theme = useTheme();

    return (
        <article style={{paddingBottom: "16px"}}>
            <img src={NewsPlaceholder} alt="featured news (0,0)" width={"100%"} height="auto"/>
            <Text as="a" font={theme.textStyle.prominent} style={{ lineHeight: 1.1 }} aria-role="heading" aria-level="2">
                {lorem.generateSentences(1)}
            </Text>
        </article>
    )
}

export default ProminentNewsGrid;