import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from './App.jsx';

export default function Sidebar() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <ul className="sidenav" id="mobile-demo">
                    <li>
                        <a
                            className={' ' + (theme === 'dark' ? 'red-text' : 'green-text')}
                            href="#"
                        >
                            Sass
                        </a>
                    </li>
                    <li>
                        <a
                            className={' ' + (theme === 'dark' ? 'red-text' : 'green-text')}
                            href="#"
                        >
                            Components
                        </a>
                    </li>
                    <li>
                        <a
                            className={' ' + (theme === 'dark' ? 'red-text' : 'green-text')}
                            href="#"
                        >
                            Javascript
                        </a>
                    </li>
                    <li>
                        <a
                            className={' ' + (theme === 'dark' ? 'red-text' : 'green-text')}
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
