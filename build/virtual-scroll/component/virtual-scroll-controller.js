var VirtualScroll = (function () {
    function VirtualScroll($element) {
        this.$element = $element;
        this.$onInit = this.inititalComponent;
    }
    VirtualScroll.prototype.inititalComponent = function () {
        this.initialRootElement();
        this.initialInnerElement();
    };
    VirtualScroll.prototype.initialRootElement = function () {
        this.scrollElement = this.$element.find("scrollElement");
        this.scrollElement.css("height", "200px");
        this.scrollElement.css("overflow", "auto");
        this.scrollElement.css("display", "block");
    };
    VirtualScroll.prototype.initialInnerElement = function () {
        this.innerScrollElement = this.$element.find("innerScrollElement");
        this.innerScrollElement.css("height", "3000px");
        this.innerScrollElement.css("display", "block");
    };
    VirtualScroll.prototype.setType = function () {
        console.log("called");
    };
    return VirtualScroll;
}());
