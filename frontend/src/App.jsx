import { Outlet } from "react-router-dom";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";

const headerStyles = {
  display: "flex",
  flexDirection: "row",
};

const App = () => {
  return (
    <>
      <div style={headerStyles}>
        <Logo />
        <Navigation />
      </div>
      <div style={{ margin: "1rem 0" }}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
