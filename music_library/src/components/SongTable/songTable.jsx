import React from 'react';
import './songTable.css';

function DisplaySongs(props) {
    return (
        <table className="table table-dark">
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
                    <button className="button">Delete</button>
                </tr>
            )}) }
            </tbody>
        </table>
    )
}

export default DisplaySongs;