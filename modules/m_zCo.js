// Module: zCo (lines 433976-434115)
  var zCo = S(() => {
    mKe();
    Wfe = {
      createDocument() {
        return { nodeName: "#document", mode: G7.NO_QUIRKS, childNodes: [] };
      },
      createDocumentFragment() {
        return { nodeName: "#document-fragment", childNodes: [] };
      },
      createElement(e, t, r) {
        return {
          nodeName: e,
          tagName: e,
          attrs: r,
          namespaceURI: t,
          childNodes: [],
          parentNode: null,
        };
      },
      createCommentNode(e) {
        return { nodeName: "#comment", data: e, parentNode: null };
      },
      createTextNode(e) {
        return { nodeName: "#text", value: e, parentNode: null };
      },
      appendChild(e, t) {
        (e.childNodes.push(t), (t.parentNode = e));
      },
      insertBefore(e, t, r) {
        let n = e.childNodes.indexOf(r);
        (e.childNodes.splice(n, 0, t), (t.parentNode = e));
      },
      setTemplateContent(e, t) {
        e.content = t;
      },
      getTemplateContent(e) {
        return e.content;
      },
      setDocumentType(e, t, r, n) {
        let o = e.childNodes.find((i) => i.nodeName === "#documentType");
        if (o) ((o.name = t), (o.publicId = r), (o.systemId = n));
        else {
          let i = {
            nodeName: "#documentType",
            name: t,
            publicId: r,
            systemId: n,
            parentNode: null,
          };
          Wfe.appendChild(e, i);
        }
      },
      setDocumentMode(e, t) {
        e.mode = t;
      },
      getDocumentMode(e) {
        return e.mode;
      },
      detachNode(e) {
        if (e.parentNode) {
          let t = e.parentNode.childNodes.indexOf(e);
          (e.parentNode.childNodes.splice(t, 1), (e.parentNode = null));
        }
      },
      insertText(e, t) {
        if (e.childNodes.length > 0) {
          let r = e.childNodes[e.childNodes.length - 1];
          if (Wfe.isTextNode(r)) {
            r.value += t;
            return;
          }
        }
        Wfe.appendChild(e, Wfe.createTextNode(t));
      },
      insertTextBefore(e, t, r) {
        let n = e.childNodes[e.childNodes.indexOf(r) - 1];
        if (n && Wfe.isTextNode(n)) n.value += t;
        else Wfe.insertBefore(e, Wfe.createTextNode(t), r);
      },
      adoptAttributes(e, t) {
        let r = new Set(e.attrs.map((n) => n.name));
        for (let n = 0; n < t.length; n++)
          if (!r.has(t[n].name)) e.attrs.push(t[n]);
      },
      getFirstChild(e) {
        return e.childNodes[0];
      },
      getChildNodes(e) {
        return e.childNodes;
      },
      getParentNode(e) {
        return e.parentNode;
      },
      getAttrList(e) {
        return e.attrs;
      },
      getTagName(e) {
        return e.tagName;
      },
      getNamespaceURI(e) {
        return e.namespaceURI;
      },
      getTextNodeContent(e) {
        return e.value;
      },
      getCommentNodeContent(e) {
        return e.data;
      },
      getDocumentTypeNodeName(e) {
        return e.name;
      },
      getDocumentTypeNodePublicId(e) {
        return e.publicId;
      },
      getDocumentTypeNodeSystemId(e) {
        return e.systemId;
      },
      isTextNode(e) {
        return e.nodeName === "#text";
      },
      isCommentNode(e) {
        return e.nodeName === "#comment";
      },
      isDocumentTypeNode(e) {
        return e.nodeName === "#documentType";
      },
      isElementNode(e) {
        return Object.prototype.hasOwnProperty.call(e, "tagName");
      },
      setNodeSourceCodeLocation(e, t) {
        e.sourceCodeLocation = t;
      },
      getNodeSourceCodeLocation(e) {
        return e.sourceCodeLocation;
      },
      updateNodeSourceCodeLocation(e, t) {
        e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
      },
    };
  });
