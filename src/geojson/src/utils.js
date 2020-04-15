import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

export function updatePercentiles(featureCollection, accessor) {
  console.log(featureCollection);
  const {geometries} = featureCollection;
  const scale = scaleQuantile()
    .domain(geometries.map(accessor))
    .range(range(9));
  return {
    type: 'FeatureCollection',
    geometries: geometries.map(f => {
      const value = accessor(f);
      const properties = {
        ...f.properties,
        value,
        percentile: scale(value)
      };
      return {...f, properties};
    })
  };
}
