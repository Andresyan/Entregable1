import { useState } from 'react';
import './App.css';
import quotes from './quotes.json';
import QuoteBox from './QuoteBox';
import ButtomCard from './ButtomCard';
import AuthorQuote from './AuthorQuote';

const colors = [
'#FF6633', '#FFB399', '#FF33FF', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#1AFF33', '#999933', '#6666FF',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6'];
function App() {
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  const changeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];
  document.body.style = `background: ${color}`;


  return (
    <div className="App">
      <div className='card' style={{color: color}}>
      <QuoteBox quote={quotes[index].quote}/>
      <AuthorQuote author={quotes[index].author}/>
      <ButtomCard color={color} changeQuote={changeQuote}/>
      </div>
    </div>
  )
}

export default App
