import React from "react";
import ProductList from "../components/ProductList";

class Home extends React.Component {
  render() {
    
    return (
      <div className="productCardFlex">
        <ProductList />
      </div>
    );
  }
}

export default Home;