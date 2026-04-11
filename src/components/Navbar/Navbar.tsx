import React from 'react'
import { useTheme } from '../theme/theme'


import './navbar.css'

const Navbar = () => {
    return <ul className='arguments-navbar' role="navigation">
        <NavigationLink destination='News'/>
        <NavigationLink destination='Sports'/>
        <NavigationLink destination='Business'/>
        <NavigationLink destination='The Know'/>
        <NavigationLink destination='Outdoors'/>
        <NavigationLink destination='Opinion'/>
        <NavigationLink destination='Classifieds'/>
        <NavigationLink destination='Obituaries'/>
    </ul>
}


interface NavigationLinkProps {
    destination: string
}

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
    const theme = useTheme();

    return (
        <li style={{
            fontFamily: theme.textStyle.subtitle.fontFamily,
            fontSize: theme.textStyle.subtitle.fontSize,
            fontWeight: theme.textStyle.subtitle.fontWeight
        }}><a href="#">{props.destination}</a></li>
    )
}

export default Navbar;
