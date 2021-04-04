export default function ({ store, redirect }) {
    if (!store.state.username) {
      return redirect('/login')
    }
  }