export default function ({ store, redirect,route }) {
    if (!store.state.username) {
      window.localStorage.clear()
      redirect({path:'/login'})
    }
  }