import axios from 'axios';
import React from 'react';
import './songTable.css';

function DisplaySongs(props) {

    const deleteSongData = (id) => {
        axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        .then(response => {
            console.log(response);
            console.log(response.data);
            props.getAllSongs()
        });
    }

    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th className="header">Song Title</th>
                    <th className="header">Album</th>
                    <th className="header">Artist</th>
                    <th className="header">Genre</th>
                    <th className="header">Release Date</th>
                    <th className="header">Delete</th>
                </tr>
            </thead>
            <tbody>
            { props.songs.map(song => {
                return(
                <tr>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <button onClick={() => deleteSongData(song.id)} className="button">Delete</button>
                </tr>
            )}) }
            </tbody>
        </table>
    )
}

export default DisplaySongs;