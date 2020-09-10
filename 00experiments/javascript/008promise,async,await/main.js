axios.get('https://www.yebalja.com/api/json/something')
axios.get('https://www.zerocho.com/api/json/something')
  .then((result) => {
    console.log(result);
    console.log(result.data);
  })
  .catch((error) => {
    console.error(error);
  })

(async () => {
  try {
    const result = await axios.get('https://www.yebalja.com/api/json/something');
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
})