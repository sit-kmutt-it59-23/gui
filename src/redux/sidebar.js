const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'
const SUBMENU_KEYS = 'SUBMENU_KEYS'
const SELECT_KEY = 'SELECT_KEYS'

const initState = {
  sidebar: true,
  submenukeys: [],
  selectedkey: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebar: !state.sidebar,
      }
    case SELECT_KEY:
      return  {
        ...state,
        selectedkey: action.key
      }
    case SUBMENU_KEYS:
        let result = []
        let check = false
        if(state.submenukeys.length === 0){
          result.push(action.key)
        }else{
          state.submenukeys.forEach((key, idx, array) => {
            if(key !== action.key){
              result.push(key)
              if (idx === array.length - 1){ 
                check = true
              }
            }
          })
          if(check){
            result.push(action.key)
          }
        }
      return {
        ...state,
        submenukeys : result
      }
    default:
      return state
  }
}

const sidebarToggle = () => ({
  type: SIDEBAR_TOGGLE,
})

const changeSubMenuKeys = (key) => ({
  type: SUBMENU_KEYS, key
})

const changeSelectedKey = (key) => ({
    type: SELECT_KEY, key
})

export default reducer
export { sidebarToggle, changeSelectedKey, changeSubMenuKeys }