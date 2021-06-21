import React from 'react';

class AddSong extends React.Component {
    state = {
        song_list: []
    }

    render() {
        return(
        <form action="" method="post">
            <label for="title">Title: </label>
            <input type="text" name="title"></input><br></br>
            <label for="artist">Artist: </label>
            <input type="text" name="artist"></input><br></br>
            <label for="album">Album: </label>
            <input type="text" name="album"></input><br></br>
            <label for="genre">Genre: </label>
            <input type="text" name="genre"></input><br></br>
            <label for="release_date">Release Date: </label>
            <input type="text" name="release_date"></input><br></br>
            <button>Submit</button>
        </form>
        );
    }
}

export default AddSong;