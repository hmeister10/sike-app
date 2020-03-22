import React from 'react';
import { connect } from 'react-redux';
import './lobby.scss';

const mapStateToProps = (state) => {
  return {
    ...state
  };
}
class Lobby extends React.Component {

  render() {
    return (
      <div className="profile-container" >
        NAME:
      </div>
    );
  }
}

export default connect(mapStateToProps)(Lobby);
