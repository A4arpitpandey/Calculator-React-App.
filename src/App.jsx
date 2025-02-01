import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";

import { useState } from "react";

import styles from "./App.module.css";
function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal(""); // Clears the display
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText; // Append button text to display
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calulator}>
      <Display DisplayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}> </ButtonsContainer>
    </div>
  );
}

export default App;
