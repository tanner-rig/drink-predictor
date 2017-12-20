import React, { Component } from 'react';
import { STORY_URL, TABLEAU_URL } from '../../config';

let pageIsLoaded = false;

function load(url) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function initViz() {
  load(TABLEAU_URL)
    .then(function() {
      console.log('Successfully loaded Tableau Javascript API supporting script!');

      const containerDiv = document.getElementById("vizContainer");

      return new tableau.Viz(containerDiv, STORY_URL);
    })
    .catch(function(err) {
      console.error('Something went wrong loading Tableau Javascript API supporting script...', '\n\n', err);
    });
}

function pageLoaded() {
  if (pageIsLoaded === false) {
    pageIsLoaded = true;
    initViz();
  } else {
    pageIsLoaded = false;
  }
}

export default class Tableau extends Component {

  render() {
    return (
      <div className="tableau" onload={pageLoaded()}>
        <div id="vizContainer"></div>
      </div>
    );
  }
}
