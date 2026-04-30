import React, { useEffect, useState, useRef } from "react";

import Text from "../../Common/Text";

import { useScreenWidth } from "../../../Context/Screen Size/UseScreenWidth";
import { useTheme } from "../../theme/theme";
import { Breakpoint } from "../../../Context/Screen Size/Breakpoint";
import HeaderAction from "./HeaderAction";
import logo from '../../../assets/denver.post.logo.svg'

import './header.css';
import '../../../index.css'


/**
 * @description: The header of the whole website with menu, and calls to actions. 
 * - Phablet (< 1040px): Calls to actions are replaced, 
 *    the logo of the website appears centered, 
 *    hamburger's label is hidden. An underline appears below the component.
 * - Mobile: (< 800px): Website logo gets bigger.
 * 
 * @todo:
 *  - Implement a level 1 heading for accessibility
 */
const Header: React.FC = () => {
  const screenWidth = useScreenWidth();
  const theme = useTheme();

  const scrollListenerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    var observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
             setIsSticky(false); 
          } else {
            setIsSticky(true);
          }
        })
      }, 

      {
        threshold: [0, 1],
      }
    );

    if (!!scrollListenerRef && !!scrollListenerRef.current) {
      observer.observe(scrollListenerRef.current);
    }

    return () => observer.disconnect();
  }, [scrollListenerRef])

  return (
    <React.Fragment>
      <div 
        ref={scrollListenerRef} 
        className="hidden-scroll-listener" 
        tabIndex={-1}
        inert
      />

      <section className={isSticky ? "sticky-header denverpost-header" : "denverpost-header"} aria-label="Newspaper header">
        <div id="header-wrapper">
          <button 
            aria-haspopup="true"
            aria-expanded={false}
            className="unstyled-button tappable-icon-btn"
            tabIndex={0}
            aria-label="Open all sections"
          >
            <Text as="span" className="material-symbols-outlined mui-icon" font={theme.textStyle.secondaryHeadline} aria-hidden="true">
                dehaze
            </Text>

            <Text
              font={theme.textStyle.secondaryHeadline}
              className={screenWidth <= Breakpoint.tablet ? "visually-hidden" : undefined}
            >
              All Sections
            </Text>
          </button>
          
          {
            // alt="" and aria-hidden="true" to prevent Voiceover from reading The Denver Post twice (see h1).
          }
          { screenWidth < Breakpoint.laptop && 
            <img src={logo} 
                alt=""
                aria-hidden="true"/>
          }
          
          <nav aria-label="actions">
            <ul className="unstyled-list">
              {
                screenWidth >= Breakpoint.laptop && (
                  <li>
                    <HeaderAction ariaLabel="Subscribe to newsletter">
                      <Text font={theme.textStyle.secondaryHeadline} aria-hidden={true}>
                        Subscribe
                      </Text>
                    </HeaderAction>
                  </li>
                )}
              {
                screenWidth >= Breakpoint.laptop && (
                <li>
                  <HeaderAction ariaLabel="Log in to denver post">
                    <Text font={theme.textStyle.secondaryHeadline} aria-hidden={true}>
                      Log in
                    </Text>
                  </HeaderAction>
                </li>
              )}
              <li>
                <button 
                  className="unstyled-button tappable-icon-btn"
                  aria-label="Search"
                  aria-haspopup="true"
                  aria-expanded={false}
                  tabIndex={0}
                >
                  <span className="material-symbols-outlined" aria-hidden="true">search</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </React.Fragment>
  );
};


export default Header;