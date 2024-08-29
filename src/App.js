import React, { lazy, Suspense, useState ,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'; 
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


const Grocery=lazy(()=>import('./components/Grocery'));

const Contact = lazy(()=>import('./components/Contact'));

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
