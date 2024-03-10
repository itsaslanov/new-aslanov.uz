<script setup>
const aboutPerson = {
    fullName: 'Azizbek Aslanov',
    job: 'Front-end developer',
    aboutPersonSelf: "I am an adept front-end developer with two years of immersive experience under my belt. My expertise encompasses a profound grasp of UI/UX design principles, a field that I find deeply gratifying. I approach each project with a sense of ownership and accountability, ensuring its successful completion. At present, I am dedicated to refining my JavaScript proficiency through focused exploration of Vue.js. I am inherently drawn to learning new technologies, perpetually seeking to expand my skill set and stay abreast of industry trends. Furthermore, I possess exceptional English communication skills, rounding out my comprehensive abilities.",
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
            name: 'Udemy UI/UX certificate',
            link: 'https://firebasestorage.googleapis.com/v0/b/aslanov-c939e.appspot.com/o/udemy.pdf?alt=media&token=a040fec1-93ef-4942-b822-5c024a07edfa'
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
                <img src="../assets/userpage.png" alt="aslanov_img" class="w-full border border-lightBlue rounded-6px custom-box-shadow">
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

                <br />

              <h3 class="text-[16px] text-start">
                • Presently a student of <a href="https://www.bufs.ac.kr/" class="inline-block underline" target="_blank">Busan university of foreign studies</a>
                in South Korea
              </h3>

                <br />

                <span class="uppercase text-[12px] text-aqua block mt-14px">front-end skills:</span>
                <ul class="mt-6px flex flex-wrap gap-[8px] text-16px">
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm" v-for="frontEndSkill of frontEndSkills"
                        :key="frontEndSkill.id">
                        #{{ frontEndSkill.skill }}
                    </li>
                </ul>
                <ul class="mt-4 list-disc ml-12px">
                    <li class="hover:opacity-50 transition-all"><a href="https://www.frontendmentor.io/profile/itsaslanov" target="_blank" class="block  underline">My Frontend Mentor profile</a></li>
                </ul>
                <span class="uppercase text-[12px] text-aqua block mt-14px">UI/UX skills:</span>
                <ul class="mt-6px flex flex-wrap gap-[8px] text-16px">
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm" v-for="uiDesignSkill of uiDesignSkills"
                        :key="uiDesignSkill.id">#{{ uiDesignSkill.skill }}</li>
                </ul>
                <span class="uppercase text-[12px] text-aqua block mt-14px">some certificates:</span>
                <ul class="flex flex-col gap-5px list-disc text-[16px] text-16px ml-12px font-normal underline">
                    <li class="hover:opacity-50 transition-all" v-for="certificate of certificates"
                        :key="certificate.id">
                        <a :href="certificate.link" target="_blank">
                            {{ certificate.name }}
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>
