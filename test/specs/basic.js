const assert = require('assert')
const mainPage = require ('../pageobjects/main.page.js');


describe('title', () => {

    it('should have the right title', () => {
        mainPage.Open();
        expect(browser).toHaveTitle('Certifying Software Testers Worldwide - ISTQB® International Software Testing Qualifications Board');
    })

    it('navBarDropDown ', ()=> {
        mainPage.Open();
        mainPage.navBarAboutUs.moveTo();

        expect(mainPage.navBarAboutUsDropDown).toHaveAttribute('class');
        console.log("ASDFGHJKL:?        DFGHJKL");
        console.log(mainPage.navBarAboutUsDropDown);
        expect(mainPage.navBarAboutUsDropDown).toHaveAttributeContaining('class', 'mega open');
        
    })

})