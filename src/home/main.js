import User from "./../components/user"
import List from "./../components/list"
import Edite from "./../components/edite"
import { useState, useEffect } from "react"
import { firestore } from "../firebase/firebaseConfigfirestore"
import { storage } from "../firebase/firebaseConfigstorage"
import {onSnapshot, updateDoc, doc, getDocs, collection, addDoc, deleteDoc, getDoc, query, where, orderBy} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

const Main =({logout, userdata})=> {

    const [appdocs, setappdocs] = useState(null)
    const [content, setcontent] = useState(null)
    const [title, settitle] = useState(null)
    const [id, setid] = useState(null)
    const [thereischange, setthereischange] = useState("saved")
    const [load, setload] = useState(null)

    const appdata=async()=>{

        setload("loading")

        if(userdata != null){
            let instant = content
            setcontent("<p><br></p><p><br></p><p><br></p><p><img src='./img/loading.gif'></p>")
            
            const be = await getDocs(query(collection(firestore, "pen_area"), where("userId", "==", userdata.uid)))
            setappdocs(be.docs)
            setthereischange("saved")
            setcontent(instant)
            setload(null)
        }
    }

    useEffect(() => {
        appdata() 
    }, [userdata]);

    const add =async()=>{
        await addDoc(collection(firestore, "pen_area"), {
            title: "new bloc",
            img: "./img/1.jpg",
            userId: userdata.uid,
            data: ""
        }).then(() => {
            setid(null)
            appdata()
        })

    }

    const updelete=async(id)=>{
        await deleteDoc(doc(firestore, "pen_area", id)).then(() => {
            setid(null)
            appdata()
        })
    }

    const upimg=async(img, val)=>{

        const refs = ref(storage, `/pen_area_img/${val}`)
        uploadBytes(refs, img).then(() => {
            getDownloadURL(refs).then(async(url) => {
                await updateDoc(doc(firestore, "pen_area", val), {
                    img: url
                }).then(() => {
                    setid(val)
                    appdata()
                })
            })
        })
    }

    const newvision=async(id)=>{
        setid(id)
        
        setcontent(appdocs.find(item => item.id == id).data().data)
        settitle(appdocs.find(item => item.id == id).data().title)
    }

    const save=async()=>{
        await updateDoc(doc(firestore, "pen_area", id), {
            data: content,
            title: title,
        }).then(() => {
            appdata()
        })
    }


    return(
        <div className="w-screen h-screen darkone flex flex-row">
            <div className="flex-1 flex flex-col">
                <div className="w-full h-1/6">
                    <User thereischange={thereischange} title={title} settitle={(e)=>{settitle(e); setthereischange("updated")}} save={save} show={id} userdata={userdata} logout={()=>{logout()}}/>
                </div>
                <div className="w-full h-5/6">
                    <List appdocs={appdocs} add={()=>{add()}} updelete={e=>{updelete(e)}} upimg={(x, y)=>{upimg(x, y)}} newvision={(x)=>{newvision(x)}}  />
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="w-full h-full">
                    <Edite content={content} load={load} setcontent={(e)=>{setcontent(e); setthereischange("update")}} show={id} />
                </div>
            </div>
        </div>
    )
}

export default Main