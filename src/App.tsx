import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Reviews from "./components/Reviews";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Reviews />
      </Layout>
    </Provider>
  );
}

export default App;
