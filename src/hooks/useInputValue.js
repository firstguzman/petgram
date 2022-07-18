import { useState } from 'react'

export function useInputValue (initialvalue) {
  const [value, setValue] = useState(initialvalue)
  const onChange = (e) => setValue(e.target.value)

  return { value, onChange }
}
