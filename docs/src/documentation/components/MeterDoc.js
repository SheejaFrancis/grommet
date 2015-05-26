// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var stringify = require("json-stringify-pretty-compact");
var Meter = require('grommet/components/Meter');
var GrommetDocument = require('grommet/components/Document');

var inline =
  "<Meter value={70} total={100} units=\"GB\" />";

var simpleValue = 40;
var simpleMin = {value: 20, label: '20 GB'};
var simpleMax = {value: 80, label: '80 GB'};
var simpleThreshold = 75;
var simpleUnits = 'GB';

var statusSeries = [
  {label: 'OK', value: 60, colorIndex: 'ok'},
  {label: 'Warning', value: 20, colorIndex: 'warning'},
  {label: 'Error', value: 10, colorIndex: 'error'}
];

var MeterDoc = React.createClass({

  render: function() {
    return (
      <GrommetDocument>
        <header>
          <h1>Meter</h1>
          <p>Shows a linear meter graphic.</p>

          <pre><code className="html">{inline}</code></pre>
        </header>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>important   {"{number}"}</code></dt>
            <dd>The index of the series data that the active label should
              correspond to, if any.</dd>
            <dt><code>large       true|false</code></dt>
            <dd>Larger sized version.</dd>
            <dt><code>legend      true|false</code></dt>
            <dd>Whether to show a legend.</dd>
            <dt><code>legendTotal true|false</code></dt>
            <dd>Whether to show a total in the legend.</dd>
            <dt><code>max         {"{value: , label: }|{number}"}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min         {"{value: , label: }|{number}"}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>series     {"[{value: , label: , colorIndex: , important: , onClick: }, ...]"}</code></dt>
            <dd>An array of objects describing the data.
              Either this or the <code>value</code> property must be provided.</dd>
            <dt><code>small        true|false</code></dt>
            <dd>Smaller sized version.</dd>
            <dt><code>threshold   {"{number}"}</code></dt>
            <dd>Optional threshold value.</dd>
            <dt><code>type         bar|arc|circle</code></dt>
            <dd>Whether to draw a bar, an arc, or a circle.</dd>
            <dt><code>units       {"{string}"}</code></dt>
            <dd>Optional units to display next to the value label.</dd>
            <dt><code>value       {"{number}"}</code></dt>
            <dd>The current value.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Bar</h3>
          <div className="example">
            <Meter value={simpleValue} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} />"}
          </code></pre>

          <h3>Bar, Vertical</h3>
          <div className="example">
            <Meter value={simpleValue} vertical={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} vertical={true} />"}
          </code></pre>

          <h3>Arc</h3>
          <div className="example">
            <Meter value={simpleValue} type="arc" />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} type=\"arc\" />"}
          </code></pre>

          <h3>Arc, Vertical</h3>
          <div className="example">
            <Meter value={simpleValue} type="arc" vertical={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} type=\"arc\" vertical={true} />"}
          </code></pre>

          <h3>Circle</h3>
          <div className="example">
            <Meter value={simpleValue} type="circle" />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} type=\"circle\" />"}
          </code></pre>

          <h3>Bar, Min, Max, Units, Threshold</h3>
          <div className="example">
            <Meter value={simpleValue} min={simpleMin}
              max={simpleMax} threshold={simpleThreshold}
              units={simpleUnits} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "}\n" +
              " min={" + stringify(simpleMin) + "}\n" +
              " max={" + stringify(simpleMax) + "}\n" +
              " threshold={" + simpleThreshold + "}\n" +
              " units=\"" + simpleUnits + "\" />"}
          </code></pre>

          <h3>Bar, Min, Max, Units, Threshold, Vertical</h3>
          <div className="example">
            <Meter value={simpleValue} min={simpleMin}
              max={simpleMax} threshold={simpleThreshold}
              units={simpleUnits} vertical={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "}\n" +
              " min={" + stringify(simpleMin) + "}\n" +
              " max={" + stringify(simpleMax) + "}\n" +
              " threshold={" + simpleThreshold + "}\n" +
              " units=\"" + simpleUnits + "\" vertical={true} />"}
          </code></pre>

          <h3>Arc, Min, Max, Units, Threshold</h3>
          <div className="example">
            <Meter type="arc" value={simpleValue} min={simpleMin}
              max={simpleMax} threshold={simpleThreshold}
              units={simpleUnits} />
          </div>
          <pre><code className="html">
            {"<Meter type=\"arc\" value={" + simpleValue + "}\n" +
              " min={" + stringify(simpleMin) + "}\n" +
              " max={" + stringify(simpleMax) + "}\n" +
              " threshold={" + simpleThreshold + "}\n" +
              " units=\"" + simpleUnits + "\" />"}
          </code></pre>

          <h3>Arc, Min, Max, Units, Threshold, Vertical</h3>
          <div className="example">
            <Meter type="arc" value={simpleValue} min={simpleMin}
              max={simpleMax} threshold={simpleThreshold}
              units={simpleUnits} vertical={true} />
          </div>
          <pre><code className="html">
            {"<Meter type=\"arc\" value={" + simpleValue + "}\n" +
              " min={" + stringify(simpleMin) + "}\n" +
              " max={" + stringify(simpleMax) + "}\n" +
              " threshold={" + simpleThreshold + "}\n" +
              " units=\"" + simpleUnits + "\" vertical={true} />"}
          </code></pre>

          <h3>Circle, Min, Max, Units, Threshold</h3>
          <div className="example">
            <Meter type="circle" value={simpleValue} min={simpleMin}
              max={simpleMax} threshold={simpleThreshold}
              units={simpleUnits} />
          </div>
          <pre><code className="html">
            {"<Meter type=\"circle\" value={" + simpleValue + "}\n" +
              " min={" + stringify(simpleMin) + "}\n" +
              " max={" + stringify(simpleMax) + "}\n" +
              " threshold={" + simpleThreshold + "}\n" +
              " units=\"" + simpleUnits + "\" />"}
          </code></pre>

          <h3>Bar, Series, Legend</h3>
          <div className="example">
            <Meter legend={true} series={statusSeries} />
          </div>
          <pre><code className="html">
            {"<Meter legend={true}\n " +
              "series={" + JSON.stringify(statusSeries, null, '  ') + "}  />"}
          </code></pre>

          <h3>Bar, Series, Legend, Vertical</h3>
          <div className="example">
            <Meter legend={true} series={statusSeries} vertical={true} />
          </div>
          <pre><code className="html">
            {"<Meter legend={true}\n" +
              " series={" + JSON.stringify(statusSeries, null, '  ') + "}\n" +
              " vertical={true} />"}
          </code></pre>

          <h3>Arc, Series, Legend</h3>
          <div className="example">
            <Meter type="arc" legend={true} series={statusSeries} />
          </div>
          <pre><code className="html">
            {"<Meter type=\"arc\" legend={true}\n " +
              "series={" + JSON.stringify(statusSeries, null, '  ') + "} />"}
          </code></pre>

          <h3>Arc, Series, Legend, Vertical</h3>
          <div className="example">
            <Meter type="arc" legend={true} series={statusSeries} vertical={true} />
          </div>
          <pre><code className="html">
            {"<Meter type=\"arc\" legend={true}\n " +
              "series={" + JSON.stringify(statusSeries, null, '  ') + "}\n" +
              " vertical={true} />"}
          </code></pre>

          <h3>Circle, Series, Legend</h3>
          <div className="example">
            <Meter type="circle" legend={true} series={statusSeries} />
          </div>
          <pre><code className="html">
            {"<Meter type=\"arc\" legend={true}\n " +
              "series={" + JSON.stringify(statusSeries, null, '  ') + "} />"}
          </code></pre>

          <h3>Bar, Small</h3>
          <div className="example">
            <Meter value={simpleValue} small={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} small={true} />"}
          </code></pre>

          <h3>Arc, Small</h3>
          <div className="example">
            <Meter value={simpleValue} type="arc" small={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} type=\"arc\" small={true} />"}
          </code></pre>

          <h3>Circle, Small</h3>
          <div className="example">
            <Meter value={simpleValue} type="circle" small={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} type=\"circle\" small={true} />"}
          </code></pre>

          <h3>Bar, Large</h3>
          <div className="example">
            <Meter value={simpleValue} large={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} large={true} />"}
          </code></pre>

          <h3>Arc, Large</h3>
          <div className="example">
            <Meter value={simpleValue} type="arc" large={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} type=\"arc\" large={true} />"}
          </code></pre>

          <h3>Circle, Large</h3>
          <div className="example">
            <Meter value={simpleValue} type="circle" large={true} />
          </div>
          <pre><code className="html">
            {"<Meter value={" + simpleValue + "} type=\"circle\" large={true} />"}
          </code></pre>

        </section>
      </GrommetDocument>
    );
  }
});

module.exports = MeterDoc;
