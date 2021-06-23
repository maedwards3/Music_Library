import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './SongTable/songTable';
import AddSong from './AddSongForm/addSongForm';
import NavBar from './NavBar/navBar';
import FilterBar from './FilterForm/filterBar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        this.getAllSongs();
    }

    getAllSongs = async ()=> {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/music/`);
            this.setState({
                songs: response.data
            });
            console.log(this.state.songs)
        }
        catch (ex) {
            console.log('Error in APi call');
        }
    }

    render(){
        return (
            <div>
                <NavBar />
                <AddSong updateTable={this.getAllSongs}/>
                <DisplaySongs getAllSongs={this.getAllSongs} songs={this.state.songs}/>
                <FilterBar filterSongs={this.state.songs}/>
            </div>
        );
    }
}

export default App;