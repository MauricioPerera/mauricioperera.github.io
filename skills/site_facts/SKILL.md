# site_facts

`site_facts` is an executable static skill published by this site. It takes no
arguments and returns a small JSON object describing the site: its name,
owner, the topics it covers, and how many executable skills it publishes.

## What it does

The async handler calls `host.fetchOrigin("/facts.json")` (same-origin only),
parses the JSON body, and returns the resulting object. On any fetch failure,
non-200 status, missing body, or invalid JSON it throws an error with a clear
message.

## Input

None. `inputSchema` is `{ "type": "object", "properties": {}, "required": [] }`.

## Output

A JSON object, for example:

```json
{
  "site": "mauricioperera.github.io",
  "owner": "Mauricio Perera",
  "topics": ["asciidoc", "documentation", "github-pages", "llms-txt", "mcp"],
  "llmstxt_skills": 1
}
```

## Errors

Throws on fetch failure, HTTP non-200, empty body, or invalid JSON, with a
descriptive message prefixed by `site_facts:`.