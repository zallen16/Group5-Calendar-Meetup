const Login =()=>(
<div className="max-w-[280px] mx-auto">
        <div className="flex flex-col items-center mt-[10vh]">
            <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">Log In</h2>
            <form>
                <input type="text" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Email"/>
                <input type="password" className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password" />
                <input type="submit" value="Login" className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"></input>
            </form>
            <p className="text-center mt-3 text-[14px]">Don&#x27;t have an account? 
                <a href="/signup" className="text-gray-600"> Create one</a>

            </p>
        </div>
    </div>
)

export default Login;