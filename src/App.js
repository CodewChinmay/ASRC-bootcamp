import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Team />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
