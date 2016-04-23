var VirtualScroll = (function () {
    function VirtualScroll($element) {
        this.$element = $element;
        this.$onInit = this.inititalComponent;
    }
    VirtualScroll.prototype.inititalComponent = function () {
        this.outerScrollElement = this.$element.find("main");
        this.outerScrollElement.css("height", "200px");
        this.outerScrollElement.css("overflow", "auto");
        this.initialRootElement();
    };
    VirtualScroll.prototype.initialRootElement = function () {
    };
    VirtualScroll.prototype.setType = function () {
        console.log("called");
    };
    return VirtualScroll;
}());
