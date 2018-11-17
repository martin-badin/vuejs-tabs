<template>
  <div class="tabs__container">
    <div class="tabs__wrapper" ref="tabs">
      <slot name="tab"></slot>
      <div
        class="tabs__line"
        :style="{
          width: `${lineWidth}px`,
          left: `${offsetLeft}px`
        }"
      ></div>
    </div>
    <div class="tabs__content-wrapper"><slot name="content"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabsContainer",
  props: {
    defaultTab: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      activeTab: null,
      activeKey: this.defaultTab
    };
  },
  computed: {
    lineWidth() {
      return this.activeTab ? this.activeTab.clientWidth : 0;
    },
    offsetLeft() {
      return this.activeTab ? this.activeTab.offsetLeft : 0;
    }
  },
  methods: {
    onClick(e, key) {
      this.activeKey = key;
      this.activeTab = e.target;
    }
  },
  mounted() {
    this.activeTab = this.$refs.tabs.children[this.defaultTab];
  }
};
</script>

<style lang="scss">
.tabs {
  &__container {
  }

  &__wrapper {
    display: flex;
    flex-direction: row;
    position: relative;
    padding-bottom: 2px;
  }

  &__line {
    position: absolute;
    background-color: red;
    height: 2px;
    width: 100%;
    bottom: 0;
    transition: all 200ms ease-in-out;
  }

  &__content-wrapper {
  }
}
</style>
