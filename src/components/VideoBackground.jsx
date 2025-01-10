import React from 'react';
import video from '../assets/videos/video.mp4';

function VideoBackground() {
    return (
        <div className="video-background">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoBackground;
