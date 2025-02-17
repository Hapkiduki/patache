<template>
    <v-card align="center" class="rounded-xl bg-primary position-relative custom-card">

        <v-img :src="product.image" class="rounded-xl floating-image" width="80%" height="auto" aspect-ratio="3/4" eager
            cover></v-img>

        <v-card-item class="card-content">
            <v-card-title class="text-h5 text-wrap">{{ product.name }}</v-card-title>
            <v-card-subtitle class="text-wrap">{{ product.description
                }}</v-card-subtitle>
            <v-card-text>Precio: {{ product.price }}</v-card-text>
        </v-card-item>

    </v-card>

</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

const props = defineProps<{
    product: Product;
}>();
</script>

<style scoped>
.custom-card {
    position: relative;
    overflow: visible;
    margin: 14vh auto 4vh;
    padding-top: 16vh;
    min-height: 40vh;
    transition: all 0.3s ease;
}

.floating-image {
    position: absolute;
    top: -12vh;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.3);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
    z-index: 2;
}

.card-content {
    padding: 2vh 3vw;
    position: relative;
    z-index: 1;
}

@media (max-width: 960px) {
    .custom-card {
        margin: 10vh auto 3vh;
        padding-top: 8vh;
        min-height: 25vh;
    }

    .floating-image {
        top: -10vh;
        width: 85% !important;
    }
}

@media (max-width: 600px) {
    .custom-card {
        margin: 10vh auto 2vh;
        padding-top: 13vh;
        min-height: 30vh;
    }

    .floating-image {
        top: -10vh;
        width: 90% !important;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .card-content {
        padding: 1.5vh 4vw;
    }
}

@media (max-width: 400px) {
    .custom-card {
        margin: 16vh auto 2vh;
        padding-top: 12vh;
    }

    .floating-image {
        top: -16vh;
    }
}
</style>
