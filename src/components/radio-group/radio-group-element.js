import "./radio-group-element.css"
import styled from "styled-components"


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
        color: ${props => props.theme.secondary2};
    }

    & > input[type="radio"] ~ label::before {
        content: '';
        display: inline-block;
        margin-right: 5px;
        border-radius: 50%;
        width: .8em;
        height: .8em;
        border: 2px ${props => props.theme.secondary2} solid;
        transition: .250s ease;
    }

    & > input[type="radio"]:checked ~ label::before {
        content: '';
        display: inline-block;
        margin-right: 5px;
        border-radius: 100%;
        width: .8em;
        height: .8em;
        border: 2px ${props => props.theme.secondary2} solid;
        background-color: ${props => props.theme.main};
        box-shadow: inset 0 0 0 2px ${props => props.theme.font2};
        
    }
`

export default function RadioGroupElement({id, handleClick, theme, checked}) {
    // return (
    //     <div className="radio-group-element">
    //         <input type="radio" id={"theme-" + id} name="theme" onClick={e => handleClick(e.target.id)}/>
            
    //         <label htmlFor={"theme-" + id}>
    //             {"theme " + id}
    //         </label>
    //     </div>
    // );

    return (
        <ButtonWrapper theme={theme[1]}>
            <input type="radio" id={id} name="theme" checked={checked} onClick={e => handleClick(e.target.id)}/>
            <label htmlFor={id}>
                {theme[0]}
            </label> 
        </ButtonWrapper>
    )
}