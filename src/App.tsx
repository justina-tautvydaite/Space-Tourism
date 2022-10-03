import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import Nav from "./Nav";
import GlobalStyle from "./globalStyles";
import { MyBody } from "./Common.styles";
import { Routes as AppRoutes } from "./routes";
import { getBackgoundByRoute } from "./backgrounds";

function App() {
  const { pathname } = useLocation();
  const background = getBackgoundByRoute(pathname);

  return (
    <MyBody background={background}>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.DESTINATION} element={<Destination />} />
        <Route path={AppRoutes.CREW} element={<Crew />} />
        <Route path={AppRoutes.TECHNOLOGY} element={<Technology />} />
      </Routes>
    </MyBody>
  );
}

export default App;
