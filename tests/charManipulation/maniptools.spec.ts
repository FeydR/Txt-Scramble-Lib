import { describe, it, expect } from "vitest";

import convertStringToAltCharacters from "../../src/utils/manip-tools";


describe('Character Manipulation Tests', () => {
    it("maniptools primary converter function", () => {
        const msg = convertStringToAltCharacters("freedom to communicate");        
        expect(msg).to.be.ok
        expect(msg.length).to.eql(22);
    });
});
