<script setup>
import { ref, onMounted } from 'vue';

import BaseCard from '../components/base/BaseCard.vue';
import BaseButton from '../components/base/BaseButton.vue';
import BaseBadge from '../components/base/BaseBadge.vue';

import { collection, onSnapshot } from "firebase/firestore";
import { getFirestoreDb } from '../firebase/index';

const programmingType = ref([]);
const designingType = ref([]);

// Get data from firestore
onMounted(() => {
    const querySnapshotForRealTime = collection(getFirestoreDb, "cards",);
    onSnapshot(querySnapshotForRealTime, (querySnapshot) => {

        programmingType.value = [];
        designingType.value = [];

        querySnapshot.forEach((doc) => {
            if (doc.data().type === 'programming') {
                programmingType.value.push({
                    id: doc.data().id,
                    img: doc.data().img,
                    hashtags: doc.data().hashtags,
                    title: doc.data().title,
                    githubLink: doc.data().githubLink,
                    previewLink: doc.data().previewLink
                });
            }

            if (doc.data().type === 'designing') {
                designingType.value.push({
                    id: doc.data().id,
                    img: doc.data().img,
                    hashtags: doc.data().hashtags,
                    title: doc.data().title,
                    previewLink: doc.data().previewLink
                });
            }
        });
    });
});
</script>

<template>
    <div class="max-w-[1080px] px-[14px] xl:px-0 mx-auto">
        <!-- Badge for programming -->
        <BaseBadge class="mt-[14px] md:mt-[0px]" contentText="Front-end projects" :badge="false" />
        <!-- Cards for programming -->
        <div class="grid-system mt-14px">
            <BaseCard v-for="card of programmingType" :key="card.id" class="hover:opacity-90">
                <template #image>
                    <img :src="card.img" class="rounded-t-6px" alt="" />
                </template>

                <template #hashtag>
                    <ul class="flex flex-wrap gap-2 text-sm py-12px px-12px">
                        <li class="text-aqua bg-darkBlue px-[5px] rounded-sm" v-for="hashtag of card.hashtags"
                            :key="hashtag">
                            #{{ hashtag }}
                        </li>
                    </ul>
                </template>

                <template #title>
                    <div class="block pb-12px px-12px text-lg text-18px">
                        {{ card.title }}
                    </div>
                </template>

                <template #buttons>
                    <div class="px-12px">
                        <div class="mb-12px w-[100%] mx-auto bg-lightBlue h-[1px]"></div>
                    </div>

                    <div class="pb-12px px-12px md:flex md:gap-8px md:justify-center">

                        <a :href="card.githubLink" class="w-full" target="_blank">
                            <BaseButton color="default" class="flex gap-[8px]">
                                <img src="../assets/github.svg" alt="github" class="w-[20px] self-center" />
                                <span>Github</span>
                            </BaseButton>
                        </a>

                        <div class="h-[10px] block md:h-[0px] md:hidden"></div>


                        <a :href="card.previewLink" class="w-full" target="_blank">
                            <BaseButton color="primary" class="flex gap-[8px]">
                                <img src="../assets/eye-line.svg" alt="eye-line" class="w-[20px] self-center" />
                                <span>Preview</span>
                            </BaseButton>
                        </a>
                    </div>
                </template>
            </BaseCard>
        </div>
        <!-- Badge for designing -->
        <BaseBadge class="mt-14px" contentText="UI design projects" :badge="false" />
        <!-- Cards for designing -->
        <div class="grid-system mt-14px">
            <BaseCard v-for="card of designingType" :key="card.id" class="hover:opacity-90">
                <template #image>
                    <img :src="card.img" class="rounded-t-6px" alt="" />
                </template>

                <template #hashtag>
                    <ul class="flex flex-wrap gap-2 text-sm py-12px px-12px">
                        <li class="text-aqua bg-darkBlue px-[5px] rounded-sm" v-for="hashtag of card.hashtags"
                            :key="hashtag">
                            #{{ hashtag }}
                        </li>
                    </ul>
                </template>

                <template #title>
                    <div class="block pb-12px px-12px text-lg text-18px">
                        {{ card.title }}
                    </div>
                </template>

                <template #buttons>
                    <div class="px-12px">
                        <div class="mb-12px w-[100%] mx-auto bg-lightBlue h-[1px]"></div>
                    </div>
                    <div class="pb-12px px-12px md:flex md:gap-8px md:justify-center">
                        <BaseButton color="secondary">
                            <a :href="card.previewLink" class="flex gap-[8px]" target="_blank">
                                <img src="../assets/behance.svg" alt="github" class="w-[20px] self-center" />
                                <span>Behance</span>
                            </a>
                        </BaseButton>
                    </div>
                </template>
            </BaseCard>
        </div>
    </div>
</template>

<style>
.custom-flex-wrap {
    display: flex;
    flex-wrap: wrap;
}
</style>