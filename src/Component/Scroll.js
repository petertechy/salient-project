import React, { useState, useEffect } from 'react';
import eee from '../assets/Images/GoUp.png'


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
                <img src={eee} alt="scroll"  style={styles.scrollToTopButton} onClick={scrollToTop} />
                
            )}
        </div>
    );
};

const styles = {
    scrollToTopButton: {
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        width:'50px',
        cursor: 'pointer',
        zIndex: 1000,
    },
};

export default Scroll;
