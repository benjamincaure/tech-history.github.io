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
  x: trend => trend.start.substring(0, 4),
  y: trend => {
    const trendY = Array.from(trendsBalanceY.keys()).findIndex(key1 => key1 === getKey1(trend));
    const mapSameTrend = trendsBalanceY.get(getKey1(trend));
    const offsetYear = Array.from(mapSameTrend.keys()).findIndex(key2 => key2 === getKey2(trend));
    const arraySameYear = mapSameTrend.get(getKey2(trend));
    const offsetY = arraySameYear.findIndex((t) => t.id === trend.id);
    let y = ((trendY % 3) * 5) + offsetYear + offsetY;
    if (trend.content === 'CPU' || trend.content === 'Operating Systems') {
      console.log(arraySameYear, trendY, offsetYear);
    }
    if (y < 1 && trend.content !== '') {
      y = 1;
    }
    return y;
  },
  o: d => d.type === 'L' ? 13 : d.type === 'M' ? 7 : 3,
  title: d => d.content,
  xLabel: "Year",
  yLabel: "Trends",
  stroke: d => {
    const color = d.group === "system" ? "steelblue" : d.group === "domain" ? "yellow" : "green";
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
    // .call(timeline1Chart);
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
  return trends.reduce((map1, trend) => {
    const key = getKey1(trend);
    const map2 = map1.get(key);
    if (!map2) {
      map1.set(key, new Map([[getKey2(trend), [trend]]]));
    } else {
      const array = map2.get(getKey2(trend));
      if (!array) {
        map2.set(getKey2(trend), [trend]);
      } else {
        array.push(trend);
      }
    }
    return map1;
  }, new Map());
}
function getKey1(trend) {
  return trend.trend;
}

function getKey2(trend) {
  return 5 * (parseInt(trend.start.substring(0, 4)) % 2);
}
