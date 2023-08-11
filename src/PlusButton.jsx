import Plus from './assets/plus.svg';

function PlusButton() {
  return(
    <button
      type="button" className="plus">
      <img src={Plus} alt="더하기" />
    </button>
  )
}

export default PlusButton;