import { useState } from 'react'
import './App.css'
import Card from './Card'
import { motion } from 'motion/react'
import { scroll } from "motion"


function App() {
  const [text, setText] = useState("Click the button to get a trivia")
  const [ans,setAns]=useState("Click the button to get a trivia");
  const [check,changeCheck]=useState("true");

const get_ques= async ()=>{
  const resp=await fetch("https://triviayallah-1.onrender.com/easy")

  const ream=await resp.text();

  const data =await JSON.parse(ream);

  let an=data.results[0].correct_answer;

  await console.log(data.results[0].question);

  await setAns(data.results[0].correct_answer);


  console.log(ans);


  return data.results[0].question;

};


const opposite=()=>{
  changeCheck(!check);

};



  const que=async ()=>{

    const q=await get_ques();

    changeCheck(true);

    setText(q);


    
  }

  return (
    <>

  <div className="box">
    <Card ques={text} check={check} onClick={opposite} ans={ans}></Card>

    <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.5}}
    className="but" onClick={que}>Get Question</motion.button>
    </div>
    
    
    </>
  )
}

export default App

