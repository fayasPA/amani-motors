import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Oval } from 'react-loader-spinner'; // Import the loader component

const YoutubePlayer = ({url}) => {
  const [loading, setLoading] = useState(true);
    const getVideoIdFromUrl = (url) => {
        const urlObj = new URL(url);
        return urlObj.searchParams.get("v");
      }
      
    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        setLoading(false);
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

  return (
    <div className='w-full h-full relative'>
    {loading && ( // Show loader while loading is true
          <div className='absolute flex w-full h-full justify-center items-center '>
            <Oval
                    height={50}
                    width={50}
                    color="white"
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="gray"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
          </div>
      )}
      <YouTube videoId={getVideoIdFromUrl(url)} style={{height: '100%', width: '100%'}} opts={opts} onReady={onPlayerReady} />
    </div>
)
}

export default YoutubePlayer;