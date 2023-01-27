const User =({logout,userdata, show, save, title, settitle, thereischange})=> {

    return(
        <div className="h-full w-full p-4">
            <div className="h-full w-full rounded-lg darktwo shadow-lg flex flex-row">
                <div className="h-full w-1/5 flex justify-center  items-center">
                    <div style={{backgroundImage: `url(${userdata && userdata.photoURL})`}} className="border-4 border-main-col bg-blue-100 h-16 w-16 rounded-full bg-no-repeat bg-center bg-cover "></div>
                </div>
                <div className="h-full w-2/5 flex justify-center flex-col">
                    <p className="text-white text-lg text-bold font4 text-main-col">{(userdata && userdata.displayName)}</p>
                </div>
                <div className="p-2 h-full w-3/5 flex justify-top  items-center">
                    <input className="bg-transparent bordershow2 rounded-lg h-12 p-1 m-1 w-3/5 text-white text-md text-bold font1" placeholder="Choose your book " onChange={(e)=>{settitle(e.target.value)}} value={(show != null? title: "")} />
                    <div onClick={()=>{save()}} className={`${(thereischange == "saved" || show == null? "text-notmain-bg": "text-main-bg")} logout m-1 h-12 w-12 rounded-lg flex justify-center  items-center`}>
                        <img src="./icon/update.png" />
                    </div>
                    <div onClick={()=>{logout()}} className="m-1 logout bg-blue-200 h-12 w-12 rounded-lg flex justify-center  items-center text-main-bg">
                        <img src="./icon/logout.png" />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default User