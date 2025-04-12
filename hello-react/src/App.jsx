// Import Libraries
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import List from './List';


// Create Components
function App(){
  return(
    <div className='App'>
    <h1>Hello React</h1>
    <Header />
    <List />
    <Footer />
    </div>
  );
}
// Export Default
export default App;