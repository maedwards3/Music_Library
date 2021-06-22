import axios from 'axios';
import React from 'react';

class AddSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            artist: null,
            album: null,
            release_date: null,
            genre: null,
            errors: {
                title: null,
                artist: null,
                album: null,
                genre: null,
                release_date: null
            }
        }
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch(event.target.name){
            case 'title':
                errors.title = event.target.value.length < 2 ? "Title must be at least two characters" : null;
                break;
            case 'artist':
                errors.artist = event.target.value.length < 2 ? "Artist must be at least two characters" : null;
                break;
            case 'album':
                errors.album = event.target.value.length < 2 ? "Album must be at least two characters" : null;
                break;
            case 'genre':
                errors.genre = event.target.value.length < 2 ? "Genre must be at least two character" : null;
                break;
            // case 'release_date':
            //     errors.release_date = event.target.value !== ####-##-## ? "Release date must be in YYYY-MM-DD format" : null;
            //     break;
            default:
                break;
        }

        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
    };

    async addNewSong() {
        let newSong = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre
        }
        try{
            // test for axios request
            console.log("post request is being called")
            let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
            console.log(response.data);
            this.setState({

            })
        }
        catch (ex) {
            console.log("There was an error in the API call");
        }
    }

    handleSubmit = (event) => {
        debugger
        console.log("submit is being triggered")
        event.preventDefault();
        this.addNewSong();
        this.props.updateTable();
        alert(`Title: ${this.state.title} Artist: ${this.state.artist} Album: ${this.state.album} 
            Genre: ${this.state.genre} Release Date: ${this.state.release_date}`)
    };

    render() {
        return(
        <form onSubmit={(event) => this.handleSubmit(event)}>
            <div >
                <label for="title">Title: </label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/><br></br>
                {this.state.errors.title ? <p style={{color:'red'}}>{this.state.errors.title}</p> : ''}
            </div>
            <div>
                <label for="artist">Artist: </label>
                <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/><br></br>
                {this.state.errors.artist ? <p style={{color:'red'}}>{this.state.errors.artist}</p> : ''}
            </div>
            <div>
                <label for="album">Album: </label>
                <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/><br></br>
                {this.state.errors.album ? <p style={{color:'red'}}>{this.state.errors.album}</p> : ''}
            </div>
            <div>
                <label for="genre">Genre: </label>
                <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/><br></br>
                {this.state.errors.genre ? <p style={{color:'red'}}>{this.state.errors.genre}</p> : ''}
            </div>
            <div>
                <label for="release_date">Release Date: </label>
                <input type="text" name="release_date" onChange={this.handleChange} placeholder="YYYY-MM-DD" value={this.state.release_date}/><br></br>
                {/* {this.state.errors.release_date ? <p style={{color:'red'}}>{this.state.errors.release_date}</p> : ''} */}
            </div>
            <div>
                <button type="submit" onClick="reset">Submit</button>
            </div>
        </form>
        );
    }
}

export default AddSong;