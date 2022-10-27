<script lang="ts">
  import {
    BarController,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    Tooltip,
    type ChartConfiguration,
    type ChartData,
    type ChartTypeRegistry,
    type DefaultDataPoint,
  } from "chart.js";
  import { fontString } from "chart.js/helpers";
  import { progression } from "$lib/dummydata/progression";
  import { themeVars } from "$styles/vanilla/theme.css";
  import { hslToHsla } from "$lib/utils";

  // from dribbble design
  const green = "hsl(158, 74%, 38%)";
  // const dark = "hsl(223, 25%, 22%)";

  const cgpa = 3.56;

  const barThickness = 45; // 50px
  const data: ChartData<"bar", DefaultDataPoint<"bar">, string> = {
    labels: Object.keys(progression), // x-axis label
    datasets: [
      {
        label: "GPA",
        data: Object.values(progression), // y-axis values
        // backgroundColor: (ctx, opts) => {
        //   if (ctx.raw < 2) return hslToHsla(themeVars.color.redContent, 0.5);
        //   else if (ctx.raw < 3) return hslToHsla(themeVars.color.brownContent, 0.9);
        //   else if (ctx.raw <= 4) return hslToHsla(themeVars.color.greenContent, 0.9);
        // },
        backgroundColor: themeVars.color.base.contentMuted,
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
        // hoverBackgroundColor: themeVars.color.primary,
        hoverBackgroundColor: ctx => {
          if (ctx.raw < 2) return "hsla(360, 50%, 50%, 1)";
          else if (ctx.raw < 3) return hslToHsla(themeVars.color.brownContent, 0.9);
          else if (ctx.raw <= 4) return hslToHsla(themeVars.color.greenContent, 0.9);
        },
        barThickness,
      },
    ],
  };

  const config = (
    calculateChartWidth: () => void
  ): ChartConfiguration<keyof ChartTypeRegistry> => ({
    type: "bar",
    data,
    options: {
      onResize: calculateChartWidth,
      maintainAspectRatio: false, // alows chart to use the width and height of parent wrapper
      plugins: {
        tooltip: {
          displayColors: false,
          backgroundColor: hslToHsla(themeVars.color.primary, 0.85),
          // titleColor: themeVars.color.primary,
          // bodyColor: themeVars.color.primary,
          padding: {
            top: 10,
            right: 15,
            bottom: 10,
            left: 10,
          },
        },
      },
      animation: {
        onProgress: animation => {
          const chartInstance = animation.chart;
          const ctx = chartInstance.ctx;

          ctx.font = fontString(
            ChartJS.defaults.font.size!,
            ChartJS.defaults.font.style!,
            ChartJS.defaults.font.family!
          );

          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          chartInstance.data.datasets.forEach((dataset, i) => {
            const meta = chartInstance.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const data = dataset.data[index] as unknown as string;
              ctx.fillText(data, bar.x, bar.y - 5);
            });
          });
        },
      },
      scales: {
        y: {
          display: false,
          max: 4.25,
        },
        x: {
          grid: {
            drawBorder: false,
          },
        },
      },
    },
  });

  function setupChart(ctx: HTMLCanvasElement) {
    const registerables = [BarController, Tooltip, LinearScale, CategoryScale, BarElement];
    ChartJS.register(...registerables);

    const lengthOfProgression = data.labels!.length;
    const sideMarginProbably = 20;
    const chartWidth =
      barThickness * lengthOfProgression + sideMarginProbably * lengthOfProgression;

    const chart = new ChartJS(
      ctx,
      config(() => {
        const parentDiv = ctx.parentElement!;

        if (chartWidth > parentDiv.clientWidth) {
          const chartToParentDifference = chartWidth - parentDiv.clientWidth;
          // increases the scrollable width of the chart
          parentDiv.style.width = `${
            parentDiv.clientWidth +
            // found a great ratio, wouldn't touch if I were you
            (chartToParentDifference < 150 ? 20 : barThickness) * lengthOfProgression
          }px`;
        }
      })
    );

    return {
      destroy() {
        chart.destroy();
        ChartJS.unregister(...registerables);
      },
    };
  }
</script>

<div class="rounded-4 bg-base-100 w-full shadow overflow-hidden">
  <!-- CGPA -->
  <div class="w-full text-center mb-5 relative" p="t-5 x-5 b-2">
    <h3 class="font-medium uppercase text-(base-content/85 xs) mb-1">
      Cumulative Grade Point Average
    </h3>

    <h1 class="font-(semibold secondary) text-4xl uppercase">{cgpa}</h1>

    <un:w-full class="absolute bottom-0 left-0 flex-u-center">
      <div class="w-80% min-w-200px" border-b="~ base-content-muted/30" />
    </un:w-full>
  </div>

  <!-- Chart "legend" -->
  <h4 class="uppercase text-(xs center base-content-muted)">
    Performance Graph .
    <un:font-semibold class="text-base-content inline-block"> Max Performance: 4 </un:font-semibold>
  </h4>

  <!-- Chart -->
  <div
    class="h-38vh min-h-350px max-h-500px w-full overflow-x-scroll md:(w-600px)
    scrollbar:h-2.5
    scrollbar-track:(rounded-2.5 bg-base-content/4)
    scrollbar-thumb:(rounded-2.5 bg-base-content-muted/60)"
    p="t-5 b-6 x-5"
  >
    <div class="illegal-scroll relative h-full w-100%">
      <canvas use:setupChart />
    </div>
  </div>
</div>
