import { useCallback, useEffect, useState } from 'react';
import './App.css';
import InputBlock from './InputBlock';

function App() {
  const [value, setValue] = useState('')
  const onClick = useCallback(() => {
    console.log('click')
  }, [])
  const onChange = useCallback((e) => {
    console.log('change')
    setValue(e.target.value)
  }, [])

  useEffect(() => {
    console.log('rerender app')
  })
  return (
    <div className="App">
      <div>{value}</div>
      <InputBlock onChange={onChange} onClick={onClick} text="клик"/>
    </div>
  );
}

export default App;
