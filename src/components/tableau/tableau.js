import React, { Component } from 'react';

const tableauScriptUrl = "https://public.tableau.com/javascripts/api/tableau-2.0.0.min.js";
const storyAPIURL = "https://public.tableau.com/views/drink-predictor/FizzFinderTheStoryBehindtheData?:embed=y&:display_count=yes&publish=yes";

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
  load(tableauScriptUrl)
    .then(function() {
      const containerDiv = document.getElementById("vizContainer");

      return new tableau.Viz(containerDiv, storyAPIURL);
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
