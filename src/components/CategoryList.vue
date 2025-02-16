<template>
  <v-row class="category-list" align="center" justify="center">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
      @click="selectCategory(category.id)"
    />
  </v-row>
</template>


<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import CategoryItem from './CategoryItem.vue';
import type { Category } from '../views/AboutView.vue'; 

// Define props
const props = defineProps<{
  categories: Category[];
}>();

// Define emits
const emit = defineEmits<{
  (e: 'category-selected', categoryId: string): void;
}>();

// Métodos
const selectCategory = (categoryId: string) => {
  emit('category-selected', categoryId);
};
</script>

