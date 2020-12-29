<template>
    <div>
        <a-card>
            <space-between>
                <h2>报失物品：{{ d.name }}</h2>
                <div v-if="adminAuth || account === d.account">
                    <a-button size="small" type="primary" @click="showUpdateModal = true">编辑</a-button>
                    &nbsp;
                    <a-button size="small" type="danger" @click="remove">删除</a-button>
                </div>
            </space-between>
            <a-divider />

            <div class="base-info">
                <div class="items">
                    <div class="item">
                        <div class="title">报失物品特征</div>
                        <div class="content">{{ d.feature }}</div>
                    </div>
                    <div class="item">
                        <div class="title">报失地点</div>
                        <div class="content">{{ d.price }}</div>
                    </div>
                    <div class="item">
                        <div class="title">丢失时间</div>
                        <div class="content">{{ formatTimestamp(d.loseDate) }}</div>
                    </div>
                </div>
                <div class="items">
                    
                    <div class="item">
                        <div class="title">报失人</div>
                        <div class="content">{{ d.author }}</div>
                    </div>
                    <div class="item">
                        <div class="title">失主联系方式</div>
                        <div class="content">{{ d.loserPhoneNum }}</div>
                    </div>
                    <div class="item">
                        <div class="title">分类</div>
                        <div class="content">{{ d.classify }}</div>
                    </div>
                </div>
                <div class="items">
                    
                    <div class="item">
                        <div class="title">报失时间</div>
                        <div class="content">{{ formatTimestamp(d.publishDate) }}</div>
                    </div>
                    
                </div>
            </div>
        </a-card>
        <!-- <a-card>
            <div class="log">
                <a-card title="招领日志">
                    <template #extra>
                        <span style="margin-left: 12px;">
                        <a href="javascript:;" @click="logFilter('IN_COUNT')">
                            <CheckOutlined v-if="curLogType === 'IN_COUNT'" />进行中</a>
                        &nbsp;
                        </span>
                        <span>
                        <a href="javascript:;" @click="logFilter('OUT_COUNT')">
                            <CheckOutlined v-if="curLogType === 'OUT_COUNT'" />已招领</a>
                        </span>
                        
                    </template>
                    <div>
                        <a-table 
                        :data-source="log" 
                        :columns="columns" 
                        bordered 
                        :pagination="false" 
                        >
                    
                    <template #createdAt="{record}">
                        {{ formatTimestamp(record.meta.createdAt) }}
                    </template>
                        </a-table>
                    </div>
                </a-card>
            </div>
        </a-card> -->
        <update
        v-model:show="showUpdateModal"
        :bos="d"
        @update="update"
         />
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
    @import './index.scss';
</style>