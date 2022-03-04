import React from 'react'
import Song from './Song.js'

function Setlist({onSetList, setOnSetList, removeAndDelete}) {

    const setListArr = onSetList.map((song) => {

        function handleClick () {
            const withSongRemoved = onSetList.filter((item) => item !== song);
            setOnSetList(withSongRemoved);
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
        <h2>Setlist</h2>
        <div className="setlist">
            {setListArr}
        </div>
        </>
    );
}

export default Setlist;