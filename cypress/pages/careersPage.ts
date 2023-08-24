import { basePage } from "./basePage";

export class careersPage extends basePage{
    constructor(){
        super();
    }
    elements ={
        jobDescriptionText: 'td[id="gnewtonJobDescriptionText"]',
    }
      
    clickJobTitle(job: string){
        this.baseEle.iframe()
        .contains(job)
        .click({force:true});
        cy.wait(2000)
        this.baseEle.iframe()
        .find(this.elements.jobDescriptionText)
        .should('exist')
    }
}

export default new careersPage();
