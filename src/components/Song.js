import React from 'react'

function Song({song, handleClick, removeAndDelete}) {
    const { id } = song;

    function handleRemove (event) {
        removeAndDelete(id)
    }

    return(
        <div className="song" onClick={()=>handleClick(song)}>
            <img src={song.image}/>
            <div className="song-info">
                <h3>{song.song}</h3>
                <h4>{song.artist}</h4>
            </div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Song;

{/* <button onClick={()=> console.log("Delete clicked...")}>X</button> */}
