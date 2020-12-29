import { ref,defineComponent,onMounted } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import menu from '@/config/menu';
import store from '@/store';


export default defineComponent ({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const openKeys = ref([]);
        const selectedKeys = ref([]);
        onMounted(() => {
            selectedKeys.value = [route.path];
        });

        const to = (url) => {
            router.push(url);
        };

        return {
            adminAuth: store.state.userCharacter.name === 'admin',
            openKeys,
            selectedKeys, menu,
            menu,
            to,
        };
    }

});