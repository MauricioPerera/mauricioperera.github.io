# auth.md — mauricioperera.github.io

> Agent-readable authentication manifest, per the
> [auth.md](https://github.com/workos/auth.md) protocol shape. Discovered
> from this origin's [`llms.txt`](/llms.txt) `## Skills` section — an example
> of composing capability discovery (`## Skills` /
> [llms-txt-skills](https://mauricioperera.github.io/llms-txt-skills/)) with
> credential acquisition (`auth.md`).

## Authentication: none required

This origin serves **public, read-only knowledge and tools**:

- Every skill listed in [`/llms.txt`](/llms.txt) is executable without
  credentials. Tools are hash-pinned (`tool_sha256`) and run sandboxed on the
  consumer side; none of them requires or accepts an identity.
- There is no registration endpoint, no token endpoint, and no
  `.well-known/oauth-authorization-server` on this origin. If you are an
  agent: **proceed without authenticating.** Requests carry no session; rate
  limiting is whatever GitHub Pages applies.

## What agents should do

1. Read [`/llms.txt`](/llms.txt) and verify each skill against its declared
   `tool_sha256` before executing (any conforming runtime, e.g.
   [`@rckflr/mcpwasm`](https://www.npmjs.com/package/@rckflr/mcpwasm), does
   this for you).
2. Skip credential acquisition — this manifest is the whole auth story here.

## For services that DO need auth

If you are publishing skills for a service with real registration, serve
your own `auth.md` per the [auth.md protocol](https://github.com/workos/auth.md)
(agentic registration: identity assertions / claim ceremony) and list it in
your `llms.txt` `## Skills` section as a prose skill, like this origin does.
The two specs answer different questions and compose cleanly:

- `## Skills` → *what can an agent do here, and how?*
- `auth.md` → *how does an agent get credentials to do it?*
