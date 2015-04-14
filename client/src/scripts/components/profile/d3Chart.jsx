var Radial = require('./radial');
d3Chart = {};

d3Chart.create = function(el, state) {
  // Checks to see how far user is from daily goal.
  var goal = state.daily_goal;
  var daily = state.steps_today;

  // var stepsLeft = function(daily, goal){
  //   var result = goal - daily;
  //   if(result < 0) {
  //     result = "Goal has been reached!";
  //   }
  //   return result;
  // };

  // stepsLeft(daily, goal);

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

d3Chart.onClick1 = function() {
  deselect();
  el.attr("class","selectedRadial");
};

module.exports = d3Chart;