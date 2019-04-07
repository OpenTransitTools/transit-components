import React from 'react';
import { render } from 'react-dom';
import config from "json-loader!yaml-loader!../common/config.yml";
import TransitMap from "./TransitMap.jsx";

/**
 *  note: this is a simple test script that's an entry into the TransitMap component
 *        further, we see it's the only thing loading the config.yml (important, since the real
 *        config.yml file(s) ewon't be sourced out of this Component Library).
 */

render(
  <TransitMap config={config.map} />,
  document.getElementById('map'),
);
