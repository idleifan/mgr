import { defineComponent,onMounted,ref } from 'vue';
import { log } from '@/service';
import { result,formatTimestamp } from '@/helpers/utils';
import { getLogInfoByPath } from '@/helpers/log';
import { bos } from '@/service';
import { findLose } from '@/service';
import store from '@/store';



const bosColumns = [
    {
        title: '报失物品',
        dataIndex: 'name',
    },
    {
        title: '报失地点',
        dataIndex: 'price',
    },
    {
        title: '报失人',
        dataIndex: 'author',
    },
    {
        title: '报失时间',
        dataIndex: 'publishDate',
        slots: {
            customRender: 'publishDate',
        },
    },
    {
        title: '分类',
        dataIndex: 'classify',
    },
];

export default defineComponent({
    setup() {
        const curPage = ref(1);
        const total = ref(0);
        const bosList = ref([]);
        const findList = ref([]);
        const loading = ref(true);
        
         //获取失物列表
         const getBosList = async () => {
            const res = await bos.list({
                page: 1,
                size: 5,
            });

            result(res)
            .success(({ data }) => {
                const { list:l,total: t } = data;
                bosList.value = l;
                total.value = t;
                loading.value = false
            });
        };

         //获取失物列表
         const getFindList = async () => {
            const res = await findLose.list({
                page: 1,
                size: 5,
                // account: store.state.userCharacter.name === 'admin' ? null : store.state.userInfo.account,
                // key: key.value,
            });

            result(res)
            .success(({ data }) => {
                const { list:l,total: t } = data;
                findList.value = l;
                total.value = t;
                loading.value = false
            });
        };

        onMounted(() => {
            getBosList();
            getFindList()
        });

        return{
            bosList,
            findList,
            bosColumns,
            loading,
            formatTimestamp,
        };
    },
});