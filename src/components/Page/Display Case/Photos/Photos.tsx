import React from "react";
import Text from "../../../Common/Text";
import { useTheme } from "../../../theme/theme";
import './photos.css'
import '../Section Brief/briefs.css'

const Photos: React.FC = () => {
    const theme = useTheme();

    return (
        <section id="photos-container">
            <Text as="h2" className="brief-column-title" font={theme.textStyle.section}>
                <a href="#">Photos</a>
            </Text>

            <div id="photos-wrapper">
                <div id="more-photos-indicator" inert aria-hidden="true" tabIndex={-1}/>
            </div>
        </section>
    )
}

export default Photos;