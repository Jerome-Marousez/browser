<template>

  <button class="tab-container">
    {{ component }}
    <button
        v-if="tabs.length > 1"
        class="btn-tab"
        @click="deleteTab(id)"
    >x</button>
  </button>


</template>


<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "Tab",

  inject: [],

  components: {},

  props: {
    id: String,
    component: String,
  },

  emits: [],

  data() {
    return {
      title: 'new Tab',
    }
  },

  provide() {
    return {}
  },

  computed: {
    ...mapGetters({
      tabs: 'getTabs',
    }),
  },

  methods: {
    ...mapMutations({
      deleteTab: 'deleteTab',
    }),
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
.tab-container {
  min-width: 3em;
  max-width: 10em;
  height: var(--nav-height);
  border-right: .1em solid var(--searchBar-color);
  border-top: .1em solid var(--searchBar-color);
  /*border-radius: 0 .3em 0 0;*/
  padding-inline: .3em;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>