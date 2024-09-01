import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Body from "../Body";

it("should render Header component with login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
   const loginButton=screen.getByRole("button",{name:"Login"}); //to select specific button from all buttons ,we specify name here
   //const loginButton=screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});

it("should render Header component with cart items 0", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
   const cartItems=screen.getByText("Cart-(0 items)");// text should be same  else test fails
    expect(cartItems).toBeInTheDocument();
});

it("should render Header component with Cart text", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
   const cartItems=screen.getByText(/Cart/);//  /Cart/ is a regex(checks for Cart text)
    expect(cartItems).toBeInTheDocument();
});

it("should change Login button to Logout on click", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
   const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);//loginButton
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();//loginButton on click=>logoutButton
    fireEvent.click(logoutButton);
    const loginButtonAfterLogout=screen.getByRole("button",{name:"Login"});
    expect(loginButtonAfterLogout).toBeInTheDocument();//logoutButton on click=>login button
});

it("Should check online status of user",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
    const onlinestatus=screen.getByTestId("online")
    expect(onlinestatus).toBeInTheDocument();
    fireEvent(window,new Event("online"));
    expect(onlinestatus).toHaveTextContent("📶");
    fireEvent(window,new Event("offline"));
    expect(onlinestatus).toHaveTextContent("🚫");
});
