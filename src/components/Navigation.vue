<template>

  <div class="navigation-container">
    <div v-for="(tab, id) in tabs" :key="id">
      <Tab
          :id="tab.id"
          :component="tab.component"
          @click="setCurrentTab(tab.id)"/>
    </div>
    <button
        class="btn-nav"
        @click="addTab({
                  id: this.newUuid(),
                  date: new Date(),
                  component: 'NewTab',
                  content: {
                    id: this.newUuid(),
                    search: '',
                  },
                })"
    >+</button>
  </div>

</template>


<script>
import { v4 as uuid } from "uuid";
import Tab from "@/components/navigation/Tab";
import { mapMutations, mapGetters } from "vuex"

export default {
  name: "Navigation",

  inject: [],

  components: {
    Tab,
  },

  props: {},

  emits: [],

  data() {
    return {

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
      addTab: 'addTab',
      setCurrentTab: 'setCurrentTab',
    }),

    newUuid(){
      return uuid()
    }
  },

  unmounted() {
  },

  mounted() {
    this.addTab({
      id: this.newUuid(),
      date: new Date(),
      component: 'NewTab',
      content: {
        id: this.newUuid(),
        search: '',
      },
    })
  },

  created() {
  },

}
</script>


<style scoped>
.navigation-container {
  display: flex;
  width: 100vw;
  height: var(--nav-height);
  background-color: var(--nav-color);
}
</style>