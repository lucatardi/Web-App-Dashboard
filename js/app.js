const webTraffic = new Chart (document.getElementById("webTraffic"), {
  type: "line",
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "days",
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: "rgba(133, 133, 224, 0.2)",
            borderColor: "rgb(133, 133, 224)",
            borderWidth: 1,
            lineTension: 0,
            pointBackgroundColor: "white",
            pointRadius: "6",
            pointBorderWidth: "2"

        }]
      },
     options: {
        legend: {
          display: false
        },
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
 });

 const dailyTraffic = new Chart(document.getElementById("dailyTraffic"), {
   type: 'bar',
   data: {
     labels: ["S", "M", "T", "W", "T", "F", "S"],
     datasets: [{
       label: "visites",
       data: [75, 100, 175, 125, 225, 200, 100],
       backgroundColor: "rgb(133, 133, 224)",
     }]
   },
   options: {
     barThickness: 20,
     legend: {
       display: false
     }
   }
 });

const mobileUsers = new Chart(document.getElementById("mobileUsers"), {
  type: 'doughnut',
  data: {
    labels: ["Phones", "Tables", "Desktop"],
    datasets: [{
      data: [17, 17, 66],
      backgroundColor: ["#44bf7b","#68adad","rgb(133, 133, 224)"],
      borderWidth: 0,
    }],
  },
  options: {
    rotation: -2,
    legend: {
      position: "right",
      padding: 10,
    },
  }
});
