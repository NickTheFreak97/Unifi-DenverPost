import React from "react";
import { useLoremIpsum } from "@/Context/Placeholder/UseLoremIpsum";

import Text from "../../../Common/Text";
import { useTheme } from "../../../theme/theme";

import './featuredheadlinesfeed.css'
import '../Featured/featured.css'
import HeaderAction from "../../../Website Header/Header/HeaderAction";

enum Time {
    minutes,
    hours,
    days
}

class FeaturedHeadline {
    title: string;
    amountOfTime: number;
    time: Time

    constructor(title: string, time: Time, amount: number) {
        if (amount < 0) {
            throw new Error(`Expected amount of time to be non-negative, got ${amount} instead, for headline ${title}`)
        }
        this.title = title
        this.amountOfTime = amount
        this.time = time
    }


    getTitle(): string {
        return this.title
    }

    getAmountOfTime(): number {
        return this.amountOfTime
    }

    getTime(): Time {
        return this.time
    }
}

function arrayFromRange(
    lowerBound: number,
    upperBound: number
): [number] {
    if (lowerBound > upperBound) {
        throw new Error(`Expected lowerbound <= upperbound, got ${lowerBound} and ${upperBound} respectively.`)
    }

    const range: [number] = [lowerBound]

    for(let i = lowerBound + 1; i <= upperBound; i++) {
        range.push(i)
    }

    return range
}


const FeaturedHeadlinesFeed: React.FC = () => {
    const lorem = useLoremIpsum();
    const numberOfHeadlines: number = Math.floor(Math.random() * (7 - 4 + 1)) + 4
    const randomHeadlines: FeaturedHeadline[] = arrayFromRange(0, numberOfHeadlines-1).map( () => {
        let randomTime: number = Math.floor(Math.random() * 3) 
        let randomAmount: number = 0

        switch (randomTime) {
            case 0:
                randomAmount = Math.floor(Math.random() * 59) + 1;
                break;

            case 1:
                randomAmount = Math.floor(Math.random() * (23)) + 1
                break;

            case 2:
                randomAmount = Math.floor(Math.random() * 30) + 1
                break;

            default:
                throw new Error(`Unsupported Time option: ${randomTime}`)
        }

        return new FeaturedHeadline(
            /*title:*/ lorem(),
            /*type*:*/ randomTime == 0 ? Time.minutes : randomTime == 1 ? Time.hours : Time.days,
            /*amount:*/ randomAmount,
        )
    }).sort((lhs: FeaturedHeadline, rhs: FeaturedHeadline) => {
        if (lhs.getTime() < rhs.getTime()) {
            return -1;
        } else {
            if (lhs.getTime() > rhs.getTime()) {
                return 1;
            } else {
                if (lhs.getAmountOfTime() < rhs.getAmountOfTime()) {
                    return -1;
                } else {
                    if (lhs.getAmountOfTime() > rhs.getAmountOfTime()) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        }
    })
    
    const theme = useTheme();

    return (
        <ul className="featured-headlines-list unstyled-list separated-list" aria-labelledby="featured-headlines-title">
            <li><h2 id="featured-headlines-title">Latest Headlines</h2></li>
            {
                randomHeadlines.map( headline => {
                    return <li key={headline.getTitle()}>
                        {
                            <article>
                                <h3>
                                    <Text as="a" font={theme.textStyle.secondaryHeadline} href="#" className="brand-link">
                                        { headline.getTitle() }
                                    </Text>
                                </h3>

                                <ElapsedTime time={headline.getTime()} amount={headline.getAmountOfTime()}/>
                            </article>
                        }
                    </li>
                })
            }
            <li aria-label="sign up to newsletter action">
                <Text as="span" font={theme.textStyle.subtitle} className="fw-700">
                    Sign up for Newsletters and Alerts
                </Text>
                <HeaderAction ariaLabel="Sign up to youd denver post account">
                    <Text font={theme.textStyle.secondaryHeadline} className="text-uppercased" aria-hidden="true">
                      Sign Up
                    </Text>
                </HeaderAction>
            </li>
        </ul>
    )
}


interface ElapsedTimeProps {
    time: Time,
    amount: number
}

const ElapsedTime: React.FC<ElapsedTimeProps> = (props) => {
    const theme = useTheme();

    const textForTime = props.time == Time.days ? "day" : props.time == Time.hours ? "hour" : "minute"
    
    return (
        <Text 
             as='span' 
             font={theme.textStyle.caption} 
             className="featured-headlines-elapsed-time">
            { props.amount.toString() + " " + textForTime + (props.amount > 1 ? "s" : "") }
        </Text>
    )
}



export default FeaturedHeadlinesFeed;