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

    return <section id="denver-events-container" aria-labelledby="denver-event-title">
        <div id="denver-events-header">
            <Text as="h2" id="denver-event-title" font={theme.textStyle.prominent} className="fw-400">
                Denver Events
            </Text>

            { <HeaderLinks /> }
        </div>

        <ul id="denver-events-list">
            <li>
                <a href="#">
                    <span 
                        className={`material-symbols-outlined fw-${theme.textStyle.section.fontSize}`}
                        aria-label="go back"
                    >
                        chevron_backward
                    </span>
                </a>
            </li>

            {
                eventKeys.map( eventKey => {
                    return (
                        <li key={eventKey}>
                            <EventCard/>
                        </li>
                    )
                })
            }

            <li>
                <a href="#">
                    <span 
                        className={`material-symbols-outlined fw-${theme.textStyle.section.fontSize}`}
                        aria-label="go forward"
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
        <nav>
            <ul id="denver-events-header-links">
                <li>
                    <a href="#">
                        <Text as="span" className="material-symbols-outlined mui-icon" font={theme.textStyle.caption} aria-hidden="true">
                            calendar_month
                        </Text>
                        <Text font={theme.textStyle.caption} as="span">
                            See All Events
                        </Text>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <Text as="span" className="material-symbols-outlined mui-icon" font={theme.textStyle.section} aria-hidden="true">
                            add
                        </Text>
                        <Text font={theme.textStyle.caption} as="span">
                            Add Your Event
                        </Text>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

const EventCard: React.FC = () => {
    const theme = useTheme();
    const title = lorem.generateSentences(1)

     return <div className="denver-events-card" aria-label={title}>
        <img src={Placeholder} alt="placeholder for event" width="auto" height="auto" />
        <Text as="a" href="#" font={theme.textStyle.secondaryHeadline} className="line-limit-2">
            { title }
        </Text>
        <Text as="a" href="#" font={theme.textStyle.caption} className="line-limit-1">
            { lorem.generateSentences(1) }
        </Text>
    </div>
}


class Day {
    number: number
    dayOfWeek: string
    timestamp: string

    constructor(date: Date) {
        this.number = date.getDate()
        this.dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' })
        
        this.timestamp = [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, '0'),
            String(date.getDate()).padStart(2, '0')
        ].join('-');
    }

    getNumber(): number {
        return this.number
    }

    getDayOfWeek(): string {
        return this.dayOfWeek.toUpperCase();
    }

    getTimestamp(): string {
        return this.timestamp
    }
}

const Calendar: React.FC = () => {
    const theme = useTheme();
    const days = Array.from({ length: 14 }).map((_, dayOffset) => {
        const date = new Date();
        date.setDate(date.getDate() + dayOffset);

        return new Day(/*date:*/ date);
    });


    return (
        <ul id="denver-events-calendar">
            <li>
                <a href="#" aria-label="open calendar">
                    <span 
                        className="material-symbols-outlined"
                        aria-hidden="true"
                    >
                        calendar_month
                    </span>
                </a>
            </li>

            {
                days.map(day => {
                    return (
                        <li key={day.getNumber()}>
                            <time dateTime={day.getTimestamp()}>
                                <a href="#">
                                    <Text as="span" font={theme.textStyle.callout}>
                                        { day.getNumber() }
                                    </Text>
                                    <Text as="abbr" font={theme.textStyle.callout}>
                                        { day.getDayOfWeek() }
                                    </Text>
                                </a>
                            </time>
                        </li>
                    )
                })
            }
        </ul>
    )
}


export default Events;
