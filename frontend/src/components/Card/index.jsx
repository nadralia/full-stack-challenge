import { CardListItem } from "./CardListItem";

export const CardList = ({ messages }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {messages && Object.keys(messages).length !== 0 && (
        <li>
          {messages.map((message) => {
            return <CardListItem message={message} key={message.id} />;
          })}
        </li>
      )}
    </ul>
  );
};
