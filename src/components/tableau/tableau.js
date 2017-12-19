import React, { Component } from 'react';

var tableauScriptUrl = "http://public.tableau.com/javascripts/api/tableau-2.0.0.min.js";

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

var workbook, activesheet, viz;
var filterState;

function initViz() {
  load(tableauScriptUrl)
    .then(function() {
      console.log('Successfully loaded Tableau Javascript API!');
      var containerDiv = document.getElementById("vizContainer"),
      // var containerDiv = document.createElement("div"),
      url = "https://public.tableau.com/views/drink-predictor/FizzFindertheStoryBehindUs?:embed=y&:display_count=no";
      // url = "https://public.tableau.com/views/TableauPractice_51/Sheet3?:embed=y&:display_count=yes&publish=yes";

      containerDiv.className="vizualization";

      var options = {
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function() {
          listenToMarksSelection();
          workbook = viz.getWorkbook();
          activeSheet = workbook.getActiveSheet();
        }
      };

      return new tableau.Viz(containerDiv, url);
    })
    .catch(function(err) {
      console.error('Something went wrong loading Tableau Javascript API!', err);
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