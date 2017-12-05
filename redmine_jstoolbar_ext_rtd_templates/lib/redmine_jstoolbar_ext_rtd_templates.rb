class RedmineJstoolbarExtRtdTemplatesHookListener < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "redmine_jstoolbar_ext_rtd_templates/redmine_jstoolbar_ext_rtd_templates"
end
