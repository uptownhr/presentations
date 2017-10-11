export default ({store, redirect}) => {
  if (store.state.current_user.loggedIn) return

  redirect('/login')
}
