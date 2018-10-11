var triggerID = 'trigger-' + PageCloud.Helpers.generateUUID();
var menuID = 'menu-' + PageCloud.Helpers.generateUUID();
var dropdownID = 'dropdown-' + PageCloud.Helpers.generateUUID();
var dropdownScript = '<script data-runtime-script="true" type="disabled">' +
                        '$(document).ready(function() {\n' +
                            '   !function(a,b,c,d){a.fn.dropdownMenu=function(b){var c=a.extend({trigger:"click",transition:"fade",speed:250},b);return this.each(function(){function h(){"fade"===c.transition?e.stop(!1,!0).fadeToggle(c.speed).toggleClass("open-menu"):"slide"===c.transition?e.stop(!1,!0).slideToggle(c.speed).toggleClass("open-menu"):"none"===c.transition&&e.toggle().toggleClass("open-menu"),e.hasClass("open-menu")?b.height(f+e.height()).width(g):b.height(d.height()).width(d.width())}var b=a(this),d=b.find(\'[id*="trigger"]\'),e=b.find(\'[id*="menu"]\'),f=parseInt(e.css("top"),10),g=b.width();e.hide().attr("data-hidden",!1),b.width(d.width()).height(d.height()),"click"===c.trigger?(d.on("click",function(a){a.preventDefault(),a.stopPropagation(),h()}),a("body").on("click",function(){e.hasClass("open-menu")&&h()})):"hover"===c.trigger&&(b.hover(function(){h()}),d.on("click",function(a){a.preventDefault()})),a(".pagecloud-widget--fixed-header").css("max-height","0px")})}}(jQuery,window,document);\n\n' +
                            '   var element = $(\'#' + dropdownID + '\');\n' +
                            '   element.dropdownMenu({\n' +
                                '      trigger: \'click\', // click, hover\n' +
                                '      transition: \'fade\', // fade, slide, none\n' +
                                '      speed: 250 // speed of transition\n' +
                            '    });\n' +
                        '});\n' +
                    '</script>';

var trigger = $('a.selected');
var menu = $('.selected').not('a');

trigger.attr('id', triggerID);
menu.attr('id', menuID);
menu.attr('data-hidden',true);

var group = PageCloud.Groups.groupObjects($('.selected'),{undo:false})
group.attr('id', dropdownID)
    .append(dropdownScript);

PageCloud.Depth.moveObjectsToBack(trigger);
PageCloud.Selection.selectOnly(group)