<template>
    <div>
         <a-modal
      title="添加失物"
      :visible="props.show"
      @ok="submit"
      @cancel="close"
    >
      <a-form :label-col="{span: 6}">
    <a-form-item label="捡拾物名称">
      <a-input  v-model:value="editForm.name"  />
    </a-form-item>
    <a-form-item label="捡拾物特征">
      <a-input  v-model:value="editForm.feature"  />
    </a-form-item>
    <a-form-item label="捡拾物地点">
      <a-input  v-model:value="editForm.price" />
    </a-form-item>
    <a-form-item  label="捡拾物上交时间">
       <a-date-picker v-model:value="editForm.handDate" @change="onChange" />
    </a-form-item>
    <a-form-item  label="捡拾人姓名">
      <a-input v-model:value="editForm.author" />
    </a-form-item>
    <a-form-item  label="捡拾人联系方式">
      <a-input v-model:value="editForm.authorPhoneNum" />
    </a-form-item>
    <a-form-item label="捡拾时间">
       <a-date-picker v-model:value="editForm.publishDate" @change="onChange" />
    </a-form-item>
    <a-form-item  label="分类">
      <a-input v-model:value="editForm.classify"  />
    </a-form-item>
  </a-form>
    </a-modal>
    </div>
</template>

<script src="./index.js"></script>