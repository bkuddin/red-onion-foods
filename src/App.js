import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import ChooseUs from "./Pages/ChooseUs/ChooseUs";
import BreakFast from "./Pages/Home/BreakFast/BreakFast";
import Dinner from "./Pages/Home/Dinner/Dinner";
import Home from "./Pages/Home/Home/Home";
import ItemTabs from "./Pages/Home/ItemTabs/ItemTabs";
import Lunch from "./Pages/Home/Lunch/Lunch";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <ItemTabs></ItemTabs>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/breakfast">
            <BreakFast></BreakFast>
          </Route>
          <Route exact path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route exact path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route></Route>
        </Switch>
        <ChooseUs></ChooseUs>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
