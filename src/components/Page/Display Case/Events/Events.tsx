import React from "react";
import Text from "@/components/Common/Text";
import { useLoremIpsum } from "@/Context/Placeholder/UseLoremIpsum";
import { useTheme } from "@/components/theme/theme";
import { useScreenWidth } from "@/Context/Screen Size/UseScreenWidth";
import Placeholder from '@/assets/Placeholders/589x392.svg';

import './events.css'
import { Breakpoint } from "@/Context/Screen Size/Breakpoint";

const Events: React.FC = () => {
    const theme = useTheme()
    const width = useScreenWidth()

    const eventDays = (() => {
        var numberOfEvents: number = 6

        switch (width) {
            case Breakpoint.laptop:
                numberOfEvents = 5;
                break;

            default: break;
        }

        return Day.randomInPast(/*length:*/ numberOfEvents, /*maxDaysBack:*/ 15);
    })()

    return <section id="denver-events-container" aria-labelledby="denver-event-title">
        <div id="denver-events-header">
            <Text as="h2" id="denver-event-title" font={theme.textStyle.prominent} className="fw-400">
                Denver Events
            </Text>

            { <HeaderLinks /> }
        </div>

        <ul id="denver-events-list" className="unstyled-list">
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
                eventDays.map( (date, i) => {
                    return (
                        <li key={i}>
                            <EventCard date={date} className={i <= 1 ? "highlighted" : undefined}/>
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
            <ul id="denver-events-header-links" className="unstyled-list">
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

class Day {
    number: number
    timestamp: string
    date: Date

    constructor(date: Date) {
        this.date = date
        this.number = date.getDate()
        
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
        return this.date.toLocaleDateString('en-US', { weekday: 'short' })
    }

    getLongDayOfWeek(): string {
        return this.date.toLocaleDateString('en-US', { weekday: 'long' })
    }

    getTimestamp(): string {
        return this.timestamp
    }

    static randomInPast(length: number, maxDaysBack: number): Date[] {
        var dates: number[] = []
        var today = new Date().getDate();

        for(var i = 0; i < length; i++) {
            var daysBack = Math.floor(Math.random() * (maxDaysBack - 1) + 1)
            dates.push(today - daysBack);
        }

        dates = dates.sort((lhs, rhs) => {
            return lhs < rhs ? 1 : lhs == rhs ? 0 : -1
        })

        return dates.map(date => {
            var matchingDate = new Date();
            matchingDate.setDate(date);
            return matchingDate;
        })
    }
}


interface EventCardProps {
    className?: string
    date: Date
}

const EventCard: React.FC<EventCardProps> = ({ className, date }) => {
    const theme = useTheme();
    const lorem = useLoremIpsum();
    const title = lorem();

     return <div className={`denver-events-card ${className ?? ''}`} aria-label={title}>
        <div className="denver-events-image-wrapper">
            <img src={Placeholder} alt="placeholder for event" width="auto" height="auto" />
            <time dateTime={date.toISOString().split("T")[0]}>
                {
                    date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric"})
                }
            </time>
        </div>
        <Text as="a" href="#" font={theme.textStyle.secondaryHeadline} className="line-limit-2">
            { title }
        </Text>
        <Text as="a" href="#" font={theme.textStyle.caption} className="line-limit-1">
            { lorem() }
        </Text>
    </div>
}


const Calendar: React.FC = () => {
    const theme = useTheme();
    const days = Array.from({ length: 14 }).map((_, dayOffset) => {
        const date = new Date();
        date.setDate(date.getDate() + dayOffset);

        return new Day(/*date:*/ date);
    });


    return (
        <ul id="denver-events-calendar" className="unstyled-list">
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
                                    <Text as="abbr" font={theme.textStyle.callout} title={day.getLongDayOfWeek()}>
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
