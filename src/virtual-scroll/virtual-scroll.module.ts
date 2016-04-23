/// <reference path="../../typings/main.d.ts"/>
/// <reference path="./component/virtual-scroll-controller.ts"/>

angular.module("virtual-scroll", [])
.component("inner", {
          templateUrl: "src/virtual-scroll/component/virtual-scroll.html",
          controller: VirtualScroll
        });
