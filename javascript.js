(function() {
    // DOM element where the Timeline will be attached
  var container = document.getElementById('jshistory');

  // Create a DataSet (allows two way data-binding)
  var i = 0;
  var items = new vis.DataSet([
  {id: i++, content: 'Mosaic', start: '1993-01-01', end: '1993-01-01', group: 1},
  {id: i++, content: 'ECMAScript', start: '1997-01-01', group: 1},
  {id: i++, content: 'ES4', start: '2005-01-01', group: 1},
  {id: i++, content: 'Ajax (XHR)', start: '2006-01-01', group: 1},
  {id: i++, content: 'ES5', start: '2009-01-01', group: 1},
  {id: i++, content: 'Workers', start: '2010-01-01', group: 1},
  {id: i++, content: 'Web sockets', start: '2011-01-01', group: 1},
  {id: i++, content: 'ES6', start: '2015-01-01', type: 'box', className: 'red', group: 1},
  {id: i++, content: 'ES2016', start: '2016-01-01', group: 1},
  {id: i++, content: 'ES2017', start: '2017-01-01', group: 1},
  {id: i++, content: 'HTML5', start: '2010-01-01', type: 'box', className: 'red', group: 1},  
  {id: i++, content: 'Dart', start: '2011-10-10', group: 1},  
  {id: i++, content: 'Typescript', start: '2012-10-01', className: 'orange', group: 1},  
  {id: i++, content: 'Reason', start: '2018-01-01', group: 1},  

  {id: i++, content: 'Netscape Navigator', start: '1994-01-01', type: 'range', className: 'browser netscape', end: '2000-12-31', group: 2},
  {id: i++, content: 'Microsoft Internet Explorer', start: '1995-01-01', type: 'range', className: 'browser ie', end: '2015-12-31', group: 2},
  {id: i++, content: 'Adobe Flash - ActionScript', start: '1997-01-01', end: '2009-12-31', type: 'range', className: 'browser flash ', type: 'range', group: 2},  
  {id: i++, content: 'Mozilla Firefox', start: '2005-01-01', end: '2015-12-31', type: 'range', className: 'browser firefox', group: 2},
  {id: i++, content: 'Google Chrome', start: '2010-01-01', end: '2017-12-31', type: 'range', className: 'browser chrome', group: 2},
  {id: i++, content: 'Safari', start: '2010-01-01', end: '2017-12-31', type: 'range', className: 'browser safari', group: 2},

  {id: i++, content: 'script.aculo.us', start: '2005-01-01', group: 3},
  {id: i++, content: 'Dojo toolkit', start: '2005-01-01', group: 3},
  {id: i++, content: 'JQuery', start: '2006-01-01', type: 'box', className: 'important', group: 3},
  {id: i++, content: 'YUI (Ext.js)', start: '2006-01-01', group: 3},
  {id: i++, content: 'GWT', start: '2006-01-01', group: 3},
  {id: i++, content: 'JQuery UI', start: '2007-01-01', group: 3},
  {id: i++, content: 'AngularJS', start: '2009-01-01', type: 'box', className: 'important', group: 3},
  {id: i++, content: 'Knockout.js', start: '2010-01-01', group: 3},
  {id: i++, content: 'Backbone.js', start: '2010-01-01', group: 3},
  {id: i++, content: 'Bootstrap', start: '2011-01-01', type: 'box', className: 'important', group: 3},
  {id: i++, content: 'Ember.js', start: '2011-01-01', type: 'box', className: 'important', group: 3},
  {id: i++, content: 'KendoUI', start: '2011-01-01', group: 3},
  {id: i++, content: 'Cordova', start: '2011-01-01', group: 3},
  {id: i++, content: 'React.js', start: '2013-01-01', type: 'box', className: 'orange important', group: 3},
  {id: i++, content: 'Vue.js', start: '2014-01-01', type: 'box', className: 'orange important', group: 3},
  {id: i++, content: 'Aurelia.js', start: '2014-01-01', group: 3},
  {id: i++, content: 'Polymer', start: '2014-01-01', type: 'box', className: 'orange', group: 3},
  {id: i++, content: 'Angular', start: '2016-01-01', type: 'box', className: 'orange important', group: 3},
  {id: i++, content: 'RxJs', start: '2014-01-01', type: 'box', className: 'orange important', group: 3},
  {id: i++, content: 'Redux', start: '2015-06-01', type: 'box', className: 'orange important', group: 3},
  {id: i++, content: 'Flux', start: '2015-01-01', group: 3},
  {id: i++, content: 'Inferno', start: '2017-01-01', group: 3},
  {id: i++, content: 'Preact', start: '2016-01-01', group: 3, className: 'orange'},
  {id: i++, content: 'Next.js', start: '2016-10-25', group: 3, className: 'orange'},

  {id: i++, content: 'Node.js', start: '2009-01-01', type: 'box', className: 'orange important', group: 4},
  {id: i++, content: 'Express.js', start: '2010-01-01', type: 'box', className: 'orange', group: 4},
  {id: i++, content: 'Socket.io', start: '2012-01-01', group: 4},
  {id: i++, content: 'Meteor', start: '2012-01-01', group: 4},
  {id: i++, content: 'Three.js', start: '2010-01-01', group: 4},
  {id: i++, content: 'Casper (PhantomJS)', start: '2011-01-01', group: 4},
  {id: i++, content: 'D3.js', start: '2011-01-01', group: 4},
  {id: i++, content: 'Grunt', start: '2012-11-01', group: 4},
  {id: i++, content: 'Gulp', start: '2013-01-01', group: 4},
  {id: i++, content: 'Webpack', start: '2014-02-19', group: 4, className: 'orange'},
  {id: i++, content: 'Browserify', start: '2011-01-01', group: 4},
  {id: i++, content: 'GraphQL', start: '2015-06-01', group: 4, className: 'orange'},

  {id: i++, content: '', start: '2019-12-31', group: 4},

  ]);

  // Groups
  // Optional: a field 'className', 'style', 'order', [properties]
  var groups = [
    { id: 4, content: 'Other (backend, tools)', order: 1 },    
    { id: 3, content: 'Frontend', order: 2 },    
    { id: 1, content: 'Spec/Languages', order: 3 },
    { id: 2, content: 'Reference Implementation', order: 4 },
  ]; 

  // Configuration for the Timeline
  var options = {orientation: {axis: 'both', items: 'top'}, type: 'point', zoomable: false};

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, groups, options);
})();
