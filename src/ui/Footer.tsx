import React from 'react';
import './css/Footer.css';

interface FooterProps {
    companyName?: string;
    year?: number;
}

const Footer: React.FC<FooterProps> = () => {

    return (
        <footer className="footer">
            <button className="app-button">&#127774;</button>
            <button className="app-button">&#128169;</button>
            <button className="app-button">&#128576;</button>
        </footer>
    );
};

export default Footer;