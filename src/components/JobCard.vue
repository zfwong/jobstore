<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    }
})

function toggleFav(e) {
    if (e.target.parentElement.classList.contains('isFav')) {
        e.target.parentElement.setAttribute('fill', 'rgba(0,0,0,.5)');
        e.target.parentElement.classList.remove('isFav')
    } else {
        e.target.parentElement.setAttribute('fill', 'red');
        e.target.parentElement.classList.add('isFav')
    }
}
</script>

<template>
    <div class="flex flex-col">
        <div class="relative h-[200px] rounded-lg mb-3 overflow-hidden">
            <a href="javascript:void(0)" class="jobCard">
                <img :src="imgSrc" class="h-full max-h-[200px] w-full rounded-lg hover:scale-125 transition duration-300" style="object-fit: cover;">
                <div class="absolute inset-y-0 right-0 p-2" @click="toggleFav">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,.5)" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="white" class="size-8 transition duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            </a>
        </div>
        <div class="font-bold jobTitle hover:cursor-pointer hover:underline">
            {{ title }}
        </div>
        <div class="text-gray-500 font-bold">
            {{ company }}
        </div>
        <div class="text-gray-500">
            {{ location }}
        </div>
    </div>
</template>