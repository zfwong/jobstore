<script setup>
</script>

<template>
    <div class="bg-jsThemeGrad rounded-lg text-white">
        <div class="flex flex-col items-center justify-center md:min-h-[350px] py-10 md:p-3 md:p-0">
            <div class="flex flex-col items-center justify-center gap-3 md:gap-10">
                <Transition name="fade-in-1" appear>
                    <div class="text-2xl text-[20px] md:text-[54px] text-center leading-tight md:max-w-[600px]">
                        Find the right job, right away
                    </div>
                </Transition>
                <div class="w-full">
                    <form class="md:h-[60px] hidden md:block" id="searchBar">
                        <div class="relative mt-2 rounded-md shadow-sm h-full flex">
                            <input type="text"
                                class="block w-1/2 rounded-l-md border-0 py-[10px] pl-[20px] text-gray-900 h-full text-[16px] focus:outline-none"
                                placeholder="Job titles, Companies or Skills">
                            <input type="text"
                                class="block w-1/2 rounded-r-md border-0 py-[10px] pl-[20px] pr-[70px] text-gray-900 h-full text-[16px] focus:outline-none"
                                placeholder="Malaysia">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">
                                <button class="search-bar-button rounded-md bg-jsTheme h-[48px] w-[48px] hover:opacity-85 transition duration-300" @click="(event) => event.preventDefault()">
                                    <div class="search-bar-icon flex justify-center">
                                        <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                    <form class="h-[45px] md:hidden">
                        <div class="relative mt-2 rounded-md shadow-sm h-full flex">
                            <input type="text"
                                class="w-full block rounded-md border-0 py-[10px] pl-[12px] pr-[45px] text-gray-900 h-full text-[16px] focus:outline-none"
                                placeholder="Job titles, Companies or Skills">
                            <div class="absolute inset-y-0 right-0 flex items-center px-1">
                                <button class="search-bar-button rounded-md bg-jsTheme h-[35px] w-[35px] hover:opacity-85 transition duration-300" @click="(event) => event.preventDefault()">
                                    <div class="search-bar-icon flex justify-center">
                                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="mt-2 md:block hidden">
                <button class="underline">
                    View All Jobs
                </button>
            </div>
        </div>
    </div>
</template>