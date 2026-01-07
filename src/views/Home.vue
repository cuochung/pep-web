<template>
  <div class="home-page">
    <HeroSection />
    <CompanyIntro />
    <Timeline />
    <ProcessFlow />
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import CompanyIntro from '../components/home/CompanyIntro.vue'
import Timeline from '../components/home/Timeline.vue'
import ProcessFlow from '../components/home/ProcessFlow.vue'
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>

