import { defineComponent,reactive } from 'vue';
import { bos } from '@/service';
import { result,clone } from '@/helpers/utils';
import { message } from 'ant-design-vue';

const defaultFormData = {
    name:'',
    price:'',
    author:'',
    publishDate:0,
    classify:'',

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
          const res = await bos.add(form);

          result(res)
          .success((d, { data }) => {
              Object.assign(addForm,defaultFormData);
             message.success(data.msg);
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