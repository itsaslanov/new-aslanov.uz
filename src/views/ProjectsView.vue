<script setup>
import BaseCard from '../components/base/BaseCard.vue';
import BaseButton from '../components/base/BaseButton.vue';
import BaseBadge from '../components/base/BaseBadge.vue';

import { allCards } from '../use/cards'

const { cards } = allCards();
</script>

<template>
    <div class="max-w-[1080px] px-[14px] xl:px-0 mx-auto">

        <BaseBadge class="mt-[14px] md:mt-[0px]" contentText="Front-end projects" :badge="false" />

        <div class="grid-system mt-14px">
            <BaseCard v-for="card of cards" :key="card.id" class="hover:opacity-90">
                <template #image>
                    <img src="../assets/img/project.png" class="rounded-t-6px" alt="" />
                </template>

                <template #hashtag>
                    <ul class="flex flex-wrap gap-2 text-sm py-12px px-12px">
                        <li class="text-aqua bg-darkBlue px-[5px] rounded-sm" v-for="hashtag of card.hashtags"
                            :key="card.id">
                            #{{ hashtag.hash }}
                        </li>
                    </ul>
                </template>

                <template #title>
                    <div class="block pb-12px px-12px text-lg">
                        {{ card.title }}
                    </div>
                </template>

                <template #buttons>
                    <div class="px-12px">
                        <div class="mb-12px w-[100%] mx-auto bg-lightBlue h-[1px]"></div>
                    </div>

                    <div class="pb-12px px-12px md:flex md:gap-8px md:justify-center">
                        <BaseButton color="default">
                            <a :href="card.github" class="flex gap-[8px]" target="_blank">
                                <img src="../assets/github.svg" alt="github" class="w-[20px]" />
                                <span>Github</span>
                            </a>
                        </BaseButton>
                        <div class="h-[10px] block md:h-[0px] md:hidden"></div>
                        <BaseButton color="primary">
                            <a :href="card.behance" class="flex gap-[8px]" target="_blank">
                                <img src="../assets/eye-line.svg" alt="github" class="w-[20px]" />
                                <span>Preview</span>
                            </a>
                        </BaseButton>
                    </div>
                </template>
            </BaseCard>
        </div>

        <BaseBadge class="mt-14px" contentText="UI design projects" :badge="false" />

        <div class="grid-system mt-14px">
            <BaseCard v-for="card of cards" :key="card.id" class="hover:opacity-90">
                <template #image>
                    <img src="../assets/img/project.png" class="rounded-t-6px" alt="" />
                </template>

                <template #hashtag>
                    <ul class="flex flex-wrap gap-2 text-sm py-12px px-12px">
                        <li class="text-aqua bg-darkBlue px-[5px] rounded-sm" v-for="hashtag of card.hashtags"
                            :key="card.id">
                            #{{ hashtag.hash }}
                        </li>
                    </ul>
                </template>

                <template #title>
                    <div class="block pb-12px px-12px text-lg">
                        {{ card.title }}
                    </div>
                </template>

                <template #buttons>
                    <div class="px-12px">
                        <div class="mb-12px w-[100%] mx-auto bg-lightBlue h-[1px]"></div>
                    </div>
                    <div class="pb-12px px-12px md:flex md:gap-8px md:justify-center">
                        <BaseButton color="secondary">
                            <a :href="card.behance" class="flex gap-[8px]" target="_blank">
                                <img src="../assets/behance.svg" alt="github" class="w-[20px]" />
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