const assert = require('assert')
const mainPage = require ('../pageobjects/main.page.js');
const aboutUsPage = require('../pageobjects/aboutus.page.js');
const ISTQBWorldwidePage = require('../pageobjects/ISTQBWorldwide.page.js');
const { sideBarFindExamProvider } = require('../pageobjects/ISTQBWorldwide.page.js');




describe('ISTQB website some pages', () => {

    it('should have the right title', () => {
        mainPage.Open();
        expect(browser).toHaveTitle('Certifying Software Testers Worldwide - ISTQB® International Software Testing Qualifications Board');
    })

    it('navBarAboutUs ', ()=> {
        mainPage.Open();
        browser.maximizeWindow();
        mainPage.AboutUsHover();
       
        expect(mainPage.navBarAboutUsDropDown).toHaveAttrContaining('class','mega');
    })
    
    it('AboutUs Page', ()=> {
        mainPage.AboutUsClick();
        
        expect(aboutUsPage.VisionMissionPage).toExist()  
    })

    it('searchTheSite', ()=> {
        mainPage.searchTheSite.moveTo();
        mainPage.searchTheSite.setValue('Foundation level');
        mainPage.searchTheSite.click();
        browser.keys("Enter");
    })

    it('ISTQBWorldwide', ()=> {
        ISTQBWorldwidePage.GeographicCoverageOpen();
        ISTQBWorldwidePage.RSTQBContactHover();
        /*ISTQBWorldwidePage.RSTQBContactOpen();*/

        expect(ISTQBWorldwidePage.RSTQBContact).toHaveTextContaining(['Russian Software Testing Qualifications Board (RSTQB)', 'Andrey Konushin', 'andrey.konushin@rstqb.org', 'http://www.rstqb.org'])
       
    })

    it('findExamProvider', ()=> {
        ISTQBWorldwidePage.FindExamProviderOpen();
        sideBarFindExamProvider.inputCountry.setValue('Russia');
        sideBarFindExamProvider.inputLanguage.setValue('Russian');
        sideBarFindExamProvider.inputExam.setValue('Core Foundation Certified Tester 2018');
        sideBarFindExamProvider.inputExamProvider.setValue('All');


    })
    


})



