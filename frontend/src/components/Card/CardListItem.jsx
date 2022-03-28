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
      <p>{props.message.description}</p>
    </div>
  );
};
