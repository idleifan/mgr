import { defineComponent,reactive } from 'vue';
import { findLose } from '@/service';
import { result,clone } from '@/helpers/utils';
import { message } from 'ant-design-vue';
import store from '@/store';
const defaultFormData = {
    name:'',
    price:'',
    author:'',
    publishDate:0,
    classify:'',
    account: store.state.userInfo.account,
    feature: '', // 特征
    handDate:0, // 上交时间
    authorPhoneNum:'', // 失主联系方式
};

export default defineComponent({
    props:{
        show: Boolean,
    },
   setup(props,context) {
       
       const addForm = reactive(clone(defaultFormData));

       const submit = async () => {
          const form = clone(addForm);
          form.publishDate = addForm.publishDate.valueOf();
          form.handDate = addForm.handDate.valueOf();
          const res = await findLose.add(form);

          result(res)
          .success((d, { data }) => {
              Object.assign(addForm,defaultFormData);
                message.success(data.msg);
                context.emit('update:show',false);
          });
       };

       const close = () => {
           context.emit('update:show',false);
       };

       return {
           addForm,
           submit,
           props,
           close,
       };
   },
});