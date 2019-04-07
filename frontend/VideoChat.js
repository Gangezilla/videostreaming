import React from "react";

class VideoChat extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      stream: null
    };
  }
  componentDidUpdate() {
    this.updateVideoStream();
  }

  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => this.updateVideoStream(stream))
      .catch(this.videoError);
  }

  updateVideoStream = stream => {
    this.props.updateStream(stream);
    this.videoRef.current.srcObject = stream;
    this.videoRef.current.onloadedmetadata = e => {
      this.videoRef.current.play();
    };
  };

  render() {
    return <video width={350} autoPlay ref={this.videoRef} />;
  }
}

export default VideoChat;
