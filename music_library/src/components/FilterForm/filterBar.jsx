import React, { Component } from 'react';

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            songs: {
                title: '',
                artist: '',
                album: '',
                genre: '',
                release_date: ''
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    };

    filterFunction = (userInput) => {
        const songFilter = this.props.filterSongs.filter(song =>
            song.title.includes(userInput) || song.artist.includes(userInput) || song.album.includes(userInput) || 
            song.genre.includes(userInput) || song.release_date.includes(userInput)
        )
        this.setState({
            songs: songFilter
        })
    }

    render() {
        return (
            <div>
                <label for="filter">Filter by:</label>
                <select id="filter">
                    <option value="title">Song Title</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="genre">Genre</option>
                    <option value="release_date">Release Date</option>
                </select>
                <input type="text" ></input>
                <button type="submit">Search</button>
            </div>
    
        )
    
    }
}

export default FilterBar;