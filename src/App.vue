<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-main>
        <v-card>
          <v-card-title class="text-center justify-center py-6">
            <v-img :src="Drawables.logo" alt="Pataché" height="200px" />
          </v-card-title>

          <v-tabs v-model="tab" bg-color="transparent" next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline" grow show-arrows>
            <v-tab v-for="category in categories" :key="category.id" :text="category.name" :value="category.name">
            </v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="category in categories" :key="category.id" :value="category.name">
              <v-card-title color="basil" flat>
                <v-card-text>{{ text }}</v-card-text>
                <v-card-title>{{ text }}</v-card-title>
                <h1>Hola Mundo 0</h1>
                <h1 class="text-h5">Título con fuente secundaria</h1>
                <h1>Hola Mundo 1</h1>
                <h5>Hola Mundo</h5>
                <v-alert title="Alert title" :text="text" variant="outlined"></v-alert>
              </v-card-title>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
        <v-img :src="Drawables.patacon" height="100"></v-img>
      </v-main>

    </v-app>
  </v-responsive>
</template>


<style>
.text-basil {
  color: #356859 !important;
}
</style>


<!-- <template>


  <v-app>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 text-basil">
          Pataché
        </h1>
      </v-card-title>

      <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
        <v-tab v-for="item in categories" :key="item.id" :text="item.name" :value="item.id"></v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="item in categories" :key="item.id" :value="item.name">
          <v-card color="black" flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
 -->

<!-- <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <CategoryList :categories="categories" @category-selected="showProducts" />
        </v-col>
        <v-col cols="12" md="9">
          <ProductList v-if="selectedCategory" :products="filteredProducts" @open-modal="openModal" />
        </v-col>
      </v-row>
    </v-container>

    <ProductModal v-if="selectedProduct" :product="selectedProduct" @close="closeModal" /> -->


<!-- </v-app>
</template> -->

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import CategoryList from './components/CategoryList.vue';
import ProductList from './components/ProductList.vue';
import ProductModal from './components/ProductModal.vue'; // Importa el modal
import { Drawables } from './assets-index';
import BaseText from './components/atoms/BaseText.vue';

// Interfaces (Define los tipos de datos)
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'


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
  { id: 'cocteles', name: 'Cocteles', image: '/images/bebida.jpg' },
  { id: 'bebidas', name: 'Bebidas', image: '/images/bebida.jpg' },
]);

const tab = ref<String>(categories.value[0].id)

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
