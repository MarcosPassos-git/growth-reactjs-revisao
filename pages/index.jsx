import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
    const handleLabelClick = () => {
      console.log("HANDLE LABEL CLICK")
    }

    const handleSubmitForm = (event) => {
      event.preventDefault()
      console.log('HANDLE SUBMIT FORM')
    }

    let email= ''
    const handleChangeInput = (event) => {
      email = event.target.value
    }

  return (
    <>
      <Title>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar para a página...</label>
      <form onSubmit={handleSubmitForm}>
        
        <Input type="text" placeholder="Digite sua senha" onChange={handleChangeInput}/>
        <p>O email digitado foi: {email}</p>
        <Button type="submit">Botão</Button>
      </form>
      <Button>Botão</Button>
      
      <label>LABEL TESTE</label>
    </>
  )
}
