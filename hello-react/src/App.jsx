// Import Libraries
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import List from './List';
import Top from './Top';
import Main from './Main';


// Create Components
function App(){
  return(
    <div className='App'>
    <h1>Hello React</h1>
    <Header list = "10 daftar makanan"/>
    <Main />
    <Top />
    <List />
    <Footer />
    </div>
  );
}
// Export Default
export default App;