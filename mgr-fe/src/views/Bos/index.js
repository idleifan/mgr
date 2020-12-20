import { defineComponent,ref,onMounted } from 'vue';
import { bos } from '@/service';
import { message } from 'ant-design-vue';
import { result,formatTimestamp } from '@/helpers/utils';
import AddOne from './AddOne/index.vue';
import Update from './Update/index.vue';

export default defineComponent ({
    components:{
        AddOne,
        Update,
    },
    setup() {
        const columns = [
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
        {
            title: '操作',
            slots: {
                customRender: 'actions',
            },
        },
    ];
        

        const show = ref(false);
        const showUpdateModal = ref(false);
        const list = ref([]);
        const total = ref(0);
        const curPage = ref(1);
        const key = ref ('');
        const isSearch = ref(false);
        const curEditBos = ref({});

        //获取失物列表
        const getList = async () => {
            const res = await bos.list({
                page: curPage.value,
                size: 10,
                key: key.value,
            });

            result(res)
            .success(({ data }) => {
                const { list:l,total: t } = data;
                list.value = l;
                total.value = t;
            });
        };

        onMounted(async () => {
            getList();
        });

        const setPage = (page) => {
            setPage.value = page;
            getList();
        };

        const onSearch = () => {
            getList();
            isSearch.value = Boolean(key.value);
        };
        //返回全部列表
        const backAll = () => {
            key.value = '';
            isSearch.value = false;
            getList();
        };
        //删除一条失物列表
        const remove = async ({ text:record }) => {
            const { _id } = record;
            const res = await bos.remove(_id);
            result(res)
            .success(({ msg }) => {
                message.success(msg);
                
                // const idx = list.value.findIndex((item) =>{
                //    return item._id === _id;
                // });

                // list.value.splice(idx,1);
                getList();
            });
        };

        const update = ( {record} ) => {
            showUpdateModal.value = true;
            curEditBos.value = record;
        };

        const updateCurBos = (newData) => {
            Object.assign(curEditBos.value, newData)
        };

        return {
            columns,
            show,
            list,
            formatTimestamp,
            curPage,
            total,
            setPage,
            key,
            onSearch,
            backAll,
            isSearch,
            remove,
            showUpdateModal,
            update,
            curEditBos,
            updateCurBos,
        };
    },
});