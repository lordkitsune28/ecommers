import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

export const DivForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const FormStyle = styled(Form)`
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 600px;
`

export const Titulo = styled.h2`
    text-align: center;
    margin: 0;
    display: inline-block;
    font-size: 20px;
`
export const RadioStyle = styled(Form.Check)`
    padding: 0;
    margin: 0px 5px 0px auto;
    display: inline-block;
    float: right;
`

export const ButtonStyle = styled(Button)`
    background-color: #8e44ad;
    border:none;
    width: 70%;
    margin: 0px auto 20px auto !important;
    font-size: 1.1rem;
    padding: 1.3rem;
    &:hover{
        background-color: #732d91;
    }
    &:focus{
        outline: none;
        background-color: #5e3370;
    }
`

export const Avatar = styled.img`
width: 15%;
display: inline-block;
`

export const Select = styled.div`
width: 100%;
height: 40%;
border: 1px solid white;
margin-top: 10px;
border-radius: 5px;
`