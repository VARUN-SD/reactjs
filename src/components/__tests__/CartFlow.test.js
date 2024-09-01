import { render } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { fireEvent, screen } from "@testing-library/dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
})

it("Should Load Restaurant Menu component", async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu />
                <Cart/>
            </Provider>
            </BrowserRouter>

             );
    });
    const accordianHeader =screen.getByText("Pot Rice (3)");
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument();//before adding items

    const addToCartButton=screen.getAllByRole("button",{name:"ADD"});
    fireEvent.click(addToCartButton[0]);
    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument(); //after adding one item

    fireEvent.click(addToCartButton[1]);
    expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument(); //after adding another item
    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(3); //after clearing cart
    expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument(); //after clearing cart
    expect(screen.getByText("Cart is Empty. Add items to the Cart!")).toBeInTheDocument(); //after clearing cart

});