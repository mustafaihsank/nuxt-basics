//! Use server routes to protect the private key

export default defineEventHandler(async (event) => {
  //   // Handle query params
  //   const { name } = getQuery(event);

  //   // Handle post data
  //   const { age } = await readBody(event);

  //   return {
  //     message: `Hello,${name}! You are ${age} years old!`,
  //   };

  // API call with private key
  const { data } = await $fetch<{ data: any }>(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_47JxmWHGAWgv8Zvnh29kVq13y00oLrg69tsYt9d5&currencies=EUR%2CUSD%2CCAD"
  );
  return data;
});
