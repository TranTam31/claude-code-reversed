// Module: Pds (lines 278640-278657)
  var Pds = S(() => {
    Wu();
    Dy();
    zB();
    Zt();
    Nir = class Nir extends Error {
      action;
      status;
      body;
      constructor(e, t, r) {
        super(`Projects API: ${e} failed (HTTP ${t})${Cny(r)}`);
        this.action = e;
        this.status = t;
        this.body = r;
        this.name = "ProjectsApiError";
      }
    };
  });
