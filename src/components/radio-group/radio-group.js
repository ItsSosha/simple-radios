import RadioGroupElement from "./radio-group-element";
import "./radio-group.css"
import { useState } from "react";

export default function RadioGroup() {
    const [checked, setChecked] = useState('');

    const handleClick = id => {
        setChecked(id);
    }

    return (
        <div className="radioGroup">
            <RadioGroupElement id={1}>

            </RadioGroupElement>
            <RadioGroupElement id={2}>

            </RadioGroupElement>
            <RadioGroupElement id={3}>

            </RadioGroupElement>
        </div>
    )
}