// Module: Iir (lines 277339-277366)
  var Iir = S(() => {
    Ni();
    ((ifo = require("fs")), (sfo = require("fs/promises")));
    Hir = class Hir extends Error {
      sizeInBytes;
      maxSizeBytes;
      constructor(e, t) {
        super(
          `File content (${pl(e)}) exceeds maximum allowed size (${pl(t)}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`,
        );
        this.sizeInBytes = e;
        this.maxSizeBytes = t;
        this.name = "FileTooLargeError";
      }
    };
    kir = class kir extends Error {
      selectedBytes;
      maxSelectedBytes;
      constructor(e, t) {
        super(
          `The requested line range contains over ${pl(t)} of text, more than a read can return. Use a smaller limit \u2014 or, if a single line is this large, no limit will fit it: search for specific content instead.`,
        );
        this.selectedBytes = e;
        this.maxSelectedBytes = t;
        this.name = "SelectedRangeTooLargeError";
      }
    };
  });
