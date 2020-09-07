import React, {useEffect, useRef, useState} from 'react'

export default function Hello() {
  const [inputValue, setInputValue] = useState<string | undefined>('');

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    console.log("### > useEffect", {inputValue});
    if (inputValue === undefined) {
      if (inputRef.current) {
        console.log('### force clear')
        inputRef.current.value = '';
      }
    }
  }, [inputValue])

  return <div>
    <h1>Type an invalid number in the number input</h1>
    <input type='number' value={inputValue} onChange={(e) => setInputValue(e.target.value)} ref={inputRef}/>
    <button onClick={() => setInputValue(undefined)}>Clear</button>
    <hr/>
    Input Value: {inputValue}
  </div>
};
