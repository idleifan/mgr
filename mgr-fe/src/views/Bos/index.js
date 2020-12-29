import { defineComponent,ref,onMounted } from 'vue';
import { bos } from '@/service';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { result,formatTimestamp } from '@/helpers/utils';
import AddOne from './AddOne/index.vue';
import Update from './Update/index.vue';
import store from '@/store';


export default defineComponent ({
    components:{
        AddOne,
        Update,
    },
    setup() {
        const router = useRouter();

        const columns = [
        {
            title: '报失物品',
            dataIndex: 'name',
        },
        {
            title: '报失特征',
            dataIndex: 'feature',
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
                getList()
            });
        };
        //显示更新弹框
        const update = ( {record} ) => {
            showUpdateModal.value = true;
            curEditBos.value = record;
        };
        //更新列表的某一行书集
        const updateCurBos = (newData) => {
            Object.assign(curEditBos.value, newData)
            getList()
        };

        const updateAddOne = (newData) => {
            show.value = false;
            getList()
        }
        //进入书籍详情页
        const toDetail = ({ record }) => {
            console.log('record', record)
            router.push(`/bos/${record._id}`);
        };

        return {
            columns,
            show,
            updateAddOne,
            adminAuth: store.state.userCharacter.name === 'admin',
            account: store.state.userInfo.account,
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
            toDetail,
        };
    },
});