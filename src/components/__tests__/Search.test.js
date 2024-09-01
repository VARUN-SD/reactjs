import { render } from "@testing-library/react";
import Body from "../Body";
import { fireEvent, screen } from "@testing-library/dom";
import MOCK_DATA from "../mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "@testing-library/react";


//mock fetch function
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    });
});


//Testing Search Feature
it("Should Search Res List for Cafe Input",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>    //body has Link so,BrowserRouter used
                <Body/>
            </BrowserRouter>
        )); 
        
        const cardsBeforeSearch=screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(8);

        const searchBtn=screen.getByRole("button",{name:"Search"});

        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput,{target:{value:"Cafe"}});
        fireEvent.click(searchBtn);

        const cardsAfterSearch=screen.getAllByTestId("resCard");
        expect(cardsAfterSearch.length).toBe(1);
});


//Testing Top Rated Restaurants Feature
it("Should render Top Rated Restaurants on click",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    });
    const cardsBeforeFilter=screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn=screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);
    
    const cardsAfterFilter=screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(7); //only top rated restaurants are shown
});

// it("Should render Username on click",async()=>{
//     await act(async()=>{
//         render(
//             <BrowserRouter>
//                 <Body/>
//             </BrowserRouter>
//         )
//     });
//     const username=screen.getByTestId("username");
//     expect(username).toBeInTheDocument();
//     fireEvent.change(username,{target:{value:"Dara Varun"}});
//     expect(screen.getByTestId("user")).toHaveTextContent("Dara Varun");

// });