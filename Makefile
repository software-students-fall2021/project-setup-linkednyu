up:
	docker-compose down
	docker system prune -a
	docker-compose up --detach

down:
	docker-compose down