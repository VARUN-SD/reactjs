import { render } from "@testing-library/react";
import Contact from "../Contact";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";


    //descibe is for grouping test cases
describe("Contact Us page test cases",()=>{ 
    // beforeAll(()=>{
    //     console.log("this executes before all tests")
    // });
    
    // afterAll(()=>{
    //     console.log("this executes after all tests")
    // });
    
    // beforeEach(()=>{
    //     console.log("this executes before each test")
    // });
    
    // afterEach(()=>{
    //     console.log("this executes after each test")
    // });
    
    it("Should Load Contact Us Component",()=>{  //test or it( both are same)
        render(<Contact/>);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        //console.log(heading);  //it returns a react element in form of array
    });
    
    it("Should Load button inside Contact Us Component",()=>{
        render(<Contact/>);
        const button=screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    
    it("Should Load 2 input boxes inside Contact Us Component",()=>{
        render(<Contact/>);
        const inputBoxes=screen.getAllByRole("textbox");//multipe items=>so,getAllByRole
        expect(inputBoxes.length).toBe(2);
    });
});
