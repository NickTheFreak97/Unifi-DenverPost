import React, { type JSX } from 'react';
import { styled } from 'styled-components';
import type { TextStyle } from '../theme/theme';

export type TextProps<T extends keyof JSX.IntrinsicElements = "span"> = {
    font?: Partial<TextStyle>;
    as?: T;
} & React.ComponentPropsWithoutRef<T>;


const StyledText = styled.span<{ $font?: Partial<TextStyle> }>`
    font-size: ${({ $font }) => $font?.fontSize};
    font-weight: ${({ $font }) => $font?.fontWeight};
    font-family: ${({ $font }) => $font?.fontFamily};
`;


const Text = <T extends keyof JSX.IntrinsicElements = "span">({
    as,
    font,
    style,
    children,
    ...rest
}: TextProps<T>) => {
    return (
        <StyledText as={as} $font={font} {...(rest as any)}>
            {children}
        </StyledText>
    );
};

export default Text;