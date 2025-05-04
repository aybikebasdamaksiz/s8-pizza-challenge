import React, { useState } from "react";
import "./App.css";
import Order from "./components/order";
import Home from "./components/home";
import Success from "./components/success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  const [selectedSize, setSelectedSize] = useState("Orta");
  const [selectedDough, setSelectedDough] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [orderNote, setOrderNote] = useState("");
  const [orderCount, setOrderCount] = useState(1);

  const pizzaBasePrice = 85.5;
  const toppingPrice = 5;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <Order
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedDough={selectedDough}
            setSelectedDough={setSelectedDough}
            selectedToppings={selectedToppings}
            setSelectedToppings={setSelectedToppings}
            orderNote={orderNote}
            setOrderNote={setOrderNote}
            orderCount={orderCount}
            setOrderCount={setOrderCount}
            pizzaBasePrice={pizzaBasePrice}
            toppingPrice={toppingPrice}
          />
        </Route>
        <Route exact path="/success">
          <Success
            selectedSize={selectedSize}
            selectedDough={selectedDough}
            selectedToppings={selectedToppings}
            orderNote={orderNote}
            orderCount={orderCount}
            pizzaBasePrice={pizzaBasePrice}
            toppingPrice={toppingPrice}
          />
        </Route>
      </Switch>
    </Router>
  );
}
