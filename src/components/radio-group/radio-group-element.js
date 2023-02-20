import "./radio-group-element.css"

export default function RadioGroupElement({id}) {
    return (
        <div className="radio-group-element">
            <input type="radio" id={id} />
            <label for={id}>{id}</label>
        </div>
    );
}