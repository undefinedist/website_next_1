import {branch, renderNothing} from 'recompose'

// data에 element 자체가 없으면 hidden
// element가 있는경우는 hidden의 값을 꼭가지도록한다.

const isHidden = ({hidden}) => {
  if (hidden === undefined) {
    return true
  } else {
    return hidden
  }
}

const noDataNoRender = branch(isHidden, renderNothing)

export default noDataNoRender
