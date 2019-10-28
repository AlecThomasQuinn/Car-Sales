import React from 'react';
import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature } from './Actions/actions'

const App = (props) => {

  console.log(props)

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    props.addFeature(item.id)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  //console.log('mapStateToProps state:', state.reducer)
  return {
    additionalPrice: state.reducer.additionalPrice,
    car: state.reducer.car,
    additionalFeatures: state.reducer.additionalFeatures,
  };
}

const matchDispatchToProps = {
  addFeature
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(App);
