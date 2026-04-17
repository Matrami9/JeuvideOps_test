

describe("Index", () => {
    it("Shows index page", () => {
        cy.visit("/")
        cy.get("body").contains("Welcome to the calculator app!")
    })
})

describe("Addition", () => {
    it("Adds 1 and 1", () => {
        cy.visit("/add?a=1&b=1")
        cy.get("body").contains("1 + 1 = 2")
    })
})

describe("Subtraction", () => {
    it("Subtracts 1 from 1", () => {
        cy.visit("/sub?a=1&b=1")
        cy.get("body").contains("1 - 1 = 0")
    })
})

describe("Multiplication", () => {
    it("Multiplies 1 and 1", () => {
        cy.visit("/mul?a=1&b=1")
        cy.get("body").contains("1 * 1 = 1")
    })
})

describe("Division", () => {
    it("Divides 1 by 1", () => {
        cy.visit("/div?a=1&b=1")
        cy.get("body").contains("1 / 1 = 1")
    })
    it("Show error when trying to divides 42 by 0", () => {
        cy.visit("/div?a=42&b=0")
        cy.get("body").contains("Cannot divide 42 by zero")
    })
})