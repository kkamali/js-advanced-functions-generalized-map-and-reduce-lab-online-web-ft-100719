function map(source, f) {
  const newArray = []
  for (let i = 0; i < source.length; i++) {
    newArray.push(f(source[i]))
  }
  return newArray
}

function reduce(source, f, starting) {
  let reduced = (!!starting) ? starting : source[0]
  let i = (!!starting) ? 0 : 1
  for (i; i < source.length; i++) {
    reduced = f(source[i], reduced)
  }
  return reduced
}