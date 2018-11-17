import Vue from "vue";
import App from "./App.vue";
import Tab from "./components/Tab.vue";
import TabsContainer from "./components/TabsContainer.vue";
import TabContent from "./components/TabContent.vue";

Vue.component(Tab.name, Tab);
Vue.component(TabsContainer.name, TabsContainer);
Vue.component(TabContent.name, TabContent);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
