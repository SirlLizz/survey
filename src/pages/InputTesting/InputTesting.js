import React from 'react';
import "./InputTesting.css"
import OccupationalTile from "../../component/OccupationalTile/OccupationalTile";
import {Engineer3D, StartupMentor, EChildPsychologist, InfrastructureDesignerSmartHome, UrbanEcologist, MolecularNutritionist} from "../../data/dictionary";

export default class InputTesting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstAnswer: "",
            secondAnswer: "",
            thirdAnswer: "",
            fourthAnswer: ""
        }
    }

    render() {
        let {firstAnswer, secondAnswer, thirdAnswer, fourthAnswer} = this.state;

        function nextQuestion(question_number){
            const current_question_number = question_number - 1;
            if(current_question_number === 1 && firstAnswer===""){
                return;
            }else if(current_question_number === 2 && secondAnswer===""){
                return;
            }else if(current_question_number === 3 && thirdAnswer===""){
                return;
            }else if(current_question_number === 4 && fourthAnswer===""){
                return;
            }
            const el = document.getElementById('question-' + question_number);
            const el2 = document.getElementById('question-' + current_question_number);
            el.style.display = "block";
            el2.style.display = "none";
            if(question_number*25<=100){
                growProgressBar(question_number*25+"%")
            }
        }

        function growProgressBar(percentage_width){
            const bar = document.getElementById("progress_bar");
            bar.style.width = percentage_width;
        }

        const changeAnswer = event => {
            event.persist()
            this.setState(prev => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
            })
        }

        function checkAnswer() {
            switch (fourthAnswer) {
                case "1":
                    document.getElementById("humanitarian-tile").style.display = "flex"
                    break;
                case "2":
                    document.getElementById("natural-scientific-tile").style.display = "flex"
                    break;
                case "3":
                    document.getElementById("technical-tile").style.display = "flex"
                    break;
                default:
                    alert( "Нет таких значений");
            }
        }

        function displayAllTile(){
            document.getElementById("humanitarian-tile").style.display = "flex"
            document.getElementById("natural-scientific-tile").style.display = "flex"
            document.getElementById("technical-tile").style.display = "flex"
        }

        return (
                <div className="container">
                    <div className="two-thirds column">
                        <div id="progress_bar"/>
                        <div className="questions_box">
                            <div id="question-1">
                                <h2>Вопрос 1</h2>
                                <h3>Какой ваш род деятельности?</h3>
                                <input id="question-1-answer-a" type="radio" name="firstAnswer" value="1" onChange={changeAnswer}/>
                                <label htmlFor= "question-1-answer-a">Школьник/Абитуриент</label>
                                <div className={"indent"}/><br/>
                                <input id="question-1-answer-b" type="radio" name="firstAnswer" value="2" onChange={changeAnswer}/>
                                <label htmlFor="question-1-answer-b">Студент</label>
                                <div className={"indent"}/><br/>
                                <input id="question-1-answer-c" type="radio" name="firstAnswer" value="3" onChange={changeAnswer}/>
                                <label htmlFor="question-1-answer-c">Работаю</label>
                                <div className={"indent"}/><br/>
                                <input id="question-1-answer-d" type="radio" name="firstAnswer" value="4" onChange={changeAnswer}/>
                                <label htmlFor="question-1-answer-d">Другое</label>
                                <br/>
                                <button id="submit1" className="button" onClick={()=>{
                                    nextQuestion(2)
                                }}>Далее</button>
                                <div className="clearfix"></div>
                            </div>

                            <div id="question-2">
                                <h2>Вопрос 2</h2>
                                <h3>Укажите ваш город:</h3>
                                <input id="question-2-answer" name="secondAnswer" value={secondAnswer} onChange={changeAnswer}/><br/>
                                <button id="submit2" className="button" onClick={()=>{
                                    nextQuestion(3)
                                }}>Далее</button>
                                <div className="clearfix"></div>
                            </div>

                            <div id="question-3">
                                <h2>Вопрос 3</h2>
                                <h3>Оцените свою готовность к переезду:</h3>
                                <input id="question-3-answer-a" type="radio" name="thirdAnswer" value="1" onChange={changeAnswer}/>
                                <label htmlFor="question-3-answer-a">Готов,-а</label>
                                <div className={"indent"}/><br/>
                                <input id="question-3-answer-b" type="radio" name="thirdAnswer" value="2" onChange={changeAnswer}/>
                                <label htmlFor="question-3-answer-b">Не готов, -а</label>
                                <div className={"indent"}/><br/>
                                <input id="question-3-answer-c" type="radio" name="thirdAnswer" value="3" onChange={changeAnswer}/>
                                <label htmlFor="question-3-answer-c">Затрудняюсь ответить</label>
                                <div className={"indent"}/><br/>
                                <button id="submit3" className="button" onClick={()=>{
                                    nextQuestion(4)
                                }}>Далее</button>
                                <div className="clearfix"></div>
                            </div>

                            <div id="question-4">
                                <h2>Вопрос 4</h2>
                                <h3>Из предложеного перечня выберите наиболее интересные для вас сферы деятельности:</h3>
                                <input id="question-4-answer-a" type="radio" name="fourthAnswer" value="1" onChange={changeAnswer}/>
                                <label htmlFor="question-4-answer-a">Социально-гуманитарная(изучение общества и духовного мира; например история, археология, политология, экономика, психология и др.)</label>
                                <div className={"indent"}/><br/>
                                <input id="question-4-answer-b" type="radio" name="fourthAnswer" value="2" onChange={changeAnswer}/>
                                <label htmlFor="question-4-answer-b">Естественно-научная(изучение природы; например биология, физика, астрономия, геология и др.)</label>
                                <div className={"indent"}/><br/>
                                <input id="question-4-answer-c" type="radio" name="fourthAnswer" value="3" onChange={changeAnswer}/>
                                <label htmlFor="question-4-answer-c">Техническая(изучение различных форм и направления развития техники; например робототехника, строительство, электротехника, и др.)</label>
                                <div className={"indent"}/><br/>
                                <button id="submit4" className="button" onClick={()=> {
                                    nextQuestion(5)
                                    checkAnswer()
                                }}>Далее</button>
                                <div className="clearfix"></div>
                            </div>
                            <div id="question-5">
                                <div  id={"humanitarian-tile"} className={"tile-block"} style={{display:"none"}}>
                                    <OccupationalTile data={EChildPsychologist}/>
                                    <OccupationalTile  data={StartupMentor}/>
                                </div>
                                <div id={"natural-scientific-tile"} className={"tile-block"} style={{display:"none"}}>
                                    <OccupationalTile  data={UrbanEcologist}/>
                                    <OccupationalTile data={MolecularNutritionist}/>
                                </div>
                                <div id={"technical-tile"} className={"tile-block"} style={{display:"none"}}>
                                    <OccupationalTile data={Engineer3D}/>
                                    <OccupationalTile data={InfrastructureDesignerSmartHome}/>
                                </div>
                                <button id="all-tile" className="button" onClick={
                                    ()=>{
                                        displayAllTile()
                                        document.getElementById("all-tile").style.display = "none"
                                    }}>Показать все варианты</button>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}