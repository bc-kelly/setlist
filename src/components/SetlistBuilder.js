import React, { useEffect, useState } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {
    const [onSong, setOnSong] = useState([]);
    const [onSetList, setOnSetList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3110/tracks')
        .then(resp => resp.json())
        .then(songData => {
            // console.log(songData)
            setOnSong(songData);
        })
    }, []);

    function removeAndDelete (id) {
        fetch('http://localhost:3110/tracks/' + id, {
            method: 'DELETE',
            })
            .then(res => res.text())
            .then(res => {
                console.log(res)
                const withDeleted = onSong.filter((song) => song.id !== id);
                setOnSong(withDeleted);
                const fromSetList = onSetList.filter((alsoSong) => alsoSong.id !== id);
                setOnSetList(fromSetList)
            })
    }

    return(
        <div className="builder">
            <SongList 
                onSong={onSong}
                onSetList={onSetList}
                setOnSetList={setOnSetList}
                removeAndDelete={removeAndDelete}
            />
            <div className="vl"></div>
            <Setlist 
                onSetList={onSetList}
                setOnSetList={setOnSetList}
                removeAndDelete={removeAndDelete}
            />
        </div>
    );
}

export default SetlistBuilder;