import React from "react";
import { useLoremIpsum } from "@/Context/Placeholder/UseLoremIpsum";

import Text from "../../../Common/Text";
import { useTheme } from "../../../theme/theme";

import './prominentnewsgrid.css'
import NewsPlaceholder from '@/assets/Placeholders/273x181.svg'

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

const ProminentNewsCell: React.FC = () => {
    const theme = useTheme();
    const lorem = useLoremIpsum();

    return (
        <article className="pb-regular">
            <img src={NewsPlaceholder} alt="featured news (0,0)"/>
            <h3>
                <Text as="a" font={theme.textStyle.prominent} href="#" className="brand-link lh-sm">
                    {lorem()}
                </Text>
            </h3>
        </article>
    )
}

export default ProminentNewsGrid;