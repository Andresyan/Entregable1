
const ButtomCard = ({color, changeQuote}) => {
    return (
     <div>
        <button style={{background: color}} onClick={changeQuote}><i class="fa-solid fa-chevron-right"></i></button>
     </div>
    );
};

export default ButtomCard;