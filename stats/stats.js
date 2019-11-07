function init(){
  lineGraph();
  dataDays();
};

$(document).ready(init);



function lineGraph(){

var days = dataDays();

var ctx = document.getElementById('lineGraph').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: days,
        datasets: [{
            label: 'Visualizazioni del mese = ',
            data: [1, 2, 6],
        }]
    },
});
};

function dataDays(){

  var nov = moment("2019-11", "YYYY-MM").daysInMonth();
  var arr = [];
  console.log(nov);

  for (var i = 0; i <= nov; i++) {
    arr.push(i);
  };
  console.log(i);
  console.log(arr);

  return arr;
};
