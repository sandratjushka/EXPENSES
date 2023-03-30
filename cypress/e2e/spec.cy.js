describe('Expenses App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it("can find elements", () => {
    cy.get(".expense-item") .should ('have.length', 2)
    cy.get(".expense-item h2") .first() .should( 'have.text', "Kass")
    cy.get(".expense-item h2") .last() .should
    ("contain.text", "Elevant")
  })
  it('should filter elements',() => {
    cy.get(".expenses-filter select").select(1)
    cy.get(".expense-item") .should ("have.length", 2)
  })
  it('should add expense',() => {
    cy.contains("Add Expense").click()
    cy.get('form input[type="text"]')
        .type("Mamps")
    cy.get('form input[type="number"]')
        .type("69")
    cy.get('form input[type="date"]')
        .type("2023-05-05")
    cy.get('button[type="submit"]').click()
    cy.get(".expense-item") .should ("have.length", 3)
  })
})
