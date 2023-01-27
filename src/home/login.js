import { auth } from "./../firebase/firebaseConfigauth"
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth"

const login =()=>{

    const google = new GoogleAuthProvider()
    const facebook = new FacebookAuthProvider()
    const twitter = new TwitterAuthProvider()
    const github = new GithubAuthProvider()

    return(
        <div className="w-screen h-screen darkone items-center justify-center flex flex-col">
            <div style={{backgroundImage: "url('./img/login.gif')"}} className="shadow h-1/5 w-2/5 m-3 flex justify-center items-center rounded-lg bg-no-repeat bg-center bg-cover">
                <p className="text-white text-3xl text-bold font3">Join Us</p>
            </div>
                <div onClick={()=>{signInWithPopup(auth, google)}} className="h-16 w-2/5 darktwo m-2 flex justify-center items-center rounded-lg shadow">
                    <div className=" h-full w-1/4 flex justify-center items-center">
                        <img src="./social login/google.png" />
                    </div>
                    <div className="h-full w-3/4 flex justify-top items-center">
                        <p className="text-white text-xl text-bold font2">Gmail</p>
                    </div>
                </div>
                <div onClick={()=>{signInWithPopup(auth, facebook)}} className="h-16 w-2/5 darktwo m-2 flex justify-center items-center rounded-lg shadow">
                    <div className=" h-full w-1/4 flex justify-center items-center">
                        <img src="./social login/facebook.png" />
                    </div>
                    <div className="h-full w-3/4 flex justify-top items-center">
                        <p className="text-white text-xl text-bold font2">Facebook</p>
                    </div>
                </div>
                <div onClick={()=>{signInWithPopup(auth, twitter)}} className="h-16 w-2/5 darktwo m-2 flex justify-center items-center rounded-lg shadow">
                    <div className=" h-full w-1/4 flex justify-center items-center">
                        <img src="./social login/twitter.png" />
                    </div>
                    <div className="h-full w-3/4 flex justify-top items-center">
                        <p className="text-white text-xl text-bold font2">Twitter</p>
                    </div>
                </div>
                <div onClick={()=>{signInWithPopup(auth, github)}} className="h-16 w-2/5 darktwo m-2 flex justify-center items-center rounded-lg shadow">
                    <div className=" h-full w-1/4 flex justify-center items-center">
                        <img src="./social login/github.png" />
                    </div>
                    <div className="h-full w-3/4 flex justify-top items-center">
                        <p className="text-white text-xl text-bold font2">Github</p>
                    </div>
                </div>
        </div>
    )

}

export default login