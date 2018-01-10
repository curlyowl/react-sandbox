export default function (state=[], action) {
  switch (action.type) {
    case 'FINISH_PROJECT':
      console.log('finish project');
      return state;
    default:
      return state;
  }
}
