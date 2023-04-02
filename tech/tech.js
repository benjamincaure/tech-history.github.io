(function () {
  // DOM element where the Timeline will be attached
  var container = document.getElementById('tech-history');

  // Create a DataSet (allows two way data-binding)
  var i = 0;
  var items = new vis.DataSet([]);

  // Groups
  // Optional: a field 'className', 'style', 'order', [properties]
  var groups = [
    { id: 1, content: 'Approach & paradigms', order: 1 },
    { id: 4, content: 'Languages', order: 2 },
    { id: 2, content: 'Trends', order: 3 },
    { id: 3, content: 'Technical roles', order: 4 },
  ];

  // Configuration for the Timeline
  var options = { orientation: { axis: 'both', item: 'top' }, type: 'point', zoomable: false };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, groups, options);
})();
