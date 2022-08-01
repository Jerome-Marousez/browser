<template>

  <div class="searchBar-container">
    <input type="text" placeholder="Search...">
  </div>


</template>


<script>
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

  computed: {},

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
.searchBar-container {
  display: flex;
  height: var(--searchBar-height);
  width: 100vw;
  background-color: var(--searchBar-color);
}
</style>