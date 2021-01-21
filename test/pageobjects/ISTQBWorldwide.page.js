class ISTQBWorldwidePage {
    get navBarISTQBWorldwide(){
        const ISTQBWorldwide = $('[href="/istqb-where-you-are.html"]');
        return ISTQBWorldwide;
    }
   
    get sideBarGeographicCoverage(){
        const GeographicCoverage = $ ('[class="item-355"] a');
        return GeographicCoverage;
    }

    get sideBarFindExamProvider(){
        const FindExamProvider = $ ('//a[text()="Find an Exam Provider"]');
        return FindExamProvider;
    }
        
    
    get RSTQBContact(){
        const RSTQB = $ ('[aria-label^="RUSSIAN FEDERATION"]');
        return RSTQB;
    }

    get inputCountry(){
        const inputCountry = $ ('[id="ddlCountry"]+[class]');
        return inputCountry;
    }

    get inputlanguage(){
        const inputlanguage = $ ('[id="ddlLanguages"]+[class]');
        return inputlanguage;
    }

    get inputExam(){
        const inputExam = $ ('[id="ddlExams"]+[class]');
        return inputExam;
    }

    get inputExamProvider(){
        const inputExamProvider = $ ('[id="ddlEPName"]+[class]');
        return inputExamProvider;
    }

    get btnSearch(){
        const btnSearch = $ ('id="btnSearch"');
        return btnSearch;
    }


    GeographicCoverageOpen(){
        this.sideBarGeographicCoverage.click();
    }

    RSTQBContactHover(){
        this.RSTQBContact.moveTo({x: 5, y: 5});
    }

    RSTQBContactOpen(){
        this.RSTQBContact.click();
    }

    FindExamProviderOpen(){
        this.sideBarFindExamProvider.click();
    }
    
}

module.exports = new ISTQBWorldwidePage ()
