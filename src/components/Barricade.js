import React from 'react';
import { connect } from 'react-redux';

class Barricade extends React.Component {
  render() {
    return (
      <div>
      <div>Barricade</div>
      <div>HP: {this.props.barricade}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    barricade: state.barricade
  };
}

export default connect(mapStateToProps)(Barricade);
