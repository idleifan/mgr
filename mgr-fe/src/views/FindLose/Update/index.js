import { defineComponent,reactive,watch } from 'vue';
import { findLose } from '@/service';
import { result,clone } from '@/helpers/utils';
import { message } from 'ant-design-vue';
import moment from "moment";



export default defineComponent({
    props:{
        show: Boolean,
        bos: Object,
    },
   setup(props,context) {
    
    const editForm = reactive({
        name:'',
        price:'',
        author:'',
        publishDate:0,
        classify:'',
        feature: '', // 特征
        handDate:0, // 上交时间
        authorPhoneNum:'', // 失主联系方式
    });

       const close = () => {
           context.emit('update:show',false);
       };

       watch(() => props.bos,(current) =>{
        Object.assign(editForm,current);
        editForm.publishDate = moment(Number(editForm.publishDate));
        editForm.handDate = moment(Number(editForm.handDate));
       });

       const submit = async () => {
       const res = await findLose.update({
           id: props.bos._id,
           name:editForm.name,
           price:editForm.price,
           author:editForm.author,
           publishDate: editForm.publishDate.valueOf(),
           classify:editForm.classify,
           feature: editForm.feature, // 特征
            handDate: editForm.handDate.valueOf(), // 上交时间
            authorPhoneNum: editForm.authorPhoneNum, // 失主联系方式
       });

       result(res)
       .success(({data,msg}) => {
        context.emit('update',data);
        message.success(msg);
        close();
       });
       };
       return {
           editForm,
           submit,
           props,
           close,
       };
   },
});