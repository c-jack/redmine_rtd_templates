(function () {
  if(typeof RedmineWikiToolbarExt === 'undefined') return false;

/*************************
Template options start 
*************************/

var templates_options = [
        "Solution",
        "test2"
];

var template_content = {
    Solution: `*Solution QA Review Checklist*

*Requirements and Solution*
Have the requirements been properly understood and clearly stated on the ticket? *Yes - refer to comments/description/No*
Has the nature of the high level approach been clearly articulated, with caveats/limitations identified as required? *Yes - refer to comments/description/No*

*Sign-off*
Has the customer signed off the approach identified? *Yes - refer to comment/No*
Has the work involved to prepare the solution been estimated?  *Yes - refer to comment/No*
Has the work involved to prepare the solution been approved by the customer?  *Yes - refer to comment/No*

*Preparation*
Is there a data set with README that provides a worked example of the solution? *Yes - link to data set README/No*
* have the steps followed to prepare the data set been clearly documented? *Yes/No*
* are the steps required to verify the solution using the data set?  *Yes/No*
* has time to prepare the solution been booked appropriately, with customer approval for overruns *Yes/No*

*Delivery*
Have the implementation steps to deliver the solution in a customer environment been identified? *Yes - refer to comment/No*
Is it clearly stated what software version(s) are required for delivery of this work?  *Yes - refer to comment/No*
Have dependencies with other pieces of work (i.e. tickets) been clearly identified?  *Yes - refer to comment and associated tickets/No*
Has the ticket been associated with the correct milestone for delivery?  *Yes/No*
Have the steps required for the customer to test the solution been documented? *Yes - refer to comment/No*

*Documentation*
Does the solution have reusable elements that could be incorporated into a HowTo?  *Yes/No*
Has the HowTo been created, or has a ticket been raised to create this HowTo?  *Yes - link to HowTo/No*`, 
    test2: "testiertest"
};



/*************************
Template options end 
*************************/

  var buttons = [
    {
      title: 'rtd_templates', type: 'button', after: 'help',
      fn: { wiki: function (event) {
        var templates_buttons = RedmineWikiToolbarExt.rtd_templatesSubMenuButtons.get(this, templates_options);
        RedmineWikiToolbarExt.SubMenu.open(this.toolbar, event.target, templates_buttons)
      }}
    }
  ];

  /**
   * Add the button
   */
  RedmineWikiToolbarExt.ToolbarElements.add(buttons);

  /**
   * @class rtd_templatesSubMenuButtons
   * @desc Create rtd_templates menu buttons
   * @methods get()
   */
  RedmineWikiToolbarExt.rtd_templatesSubMenuButtons = (function() {
    var toolbar, rtd_templates,content;
    var button_class_name_prefix = RedmineWikiToolbarExt.button_class_name_prefix;

    // this function is called with .get(this, templates_options)
    var get = function(toolbar_obj, templates_array){
      toolbar = toolbar_obj, 
      rtd_templates = templates_array;

      if(rtd_templates.length ===0 ) return [];
      var buttons = build_buttons();
      return buttons;
    };

    var button_data = function(label){
      content = template_content[label];
      return  { label: label, content: content};
    };



    var build_buttons = function(){
      return $.map(rtd_templates, function (label) {
        var data = button_data(label);
        return build_button(data);
      });
    };


    var build_button = function (data) {
      return $('<button>' + decodeURIComponent(data.label) + '</button>')
        .data(data)
        .addClass(button_class_name_prefix + 'templates_submenu_' + data.label)
        .click( button_click );
    };

    var button_click = function(event){
      var data = $(event.target).data();
      toolbar.encloseSelection(data.content);
    };

    return {
      get: get
    };
  })();

}());
