import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
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
      <main>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Home />} />
          <Route path={AppRoutes.DESTINATION} element={<Destination />} />
          <Route path={AppRoutes.CREW} element={<Crew />} />
          <Route path={AppRoutes.TECHNOLOGY} element={<Technology />} />
        </Routes>
      </main>
    </MyBody>
  );
}

export default App;
