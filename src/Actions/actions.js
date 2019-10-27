export const ADD_FEATURE = 'ADD_FEATURE'

export function addFeature(id) {
    return { type: ADD_FEATURE, payload: id};
  }