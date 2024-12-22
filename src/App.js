import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure you're importing Routes and Route from react-router-dom
import Header from './components/Header';
import Story from './components/Story';
import Countdown from './components/Countdown';
import RegretAndApologies from './components/RegretAndApologies';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';

function App() {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="App">
        <Header />
        <Routes>
          {/* Define the routes */}
          <Route path="/story" element={<Story />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/regretandapologies" element={<RegretAndApologies />} />
          <Route path="/frequentlyaskedquestions" element={<FrequentlyAskedQuestions />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
