import {useState, useEffect } from 'react'
import React from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(30)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  
  function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
  }


  
  useEffect(() => {
      if(isTimeRunning && timeRemaining > 0) {
          setTimeout(() => {
              setTimeRemaining(time => time - 1)
          }, 1000)
      } else if(timeRemaining === 0) {
          setIsTimeRunning(false)
          setWordCount(calculateWordCount(text))
      }
  }, [timeRemaining, isTimeRunning])
  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea
              onChange={handleChange}
              value={text}
          />
          <h4>Time remaining: {timeRemaining}</h4>
          <button onClick={() => setIsTimeRunning(true)}>Start</button>
          <h1>Word count: ???</h1>
      </div>
  )
}

export default App