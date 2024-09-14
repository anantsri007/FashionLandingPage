



import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    };

    const footerContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    const footerLinksContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1200px',
        padding: '20px',
    };

    const footerLinkSectionStyle = {
        margin: '10px',
    };

    const footerLinkTitleStyle = {
        fontSize: '18px',
        marginBottom: '10px',
    };

    const footerLinkItemStyle = {
        margin: '5px 0',
        fontSize: '14px',
    };

    const footerLinkStyle = {
        color: '#fff',
        textDecoration: 'none',
    };

    return (
        <footer style={footerStyle}>
            <div style={footerContainerStyle}>
                <div style={footerLinksContainerStyle}>
                    <div style={footerLinkSectionStyle}>
                        <h3 style={footerLinkTitleStyle}>Company</h3>
                        <p style={footerLinkItemStyle}>
                            <a style={footerLinkStyle} href="#about">
                                About Us
                            </a>
                        </p>
                        <p style={footerLinkItemStyle}>
                            <a style={footerLinkStyle} href="#press">
                                Press
                            </a>
                        </p>
                    </div>
                    <div style={footerLinkSectionStyle}>
                        <h3 style={footerLinkTitleStyle}>Couture Process</h3>
                        <p style={footerLinkItemStyle}>
                            <a style={footerLinkStyle} href="#process">
                                Our Process
                            </a>
                        </p>
                    </div>
                    <div style={footerLinkSectionStyle}>
                        <h3 style={footerLinkTitleStyle}>Runways</h3>
                        <p style={footerLinkItemStyle}>
                            <a style={footerLinkStyle} href="#runways">
                                Latest Runways
                            </a>
                        </p>
                    </div>
                    <div style={footerLinkSectionStyle}>
                        <h3 style={footerLinkTitleStyle}>Associations</h3>
                        <p style={footerLinkItemStyle}>
                            <a style={footerLinkStyle} href="#associations">
                                Associations
                            </a>
                        </p>
                    </div>
                    <div style={footerLinkSectionStyle}>
                        <h3 style={footerLinkTitleStyle}>Career</h3>
                        <p style={footerLinkItemStyle}>
                            <a style={footerLinkStyle} href="#career">
                                Career Opportunities
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


