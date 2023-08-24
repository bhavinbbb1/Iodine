export class basePage{
    constructor(){
        null;
    }
    baseEle ={
        iframeLocator: 'iframe#gnewtonIframe',
        iframe: () => cy.getIframeBody(this.baseEle.iframeLocator)
    }
}

export default new basePage();
