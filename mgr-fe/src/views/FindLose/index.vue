<template>
    <div>
        <a-card>
            <h2>失物招领列表</h2>

        <a-divider />
        <space-between>
            <div class="search">
        <a-input-search 
        placeholder="根据物品搜索" 
        enter-button 
        v-model:value="key"
        @search="onSearch"
        />
        <a v-if="isSearch" href="javascript:;" @click="backAll">返回</a>
        </div>
        <a-button
        @click="show = true"
        >添加捡拾</a-button>
        </space-between>

        <a-divider />

        <a-table :columns="columns" :data-source="list" :pagination="false" bordered>
            <template #publishDate="data">
                {{ formatTimestamp(data.record.publishDate) }}
            </template>

            <template #actions="record">
                 <a href="javascript:;" @click="toDetail(record)">详情</a>
                &nbsp;
                <a href="javascript:;"  @click="update(record)">编辑</a>
                &nbsp;
                <a href="javascript:;"  @click="remove(record)">删除</a>
            </template>
         
        </a-table>
        <space-between style="margin-top: 24px">
            <div />
            <a-pagination 
            v-model:current="curPage" 
            :total="total"
            :page-size="10"
            @change="setPage"
             />
        </space-between>
        </a-card>
        <add-one 
        v-model:show="show"
        @update="updateAddOne"
        />
         <update 
        v-model:show="showUpdateModal"
        :bos="curEditBos"
        @update="updateCurBos"
        />
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scopde>
  @import './index.scss';
</style>