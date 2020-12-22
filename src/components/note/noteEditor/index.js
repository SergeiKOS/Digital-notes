import {useParams} from 'react-router-dom'
import NoteTitle from './noteTitle/NoteTitle'
import Quill from './quill/Quill'

const NoteEditor = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div>
      {/* <NoteTitle/>
      <Quill/> */}
    </div>
  )
}

export default NoteEditor
