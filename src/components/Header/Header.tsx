import React from "react";

import Text from "../Common/Text";

import { useScreenWidth } from "../../Context/Screen Size/UseScreenWidth";
import { useTheme } from "../theme/theme";
import { Breakpoint } from "../../Context/Screen Size/Breakpoint";
import HeaderAction from "./HeaderAction";

import './header.css';


/**
 * @description: The header of the whole website with menu, and calls to actions. 
 * - Phablet (< 1040px): Calls to actions are replaced, 
 *    the logo of the website appears centered, 
 *    hamburger's label is hidden. An underline appears below the component.
 * - Mobile: (< 800px): Website logo gets bigger.
 */
const Header: React.FC = () => {
  const screenWidth = useScreenWidth();
  const theme = useTheme();

  return (
    <header>
      <div id="header-wrapper">
        <button 
          aria-haspopup="true"
          aria-expanded={false}
          className="unstyled-button tappable-icon-btn"
          tabIndex={0}
        >
          <span 
              className="material-symbols-outlined"
              style={{
                fontSize: theme.textStyle.secondaryHeadline.fontSize,
                fontWeight: theme.textStyle.secondaryHeadline.fontWeight
              }}
            >
            dehaze
          </span>

          <Text
            font={theme.textStyle.secondaryHeadline}
            className={screenWidth <= Breakpoint.phablet ? "visually-hidden" : undefined}
          >
            All Sections
          </Text>
        </button>
        
        
        <nav role="navigation">
          <ul>
            {
              screenWidth > Breakpoint.phablet && (
                <li>
                  <HeaderAction>
                    <Text font={theme.textStyle.secondaryHeadline}>
                      Subscribe
                    </Text>
                  </HeaderAction>
                </li>
              )}
            {
              screenWidth > Breakpoint.phablet && (
              <li>
                <HeaderAction>
                  <Text font={theme.textStyle.secondaryHeadline}>
                    Log in
                  </Text>
                </HeaderAction>
              </li>
            )}
            <li>
              <span 
                style={{padding: "0px 12px",}}
                className="material-symbols-outlined tappable-icon-btn"
                aria-label="Search"
                role="button"
                aria-haspopup="true"
                aria-expanded={false}
                tabIndex={0}
              >
                search
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default Header;