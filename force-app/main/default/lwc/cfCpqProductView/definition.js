let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[{\"phase\":\"browse\"}]","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1628299928408-hkfawa994","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.isSelectAll","fieldValue":"{action.checked}"}],"id":"flex-action-1628299960931","type":"cardAction"}}],"channelname":"cpq_{recordId}_1","displayLabel":"cpq_{recordId}_1:cpq_mark_select_all_checkbox","element":"action","eventLabel":"pubsub","eventname":"cpq_mark_select_all_checkbox","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"isRepeatable":true,"listenToWidthResize":false,"lwc":{"DeveloperName":"cfCpqProductView_3_Vlocity","Id":"0RbDp000000eG8n0AE","ManageableState":"unmanaged","MasterLabel":"cfCpqProductView_3_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[{"name":"isSelectAll","val":"false"}],"states":[{"actions":[],"childCards":["cpqProductTileList"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Products-Count","name":"Text","property":{"card":"{card}","mergeField":"%3Ch2%3E%7BParent.type%7D%3C/h2%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__productsheader","container":{"class":""},"customClass":"cpq__productsheader","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__productsheader","container":{"class":""},"customClass":"cpq__productsheader","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Select All Checkbox","name":"Checkbox","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"checked":"{Parent.isSelectAll}","phase":"{Parent.phase}"},"hasExtraParams":true,"id":"flex-action-1628299975007","message":"cpq_select_all_products_checkbox","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","data-conditions":{"group":[{"field":"Parent.qualifiedFilter","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"Qualified"}],"id":"state-condition-object","isParent":true},"propertyObj":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"checked":"{Parent.isSelectAll}","phase":"{Parent.phase}"},"hasExtraParams":true,"id":"flex-action-1628299975007","message":"cpq_select_all_products_checkbox","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"checked":false,"customProperties":[{"id":5,"label":"checked","value":"{Parent.isSelectAll}"}],"fieldBinding":"","label":"{Label.CPQSelectAll}"},"record":"{record}","type":"checkbox"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true},{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"List-header-checkbox","key":"element_element_block_1_0_block_0_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-checkbox","container":{"class":""},"customClass":"cpq__productlist-header-checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-checkbox","container":{"class":""},"customClass":"cpq__productlist-header-checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"List-header-block-product-name-Text-0","key":"element_element_element_block_1_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.Name%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-name","key":"element_element_block_1_0_block_1_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productName","container":{"class":""},"customClass":"cpq__productlist-header-productName","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productName","container":{"class":""},"customClass":"cpq__productlist-header-productName","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"List-header-block-product-description-Text-0","key":"element_element_element_block_1_0_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_2_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CPQDescription%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-description","key":"element_element_block_1_0_block_2_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productDescription","container":{"class":""},"customClass":"cpq__productlist-header-productDescription","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productDescription","container":{"class":""},"customClass":"cpq__productlist-header-productDescription","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"List-header-block-product-commercials-ot-Text-0","key":"element_element_element_block_1_0_block_3_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_3_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-align_center%22%3E%7BLabel.OneTime%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-commercials-ot","key":"element_element_block_1_0_block_3_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"List-header-block-product-commercials-recurring-Text-0","key":"element_element_element_block_1_0_block_4_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_4_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-align_center%22%3E%7BLabel.Recurring%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-commercials-recurring","key":"element_element_block_1_0_block_4_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-actions","key":"element_element_block_1_0_block_5_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-actions","container":{"class":""},"customClass":"cpq__productlist-header-actions","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-actions","container":{"class":""},"customClass":"cpq__productlist-header-actions","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"List-header-block","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"Parent.view","hasMergeField":false,"id":"state-new-condition-16","operator":"==","type":"custom","value":"list"},{"field":"Parent.phase","hasMergeField":false,"id":"state-new-condition-25","logicalOperator":"&&","operator":"==","type":"custom","value":"Browse"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__productlist-header","container":{"class":""},"customClass":"cpq__productlist-header","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__productlist-header","container":{"class":""},"customClass":"cpq__productlist-header","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Load-More-FlexCard-0","key":"element_element_block_3_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_3_0","property":{"cardName":"cpqProductTileList","cardNode":"{record.result.records}","isChildCardTrackingEnabled":false,"parentAttribute":{"isSelected":"{Session.isSelected}","phase":"{Parent.phase}","qualifiedFilter":"{Parent.qualifiedFilter}","view":"{Parent.view}"},"recordId":"{recordId}","selectedState":"ListView"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-product-view_container ","container":{"class":"cpq-product-view_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-product-view_container ","container":{"class":"cpq-product-view_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Load-More-Action-1","key":"element_element_block_3_0_action_1_0","name":"Action","parentElementKey":"element_block_3_0","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","data-conditions":{"group":[{"field":"result.actions","id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"draggable":true,"hideActionIcon":true,"isOpen":true,"key":"1647439461271-y3aa3aomr","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.CPQLoadMore}","eventName":"cpqutils_{recordId}","extraParams":{"cartId":"{Parent.cartId}","catalogId":"{Parent.catalogId}","ipMethod":"CPQ_GetProducts","loadMoreEventName":"cpq_load_more_products","offerType":"Products","offsetSize":"{result.actions.nextproducts.remote.params.offsetSize}","pagesize":"{Parent.pagesize}","phase":"{Parent.phase}","qualifiedFilter":"{Parent.qualifiedFilter}","query":"{Parent.query}","records":"{result.records}","utilMethod":"loadMoreFunctionality"},"hasExtraParams":true,"id":"flex-action-1647439485538","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","data-conditions":{"group":[{"field":"result.actions","id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"label":"{Label.CPQLoadMore}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Load-More","name":"Block","property":{"action":null,"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-right:0;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         margin-right:0;","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-right:0;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         margin-right:0;","text":{"align":"center","color":""}}}],"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"result.totalSize","id":"state-new-condition-9","operator":"!=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Product-View","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqProductView","Id":"a5aDp000000TZ83AAO","vlocity_cmt__GlobalKey__c":"cpqProductView/Vlocity/3/1647439232540"};
  export default definition