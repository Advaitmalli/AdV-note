// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setLeft("-4.571428571428571em")
                .setTop("4.571428571428571em")
                .setWidth("64.45714285714286em")
                .setHeight("39.695238095238096em")
                .setLabelSize("8em")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("3.8095238095238093em")
                .setTop("2.2857142857142856em")
                .setWidth("6.247619047619048em")
                .setHeight("2.742857142857143em")
                .setCaption("AdV. Note")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("16em")
                .setTop("2.2857142857142856em")
                .setWidth("2.9714285714285715em")
                .setHeight("2.057142857142857em")
                .setCaption("Exit")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [ ],
                        "method" : "close",
                        "event" : 1
                    },
                    "_xui_ui_button10_onclick"
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button17")
                .setLeft("10.666666666666666em")
                .setTop("2.2857142857142856em")
                .setCaption("File")
                .setType("drop")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Test Test",
                            "Hi",
                            200,
                            5000
                        ],
                        "method" : "message",
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button10_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});