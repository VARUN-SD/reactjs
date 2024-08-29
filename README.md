#namaste react


#parcel
-Dev Build
-Local Server
-HMR=Hot Module Replacement
-File Watching Algorithm written in C++
-Caching -Faster builds
-Image Optimization
-Minification
-Bundling
-Compressing files
-Consistent Hashing
-Code Splitting 
-Differential Bundling to support older browsers too
-Diagnostics
-Tree Shaking-remove unused code
const Applayout=()=>{

    const [userName,setuserName]=useState();

    useEffect(()=>{
        const data={
            name:"Dara Varun",
        }
        setuserName(data.name);
    },[]);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setuserName }}>
            <div className='app'>
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
    )
};

const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<Applayout/>,
    children:[{
        path:"/",
        element:<Body/>
    },{
        path:"/about",
        element:<About/>
    },{
        path:"/contact",
        element:<Suspense fallback={<h1>Wait Brother...</h1>}><Contact/></Suspense>,
    },{
        path:"/grocery",
        element:<Suspense fallback={<h1>Wait Brother...</h1>}><Grocery/></Suspense>,
    },{
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
    },{
        path:"/cart",
        element:<Cart/>
    }],
    errorElement:<Error/>
},
]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
