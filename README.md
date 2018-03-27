# Laravel STARTUP

### Copy docker folder and docker-compose.yml file in new directory,

### Open docker-compose.yml file and change dev.site-name.loc and pma.site-name.loc to something that you want and save file,

Run next command:

    docker-compose build && docker-compose up -d

Open terminal and type: 
	
    docker ps -a
	
### Find your newly opened container and find ngnix and pma containers.
        
When you find them, copy that text and open docker-compose.yml file and find:
	
    
    - nginx:
        labels:
            - 'traefik.backend=laravel_nginx_1' 
    
				
delete laravel_pma_1 and copy text from docker ps -a -> foldername_nginx_1
				
    
    - pma:
        labels:
            - 'traefik.backend=laravel_pma_1'
    

   same here like with nginx just for pma -> foldername_pma_1


### When you finish that, just save docker-compose.yml and type:

    docker-compose restart
or 
    
    docker-compose up -d 
to restart nginx and pma containers


### Enter your php container with: 

    docker-compose exec php bash

and type in the folowing:


    composer global require "laravel/installer" --no-interaction -vvv

Wait a few seconds to install laravel composer.


### Now copy this to install laravel in your src/api directory:

	composer create-project --prefer-dist laravel/laravel api --no-interaction -vvv

You will have to wait a few minutes, depending on your system configuration, while composer is installing necessary files


### When composer finishes instaling dependecies, exit php container ( or pen new terminal window ), and type:
 
    sudo chown $USER:$GROUP -R api/ 
    
to take permissions on root directory


### To change permissions on bootstrap/cache and storage folders, type the following:

	sudo chmod -R 0777 storage/ && sudo chmod -R 0777 bootstrap/cache/


### In your browser open pma.site-name.loc and create new database


### For connecting database with your Laravel project, open .env file and change the following:

	DB_CONNECTION=mysql
	DB_HOST=127.0.0.1
	DB_PORT=3306
	DB_DATABASE=YOUR_DATABASE_NAME ( from step 8. )
	DB_USERNAME=DATABASE_USERNAME ( root - defined in docker-compose.yml )
	DB_PASSWORD=DATABASE_PASSWORD ( root - also defined in docker-compose.yml )


### When you've changed the .env file, type in your terminal window:

	docker-compose down && docker-compose up -d


### Final step is to enter php container ( docker-compose up -d ) and type in the following

	php artisan -V
	php artisan migrate


### Open your favourite browser and type in dev.site-name.loc or if you have it allready opened, just press CTRL + F5.


######  Enjoy. :)
