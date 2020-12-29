<template>
    <div>
         <a-modal
      title="添加捡拾"
      :visible="props.show"
      @ok="submit"
      @cancel="close"
    >
      <a-form :label-col="{span: 6}">
    <a-form-item label="捡拾物名称">
      <a-input  v-model:value="addForm.name"  />
    </a-form-item>
    <a-form-item label="捡拾物特征">
      <a-input  v-model:value="addForm.feature"  />
    </a-form-item>
    <a-form-item label="捡拾物地点">
      <a-input  v-model:value="addForm.price" />
    </a-form-item>
    <a-form-item  label="捡拾物上交时间">
       <a-date-picker v-model:value="addForm.handDate" @change="onChange" />
    </a-form-item>
    <a-form-item  label="捡拾人姓名">
      <a-input v-model:value="addForm.author" />
    </a-form-item>
    <a-form-item  label="捡拾人联系方式">
      <a-input v-model:value="addForm.authorPhoneNum" />
    </a-form-item>
    <a-form-item label="捡拾时间">
       <a-date-picker v-model:value="addForm.publishDate" @change="onChange" />
    </a-form-item>
    <a-form-item  label="分类">
      <a-input v-model:value="addForm.classify"  />
    </a-form-item>
  </a-form>
    </a-modal>
    </div>
</template>

<script src="./index.js"></script>