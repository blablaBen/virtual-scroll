var VirtualScroll = (function () {
    function VirtualScroll($element) {
        this.$element = $element;
        this.$onInit = this.inititalComponent;
    }
    VirtualScroll.prototype.inititalComponent = function () {
        this.initialRootElement();
    };
    VirtualScroll.prototype.initialRootElement = function () {
        this.scrollElement = this.$element.find("scrollElement");
        this.scrollElement.css("height", "200px");
        this.scrollElement.css("overflow", "auto");
    };
    VirtualScroll.prototype.setType = function () {
        console.log("called");
    };
    return VirtualScroll;
}());
