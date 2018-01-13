import React from 'react';
import ReactDom from 'react-dom';
import records from './list'
import Header from './Header.jsx';
import Search from './Search.jsx';
import RecordsList from './RecordsList.jsx';

document.addEventListener('DOMContentLoaded', function(){

    class AddRecord extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                genre: '',
                author: '',
                title:'',
                description:'',
                icon:''
            }
        }
        render(){
            return(

                <form className="add"><input type="text" id='newGenre' placeholder="dodaj gatunek" onChange={this.getNewGenre} value={this.state.genre}/>
                <br/>
                <input type="text" id='newAuthor' placeholder="dodaj wykonawcę" onChange={this.getNewAuthor} value={this.state.author}/>
                <br/>
                <input type="text" id='newTitle' placeholder="dodaj tytuł" onChange={this.getNewTitle} value={this.state.title}/>
                <br/>
                <input type="text" id='newDescription' placeholder="dodaj opis" onChange={this.getNewDescription} value={this.state.descrition}/>
                <br/>
                <input type="text" id='newIcon' placeholder="dodaj okładkę" onChange={this.getNewIcon} value={this.state.icon}/>
                </form>
            );
        }
    }


    class App extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                genre: '',
                author: ''
            }
        }
        searchGenre =(gen)=>{
            this.setState({
                genre: gen
            })
        }
        searchAuthor =(aut)=>{
            this.setState({
                author: aut
            })
        }

        render(){
            return (
                    <div>
                    <div className ='container'><br/>
                    <Header/><br/>
                    <Search searchG={this.searchGenre} searchA={this.searchAuthor}/>
                    <h2 className="add">dodaj płytę</h2>
                    <AddRecord/>
                    </div>
                    <RecordsList data={records} curGenre={this.state.genre} curAuthor={this.state.author}/>
                    </div>
            );
        }
    }

    ReactDom.render(
        <App />,
        document.getElementById('app')
    );

});
