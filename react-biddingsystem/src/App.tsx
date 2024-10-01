import "./App.css";
import { Route,Routes } from "react-router-dom";
import { UsersView } from "./Comoponents/UsersView";
import { UserHomeUI } from "./Comoponents/UserHomeUI";
import { UserBiddingUI } from "./Comoponents/UserBiddingUI";
function App() {
  return (
      <Routes>
          <Route path="/" element={<UsersView />} />
          <Route path="UserHomePage" element={<UserHomeUI />} />
          <Route  path="UserBiddingPage" element={<UserBiddingUI />}/>
      </Routes>
          
  );
}

export default App;
