export const state = () => ({
  current_user: {
    loggedIn: false,
    username: null
  },

  nav: {
    mobile_active: false
  }
})

export const mutations = {
  toggle_mobile_nav (state, bool) {
    state.nav.mobile_active = !state.nav.mobile_active
  }
}
