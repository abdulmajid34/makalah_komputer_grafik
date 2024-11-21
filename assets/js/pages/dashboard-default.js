"use strict";

// function createChart(type) {
//   console.log(type, "chart function");

//   new ApexCharts(document.querySelector("#customer-rate-graph"), {
//     chart: {
//       width: "100%",
//       height: 380,
//       type: type,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       width: 1,
//       colors: ["#fff"],
//     },
//     series: [
//       {
//         name: "Home",
//         data: [44000, 41000, 64000, 22000, 43000, 21000, 66000, 50000, 55000],
//       },
//       {
//         name: "Away",
//         data: [53000, 32000, 33000, 52000, 13000, 44000, 32000, 77000, 66000],
//       },
//     ],
//     xaxis: {
//       categories: [
//         "Indonesia vs Brunei",
//         "Indonesia vs Irak",
//         "Indonesia vs Filipina",
//         "Indonesia vs Vietnam",
//         "Indonesia vs Arab Saudi",
//         "Indonesia vs Bahrain",
//         "Indonesia vs China",
//         "Indonesia vs Australia",
//         "Indonesia vs Jepang",
//       ],
//     },
//     legend: {
//       position: "top",
//       verticalAlign: "top",
//       containerMargin: {
//         left: 35,
//         right: 60,
//       },
//     },
//     tooltip: {
//       enabled: true,
//       theme: "light",
//       x: {
//         show: true,
//       },
//       y: {
//         formatter: function (val) {
//           return val.toLocaleString("id-ID") + " Penonton";
//         },
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 1000,
//         options: {
//           plotOptions: {
//             bar: {
//               horizontal: false,
//             },
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   }).render();
// }

function floatchart() {
  new ApexCharts(document.querySelector("#all-earnings-graph"), {
    chart: { type: "bar", height: 50, sparkline: { enabled: !0 } },
    colors: ["#4680FF"],
    plotOptions: { bar: { columnWidth: "80%" } },
    series: [{ data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }],
    xaxis: { crosshairs: { width: 1 } },
    tooltip: {
      fixed: { enabled: !1 },
      x: { show: !1 },
      y: {
        title: {
          formatter: function (e) {
            return "";
          },
        },
      },
      marker: { show: !1 },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  }).render(),
    new ApexCharts(document.querySelector("#page-views-graph"), {
      chart: { type: "bar", height: 50, sparkline: { enabled: !0 } },
      colors: ["#E58A00"],
      plotOptions: { bar: { columnWidth: "80%" } },
      series: [{ data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: !1 },
        x: { show: !1 },
        y: {
          title: {
            formatter: function (e) {
              return "";
            },
          },
        },
        marker: { show: !1 },
      },
    }).render(),
    new ApexCharts(document.querySelector("#total-task-graph"), {
      chart: { type: "bar", height: 50, sparkline: { enabled: !0 } },
      colors: ["#2CA87F"],
      plotOptions: { bar: { columnWidth: "80%" } },
      series: [{ data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: !1 },
        x: { show: !1 },
        y: {
          title: {
            formatter: function (e) {
              return "";
            },
          },
        },
        marker: { show: !1 },
      },
    }).render(),
    new ApexCharts(document.querySelector("#download-graph"), {
      chart: { type: "bar", height: 50, sparkline: { enabled: !0 } },
      colors: ["#DC2626"],
      plotOptions: { bar: { columnWidth: "80%" } },
      series: [{ data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: !1 },
        x: { show: !1 },
        y: {
          title: {
            formatter: function (e) {
              return "";
            },
          },
        },
        marker: { show: !1 },
      },
    }).render(),
    new ApexCharts(document.querySelector("#total-tasks-graph"), {
      chart: {
        type: "area",
        height: 60,
        stacked: !0,
        sparkline: { enabled: !0 },
      },
      colors: ["#4680FF"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          type: "vertical",
          inverseColors: !1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      stroke: { curve: "smooth", width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
    }).render(),
    new ApexCharts(document.querySelector("#pending-tasks-graph"), {
      chart: {
        type: "area",
        height: 60,
        stacked: !0,
        sparkline: { enabled: !0 },
      },
      colors: ["#DC2626"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          type: "vertical",
          inverseColors: !1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      stroke: { curve: "smooth", width: 2 },
      series: [{ data: [0, 50, 4, 10, 3, 25, 5] }],
    }).render(),
    new ApexCharts(document.querySelector("#total-income-graph"), {
      chart: { height: 320, type: "donut" },
      series: [10000, 10000, 20000, 20000, 15000, 10000, 15000],
      colors: [
        "#4680FF",
        "#E58A00",
        "#2CA87F",
        "#4680FF",
        "#DC2626",
        "#4335A7",
        "#47663B",
      ],
      labels: [
        "Premium West",
        "Premium East",
        "Garuda West",
        "Garuda East",
        "Garuda North",
        "Garuda South",
        "Upper Garuda",
      ],
      fill: { opacity: [1, 1, 1, 0.3, 1, 1, 1] },
      legend: { show: !1 },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: { show: !0, name: { show: !0 }, value: { show: !0 } },
          },
        },
      },
      dataLabels: { enabled: !1 },
      responsive: [
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              pie: { donut: { size: "65%", labels: { show: !0 } } },
            },
          },
        },
      ],
    }).render();
}

var options = {
  chart: {
    width: "100%",
    height: 380,
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
    curve: "smooth",
  },
  series: [
    {
      name: "Home",
      data: [23318, 60246, 64942, 57696, 70059, 75000, 72000, 70059, 71000],
    },
    {
      name: "Away",
      data: [7500, 5000, 7500, 23318, 5000, 1500, 20000, 12000, 15000],
    },
    // away iraq = 63720,
  ],

  xaxis: {
    categories: [
      "Indonesia vs Brunei",
      "Indonesia vs Iraq",
      "Indonesia vs Filipina",
      "Indonesia vs Vietnam",
      "Indonesia vs Arab Saudi",
      "Indonesia vs Bahrain",
      "Indonesia vs China",
      "Indonesia vs Australia",
      "Indonesia vs Jepang",
    ],
  },
  legend: {
    position: "top",
    verticalAlign: "top",
    containerMargin: {
      left: 35,
      right: 60,
    },
  },
  tooltip: {
    enabled: true,
    theme: "light",
    x: {
      show: true,
    },
    y: {
      formatter: function (val) {
        return val.toLocaleString("id-ID") + " Penonton";
      },
    },
  },
  responsive: [
    {
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#customer-rate-graph"),
  options
);
chart.render();

// function changeChartType(type) {
//   let newSeries;

//   // Sesuaikan data untuk tipe chart tertentu
//   if (type === "pie" || type === "donut") {
//     newSeries = [44000, 41000, 64000, 22000, 43000, 21000, 66000, 50000, 55000];
//     chart.updateOptions({
//       chart: {
//         type: type,
//       },
//       series: newSeries,
//       labels:
//         type === "donut" || type === "pie"
//           ? [
//               "Indonesia vs Brunei",
//               "Indonesia vs Iraq",
//               "Indonesia vs Vietnam",
//               "Indonesia vs Filipina",
//               "Indonesia vs Arab Saudi",
//               "Indonesia vs Jepang",
//               "Indonesia vs Bahrain",
//               "Indonesia vs China",
//               "Indonesia vs Australia",
//             ]
//           : null,
//       legend: { show: !1 },
//       plotOptions:
//         type === "pie" || type === "donut"
//           ? {
//               pie: {
//                 donut: {
//                   size: "65%",
//                   labels: { show: !0, name: { show: !0 }, value: { show: !0 } },
//                 },
//               },
//             }
//           : null,
//       dataLabels: type === "pie" || type === "donut" ? { enabled: !1 } : null,

//       responsive:
//         type === "pie" || type === "donut"
//           ? [
//               {
//                 breakpoint: 480,
//                 options: {
//                   plotOptions: {
//                     pie: { donut: { size: "65%", labels: { show: !0 } } },
//                   },
//                 },
//               },
//             ]
//           : null,
//     });
//   } else if (type === "bar") {
//     chart.updateOptions({
//       chart: {
//         width: "100%",
//         height: 380,
//         type: type,
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         width: 1,
//         colors: ["#fff"],
//         curve: "smooth",
//       },
//       series: [
//         {
//           name: "Home",
//           data: [44000, 41000, 64000, 22000, 43000, 21000, 66000, 50000, 55000],
//         },
//         {
//           name: "Away",
//           data: [53000, 32000, 33000, 52000, 13000, 44000, 32000, 77000, 66000],
//         },
//       ],
//       xaxis: {
//         categories: [
//           "Indonesia vs Brunei",
//           "Indonesia vs Iraq",
//           "Indonesia vs Filipina",
//           "Indonesia vs Vietnam",
//           "Indonesia vs Arab Saudi",
//           "Indonesia vs Bahrain",
//           "Indonesia vs China",
//           "Indonesia vs Australia",
//           "Indonesia vs Jepang",
//         ],
//       },
//       legend: {
//         position: "top",
//         verticalAlign: "top",
//         containerMargin: {
//           left: 35,
//           right: 60,
//         },
//       },
//       tooltip: {
//         enabled: true,
//         theme: "light",
//         x: {
//           show: true,
//         },
//         y: {
//           formatter: function (val) {
//             return val.toLocaleString("id-ID") + " Penonton";
//           },
//         },
//       },
//       responsive: [
//         {
//           breakpoint: 1000,
//           options: {
//             plotOptions: {
//               bar: {
//                 horizontal: false,
//               },
//             },
//             legend: {
//               position: "bottom",
//             },
//           },
//         },
//       ],
//     });
//   }
// }

function defaultChart() {
  window.location.reload();
}

function changeChartType(type) {
  if (type === "pie" || type === "donut") {
    chart.updateOptions({
      chart: { type },
      series: options.series[0].data,
      labels: options.xaxis.categories,
      legend: { show: false },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: { show: true, name: { show: true }, value: { show: true } },
          },
        },
      },
      dataLabels: { enabled: false },
      responsive: [
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              pie: { donut: { size: "65%", labels: { show: true } } },
            },
          },
        },
      ],
    });
  }
  // else {
  //   chart.updateOptions({
  //     ...options,
  //     chart: { ...options.chart, type },
  //     series: options.series,
  //   });
  // }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    floatchart();
    chart;
  }, 500);
});
