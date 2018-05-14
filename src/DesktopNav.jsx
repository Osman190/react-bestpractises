import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from './App.jsx';

export default function DesktopNav(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <ul className="right hide-on-med-and-down">
                    {console.log(theme)}
                    <li>
                        <a
                            theme={theme}
                            className={' ' + (theme === 'dark' ? 'white-text' : 'red-text')}
                            href="#"
                        >
                            Sass
                        </a>
                    </li>
                    <li>
                        <a
                            theme={theme}
                            className={' ' + (theme === 'dark' ? 'white-text' : 'red-text')}
                            href="#"
                        >
                            Components
                        </a>
                    </li>
                    <li>
                        <a
                            theme={theme}
                            className={' ' + (theme === 'dark' ? 'white-text' : 'red-text')}
                            href="#"
                        >
                            Javascript
                        </a>
                    </li>
                    <li>
                        <a
                            theme={theme}
                            className={' ' + (theme === 'dark' ? 'white-text' : 'red-text')}
                            href="#"
                        >
                            Mobile
                        </a>
                    </li>
                </ul>
            )}
        </ThemeContext.Consumer>
    );
}
