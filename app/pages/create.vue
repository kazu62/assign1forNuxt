<template>
<section class="createsection">
  <h1>
    地域マスタ登録
  </h1>
  <div class='register-section'>
    <div class='cd'>地域コード<input class='cd-input' v-model="form.prefecture_cd"></div>
    <div class='error' v-if="errors.prefecture_cd">{{ errors.prefecture_cd[0]}}</div>
    <div class='name'>地域名<input class='name-input' v-model="form.prefecture_name"></div>
    <div class='error' v-if="errors.prefecture_name">{{ errors.prefecture_name[0]}}</div>
    <div class='btn registerBtn' @click="register">登録</div>
  </div>
  <nuxt-link to="/"><div>戻る</div></nuxt-link>
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
    async register(){
      await this.$store.dispatch('areas/CREATE_DATA',this.form)
    }
  }
}
</script>
<style lang="scss">
.createsection{
  margin:10rem 30rem;
}
.error{
  color:red;
}
.btn{
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  border-radius: 3px;
  &:active{
    -webkit-transform: translateY(4px);
    transform:translateY(4px);
    border-bottom:none;
  }
  &:hover{
    cursor:pointer;
  }
}
.registerBtn{
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
}
</style>
