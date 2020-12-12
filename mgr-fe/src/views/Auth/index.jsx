import { defineComponent, reactive } from 'vue';
import { UserOutlined,LockOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components:{
        UserOutlined,
        LockOutlined,
    },
   
    setup(){
        const regForm = reactive({
            acount: '',
            password: '',
            showLogin: true,
        })

        const login = (value) => {
            console.log('login', value)
            regForm.showLogin = value
        }

        return {
            regForm,
            login
        }
    }
})