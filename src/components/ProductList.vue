<template>
    <v-container fluid class="pa-6 pt-12">
        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="4" xl="4" class="pa-4">
                <ProductItem :product="product"></ProductItem>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { Drawables } from '@/assets-index';
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

// Datos de ejemplo (reemplaza con tu lógica para obtener los productos)
const products = ref<Product[]>([
    {
        id: 1,
        name: 'Producto 1',
        description: 'Una descripción muy detallada del Producto 1, con suficiente texto para que ocupe varias líneas y se pruebe el recorte de texto. Una descripción muy detallada del Producto 1, con suficiente texto para que ocupe varias líneas y se pruebe el recorte de texto.',
        image: Drawables.patacon1,
        price: 19.99,
    },
    {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del producto 2.',
        image: 'https://placehold.co/600x400.png',
        price: 29.99,
    },
    {
        id: 3,
        name: 'Producto 3',
        description: 'Descripción del producto 3.',
        image: 'https://placehold.co/600x400.png',
        price: 39.99,
    },
    {
        id: 4,
        name: 'Producto 4',
        description: 'Descripción del producto 4.',
        image: 'https://placehold.co/600x400.png',
        price: 39.99,
    },
]);

</script>
