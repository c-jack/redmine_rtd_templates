(function () {
  if(typeof RedmineWikiToolbarExt === 'undefined') return false;
  var templateKeys = Object.keys(template_content);
  var buttons = [
    {
      title: 'rtd_templates', type: 'button', after: 'help',
      fn: { wiki: function (event) {
        //var templates_buttons = RedmineWikiToolbarExt.rtd_templatesSubMenuButtons.get(this, templates_options);
        var templates_buttons = RedmineWikiToolbarExt.rtd_templatesSubMenuButtons.get(this, templateKeys);
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
