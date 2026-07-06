registerTool({
  name: "site_facts",
  description: "Return static facts about this site (owner, topics, skill count) from /facts.json.",
  inputSchema: {
    type: "object",
    properties: {},
    required: []
  },
  handler: async function (args) {
    let r;
    try {
      r = await host.fetchOrigin("/facts.json");
    } catch (e) {
      throw new Error("site_facts: fetch of /facts.json failed: " + String((e && e.message) || e));
    }
    if (!r || typeof r.status !== "number" || r.status !== 200) {
      throw new Error("site_facts: /facts.json returned HTTP " + (r && r.status));
    }
    if (typeof r.body !== "string") {
      throw new Error("site_facts: /facts.json returned no body");
    }
    let data;
    try {
      data = JSON.parse(r.body);
    } catch (e) {
      throw new Error("site_facts: /facts.json body is not valid JSON: " + String((e && e.message) || e));
    }
    return data;
  }
});