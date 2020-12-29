<template>
    <div>
         <a-modal
      title="添加失物"
      :visible="props.show"
      @ok="submit"
      @cancel="close"
    >
      <a-form :label-col="{span: 6}">
    <a-form-item label="报失物品">
      <a-input  v-model:value="editForm.name"  />
    </a-form-item>
    <a-form-item label="报失物品特征">
      <a-input  v-model:value="editForm.feature"  />
    </a-form-item>
    <a-form-item label="报失地点">
      <a-input  v-model:value="editForm.price" />
    </a-form-item>
    <a-form-item label="丢失时间">
       <a-date-picker v-model:value="editForm.loseDate" @change="onChange" />
    </a-form-item>
    <a-form-item  label="报失人">
      <a-input v-model:value="editForm.author" />
    </a-form-item>
     <a-form-item  label="失主联系方式">
      <a-input v-model:value="editForm.loserPhoneNum" />
    </a-form-item>
    <a-form-item label="报失时间">
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