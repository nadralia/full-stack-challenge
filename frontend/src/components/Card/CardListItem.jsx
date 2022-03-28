import { Link } from "react-router-dom";
import { ROUTE_MESSAGE_PREFIX } from "../../config";

export const CardListItem = (props) => {
  return (
    <div
      className="card-container"
      style={{
        width: "50%",
        border: "solid 3px #d3d3d3",
        margin: "10px auto",
      }}
    >
      <Link to={`${ROUTE_MESSAGE_PREFIX}/${props.message.id}`}>
        {props.message.title}
      </Link>
      <p>{props.message.description}</p>
    </div>
  );
};
