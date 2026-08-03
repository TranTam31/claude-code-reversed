// Module: FN (lines 17909-18007)
  var FN = S(() => {
    s5e();
    $N();
    n0i();
    hBn();
    $tt();
    o0i = class o0i {
      constructor(e, t, r, n) {
        (gBn.set(this, void 0),
          Ec(this, gBn, e, "f"),
          (this.options = n),
          (this.response = t),
          (this.body = r));
      }
      hasNextPage() {
        if (!this.getPaginatedItems().length) return !1;
        return this.nextPageRequestOptions() != null;
      }
      async getNextPage() {
        let e = this.nextPageRequestOptions();
        if (!e)
          throw new js(
            "No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.",
          );
        return await jo(this, gBn, "f").requestAPIList(this.constructor, e);
      }
      async *iterPages() {
        let e = this;
        yield e;
        while (e.hasNextPage()) ((e = await e.getNextPage()), yield e);
      }
      async *[((gBn = new WeakMap()), Symbol.asyncIterator)]() {
        for await (let e of this.iterPages())
          for (let t of e.getPaginatedItems()) yield t;
      }
    };
    yBn = class yBn extends P0t {
      constructor(e, t, r) {
        super(
          e,
          t,
          async (n, o) => new r(n, o.response, await mBn(n, o), o.options),
        );
      }
      async *[Symbol.asyncIterator]() {
        let e = await this;
        for await (let t of e) yield t;
      }
    };
    B0e = class B0e extends o0i {
      constructor(e, t, r, n) {
        super(e, t, r, n);
        ((this.data = r.data || []),
          (this.has_more = r.has_more || !1),
          (this.first_id = r.first_id || null),
          (this.last_id = r.last_id || null));
      }
      getPaginatedItems() {
        return this.data ?? [];
      }
      hasNextPage() {
        if (this.has_more === !1) return !1;
        return super.hasNextPage();
      }
      nextPageRequestOptions() {
        if (this.options.query?.before_id) {
          let t = this.first_id;
          if (!t) return null;
          return {
            ...this.options,
            query: { ...eBn(this.options.query), before_id: t },
          };
        }
        let e = this.last_id;
        if (!e) return null;
        return {
          ...this.options,
          query: { ...eBn(this.options.query), after_id: e },
        };
      }
    };
    DC = class DC extends o0i {
      constructor(e, t, r, n) {
        super(e, t, r, n);
        ((this.data = r.data || []), (this.next_page = r.next_page || null));
      }
      getPaginatedItems() {
        return this.data ?? [];
      }
      nextPageRequestOptions() {
        let e = this.next_page;
        if (!e) return null;
        return {
          ...this.options,
          query: { ...eBn(this.options.query), page: e },
        };
      }
    };
  });
