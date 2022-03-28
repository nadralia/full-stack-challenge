import { Item } from "./Item";

const items = [
  {
    href: "/",
    txt: "Home",
  },
  {
    href: "/about",
    txt: "About",
  },
  {
    href: "/suppliers",
    txt: "Suppliers",
  },
];

const styles = {
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  listStyleType: "none",
};

export const Navigation = () => (
  <nav>
    <ul style={styles}>
      {items.map(({ href, txt }) => (
        <Item key={href} to={href}>
          {txt}
        </Item>
      ))}
    </ul>
  </nav>
);
