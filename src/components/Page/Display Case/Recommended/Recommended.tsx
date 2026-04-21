import React from "react";
import { LoremIpsum } from "lorem-ipsum";

import Text from "../../../Common/Text";
import { useTheme } from "../../../theme/theme";
import './recommended.css'

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


const RecommendedFYP: React.FC = () => {
    const theme = useTheme();
    const placeholders = (() => {
        let placeholders = [];

        for(var i = 0; i < 10; i++) {
            placeholders.push(lorem.generateSentences(1));
        }

        return placeholders
    })();

    return (
        <section id="fyp">
            <Text as="h2" font={theme.textStyle.section}>
                Recommended For You
            </Text>
            <ul>
                {
                    placeholders.map((placeholder) => {
                        return (
                            <li key={placeholder}>
                                <Text as="span" font={theme.textStyle.header}>
                                    {placeholder}
                                </Text>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default RecommendedFYP;