import { Link } from "react-router-dom";

const styles = {
  display: "block",
  marginLeft: "16px",
};

export const Item = ({ children, to }) => (
  <Link to={to} style={styles}>
    {children}
  </Link>
);
