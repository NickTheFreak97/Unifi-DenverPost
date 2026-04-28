import React from 'react'
import { useTheme } from '../theme/theme'

export interface MaterialIconProps extends React.ComponentPropsWithoutRef<'span'>  {
    iconName: string
    style?: React.CSSProperties;
}

const MaterialIcon: React.FC<MaterialIconProps> = (props) => {
    const iconName = props.iconName;
    const theme = useTheme();

    return (
        <span 
            className="material-symbols-outlined"
            style={{
                ...props.style,
                fontSize: theme.textStyle.title.fontSize,
                fontWeight: theme.textStyle.body.fontWeight
            }}
            aria-hidden="true"
        >
            { iconName }
        </span>
    )
}

export default MaterialIcon;