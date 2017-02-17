# send-question
Prototype to send queries to elasticsearch (es)

## Config

Go and get elasticsearch.
Add this to your `elasticsearch.yml` and run `bin/elasticsearch`:
<code>
http.cors.enabled: true
http.cors.allow-credentials: true
http.cors.allow-origin: "*"
http.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE
http.cors.allow-headers: X-IC-Request, X-HTTP-Method-Override, X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept	
</code>

## 
Run dev server (maybe [live-server](https://github.com/tapio/live-server)) and browse `index.html`

