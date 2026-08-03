// Module: v1e (lines 118847-118916)
  var v1e = S(() => {
    bl();
    pt();
    Eo();
    Frt();
    Ge();
    ja();
    Iy();
    i_();
    Gqn();
    Gqn();
    ((a4i = x(nde(), 1)),
      (dHt = qr(async function () {
        let [e, { ListInferenceProfilesCommand: t }] = await Promise.all([
            ubc(),
            Promise.resolve().then(() => (Qjr(), Jjr)),
          ]),
          r = [],
          n;
        try {
          do {
            let o = new t({
                ...(n && { nextToken: n }),
                typeEquals: "SYSTEM_DEFINED",
              }),
              i = await e.send(o, { abortSignal: AbortSignal.timeout(8000) });
            if (i.inferenceProfileSummaries)
              r.push(...i.inferenceProfileSummaries);
            n = i.nextToken;
          } while (n);
          return r
            .filter((o) => o.inferenceProfileId?.includes("anthropic"))
            .map((o) => o.inferenceProfileId)
            .filter(Boolean);
        } catch (o) {
          throw (
            w(
              `Bedrock ListInferenceProfiles failed: ${o instanceof Error ? o.message : String(o)}`,
              { level: "error" },
            ),
            o
          );
        }
      })));
    CVe = qr(async function (e) {
      let t = Gu(e),
        r = null;
      try {
        let [n, { GetInferenceProfileCommand: o }] = await Promise.all([
            ubc(),
            Promise.resolve().then(() => (Qjr(), Jjr)),
          ]),
          s = (
            await n.send(new o({ inferenceProfileIdentifier: t }), {
              abortSignal: AbortSignal.timeout(8000),
            })
          ).models?.[0]?.modelArn;
        if (s) {
          let a = s.lastIndexOf("/");
          r = a >= 0 ? s.substring(a + 1) : s;
        }
      } catch (n) {
        w(
          `Failed to resolve Bedrock inference profile backing model for ${t}: ${n instanceof Error ? n.message : String(n)}`,
          { level: "error" },
        );
      }
      return (yvi(t, r), r);
    }, Gu);
  });
