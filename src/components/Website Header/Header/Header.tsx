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
          >
            <span 
                className="material-symbols-outlined"
                style={{
                  fontSize: theme.textStyle.secondaryHeadline.fontSize,
                  fontWeight: theme.textStyle.secondaryHeadline.fontWeight
                }}
                aria-hidden="true"
              >
              dehaze
            </span>

            <Text
              font={theme.textStyle.secondaryHeadline}
              className={screenWidth <= Breakpoint.tablet ? "visually-hidden" : undefined}
            >
              All Sections
            </Text>
          </button>
          
          { screenWidth < Breakpoint.laptop && 
            <img src={logo} 
                alt="The Denver Post"
                aria-label="The Denver Post"/>
          }
          
          <nav aria-label="actions">
            <ul>
              {
                screenWidth >= Breakpoint.laptop && (
                  <li>
                    <HeaderAction>
                      <Text font={theme.textStyle.secondaryHeadline}>
                        Subscribe
                      </Text>
                    </HeaderAction>
                  </li>
                )}
              {
                screenWidth >= Breakpoint.laptop && (
                <li>
                  <HeaderAction>
                    <Text font={theme.textStyle.secondaryHeadline}>
                      Log in
                    </Text>
                  </HeaderAction>
                </li>
              )}
              <li>
                <button 
                  style={{padding: "0px 12px",}}
                  className="unstyled-button tappable-icon-btn"
                  aria-label="Search"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={false}
                  tabIndex={0}
                >
                  <span className="material-symbols-outlined">search</span>
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