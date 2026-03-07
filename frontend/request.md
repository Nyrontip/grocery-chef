//login
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{
"name": "Juan",
"email": "juan@email.com",
"password": "123456"
}'
