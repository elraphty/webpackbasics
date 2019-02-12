import _ from 'lodash';
require('../styles/styles.css');
  function component() {
    var element = document.createElement('div');
   // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    return element;
  }

  function component1 (params) {
    var element1 = document.createElement('h1');
    element1.innerHTML = 'h1 from webpack';
    return element1;
  }
  
  document.body.appendChild(component());
  document.body.appendChild(component1());