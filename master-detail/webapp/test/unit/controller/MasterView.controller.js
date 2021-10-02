/*global QUnit*/

sap.ui.define([
	"sapui5md./master-detail/controller/MasterView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MasterView Controller");

	QUnit.test("I should test the MasterView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
