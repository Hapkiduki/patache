<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-main>
        <v-card>
          <v-card-title class="text-center justify-center py-6">
            <v-img :src="Drawables.logo" alt="Pataché" height="200px" />
          </v-card-title>
        </v-card>
        <ProductList></ProductList>

      </v-main>

    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { Drawables } from "@/assets-index";
import ProductList from "./components/ProductList.vue";
</script>