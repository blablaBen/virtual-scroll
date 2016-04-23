/// <reference path="../../../typings/main.d.ts"/>

class VirtualScroll {
    $onInit:Function;
    scrollElement:any;
    constructor(private $element:angular.IRootElementService) {
      this.$onInit = this.inititalComponent;
    }

    inititalComponent() {
        this.initialRootElement();
    }

    initialRootElement() {
      this.scrollElement = this.$element.find("scrollElement");
      this.scrollElement.css("height", "200px");
      this.scrollElement.css("overflow", "auto");
    }

    setType() {
      console.log("called");
    }

}
