document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.toggle__wrapper input');

    const darkButton = document.getElementById('dark');
    const lightButton = document.getElementById('light');

    const checkMode = () => {
        if(localStorage.getItem('colorMode') == null) {
            if(window.matchMedia("(prefers-color-scheme: light").matches) {
                lightButton.click();
            } else if(window.matchMedia("(prefers-color-scheme: dark").matches) {
                darkButton.click();
            }
        }
    }

    const checkModeChange = () => {
        window.matchMedia("(prefers-color-scheme: light").addEventListener('change', (event) => {
            checkMode();
        }) 
    }

    const setColorMode = () => {
        if(localStorage.getItem('colorMode') == 'dark') {
            setDarkMode();
            darkButton.click();
        }
        else if(localStorage.getItem('colorMode') == 'light') {
            setLightMode();
            lightButton.click();
        };
    };
    
    const setDarkMode = () => {
        document.querySelector('body').classList = 'dark2';
    };

    const setLightMode = () => {
        document.querySelector('body').classList = 'light';
    };

    setColorMode();
    checkMode();
    checkModeChange();

    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('click', event => {
            if(darkButton.checked) {
                document.querySelector('body').classList = 'dark2';
                localStorage.setItem('colorMode', 'dark');
            }
            else {
                document.querySelector('body').classList = 'light';
                localStorage.setItem('colorMode', 'light');
            }
        
        });
    };
});

// document.getElementById('dark').checked ? (document.querySelector('body').classList = 'dark2') : (document.querySelector('body').classList = 'light');
// explained: if Dark Mode is checked (? - ternary operator) code is executed if condition is truthy and (: - ternary operator) executes if condition is falsy
// Alternative to IF...ELSE
