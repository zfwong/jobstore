<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import router from '@/router';

const scrolledPast = ref(false)
const targetEl = ref(null);
const burgerActive = ref(false);

const pageScroll = () => {
    if (targetEl.value) {
        const rect = targetEl.value.getBoundingClientRect();

        // Check if the element's top is above the viewport
        if (rect.top < 0) {
            if (!scrolledPast.value) {
                scrolledPast.value = true;
                // callback();
            }
        } else {
            scrolledPast.value = false;
        }
    }
};

// const callback = () => {

// };

function toggleMenu() {
    if (!burgerActive.value) {
        document.body.classList.add('menu-shown');
    } else {
        document.body.classList.remove('menu-shown');
    }
    burgerActive.value = !(burgerActive.value);
}

function toggleDropdown(el) {
    if (document.getElementById(el).classList.contains('hidden')) {
        document.getElementById(el).classList.remove('hidden');
    } else {
        document.getElementById(el).classList.add('hidden');
    }
}

onMounted(() => {
    targetEl.value = document.getElementById('searchBar');
    window.addEventListener('scroll', pageScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', pageScroll);
});
</script>

<template>
    <div>
        <Transition name="slide">
            <div v-if="burgerActive" class="sidebar bg-white z-20 fixed h-full w-full right-0">
                <div class="flex flex-col p-5">
                    <div class="flex justify-between mb-5">
                        <div class="sidebar-logo"></div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="size-10 stroke-black hover:stroke-[#555] transition duration-300"
                                @click="toggleMenu">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <RouterLink to="/" class="transition duration-300 font-bold my-2 p-3 focus:bg-footer focus:text-white rounded">
                        Download App
                    </RouterLink>
                    <RouterLink to="/" class="transition duration-300 font-bold my-2 p-3 focus:bg-footer focus:text-white rounded">
                        Sign In
                    </RouterLink>
                    <RouterLink to="/" class="transition duration-300 font-bold my-2 p-3 focus:bg-footer focus:text-white rounded">
                        Register
                    </RouterLink>
                    <RouterLink to="/" class="transition duration-300 font-bold my-2 p-3 focus:bg-footer focus:text-white rounded">
                        Search Jobs
                    </RouterLink>
                    <div class="my-3 flex flex-col">
                        <button type="button" class="flex transition duration-300 font-bold focus:bg-footer focus:text-white rounded p-3"
                            @click="toggleDropdown('explore-dp')">
                            <span class="flex-1 text-left">Explore</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <ul id="explore-dp" class="hidden transition duration-300">
                            <li>
                                <a href="#"
                                    class="flex font-bold items-center w-full p-2 transition duration-75 rounded-lg pl-8 focus:bg-footer focus:text-white rounded p-3">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex font-bold items-center w-full p-2 transition duration-75 rounded-lg pl-8 focus:bg-footer focus:text-white rounded p-3">
                                    Product &amp; Services
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex font-bold items-center w-full p-2 transition duration-75 rounded-lg pl-8 focus:bg-footer focus:text-white rounded p-3">
                                    Pricing &amp; Plan
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex my-5">
                        <RouterLink to="/"
                            class="font-bold border-2 rounded border-jsTheme border text-white bg-jsTheme hover:text-jsTheme hover:bg-white transition duration-300 p-2">
                            Employer
                        </RouterLink>
                    </div>
                </div>
            </div>
        </Transition>
        <div class="w-full flex flex-col items-center relative z-10 backdrop-blur bg-white">
            <div class="w-full h-full flex justify-center">
                <div class="flex flex-col relative w-full max-w-8xl px-3">
                    <nav class="sticky top-0 flex justify-between items-center py-5 backdrop-blur z-10">
                        <div class="flex items-center md:gap-3 gap-5">
                            <RouterLink to="/" class="text-3xl transition duration-300 cursor-pointer">
                                <img src="https://assets.jobstore.my/images/branding/jobstore_logo_blue.png"
                                    alt="Jobstore  Malaysia  logo" width="100" class="min-w-[100px]">
                            </RouterLink>
                            <form v-show="scrolledPast" class="hidden max-h-[36px] items-center justify-center lg:flex">
                                <div class="relative rounded-md shadow-sm h-full flex md:w-[500px]">
                                    <input type="text"
                                        class="block w-1/2 rounded-l-md border border-jsTheme py-[10px] pl-[18px] text-gray-900 h-full text-[16px] focus:outline-none"
                                        placeholder="Job titles, Companies or Skills">
                                    <input type="text"
                                        class="block w-1/2 rounded-r-md border border-jsTheme py-[10px] pl-[18px] pr-[50px] text-gray-900 h-full text-[16px] focus:outline-none"
                                        placeholder="Malaysia">
                                    <div class="absolute inset-y-0 right-0 flex items-center">
                                        <button
                                            class="search-bar-button rounded-r-md bg-jsTheme h-[44px] w-[44px] hover:opacity-85 transition duration-300"
                                            @click="(event) => event.preventDefault()">
                                            <div class="search-bar-icon flex justify-center">
                                                <svg width="16" height="16" viewBox="0 0 16 16"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                                    <path
                                                        d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <form v-show="scrolledPast" class="lg:hidden hidden max-h-[30px] items-center justify-center md:flex">
                                <div class="relative rounded-md shadow-sm h-full flex md:w-[250px]">
                                    <input type="text"
                                        class="block w-full rounded-md border border-jsTheme py-[10px] px-[15px] text-gray-900 h-full text-[16px] focus:outline-none"
                                        placeholder="Job titles, Companies or Skills">
                                </div>
                            </form>
                        </div>

                        <div class="burger-menu md:hidden flex" @click="toggleMenu">
                            <div class="burger-line"></div>
                            <div class="burger-line"></div>
                            <div class="burger-line"></div>
                        </div>

                        <ul class="md:flex items-center hidden">
                            <li class="px-3">
                                <button type="button"
                                    class="relative rounded-full bg-jsTheme p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                                    <span class="absolute -inset-1.5"></span>
                                    <span class="sr-only">View notifications</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </button>
                            </li>
                            <li class="px-3">
                                <span>
                                    <RouterLink to="/" class="hover:text-jsTheme transition duration-300">
                                        Sign In
                                    </RouterLink>
                                </span>
                            </li>
                            <li class="px-3">
                                <span>
                                    <RouterLink to="/" class="hover:text-jsTheme transition duration-300">
                                        Register
                                    </RouterLink>
                                </span>
                            </li>
                            <li class="px-3">
                                <span>
                                    <RouterLink to="/"
                                        class="border-2 rounded border-jsTheme border text-white bg-jsTheme hover:text-jsTheme hover:bg-white transition duration-300 p-2">
                                        Employer
                                    </RouterLink>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <!-- Page Content -->
                    <main class="py-3">
                        <slot />
                    </main>
                </div>
            </div>
        </div>
        <footer
            class="md:sticky bg-footer bottom-0 left-0 w-full flex flex-col justify-start opacity-90 md:justify-center z-1 p-5 pb-0 pt-8 md:flex-row">
            <div class="grid grid-cols-12 max-w-8xl w-full">
                <div class="col-start-1 col-end-13 md:col-end-13 lg:col-end-5">
                    <div class="flex flex-col h-full">
                        <RouterLink to="/"
                            class="text-3xl hover:opacity-60 transition duration-300 cursor-pointer mb-4">
                            <img src="https://assets.jobstore.my/images/branding/jobstore_logo_blue.png"
                                alt="Jobstore  Malaysia  logo" height="100" width="100">
                        </RouterLink>
                        <div class="flex grow flex-col h-full gap-5 md:gap-0 text-[13px] md:text-base">
                            <div class="grow md:mb-4">
                                We aim to be the biggest global job distribution platform with support from 100+ job
                                sites
                                and social networks.
                            </div>
                            <div class="flex gap-2 items-end mb-6 md:mb-5 lg:mb-3">
                                <a href="https://apps.apple.com/us/app/jobstore/id1191717552" target="_blank"
                                    rel="nofollow">
                                    <img src="https://assets.jobstore.my/images/icon/icon_app_applestore_white.png"
                                        width="150">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.jobstore.appandroid&amp;pli=1"
                                    target="_blank" rel="nofollow">
                                    <img src="https://assets.jobstore.my/images/icon/icon_app_googleplaystore_white.png"
                                        width="150">
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-row flex-wrap gap-2 md:gap-3 mb-5 md:mb-7 lg:mb-0">
                            <a href="https://www.facebook.com/jobstoredotcom?_rdr=p" target="_blank" rel="nofollow">
                                <img src="https://assets.jobstore.my/images/icon/icon_social_facebook_round.png"
                                    height="35px" width="35px">
                            </a>
                            <a href="https://www.linkedin.com/company/jobstore-com" target="_blank" rel="nofollow">
                                <img src="https://assets.jobstore.my/images/icon/icon_social_linkedin_round.png"
                                    height="35px" width="35px">
                            </a>
                            <a href="https://www.instagram.com/jobstoredotcom/" target="_blank" rel="nofollow">
                                <img src="https://assets.jobstore.my/images/icon/icon_social_instagram_round.png"
                                    height="35px" width="35px">
                            </a>
                            <a href="" target="_blank" rel="nofollow">
                                <img src="https://assets.jobstore.my/images/icon/icon_social_pinterest_round.png"
                                    height="35px" width="35px">
                            </a>
                            <a href="https://www.tiktok.com/@jobstore/" target="_blank" rel="nofollow">
                                <img src="https://assets.jobstore.my/images/icon/icon_social_tiktok_round.png"
                                    height="35px" width="35px">
                            </a>
                            <a href="https://www.youtube.com/@Jobstoredotcom" target="_blank" rel="nofollow">
                                <img src="https://assets.jobstore.my/images/icon/icon_social_youtube_round.png"
                                    height="35px" width="35px">
                            </a>
                            <a href="https://twitter.com/jobstoredotcom" target="_blank" rel="nofollow">
                                <img src="https://assets.jobstore.my/images/icon/icon_social_twitter_round.png"
                                    height="35px" width="35px">
                            </a>
                            <a href="https://wa.me/+60327165199" target="_blank" rel="nofollow">
                                <img src="https://assets.jobstore.my/images/icon/icon_social_whatsapp_round.png"
                                    height="35px" width="35px">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-start-1 lg:col-start-6 col-end-13">
                    <div class="grid grid-cols-8 gap-5 md:gap-2">
                        <div class="col-start-1 col-end-9 md:col-end-3 flex flex-col text-[13px] gap-2 footer-links">
                            <div class="font-bold mb-3 text-[14px] md:text-[20px] footer-links-text">
                                Jobseekers
                            </div>
                            <div>
                                Create Account
                            </div>
                            <div>
                                Sign In
                            </div>
                            <div>
                                Search Jobs
                            </div>
                            <div>
                                Search Employers
                            </div>
                            <div>
                                Featured Companies
                            </div>
                            <div>
                                Government Jobs
                            </div>
                            <div>
                                Working in Singapore
                            </div>
                            <div>
                                My Career Fair
                            </div>
                            <div>
                                Industry News
                            </div>
                        </div>
                        <div
                            class="col-start-1 md:col-start-3 col-end-9 md:col-end-5 flex flex-col text-[13px] gap-2 footer-links">
                            <div class="font-bold mb-3 text-[14px] md:text-[20px] footer-links-text">
                                Corporate
                            </div>
                            <div>
                                Create Account
                            </div>
                            <div>
                                Product &amp; Services
                            </div>
                            <div>
                                Pricing &amp; Plan
                            </div>
                            <div>
                                Advertise Jobs
                            </div>
                            <div>
                                Industry News
                            </div>
                            <div>
                                Customer Support
                            </div>
                            <div>
                                Contact Sales
                            </div>
                        </div>
                        <div
                            class="col-start-1 md:col-start-5 col-end-9 md:col-end-7 flex flex-col text-[13px] gap-2 footer-links">
                            <div class="font-bold mb-3 text-[14px] md:text-[20px] footer-links-text">
                                About
                            </div>
                            <div>
                                About Us
                            </div>
                            <div>
                                Mobile App
                            </div>
                            <div>
                                FAQs
                            </div>
                            <div>
                                Contact Support
                            </div>
                            <div>
                                Careers @ Jobstore
                            </div>
                            <div>
                                Blog
                            </div>
                            <div>
                                Fulfillment Policy
                            </div>
                        </div>
                        <div class="col-start-1 md:col-start-7 col-end-9 flex flex-col text-[13px] gap-2 footer-links">
                            <div class="font-bold mb-3 text-[14px] md:text-[20px] footer-links-text">
                                Resources
                            </div>
                            <div>
                                Career Guide
                            </div>
                            <div>
                                Job Templates
                            </div>
                            <div>
                                Employer Resources
                            </div>
                            <div>
                                Terms of Service
                            </div>
                            <div>
                                Privacy Policy
                            </div>
                            <div>
                                Partnership Inquiries
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-start-1 col-end-13 flex justify-center py-6 mt-4 border-gray-300 border-t text-[13px] md:text-base">
                    &copy; 2024 Jobstore. All rights reserved
                </div>
            </div>
        </footer>
    </div>
</template>