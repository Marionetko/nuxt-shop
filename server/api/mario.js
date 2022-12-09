export default defineEventHandler(async (event) => {

  // query params
  // const { name } = getQuery(event)

  // post data
  // const { age } = await readBody(event)

  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=Gx8kX0Hx6mu6GspLV4DgR83ETLFgQVNBNthiz3F6')

  // return {
  //   message: `Hello ${name}! You are ${age} years old.`
  // }

  return data

})