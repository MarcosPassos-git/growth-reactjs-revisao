import { useState } from 'react'

import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLabelClick = () => {
      console.log("HANDLE LABEL CLICK")
    }

    const handleSubmitForm = (event) => {
      event.preventDefault()
      console.log('HANDLE SUBMIT FORM')
      console.log({email, password})
    }

    
    const handleChangeInput = (event) => {
      setEmail(event.target.value)      
    }

    const handleChangeInputPassword = (event, onChange) => {
      onChange(event.target.value)      
    }

  return (
    <>
      <Title>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar para a página...</label>
      <form onSubmit={handleSubmitForm}>
        
        <Input type="text" placeholder="Digite seu email" onChange={(e) => handleChangeInput(e, setEmail)}/>
        <Input type="password" placeholder="Digite sua senha" onChange={(e) => handleChangeInput(e, setPassword)}/>
        <p>O email digitado foi: {email}</p>
        <Button type="submit">Botão</Button>
      </form>
      <Button>Botão</Button>
      
      <label>LABEL TESTE</label>
    </>
  )
}
