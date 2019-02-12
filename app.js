import _ from 'lodash';
require('!style-loader!css-loader!./styles.css');
  function component() {
    var element = document.createElement('div');
   // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }
  document.body.appendChild(component());