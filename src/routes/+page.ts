//The statement below is setting an async await to fetch a promise
export async function load({ fetch }) {
  //res in the case of the below stands for response. Its hitting the Syntax api to get JSON for the most recent episode
  const res = await fetch('https://syntax.fm/api/shows/latest')
  //the below is setting data as a property to hold the json for the above api call
  const data = await res.json()
  
  return {
    latest_episode: data
  }
}