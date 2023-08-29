import { basePage } from "./basePage";

export class homePage extends basePage{
    constructor(){
        super();
    }
    elements ={
        careers: () => cy.get('ul[id="menu-main-menu-new"]').contains("Careers"),
        company: () => cy.get('ul[id="menu-main-menu-new"]').contains("Company"),
        jobTitle: () => cy.get('table[id="gnewtonCareerHome"]'),
        jobDesText: 'td[id="gnewtonJobDescriptionText"]'
    }
      
    clickCareers(){
        this.elements.company().should('be.visible').trigger('mouseover').then(() => {
            this.elements.careers()
            .invoke('removeAttr', 'target') //handling tabs in cypress
            .click({force:true}); 
            cy.wait(2000);
        });
    }
    clickJobTitle(job: string){
        this.baseEle.iframe()
        .contains(job)
        .click({force:true});
        this.baseEle.iframeWithSub(this.elements.jobDesText)
        .find(this.elements.jobDesText)
        .should('exist')
    }
}

export default new homePage();
