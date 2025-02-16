<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-img src="@/assets/logo.svg" max-width="150px" contain></v-img>

      <v-toolbar-title>Delicias del Mar y la Tierra</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <CategoryList :categories="categories" @category-selected="showProducts" />
          </v-col>
          <v-col cols="12" md="9">
            <ProductList v-if="selectedCategory" :products="filteredProducts" @open-modal="openModal" />
          </v-col>
        </v-row>
      </v-container>

      <ProductModal v-if="selectedProduct" :product="selectedProduct" @close="closeModal" />
    </v-content>

    <v-footer app color="primary">
      <v-container fluid>
        <v-row justify="center">
          <v-col>
            <p>&copy; 2023 Delicias del Mar y la Tierra. Todos los derechos reservados.</p>
            <p>Contáctanos: (Número de teléfono) | (Correo electrónico)</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import CategoryList from '../components/CategoryList.vue';
import ProductList from '../components/ProductList.vue';
import ProductModal from '../components/ProductModal.vue'; // Importa el modal

// Interfaces (Define los tipos de datos)
export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Datos reactivos
const categories = ref<Category[]>([
  { id: 'patacones', name: 'Patacones', image: '/images/patacon.jpeg' },
  { id: 'ceviches', name: 'Ceviches', image: '/images/ceviche.jpg' },
  { id: 'bebidas', name: 'Bebidas', image: '/images/bebida.jpg' },
]);

const products = ref<Product[]>([
  // ... (todos tus productos, como en el ejemplo anterior) ...
  // PATACONES
        { id: 'p1', categoryId: 'patacones', name: 'Patacón con Todo', price: 12000, description: 'Delicioso patacón con carne, pollo, hogao y queso.', image: '/images/patacon-con-todo.jpg' },
        { id: 'p2', categoryId: 'patacones', name: 'Patacón Mixto', price: 10000, description: 'Patacón con carne y pollo.', image: '/images/patacon-mixto.jpg' },
        { id: 'p3', categoryId: 'patacones', name: 'Patacón Sencillo', price: 7000, description: 'Patacón solo con queso.', image: '/images/patacon-sencillo.jpg' },
        // CEVICHES
        { id: 'c1', categoryId: 'ceviches', name: 'Ceviche de Camarón', price: 15000, description: 'Ceviche fresco con camarones marinados en limón.', image: '/images/ceviche-camaron.jpg' },
        { id: 'c2', categoryId: 'ceviches', name: 'Ceviche Mixto', price: 18000, description: 'Ceviche con camarón, pescado y pulpo.', image: '/images/ceviche-mixto.jpg' },
        { id: 'c3', categoryId: 'ceviches', name: 'Ceviche de Pescado', price: 13000, description: 'Ceviche de pescado blanco fresco.', image: '/images/ceviche-pescado.jpg' },
        // BEBIDAS
        { id: 'b1', categoryId: 'bebidas', name: 'Gaseosa', price: 3000, description: 'Gaseosa personal.', image: '/images/gaseosa.jpg' },
        { id: 'b2', categoryId: 'bebidas', name: 'Jugo Natural', price: 5000, description: 'Jugo de frutas naturales (preguntar por sabores).', image: '/images/jugo.jpg' },
        { id: 'b3', categoryId: 'bebidas', name: 'Agua', price: 2000, description: 'Botella de agua.', image: '/images/agua.jpg' },
]);

const selectedCategory = ref<string | null>(null);
const selectedProduct = ref<Product | null>(null); // Para el modal

// Computed properties
const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return [];
  }
  return products.value.filter(product => product.categoryId === selectedCategory.value);
});

// Métodos
const showProducts = (categoryId: string) => {
  selectedCategory.value = categoryId;
  selectedProduct.value = null; //Cierra modal si se cambia de categoria
};

// Funciones para el modal (si decides usarlo)
const openModal = (product: Product) => {
    selectedProduct.value = product;
}
const closeModal = () => {
    selectedProduct.value = null;
}


</script>

