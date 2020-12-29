import { defineComponent,reactive } from 'vue';
import { profile } from '@/service';
import { message } from 'ant-design-vue';
import { result } from '@/helpers/utils';

export default defineComponent({
    setup() {
        const resetPasswordForm = reactive({
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        });

        const resetPassword = async () => {
            const {
                confirmNewPassword,
                newPassword,
                oldPassword,
            } = resetPasswordForm;

            if (confirmNewPassword !== newPassword) {
                message.error('两次密码输入不同');
                return;
            }

            const res = await profile.resetPassword(
                newPassword,
                oldPassword,

            );

            result(res)
             .success(({ msg }) => {
                message.success(msg);

                resetPasswordForm.oldPassword = '';
                resetPasswordForm.confirmNewPassword = '';
                resetPasswordForm.newPassword = '';

             });
        };

        return {
            resetPasswordForm,
            resetPassword,
        };
    },
});