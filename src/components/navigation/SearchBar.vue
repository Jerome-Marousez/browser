<template>

  <div class="searchBar-container">
    <div class="search-bar-container">
      <input type="text" placeholder="Search..." v-model="currentTab.content.search" class="input-search-bar search-bar" @keyup.enter="openSearchEngine">
      <button class="icon-search" @click="openSearchEngine">
        <svg viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
      </button>
      {{currentTab}}
    </div>
  </div>


</template>


<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "SearchBar",

  inject: [],

  components: {},

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
      currentTab: 'getCurrentTab',
    }),
  },

  methods: {
    ...mapMutations({
      openSearchEngine: 'openSearchEngine',
    })
  },

  unmounted() {
  },

  mounted() {
  },

  created() {
  },

}
</script>


<style scoped>
.searchBar-container {
  display: flex;
  align-items: center;
  height: var(--searchBar-height);
  width: 100vw;
  background-color: var(--searchBar-color);
}
</style>