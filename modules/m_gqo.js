// Module: gqo (lines 750059-750074)
  var gqo = S(() => {
    Xjp = x(ot(), 1);
    dXe = class dXe extends Xjp.Component {
      constructor(e) {
        super(e);
        this.state = { hasError: !1 };
      }
      static getDerivedStateFromError() {
        return { hasError: !0 };
      }
      render() {
        if (this.state.hasError) return null;
        return this.props.children;
      }
    };
  });
