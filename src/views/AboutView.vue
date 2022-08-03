<script setup>

</script>

<template>
    <div class="max-w-[1080px] px-24px xl:px-0 mx-auto">
        <div class="flex flex-col md:flex-row gap-12px md:gap-20px">
            <div class="w-full md:max-w-[275px]">
                <img src="../assets/person.png" class="w-full border border-lightBlue rounded-6px custom-box-shadow">
            </div>

            <div class="w-full bg-gray rounded-md border border-lightBlue py-14px md:py-28px px-[20px] md:px-[60px]">
                <span class="uppercase text-[12px] text-aqua">Full name:</span>
                <h2 class="uppercase text-[20px] font-medium md:text-[24px]">John doe</h2>
                <span class="uppercase text-[12px] text-aqua block mt-14px">Job:</span>
                <h3 class="text-[18px]">Front-end developer</h3>
                <span class="uppercase text-[12px] text-aqua block mt-14px">About me:</span>
                <h3 class="text-[16px] text-start md:text-[18px] md:text-justify">
                    Hey there, I am a front-end developer, with 2 years of experience. Also, I have a deep knowledge of
                    UI/UX design. I really do enjoy what I do, and much more responsible for the projects I get.
                    Currently, I am working on VUE.js to hone my Javascript skill. I also do enjoy learning new
                    technologies. Apart from that, I have great communication skills in English. Last but not least, I
                    have an IELTS certificate(5.5 B2, August 7 2021), which shows the level of my English. Even though
                    it has been a pretty long time, I am still enhancing my English (probably now C1).
                </h3>
                <span class="uppercase text-[12px] text-aqua block mt-14px">front-end skills:</span>
                <ul class="mt-6px grid-system-ul">
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Html5</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Css3</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Scss</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Bootstrap5</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Tailwind</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Bulma</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Javascript</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Gsap</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Vuejs</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Pinia</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Git</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Github</li>
                </ul>

                <span class="uppercase text-[12px] text-aqua block mt-14px">UI/UX skills:</span>
                <ul class="mt-6px grid-system-ul-design">
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#AdobePhotoshop</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#Figma</li>
                    <li class="text-aqua bg-darkBlue px-[5px] rounded-sm w-full">#AdobeXD</li>
                </ul>

                <span class="uppercase text-[12px] text-aqua block mt-14px">some certificates:</span>
                <ul class="flex flex-col gap-5px list-disc text-[16px] ml-12px font-normal underline ">
                    <li class="hover:opacity-50 transition-all">
                        <a href="#">
                            IELTS certificate
                        </a>
                    </li>
                    <li class="hover:opacity-50 transition-all">
                        <a href="#">
                            Udemy UI/UX certificate
                        </a>
                    </li>
                </ul>

                <span class="uppercase text-[12px] text-aqua block mt-14px">My goal:</span>
                <h3 class="text-[16px] text-start md:text-[18px] md:text-justify">
                    Well, I would say that I want to work with a great team, also participate in large projects in order to boost my js skill. I guess that working with a great team leads to much more experience.
                </h3>
            </div>
        </div>

    </div>
</template>

<style>
.grid-system-ul {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
}

.grid-system-ul-design {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
}
</style>
