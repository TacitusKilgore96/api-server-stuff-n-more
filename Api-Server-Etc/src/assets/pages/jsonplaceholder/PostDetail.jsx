import React from 'react'
import { Link, useParams } from 'react-router'

const PostDetail = () => {

    const {postId} = useParams()
  return (
    <div>
        <h2>{p-title}</h2>
        <Link to={'/postdetail/${ p.id}'}>Læs mere ...</Link>
    </div>
  )
}

export default PostDetail
