export default defineEventHandler(async (event) => {
  const params = event.context.params as { code?: string };
  const { code } = params;

  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;
  const { data } = await $fetch<{ data: any }>(uri);

  return data;
});
