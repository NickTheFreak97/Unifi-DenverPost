import React from 'react'
import Text from '@/components/Common/Text'
import { useTheme } from '../../theme/theme'


import './navbar.css'

const Navbar = () => {
    return (
        <nav aria-label='Topics'>
            <ul className='arguments-navbar' role="list">
                <NavigationLink destination='News'/>
                <NavigationLink destination='Sports'/>
                <NavigationLink destination='Business'/>
                <NavigationLink destination='The Know'/>
                <NavigationLink destination='Outdoors'/>
                <NavigationLink destination='Opinion'/>
                <NavigationLink destination='Classifieds'/>
                <NavigationLink destination='Obituaries'/>
            </ul>
        </nav>
    )
}


interface NavigationLinkProps {
    destination: string
}

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
    const theme = useTheme();

    return (
        <li>
            <Text as="span" font={theme.textStyle.subtitle}>
                <a href="#">{props.destination}</a>
            </Text>
        </li>
    )
}

export default Navbar;
