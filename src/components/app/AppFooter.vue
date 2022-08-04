<script setup></script>
<template>
  <footer class="bg-gray py-24px">
    <div class="max-w-[1080px] px-[14px] xl:px-0 mx-auto">
      <div class="flex gap-[24px] flex-col md:flex-row md:justify-between items-center">
        <ul class="
          self-start
          mt-14px
          flex
          gap-10px
          md:gap-20px
          uppercase 
        ">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects">Projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>

        <ul class="flex gap-[10px] self-start">
          <li class="hover:opacity-50 transition-all">
            <a href="#">
              <img src="../../assets/github-rounded.svg" class="w-[32px]" alt="github" />
            </a>
          </li>
          <li class="hover:opacity-50 transition-all">
            <a href="#">
              <img src="../../assets/behance-rounded.svg" class="w-[32px]" alt="github" />
            </a>
          </li>
          <li class="hover:opacity-50 transition-all">
            <a href="#">
              <img src="../../assets/linkedin-rounded.svg" class="w-[32px]" alt="github" />
            </a>
          </li>
        </ul>
      </div>

      <div class="w-[100%] mx-auto bg-lightBlue h-[1px] mt-24px"></div>

      <div class="flex justify-center mt-24px">
        <span class="text-[14px] text-[#DADADA] tracking-[1px] flex gap-1">Designed and built by Aslanov
          <img src="../../assets/stars.png" class="w-[22px]" alt="">
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a.router-link-active {
  color: #86F3DF;
}

a.router-link-active:hover {
  opacity: 1;
}

a {
  display: block;
  text-align: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-size: 14px;
  font-weight: 500;
}

a:hover {
  opacity: 0.5;
}
</style>