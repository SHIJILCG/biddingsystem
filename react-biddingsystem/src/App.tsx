import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UsersView } from "./Comoponents/UsersView";
import { UserHomeUI } from "./Comoponents/UserHomeUI";
import { UserBiddingUI } from "./Comoponents/UserBiddingUI";
import { ContextComponent } from "./Comoponents/ContextComponent";
function App() {
  return (
    <ContextComponent>
      <Routes>
        <Route path="/" element={<UsersView />} />
        <Route path="UserHomePage" element={<UserHomeUI />} />
        <Route path="UserBiddingPage" element={<UserBiddingUI />} />
      </Routes>
    </ContextComponent>
  );
}

export default App;
