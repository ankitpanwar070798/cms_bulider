import React, { useState } from "react";
import "./App.css";


const Input = () => {
  return <input placeholder="Your input here" />;
};

const Select = () => {
  return (
    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
};

const Image = () => {
  return <input type="file" />;
};

const CheckBox = () => {
  return <input type="checkBox" />;
};

const App = () => {
  const [toggleState, setToggleState] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputList, setInputList] = useState([]);
  const [selectBox, setSelectBox] = useState([]);
  const [image, setImage] = useState([]);
  const [checkBox, setCheckBox] = useState([]);

  const onAddInputBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };
  const onAddSelectBtnClick = (event) => {
    setSelectBox(selectBox.concat(<Select key={selectBox.length} />));
  };

  const onAddImageBtnClick = (event) => {
    setImage(image.concat(<Image key={image.length} />));
  };
  const onAddCheckBtnClick = (event) => {
    setCheckBox(checkBox.concat(<CheckBox key={checkBox.length} />));
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="App">
      <div className="left">
        <h1>Deep-CMS</h1>
        <div
          className={toggleState === 1 ? "data active-tabs" : "data"}
          onClick={() => toggleTab(1)}
        >
          Home:
        </div>
        <div
          className={toggleState === 2 ? "data active-tabs" : "data"}
          onClick={() => toggleTab(2)}
        >
          Page Section:
        </div>
      </div>
      <div className="right">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="home-container">Welcome to DeepSense</div>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="container">
            <div className="title ">
              <label>Page Title:-</label>
              <input type="text" className="" />
            </div>
            {/* components should add here  */}
            {inputList}
            {selectBox}
            {image}
            {checkBox}
            <div className="component-btn">
              <button onClick={() => setIsModalOpen(true)}>
                Add Componenet
              </button>
              {isModalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <h2>Modal Title</h2>
                    <div className="boby">
                      <button onClick={onAddInputBtnClick}>Input Field</button>
                      <button onClick={onAddSelectBtnClick}>Select Box</button>
                      <button onClick={onAddImageBtnClick}>Image</button>
                      <button onClick={onAddCheckBtnClick}>Check box</button>
                    </div>
                    <button onClick={() => setIsModalOpen(false)}>Close</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
