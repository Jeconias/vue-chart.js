<template>
  <div>
    <BarChart />
    <LineChart />
    <RadarChart />
  </div>
</template>

<script>
import BarChart from "~/components/BarChart.vue";
import LineChart from "~/components/LineChart.vue";
import RadarChart from "~/components/RadarChart.vue";

export default {
  name: "App",
  components: {
    BarChart,
    LineChart,
    RadarChart,
  },
};
</script>
