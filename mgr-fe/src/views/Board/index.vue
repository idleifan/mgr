<template>
    <div>
         <a-spin :spinning="loading">
            <a-card>
            <h2>最新招领列表</h2>

            <a-divider />

            <div>
                <a-table
                bordered
                :columns="bosColumns"
                :data-source='findList'
                :pagination="false"
                >
                <template #publishDate="data">
                    {{formatTimestamp(data.record.publishDate)}}
                </template>
                </a-table>
            </div>
        </a-card>
        </a-spin>

        <a-spin :spinning="loading">
            <a-card>
            <h2>最新报失列表</h2>

            <a-divider />

            <div>
                <a-table
                bordered
                :columns="bosColumns"
                :data-source='bosList'
                :pagination="false"
                >
                <template #publishDate="data">
                    {{formatTimestamp(data.record.publishDate)}}
                </template>
                </a-table>
            </div>
        </a-card>
        </a-spin>
    </div>
</template>

<script src="./index.js">
</script>