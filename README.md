# send-question
Prototype to send queries to elasticsearch (es)

## Config

Go and get elasticsearch.
Edit your `elasticsearch.yml` like below and run `bin/elasticsearch`: <br>
`http.cors.enabled: true` <br>
`http.cors.allow-credentials: true` <br>
`http.cors.allow-origin: "*"` <br>
`http.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE` <br>
`http.cors.allow-headers: X-IC-Request, X-HTTP-Method-Override, X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept`

## 
Run dev server (maybe [live-server](https://github.com/tapio/live-server)) and browse `index.html`

