import { defineComponent, reactive } from 'vue';
import { UserOutlined,LockOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';
import { result } from '@/helpers/utils';
import { getCharacterInfoById } from '@/helpers/character';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import store from '@/store';
import { setToken } from '@/helpers/token';

export default defineComponent({
    components:{
        UserOutlined,
        LockOutlined,
    },
   
    setup(){
        const router = useRouter();
        //注册用的表单数据
        const regForm = reactive({
            account: '',
            password: '',
        });
        //注册逻辑
        const register = async () => {
            if (regForm.account === '') {
                message.info('请输入账户');
                return;
            }

            if (regForm.password === '') {
                message.info('请输入密码');
                return;
            }

            const res = await auth.register(regForm.account,regForm.password);

            result(res)
            .success((data) => {
                message.success(data.msg);
            });
        };
        //登录用的表单数据
        const loginForm = reactive({
            account: '',
            password: '',
        });
        //登录逻辑
        const login = async () => {
            if (loginForm.account === '') {
                message.info('请输入账户');
                return;
            }

            if (loginForm.password === '') {
                message.info('请输入密码');
                return;
            }

            const res =await auth.login(loginForm.account,loginForm.password)

            result(res)
            .success(({msg, data: { user,token } }) => {
                message.success(msg);
                window.localStorage.account = loginForm.account
                
                store.commit('setUserInfo',user);
                store.commit('setUserCharacter', getCharacterInfoById(user.character));

                console.log('token', token)
                setToken(token);

                router.replace('/bos');
            });
        };

        return {
            //注册相关的数据
            regForm,
            register,
            //登录相关的数据
            login,
            loginForm,
        };
    },
});