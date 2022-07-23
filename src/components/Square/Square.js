import './Square.css'
import classNames from 'classnames';

const Square = ({ value, onClick, turn, winner }) => {
    
    const handleClick = () => {
        (turn !== null && value === null) && onClick();
        console.log(turn, value);
    }

    let squareClass = classNames({
        square: true,
        [`square--${value}`]: value !== null,
        winner: winner,
    })
    
    return (
        <div className={squareClass} onClick={()=> handleClick()}>

        </div>
    )
}

export default Square;