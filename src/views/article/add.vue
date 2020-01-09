<template lang="html">
  <div class="article-add">
    <el-form v-loading="loading" :model="addFrom" :rules="rules" ref="addForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="addFrom.title"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="abstractContent">
        <el-input v-model="addFrom.abstractContent"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="label">
        <el-select v-model="addFrom.label" placeholder="请选择">
          <el-option v-for="item in labelList" :key="item" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="addFrom.type" placeholder="请选择">
          <el-option v-for="item in typeList" :key="item" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容" prop="contentVal">
        <markdown-editor
          ref="markdownEditor"
          v-model="addFrom.contentVal"
          height="300px"
          @sethtml="sethtml"
        />
        <!-- @sethtml="sethtml" -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addForm')">
          立即创建
        </el-button>
        <el-button @click="resetForm('addForm')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Form } from 'element-ui'
import { addArticle } from '@/api/article'
import { IArticleAdd } from '@/api/types'
import MarkdownEditor from '@/components/MarkdowmEditor/index.vue'

const defaultAdd: IArticleAdd = {
  title: '',
  abstractContent: '',
  label: [],
  type: '',
  contentVal: '',
  contentHTML: ''
}

export interface addRules {
  title: any,
  abstractContent: any,
  label: any,
  type: any,
  contentVal: any
}

@Component({
  name: 'articleAdd',
  components: {
    MarkdownEditor
  }
})
export default class extends Vue {
  private loading: boolean = false
  private addFrom = Object.assign({}, defaultAdd)
  private rules: addRules = {
    title: [
      { required: true, message: '请输入标题', trigger: 'blur' }
    ],
    abstractContent: [
      { required: true, message: '请输入简介', trigger: 'blur' }
    ],
    label: [
      { required: true, message: '请选择标签', trigger: 'change' }
    ],
    type: [
      { required: true, message: '请选择类型', trigger: 'change' }
    ],
    contentVal: [
      { required: true, message: '请输入内容', trigger: 'blur' }
    ]
  }
  private labelList: string[] = []
  private typeList: string[] = []

  created() {
    this.labelList = ['ts', 'vue', 'node', 'js', 'mysql', 'other']
    this.typeList = ['文章', '问答', '分享']
  }

  public submitForm(form: string) {
    (this.$refs[form] as Form).validate((valid: boolean) => {
      console.log(valid)
      if (valid) {
        this._addArticle(this.addFrom)
      }
    })
  }

  public resetForm(form: string) {
    (this.$refs[form] as Form).resetFields()
  }

  public _addArticle(data: IArticleAdd) {
    this.loading = true
    addArticle(data).then(res => {
      this.loading = false
      this.$message.success(res.message)
    })
  }

  sethtml(val: string) {
    this.addFrom.contentHTML = val
  }
}
</script>

<style lang="scss">
.article-add {
  width: 80%;
  padding-top: 40px;
  margin: 0 auto;
  .te-mode-switch-section {
    .te-switch-button {
      vertical-align: top;
    }
  }
}
</style>
