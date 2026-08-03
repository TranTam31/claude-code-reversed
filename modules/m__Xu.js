// Module: _Xu (lines 357236-357253)
  var _Xu = S(() => {
    Vn();
    e9e();
    I0y = Se(() =>
      v.object({
        skills: v.array(
          v
            .looseObject({
              frontmatter: v.record(v.string(), v.unknown()).nullish(),
              uri: v.string().nullish(),
              digest: v.string().nullish(),
            })
            .catch({}),
        ),
        nextCursor: v.string().nullish(),
      }),
    );
  });
