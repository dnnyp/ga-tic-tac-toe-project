# VARIABLE=VALUE sh curl-scripts/game/create.sh

curl "https://tic-tac-toe-wdi-multiplayer.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{}'

echo
