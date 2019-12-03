<template lang="html">
  <div class="article-add">
    <el-form :model="addFrom" :rules="rules" ref="addForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="addFrom.title"></el-input>
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
import { getArticleList } from '@/api/article'
import { IArticleAdd } from '@/api/types'
import MarkdownEditor from '@/components/MarkdowmEditor/index.vue'

const defaultAdd: IArticleAdd = {
  title: '',
  contentVal: '',
  contentHTML: ''
}

export interface addRules {
  title: any
}

@Component({
  name: 'articleAdd',
  components: {
    MarkdownEditor
  }
})
export default class extends Vue {
  private addFrom = Object.assign({}, defaultAdd)
  private rules: addRules = {
    title: [
      { required: true, message: '请输入标题', trigger: 'blur' }
    ]
  }

  created() {
    console.log(new Date())
  }

  public submitForm(form: string) {
    (this.$refs[form] as Form).validate((valid: boolean) => {
      if (valid) {
        console.log(this.addFrom)
      }
    })
  }

  public resetForm(form: string) {
    (this.$refs[form] as Form).resetFields()
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
