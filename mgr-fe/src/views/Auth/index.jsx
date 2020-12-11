import { defineComponent, reactive } from 'vue'
export default defineComponent({
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