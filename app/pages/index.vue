<template>
  <section class="container">
    <h1 class='heading-primary'>
      地域マスター覧
    </h1>
    <SearchSection @search="search"></SearchSection>
    <div class='dispaly-number'>
      {{paginate.total}}件中 {{count}}件を表示
    </div>
    <prefectureTable
    :prefectures="prefectures"
    >
    </prefectureTable>
    <div>
  </div>
  <div class='btn-section'>
    <span @click="previous()" class="btn renderBtn"
    v-show="paginate.current_page!=1"
    >前のページへ</span>
    <span @click="next()" class="btn renderBtn"
    v-show="paginate.current_page!=paginate.last_page">次のページへ</span>
    <nuxt-link to="/create">
      <span class="btn addBtn">
        追加
      </span>
    </nuxt-link>
  </div>
  </section>
</template>
<script>
import SearchSection from '~/components/organisms/SearchSection'
import PrefectureTable from '~/components/organisms/PrefectureTable'
import { mapActions,mapGetters } from 'vuex'
export default {
  components: {
    SearchSection,
    PrefectureTable
  },
  async asyncData({ $axios, store }){
    try {
      await store.dispatch('areas/FETCH_DATA')
    }catch(e){
      console.log(e)
    }
  },
  methods:{
    async previous() {
      const current = this.paginate.current_page
      const previousPath = current - 1
      const accessPath = this.paginate.path + '?page=' + previousPath
      this.$store.dispatch('areas/OTHER_PRE',accessPath)
    },
    async next() {
      const current = this.paginate.current_page
      const nextPath = current+1
      const lastPath = this.paginate.last_page
      if (current != lastPath) {
        const accessPath = this.paginate.path + '?page=' + nextPath
        this.$store.dispatch('areas/OTHER_PRE',accessPath)
      }
    },
    async search(form){
      this.$store.dispatch('areas/SEARCH_DATA',form)
    }
  },
  computed:{
    count(){
      if(this.prefectures.length>10){
        return this.paginate.perpage
      }
      return this.prefectures.length
    },
    ...mapGetters('areas',['prefectures',
    'paginate'])
  }
}
</script>

<style lang="scss">
.container {
  padding: 5rem 10rem;
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
.renderBtn{
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
}
.addBtn{
  background: red;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px blue;
}
</style>
