#!/bin/sh

curl http://localhost:8080/magnoliaAuthor/.rest/commands/v2/website/activate -H "Content-Type: application/json" -X POST --user superuser:superuser   --data '{"repository": "website","path": "/ci-testpage","recursive": "false"}'
curl http://localhost:8080/magnoliaPublic/.rest/commands/v2/website/activate -H "Content-Type: application/json" -X POST --user superuser:superuser   --data '{"repository": "website","path": "/ci-testpage","recursive": "false"}'
