import React, { useEffect, useState } from 'react'
import styles from './cookie.module.scss'
import ReactGA from "react-ga4";

export const CookieBanner = () => {
    const [consent, setConsent] = useState(false)

    useEffect(() => {
        const userConsent = localStorage.getItem('cookieConsent');
        if (userConsent) {
            setConsent(true);
        }
    }, []);

    const handleConsent = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setConsent(true);
        ReactGA.initialize("G-ML7HRSL6E3");
    };

    const denyConsent = () => {
        localStorage.setItem('cookieDenied', 'denied');
        setConsent(true);
    }

    return (
        !consent && (
            <div className={styles.overlay}>
                <div className={styles.cookiePopup}>
                    <h3>Denne hjemmeside bruger cookies</h3>
                    <p>Vi bruger cookies til at tilpasse vores indhold og annoncer, til at vise dig funktioner til sociale medier og til at analysere vores trafik. Vi deler også oplysninger om din brug af vores hjemmeside med vores partnere inden for sociale medier, annonceringspartnere og analysepartnere. Vores partnere kan kombinere disse data med andre oplysninger, du har givet dem, eller som de har indsamlet fra din brug af deres tjenester.</p>
                    <div className={styles.buttonWrapper}>
                        <button onClick={denyConsent}>Deny</button>
                        <button onClick={handleConsent}>Accept</button>
                    </div>
                </div>
            </div>
        )
    )
}
