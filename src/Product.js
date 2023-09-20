import Toggle from "./toggle.js";

export default function Product(props) {
  return (
    <div className="card">
      <div>
        <img className="img" src={props.imageurl} alt="quadrado" />
        <p>{props.name}</p>
        <p className="price">{props.price}</p>
        <button className="btn">{<Toggle />}</button>
      </div>
    </div>
  );
}
