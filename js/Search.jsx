import React from 'react';
import ReactDOM from 'react-dom';

    class Search extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                genre: '',
                author:''
            }
        }
        getGenre=(event)=>{
            this.setState({
                genre: event.target.value
            }, ()=>{
                    this.props.searchG(this.state.genre);
                }
            )
        }
        getAuthor=(event)=>{
            this.setState({
                author: event.target.value
            }, ()=>{
                this.props.searchA(this.state.author);
                }
            )
        }
        render(){
            return (
                <form><input type="text" id='gatunek' placeholder="podaj gatunek" onChange={this.getGenre} value={this.state.genre}/>
                <input type="text" className='blanc'/>
                <input type="text" id='wykonawca' placeholder="podaj wykonawcę" onChange={this.getAuthor} value={this.state.author}/>
                </form>
            );
        }
    }
    export default Search;
