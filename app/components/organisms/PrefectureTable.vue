
<template>
<table>
      <thead>
        <th>地域コード</th>
        <th>地域名</th>
        <th>更新日時</th>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="prefecture in prefectures" :key="prefecture.id">
          <td>{{prefecture.prefecture_cd}}</td>
          <td>{{prefecture.prefecture_name}}</td>
          <td>{{prefecture.insert_date}}</td>
          <td><span @click="alert">更新</span></td>
          <td><span @click="alert">削除</span></td>
        </tr>
      </tbody>
    </table>
</template>
<script>
export default {
  props:['prefectures'],
  methods:{
    alert(){
      alert('その操作は許可されていません')
    }
  }
}
</script>
<style lang="scss">

</style>
