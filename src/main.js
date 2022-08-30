import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';

import './assets/base.css'
import './assets/index.css'
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#3935FF',
};

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2, options);

app.mount('#app')
