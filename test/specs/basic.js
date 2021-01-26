const assert = require('assert')
const mainPage = require ('../pageobjects/main.page.js');
const aboutUsPage = require('../pageobjects/aboutus.page.js');
const ISTQBWorldwidePage = require('../pageobjects/ISTQBWorldwide.page.js');
const findExamProviderPage  = require('../pageobjects/findexamprovider.page.js');

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

    it('ISTQBWorldwidePage', ()=> {
        ISTQBWorldwidePage.ISTQBWorldwidePageOpen();
        ISTQBWorldwidePage.GeographicCoverageOpen();
        ISTQBWorldwidePage.RSTQBContactHover();
        ISTQBWorldwidePage.RSTQBContactOpen();

        expect(ISTQBWorldwidePage.RSTQBFullContact).toHaveText('Russian Software Testing Qualifications Board (RSTQB)');
    })

    it('findExamProviderPage', ()=> {
        ISTQBWorldwidePage.ISTQBWorldwidePageOpen();
        findExamProviderPage.FindExamProviderOpen();
        findExamProviderPage.inputCountry.addValue('Russia');
        findExamProviderPage.inputLanguage.addValue('Russian');
        findExamProviderPage.inputExam.addValue('Core Foundation Certified Tester 2018');
        findExamProviderPage.inputExamProvider.addValue('All');
        browser.keys("Enter");
        findExamProviderPage.btnSearchClick();

        expect(findExamProviderPage.resultTable).toBeVisible();

    })
    


})



