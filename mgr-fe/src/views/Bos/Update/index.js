import { defineComponent,reactive,watch } from 'vue';
import { bos } from '@/service';
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
        loseDate:0, // 丢失时间
        loserPhoneNum:'', // 失主联系方式

    });

       const close = () => {
           context.emit('update:show',false);
       };

       watch(() => props.bos,(current) =>{
           console.log('current', current)
        Object.assign(editForm,current);
        editForm.publishDate = moment(Number(editForm.publishDate));
        editForm.loseDate = moment(Number(editForm.loseDate));
       });

       const submit = async () => {
       const res = await bos.update({
           id: props.bos._id,
           name:editForm.name,
           price:editForm.price,
           author:editForm.author,
           publishDate: editForm.publishDate.valueOf(),
           classify:editForm.classify,
           feature: editForm.feature, // 特征
           loseDate: editForm.loseDate.valueOf(), // 丢失时间
           loserPhoneNum: editForm.loserPhoneNum, // 失主联系方式
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