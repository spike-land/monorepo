
CID=$(docker-compose exec ipfs ipfs add -r /export/packages -Q)
firefox https://ipfs.io/ipfs/$CID &
echo $CID
curl -X PUT "https://api.cloudflare.com/client/v4/zones/ec8e903035c7b0fcd3e95f1e483ab68c/dns_records/7545e99c94fd6ff43cc0591bab13cbe1" \
     -H "Authorization: Bearer $BBTOKEN" \
     -H "Content-Type: application/json" \
     --data '{"type":"TXT","name":"_dnslink.x","content":"dnslink=/ipfs/$CID","ttl":1,"proxied":false}' 



