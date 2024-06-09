import React, { useState } from "react";
import CustomModal from "./components/CustomModel";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Custom Modal Example</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <CustomModal show={showModal} onClose={handleCloseModal} title="My Modal">
        <p>This is the content of the modal</p>
      </CustomModal>
    </div>
  );
};

export default App;
