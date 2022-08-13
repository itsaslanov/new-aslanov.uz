import { ref, computed } from 'vue';
import {
  ref as firebaseRef,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { getStorageDb } from "../firebase/index";
import { getFirestoreDb } from "../firebase/index";
import { collection, addDoc, query, orderBy } from "firebase/firestore";


export function firebaseAllData() {
  // Card's hashtags, title and links
  const title = ref("");
  const previewLink = ref("");
  const githubLink = ref("");
  const hashtags = ref([]);

  // upload a single image
  const uploadImg = ref(null);
  const uploadValue = ref(0);

  // for hashtag
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
  const collectionRef = collection(getFirestoreDb, "cards");

  const addCardToFirebase = async (card) => {
    return await addDoc(collectionRef, card);
  };

  const collectionQuery = query(collection(getFirestoreDb, "cards"), orderBy("date"));
  

  return {
    title,
    previewLink,
    hashtags,
    githubLink,
    uploadImg,
    uploadValue,
    hashtagsInput,
    onHashtagInputBlur,
    onImageUploadStatusChanged,
    uploadImage,
    addCardToFirebase,
    collectionQuery
  }
}