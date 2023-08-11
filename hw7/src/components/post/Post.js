
import { useDispatch, useSelector } from 'react-redux'
import '../../index.css'
import postsReducer, { setForBody } from '../../store/PostsSlice'



export default function Post({ postInfo }) {
  const { forBody } = useSelector(state => state.postsReducer)
  const dispatch = useDispatch()


  return (
    <div className='postCard'>
      <h1>{postInfo.title}</h1>
      <button onClick={() => dispatch(setForBody(postInfo.id))}> more info</button>
      <p>
        {forBody === postInfo.id

          ? <div>
            {postInfo.body}
          </div>
          : '-------------------'
        }
      </p>
    </div>
  )
}