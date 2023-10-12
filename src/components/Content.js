import React from 'react'

export default function Content(props) {
  return (
    <>
    <div className='col-md-9 Content'>
        <h1>{props.data}</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KDjmKFjxXt0?si=R5W2vc5VWZa2_rVj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
    </div>
    </>
  )
}
