// Module: AKr (lines 231580-231592)
  var AKr = S(() => {
    B5g = [
      "FieldValueInvalidError",
      "FieldListRangeError",
      "ForeignFieldError",
    ];
    P8 = class P8 extends Error {
      constructor(e, t, r = "FieldValueInvalidError") {
        super(t);
        ((this.name = r), (this.field = () => e));
      }
    };
  });
