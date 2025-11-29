import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex gap-4">
        <Button startIcon={<ShareIcon size={"md"}/>} variant= "primary" text = "Share" size= "md" onClick={() => {}}/>
        <Button startIcon={<PlusIcon size={"md"}/>} variant= "secondary" text = "Add Content" size="md" onClick={() => {}} />
    </div>
  )
}

export default App
