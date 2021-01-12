class AboutUsPage {

    get AboutUsPage(){
        const AboutUsPage = $('[href="/about-us.html"][class*="toggle"]');
    return AboutUsPage;
    }

    get VisionMissionPage(){
        const VisionMissionPage = $ ('[data-id="128"]>[href="/about-us/vision-mission.html"]');
    return VisionMissionPage;
    }
    
    OpenAboutUs() {
        this.AboutUsPage.click();
    }
    
    OpenVisionMission(){
        this.VisionMissionPage.click()
    }
    
    
    
}

module.exports = new AboutUsPage()