import { Link } from "react-router-dom"
import React from 'react';

export const Footer = () => {
    return(
        <footer className="footer">
            <Link to="/privacy-policy">© 2024 LiftOff ZB. All rights reserved.</Link>
        </footer>
    )
}