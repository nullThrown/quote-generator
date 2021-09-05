import { useState } from 'react';
import './App.css';
import { quotes } from './quotes';

function App() {
  return (
    <main className='main-container'>
      <Header />
      <QuoteGenerator />
    </main>
  );
}

export default App;

const Header = () => {
  return (
    <div className='header-box'>
      <h1 className='logo'>Logo</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
const generateQuote = () => {
  return Math.floor(Math.random() * quotes.length);
};
const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[generateQuote()]);

  const clickHandler = () => {
    setQuote(quotes[generateQuote()]);
  };

  return (
    <div className='quote-generator'>
      <h2 className='title'>Quote Generator</h2>
      <Quote quote={quote} />
      <button className='btn' onClick={clickHandler}>
        Change quote
      </button>
    </div>
  );
};

const Quote = (props) => {
  const { text, author } = props.quote;
  return (
    <>
      <p className='quote'>{text}</p>
      <p className='author'>-{author}</p>
    </>
  );
};
