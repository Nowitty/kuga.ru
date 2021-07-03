#!make
include .env
export


start:
	docker-compose up -d

stop:
	docker-compose stop

db:
	docker exec -it db mariadb -u root -p$(DB_PASSWORD) $(DB_DATABASE)

bash:
	docker exec -it app bash
