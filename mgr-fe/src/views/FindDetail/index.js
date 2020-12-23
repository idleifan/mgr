import { defineComponent,onMounted,ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { result,formatTimestamp } from '@/helpers/utils';
import { bos, inventoryLog } from '@/service';
import { CheckOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import Update from '@/views/Bos/Update/index.vue';

const columns = [
    {
        title: '招领人',
        dataIndex: 'num',
    },
    {
        title: '操作时间',
        slots: {
            customRender: 'createdAt',
        },
    },
];

export default defineComponent({
    components: {
        Update,
        CheckOutlined,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();

        const {id} = route.params;

        const detailInfo = ref({});
        const log = ref([]);
        const showUpdateModal = ref(false);
        const logTotal = ref(0);
        const logCurPage = ref(1);
        const curLogType = ref('IN_COUNT');

        // 获取失物详细信息
        const getDetail = async () => {
            const res = await bos.detail(id);

            result(res)
            .success(({ data }) => {
                detailInfo.value = data;
                
            });
        };

        const getInventoryLog = async () => {
            const res = await inventoryLog.list(curLogType.value);
            result(res)
            .success(({ data:{ list,total } }) => {
                log.value = list;
                logTotal.value = total;
            });
        };

        onMounted(() => {
            getDetail();
            getInventoryLog();
        });

        const remove = async () => {
            const res = await bos.remove(id);

            result(res)
            .success(({ msg }) => {
                message.success(msg);

                router.replace('/bos');
            });
        };

        const update = (bos) => {
            Object.assign(detailInfo.value,bos);
        };

        const logFilter = (type) => {
            curLogType.value = type;

            getInventoryLog()
        };

        return{
            d: detailInfo,
            formatTimestamp,
            remove,
            showUpdateModal,
            update,
            columns,
            log,
            logFilter,
            curLogType,
        };
    },
});