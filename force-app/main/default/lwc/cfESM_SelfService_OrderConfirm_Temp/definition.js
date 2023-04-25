let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":"","name":""},"type":"Custom","value":{"body":"{\"tabName\":\"existingAssets\"}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"key":"1673940962772-qfijpqjk3","label":"SetPrimaryOrderId","draggable":false,"isOpen":true,"card":"{card}","stateAction":{"id":"flex-action-1673940974073","type":"cardAction","displayName":"Action","vlocityIcon":"standard-default","targetType":"Web Page","openUrlIn":"Current Window","Web Page":{"targetName":"/apex"},"eventName":"setValues","fieldValues":[{"fieldName":"primaryOrderId","fieldValue":"{action.esm_selfservice_primary_order_id}"}]},"actionIndex":1},{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":false,"key":"1670479371659-y0goe7qgg","label":"Get Order Details ","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","id":"flex-action-1670482093949","message":"{\"type\":\"DataRaptor\",\"value\":{\"dsDelay\":\"\",\"bundle\":\"ESMGetOrderDetails\",\"bundleType\":\"Turbo Extract\",\"inputMap\":{\"id\":\"{action.esm_selfservice_primary_order_id}\"},\"jsonMap\":\"{\\\"action.esm_selfservice_primary_order_id\\\":\\\"{action.esm_selfservice_primary_order_id}\\\"}\"},\"orderBy\":{\"name\":\"\",\"isReverse\":\"\"},\"contextVariables\":[{\"name\":\"action.esm_selfservice_primary_order_id\",\"val\":\"\",\"id\":1}]}","openUrlIn":"Current Window","responseNode":"orderData","targetType":"Web Page","type":"DataAction","vlocityIcon":"standard-default"}}],"channelname":"ESM_SelfService_CreateOrder","displayLabel":"get_primary_order_detail_summary","element":"action","eventLabel":"custom event","eventname":"get_primary_order_detail_summary","eventtype":"event","key":"event-0","recordIndex":"0","showSpinner":"true"}],"isFlex":true,"lwc":{"DeveloperName":"cfESM_SelfService_OrderConfirm_Temp_2_salesforce","Id":"0RbDp000000eG7NKAQ","MasterLabel":"cfESM_SelfService_OrderConfirm_Temp_2_salesforce","NamespacePrefix":"c","ManageableState":"unmanaged"},"selectableMode":"Multi","sessionVars":[{"isApi":true,"name":"SiteName","val":""}],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-0","name":"Custom LWC","property":{"customlwcname":"b2bSelfServiceClientDetails","eventName":"get_primary_order_detail_summary","getKeys":"esm_selfservice_primary_order_id"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-0-Text-0","key":"element_element_element_block_1_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CmexSelfServiceOrderConfirmTitle%7D&nbsp;%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-top:10rem;\nfont-weight: 700;\nfont-size: 1.5rem;\nline-height: 1rem;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin-top:10rem;\nfont-weight: 700;\nfont-size: 1.5rem;\nline-height: 1rem;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-top:10rem;\nfont-weight: 700;\nfont-size: 1.5rem;\nline-height: 1rem;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin-top:10rem;\nfont-weight: 700;\nfont-size: 1.5rem;\nline-height: 1rem;","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-0-Text-1","key":"element_element_element_block_1_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_block_1_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CmexSelfServiceOrderConfirmHeaderText%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-top:1rem;\nmargin-bottom:.5rem;\nfont-weight: 400;\nfont-size: 0.75rem;\nline-height: 1rem;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin-top:1rem;\nmargin-bottom:.5rem;\nfont-weight: 400;\nfont-size: 0.75rem;\nline-height: 1rem;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-top:1rem;\nmargin-bottom:.5rem;\nfont-weight: 400;\nfont-size: 0.75rem;\nline-height: 1rem;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin-top:1rem;\nmargin-bottom:.5rem;\nfont-weight: 400;\nfont-size: 0.75rem;\nline-height: 1rem;","text":{"align":"","color":""}}}],"type":"text"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-0-Block-2","key":"element_element_element_block_1_0_block_0_0_block_2_0","name":"Block","parentElementKey":"element_element_block_1_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"border-top: 1px solid #DDDBDA;\nheight:0;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         border-top: 1px solid #DDDBDA;\nheight:0;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"border-top: 1px solid #DDDBDA;\nheight:0;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         border-top: 1px solid #DDDBDA;\nheight:0;","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-0","key":"element_element_block_1_0_block_0_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"height":"","inlineStyle":"margin: 0 4rem;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin: 0 4rem;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"height":"","inlineStyle":"margin: 0 4rem;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin: 0 4rem;","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"children":[{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2-Block-0","key":"element_element_element_block_2_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_block_2_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"flexImg","elementLabel":"Block-2-Block-2-Block-1-Image-0","key":"element_element_element_element_block_2_0_block_0_0_block_1_0_flexImg_0_0","name":"Image","parentElementKey":"element_element_element_block_2_0_block_0_0_block_1_0","property":{"card":"{card}","extraclass":"slds-align_absolute-center","record":"{record}","size":"","stateImg":{"alternativeText":"Image description","imgsrc":"/s/sfsites/c/resource/SelfService_GreenTick"}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"display:flex;\njustify-content: center;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         display:flex;\njustify-content: center;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"display:flex;\njustify-content: center;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         display:flex;\njustify-content: center;","text":{"align":"","color":""}}}],"type":"element"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-2-Block-0-clone-0-Block-1-Text-0","key":"element_element_element_element_element_block_2_0_block_0_0_block_1_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_element_block_2_0_block_0_0_block_1_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CmexSelfServiceOrderCreatedStatusName%7D&nbsp;%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-top:0.5rem;\nmargin-bottom:0.5rem;\ndisplay:flex;\njustify-content: center;\nfont-weight: 700;\nfont-size: 16px;\nline-height: 18px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin-top:0.5rem;\nmargin-bottom:0.5rem;\ndisplay:flex;\njustify-content: center;\nfont-weight: 700;\nfont-size: 16px;\nline-height: 18px;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-top:0.5rem;\nmargin-bottom:0.5rem;\ndisplay:flex;\njustify-content: center;\nfont-weight: 700;\nfont-size: 16px;\nline-height: 18px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         margin-top:0.5rem;\nmargin-bottom:0.5rem;\ndisplay:flex;\njustify-content: center;\nfont-weight: 700;\nfont-size: 16px;\nline-height: 18px;","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2-Block-1-Block-1","key":"element_element_element_element_block_2_0_block_0_0_block_1_0_block_1_0","name":"Block","parentElementKey":"element_element_element_block_2_0_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"display:flex;\njustify-content: center;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         display:flex;\njustify-content: center;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"display:flex;\njustify-content: center;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         display:flex;\njustify-content: center;","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-2-Block-0-clone-0-Block-2-Text-0","key":"element_element_element_element_block_2_0_block_0_0_block_1_0_outputField_2_0","name":"Text","parentElementKey":"element_element_element_block_2_0_block_0_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CmexSelfServiceOrderNumberText%7D%20%7BorderData%5B0%5D.OrderDetails%5B0%5D.OrderNumber%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"display:flex;\njustify-content: center;\nmargin-bottom:0.5rem;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 21px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         display:flex;\njustify-content: center;\nmargin-bottom:0.5rem;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 21px;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"display:flex;\njustify-content: center;\nmargin-bottom:0.5rem;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 21px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         display:flex;\njustify-content: center;\nmargin-bottom:0.5rem;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 21px;","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-2-Block-0-clone-0-Block-2-Text-0","key":"element_element_element_element_block_2_0_block_0_0_block_1_0_outputField_3_0","name":"Text","parentElementKey":"element_element_element_block_2_0_block_0_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CmexSelfServiceOrderEmailText%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"display:flex;\njustify-content: center;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 21px;\nmargin-bottom: 4rem;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         display:flex;\njustify-content: center;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 21px;\nmargin-bottom: 4rem;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"display:flex;\njustify-content: center;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 21px;\nmargin-bottom: 4rem;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         display:flex;\njustify-content: center;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 21px;\nmargin-bottom: 4rem;","text":{"align":"","color":""}}}],"type":"text"},{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2-Block-1-Block-4-Block-1","key":"element_element_element_element_element_block_2_0_block_0_0_block_1_0_block_4_0_block_0_0","name":"Block","parentElementKey":"element_element_element_element_block_2_0_block_0_0_block_1_0_block_4_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"action","elementLabel":"Block-2-Block-2-Block-1-Block-4-Action-0","key":"element_element_element_element_element_block_2_0_block_0_0_block_1_0_block_4_0_action_1_0","name":"Action","parentElementKey":"element_element_element_element_block_2_0_block_0_0_block_1_0_block_4_0","property":{"actionList":[{"actionIndex":0,"draggable":true,"isOpen":true,"key":"1658461862132-9f0fl2r7h","label":"Navigate to order community","stateAction":{"Web Page":{"targetName":"/{Session.SiteName}/s/order/{primaryOrderId}"},"id":"flex-action-1658462002114","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom"}}],"card":"{card}","flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"View Order Details","record":"{record}","showSpinner":"false","stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"14px","textAlign":"center"}}},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"14px","textAlign":"center"}}},"inlineStyle":"background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\npadding-top:.3rem;\npadding-bottom:.1rem;","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"      \n         background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\npadding-top:.3rem;\npadding-bottom:.1rem;","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"14px","textAlign":"center"}}},"inlineStyle":"background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\npadding-top:.3rem;\npadding-bottom:.1rem;","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"      \n         background: var(--lwc-colorBackgroundButtonBrand);\nfont-family:var(--lwc-fontFamily);\ntext-transform:var(--lwc-textTransform);\nborder-radius: 105px;\npadding-top:.3rem;\npadding-bottom:.1rem;","text":{"align":"center","color":""}}}],"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2-Block-1-Block-4-Block-0-clone-0","key":"element_element_element_element_element_block_2_0_block_0_0_block_1_0_block_4_0_block_2_0","name":"Block","parentElementKey":"element_element_element_element_block_2_0_block_0_0_block_1_0_block_4_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 "},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2-Block-1-Block-4","key":"element_element_element_element_block_2_0_block_0_0_block_1_0_block_4_0","name":"Block","parentElementKey":"element_element_element_block_2_0_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2-Block-1","key":"element_element_element_block_2_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_block_2_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"8","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2-Block-2","key":"element_element_element_block_2_0_block_0_0_block_2_0","name":"Block","parentElementKey":"element_element_block_2_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":2,"isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":2,"isResponsive":false},"sizeClass":"slds-size_2-of-12"},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2","key":"element_element_block_2_0_block_0_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-3","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-large","size":"xx-large","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xx-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-large","size":"xx-large","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"ESM_SelfService_OrderConfirm_Temp","Id":"a5aDp000000TZCsIAC","vlocity_cmt__GlobalKey__c":"ESM_SelfService_OrderConfirm_Temp/salesforce/2/1673940884795","vlocity_cmt__IsChildCard__c":true};
  export default definition