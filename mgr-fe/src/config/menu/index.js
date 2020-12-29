import store from '@/store';


const menuList = [
    {
        title: '失物报失',
        url: '/bos',
        onlyAdmin: false,
    },
    {
        title: '捡拾信息',
        url: '/find',
        onlyAdmin: false,
    },
    {
        title: '公告栏',
        url: '/board',
        onlyAdmin: false,
    },
    {
        title: '个人设置',
        url: '/profile',
        onlyAdmin: false,
    },

    {
        title: '操作日志',
        url: '/log',
        onlyAdmin: true,
    },

    {
        title: '用户管理',
        url: '/user',
        onlyAdmin: true,
    },


];



export default menuList