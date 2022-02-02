<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)">1</button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <button v-for="(pageNum, index) in pageNumList" :key="index" :class="{ active: pageNum === pageNo }" @click="$emit('getPageNo', pageNum)">{{ pageNum }}</button>
    
    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo', totalPage)">{{ totalPage }}</button>
    <button :disabled="pageNo === totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: ['pageNo', 'pageSize', 'total', 'continues'],
    computed: {
      totalPage() {
        return Math.ceil( this.total / this.pageSize )
      },     
      startNumAndEndNum() {  // 计算出连续的起始数字与结束数字
        const { pageNo, totalPage, continues } = this
        let start = 0, end = 0
        if (totalPage < continues) {
          start = 1
          end = totalPage
        } else {
          start = pageNo - parseInt( continues / 2 )
          end = pageNo + parseInt( continues / 2 )
          if (start < 1) {
            start = 1
            end = continues
          }
          if (end > totalPage) {
            end = totalPage
            start = totalPage - continues + 1
          }
        }
        return { start, end }
      },
      pageNumList() {
        const { start, end } = this.startNumAndEndNum
        let numList = []
        for (let i = start; i <= end; i++){
          numList.push(i)
        }
        return numList
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;

    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
