import React from 'react'
import './Quiz.css'

const QuestionList = ({question,Option,handleclick,currentAnswer}) => {
  return (
    <div className='question-list'>
        <h1 className='img'><img src='../images2.jpg'/> </h1>
      <h2>{question}</h2>
      <ul>
        {Option.map((option,index) => (
          <li> <h3  key={index} onClick={()=>{handleclick(option)}} className={currentAnswer === option ? "selected":'option'} > {option}</h3></li> 
        ))}
      </ul>
    </div>
  )
}
export default QuestionList
