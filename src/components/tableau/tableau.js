import React, { Component } from 'react';
import { STORY_URL, TABLEAU_URL } from '../../config';



function load(url) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  })
}

function initViz() {
  load(TABLEAU_URL)
    .then(function() {
      console.log('Successfully loaded Tableau Javascript API supporting script!');

      var containerDiv = document.getElementById("vizContainer"),
      storyAPIUrl = STORY_URL;

      return new tableau.Viz(containerDiv, storyAPIUrl);
    })
    .catch(function(err) {
      console.error('Something went wrong loading Tableau Javascript API supporting script...', err);
    })
}

export default class Tableau extends Component {

  render() {
    return (
      <div className="tableau">
        <div id="vizContainer" onload={initViz()}></div>
      </div>
    );
  }
}
