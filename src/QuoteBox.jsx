
const QuoteBox = ({quote}) => {
   
    return (
      <div className='card-content'>
      <i class="fa-solid fa-quote-left"></i> 
      <p>{quote}</p>
      </div>
    );
};

export default QuoteBox;