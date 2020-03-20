sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("materialmaster.MaterialMaster.controller.App", {
		onInit: function () {
		},
		
		editObject: function () {
			alert("edit");
		},
		
		deleteObject: function () {
			alert("delete");
		},
		
		toBack: function () {
			alert("back");
		}
	});
});