class ISTQBWorldwidePage {
    get navBarISTQBWorldwide(){
        const ISTQBWorldwide = $('[href="/istqb-where-you-are.html"]');
        return ISTQBWorldwide;
    }
   
    get sideBarGeographicCoverage(){
        const GeographicCoverage = $('[href="/istqb-where-you-are/geographic-coverage.html"]');
        return GeographicCoverage;
    }
   
     
    GeographicCoverageClick(){
        this.sideBarGeographicCoverage.click();
    }

    

    
    
    
}

module.exports = new ISTQBWorldwidePage ()
