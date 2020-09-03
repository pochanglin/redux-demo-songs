import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component{
    
    renderList(){
        const { songs, selectSong } = this.props;
        return songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={ () => selectSong(song) }>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }    
    
    render(){
        return(
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProp = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProp,{
    selectSong
})(SongList);