import { sum } from "../sum"

test("Calculate the Sum",()=>{
    const result=sum(3,4);
    expect(result).toBe(7);//Assertion(expected statement)
});