<script setup>
import { computed } from 'vue';
const props = defineProps({
    bgSrc: {
        type: String,
        required: false,
    },
    repeat: {
        type: String,
        required: false,
        default: 'no-repeat',
    },
    size: {
        type: String,
        required: false,
        default: 'center/cover',
    },
})

const style = computed(() => {
    return `background: url('${props.bgSrc}') ${props.repeat} ${props.size};`
})
</script>

<template>
    <div class="rounded-lg" :style="style">
        <slot></slot>
    </div>
</template>

<style scoped>
</style>