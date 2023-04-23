import { $ } from "./_utility";

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/
function setOptions (newOpts) {
    const self = this;

    let optsTemplates = $.extend({}, this.options.templates, newOpts && newOpts.templates || {});
    let optsShortcuts = $.extend({}, this.options.shortcuts, newOpts && newOpts.shortcuts || {});

    self.options = $.extend({}, self.options, newOpts);
    self.options.templates = optsTemplates;
    self.options.shortcuts = optsShortcuts;
}

export { setOptions };
