import React from 'react';
import { connect } from 'react-redux';

class Garage extends React.Component {
  render() {
    return (
      <div>
        <div>Garage</div>
        <div>Fix progress: {this.props.garage}%</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps)(Garage);
