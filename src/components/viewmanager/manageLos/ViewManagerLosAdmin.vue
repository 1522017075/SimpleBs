<template>
  <el-container>
    <el-header>
      <el-input
        style="width: 500px; float: left; margin: 10px" v-model="searchLos" placeholder="请输入内容">
      </el-input>
      <el-button style="float: left; margin: 10px">查询</el-button>
    </el-header>
    <el-main style="height: 500px">
      <hr style="margin-top: -20px; width: 620px; float:left">
      <div v-for="(loses, index) in loses" v-bind:key="index">
        <div style="width: 600px; height: 100px; margin: 10px;;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
          <div style="width: 500px; height: 40px;margin-left: 30px">
            <i class="el-icon-collection-tag" style="float:left; margin-top: 10px; padding-right: 10px"><b>
              {{loses.title}}</b></i>
          </div>
          <div style="width: 500px;">
            {{loses.content}}
          </div>
          <div style="float:right; margin-top: -62px">
            <el-button type="danger" style="height: 98px;width: 60px" plain icon="el-icon-delete"
                       @click="deleteLos(loses.id)"></el-button>
          </div>
        </div>
      </div>
      <hr style=" width: 620px; float:left">
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: 'ViewManagerLosAdmin',
        data() {
            return {
                loses: [],
                insertTitle: '',
                insertContent: ''
            }
        },
        mounted: function () {
            this.loadLos()
        },
        methods: {
            loadLos() {
                var _this = this
                this.$axios.post('/losAndFix/listLos', {
                    searchContent: ''
                }).then(resp => {
                    if (resp && resp.status === 200) {
                        _this.loses = resp.data.data
                    }
                })
            },
            insert() {
                var title = this.insertTitle
                var content = this.insertContent
                this.$axios.post('losAndFix/addLos', {
                    title, content
                }).then(resp => {
                    if (resp && resp.status === 200) {
                        this.$message({
                            type: 'success',
                            message: '发表成功!'
                        })
                    }
                    this.loadLos()
                })
                this.insertTitle = ''
                this.insertContent = ''
            },
            deleteLos(id) {
                this.$confirm('要删除该条挂失消息吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('losAndFix/deleteLos', {
                        id
                    }).then(resp => {
                        if (resp && resp.status === 200) {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                        }
                        this.loadLos()
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>
