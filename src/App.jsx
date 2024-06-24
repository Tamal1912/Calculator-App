
import InputBox from "./components/InputBox"
import BtnLists from "./components/BtnLists"
function App() {

  let buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return (
  <center>

   <div className="m-4 w-1/5 bg-sky-300 border-2 border-none rounded-lg p-4 pl-2 pt-2">
   <InputBox></InputBox>
   <BtnLists buttons={buttonNames}></BtnLists> 

   </div>
  </center>
  )
}

export default App
