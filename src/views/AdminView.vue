// import { ref } from "vue";
// import {
//     ref as firebaseRef,
//     uploadBytesResumable,
//     getDownloadURL,
// } from "firebase/storage";
// import { getStorageDb } from "../firebase/index";
// import { getFirestoreDb } from "../firebase/index";
// import { collection, addDoc } from "firebase/firestore";

// // Card's description
// const hashtags = ref([]);
// const title = ref('');
// const githubLink = ref('');
// const previewLink = ref('');

// // Type, it could be either programming type or designing one
// const type = ref('');

// // Upload a single image
// const uploadImg = ref(null);
// const uploadValue = ref(0);

// // Uploading image process
// const onImageUploadStatusChanged = (snapshot) => {
//     uploadValue.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
// };

// // Uploaded image with its own link
// const uploadImage = async (file) => {
//     const fileRef = firebaseRef(getStorageDb, file.name);
//     const uploadTask = uploadBytesResumable(fileRef, file);
//     const progressUnsubscribe = uploadTask.on("state_changed", onImageUploadStatusChanged);

//     return new Promise((resolve, reject) => {
//         uploadTask
//             .then((snapshot) => {
//                 progressUnsubscribe();
//                 resolve(getDownloadURL(snapshot.ref));
//             })
//             .catch(reject);
//     });
// };

// // Add user to Firebase
// const addUserToFirebase = async (user) => {
//     return await addDoc(collection(getFirestoreDb, "users"), user);
// };

// // Send all data to Firestore
// const onSubmit = async () => {
//     // Call uploaded img function
//     const imageUrl = await uploadImage(uploadImg.value.files[0]);

//     await addUserToFirebase({
//         img: imageUrl,
//         subject: subject.value,
//         text: text.value,
//     });

//     // Clear value
//     subject.value = "";
//     text.value = "";
// };

<script>
import AppProgramming from '../components/app/AppProgramming.vue'
import AppDesigning from '../components/app/AppDesigning.vue'

export default {
  components: { AppProgramming, AppDesigning },
  data() {
    return {
      selectedTab: 'AppProgramming'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  },
  computed: {
    programming() {
      if (this.selectedTab === 'AppProgramming') {
        return 'active';
      }
    },
    designing() {
      if (this.selectedTab === 'AppDesigning') {
        return 'active';
      }
    }
  }
}
</script>


<script setup>
</script>

<template>
  <div class="max-w-[650px] px-[14px] xl:px-0 mx-auto mt-3 md:mt-0">
    <div class="w-full bg-white flex mb-[32px]">
      <button class="custom-btn uppercase" @click="setSelectedTab('AppProgramming')"
        :class="programming">movies</button>
      <button class="custom-btn uppercase" @click="setSelectedTab('AppDesigning')" :class="designing">Videos</button>
    </div>

    <KeepAlive>
      <component :is="selectedTab" />
    </KeepAlive>
  </div>
</template>

<style scoped>
.bg-white {
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(240, 240, 240, 0.082);
}

.custom-btn {
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 8px;
  color: #333;
  font-weight: 500;
}

.active {
  background-color: #15803D;
  color: #fff;
  box-shadow: 0px 0px 20px rgba(21, 128, 61, 0.5);
}
</style>

