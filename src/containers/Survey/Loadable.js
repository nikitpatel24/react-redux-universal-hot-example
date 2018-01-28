import React from 'react';
import Loadable from 'react-loadable';

const SurveyLoadable = Loadable({
  loader: () => import(/* webpackChunkName: "survey" */ './Survey'),
  loading: () => <div>Loading</div>
});

export default SurveyLoadable;
