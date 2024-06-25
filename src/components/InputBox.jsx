import React from 'react'

const InputBox = ({displayValue}) => {
  return (
    <input 
    type="text"
    className=" border-2 border-none rounded-md  border-black text-xl "
    value={displayValue}
    readOnly
    />

  )
}

export default InputBox