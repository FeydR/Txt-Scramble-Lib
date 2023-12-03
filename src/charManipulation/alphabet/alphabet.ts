

export class CharModel {
    character: string;
    altChars: string[];

    static getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    deriveLargestPossibleIndex(): number {
        return this.altChars.length - 1;
    }

    constructor(charInput: string, altCharInput: string[]) {
        this.character = charInput;
        this.altChars = altCharInput;
    }  
    
    getRandomAltChar(): string {
        const greatestPossibleIndex = this.deriveLargestPossibleIndex()      
        const r = CharModel.getRandomIntInclusive(0, greatestPossibleIndex);
        return this.altChars[r];
    }
}


export class CharManager {
    static CHAR_SERIES: CharModel[] = [
        new CharModel("a", ["Å", "à", "â", "Λ"]),
        new CharModel("b", ["Ь", "Ъ", "б"]),
        new CharModel("c", ["ç"]),
        new CharModel("d", ["d"]),
        new CharModel("e", ["Ξ", "ε", "Σ"]),
        new CharModel("f", ["f"]),
        new CharModel("g", ["ğ"]),
        new CharModel("h", ["h"]),
        new CharModel("i", ["і"]),
        new CharModel("j", ["j"]),
        new CharModel("k", ["к"]),
        new CharModel("l", ["L", "Ł"]),
        new CharModel("m", ["Μ"]),
        new CharModel("n", ["И", "η"]),
        new CharModel("o", ["Ѳ", "Ф"]),
        new CharModel("p", ["р", "ρ"]),
        new CharModel("q", ["q"]),
        new CharModel("r", ["Я", "я"]),
        new CharModel("s", ["ş", "ѕ"]),
        new CharModel("t", ["τ"]),
        new CharModel("u", ["ü", "μ", "Ц"]),
        new CharModel("v", ["ν", "ѵ"]),
        new CharModel("w", ["Ш", "ш"]),
        new CharModel("x", ["х", "Ж"]),
        new CharModel("y", ["У", "у", "γ"]),
        new CharModel("z", ["z", "Ż", "ż", "Ź", "ż"])
    ]

    static convertToAltChars(strInput: string): string {
        return CharManager.createAlternativeString(
            CharManager.convertToCharModels(strInput)
        )
    }

    static createAlternativeString(charModels: CharModel[]): string {
        let altMsg = ""
        charModels.forEach(cm => {
            cm.getRandomAltChar()

            altMsg += cm.getRandomAltChar()
        })

        return altMsg;
    }

    static findModel(charInput: string): CharModel {
        let foundModel = null;
        CharManager.CHAR_SERIES.forEach(cm => {            
            if (cm.character === charInput) {
                foundModel = cm;                                
            }
        });

        if (foundModel === null) {
            foundModel = new CharModel(charInput, [charInput]);
        }

        return foundModel;
    }

    static convertToCharModels(strInput: string): CharModel[] {
        let matchedCharModles: CharModel[] = []
        strInput.toLowerCase().split("").forEach(c => {
            matchedCharModles.push(CharManager.findModel(c)) 
        });

        return matchedCharModles;
    }

}
