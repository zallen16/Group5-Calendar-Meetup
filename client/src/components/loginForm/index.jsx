const Login =()=>(
<div class="max-w-[280px] mx-auto">
        <div class="flex flex-col items-center mt-[10vh]">
            <h2 class="mb-5 text-gray-900 font-mono font-bold text-xl">Log In</h2>
            <form>
                <input type="text" class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Email"/>
                <input type="password" class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password" />
                <button class="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Log In</button>
            </form>
            <p class="text-center mt-3 text-[14px]">Don&#x27;t have an account? 
                <a href="/signup" class="text-gray-600">Create one</a>
            </p>
        </div>
    </div>
)

export default Login;