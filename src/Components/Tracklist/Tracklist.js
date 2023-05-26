import React from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

class Tracklist extends React.Component {
  render() {
    return (
      <div className="Tracklist">
        {this.props.tracks.map((track) => (
          <Track
            key={track.id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            track={track}
            isRemoval={this.props.isRemoval}
          />
        ))}
      </div>
    );
  }
}

export default Tracklist;