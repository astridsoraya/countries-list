<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const emit = defineEmits(["searchCountries"]);
const country = ref("");

function searchCountries() {
    emit("searchCountries", country.value);
}
</script>

<template>
  <main>
    <div class="main">
      <label for="country">Country: </label>
      <InputText id="country" v-model="country" @keypress.enter="searchCountries()"></InputText>
      <Button type="submit" label="Submit" @click="searchCountries()"></Button>
    </div>
  </main>
</template>

<style scoped>
  .main {
    display: flex;
    gap: 10px;
    align-items: center;
  }
</style>
