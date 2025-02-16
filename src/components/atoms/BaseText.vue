<template>
    <component :is="tag" :style="{ fontFamily: fontFamilyToUse }" :class="textColorClass">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { BrandColors } from '@/design-tokens/colors';
import { FontFamily, typography } from '@/design-tokens/typography';
import { computed } from 'vue';

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'strong' | 'em' | string;
    fontFamily?: 'primary' | 'secondary' | string;
    color?: keyof typeof BrandColors | string;
}

const props = withDefaults(defineProps<Props>(), {
    tag: 'p',
    fontFamily: 'primary',
    color: 'neutral'
});

const fontFamilyToUse = computed(() => {
    if (props.fontFamily === FontFamily.PRIMARY) {
        return typography.h1.regular.fontFamily; // O el estilo base que prefieras
    } else if (props.fontFamily === FontFamily.SECONDARY) {
        return typography.body1.regular.fontFamily; // O el estilo base que prefieras
    } else {
        return props.fontFamily;
    }
});

//Clase para el color de texto
const textColorClass = computed(() => {
    return typeof props.color === 'string' && props.color in BrandColors ? `text-${props.color}` : '';
});
</script>
<style scoped>
/* Añade estilos si necesitas, por ejemplo para los colores */
.text-primary {
    color: v-bind('BrandColors.primary[700]') !important;
    /* !important para sobrescribir vuetify */
}

.text-secondary {
    color: v-bind('BrandColors.secondary') !important;
}
</style>