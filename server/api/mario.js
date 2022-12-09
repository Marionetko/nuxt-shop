export default defineEventHandler((event) => {

  // query params
  const { name } = getQuery(event)

  return {
    message: `Hello ${name}!`
  }

})