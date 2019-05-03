export const state=()=>({
  prefectures:"",
  paginate:""
})

export const getters = {
  prefectures:state => state.prefectures,
  paginate:state => state.paginate,
}

export const mutations={
  areaLoaded(state, payload) {
    state.prefectures = payload.data
    state.paginate = payload.meta
  },
  clearData(state){
    state.prefectures = []
  }
}

export const actions={
  async CREATE_DATA({commit},data){
    await this.$axios.$post('/mst_prefecres',data)
  },
  async FETCH_DATA({ commit }){
    const payload = await this.$axios.$get('/mst_prefecres'
    )
      commit('areaLoaded', payload)
    },
    async SEARCH_DATA({ commit },data){

      const payload = await this.$axios.$post('/mst_prefecres/search',data)
      if(payload.data.length==0){
        return alert('データが存在しません')
      }
        commit('areaLoaded', payload)
      },
  async OTHER_PRE({commit},accessPath){
    const payload = await this.$axios.$post(accessPath)
    commit('clearData')
    commit('areaLoaded',payload)
  }
}
