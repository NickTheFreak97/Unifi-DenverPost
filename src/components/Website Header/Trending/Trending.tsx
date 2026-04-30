import React from "react"
import Text from "@/components/Common/Text"
import { useTheme } from "../../theme/theme"

import './trending.css'

const Trending: React.FC = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <ul id="trending-list" aria-labelledby="trending-nav-label">
                <li >
                    <Text as="h2" font={theme.textStyle.body} className="fw-600" id="trending-nav-label">
                        Trending:
                    </Text>
                </li>
                <NavigationLink destination="JBS labor deal"/>
                <NavigationLink destination="Paxton Lynch’s comeback derailed by injury 🏈"/>
                <NavigationLink destination="Colorado’s budget problem"/>
            </ul>
        </React.Fragment>
    )
}

interface NavigationLinkProps {
    destination: string
}

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
    const theme = useTheme();

    return (
        <li>
            <Text as="a" href="#" className="brand-link" font={theme.textStyle.body}>
                {props.destination}
            </Text>
        </li>
    )
}


export default Trending;