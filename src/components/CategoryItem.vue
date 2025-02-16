<template>
  <v-card class="category-item" @click="selectCategory(category.id)">
    <v-img :src="Drawables.patacon" :alt="category.name" height="100"></v-img>
    <v-card-title>{{ category.name }}</v-card-title>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Category } from '../views/AboutView.vue';  // Importa la interfaz
import { Drawables } from '@/assets-index';
//import patacon from '@/assets/images/patacon.jpeg';


const props = defineProps<{
  category: Category;
}>();


const emit = defineEmits<{
  (e: 'category-selected', categoryId: string): void;
}>();

const selectCategory = (categoryId: string) => {
  emit('category-selected', categoryId);
};

</script>

<style scoped>
/* Estilos específicos para Vuetify */
.category-item {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-item:hover {
  transform: translateY(-5px);
  /* Efecto de elevación al pasar el ratón */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>