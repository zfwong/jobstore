<script setup>
import SearchBanner from '@/components/SearchBanner.vue';
import HeaderBanner from '@/components/HeaderBanner.vue';
import Layout from '@/components/Layout.vue';
import Tag from '@/components/Tag.vue';
import JobCard from '@/components/JobCard.vue';
import NewsCard from '@/components/NewsCard.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const targetDate = new Date('2024-10-26T10:00:00').getTime();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let intervalId = null;

const trendingList = [
  { title: 'Highest Paying Job', icon: 'money' },
  { title: 'Internship', icon: 'cap' },
  { title: 'Recruiter', icon: 'briefcase' },
  { title: 'IT Jobs', icon: 'pc' },
  { title: 'Part-time Jobs', icon: 'clock' },
];

const jobList = [
  {
    title: 'Frontend Web Developer',
    img: 'https://assets.jobstore.my/images/branding/jobstore_sharing_banner.png',
    location: 'Kuala Lumpur',
    company: 'JOBSTORE GROUP',
  },
  {
    title: 'Account Cum Admin Assistant',
    img: '//assets.jobstore.com/uploads/image/1191496/F5Y4inJXjU/WhatsAppImage2023-05-11at5.13.30PM.jpeg',
    location: 'Perak',
    company: 'Luxe Interior',
  },
  {
    title: 'Software Engineer',
    img: 'https://assets.jobstore.my/images/post/index/11.png  ',
    location: 'Selangor',
    company: 'Arknight Global',
  },
  {
    title: 'Software Engineer',
    img: 'https://assets.jobstore.my/images/post/index/11.png  ',
    location: 'Selangor',
    company: 'Arknight Global',
  },
  {
    title: 'Warehouse Assistant',
    img: 'https://assets.jobstore.my/images/post/index/1.png',
    location: 'Penang',
    company: 'AC Motor Service',
  },
  {
    title: 'Frontend Web Developer',
    img: 'https://assets.jobstore.my/images/branding/jobstore_sharing_banner.png',
    location: 'Kuala Lumpur',
    company: 'JOBSTORE GROUP',
  },
  {
    title: 'Warehouse Assistant',
    img: 'https://assets.jobstore.my/images/post/index/1.png',
    location: 'Penang',
    company: 'AC Motor Service',
  },
  {
    title: 'Account Cum Admin Assistant',
    img: '//assets.jobstore.com/uploads/image/1191496/F5Y4inJXjU/WhatsAppImage2023-05-11at5.13.30PM.jpeg',
    location: 'Perak',
    company: 'Luxe Interior',
  },
  {
    title: 'General Clerk',
    img: 'https://assets.jobstore.my/images/post/index/2.png',
    location: 'Johor',
    company: 'Wei Dat Chemical',
  },
  {
    title: 'Account Cum Admin Assistant',
    img: '//assets.jobstore.com/uploads/image/1191496/F5Y4inJXjU/WhatsAppImage2023-05-11at5.13.30PM.jpeg',
    location: 'Perak',
    company: 'Luxe Interior',
  },
]

const newList = [
  {
    title: 'Starbucks new CEO promises to turn things around',
    date: '11.09.2024',
    img: 'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/sites/2/2024/09/11070211/Starbucks-new-CEO-promises-to-turn-things-around-scaled-e1726038159517.jpg',
  },
  {
    title: 'Malaysian Millennials Hit Hardest by Burnout as Remote Work Proves a Lifeline',
    date: '04.09.2024',
    img: 'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/sites/2/2024/09/04070320/Malaysian-Millennials-Hit-Hardest-by-Burnout-as-Remote-Work-Proves-a-Lifeline.jpg',
  },
  {
    title: 'The Role of Progressive Wage in Reducing Income Inequality',
    date: '30.08.2024',
    img: 'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/sites/2/2024/08/30040157/The-Role-of-Progressive-Wage-in-Reducing-Income-Inequality.jpg',
  },
  {
    title: 'Australian workers can ignore business emails and calls after hours',
    date: '26.08.2024',
    img: 'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/sites/2/2024/08/26064357/Australian-workers-can-ignore-business-emails-and-calls-after-hours.jpg',
  },
  {
    title: 'Tech layoffs rise amid AI investment frenzy',
    date: '22.09.2024',
    img: 'https://s3-ap-southeast-1.amazonaws.com/jobstoreblog/wp-content/uploads/sites/2/2024/08/22080423/Tech-layoffs-rise-amid-AI-investment-frenzy.jpg',
  },
]

onMounted(() => {
  startCountdown();
})

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

const startCountdown = () => {
  intervalId = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(intervalId);
      days.value = hours.value = minutes.value = seconds.value = 0;
      return;
    }

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  }, 1000);
};

const formatNumber = (number) => {
  return String(number).padStart(2, '0');
};
</script>

<template>
  <Layout>
    <div class="min-h-screen">
      <!-- search banner -->
      <section>
        <SearchBanner />
      </section>
      <!-- header banner -->
      <section>
        <div class="py-7">
          <div class="grid grid-cols-2 xl:grid-cols-12 gap-3 md:gap-7">
            <div class="col-start-1 col-end-3 xl:col-end-9">
              <Transition name="fade-in-2" appear>
                <HeaderBanner class="text-white p-3 md:p-5 lg:p-7 h-full"
                  bgSrc="https://assets.jobstore.my/images/header/mycareerfair_bg.png">
                  <a href="https://www.mycareerfair.my/" target="_blank">
                    <div class="flex flex-col items-center md:flex-row gap-3 md:gap-0">
                      <div
                        class="flex text-[20px] md:text-[28px] lg:text-[45px] font-Oswald lg:mx-5 grow justify-between gap-3 md:gap-2">
                        <div class="flex flex-col items-center justify-center">
                          <div class="ct-day">
                            {{ formatNumber(days) }}
                          </div>
                          <div class="text-[16px] font-[200]">
                            Days
                          </div>
                        </div>
                        <div>:</div>
                        <div class="flex flex-col items-center justify-center">
                          <div class="ct-hr">
                            {{ formatNumber(hours) }}
                          </div>
                          <div class="text-[16px] font-[200]">
                            Hours
                          </div>
                        </div>
                        <div>:</div>
                        <div class="flex flex-col items-center justify-center">
                          <div class="ct-min">
                            {{ formatNumber(minutes) }}
                          </div>
                          <div class="text-[16px] font-[200]">
                            Minutes
                          </div>
                        </div>
                        <div>:</div>
                        <div class="flex flex-col items-center justify-center">
                          <div class="ct-sec">
                            {{ formatNumber(seconds) }}
                          </div>
                          <div class="text-[16px] font-[200]">
                            Seconds
                          </div>
                        </div>
                      </div>
                      <div class="md:border-x flex justify-center items-center">
                        <img
                          src="https://assets.jobstore.my/mycareerfair/images/branding/mycareerfair_logo_heart_white.png"
                          class="md:mx-6 w-[95%] md:w-[350px] max-w-full md:p-3">
                      </div>
                      <div class="flex flex-col uppercase lg:p-5 grow lg:text-[18px] text-center">
                        <div class="font-bold">
                          26 & 27 October 2024
                        </div>
                        <div class="text-[16px] lg:text-[18px] font-[200]">
                          Kuala Lumpur Conventional Center
                        </div>
                      </div>
                    </div>
                  </a>
                </HeaderBanner>
              </Transition>
            </div>
            <div class="col-start-1 xl:col-start-9 col-end-3 md:col-end-2 xl:col-end-11 min-h-[150px]">
              <a href="https://www.jobstore.my/government-jobs" target="_blank">
                <HeaderBanner
                  class="h-full p-7 flex flex-col justify-center items-center font-bold text-[25px] md:text-[30px]"
                  bgSrc="https://assets.jobstore.my/images/layouts/header_my_banner.png">
                  <div class="text-center">
                    Government Job Vacancy
                  </div>
                  <!-- <div>
                    Kerja Kosong Kerajaan
                  </div> -->
                </HeaderBanner>
              </a>
            </div>
            <div
              class="rounded-lg col-start-1 col-end-3 md:col-start-2 xl:col-start-11 xl:col-end-13 bg-[#df1724] min-h-[150px]">
              <a href="https://www.jobstore.my/singapore-jobs" target="_blank">
                <HeaderBanner class="h-full p-7 flex flex-col"
                  bgSrc="https://assets.jobstore.my/images/layouts/header_sg_banner.png" size="center/contain">
                </HeaderBanner>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- trending -->
      <section>
        <div class="rounded-lg p-5 md:p-7"
          style="box-shadow: inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff;">
          <div class="font-bold md:text-[25px] mb-3">
            Trending Job Categories
          </div>
          <div class="gap-2 md:gap-5 flex md:flex-row flex-wrap">
            <Tag v-for="list in trendingList" :text="list.title" :svgIcon="list.icon"></Tag>
          </div>
        </div>
      </section>
      <!-- latest job -->
      <Transition name="fade-in-3" appear>
        <section>
          <div class="py-7">
            <div class="flex justify-between py-7">
              <div class="font-bold text-[18px]">
                Latest Jobs
              </div>
              <a href="javascript:void(0)"
                class="flex text-[14px] text-[#888] items-center justify-center gap-1 hover:text-black transition duration-300 uppercase">
                See All Jobs
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#888"
                  class="size-5 transition duration-300 h-[20px] w-[20px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              <JobCard v-for="job in jobList" :title="job.title" :imgSrc="job.img" :location="job.location"
                :company="job.company" />
            </div>
          </div>
        </section>
      </Transition>
      <!-- news & articles -->
      <Transition name="fade-in-4" appear>
        <section>
          <div class="py-7 border-t-2">
            <div class="flex justify-between py-7">
              <div class="font-bold text-[18px]">
                News &amp; Articles
              </div>
              <a href="javascript:void(0)"
                class="flex text-[14px] text-[#888] items-center justify-center gap-1 hover:text-black transition duration-300 uppercase">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#888"
                  class="size-5 transition duration-300 h-[20px] w-[20px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              <NewsCard v-for="n in newList" :title="n.title" :imgSrc="n.img" :date="n.date" />
            </div>
          </div>
        </section>
      </Transition>
    </div>
  </Layout>
</template>