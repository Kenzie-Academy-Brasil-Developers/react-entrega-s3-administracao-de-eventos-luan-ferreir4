import { Bar } from "../../styles/cataloguePage"
import { Button } from "../Button"

export const TopBar = ({type}) => {
    return(
        <Bar>
            <img src="images/bottleWhite.png" alt="wine-bottle" />
            <h1>{type}</h1>
            <Button type="toEvents" />
        </Bar>
    )
}