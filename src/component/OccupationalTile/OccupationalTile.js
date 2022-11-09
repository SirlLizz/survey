import React, {Component} from 'react';
import "./OccupationalTile.css"

export default class OccupationalTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }

    render() {
        let {data} = this.state;

        window.onclick = function(event) {
            const modalWindow = document.getElementById("ModalOccupationalTile_"+data.name)
            if (event.target === modalWindow) {
                modalWindow.style.display = "none";
            }
        }

        return (
            <>
                <button className={"tile_btn"} onClick={()=>document.getElementById("ModalOccupationalTile_"+data.name).style.display = "flex"}><span>{data.title}</span></button>
                <div id={"ModalOccupationalTile_"+data.name} className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={()=>document.getElementById("ModalOccupationalTile_"+data.name).style.display = "none"}>&times;</span>
                            <h2>{data.title}</h2>
                        </div>
                        <div className="modal-body">
                            <p>{data.description}</p>
                            <p>Университеты:</p>
                            <ul type="circle">
                                {data.universities?.map((university)=>(
                                    <li>{university}</li>
                                ))}
                            </ul>
                            <p>{data.job}</p>
                            <p>Средняя зарплата по России {data.wages_russia}</p>
                            <p>Средняя зарплата в Москве {data.wages_moscow}</p>
                            <p>Необходимые знания и навыки: </p>
                            <ul type="circle">
                                {data.necessary_skills?.map((skill)=>(
                                    <li>{skill}</li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}