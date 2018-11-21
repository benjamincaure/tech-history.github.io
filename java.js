(function() {
  // DOM element where the Timeline will be attached
  var container = document.getElementById('javahistory');

  // Create a DataSet (allows two way data-binding)
  var i = 0;
  var items = new vis.DataSet([
    {id: i++, content: 'GlassFish', start: '2006-06-01', group: 2},
    {id: i++, content: 'Jetty', start: '1998-01-01', group: 2},
    {id: i++, content: 'WebLogic', start: '1998-01-01', type: 'box', group: 2, className: 'important'},
    {id: i++, content: 'Tomcat', start: '1999-01-01', group: 2, className: 'orange important'},
    {id: i++, content: 'JBoss', start: '2001-01-01', group: 2},
    {id: i++, content: 'Websphere', start: '1998-06-01', type: 'box', group: 2, className: 'important'},
    {id: i++, content: 'WildFly', start: '2014-12-01', group: 2},

    {id: i++, content: 'Java 1', start: '1995-01-01', end: '1998-05-01', group: 1, className: 'magenta'},
    {id: i++, content: 'Java 1.2', start: '1998-05-01', end: '2000-05-01', group: 1, className: 'magenta'},
    {id: i++, content: 'Java 1.3', start: '2000-06-01', end: '2002-02-01', group: 1, className: 'magenta'},
    {id: i++, content: 'Java 1.4', start: '2002-03-01', end: '2004-09-01', group: 1, className: 'magenta'},
    {id: i++, content: 'Java 5', start: '2004-10-01', end: '2006-12-01', group: 1, className: 'green important'},
    {id: i++, content: 'Java 6', start: '2007-01-01', end: '2011-07-28', group: 1, className: 'magenta'},
    {id: i++, content: 'Java 7', start: '2011-08-01', end: '2014-03-01', group: 1, className: 'magenta'},
    {id: i++, content: 'Java 8', start: '2014-04-01', end: '2019-01-01', group: 1, className: 'magenta important'},

    {id: i++, content: 'JSF', start: '2004-05-27', group: 3, className: 'important'},
    {id: i++, content: 'JPA2', start: '2009-12-10', group: 3, className: 'orange important'},
    {id: i++, content: 'EJB2', start: '2001-08-22', group: 3},
    {id: i++, content: 'EJB3', start: '2006-06-01', group: 3},
    {id: i++, content: 'CDI', start: '2010-01-01', group: 3},
    {id: i++, content: 'J2EE', start: '1999-12-12', type: 'box', group: 3, className: 'important'},
    {id: i++, content: 'JEE5', start: '2006-06-01', type: 'box', group: 3, className: 'important'},
    {id: i++, content: 'JEE7', start: '2013-05-01', group: 3},
    {id: i++, content: 'JEE8', start: '2018-09-01', group: 3},    
    {id: i++, content: 'Spring', start: '2004-03-24', group: 3, className: 'orange important'},
    {id: i++, content: 'Spring MVC', start: '2005-05-01', group: 3, className: 'orange important'},
    {id: i++, content: 'Spring Boot', start: '2014-06-01', group: 3, className: 'orange important'},
    {id: i++, content: 'Vaadin', start: '2009-05-20', group: 3},
    {id: i++, content: 'Struts', start: '2000-05-01', type: 'box', group: 3, className: 'important'},
    {id: i++, content: 'Android', start: '2011-02-09', group: 3, className: 'orange important'},
    {id: i++, content: 'GWT', start: '2006-01-08', group: 3},
    {id: i++, content: 'JBoss Seam', start: '2008-01-01', group: 3},
    {id: i++, content: 'Play! Framework', start: '2007-01-01', group: 3},
    {id: i++, content: 'Vertx', start: '2012-05-01', group: 3},
    {id: i++, content: 'Apache Spark', start: '2014-11-18', group: 3, className: 'orange important'},
    {id: i++, content: 'Hadoop', start: '2014-11-18', group: 3, className: 'orange important'},

    {id: i++, content: 'Hibernate', start: '2002-01-01', group: 4, className: 'orange important'},
    {id: i++, content: 'Maven', start: '2004-08-01', group: 4, className: 'orange important'},
    {id: i++, content: 'Eclipse', start: '2004-06-01', group: 4, className: 'important'},
    {id: i++, content: 'Camel', start: '2009-01-19', group: 4},
    {id: i++, content: 'Kafka', start: '2011-01-01', group: 4},
    {id: i++, content: 'Log4j', start: '2000-01-01', type: 'box', group: 4, className: 'important'},
    {id: i++, content: 'Lucene', start: '2005-02-01', group: 4},
    {id: i++, content: 'Wicket', start: '2005-06-01', group: 4},
    {id: i++, content: 'Birt', start: '2004-10-06', group: 4},
    {id: i++, content: 'DropWizard', start: '2016-07-27', group: 4},
    {id: i++, content: 'EclipseLink', start: '2007-01-01', group: 4},
    {id: i++, content: 'Guice', start: '2008-01-01', group: 4},
    {id: i++, content: 'Jersey', start: '2008-01-01', group: 4},
    {id: i++, content: 'JHipster', start: '2008-01-01', group: 4, className: 'orange'},
    {id: i++, content: 'JUnit', start: '1999-01-01', group: 4, className: 'orange important'},
    {id: i++, content: 'PrimeFaces', start: '2010-02-15', group: 4},
    {id: i++, content: 'RxJava', start: '2014-11-18', group: 4, className: 'orange'},
    {id: i++, content: 'Elastic search', start: '2014-01-01', group: 3, className: 'orange important'},

    {id: i++, content: 'Scala', start: '2004-01-20', type: 'box', group: 5, className: 'important'},
    {id: i++, content: 'Groovy', start: '2007-01-02', type: 'box', group: 5, className: 'important'},
    {id: i++, content: 'Clojure', start: '2007-01-01', group: 5},
    {id: i++, content: 'JRuby', start: '2001-01-01', group: 5},
    {id: i++, content: 'Jython', start: '2001-01-17', group: 5},
    {id: i++, content: 'Kotlin', start: '2016-02-15', group: 5, className: 'orange'},
  ]);

  // Groups
  // Optional: a field 'className', 'style', 'order', [properties]
  var groups = [
    { id: 4, content: 'Tools', order: 1 },    
    { id: 3, content: 'Frameworks/JSR', order: 2 },    
    { id: 5, content: 'Languages', order: 3 },    
    { id: 2, content: 'App Servers', order: 4 },
    { id: 1, content: 'Java Versions', order: 5 },
  ]; 

  // Configuration for the Timeline
  var options = {orientation: {axis: 'both', items: 'top'}, type: 'point', zoomable: false};

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, groups, options);
})();
