import { ref, computed } from 'vue';
import {
  ref as firebaseRef,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { getStorageDb } from "../firebase/index";
import { getFirestoreDb } from "../firebase/index";
import { collection, addDoc } from "firebase/firestore";

export function firebaseAllData() {
  // upload a single image
  const uploadImg = ref(null);
  const uploadValue = ref(0);
  
  // for hashtag
  const hashtags = ref([]);
  const hashtagsInput = computed({
    get: () => hashtags.value.map((item) => `#${item}`).join(" "),
    set: (value) => {
      hashtags.value = value.split(" ").map((item) => item.replace("#", ""));
    },
  });

  const onHashtagInputBlur = () => {
    hashtags.value = hashtags.value.filter((item) => item && item.trim());
  };

  // uploading image process
  const onImageUploadStatusChanged = (snapshot) => {
    uploadValue.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  };

  // uploaded image with its own link
  const uploadImage = async (file) => {
    const fileRef = firebaseRef(getStorageDb, file.name);
    const uploadTask = uploadBytesResumable(fileRef, file);
    const progressUnsubscribe = uploadTask.on("state_changed", onImageUploadStatusChanged);

    return new Promise((resolve, reject) => {
      uploadTask
        .then((snapshot) => {
          progressUnsubscribe();
          resolve(getDownloadURL(snapshot.ref));
        })
        .catch(reject);
    });
  };

  // add user to Firebase
  const addCardToFirebase = async (card) => {
    return await addDoc(collection(getFirestoreDb, "cards"), card);
  };

  return {
    uploadImg,
    uploadValue,
    hashtagsInput,
    onHashtagInputBlur,
    onImageUploadStatusChanged,
    uploadImage,
    addCardToFirebase,
    hashtags
  }
}