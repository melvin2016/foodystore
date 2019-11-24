import React from 'react';

// Navbar
import Navbar from './components/includes/Nav/Nav';
// Section: Showcase
import Showcase from './components/showcase/Showcase';
// Section: Showcase Image
import ShowcaseImg from './components/showcase/ShowcaseImg';
// Section: Application
import Application from './components/App/Application';

function App() {
  return (
    <div>
      <ShowcaseImg/>
      <Navbar/>
      <Showcase/>
      <Application/>
    </div>
  );
}

export default App;
