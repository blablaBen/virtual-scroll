/// <reference path="../../../typings/main.d.ts"/>

class VirtualScroll {
    $onInit:Function;
    outerScrollElement:any;
    constructor(private $element:angular.IRootElementService) {
      this.$onInit = this.inititalComponent;
    }

    inititalComponent() {
        this.outerScrollElement = this.$element.find("main");
        this.outerScrollElement.css("height", "200px");
        this.outerScrollElement.css("overflow", "auto");
        this.initialRootElement();
    }

    initialRootElement() {

    }

    setType() {
      console.log("called");
    }

}
