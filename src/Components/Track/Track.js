import React from "react";

import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  renderAction() {
    return (
      <button
        onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}
        className="Track-action"
      >
        {this.props.isRemoval ? (
          <image
            src="/src/Components/Track/minus.png"
            name="minus-circle"
            animation="flashing-hover"
          ></image>
        ) : (
          <image 
            src="/src/Components/Track/plus.png"
            name="plus-circle"
            animation="flashing-hover"
          ></image>
        )}
      </button>
    );
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> {this.props.track.name} </h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

Track.defaultProps = {
  onAdd: null,
  onRemove: null,
};

export default Track;