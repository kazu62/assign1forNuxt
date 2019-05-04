export default function({ $axios, store, redirect }) {
  $axios.onError(error => {
    //formエラー時の処理
    if (error.response.status === 422) {
      store.dispatch('validation/setErrors', error.response.data.errors)
    }
    return Promise.reject(error)
  })
  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors')
  })
}
