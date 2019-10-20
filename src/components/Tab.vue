<template>
  <div
    v-if="!hidden"
    :class="{
      tabs__tab: true,
      'tabs__tab--active': $parent.activeKey === $vnode.key,
      'tabs__tab--disabled': disabled
    }"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(e) {
      if (!this.disabled) {
        this.$parent.onClick(e, this.$vnode.key);
      }
    }
  }
};
</script>

<style lang="scss">
.tabs {
  &__tab {
    padding: 5px;
    text-align: center;
    cursor: pointer;

    &--active {
    }

    &--disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>
