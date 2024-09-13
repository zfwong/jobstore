<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    svgIcon: {
        type: String,
        default: 'briefcase',
    }
})
</script>

<template>
    <a href="javascript:void(0)">
        <div class="tag rounded-3xl bg-jsTag hover:bg-jsTheme transition duration-300 p-1 md:p-3 text-white font-bold text-[14px] md:text-[17px]">
            <div class="flex justify-center items-center gap-1 md:gap-3">
                <div class="rounded-3xl bg-white md:p-1">
                    <svg v-if="svgIcon == 'money'" xmlns="http://www.w3.org/2000/svg" fill="#9bb7d1" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6 tag-svg h-[24px] w-[24px] md:h-[30px] md:w-[30px] transition duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <svg v-if="svgIcon == 'cap'" xmlns="http://www.w3.org/2000/svg" fill="#9bb7d1" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6 tag-svg h-[24px] w-[24px] md:h-[30px] md:w-[30px] transition duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                    <svg v-if="svgIcon == 'briefcase'" xmlns="http://www.w3.org/2000/svg" fill="#9bb7d1" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 tag-svg h-[24px] w-[24px] md:h-[30px] md:w-[30px] transition duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>

                    <svg v-if="svgIcon == 'pc'" xmlns="http://www.w3.org/2000/svg" fill="#9bb7d1" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6 tag-svg h-[24px] w-[24px] md:h-[30px] md:w-[30px] transition duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>

                    <svg v-if="svgIcon == 'clock'" xmlns="http://www.w3.org/2000/svg" fill="#9bb7d1" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6 tag-svg h-[24px] w-[24px] md:h-[30px] md:w-[30px] transition duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                {{ text }}
            </div>
        </div>
    </a>
</template>