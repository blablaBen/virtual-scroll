/// <reference path="../../../typings/main.d.ts"/>

class VirtualScroll {
    $onInit:Function;
    scrollElement:any;
    innerScrollElement:any;
    constructor(private $element:angular.IRootElementService) {
      this.$onInit = this.inititalComponent;
    }

    inititalComponent() {
        this.initialRootElement();
        this.initialInnerElement();
    }

    initialRootElement() {
      this.scrollElement = this.$element.find("scrollElement");
      this.scrollElement.css("height", "200px");
      this.scrollElement.css("overflow", "auto");
        this.scrollElement.css("display", "block");
    }

    initialInnerElement() {
      this.innerScrollElement =  this.$element.find("innerScrollElement");
      this.innerScrollElement.css("height", "3000px");
        this.innerScrollElement.css("display", "block");
    }
    setType() {
      console.log("called");
    }

}
