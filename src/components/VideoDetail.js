import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) { //Need this line because when VideoList is first rendered the state of selectedVideo is set to null and until someone clicks on a video setState will not change the val of selectedVideo to a video. Because of that video.snippet.title will not load and this will cause an error
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed"> {/* iframe tag allows us to embed videos from a src url. Also ui embed is a semantic ui class that makes our embeded video looks better*/}
                <iframe title="video player" src={videoSrc} ></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {video.snippet.title} </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;