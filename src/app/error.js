'use client';
export default function error({ error, reset }){
    return(
    <div>
    <h1>ERROR!!</h1>
    <p>{error?.message}</p>
    <button onClick={() => reset()}>Try Again</button>
  </div>
    )
}