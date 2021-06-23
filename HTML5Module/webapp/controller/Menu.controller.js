sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	
	function onInit(){
		
	}
	
	function navToCreateEmployee(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("CreateEmployee",{},false);
	}
		
	function navToShowEmployee(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ShowEmployee",{},false);
    }

	function onAfterRendering(){
		// Error en el framework : Al agregar la dirección URL de "Firmar pedidos", el componente GenericTile debería navegar directamente a dicha URL,
		// pero no funciona en la version 1.78. Por tanto, una solución  encontrada es eliminando la propiedad id del componente por jquery
		var genericTileSignOrder = this.byId("urlEmployees");
		//Id del dom
		var idGenericTileSignOrder = genericTileSignOrder.getId();
		//Se vacia el id
		jQuery("#"+idGenericTileSignOrder)[0].id = "";
	}    

	return Controller.extend("logaligroup.ProyectoFinal.controller.Menu", {
		onInit: onInit,
		navToCreateEmployee : navToCreateEmployee,
        navToShowEmployee : navToShowEmployee,
        onAfterRendering : onAfterRendering
	});
});