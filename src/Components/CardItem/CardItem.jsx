import './CardItem.css'
function CardItem(props) {
    return (
        <div id="Card" className={props.class} >

            <h1 id='CardHeader'>{props.Tittle}</h1>
            <p id='CardDesc'>{props.Description}</p>
            <img src={props.CardIcon}></img>
        </div>

    )
}
export default CardItem