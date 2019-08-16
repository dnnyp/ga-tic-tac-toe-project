# VARIABLE=VALUE sh curl-scripts/game/index.sh

curl "https://tic-tac-toe-wdi-multiplayer.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
