import VideoChat from "./VideoChat";

class App extends React.Component {
  state = {
    stream: null
  };
  handleStream = stream => {
    console.log(stream);
    // this.setState({ stream: stream });
  };

  render() {
    return (
      <div className="App">
        <VideoChat updateStream={this.handleStream} />
      </div>
    );
  }
}

export default App;
