<script>
import AppProgramming from '../components/app/AppProgramming.vue'
import AppDesigning from '../components/app/AppDesigning.vue'

export default {
  components: { AppProgramming, AppDesigning },
  data() {
    return {
      selectedTab: 'AppProgramming'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  },
  computed: {
    programming() {
      if (this.selectedTab === 'AppProgramming') {
        return 'active';
      }
    },
    designing() {
      if (this.selectedTab === 'AppDesigning') {
        return 'active';
      }
    }
  }
}
</script>


<script setup>
</script>

<template>
  <div class="max-w-[650px] px-[14px] xl:px-0 mx-auto mt-3 md:mt-0">
    <div class="w-full bg-white flex mb-[32px]">
      <button class="custom-btn uppercase" @click="setSelectedTab('AppProgramming')"
        :class="programming">Programming</button>
      <button class="custom-btn uppercase" @click="setSelectedTab('AppDesigning')" :class="designing">Designing</button>
    </div>

    <KeepAlive>
      <component :is="selectedTab" />
    </KeepAlive>
  </div>
</template>

<style scoped>
.bg-white {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(240, 240, 240, 0.082);
}

.custom-btn {
  width: 100%;
  background: transparent;
  border-radius: 20px;
  padding: 8px;
  color: #333;
  font-weight: 500;
}

.active {
  background-color: #15803D;
  color: #fff;
  box-shadow: 0px 0px 20px rgba(21, 128, 60, 0.479);
}
</style>

