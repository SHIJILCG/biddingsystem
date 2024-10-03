import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UsersView } from "./Pages/UsersView";
import { UserHomeUI } from "./Pages/UserHomeUI";
import { UserBiddingUI } from "./Pages/UserBiddingUI";
import { ContextComponent } from "./Pages/ContextComponent";
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
