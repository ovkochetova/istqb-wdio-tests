const assert = require('assert')
const mainPage = require ('../pageobjects/main.page.js');
const aboutUsPage = require('../pageobjects/aboutus.page.js');
const ISTQBWorldwidePage = require('../pageobjects/ISTQBWorldwide.page.js');



describe('ISTQB website some pages', () => {

    it('should have the right title', () => {
        mainPage.Open();
        expect(browser).toHaveTitle('Certifying Software Testers Worldwide - ISTQB® International Software Testing Qualifications Board');
    })

    it('navBarAboutUs ', ()=> {
        mainPage.Open();
        browser.maximizeWindow();
        mainPage.AboutUsHover();
        browser.setTimeout({
            'pageLoad': 10000,
        });
        expect(mainPage.navBarAboutUsDropDown).toHaveAttrContaining('class','mega');
    })

    
    it('AboutUs Page', ()=> {
        mainPage.AboutUsClick();
        
        expect(aboutUsPage.VisionMissionPage).toBeEnabled()  
    })

    it('searchTheSite', ()=> {
        mainPage.searchTheSite.moveTo();
        mainPage.searchTheSite.setValue('Foundation level');
        mainPage.searchTheSite.click();
        browser.keys("Enter");
    })

    it('ISTQBWorldwide', ()=> {
      ISTQBWorldwidePage.GeographicCoverageClick();
      
    })

    
})