import careersPageMobile from '../pages/mobile/careersPageMobile';
import homePageMobile from '../pages/mobile/homePageMobile'
import jobPageMobile from '../pages/mobile/jobPageMobile'

describe('Mobile View Iodine Apply Job Verifications', () => {
  let data: { [key: string]: string };
  before(()=>{
    cy.fixture('applyjob').then(function (applyjob) {
      data = applyjob
    });
  })
  
  beforeEach(()=>{
    cy.visit('/');
    cy.url().should('include', data.urlStr);
    cy.viewport(600, 750); //view port size for mobile
  }
  );

  it('Mobile View Verification for Job Application of Software Development Engineer in Test', () => {
    homePageMobile.clickCareers();
    cy.url().should('include', data.careersStrUrl);
    cy.contains(data.careerMatch).should('be.visible');
    careersPageMobile.clickJobTitle(data.SDETJob);
    jobPageMobile.clickApplyForThisPosition();
    jobPageMobile.clickContinue();
    jobPageMobile.fillGenderEthnicity(data.gender, data.race);
    jobPageMobile.fillVeteranStatus(data.veteranStatus);
    jobPageMobile.fillDisabilityForm(data.disability, data.firstName, data.lastName);
    jobPageMobile.fillPersonalInformation(data.firstName, data.lastName, data.email);
    jobPageMobile.validateWrongEmail(data.email);
  });

});
