import React from "react";
import ConverterForm from "../components/ConverterForm/ConverterForm";
import Header from "../components/Layout/Header";

const MainView = () => {
  return (
    <>
      <Header />
      <main>
        <ConverterForm />
      </main>
    </>
  );
};

export default MainView;
