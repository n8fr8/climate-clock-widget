<template>
  <div class="widgetRoot">
    <div class="black mt-4">
      <div class="title">SEE THE SCIENCE</div>
      <span class="message">
The ClimateClock shows two numbers. The first, in red, is a timer, counting down how long it will take, at current rates of emissions, to burn through our “carbon budget” — the amount of CO2 that can still be released into the atmosphere while limiting global warming to 1.5°C above pre-industrial levels. This is our deadline, the time we have left to take decisive action to keep warming under the 1.5°C threshold. The second number, in green, is tracking the growing % of the world’s energy currently supplied from renewable sources. This is our lifeline. Simply put, we need to get our lifeline to 100% before our deadline reaches 0.
        <br />
        <span class="link"><a href="https://climateclock.world/science" class="link">Learn More</a></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActInTime",
};
</script>

<style lang="scss" scoped>
.widgetRoot {
  font-family: "katwijk_monolight", "Lucida Console", Monaco, monospace;
  color: #00dd72;
  text-transform: uppercase;
}
.title {
  font-weight: bold;
}
.message {
  font-weight: normal;
}
.link {
  color: red;
  font-weight: bold;
}
</style>
