





import React from 'react';
import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const headerStyle = {
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: '#f4f4f4',
        borderBottom: '1px solid #ddd',
    };

    const headerTitleStyle = {
        fontSize: '24px',
        margin: '0',
    };

    const headerSubtitleStyle = {
        fontSize: '18px',
        margin: '0',
        color: '#666',
    };

    const navbarContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 20px',
        backgroundColor: '#f4f4f4',
        borderBottom: '1px solid #ddd',
    };

    const navbarStyle = {
        display: 'flex',
        flexDirection: 'row', // Row for larger screens
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: '#f4f4f4',
    };

    const searchStyle = {
        marginRight: '20px',
        flex: 1, // Make it flexible to grow/shrink
    };

    const searchInputStyle = {
        width: '100%',
        padding: '5px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    };

    const navLinksStyle = {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        margin: '0',
        padding: '0',
    };

    const navLinkItemStyle = {
        margin: '0 15px',
    };

    const navLinkStyle = {
        color: 'black',
        textDecoration: 'none',
        fontSize: '16px',
    };

    const iconsContainerStyle = {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
    };

    const iconStyle = {
        fontSize: '20px',
        marginLeft: '20px',
        cursor: 'pointer',
        color: 'black',
    };

    // Responsive Media Queries
    const responsiveStyles = {
        '@media (max-width: 768px)': {
            navbarStyle: {
                flexDirection: 'column', // Stack elements on smaller screens
                alignItems: 'center',
            },
            navLinksStyle: {
                flexDirection: 'column',
                alignItems: 'center',
            },
            searchStyle: {
                marginBottom: '10px', // Add spacing for search box on small screens
            },
        },
    };

    return (
        <div>
            <header style={headerStyle}>
                <h1 style={headerTitleStyle}>Pritam Nayak</h1>
                <h2 style={headerSubtitleStyle}>Couture</h2>
            </header>
            <div style={navbarContainerStyle}>
                <nav style={{ ...navbarStyle, ...responsiveStyles.navbarStyle }}>
                    <div style={{ ...searchStyle, ...responsiveStyles.searchStyle }}>
                        <input
                            type="text"
                            placeholder="Search..."
                            style={searchInputStyle}
                        />
                    </div>
                    <ul style={{ ...navLinksStyle, ...responsiveStyles.navLinksStyle }}>
                        <li style={navLinkItemStyle}>
                            <a style={navLinkStyle} href="#new-in">
                                New In
                            </a>
                        </li>
                        <li style={navLinkItemStyle}>
                            <a style={navLinkStyle} href="#collection">
                                Collection
                            </a>
                        </li>
                        <li style={navLinkItemStyle}>
                            <a style={navLinkStyle} href="#accessories">
                                Accessories
                            </a>
                        </li>
                        <li style={navLinkItemStyle}>
                            <a style={navLinkStyle} href="#runway">
                                Runway
                            </a>
                        </li>
                        <li style={navLinkItemStyle}>
                            <a style={navLinkStyle} href="#vows">
                                Vows
                            </a>
                        </li>
                        <li style={navLinkItemStyle}>
                            <a style={navLinkStyle} href="#about">
                                About
                            </a>
                        </li>
                    </ul>
                    <div style={iconsContainerStyle}>
                        <FaHeart style={iconStyle} />
                        <FaShoppingCart style={iconStyle} />
                        <FaUserCircle style={iconStyle} />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

