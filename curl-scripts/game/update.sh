# VARIABLE=VALUE sh curl-scripts/game/update.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": 2,
        "value": "x"
      },
      "over": false
    }
  }'

echo
