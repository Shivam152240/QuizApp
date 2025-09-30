import React, { useState } from 'react'
import './Quiz.css'
import QuestionList from './QuestionList.js'
import Questions from './question.js'
const Quiz = () => {

    const [current, setCurrent] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const handleclick = (Option) => {
        setCurrentAnswer(Option);
        if(Option === Questions[current].Answer){
            setScore(score + 1);
        }
    }
    const nextquestion = () =>{
         if(currentAnswer===null){
           return alert("Please select an option before proceeding to the next question.");
         }else{
           
            setCurrent(current +1);
            setCurrentAnswer(null);
         }
            
        
    }
  return (
    <div >
       { current<Questions.length ? <div className='quiz'>  <QuestionList question={Questions[current].Question}
      Option = {Questions[current].Option} handleclick={handleclick} currentAnswer={currentAnswer}/>
      <button className={currentAnswer===null?'disable':'button'} onClick={nextquestion} >Next Question</button></div> : <h1 className='score'>Your score is {score} out of {Questions.length}</h1> }
    
    </div>
  )
}

export default Quiz
