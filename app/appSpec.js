describe('caledar', function() {

	var scope,
	element,
	compiled,
    html;

	beforeEach(module("calendarDemoApp"));
	beforeEach(module("template.html"));
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        html = "<calendar> </calendar>";
        //element = angular.element(html);
        //rendered = $compile(element)(scope);
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();

    }));

   
    it('should render the following elements', function(){
    	expect(element.find('#month').length).toBe(1);
    	expect(element.find('#year').length).toBe(1);
        expect(element.find('.container').length).toBe(1);
        expect(element.find('.title').length).toBe(1);
        expect(element.find('.box').length).toBe(35 || 42);
    })
    it('should populate drop down with months', function(){
        expect(element.text()).toContain('JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember');
    })
    it('should populate drop down with years', function(){
    	expect(element.text()).toContain('2035');
    })
    it('should have 1 div with class of "title"', function(){
        expect(element.find('.title').length).toBe(1);
    })
      
    it('should render with ng-change in drop down selectors', function(){
        expect(element.find('#getMonth').attr('ng-change')).toBeTruthy();
        expect(element.find('#getYear').attr('ng-change')).toBeTruthy();
        element.find('#getYear')
    })
});