import Minus from './assets/Minus.svg';

function MinusButton() {
  return(
    <button
      type="button" className="minus">
      <img src={Minus} alt="더하기" />
    </button>
  )
}

export default MinusButton;