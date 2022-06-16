Plain NodeJS REST API example with no authentication & authorization.

## GET `/api/info`

```
curl http://localhost:3000/api/info
```

response:

```
{"version":1,"data":"API call succeeded!"}
```

## POST `/api/info`

```
curl -X POST http://localhost:3000/api/info -H 'Content-type: application/json' -d '{"data":{"username": "John Doe"}}'
```

response:

```
{"version":1,"data":{"username":"John Doe"}}
```