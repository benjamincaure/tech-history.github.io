import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import timelines from "../lib/d3-timeline.js";
import { Scatterplot } from "../lib/d3-scatterplot.js";
import { trends } from "./trends.js";
import { languages } from "./languages.js";
import { roles } from "./roles.js";
import { approachAndParadigms } from "./approach-paradigms.js";

const WIDTH = 1900;

const trendsBalanceY = getTrendsBalanceY(trends);
const scatterplot1 = Scatterplot(trends, {
  x: d => d.start.substring(0, 4),
  y: d => {
    const y = Array.from(trendsBalanceY.keys()).findIndex(key => key === d.trend);
    const offset = trendsBalanceY.get(d.trend).findIndex((trend) => trend.id === d.id);
    return 10 + (y * 6) + offset;
  },
  o: d => d.type === 'L' ? 13 : d.type === 'M' ? 7 : 3,
  title: d => d.content,
  xLabel: "Year",
  yLabel: "Trends",
  stroke: d => {
    const color = d.group === "system" ? "steelblue" : d.group === "domain" ? "green" : "yellow";
    return color;
  },
  width: WIDTH,
  height: 850
});

const timeline1Data = groupBy(languages, "group")
  .forEach((languages, group) => ({
    label: "",
    times: languages.map(language => ({
      color: "green",
      label: language.content,
      starting_time: new Date(language.start).getTime(),
      ending_time: new Date(language.end).getTime(),
    })),
  }));
const timeline1Chart = timelines()
  .allowZoom(false)
  .beginning(0)
  .ending(10000)
  .click(() => {

  })
  .mouseover(function (d, i, datum) {
    // d is the current rendering object
    // i is the index during d3 rendering
    // datum is the data object
    console.log({ d, i, datum });
  })
  .stack();


document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".scatterplot1").appendChild(scatterplot1);
  d3.select(".timeline1")
    .append("svg")
    .attr("width", WIDTH)
    .datum(timeline1Data)
    .call(timeline1Chart);

});

//
// HELPER FuNCTIONS
//
function groupBy(initialArray, field) {
  return initialArray.reduce(
    (entryMap, e) => entryMap.set(e[field], [...entryMap.get(e[field])||[], e]),
    new Map()
  );
}

function getTrendsBalanceY(trends) {
  return trends.reduce((theMap, trend) => {
    const key = trend.trend;
    const array = theMap.get(key);
    if (!array) {
      theMap.set(key, [trend]);
    } else {
      theMap.set(key, [...array, trend]);
    }
    return theMap;
  }, new Map());
}
