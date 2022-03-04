import React from 'react'
import Song from './Song'

function SongList({onSong, onSetList, setOnSetList, removeAndDelete}) {

    const showSongs = onSong.map((song) => {

        function handleClick(item) {
            if (!onSetList.includes(item)) {
                setOnSetList([...onSetList, item])
            }
        }

        return (
            <Song 
                key={song.id}
                song={song}
                handleClick={handleClick}
                removeAndDelete={removeAndDelete}
            />
        )
    })

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {showSongs}
        </div>
        </>
    );
}

export default SongList;