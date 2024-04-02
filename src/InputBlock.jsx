import React, { memo, useEffect } from 'react'

const InputBlock = memo(({onChange, onClick, text}) => {

    useEffect(() => {
        console.log('rerender input')
    })
  return (
    <>
    <input onChange={onChange} type="text" placeholder='your text' />
    <button onClick={onClick}>{text}</button>
    </>
  )
})

export default InputBlock