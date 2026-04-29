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
        <section id="fyp" aria-label="Recommended for you">
            <Text as="h2" font={theme.textStyle.section}>
                Recommended For You
            </Text>
            <ol aria-label="Recommended articles">
                {
                    placeholders.map((placeholder) => {
                        return (
                            <li key={placeholder}>
                                <article>
                                    <h3>
                                        <Text as="a" font={theme.textStyle.header} href="#" className="brand-link">
                                            {placeholder}
                                        </Text>
                                    </h3>
                                </article>
                            </li>
                        )
                    })
                }
            </ol>
        </section>
    )
}

export default RecommendedFYP;