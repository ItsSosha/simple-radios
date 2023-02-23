import { useContext } from "react";
import { ThemeContext } from "../app/app";
import styled from "styled-components";
import "./panel.css"

const StyledPanel = styled.div`
margin: 25px 40px 25px 25px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.secondary2};
border-radius: 10px;
width: 60%;
height: 80%;
color: ${props => props.theme.font2};
font-size: 30px;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;
font-family: consolas
`

export default function Panel() {

    const theme = useContext(ThemeContext);

    return (
        <StyledPanel theme={theme}>
            <p>Themed panel text</p>
        </StyledPanel>
    )
}