# VARIABLE=VALUE sh curl-scripts/game/show.sh

curl "https://tic-tac-toe-wdi-multiplayer.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
