import React from "react";
import { LoremIpsum } from "lorem-ipsum";

import Text from "../../../../Common/Text";
import { useTheme } from "../../../../theme/theme";

import './featuredheadlinesfeed.css'

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


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 9
  }
});



const FeaturedHeadlinesFeed: React.FC = () => {
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
            /*title:*/ lorem.generateSentences(1),
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
        <ul className="featured-headlines-list">
            {
                randomHeadlines.map( headline => {
                    return <li key={headline.getTitle()}>
                        {
                            <article>
                                <Text as="a" font={theme.textStyle.secondaryHeadline}>
                                    { headline.getTitle() }
                                </Text>
                                <ElapsedTime time={headline.getTime()} amount={headline.getAmountOfTime()}/>

                            </article>
                        }
                    </li>
                })
            }
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
             style={{
                marginLeft: "5px",
                fontWeight: 300,
            }}
             >
            { props.amount.toString() + " " + textForTime + (props.amount > 1 ? "s" : "") }
        </Text>
    )
}



export default FeaturedHeadlinesFeed;