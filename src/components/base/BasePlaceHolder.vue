<template>
  <div class="rounded-6px bg-gray border border-lightBlue custom-box-shadow pb-2 w-full">
    <div class="bg-[#939393] skeleton-box w-full h-[188px] rounded-t-6px"></div>
    <div class="bg-[#939393] skeleton-box w-[100px] ml-3 h-[15px] mt-3 rounded-sm"></div>
    <div class="bg-[#939393] skeleton-box w-[230px] ml-3 h-[15px] mt-4 rounded-sm"></div>
    <div class="flex gap-[10px]">
      <div class="bg-[#939393] skeleton-box w-[110px] ml-3 h-[25px] mt-3 rounded-sm"></div>
      <div class="bg-[#939393] skeleton-box w-[110px] h-[25px] mt-3 rounded-sm"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-box {
  position: relative;
  overflow: hidden;
}
.skeleton-box::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
  -webkit-animation: shimmer 2s infinite;
  animation: shimmer 2s infinite;
  content: "";
}

@-webkit-keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>