import React, { useState, useEffect } from "react";
import axios from "../axios"; // Import axios for API requests
import PizzaCard from "../components/PizzaCard"; // Import PizzaCard component

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Fetch pizzas from backend
    axios
      .get("/pizzas")
      .then((response) => {
        setPizzas(response.data); // Store the pizzas in the state
      })
      .catch((err) => {
        console.error("Error fetching pizzas:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Pizza Menu</h2>
      <div className="row">
        {/* Display each pizza card */}
        {pizzas.map((pizza) => (
          <div key={pizza._id} className="col-md-4">
            <PizzaCard pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
