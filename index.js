var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, recipes, {key: value})
  return object
}
