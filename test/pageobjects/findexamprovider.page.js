class findExamProviderPage {

    get sideBarFindExamProvider(){
        const FindExamProvider = $('//a[text()="Find an Exam Provider"]');
        return FindExamProvider;
    }

    get inputCountry(){
        const inputCountry = $('#ddlCountry+input');
        return inputCountry;
    }

    get inputLanguage(){
        const inputlanguage = $('#ddlLanguages+input');
        return inputlanguage;
    }

    get inputExam(){
        const inputExam = $('#ddlExams+input');
        return inputExam;
    }

    get inputExamProvider(){
        const inputExamProvider = $('#ddlEPName+input');
        return inputExamProvider;
    }

    get btnSearch(){
        const btnSearch = $('#btnSearch');
        return btnSearch;
    }

    get resultTable(){
      const resultTable = $('#ResultSearch');
      return resultTable;
    }
 
   
    btnSearchClick() {
      this.btnSearch.moveTo(5,5);
      this.btnSearch.click();
    }
    
    FindExamProviderOpen(){
        this.sideBarFindExamProvider.click();
    }

}

module.exports = new findExamProviderPage ()
