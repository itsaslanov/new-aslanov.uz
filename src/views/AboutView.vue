<script setup>
const aboutPerson = {
    fullName: 'John doe',
    job: 'Front-end developer',
    aboutPersonSelf: "Hey there, I am a front-end developer, with 2 years of experience. Also, I have a deep knowledge of UI/UX design. I really do enjoy what I do, and much more responsible for the projects I get. Currently, I am working on VUE.js to hone my Javascript skill. I also do enjoy learning new technologies. Apart from that, I have great communication skills in English. Last but not least, I have an IELTS certificate(5.5 B2, August 7 2021), which shows the level of my English. Even though it has been a pretty long time, I am still enhancing my English (probably now C1).",
    frontEndSkills: [
        {
            skill: 'Html5'
        },
        {
            skill: 'Css3'
        },
        {
            skill: 'Scss'
        },
        {
            skill: 'Bootstrap5'
        },
        {
            skill: 'Tailwind'
        },
        {
            skill: 'Bulma'
        },
        {
            skill: 'Javascript'
        },
        {
            skill: 'Gsap'
        },
        {
            skill: 'Vuejs'
        },
        {
            skill: 'Pinia'
        },
        {
            skill: 'Git'
        },
        {
            skill: 'Github'
        }
    ],
    uiDesignSkills: [
        {
            skill: 'AdobePhotoshop'
        },
        {
            skill: 'Figma'
        },
        {
            skill: 'AdobeXD'
        }
    ],
    certificates: [
        {
            name: 'IELTS certificate',
            link: 'https://www.google.com/'
        },
        {
            name: 'Udemy UI/UX certificate',
            link: 'https://www.google.com/'
        }
    ],
    goal: 'Well, I would say that I want to work with a great team, also participate in large projects in order to boost my js skill. I guess that working with a great team leads to much more experience.'
}

const { fullName, job, aboutPersonSelf, frontEndSkills, uiDesignSkills, certificates, goal } = aboutPerson;

</script>

<template>
    <div class="max-w-[1080px] px-[14px] xl:px-0 mx-auto">
        <div class="flex flex-col md:flex-row gap-12px md:gap-20px mt-[14px] md:mt-[0px]">
            <div class="w-full md:max-w-[275px]">
                <img src="../assets/person.png" class="w-full border border-lightBlue rounded-6px custom-box-shadow">
            </div>
            <div class="w-full bg-gray rounded-md border border-lightBlue py-14px md:py-28px px-[20px] md:px-[60px]">
                <span class="uppercase text-[12px] text-aqua">Full name:</span>
                <h2 class="uppercase text-[18px] font-medium md:text-[22px] text-18px">{{ fullName }}</h2>
                <span class="uppercase text-[12px] text-aqua block mt-14px">Job:</span>
                <h3 class="text-[18px] text-18px">{{ job }}</h3>
                <span class="uppercase text-[12px] text-aqua block mt-14px">About me:</span>
                <h3 class="text-[16px] text-start md:text-justify">
                    {{ aboutPersonSelf }}
                </h3>
                <span class="uppercase text-[12px] text-aqua block mt-14px">front-end skills:</span>
                <ul class="mt-6px flex flex-wrap gap-[8px] text-16px">
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm" v-for="frontEndSkill of frontEndSkills"
                        :key="frontEndSkill.id">
                        #{{ frontEndSkill.skill }}
                    </li>
                </ul>
                <span class="uppercase text-[12px] text-aqua block mt-14px">UI/UX skills:</span>
                <ul class="mt-6px flex flex-wrap gap-[8px] text-16px">
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm" v-for="uiDesignSkill of uiDesignSkills"
                        :key="uiDesignSkill.id">#{{ uiDesignSkill.skill }}</li>
                </ul>
                <span class="uppercase text-[12px] text-aqua block mt-14px">some certificates:</span>
                <ul class="flex flex-col gap-5px list-disc text-[16px] text-16px ml-12px font-normal underline ">
                    <li class="hover:opacity-50 transition-all" v-for="certificate of certificates"
                        :key="certificate.id">
                        <a :href="certificate.link">
                            {{ certificate.name }}
                        </a>
                    </li>
                </ul>
                <span class="uppercase text-[12px] text-aqua block mt-14px">My goal:</span>
                <h3 class="text-[16px] text-16px text-start md:text-justify">
                    {{ goal }}
                </h3>
            </div>
        </div>
    </div>
</template>
