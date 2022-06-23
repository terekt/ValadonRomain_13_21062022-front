import "./marketing-item.css";

function MarketingItem(props) {

    return (
        <div className="feature-item">
          <img src={props.img} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{props.title}</h3>
          <p>
            {props.text}
          </p>
        </div>
    )
}
export default MarketingItem;