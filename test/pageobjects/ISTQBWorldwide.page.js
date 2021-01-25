class ISTQBWorldwidePage {
    get navBarISTQBWorldwide(){
        const ISTQBWorldwide = $('[href="/istqb-where-you-are.html"][class*="toggle"]');
        return ISTQBWorldwide;
    }
   
    get sideBarGeographicCoverage(){
        const GeographicCoverage = $('[class="item-355"] a');
        return GeographicCoverage;
    }
         
    get RSTQBMapContact(){
        const RSTQB = $('[aria-label^="RUSSIAN FEDERATION"]');
        return RSTQB;
    }

    get RSTQBFullContact(){
        const RSTQBFullContact= $('[class*="ammapDescriptionText"] p');
        return RSTQBFullContact;
    }
    
    ISTQBWorldwidePageOpen(){
        this.navBarISTQBWorldwide.click();
    }

    GeographicCoverageOpen(){
        this.sideBarGeographicCoverage.click();
    }

    RSTQBContactHover(){
        this.RSTQBMapContact.moveTo({x: 5, y: 5});
    }

    RSTQBContactOpen(){
        this.RSTQBMapContact.click();
    }

    
    
  
    
}

module.exports = new ISTQBWorldwidePage ()
