import React from "react";
import { render } from "react-dom";
import "./styles/styles.scss";

const App = () => (
  <div id="App" class="blue light-mode">
    <header>
      <div id="logo">
        <svg
          className="icon icon-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 360.4"
        >
          <path d="M499.7 82.2c0-7.5-4.1-14.4-10.6-18L378.7 2.6C372.2-1 364.3-0.9 358 2.9l-97 57.8c-6.4 3.8-14.4 3.9-20.9 0.2L139.9 3.5c-6.5-3.7-14.5-3.7-20.9 0.2L10.1 68.5C3.8 72.3 0 79 0 86.4l0.3 123.3c0 7.5 4 14.3 10.6 18l230.8 130c6.3 3.6 14.1 3.6 20.4-0.1L489.5 228c6.5-3.7 10.5-10.6 10.5-18.1L499.7 82.2zM460.1 102.2l-75.6 43.9c-6.2 3.6-13.9-0.9-13.9-8l-0.2-87.4c0-7.1 7.7-11.6 13.9-8L460 86.1C466.2 89.7 466.2 98.6 460.1 102.2z" />
        </svg>
        <h1>Lorem Ipsum Title</h1>
      </div>

      <ul id="header-right">
        <li>
          <svg
            className="icon icon-color"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            onClick="myFunction()"
          >
            <path d="M25 5a20 20 0 0 0 0 40 3.3 3.3 0 0 0 3.3-3.3 3.4 3.4 0 0 0-0.9-2.2A3.3 3.3 0 0 1 30 33.9h3.9A11.1 11.1 0 0 0 45 22.8C45 13 36 5 25 5ZM12.8 25a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 12.8 25Zm6.7-8.9a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 19.4 16.1Zm11.1 0a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 30.6 16.1ZM37.2 25a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 37.2 25Z" />
          </svg>
          <ul id="palette-menu" class="hidden">
            <li className="colors">
              <ul>
                <li className="bg-teal active" />
                <li className="bg-lt-blue" />
                <li className="bg-blue" />
                <li className="bg-purple" />
                <li className="bg-pink" />
                <li className="bg-red" />
                <li className="bg-yellow" />
              </ul>
            </li>
            <li className="options">
              <ul>
                <li>
                  <svg
                    className="icon icon-toggle-off"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path d="M35 15H15a10 10 0 0 0 0 20H35a10 10 0 0 0 0-20ZM15 33a8 8 0 1 1 8-8A8 8 0 0 1 15 33Z" />
                  </svg>
                  <span>Dark mode</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <svg
            className="icon icon-user"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M8.1 35.9c0.1-2.6 2-4.6 5.9-6.3a28.1 28.1 0 0 1 11-2.4 27.6 27.6 0 0 1 11 2.5c3.9 1.7 5.8 3.8 5.9 6.2Q35.7 45 25 45T8.1 35.9ZM25 21.9a8.2 8.2 0 0 0 6-2.5 8.1 8.1 0 0 0 2.5-6 8.2 8.2 0 0 0-2.5-6A8.4 8.4 0 0 0 25 5a8.2 8.2 0 0 0-6 2.5 8.1 8.1 0 0 0-2.5 6A8.5 8.5 0 0 0 25 21.9Z" />
          </svg>
          <ul id="user-menu" class="hidden">
            <li className="username">email@website.com</li>
            <li className="options">
              <ul>
                <li>
                  <svg
                    className="icon icon-user"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path d="M8.1 35.9c0.1-2.6 2-4.6 5.9-6.3a28.1 28.1 0 0 1 11-2.4 27.6 27.6 0 0 1 11 2.5c3.9 1.7 5.8 3.8 5.9 6.2Q35.7 45 25 45T8.1 35.9ZM25 21.9a8.2 8.2 0 0 0 6-2.5 8.1 8.1 0 0 0 2.5-6 8.2 8.2 0 0 0-2.5-6A8.4 8.4 0 0 0 25 5a8.2 8.2 0 0 0-6 2.5 8.1 8.1 0 0 0-2.5 6A8.5 8.5 0 0 0 25 21.9Z" />
                  </svg>
                  <span>Profile</span>
                </li>
                <li>
                  <svg
                    className="icon icon-logout"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <path d="M35 15 45 25 35 35l-2.8-2.8L37.4 27H17V23H37.4l-5.2-5.2ZM9 43H25V39H9V11H25V7H9a4 4 0 0 0-4 4V39A4 4 0 0 0 9 43Z" />
                  </svg>
                  <span>Log out</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <nav>
        <ul>
          <li className="active">Totals</li>
          <li>Consoles</li>
          <li>Games</li>
          <li>Controllers</li>
          <li>Peripherals</li>
          <li>Amiibo</li>
        </ul>
      </nav>
    </header>
  </div>
);

render(<App />, document.getElementById("app"));
