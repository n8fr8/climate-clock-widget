<template>
  <div class="widgetRoot">
    <v-btn outlined>Act in time</v-btn>
    <div class="black mt-4">
      <div class="title">THIS WEEK's MISSION</div>
      <span class="message">
TELL GOV NEWSOM TO STOP FUELING CALIFORNIA WILDFIRES BY ENDING NEW OIL & GAS PERMITS
        <br />
        <span class="link"><a href="https://350.org/california-twitterstorm/" class="link">Take Action</a></span>
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
