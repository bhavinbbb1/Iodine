import careersPage from '../pages/careersPage';
import homePage from '../pages/homePage'
import jobPage from '../pages/jobPage'

describe('Desktop View Iodine Apply Job Verifications', () => {
  let data: { [key: string]: string };
  before(()=>{
    cy.fixture('applyjob').then(function (applyjob) {
      data = applyjob
    });
  })
  
  beforeEach(()=>{
    cy.visit('/');
    cy.url().should('include', data.urlStr);
    cy.viewport(1920, 1080); //view port size for desktop
  }
  );

  it('Verification for Job Application of Software Development Engineer in Test', () => {
    homePage.clickCareers();
    cy.url().should('include', data.careersStrUrl);
    cy.contains(data.careerMatch).should('be.visible');
    careersPage.clickJobTitle(data.SDETJob);
    jobPage.clickApplyForThisPosition();
    jobPage.clickContinue();
    jobPage.fillGenderEthnicity(data.gender, data.race);
    jobPage.fillVeteranStatus(data.veteranStatus);
    jobPage.fillDisabilityForm(data.disability, data.firstName, data.lastName);
    jobPage.fillPersonalInformation(data.firstName, data.lastName, data.email);
    jobPage.validateWrongEmail(data.email);
  });

});
