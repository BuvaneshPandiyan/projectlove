import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './Header.css';

function Header() {
  return (
    <header className="unique-header">
      <h1>Hey Usha Kumari</h1>
      <nav>
        <ul>
          <li><Link to="/story">Our Story</Link></li> {/* Replace href with to */}
          <li><Link to="/countdown">Countdown</Link></li> {/* Replace href with to */}
          <li><Link to="/regretandapologies">Regrets And Apologies</Link></li>
          <li><Link to="/frequentlyaskedquestions">FAQ</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
