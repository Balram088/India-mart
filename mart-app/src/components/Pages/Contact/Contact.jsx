
import React from 'react'
import InitialFocus from '../../Navbar/Modal'
import Form from './Form/Form'
import styled from 'styled-components'

const St = styled.button`
margin:100px 10px 100px 600px;
`
export const Contact = () => {
  return (
    <div>
        <Form/>
        <St>
        <button class="mail_button"><InitialFocus/> </button>
        </St>
    </div>
  )
}
