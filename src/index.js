import Tab from "./components/Tab.vue";
import TabsContainer from "./components/TabsContainer.vue";
import TabContent from "./components/TabContent.vue";

export { Tab, TabsContainer, TabContent };

export default {
  install: Vue => {
    Vue.component(Tab.name, Tab);
    Vue.component(TabsContainer.name, TabsContainer);
    Vue.component(TabContent.name, TabContent);
  }
};
