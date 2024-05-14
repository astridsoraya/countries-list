<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const props = defineProps(["countries"]);

</script>

<template>
    <div>
        <DataTable :value="props?.countries" tableStyle="min-width: 50rem">
            <Column field="name.common" header="Name"></Column>
            <Column field="region" header="Region"></Column>
            <Column field="capital" header="Capital">
                <template #body="slotProps">
                    <span v-for="capital in slotProps.data.capital">{{ capital }}</span>
                </template>
            </Column>
            <Column field="maps.googleMaps" header="GoogleMaps">
                <template #body="slotProps">
                    <a :href="slotProps.data.maps.googleMaps" target="_blank">{{ slotProps.data.maps.googleMaps }}</a>
                </template>
            </Column>
            <Column field="languages" header="Languages">
                <template #body="slotProps">
                    <span v-for="lang, index in Object.keys(slotProps.data.languages)">{{ lang }} 
                    <span v-if="index < Object.keys(slotProps.data.languages).length - 1">, </span>
                    </span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style scoped>

</style>
