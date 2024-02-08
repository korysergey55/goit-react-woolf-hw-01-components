const createRandomColor = () => {
  let colors = []
  for (let i = 0; i < 3; i++) {
    colors.push(Math.round(Math.random() * (255 - 0) + 0))
  }
  return colors
}
export default createRandomColor