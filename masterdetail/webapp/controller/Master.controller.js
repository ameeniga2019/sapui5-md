sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,Mt) {
		"use strict";

		return Controller.extend("sapui5.md.masterdetail.controller.Master", {
			onInit: function () {

            },
           onPress: function (evt) {
               Mt.show('evt clicked');
                var oRout = this.getOwnerComponent.getRouter();
             oRout.navTo("det");
           }
		});
	});
