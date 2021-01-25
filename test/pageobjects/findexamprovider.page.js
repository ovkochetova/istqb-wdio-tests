class findExamProviderPage {

    get sideBarFindExamProvider(){
        const FindExamProvider = $('//a[text()="Find an Exam Provider"]');
        return FindExamProvider;
    }

    get inputCountry(){
        const inputCountry = $('[id="ddlCountry"]+[class]');
        return inputCountry;
    }

    get inputlanguage(){
        const inputlanguage = $('[id="ddlLanguages"]+[class]');
        return inputlanguage;
    }

    get inputExam(){
        const inputExam = $('[id="ddlExams"]+[class]');
        return inputExam;
    }

    get inputExamProvider(){
        const inputExamProvider = $('[id="ddlEPName"]+[class]');
        return inputExamProvider;
    }

    get btnSearch(){
        const btnSearch = $('id="btnSearch"');
        return btnSearch;
    }
    

    btnSearchClick() {
        this.btnSearch.click();
    }
    
    FindExamProviderOpen(){
        this.sideBarFindExamProvider.click();
    }
    
}

module.exports = new findExamProviderPage ()