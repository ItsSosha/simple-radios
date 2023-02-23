import { useState, createContext } from "react"
import RadioGroup from "../radio-group/radio-group"
import Panel from "../panel/panel"
import themes from "./themes"
import styled from "styled-components"
import "./app.css"

const ThemeContext = createContext();

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Content = styled.div`
    width: 1064px;
    height: 512px;
    background-color: ${props => props.theme.main};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function App() {
    const [theme, setTheme] = useState('dark')

    return (
        <ThemeContext.Provider value={themes[theme]}>
            <AppWrapper>
                <Content theme={themes[theme]}>
                    <Panel />
                    <RadioGroup themes={themes}/>
                </Content>
            </AppWrapper>
        </ThemeContext.Provider>
    )
}

export {ThemeContext}