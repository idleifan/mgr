import { defineComponent,reactive } from 'vue';
import { bos } from '@/service';
import { result,clone } from '@/helpers/utils';
import { message } from 'ant-design-vue';

const defaultFormData = {
    name:'',
    feature: '', // 特征
    loseDate:0, // 丢失时间
    price:'', // 地点
    author:'',
    loserPhoneNum:'', // 失主联系方式
    publishDate:0,
    classify:'',
    account: store.state.userInfo.account,

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
          form.loseDate = addForm.loseDate.valueOf();
          const res = await bos.add(form);

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