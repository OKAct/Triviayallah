import {motion} from "motion/react"
import App from './App'
import './App.css'
const Card=(props)=>{

  return (props.check ?

    <motion.div whileTap={{rotateY:360}}


    className="area" onClick={props.onClick}>{props.ques}</motion.div>

   

    :
    <motion.div whileTap={{rotateY:360}}
    className="area2" onClick={props.onClick}>{props.ans}</motion.div>


  );
}
export default Card
