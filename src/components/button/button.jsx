import styled from 'styled-components'

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;

    label {
        font-weight: bold;
    }

    button {
        background-color: ${(props) => props.theme.primary};
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }
`

export default function Button(props) {
  return (
    <ButtonContainer>
      
      <button {...props}>{props.children}</button>
    </ButtonContainer>
  )
}
