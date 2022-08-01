<template>

  <div class="newTab-container">
    <input type="text" placeholder="Search..." v-model="search">
    <div style="position: absolute; bottom: 0; font-size: .4em">{{data.id}} -- {{content.id}} -- {{data.date}}</div>
  </div>


</template>


<script>
export default {
  name: "NewTab",

  inject: [],

  components: {},

  props: {
    data: Object,
  },

  emits: [],

  data() {
    return {
      search: '',
    }
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
.newTab-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>