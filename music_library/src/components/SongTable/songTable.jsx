import React from 'react';

function DisplaySongs() {
    return (
        <table className="table">
            <tr>
                <th className="header">Song Title</th>
                <th className="header">Album</th>
                <th className="header">Artist</th>
                <th className="header">Genre</th>
                <th className="header">Release Date</th>
            </tr>
        </table>
    )
}

export default DisplaySongs;