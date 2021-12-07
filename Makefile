up:
	docker-compose down
	docker-compose build --no-cache
	docker-compose up --detach
	docker rmi $$(docker images --filter dangling=true -q 2>/dev/null) 2>/dev/null

down:
	docker-compose down