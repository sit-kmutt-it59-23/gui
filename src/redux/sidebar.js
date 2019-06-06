const INFER_TOGGLE = 'INFER_TOGGLE'
const OFFER_TOGGLE = 'OFFER_TOGGLE'
const ABOUTCLUB_TOGGLE = 'ABOUTCLUB_TOGGLE'
const LINK_ACTIVE = 'LINK_ACTIVE'

const initState = {
  infer: false,
  offer: false,
  aboutclub: false,
  link_active:"",
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INFER_TOGGLE:
      return {
        ...state,
        infer: !state.infer,
      }
    case OFFER_TOGGLE:
      return {
        ...state,
        offer: !state.offer,
      }
    case ABOUTCLUB_TOGGLE:
      return {
        ...state,
        aboutclub: !state.aboutclub,
      }
    case LINK_ACTIVE:
        return {
        ...state,
        link_active: action.id,
        }
    default:
      return state
  }
}

const inferToggle = () => ({
  type: INFER_TOGGLE,
})

const offerToggle = () => ({
    type: OFFER_TOGGLE,
})

const aboutClubToggle = () => ({
    type: ABOUTCLUB_TOGGLE,
})

const linkActive = (id) => ({
    type: LINK_ACTIVE, id
})

export default reducer
export {
  inferToggle,
  offerToggle,
  aboutClubToggle,
  linkActive
}