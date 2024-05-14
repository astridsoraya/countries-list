<script setup lang="ts">
import { ref } from 'vue';
import CountriesTable from '../components/home/CountriesTable.vue';
import CountryInput from '../components/home/CountryInput.vue';

import { getCountryDetails } from '../composables/country';
import type { Country } from '../types/country';

const countries = ref<Country[]>([]);

async function onSearchCountries(country: string) {
  countries.value = [];
  const response = await getCountryDetails(country);

  if(response && Array.isArray(response)) {
    countries.value = response;
  }
}

</script>

<template>
  <main>
    <CountryInput @searchCountries="onSearchCountries"></CountryInput>
    <CountriesTable :countries="countries" />
  </main>
</template>

<style scoped>
  .main {
    display: flex;
    gap: 10px;
    align-items: center;
  }
</style>
