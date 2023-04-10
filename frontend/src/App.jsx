import React, {useEffect} from "react";

function App(props) {
  const { apploading, actions, notify, products } = props;

  useEffect(() => {
    if(!products.length) {
        actions.fetchProducts();
    }
  }, [])

  console.log(products)
  
  return <></>;
}

export default App;
