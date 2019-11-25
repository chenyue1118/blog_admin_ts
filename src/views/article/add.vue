<template lang="html">
  <div class="article-add">
    <el-form :model="addFrom" :rules="rules" ref="addForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="addFrom.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="contentHTML">
        <markdown-editor
          ref="markdownEditor"
          v-model="addFrom.contentHTML"
          height="300px"
        />
      </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getArticleList } from '@/api/article'
import { IArticleAdd } from '@/api/types'
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'

const defaultAdd: IArticleAdd = {
  title: '',
  contentHTML: ''
}

@Component({
  name: 'articleAdd',
  components: {
    MarkdownEditor
  }
})
export default class extends Vue {
  private addFrom = Object.assign({}, defaultAdd)
  private rules: any[] = []

  created() {
    console.log(new Date())
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  padding: 20px;
}
</style>
