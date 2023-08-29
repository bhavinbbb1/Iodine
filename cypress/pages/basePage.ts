export class basePage{
    constructor(){
        null;
    }
    baseEle ={
        iframeLocator: 'iframe#gnewtonIframe',
        iframe: () => cy.getIframeBody(this.baseEle.iframeLocator),
        iframeWithSub: (subElement: string) => cy.getIframeBodyWithSub(this.baseEle.iframeLocator, subElement)
    }
}

export default new basePage();
