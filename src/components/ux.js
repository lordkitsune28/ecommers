import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Form, ProgressBar } from 'react-bootstrap'
import { ux } from '../helpers/preguntas';
import { Avatar, ButtonStyle, DivForm, FormStyle, RadioStyle, Select, Titulo } from '../styled/CardQuestion'

export default class Ux extends Component {
    constructor() {
        super();
        this.state = {
            vidas: 4,
            numberQuestion: 0,
            question: {
                question: "",
                a: "",
                b: "",
                c: "",
                correct: ""
            },
            score: 0,
            answerSelect: "",
            disable: "d-block"
        }
    }

    componentDidMount() {
        const currentQuizData = ux[this.state.numberQuestion]

        this.setState({
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                correct: currentQuizData.correct
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        if (this.state.answerSelect == this.state.question.correct) {

            alert("Respuesta Correcta")
            this.setState({
                score: this.state.score + 1,
            })
        } else {

            alert("Respuesta Incorrecta")
            this.setState({
                vidas: this.state.vidas - 1,
            })
        }
        if (this.state.vidas === 1) {
            this.setState({
                disable: "d-none",
            })
        }
        if (this.state.numberQuestion < ux.length) {
            this.componentDidMount()
        } else {
            console.log(this.state.score);
        }
    }

    onChanged = (e) => {
        this.setState({
            answerSelect: e.currentTarget.value
        })
    }

    render() {
        return (
            <DivForm>
                <FormStyle onSubmit={this.handleSubmit}>
                    <Link className='mx-2' to="/menu"><img src="https://res.cloudinary.com/donoutoby/image/upload/v1645242708/sprint2/Property_1_x_mzbopt.svg" /></Link>
                    <div className='w-75 mt-5 d-inline-block'>
                        <ProgressBar variant="success" min={0} max={2} now={this.state.numberQuestion} />
                    </div>
                    <img className='mx-2' src="https://res.cloudinary.com/donoutoby/image/upload/v1645242707/sprint2/Property_1_heart_iolhz1.svg" />{this.state.vidas}
                    <Form.Group className="mb-1" controlId="control-radio" style={{ padding: "4rem" }}>
                        <Avatar src="https://res.cloudinary.com/donoutoby/image/upload/v1645242651/sprint2/Property_1_1_zthrzm.png" />
                        <Titulo>{this.state.question.question}</Titulo>
                        <div>
                            <Select>
                                <label className='d-inline-block ms-2 w-75'>{this.state.question.a}</label>
                                <RadioStyle
                                    type="radio"
                                    value={this.state.question.a}
                                    name={'respuestas'}
                                    id={`respuesta1`}
                                    onChange={this.onChanged}
                                />
                            </Select>
                            <Select>
                                <label className='d-inline-block ms-2 w-75'>{this.state.question.b}</label>
                                <RadioStyle
                                    type="radio"
                                    value={this.state.question.b}
                                    name={'respuestas'}
                                    id={`respuesta2`}
                                    onChange={this.onChanged}
                                />
                            </Select>
                            <Select>
                                <label className='d-inline-block ms-2 w-75'>{this.state.question.c}</label>
                                <RadioStyle
                                    type="radio"
                                    value={this.state.question.c}
                                    name={'respuestas'}
                                    id={`respuesta3`}
                                    onChange={this.onChanged}
                                />
                            </Select>
                        </div>
                    </Form.Group>
                    <center>
                        <ButtonStyle variant="primary" className={this.state.disable} type="submit" onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }}>
                            COMPROBAR
                        </ButtonStyle>
                    </center>
                    {/* <h2 style={{ textAlign: "center" }}>{this.state.score}/{html.length} </h2> */}
                </FormStyle>
            </DivForm>
        )
    }
}