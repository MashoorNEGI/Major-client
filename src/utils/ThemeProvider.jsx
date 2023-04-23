import React from "react";
import Cookies from "js-cookie";
const ThemeProvider = ({ children }) => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    };
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    };

    React.useEffect(() => {
        const theme = Cookies.get('theme');
        if (theme === 'dark') {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, []);

    return <>{children}</>;
};

export default ThemeProvider