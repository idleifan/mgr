import { defineComponent,ref,onMounted } from 'vue';
import { findLose } from '@/service';
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
            title: '捡拾物名称',
            dataIndex: 'name',
        },
        {
            title: '捡拾物地点',
            dataIndex: 'price',
        },
        {
            title: '捡拾人姓名',
            dataIndex: 'author',
        },
        {
            title: '捡拾时间',
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
        const adminAuth = ref(false) // 管理员权限
        const list = ref([]);
        const total = ref(0);
        const curPage = ref(1);
        const key = ref ('');
        const isSearch = ref(false);
        const curEditBos = ref({});

        //获取失物列表
        const getList = async () => {
            const res = await findLose.list({
                page: curPage.value,
                size: 10,
                account: store.state.userCharacter.name === 'admin' ? null : store.state.userInfo.account,
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
            
            const res = await findLose.remove(_id);

            result(res)
            .success(({ msg }) => {
                getList();
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
        };

        const updateAddOne = ()=>{
            show.value = false
            getList();
        }

        //进入书籍详情页
        const toDetail = ({ record }) => {
            router.push(`/find/${record._id}`);
        };

        return {
            columns,
            show,
            updateAddOne,
            adminAuth: store.state.userCharacter.name === 'admin',
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