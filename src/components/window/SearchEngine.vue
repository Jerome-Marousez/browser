<template>

  <div class="search-engine-container search-bar">
    searchEngine component
    <div>Query: {{content.search}}</div>
  </div>


</template>


<script>
export default {
  name: "SearchEngine",

  inject: [],

  components: {},

  props: {
    data: Object,
  },

  emits: [],

  data() {
    return {}
  },

  provide() {
    return {}
  },

  computed: {
    content() {
      return this.data.content
    },
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

.search-engine-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>