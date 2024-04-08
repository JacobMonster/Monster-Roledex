import Card from "../card/card.comonent";
import "./card-list.styles.css";
import "../card/card.comonent";

const Cardlist = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default Cardlist;
