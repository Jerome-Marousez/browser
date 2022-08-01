<template>

  <div class="screen-container">
    <Navigation />
    <SearchBar />
    <Window />
  </div>


</template>


<script>
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/navigation/SearchBar";
import Window from "@/components/navigation/Window";

export default {
  name: "Screen",

  inject: [],

  components: {
    Navigation,
    SearchBar,
    Window,
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
.screen-container {
  position: fixed;
  inset: 0;
  overflow: visible;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  font-size: var(--text-size);
}
</style>