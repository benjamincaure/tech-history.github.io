import { Scatterplot } from "../lib/d3-scatterplot.js"
import { trends } from "./trends.js";
import { languages } from "./languages.js";
import { roles } from "./roles.js";
import { approachAndParadigms } from "./approach-paradigms.js";

const getKey = (trend) => {
  const year = parseInt(trend.start.substring(0, 4));
  return year - (year % 5);
}
const trendsBalanceY = trends.reduce((theMap, trend) => {
  const key = getKey(trend);
  const array = theMap.get(key);
  if (!array) {
    theMap.set(key, [trend]);
  } else {
    theMap.set(key, [...array, trend]);
  }
  return theMap;
}, new Map());
console.log("🚀 ~ file: tech.js:21 ~ trendsBalanceY ~ trendsBalanceY:", trendsBalanceY)

const chart = Scatterplot(trends, {
  x: d => d.start.substring(0, 4),
  y: d => {
    const sameX = trendsBalanceY.get(getKey(d));
    const index = sameX.findIndex((trend) => trend.id === d.id);
    const offset = (20 / sameX.length) * index;
    return d.id % 20 + offset;
  },
  o: d => d.type === 'L' ? 13 : d.type === 'M' ? 7 : 3,
  title: d => d.content,
  xLabel: "Year",
  yLabel: "Trends",
  stroke: "steelblue",
  width: 1200,
  height: 400
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tech-history").appendChild(chart);
});


