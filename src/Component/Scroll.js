import React, { useState, useEffect } from 'react';

const Scroll= () => {
    // State to show or hide the button
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top of page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // smooth scrolling
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={styles.scrollToTopButton}
                >
                    ↑
                </button>
            )}
        </div>
    );
};

const styles = {
    scrollToTopButton: {
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#EC8B0D',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        padding: '10px 20px',
        fontSize: '20px',
        fontWeight: '60px',
        cursor: 'pointer',
        zIndex: 1000,
    },
};

export default Scroll;
