document.open();document.write("\u003Chtml xmlns=\"http://www.w3.org/1999/xhtml\"\u003E\r\n\u003Chead\u003E\r\n\t\u003Ctitle\u003E{#template_dlg.title}\u003C/title\u003E\r\n\t\u003Cscript type=\"text/javascript\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/template/../../tiny_mce_popup.js\"\u003E\u003C/script\u003E\r\n\t\u003Cscript type=\"text/javascript\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/template/js/template.js\"\u003E\u003C/script\u003E\r\n\t\u003Clink href=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/template//css/template.css\" rel=\"stylesheet\" type=\"text/css\" /\u003E\r\n\t\u003Cbase target=\"_self\" /\u003E\r\n\u003C/head\u003E\r\n\u003Cbody onresize=\"TemplateDialog.resize();\"\u003E \r\n\t\u003Cform onsubmit=\"TemplateDialog.insert();return false;\"\u003E\r\n\t\t\u003Cdiv id=\"frmbody\"\u003E\r\n\t\t\t\u003Cdiv class=\"title\"\u003E{#template_dlg.desc}\u003C/div\u003E\r\n\t\t\t\u003Cdiv class=\"frmRow\"\u003E\u003Clabel for=\"tpath\" title=\"{#template_dlg.select}\"\u003E{#template_dlg.label}:\u003C/label\u003E\r\n\t\t\t\u003Cselect id=\"tpath\" name=\"tpath\" onchange=\"TemplateDialog.selectTemplate(this.options[this.selectedIndex].value, this.options[this.selectedIndex].text);\" class=\"mceFocus\"\u003E\r\n\t\t\t\t\u003Coption value=\"\"\u003E{#template_dlg.select}...\u003C/option\u003E\r\n\t\t\t\u003C/select\u003E\r\n\t\t\t\u003Cspan id=\"warning\"\u003E\u003C/span\u003E\u003C/div\u003E\r\n\t\t\t\u003Cdiv class=\"frmRow\"\u003E\u003Clabel for=\"tdesc\"\u003E{#template_dlg.desc_label}:\u003C/label\u003E\r\n\t\t\t\u003Cspan id=\"tmpldesc\"\u003E\u003C/span\u003E\u003C/div\u003E\r\n\t\t\t\u003Cfieldset\u003E\r\n\t\t\t\t\u003Clegend\u003E{#template_dlg.preview}\u003C/legend\u003E\r\n\t\t\t\t\u003Ciframe id=\"templatesrc\" name=\"templatesrc\" src=\"blank.htm\" width=\"690\" height=\"400\" frameborder=\"0\"\u003E\u003C/iframe\u003E\r\n\t\t\t\u003C/fieldset\u003E\r\n\t\t\u003C/div\u003E\r\n\t\t\r\n\t\t\u003Cdiv class=\"mceActionPanel\"\u003E\r\n\t\t\t\u003Cdiv style=\"float: left\"\u003E\r\n\t\t\t\t\u003Cinput type=\"submit\" id=\"insert\" name=\"insert\" value=\"{#insert}\" /\u003E\r\n\t\t\t\u003C/div\u003E\r\n\r\n\t\t\t\u003Cdiv style=\"float: right\"\u003E\r\n\t\t\t\t\u003Cinput type=\"button\" id=\"cancel\" name=\"cancel\" value=\"{#cancel}\" onclick=\"tinyMCEPopup.close();\" /\u003E\r\n\t\t\t\u003C/div\u003E\r\n\r\n\t\t\t\u003Cbr style=\"clear:both\" /\u003E\r\n\t\t\u003C/div\u003E\r\n\t\u003C/form\u003E\r\n\u003C/body\u003E \r\n\u003C/html\u003E \r\n");document.close();