const List =({appdocs, add, updelete, upimg, newvision})=> {

    return(
        <div className="h-full notop w-full p-4">
            <div className="p-1 h-full w-full rounded-lg darktwo shadow-lg overflow-y-auto flex flex-wrap">
                        <div onClick={()=>{add()}} className="bordershow w-for-3 flex items-center justify-center p-1 m-1 h-1/3 rounded-lg darkone flex flex-col">
                            <img src="/icon/plus.png" style={{height: "45px", width: "45px"}}/>
                        </div>
                {
                    appdocs && appdocs.map((val, index) => {
                        return(
                            <div style={((appdocs.length >= 3 && appdocs.length<=5) && (index >= 2 && index <= 4)? {marginTop: "-25%"}: null)} onClick={() => {newvision(val.id)}} className="w-for-3 p-1 m-1 h-1/3 rounded-lg darkone flex flex-col">
                                <input onChange={(e)=>{upimg(e.target.files[0], val.id)}} type="file" id={val.id} hidden/>
                                <label for={val.id} className="w-full h-5/6 rounded-lg">
                                    <div style={{backgroundImage: `url(${val.data().img})`}}  className="w-full h-hull bg-red-200 h-full rounded-lg bg-cover bg-center" ></div>
                                </label>
                                <div className=" w-full justify-between flex items-center p-1 h-2/6 rounded-lg flex items-center flex-row">
                                    <p className="bg-transparent h-4/6 w-5/6 text-white text-md text-bold font1" >{val.data().title}</p>
                                    <div onClick={()=>{updelete(val.id)}} className="logout h-8 w-8 rounded-lg flex justify-center  items-center text-main-bg">
                                        <img src="./icon/delete.png" />
                                    </div> 
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List