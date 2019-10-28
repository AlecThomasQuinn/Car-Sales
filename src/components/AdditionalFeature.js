import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../Actions/actions'

const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(e) => props.addFeature(props.feature.id)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null, {addFeature})(AdditionalFeature);
