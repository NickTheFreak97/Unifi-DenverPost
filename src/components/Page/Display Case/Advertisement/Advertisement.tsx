import React from "react";

import './advertisement.css'
import '../Featured/featured.css'

import PlaceholderAds from '@/assets/Placeholders/345x230.svg'

const Advertisement: React.FC = () => {

    return <aside id="ads-banner" aria-label="Advertisements">
        <img src={PlaceholderAds} alt="an advertisement from the Denver Post" width="100%" height="auto" />
    </aside>
}

export default Advertisement;