<template>
  <section class="search-section">
    <div class="pr-cd-sec">
      <span class="pr-cd">地域コード</span>
      <input type='text' class="pr-cd__input" v-model="form.prefecture_cd">
    </div>
    <div class="pr-name-sec">
      <span class="pr-name">地域名</span>
      <input type='text' class="pr-name__input" v-model="form.prefecture_name">
    </div>
    <div class='error' v-if="errors.prefecture_cd">
      {{errors.prefecture_cd[0]}}
    </div>
    <span class="search-btn btn" @click="search()">検索</span>

  </section>
</template>
<script>
export default {
  data(){
    return{
      form:{
        prefecture_cd:'',
        prefecture_name:''
      }
    }
  },
  methods:{
    search(){
      this.$emit('search',this.form)
    }
  }
}
</script>
<style >
.search-section {
  display: flex;
  border: 0.1rem solid black;
  padding: 1.2rem;
}
.pr-cd-sec {
  width: 30%;
  padding-left: 5rem;
}
.pr-cd__input {
  border: 0.1rem solid black;
  padding: 0.4rem;
  margin-left: 1rem;
}
.pr-name-sec {
  width: 40%;
}
.pr-name__input {
  border: 0.1rem solid black;
  /* padding: 0.4rem; */
  display: inline-block;
  width: 20rem;
  margin-left: 2rem;
}
</style>
