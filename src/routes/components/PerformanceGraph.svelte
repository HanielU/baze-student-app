<script lang="ts">
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
  import { progression } from "$lib/dummydata/progression";
  import { themeVars } from "$styles/vanilla/theme.css";

  // from dribbble design
  // const green = "hsl(158, 74%, 38%)";
  // const dark = "hsl(223, 25%, 22%)";

  const barThickness = 50; // 50px
  const data: ChartData<"bar", DefaultDataPoint<"bar">, string> = {
    labels: Object.keys(progression), // x-axis label
    datasets: [
      {
        label: "GPA",
        data: Object.values(progression), // y-axis values
        backgroundColor: themeVars.color.base.contentMuted,
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
        hoverBackgroundColor: themeVars.color.primary,
        barThickness,
      },
    ],
  };

  function setupChart(ctx: HTMLCanvasElement) {
    const registerables = [BarController, Tooltip, LinearScale, CategoryScale, BarElement];
    ChartJS.register(...registerables);

    const lengthOfProgression = data.labels!.length;
    const sideMarginProbably = 20;
    const chartWidth =
      barThickness * lengthOfProgression + sideMarginProbably * lengthOfProgression;

    function calculateChartWidth() {
      const parentDiv = ctx.parentElement!;

      if (chartWidth > parentDiv.clientWidth) {
        const chartToParentDifference = chartWidth - parentDiv.clientWidth;
        // increases the scrollable width of the chart
        parentDiv.style.width = `${
          parentDiv.clientWidth +
          // found a great ratio, wouldn't touch if I were you
          (chartToParentDifference < 150 ? 20 : 50) * lengthOfProgression
        }px`;
      }
    }

    calculateChartWidth();

    const chart = new ChartJS(ctx, {
      type: "bar",
      data,
      options: {
        onResize: () => calculateChartWidth(),
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
  <div class="w-full text-center mb-5 relative" p="t-5 x-5 b-2">
    <h3 class="font-medium uppercase text-(base-content/85 sm) mb-1">
      Cumulative Grade Point Average
    </h3>

    <h1 class="font-semibold text-4xl font-secondary uppercase">3.56</h1>

    <un:w-full class="absolute bottom-0 left-0 flex-u-center">
      <div class="w-80% min-w-200px" border-b="~ base-content-muted/30" />
    </un:w-full>
  </div>

  <h4 class="uppercase text-xs text-center text-base-content-muted">
    Performance Graph .
    <un:font-semibold class="text-base-content inline-block"> Max Performance: 4 </un:font-semibold>
  </h4>

  <div class="h-400px w-full overflow-x-scroll md:(w-600px)" p="y-5 x-5">
    <div class="illegal-scroll relative h-full w-100%">
      <canvas use:setupChart />
    </div>
  </div>
</div>
