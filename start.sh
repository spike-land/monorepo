
CID=$(ipfs add -r ./packages/code -Q) 
URL="http://[::1]:8080/ipfs/$CID"

#  curl -X GET "https://api.cloudflare.com/client/v4/zones/ec8e903035c7b0fcd3e95f1e483ab68c/dns_records/?type=TXT" \
#      -H "Authorization: Bearer $BBTOKEN" \
#      -H "Content-Type: application/json" 
#      --data  $(CID=$BCID node -pe 'JSON.stringify({"type":"TXT","name":"_dnslink","content": "dnslink=/ipfs/"+process.env["CID"],"ttl":1,"proxied":false})') &)

# rm -rf docs/code/$(cat code.CID)
# mkdir -p docs/code
# cp -ar packages/code docs/code/$CID
echo "export const cid = '$CID';" > cloudflare/cf-zed-vision/src/cid.ts
echo "export const cid = '$CID';" > cloudflare/cf-code-zed-vision/src/cid.ts
# echo  $(CID=$CID node -pe 'JSON.stringify({"cid": process.env["CID"]})') > cloudflare/cf-code-zed-vision/src/ipfs.json



echo $CID > code.CID
echo $URL

(firefox  $URL)&

# rm -rf cids/code
# mkdir -p cids
# ipfs add -r packages/code > files.txt

# | awk '{print "echo " $2 " > "$3 ";"}' >cids/commands.sh

ipfs add -r packages/code | awk '{print "\"" substr($3,6) "\": \"" $2 "\","}' | awk 'BEGIN{print "export const files = {"}{print $0}END{print " \"foo\":\"bar\" }"}' >  cloudflare/cf-code-zed-vision/src/files.ts
# cp -r packages/code cids/code
# cd cids && sh comma/nds.sh

#################################cloudflare/cf-code-zed-vision
echo #################################### 
 curl -X PUT "https://api.cloudflare.com/client/v4/zones/ec8e903035c7b0fcd3e95f1e483ab68c/dns_records/7545e99c94fd6ff43cc0591bab13cbe1" \
     -H "Authorization: Bearer $BBTOKEN" \
     -H "Content-Type: application/json" \
     --data  $(CID=$CID node -pe 'JSON.stringify({"type":"TXT","name":"_dnslink.ipfs","content": "dnslink=/ipfs/"+process.env["CID"],"ttl":1,"proxied":false})')

# echo "----  https://zed.vision -------" 
# echo "-------------------------------------------------------------" 
# echo "-------------------------------------------------------------" 


# curl -X PUT "https://api.cloudflare.com/client/v4/zones/ec8e903035c7b0fcd3e95f1e483ab68c/dns_records/82dce0cb0b0d63ed28bfc429e829c4e9" \
#      -H "Authorization: Bearer $BBTOKEN" \
#      -H "Content-Type: application/json" \
#      --data  $(CID=$CID node -pe 'JSON.stringify({"type":"TXT","name":"_dnslink.code","content": "dnslink=/ipfs/"+process.env["CID"],"ttl":1,"proxied":false})')


# echo "-------------------------------------------------------------" 
