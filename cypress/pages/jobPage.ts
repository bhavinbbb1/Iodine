import { basePage } from "./basePage";

export class jobPage extends basePage{
    constructor(){
        super();
    }
    elements ={
        tableCareerHome : 'td[id="gnewtonJobDescriptionBtn"]',
        applySubmitButton: 'div[class*=gnewtonBlueBtn]',
        continueButton: '#gnewton-submit',
        yourName: '#your-name',
        todayDate: '#today-date',
        firstName: '#firstName',
        lastName: '#lastName',
        email: '#email',
        submit: 'button[class*=gnewtonBlueBtn]'
    } 
    clickApplyForThisPosition(){
        this.baseEle.iframe()
        .find(this.elements.tableCareerHome)
        .find(this.elements.applySubmitButton)
        .click({force:true});
        cy.wait(2000);
    }
    fillGenderEthnicity(gender: string, race: string){
        this.baseEle.iframe()
        .find(`input[type=radio][name=gender][id=${gender}]`)
        .click({force: true});
        this.baseEle.iframe()
        .find(`input[type=radio][name=race][id=race-${race}]`)
        .click({force: true});
        this.clickContinue()
    }
    fillVeteranStatus(veteran: string){
        this.baseEle.iframe()
        .find(`input[type=radio][name=veteran][id=${veteran}]`)
        .click({force: true});
        this.clickContinue();
    }
    fillDisabilityForm(disability: string, firstName: string, lastName: string){
        this.baseEle.iframe()
        .find(`input[type=radio][name=disability][id=${disability}]`)
        .click({force: true});
        this.baseEle.iframe()
        .find(this.elements.yourName)
        .type(`${firstName} ${lastName}`)
        this.baseEle.iframe()
        .find(this.elements.todayDate)
        .type(this.selectTodayDate())
        this.clickContinue();
    }
    fillPersonalInformation(firstName: string, lastName: string, email: string){
        this.baseEle.iframe()
        .find(this.elements.firstName)
        .type(firstName);
        this.baseEle.iframe()
        .find(this.elements.lastName)
        .type(lastName);
        this.baseEle.iframe()
        .find(this.elements.email)
        .focus().clear()
        .type(email);
        this.clickSubmitButton();
    }
    clickContinue(){
        this.baseEle.iframe()
        .find(this.elements.continueButton)
        .click({force:true});
        cy.wait(2000);
    }
    clickSubmitButton(){
        this.baseEle.iframe()
        .find(this.elements.submit)
        .click({force:true});
        cy.wait(2000);
        }
    selectTodayDate(): string{
        var date = new Date();
        return date.toISOString().substring(0,10);
    }
    validateWrongEmail(message: string){
        const expected: string = `Please include an \'@\' in the email address. '${message}' is missing an \'@\'.`
        this.baseEle.iframe()
        .find(this.elements.email)
        .invoke('prop', 'validationMessage')
        .should('equal', expected);
    }
}

export default new jobPage();
