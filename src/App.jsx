import React, { useState } from 'react'
import { Textarea } from './components/ui/textarea'

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const App = () => {
  const [input , setInput] = useState('');
  const [suggestedText , setSuggestedText] = useState('');

  const onCheck = (text) => {
    const words = text.split(" ");

    
    const writeWord = words.map((ele) => customDictionary[ele.toLowerCase()] || ele)
    
    const writeText = writeWord.join('')
    
    const firstCorrection = writeWord.find((word , index) => word !== words[index])
    console.log(writeWord);

    setSuggestedText(firstCorrection || "")
  }

  const onChange = (e) => {
    setInput(e.target.value);
    onCheck(e.target.value)
  }

  return (
    <div className=' flex items-center justify-center h-[100vh]'>
        <article className=' w-[30rem]'>
          <h1 className=' mb-5 font-medium text-[1.3rem]'>Spell Check and Auto-Correction</h1>
          <Textarea 
            className = "border-2 focus:outline-none border-stone-800 resize-none h-[10rem]" 
            placeholder = "Enter text..."
            value = {input}
            onChange = {onChange}
          />
          <br />
          {suggestedText && (
            <p className=' text-stone-800'>
              Did you mean : <b>{suggestedText}</b>
            </p>
          )}
        </article>
    </div>
  )
}

export default App