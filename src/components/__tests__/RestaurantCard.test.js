import { render } from "@testing-library/react";
import { RestaurantCard,withOfferLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
it("Should render the RestaurantCard with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const card=screen.getByText("Domino's Pizza");
    expect(card).toBeInTheDocument();
});

// it("Should render the RestaurantCard with offer label",()=>{
//     //Homework-test HOC-offer label
//     render(<withOfferLabel resData={RestaurantCard}/>);
//     const offerLabel=screen.getByText("₹150 OFF");
//     expect(offerLabel).toBeInTheDocument();
// });
