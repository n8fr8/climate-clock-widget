<template>
  <v-app>
    <v-main id="main">
      <transition :name="transitionName">
        <keep-alive>
          <router-view :key="'view_' + $route.name" class="mainPaneContainer" />
        </keep-alive>
      </transition>
    </v-main>
    <v-container id="bottomNav">
      <v-row>
<!--
        <v-col cols="6" class="text-right">
          <v-menu v-model="lifelinesMenu" top offset-y close-on-click close-on-content-click>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" outlined v-on="on">Lifelines</v-btn>
            </template>
            <v-list flat outlined rounded class="menuList">
              <template v-for="(item, index) in lifelinesMenuItems">
                <v-list-item :key="index" link router :to="item.link" replace>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
        </v-col>
-->
        <v-col cols="2">
          <v-btn outlined fab small router to="/"><img src="img/icons/android-32x32.png"></v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn small outlined router to="/flatten">Flatten</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn small outlined router to="/deadlines">Deadline</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn small outlined router to="/actintime">Action</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    lifelinesMenu: false,
    lifelinesMenuItems: [
      { title: "Lifelines", link: "/" },
      { title: "Flatten the climate curve", link: "/flatten" },
      { title: "Renewable transition", link: "/transition" },
      { title: "Rethinking time", link: "/rethink" },
    ],
    transitionName: "slide-right",
  }),
  watch: {
    $route(to, ignoredFrom) {
      if (to.name == "home") {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
};
</script>

<style lang="scss">
@import url(./assets/css/transitions.scss);

$background: #1a1a1a;
$foreground: #008040;
$mainPadding: 10px;

body {
  background-color: $background;
}

#main {
  background-color: $background;
  position: fixed;
  top: 0;
  bottom: 80px;
  left: 0;
  right: 0;
  overflow: hidden;
  .mainPaneContainer {
    position: absolute;
    background-color: $background;
    left: $mainPadding;
    top: $mainPadding;
    bottom: 0;
    right: $mainPadding;
    width: calc(100% - (2 * #{$mainPadding}));
    height: calc(100% - #{$mainPadding});
    overflow: hidden;
    .container.fill-height > .row {
      max-width: 100% !important;
    }

  }
}


#bottomNav {
  background-color: $background;
  position: fixed;
  bottom: 0;
  height: 80px;
  left: 0;
  right: 0;
}

.v-btn {
  color: $foreground !important;
  border: 1px solid $foreground;
  border-radius: 10px;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}

.menuList.v-sheet.v-list {
  background-color: black;
  color: $foreground !important;
  border: 1px solid $foreground;
  border-radius: 10px;
  margin: 0 0 4px 0;
  .v-list-item {
    color: $foreground !important;
    padding: 4px !important;
    min-height: 24px;
    &.v-list-item--active {
      text-decoration: underline;
    }
    .v-list-item__content {
      padding: 0;
    }
  }
}
</style>
