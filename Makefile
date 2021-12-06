up:
	docker-compose down
	docker rmi -f $$(docker images -aq)
	docker-compose up --detach

down:
	docker-compose down