/*
Quantumult X 
脚本:不背单词 内购全破解  By：Seven3in
[rewrite_local]
^https:\/\/sapi\.beingfine\.cn\/v3\/report\/launch url script-response-body https://raw.githubusercontent.com/Seven3in/QuantumultX/master/JS/bbdc.js
[MITM]
hostname = sapi.beingfine.cn
*/

body = $response.body.replace(/expire_date\\":\d+/g, "expire_date\\\":4102429976000").replace(/_type\\":\d/g,"_type\\\":2").replace(/granted\\":\d/g,"granted\\\":1")
$done({body});