export class Register {



    weblocators={

        FirstName : '#input-firstname',
        LastName : '#input-lastname',
        Email : '#input-email',
        Telephone : '#input-telephone',
        Password : '#input-password',
        ConfirmPassword : '#input-confirm',
        Subscribe : "input[value='0']",
        PolicyCheckBox : "input[value='1'][name='agree']",
        ContinueButton : "input[value='Continue']",
        Confirm : "div[id='content'] h1",
        NextPageButtonContinuee : ".btn.btn-primary"

    }


    OpenURL (){

        cy.visit(Cypress.env('URL'));

    }
    enterFirstName (Fname){

        cy.get(this.weblocators.FirstName).type(Fname)

    }
enterLastName (Lname){

        cy.get(this.weblocators.LastName).type(Lname)
        
    }

    enterEmail (email){


        const uemail = `testuser_${Date.now()}@example.com`;
        cy.get(this.weblocators.Email).type(uemail)
        
    }

    enterTelepohone(ph){

        cy.get(this.weblocators.Telephone).type(ph)
        
    }

    enterPassword(password){

        cy.get(this.weblocators.Password).type(password)
        cy.get(this.weblocators.ConfirmPassword).type(password)
        
    }

    enterCheckBox(){

        cy.get(this.weblocators.PolicyCheckBox).check()

       
    }
    enterContinueeButton(){

        cy.get(this.weblocators.ContinueButton).click()

       
    }


    checkConfirmationMessage(){

        cy.get(this.weblocators.Confirm).should('have.text', "Your Account Has Been Created!")

       
    }
    checkContinueeButtonToDashboard(){

        cy.get(this.weblocators.NextPageButtonContinuee).click().title().should("eq", "My Account")

       
    }


}