#!/bin/sh

curl http://localhost:8080/magnoliaPublic/ci-testpage.html
curl http://localhost:8080/magnoliaPublic/ci-testpage.html | grep "furbie"
