import { useState } from 'react'
import Encriptar from "./Encriptar"
import Desencriptar from "./Desencriptar"

const Content = () => {
  const [text, setText] = useState({})

  return (
    <main className="container">
        <div className='row'>
            <Encriptar text={text} setText={setText}/>
            <Desencriptar text={text} setText={setText} />
        </div>
    </main>
  )
}

export default Content
