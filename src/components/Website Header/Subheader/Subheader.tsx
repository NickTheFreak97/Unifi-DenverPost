import React from "react"
import MaterialIcon from "../../Common/MaterialIcon"
import { useTheme } from "../../theme/theme"
import Text from '../../Common/Text'

import './subheader.css'
import '../../../App.css'

import deverPostLogo from '../../../assets/denver.post.logo.svg'

const Subheader: React.FC = () => {
    const theme = useTheme();

    return (
        <section className="denverpost-subheader" aria-label="Today's weather">
            <div id="denverpost-weather">
                <Text as='span' font={theme.textStyle.header}>
                    49°F
                </Text>
                <button className="unstyled-button tappable-icon-btn">
                    <MaterialIcon iconName="thunderstorm" aria-label="thunderstorm"/>
                </button>
            </div>
            <div id="denverpost-today">
                <Text as='span' font={theme.textStyle.header}>
                    Saturday, April 11th 2026
                </Text>
                <Text as='p' font={theme.textStyle.caption} className="denverpost-today-text-ul">
                    Digital Replica Edition
                </Text>
            </div>
            <img src={deverPostLogo} alt="The Denver Post" className="subheader-denverpost-logo"/>
        </section>
    )
}

export default Subheader;