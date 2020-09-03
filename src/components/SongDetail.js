import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song){
        return (
            <div>Please Select a Song</div>
        );
    }

    return (
        <div>
            <h3>Detail For: </h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProp = (state) => {
    return {
        song: state.selectedSong
    };
};

export default connect(mapStateToProp)(SongDetail);