import React from "react";
import Text from "@/components/Common/Text";
import { LoremIpsum } from "lorem-ipsum";
import { useTheme } from "@/components/theme/theme";
import { useScreenWidth } from "@/Context/Screen Size/UseScreenWidth";
import Placeholder from '@/assets/Placeholders/589x392.svg';

import './events.css'
import { Breakpoint } from "@/Context/Screen Size/Breakpoint";


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 5,
    min: 2
  }
});

const Events: React.FC = () => {
    const theme = useTheme()
    const width = useScreenWidth()

    const eventKeys = (() => {
        var numberOfEvents: number = 6

        switch (width) {
            case Breakpoint.laptop:
                numberOfEvents = 5;
                break;

            default: break;
        }

        var range = []

        for(var i = 0; i < numberOfEvents; i++) {
            range.push(i)
        }

        return range;
    })()

    return <section id="denver-events-container" aria-labelledby="denver-events-title">
        <div id="denver-events-header">
            <Text as="h2" id="denver-event-title" font={theme.textStyle.prominent} style={{fontWeight: 400}}>
                Denver Events
            </Text>

            { <HeaderLinks /> }
        </div>

        <ul id="denver-events-list">
            <li>
                <a href="#">
                    <span 
                        className="material-symbols-outlined"
                        style={{
                            fontSize: theme.textStyle.section.fontSize
                        }}
                    >
                        chevron_backward
                    </span>
                </a>
            </li>

            {
                eventKeys.map( eventKey => {
                    return (
                        <li>
                            <a href="#">
                                <EventCard/>
                            </a>
                        </li>
                    )
                })
            }

            <li>
                <a href="#">
                    <span 
                        className="material-symbols-outlined"
                        style={{fontSize: theme.textStyle.section.fontSize}}
                    >
                        chevron_forward
                    </span>
                </a>
            </li>
        </ul>

        <Calendar />
        
    </section>
}


const HeaderLinks: React.FC = () => {
    const theme = useTheme();

    return (
        <ul id="denver-events-header-links">
            <li>
                <a href="#">
                    <figure>
                        <span 
                            className="material-symbols-outlined"
                            style={{
                                fontSize: theme.textStyle.caption.fontSize,
                                fontWeight: theme.textStyle.caption.fontWeight
                            }}
                        >
                            calendar_month
                        </span>
                        <Text font={theme.textStyle.caption}>
                            See All Events
                        </Text>
                    </figure>
                </a>
            </li>

            <li>
                <a href="#">
                    <figure>
                        <span 
                            className="material-symbols-outlined"
                            style={{
                                fontSize: theme.textStyle.section.fontSize,
                                fontWeight: 600
                            }}
                        >
                            add
                        </span>
                        <Text font={theme.textStyle.caption}>
                            Add Your Event
                        </Text>
                    </figure>
                </a>
            </li>
        </ul>
    )
}

const EventCard: React.FC = () => {
    const theme = useTheme();

    return <figure className="denver-events-card">
        <img src={Placeholder} alt="placeholder for event" width="auto" height="auto" />
        <Text as="a" href="#" font={theme.textStyle.secondaryHeadline} className="line-limit-2">
            { lorem.generateSentences(1) }
        </Text>
        <Text as="a" href="#" font={theme.textStyle.caption} className="line-limit-1">
            { lorem.generateSentences(1) }
        </Text>
    </figure>
}


class Day {
    number: number
    dayOfWeek: string

    constructor(number: number, dayOfWeek: string) {
        this.number = number
        this.dayOfWeek = dayOfWeek
    }

    getNumber(): number {
        return this.number
    }

    getDayOfWeek(): string {
        return this.dayOfWeek.toUpperCase();
    }
}

const Calendar: React.FC = () => {
    const theme = useTheme();
    const days = Array.from({ length: 14 }).map((_, dayOffset) => {
        const date = new Date();
        date.setDate(date.getDate() + dayOffset);

        return new Day(
            /*number:*/ date.getDate(),
            /*dayOfWeek:*/ date.toLocaleDateString('en-US', { weekday: 'short' })
        );
    });


    return (
        <ul id="denver-events-calendar">
            <li>
                <a href="#">
                    <span 
                        className="material-symbols-outlined"
                        style={{
                            fontSize: "40px",
                            fontWeight: 300,
                            color: "#3b3b3b"
                        }}
                    >
                        calendar_month
                    </span>
                </a>
            </li>

            {
                days.map(day => {
                    return (
                        <li key={day.getNumber()}>
                            <a href="#">
                                <Text as="span" font={theme.textStyle.callout}>
                                    { day.getNumber() }
                                </Text>
                                <Text as="span" font={theme.textStyle.callout}>
                                    { day.getDayOfWeek() }
                                </Text>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}


export default Events;
