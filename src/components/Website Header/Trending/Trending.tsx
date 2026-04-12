import React from "react"
import { useTheme } from "../../theme/theme"

import './trending.css'

const Trending: React.FC = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <ul role="list" id="trending-list">
                <li style={{
                    fontFamily: theme.textStyle.body.fontFamily,
                    fontSize: theme.textStyle.body.fontSize
                }}>Trending:</li>
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
        <li style={{
            fontFamily: theme.textStyle.body.fontFamily,
            fontSize: theme.textStyle.body.fontSize,
            fontWeight: 300
        }}><a href="#">{props.destination}</a></li>
    )
}


export default Trending;