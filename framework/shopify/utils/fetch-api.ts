type FetchParams = {
  query: string
}

async function fetchApi({ query }: FetchParams) {
  const url = `http://localhost:4000/graphql`
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
      query
    })
  })

  const { data, errors } = await res.json()
  
  if (errors) {
    // ??: is checking if left hand expression is null or undefined -> if it is go with the right expression 
    // ||: is checking if left hand expression is null, undefined, "", false or 0 -> if it is go with the right expression
    throw new Error(errors[0].message ?? errors.message)
  } 
  return { data }
}

export default fetchApi