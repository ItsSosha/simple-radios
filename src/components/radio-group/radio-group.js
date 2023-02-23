import RadioGroupElement from "./radio-group-element";
import "./radio-group.css"
import { useState } from "react";

export default function RadioGroup({themes}) {
    const [checked, setChecked] = useState(0);

    const handleClick = id => {
        setChecked(id);
    }

    const themesObj = Object.entries(themes);

    const buttons = Object.entries(themes).map((theme, index) => {
            return (
                <RadioGroupElement id={"theme-" + index} handleClick={handleClick} theme={theme} checked={checked == index ? true : false}/>
            );
        }
    );

    return (
        <div className="radioGroup">
            {buttons}
        </div>
    )
}