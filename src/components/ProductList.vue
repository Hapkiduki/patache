<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click="openModal(product)"
      />
  </div>
</template>

<script setup lang="ts">
import { defineProps,defineEmits } from 'vue';
import ProductItem from './ProductItem.vue';
import type { Product } from '../views/AboutView.vue'; // Importa la interfaz

const props = defineProps<{
  products: Product[];
}>();

const emit = defineEmits<{
  (e: 'open-modal', product: Product):void
}>();

const openModal = (product:Product) =>{
    emit('open-modal', product);
}

</script>

<style scoped>
/* ... (Tus estilos CSS, como antes) ... */
/* Estilos para la lista de productos */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Diseño responsivo de columnas */
  gap: 1.5rem;
}
</style>