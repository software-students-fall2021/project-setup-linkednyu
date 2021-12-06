up:
	docker-compose down
	docker rmi $(docker images -aq)
	docker-compose up --detach

down:
	docker-compose down