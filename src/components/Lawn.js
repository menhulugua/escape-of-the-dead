import React from 'react';
import { connect } from 'react-redux';

class Lawn extends React.Component {
  render() {
    return (
      <div>
      <div>Lawn</div>
      <div>Zombie number: {this.props.zombie}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    zombie: state.zombie
  };
}

export default connect(mapStateToProps)(Lawn);
