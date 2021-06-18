import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './SongTable/songTable';
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

    async getAllSongs() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
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
                <DisplaySongs songs={this.state.songs}/>
            </div>
        );
    }
}

export default App;