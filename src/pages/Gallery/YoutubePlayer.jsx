import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({url}) => {
    const getVideoIdFromUrl = (url) => {
        const urlObj = new URL(url);
        return urlObj.searchParams.get("v");
      }
      
    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={getVideoIdFromUrl(url)} style={{height: '100%', width: '100%'}} opts={opts} onReady={onPlayerReady} />;
}

export default YoutubePlayer;