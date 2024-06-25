
import InputBox from "./components/InputBox"
import BtnLists from "./components/BtnLists"
import { useState } from "react";
function App() {

  let buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  let [showCalcs,setShowCalcs]=useState("");

  let onButtonClick=(item)=>{
  if(item === 'C'){
  setShowCalcs("");
  }else if(item === '='){
  const result = eval(showCalcs);
  setShowCalcs(result)
  }else{
    let newValue=showCalcs+item;
    setShowCalcs(newValue)
  }
  }

  return (
  <center>

   <div className="m-4 w-1/5 bg-sky-300 border-2 border-none rounded-lg p-4 pl-2 pt-2">
   <InputBox displayValue={showCalcs}></InputBox>
   <BtnLists onButtonClick={onButtonClick} buttons={buttonNames}></BtnLists> 

   </div>
  </center>
  )
}

export default App
