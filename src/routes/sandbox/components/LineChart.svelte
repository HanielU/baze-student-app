<script lang="ts">
  import { Chart, registerables, type Plugin } from "chart.js";
  import { onDestroy, onMount } from "svelte";

  onMount(() => {
    Chart.register(...registerables);
    const canvas = document.getElementById("canvas")! as HTMLCanvasElement;

    // Apply multiply blend when drawing datasets
    const multiply: Plugin<"line"> = {
      id: "multiply",
      beforeDatasetsDraw: function (chart) {
        chart.ctx.globalCompositeOperation = "multiply";
      },
      afterDatasetsDraw: function (chart) {
        chart.ctx.globalCompositeOperation = "source-over";
      },
    };

    new Chart(canvas, {
      type: "line",
      data: {
        labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        datasets: [
          {
            label: "Temperature",
            data: [18, 26, 14, 22, 12, 20, 12],
            fill: false,
            borderColor: "rgba(255, 255, 255, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "transparent",
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 3,
            pointHoverBorderColor: "rgba(255, 255, 255, 0.2)",
            pointHoverBorderWidth: 10,
            // lineTension: 0,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "transparent",
            displayColors: false,
            bodyFont: { size: 14 },
            callbacks: {
              label: function (ctx) {
                return ctx.parsed.y + "°C";
              },
            },
          },
        },
        elements: {
          point: {
            radius: 6,
            hitRadius: 6,
            hoverRadius: 6,
          },
        },
        scales: {
          x: { display: false },
          y: {
            display: false,
            beginAtZero: true,
          },
        },
      },
      plugins: [multiply],
    });
  });

  onDestroy(() => Chart.unregister(...registerables));

  const ticks = [
    [16, "SUN"],
    [10, "MON"],
    [11, "TUE"],
    [12, "WED"],
    [13, "THU"],
    [14, "FRI"],
    [15, "SAT"],
  ];
</script>

<div class="s-flex-center h-[calc(100%-100px)] w-full">
  <div class="card relative h-400px w-95% px-1 rounded-2.5">
    <!-- Custom information -->
    <div class="mb-20 p-5">
      <h3 text="6 white">Chart.js</h3>
      <p text="#eee">Temperature in °C</p>
    </div>

    <!-- Canvas for Chart.js -->
    <un-h-200px px-1>
      <canvas id="canvas" />
    </un-h-200px>

    <!-- Custom Axis -->
    <div class="absolute text-white z-1 uppercase flex w-full bottom-0">
      {#each ticks as [dnum, dname]}
        <div
          class="text-11px leading-20px relative flex-1 py-5 text-center
          after:(content-empty absolute block right-0 bottom-0 w-px h-200px bg-white/20)"
        >
          <span class="block">{dnum}</span>
          <span class="block opacity-40">{dname}</span>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .card {
    background: linear-gradient(-45deg, #5555ff, #9787ff);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }

  /* Animated background, credits: Manuel Pinto, https://codepen.io/P1N2O/pen/pyBNzX */
  .card {
    background: linear-gradient(-45deg, #5555ff, #9787ff, #ff55b8, #ff8787);
    background-size: 400% 400%;
    animation: bg 20s infinite;
  }

  @keyframes bg {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
