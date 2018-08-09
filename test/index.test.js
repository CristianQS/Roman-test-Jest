import { romanNumbersCoverter } from "../src";

describe("Roman numbers", () => {
    test("Prove units numbers", () => {
        expect(romanNumbersCoverter(1)).toBe("I");
        expect(romanNumbersCoverter(3)).toBe("III");
        expect(romanNumbersCoverter(4)).toBe("IV");
        expect(romanNumbersCoverter(5)).toBe("V");
        expect(romanNumbersCoverter(8)).toBe("VIII");
        expect(romanNumbersCoverter(9)).toBe("IX");

    });
    test("Prove tens numbers", () => {
        expect(romanNumbersCoverter(10)).toBe("X");
        expect(romanNumbersCoverter(30)).toBe("XXX");
        expect(romanNumbersCoverter(40)).toBe("XL");
        expect(romanNumbersCoverter(50)).toBe("L");
        expect(romanNumbersCoverter(80)).toBe("LXXX");
        expect(romanNumbersCoverter(90)).toBe("XC");
    });
    test("Prove hundrens numbers", () => {
        expect(romanNumbersCoverter(100)).toBe("C");
        expect(romanNumbersCoverter(300)).toBe("CCC");
        expect(romanNumbersCoverter(400)).toBe("CD");
        expect(romanNumbersCoverter(500)).toBe("D");
        expect(romanNumbersCoverter(800)).toBe("DCCC");
        expect(romanNumbersCoverter(900)).toBe("CM");
    });
    test("Prove thounsans numbers", () => {
        expect(romanNumbersCoverter(1000)).toBe("M");
        expect(romanNumbersCoverter(3000)).toBe("MMM");
    });

    test("Prove numbers combined", () => {
        expect(romanNumbersCoverter(19)).toBe("XIX");
        expect(romanNumbersCoverter(49)).toBe("XLIX");
        expect(romanNumbersCoverter(449)).toBe("CDXLIX");
        expect(romanNumbersCoverter(1924)).toBe("MCMXXIV");
        expect(romanNumbersCoverter(832)).toBe("DCCCXXXII");
        expect(romanNumbersCoverter(999)).toBe("CMXCIX");
    });
})