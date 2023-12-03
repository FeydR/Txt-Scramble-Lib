import { describe, it, expect } from "vitest"


import { scramble }  from "../../src/index";


describe('index test', () => {
    it("scamble function converts plain string", () => {        
        expect(scramble("foobar hello world"))
            .to.be.ok
    });
})
