import './Cards.css'
import SuperviserImg from '../../assets/images/icon-supervisor.svg'
import TeamImg from '../../assets/images/icon-team-builder.svg'
import KarmaImg from '../../assets/images/icon-karma.svg'
import CalculatorImg from '../../assets/images/icon-calculator.svg'
import CardItem from '../CardItem/CardItem'
function Cards() {
    const ArrayOfObjects = [
        { id: 1, Tittle: "Superviser", Description: "Monitors activity to identify project roadblocks", CardIcon: SuperviserImg, BorderColor: "cymnColor", class: "Card1" },
        { id: 2, Tittle: "Team Builder", Description: "Monitors activity to identify project roadblocks", CardIcon: TeamImg, BorderColor: "RedColor", class: "Card2" },
        { id: 3, Tittle: "Calculator", Description: "Monitors activity to identify project roadblocks", CardIcon: CalculatorImg, BorderColor: "BlueColor", class: "Card3" },
        { id: 4, Tittle: "Karma", Description: "Monitors activity to identify project roadblocks", CardIcon: KarmaImg, BorderColor: "OrangeColor", class: "Card4" }

    ]

    return (
        <div id="Cards">

            {ArrayOfObjects.map((item) => {
                return (
                    <CardItem
                        key={item.id}
                        Tittle={item.Tittle}
                        Description={item.Description}
                        CardIcon={item.CardIcon}
                        class={item.class}
                    ></CardItem>

                );
            }
            )}
        </div>
    )
}
export default Cards

