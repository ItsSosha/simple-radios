import RadioGroupElement from "./radio-group-element";
import { ThemeContext } from "../app/app";
import "./radio-group.css"
import { useState, useContext } from "react";

export default function RadioGroup({themes}) {

    const selectedTheme = useContext(ThemeContext);

    const buttons = themes.map(theme => {
        const checked = theme.name == selectedTheme.theme.name
        return (
            <RadioGroupElement id={theme.name} checked={checked ? true : false} theme={theme}/>
        );
    }
    );

    return (
        <div className="radioGroup">
            {buttons}
        </div>
    )
}