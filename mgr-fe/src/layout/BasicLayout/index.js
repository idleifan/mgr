import { defineComponent } from 'vue';
import Nav from './Nav/index.vue';
import { useRouter } from 'vue-router';


export default defineComponent({
    components: {
        AppNav: Nav,
    },
    setup(){
        const router = useRouter()

        const currentAccount = window.localStorage.account
        const logout = () =>{
            router.replace('/auth');
        }
        return{
            currentAccount,
            logout
        }
    }
});