export default defineEventHandler(async (event) => {

  const { EUR } = event.context.params

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${EUR}&apikey=`

})