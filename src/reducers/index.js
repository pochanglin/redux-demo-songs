const songReducer = () => {
    return [
        { title: 'Crazy', duration: '1:28'},
        { title: 'Never Ever', duration: '3:28'},
        { title: 'Like Glue', duration: '1:58'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SELECT_SONG'){
        return action.payload;
    }
    return selectedSong;
}