const PlayerBar = (props) => {
  const [playing, setPlaying] = React.useState(false);

  function clickPlayButton() {
    // TODO: implement
    setPlaying(!playing);
  }

  function renderPlayButton() {
    let buttonUrl = '';
    if (playing) {
      buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557137524244/rounded-pause-button.svg';
    } else {
      buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557136695174/play-right-arrow-circular-button.svg';
    }
    return (
      <input
        id="playPause"
        className="play-button"
        type="image"
        src={buttonUrl}
        onClick={() => clickPlayButton()}
      />
    );
  }

  function renderNextButton() {
    let buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557137539567/next-button.svg';
    return (
      <input
        id="next"
        className="play-button" 
        type="image" 
        src={buttonUrl} 
        // TODO: implement onClick event
        onClick={() => props.clickNextButton()}
      />
    );
  };

  function renderPrevButton() {
    let buttonUrl = 'https://codesignal.s3.amazonaws.com/uploads/1557138446191/previous-button.svg';
    return (
      <input
        id="prev"
        className="play-button" 
        type="image"  
        src={buttonUrl} 
        // TODO: implement onClick event
        onClick={() => props.clickPrevButton()}
      />
    );
  };

  return (
      <div>
        {renderPlayButton()}
        {renderPrevButton()}
        {renderNextButton()}
        
        <div className="song-descr">
          <span className="song-artist song-span">{props.artist}</span>
          <span className="song-name song-span">{props.name}</span>
        </div>
        <div className="song-descr">
          <span id="selected-song-artist" className="selected-song-artist">{props.artist}</span>
          <span id="selected-song-name" className="selected-song-name">{props.name}</span>
        </div>
        <div className="song-descr">
          <span id="current-song-artist" className="current-song-artist">{props.artist}</span>
          <span id="current-song-name" className="current-song-name">{props.name}</span>
        </div>
      </div>
  );
}

const App = () => {
  const playlist = [
      {
        id: 1,
        name: 'Yesterday',
        artist: 'Beatles'
      },
      {
        id: 2,
        name: 'Nothing else matters',
        artist: 'Metallica'
      },
      {
        id: 3,
        name: 'Always',
        artist: 'Bon Jovi'
      },
      {
        id: 4,
        name: 'Waka Waka',
        artist: 'Shakira'
      }
    ];

  const [curItemIndex, setCurItemIndex] = React.useState(0);

  function getSongClass(index) {
    let className = 'list-group-song song row';
    if (index === curItemIndex) {
      className += ' selected';
    }
    return className;
  }

  function renderItems() {
    return playlist.map((song, index) => {
      return (
        <li className={getSongClass(index)} key={song.id}>
          <span className="song-artist song-span">{song.artist}</span>
          <span className="song-name song-span">{song.name}</span>
        </li>
      );
    });
  }

  function clickNextButton() {
    // TODO: implement
    setCurItemIndex((curItemIndex + 1) % playlist.length);
  }

  function clickPrevButton() {
    // TODO: implement
    setCurItemIndex((curItemIndex - 1 + playlist.length) % playlist.length);
  }

  return (
    <div>
      <ul className="song-list container">
        {renderItems()}
      </ul>
      <hr />
      <div className="player-bar">
        <PlayerBar
          // TODO: provide corresponding parameters
          clickNextButton={clickNextButton}
          clickPrevButton={clickPrevButton}
          name={playlist.name}
          artist={playlist.artist}
        />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
