<template>
  <div class="chartWrapper">
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js";

const data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export default {
  name: "LineChart",
  data() {
    return {
      lineChartData: {
        type: "line",
        data: data,
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("line-chart");
    new Chart(ctx, this.lineChartData);
  },
};
</script>
