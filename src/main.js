(() => {
  "use strict";

  pkg.initGettext();
  pkg.initFormat();
  pkg.require({
    Gio: "2.0",
    Gtk: "3.0",
  });

  const { Application } = imports.gi.Gtk;
  const { ApplicationFlags } = imports.gi.Gio;

  const { Window } = imports.window;

  this.main = function main(argv) {
    const application = new Application({
      application_id: "re.sonny.gigagram",
      flags: ApplicationFlags.FLAGS_NONE,
    });

    application.connect("activate", app => {
      let activeWindow = app.activeWindow;

      if (!activeWindow) {
        activeWindow = Window(app);
      }

      activeWindow.present();
    });

    return application.run(argv);
  };
})();
