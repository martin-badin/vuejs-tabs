<template>
  <div class="tabs__content" v-show="$parent.activeKey === $vnode.key">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabContent"
};
</script>

<style lang="scss">
.tabs {
  &__content {
  }
}
</style>
