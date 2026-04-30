import React from "react";
import Text from "../Common/Text";
import { LoremIpsum } from "lorem-ipsum";
import { useTheme } from "../theme/theme";
import DenverPostLogo from '@/assets/denver.post.logo.svg'
import './denverpostfooter.css'
import HeaderAction from "../Website Header/Header/HeaderAction";

const lorem = new LoremIpsum({
    wordsPerSentence: {
        min: 2,
        max: 4
    }
})

const DenverPostFooter: React.FC = () => {
    const theme = useTheme();

    return (
        <footer>
            <div id="footer-shield">
                <a href="#">
                    <img src={DenverPostLogo} alt="the denver post" />
                </a>

                <nav aria-label="footer links">
                    <div className="footer-members-links">
                        <FooterColumn linksCount={3} />
                        <FooterColumn linksCount={6} />
                    </div>

                    <FooterColumn linksCount={4} />
                    <FooterColumn linksCount={8} />

                    <div className="footer-members-links">
                        <FooterColumn linksCount={4} />
                        <ul>
                            <li aria-label="Subscribe to newsletter">
                                <HeaderAction>
                                    <Text font={theme.textStyle.secondaryHeadline} className="text-uppercased" aria-hidden={true}>
                                        Subscribe now
                                    </Text>
                                </HeaderAction>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <hr />

            <TechnicalLinks />
        </footer>
    )
}

interface FooterColumnProps {
    linksCount: number
}

const FooterColumn: React.FC<FooterColumnProps> = (props) => {
    const theme = useTheme();

    return (
        <ul>
            {
                Array.from({length: props.linksCount}).map((_, index) => {
                    return <li key={index}>
                        <a href="#">
                            <Text as="span" font={index == 0 ? theme.textStyle.header : theme.textStyle.body}>
                                { lorem.generateSentences(1) }
                            </Text>
                        </a>
                    </li>
                })
            }
        </ul>
    )
}


const TechnicalLinks: React.FC = () => {
    const theme = useTheme();

    return (
        <nav aria-label="technical links">
            <ul id="technical-links">
                {
                    Array.from({length: 10}).map((_, index) => {
                        return <li key={index}>
                            <a href="#">
                                <Text as="span" font={theme.textStyle.caption}>
                                    { lorem.generateSentences(1) }
                                </Text>
                            </a>
                        </li>
                    })
                }
            </ul>

            <Text as="p" className="copyright-notice" font={theme.textStyle.caption}>
                Copyright 2026 The Denver Post. All rights reserved. The use of any content on this website for the purpose of training artificial intelligence systems, algorithms, machine learning models, text and data mining, or similar use is strictly prohibited without explicit written consent.
            </Text>
        </nav>
    )
}

export default DenverPostFooter;