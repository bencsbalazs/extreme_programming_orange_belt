import { expect } from "chai";
import { limit } from "../lib/index.js";

describe('Smaller than', () => {
    it("Should return false if there are not only numbers", ()=>{
        expect(limit([1,"a","b"])).equal(false);
    });

    it("Should return false if not array is given", ()=>{
        expect(limit("a")).equal(false);
    });

    it("should return error if limit is not number", ()=>{
        expect(limit([1,2,3],"a")).equal("Error");
    });
});
