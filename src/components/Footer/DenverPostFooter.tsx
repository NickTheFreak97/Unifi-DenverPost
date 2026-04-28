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
                            <li>
                                <HeaderAction>
                                    <Text font={theme.textStyle.secondaryHeadline} style={{textTransform: 'uppercase'}}>
                                        Subscribe now
                                    </Text>
                                </HeaderAction>
                            </li>
                        </ul>
                    </div>
                </nav>


            </div>
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
                            <Text as="span" font={theme.textStyle.body} style={{fontWeight: index == 0 ? 700 : 400 }}>
                                { lorem.generateSentences(1) }
                            </Text>
                        </a>
                    </li>
                })
            }
        </ul>
    )
}

export default DenverPostFooter