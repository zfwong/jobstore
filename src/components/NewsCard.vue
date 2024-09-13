<script setup>
import { computed } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
})

const style = computed(() => {
    return `background-image:url('${props.imgSrc}')`;
})
</script>

<template>
    <a href="javascript:void(0)" class="jobCard">
        <div class="flex flex-col rounded-lg border">
            <div class="h-[200px] rounded-t-lg mb-3 overflow-hidden newsBg hover:brightness-75" :style="style">
            </div>
            <div class="p-3">
                <div class="font-bold overflow-hidden whitespace-nowrap text-ellipsis mb-3">
                    {{ title }}
                </div>
                <div class="text-gray-500 text-[15px]">
                    {{ date }}
                </div>
            </div>
        </div>
    </a>
</template>