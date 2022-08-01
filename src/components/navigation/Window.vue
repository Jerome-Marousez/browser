<template>

  <div class="window-container">
    <Component :is="currentTab.component" :data="currentTab" />

    <div style="margin-bottom: .5em;font-size: .8rem">CURRENT TAB: {{currentTab}}</div>
    <div v-for="(tab, id) in $store.state.tabs" style="margin-bottom: .5em; font-size: .8rem">
      {{tab}}
    </div>



  </div>


</template>


<script>
import {mapGetters} from "vuex";
import NewTab from "@/components/window/NewTab";
import SearchEngine from "@/components/window/SearchEngine";

export default {
  name: "Window",

  inject: [],

  components: {
    NewTab,
    SearchEngine,
  },

  props: {},

  emits: [],

  data() {
    return {}
  },

  provide() {
    return {}
  },

  computed: {
    ...mapGetters({
      currentTab: 'getCurrentTab'
    })
  },

  methods: {},

  unmounted() {
  },

  mounted() {
  },

  created() {
  },

}
</script>


<style scoped>
.window-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  flex: 1;
  background-color: var(--window-bg);
}
</style>