//register
curl -X POST <http://localhost:3000/api/auth/register> \
-H "Content-Type: application/json" \
-d '{
"name": "Juan",
"email": "<juan@email.com>",
"password": "123456"
}'

//login
curl -X POST <http://localhost:3000/api/auth/login> \
-H "Content-Type: application/json" \
-d '{
"email": "<juan@example.com>",
"password": "123456"
}'
