describe('caledar', function() {

	var scope,
	element,
	compiled;

	beforeEach(module("calendarDemoApp"));
	beforeEach(module("template.html"));
    beforeEach(inject(function($rootScope, $compile, $templateCache) {
        scope = $rootScope.$new();
        html = "<calendar> </calendar>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();

    }));

    it('should render element and include rendered items and text', function(){
    	expect(element.text()).toContain('1');
    	
    })
    it('should contain 35 days', function(){
    	expect( $('box').length ).toBe(35);
    	
    })
    it('should populate drop down with months', function(){
    	expect(element.text()).toContain('January');
    	
    })
    it('should populate drop down with years', function(){
    	expect(element.text()).toContain('2035');
    	
    })
});