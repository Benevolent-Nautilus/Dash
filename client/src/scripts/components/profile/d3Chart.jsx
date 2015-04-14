var Radial = require('./Radial');
D3Chart = {};

D3Chart.create = function(el, state) {
  // Checks to see how far user is from daily goal.
  var goal = state.daily_goal;
  var daily = state.steps_today;

  Radial.radialProgress(el)
      .label(function() {
        if(goal-daily <= 0) {
          return "Goal has been met!";
        }
        return goal-daily + " STEPS TO GO";
      })
      .onClick(this.onClick1)
      .diameter(350)
      .value(state.steps_today)
      .maxValue(state.daily_goal)
      .render();
};

D3Chart.onClick1 = function() {
  deselect();
  el.attr("class","selectedRadial");
};

module.exports = D3Chart;