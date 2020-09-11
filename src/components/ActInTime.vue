<template>
  <div class="widgetRoot">
    <v-btn outlined>Act in time</v-btn>
    <div class="black mt-4">
      <div class="title">Today's mission:</div>
      <span class="message">
        Send your senator a message
        <br />Click
        <span class="link">here</span>
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