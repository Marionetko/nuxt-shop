export default defineEventHandler(async (event) => {

  // query params
  const { name } = getQuery(event)

  // post data
  const { age } = await readBody(event) 

  return {
    message: `Hello ${name}! You are ${age} years old.`
  }

})