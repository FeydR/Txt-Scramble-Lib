import { describe, it, expect } from "vitest";



import { CharModel, CharManager } from "../../src/charManipulation/alphabet/alphabet";


describe('CHarModel tests', () => {
    it("CharModel can get a random AltChar", () => {
        const A_CHAR_MODEL =  new CharModel("a", ["Å", "à", "â", "Λ"]);
        expect(A_CHAR_MODEL.getRandomAltChar()).to.be.ok;        
    });

    // xit("getLargestPossibleIndex() can provide valid largest index", () => {
    //     expect.fail("WRITE TEST FOR GETTING LARGEST POSSIBLE INDEX");
    // });
})


describe('CharManager Test', () => {
    it("access CHAR Model Series", () => {
        expect(CharManager.CHAR_SERIES[0].character).to.eql("a");
    });

    it("findModel can find known characters", () => {
        expect(CharManager.findModel('a').character).to.eql("a");
        expect(CharManager.findModel('b').character).to.eql("b");
        
        expect(CharManager.findModel('a').altChars).to.eql(["Å", "à", "â", "Λ"]);
        expect(CharManager.findModel('b').altChars).to.eql(["Ь", "Ъ", "б"]);        
    })
    
    it("findModel return a default CharModel if char doesnt exist", () => {
        expect(CharManager.findModel('•').character).to.eql("•");
        expect(CharManager.findModel('•').altChars).to.eql(["•"]);
    });

    it("convert a string of chars to CharModels", () => {
        const msg = "hello";
        const derivedCharModels = CharManager.convertToCharModels(msg);

        expect(derivedCharModels[0]).to.eql(CharManager.CHAR_SERIES[7])
        expect(derivedCharModels).to.be.ok;
    });

    it("create Alt Msg", () => {
        const msg = "hello";
        const derivedCharModels = CharManager.convertToCharModels(msg);
        const altMsg = CharManager.createAlternativeString(derivedCharModels);
        expect(altMsg).to.be.ok;
    });

    it("convertToAltChars primary function", () => {
        const msg = CharManager.convertToAltChars("Foo Bar Wtf");
        const O_CHAR_MODEL =  new CharModel("o", ["Ѳ", "Ф"]);
        const o_alt_char = msg.split("")[1];

        expect(msg).to.be.ok
        expect(O_CHAR_MODEL.altChars.includes(o_alt_char)).to.be.true;

    });


    describe('Random Functionality Tests', () => {
        it("expects no values beyond the upper-end value", () => {
            const randomNumberSeries: number[] = [];
            let possibleError: Error | null = null;     

            for (let i = 1; i <= 10; i++) {
                randomNumberSeries.push(CharModel.getRandomIntInclusive(0, 1));
            }          
                
            randomNumberSeries.forEach(n => {
                if (n > 1) {
                    possibleError = new Error("Random number is too great!");                        
                }
            });

            expect(() => {
                if (possibleError) {
                    throw possibleError
                }
            }).to.not.throw();
        })

        it("expects no values below the lower-end value", () => {
            const randomNumberSeries: number[] = [];
            let possibleError: Error | null = null;  
            for (let i = 1; i <= 10; i++) {
                randomNumberSeries.push(CharModel.getRandomIntInclusive(0, 1));
            }   
            
            randomNumberSeries.forEach(n => {
                if (n < 0) {
                    possibleError = new Error("Random number is too small!");
                }
            });

            expect(() => {
                if (possibleError) {
                    throw possibleError
                }
            }).to.not.throw();
        });

        it("get the largest possible index for given altchar", () => {
            const K_CHARS = new CharModel("k", ["к"]);
            const L_CHARS: CharModel = new CharModel("l", ["L", "Ł"]);

            expect(K_CHARS.deriveLargestPossibleIndex()).to.eql(0);
            expect(L_CHARS.deriveLargestPossibleIndex()).to.eql(1);
        });

        it("get bunch of random numbers", () => {
            const random_L_char_Series: string[] = [];
            const L_CHARS: CharModel = new CharModel("l", ["L", "Ł"]);
            for (let i = 1; i <= 10; i++) {
                random_L_char_Series.push(L_CHARS.getRandomAltChar());
            }

            expect(random_L_char_Series).to.include("L");
            expect(random_L_char_Series).to.include("Ł");
        });


    });

});
