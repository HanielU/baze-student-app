<script lang="ts">
  import { progression } from "$lib/dummydata/progression";
  import {
    BarController,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    Tooltip,
    type ChartData,
    type DefaultDataPoint,
  } from "chart.js";

  const registerables = [BarController, Tooltip, LinearScale, CategoryScale, BarElement];

  // original bg colors for the chart.js
  export const ogBG = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
  ];

  // original border colors for the chart.js
  export const ogBD = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];

  const green = "hsl(158, 74%, 38%)";
  const dark = "hsl(223, 25%, 22%)";

  const barThickness = 50;
  const data: ChartData<"bar", DefaultDataPoint<"bar">, string> = {
    labels: Object.keys(progression), // x-axis label
    datasets: [
      {
        label: "GPA",
        data: Object.values(progression), // y-axis values
        backgroundColor: dark,
        borderColor: ogBD,
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
        hoverBackgroundColor: green,
        barThickness,
      },
    ],
  };

  function setupChart(ctx: HTMLCanvasElement) {
    ChartJS.register(...registerables);

    const parentDiv = ctx.parentElement!;
    const lengthOfProgression = Object.entries(progression).length;

    const sideMarginProbably = 20;
    const chartWidth =
      barThickness * lengthOfProgression + sideMarginProbably * lengthOfProgression;

    if (chartWidth > parentDiv.clientWidth) {
      const chartToParentDifference = chartWidth - parentDiv.clientWidth;
      for (let i = 0; i < lengthOfProgression; i++) {
        // increases the scrollable width of the chart
        parentDiv.style.width = `${
          parentDiv.clientWidth +
          // found a great ratio, wouldn't touch if I were you
          (chartToParentDifference < 150 ? 20 : 50)
        }px`;
      }
    }

    const chart = new ChartJS(ctx, {
      type: "bar",
      data,
      options: {
        onResize(chart, size) {
          // console.log("ran", size);
        },
        onClick(chart, active) {
          // console.log("ran", active);
        },
        maintainAspectRatio: false, // alows chart to use the width and height of parent wrapper
        plugins: {
          tooltip: {
            // backgroundColor: "hsla(0,0%,0%,.1)",
            displayColors: false,
            // padding: 20,
          },
        },
        scales: {
          y: {
            display: false,
            max: 4,
          },
          x: {
            grid: {
              drawBorder: false,
            },
          },
        },
      },
    });

    return {
      destroy: () => {
        chart.destroy();
        ChartJS.unregister(...registerables);
      },
    };
  }
</script>

<div class="rounded-4 bg-base-100 w-full shadow overflow-hidden">
  <div class="w-full text-center mb-5" border-b="~ primary/8" p="t-5 x-5 b-2">
    <h3 class="font-medium uppercase text-primary/80 text-sm mb-1">
      Cumulative Grade Point Average
    </h3>
    <h1 class="font-semibold text-4xl font-secondary uppercase">3.56</h1>
  </div>

  <h4 class="uppercase text-xs text-center text-primary/70">
    Performance Graph |
    <un:font-semibold class="text-primary inline-block"> Max Performance: 4 </un:font-semibold>
  </h4>

  <div class="h-400px w-full overflow-x-scroll md:(w-600px)" p="y-5 x-5">
    <div class="illegal-scroll relative h-full w-100%">
      <canvas use:setupChart />
    </div>
  </div>
</div>
