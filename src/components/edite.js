import ReactQuill from 'react-quill'
import "./../styles/quill.css"

const Edite =({content, setcontent, show, load})=>{

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'link', 'image'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{ 'align': [] }],
            [{ 'color': ["white","#FF4B4B","#ff8f42","#ffc730","#f6ff56","#a4ff4f","#18ff74","#18ff74","#00d672","#3cffec","#61c3ff","#5a87ff","#8453e3","#c26eff", "#fb89fb", "#ffffff00" ] }, { 'background': ["white","#FF4B4B","#ff8f42","#ffc730","#f6ff56","#a4ff4f","#18ff74","#18ff74","#00d672","#3cffec","#61c3ff","#5a87ff","#8453e3","#c26eff", "#fb89fb",  "#ffffff00" ] }],
        ],
    }

    return (
        <div className="h-full noright w-full p-4">
            <div style={{fontFamily: "f2"}} className="flex items-center justify-center p-1 h-full w-full rounded-lg darktwo shadow-lg overflow-y-auto flex flex-wrap">
                <ReactQuill onChange={(e)=>{setcontent(e)}} value={(show != null || load == "loading"? content: "")} modules={modules} placeholder={'Tap Something'}/>
            </div>
        </div>
    )
}

export default Edite