import RadioGroup from "../radio-group/radio-group"
import Panel from "../panel/panel"
import "./app.css"

export default function App() {
    return (
        <div className="app">
            <div className="content">
                <Panel />
                <RadioGroup />
            </div>
        </div>
    )
}