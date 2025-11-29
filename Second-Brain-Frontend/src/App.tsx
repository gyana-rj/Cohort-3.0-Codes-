import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button startIcon={<PlusIcon/>} variant= "primary" text = "Share" size= "md" onClick={() => {}}/>
        <Button variant= "secondary" text = "Add Content" size="md" onClick={() => {}} />
    </>
  )
}

export default App
