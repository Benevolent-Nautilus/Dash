var Radial = require('./radial');
d3Chart = {};

d3Chart.create = function(el, state) {
  Radial.radialProgress(el)
      .label(state.name)
      .onClick(this.onClick1)
      .diameter(300)
      .value(state.steps)
      .render();
};

d3Chart.onClick1 = function() {
  deselect();
  el.attr("class","selectedRadial");
};

module.exports = d3Chart;