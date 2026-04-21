import React from "react";

import SectionBriefColumn from "./Column/SectionBriefColumn";
import './briefs.css';


const Briefs: React.FC = () => {
    return (
        <section className="briefs-container">
            <SectionBriefColumn />
            <SectionBriefColumn />
            <SectionBriefColumn />
        </section>
    )
}

export default Briefs;