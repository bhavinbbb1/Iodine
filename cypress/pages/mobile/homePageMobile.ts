import {homePage} from "../homePage";

export class homePageMobile extends homePage{
    constructor(){
        super();
    }
    mobileElements ={
        careers: () =>  cy.get('div[class="mobile-nav-cont-new"]').contains("Careers"),
        company: () => cy.get('div[class="mobile-nav-cont-new"]').should('be.visible').contains("Company"),
        hamburgerBox: () => cy.get('.hamburger-box')
    }
      
    clickCareers(){
        this.mobileElements.hamburgerBox().click();
        this.mobileElements.company().should('be.visible').siblings('.drop-down-arrow').click();
        this.elements.careers()
            .invoke('removeAttr', 'target') //handling tabs in cypress
            .click({force:true}); 
        cy.wait(2000);
    }
}

export default new homePageMobile();
