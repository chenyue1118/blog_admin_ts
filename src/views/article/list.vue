<template lang="html">
  <div class="article-list">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        prop="id"
        label="ID"
        width="100"
      />
      <el-table-column
        prop="title"
        label="标题"
      />
      <el-table-column
        prop="abstractContent"
        label="简介"
      />
      <el-table-column
        prop="label"
        label="标签"
      >
        <template slot-scope="scope">
          <!-- {{ scope.label.join("-") }} -->
          {{ scope.row.label }}
        </template>
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
      />
      <el-table-column
        prop="reviewer"
        label="审核人"
      />
      <el-table-column
        prop="type"
        label="类型"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.type === 'article'">文章</span>
          <span v-else-if="scope.row.type === 'ques'">问答</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="pageviews"
        label="浏览量"
      />
      <el-table-column
        prop="status"
        label="状态"
      >
        <template slot-scope="scope">
          {{ scope.row.status === 'done' ? '完成' : '更新中' }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getArticleList } from '@/api/article'
import { IArticleData } from '@/api/types'

@Component({})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true

  created() {
    this._getArticleList()
  }

  private _getArticleList() {
    getArticleList({}).then(res => {
      console.log(res)
      this.listLoading = false
      this.list = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  padding: 20px;
}
</style>
