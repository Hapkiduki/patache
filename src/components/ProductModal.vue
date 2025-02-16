<template>
    <div class="modal-backdrop" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <span class="close-button" @click="$emit('close')">&times;</span>
        <img :src="product.image" :alt="product.name">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Precio: ${{ product.price }}</p>
        <button class="add-to-cart">Agregar al Pedido (Próximamente)</button>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Product } from '../views/AboutView.vue'; // Importa la interfaz

const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Asegura que esté encima de todo */
}
.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 80%; /* Ancho máximo */
    max-height: 80vh; /* Altura máxima */
    overflow-y: auto; /* Scroll si el contenido es muy largo */
    position: relative; /* Para posicionar el botón de cerrar */
}

.close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    color: #888;
    transition: color 0.2s;
}

.close-button:hover {
    color: #333;
}

.add-to-cart {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}
</style>