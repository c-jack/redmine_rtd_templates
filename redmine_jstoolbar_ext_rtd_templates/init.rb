# encoding: utf-8
require_dependency 'redmine_jstoolbar_ext_rtd_templates'

Redmine::Plugin.register :redmine_jstoolbar_ext_rtd_templates do
  name 'Redmine jsToolbar RTD templates extension'
  author 'Chris Jackson'
  description 'Allows RTD templates to be selected via the toolbar'
  version '0.0.1'
  url 'https://github.com/c-jack/redmine_rtd_templates'
  author_url 'https://github.com/c-jack'
  requires_redmine_plugin :redmine_jstoolbar_ext, :version_or_higher => '0.1.0'
end
