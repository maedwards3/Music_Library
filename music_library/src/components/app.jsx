import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './SongTable/songTable';

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
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    render(){
        return (
            <div>
                <DisplaySongs />
            </div>
        );
    }
}

export default App;