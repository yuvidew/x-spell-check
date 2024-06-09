import { useState } from 'react'
import { Textarea } from './components/ui/textarea';


function App() {

  const [inputText, setInputText] = useState("")
  const [suggestedText, setSuggestedText] = useState("")

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text)

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
    const correctedWord = customDictionary[word.toLowerCase()];
    return correctedWord || word;
  });

  const correctedText = correctedWords.join(" ");

  // Set the suggested text (first corrected word)
  const firstCorrection = correctedWords.find(
    (word, index) => word !== words[index]
  );
  setSuggestedText(firstCorrection || "" );

  }

  return (
    <section className=' flex items-center justify-center h-[100vh]'>
      <div className=' w-[30rem]'>

        <h1 className=' font-medium mb-5 text-[1.6rem]'>Spell Check and Auto-Correction</h1>
        <Textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          className = " border-2 border-stone-800"
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p className=' mt-3'>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
    </section>
  )
}

export default App