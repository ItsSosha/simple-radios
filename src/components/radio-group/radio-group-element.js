import "./radio-group-element.css"
import styled from "styled-components"
import { ThemeContext } from "../app/app"
import { useContext } from "react"


const ButtonWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;

    & input[type="radio"] {
        visibility: hidden;
    }

    & > input[type="radio"] ~ label {
        color: ${props => props.theme.secondary};
    }

    & > input[type="radio"] ~ label::before {
        content: '';
        display: inline-block;
        margin-right: 5px;
        border-radius: 50%;
        width: .8em;
        height: .8em;
        border: 2px ${props => props.theme.secondary} solid;
        transition: .250s ease;
    }

    & > input[type="radio"]:checked ~ label::before {
        content: '';
        display: inline-block;
        margin-right: 5px;
        border-radius: 100%;
        width: .8em;
        height: .8em;
        border: 2px ${props => props.theme.secondary} solid;
        background-color: ${props => props.theme.main};
        box-shadow: inset 0 0 0 2px ${props => props.theme.font};
        
    }
`

export default function RadioGroupElement({id, checked, theme}) {

    const selectedTheme = useContext(ThemeContext);

    return (
        <ButtonWrapper theme={theme}>
            <input type="radio" id={id} name="theme" checked={checked} onChange={e => selectedTheme.setSelectedTheme(e.target.id)}/>
            <label htmlFor={id}>
                {id}
            </label> 
        </ButtonWrapper>
    )
}