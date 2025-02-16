<template>
  <div class="product-item" >
    <img :src="product.image" :alt="product.name" class="product-image">
    <h3>{{ product.name }}</h3>
    <p class="description">{{ product.description }}</p>
    <p class="price">Precio: ${{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps} from 'vue';
import type { Product } from '../views/AboutView.vue'; // Importa la interfaz


const props = defineProps<{
  product: Product;
}>();

</script>

<style scoped>
/* ... (Tus estilos CSS, como antes) ... */
.product-item {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
   cursor: pointer;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 180px; /* Altura fija para consistencia */
  object-fit: cover; /* Importante para que las imágenes se ajusten bien */
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.description {
  margin-bottom: 0.5rem;
  color: #555;
  height: 4em; /* Altura fija para la descripción, aprox. 3 líneas */
  overflow: hidden; /* Oculta el texto que sobrepase */
  text-overflow: ellipsis; /* Agrega puntos suspensivos (...) */
}

.price {
  font-weight: bold;
  color: #e44d26; /* Color llamativo para el precio */
}
</style>