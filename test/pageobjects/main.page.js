class MainPage {
    get navBarAboutUs(){
        const AboutUs = $('[data-id="108"]');
        return AboutUs;
    }

    get navBarAboutUsDropDown() {
        const AboutUsDropDown = $('[data-id="108"]');
        return AboutUsDropDown;
    }

    get searchTheSite() {
        const searchTheSite = $('#mod-search-searchword');
        return searchTheSite;
    }

    Open() {
        browser.url('https://www.istqb.org/');
    }
    
    AboutUsHover(){
        this.navBarAboutUs.moveTo({x: 5, y: 5});
    }

    AboutUsClick(){
        this.navBarAboutUs.click();
    }

    AboutUsClick(){
        this.navBarAboutUs.click();

    }
}

module.exports = new MainPage()

