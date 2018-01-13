import React from 'react';
import ReactDOM from 'react-dom';

    class RecordsList extends React.Component{
        render(){
            return typeof this.props.data !== 'undefined' && this.props.data.length >0 && (
                //typeof sprawdza czy są wogóle jakies dane

                <ul>
                {this.props.data.map((item, index)=>{
                    if(this.props.curGenre === item.genre || item.author.toLowerCase().indexOf(this.props.curAuthor.toLowerCase()) > -1 && this.props.curAuthor.length > 1 ) {
                    return (
                        <li key={item.title}><h2>{item.author}</h2>
                            <h3>{item.title}</h3> <br/>
                            <div   className="animated" style = {{
                                width: "200px",
                                height: "200px",
                                backgroundImage: item.icon,
                                backgroundSize: "200px 200px"
                            }}></div>
                            <div className='info'>
                                <h4>INFO:</h4>
                                <p>{item.description}</p>
                                <h4>TRACKS:</h4>
                                <p>{item.tracks}</p>;
                            </div>
                        </li>
                        );
                    }
                })
            }
                </ul>
            )
        }
    }
export default RecordsList;
