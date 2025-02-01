import { Register } from "../../Pages/RegisterPage"
import registerData from '../../fixtures/RegisterData.json'

const RegisterObj = new Register()


describe('Registar', ()=>{

it('Registaer Flow', ()=>{

RegisterObj.OpenURL()
RegisterObj.enterFirstName(registerData.FirstName)
RegisterObj.enterLastName(registerData.LastName)
RegisterObj.enterEmail(registerData.email)
RegisterObj.enterTelepohone(registerData.Telephone)
RegisterObj.enterPassword(registerData.Password)
RegisterObj.enterCheckBox()
RegisterObj.enterContinueeButton()
cy.wait(3000)
RegisterObj.checkConfirmationMessage()
cy.wait(3000)
RegisterObj.checkContinueeButtonToDashboard()

})

})