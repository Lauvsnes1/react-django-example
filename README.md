## Usage

You need to build React first, so Django can serve built files.

### React

First terminal tab:

```shell
cd assets
yarn parcel watch src/index.tsx
```

### Django

Second terminal tab:

```shell
pipenv run python manage.py runserver
```

For å oppdatere static files:

```shell
pipenv shell
```

### Setup
	2. I PacePal mappen installer:
		pip install django

	3. Installer nvm 14.15
		cd assests
		nvm install 14.15
		npm install -g typescript@4.4.3
		npm install -g yarn
		yarn global add parcel-bundler
		yarn add react react-dom

	4. Legg til typscript
        cd assets
		yarn add typescript@4.3.5

	5. Velg fil å se på 
		cd assets 
		yarn parcel watch src/index.tsx
        
	6. Create and Activate vertiual enviorment
		Pipenv shell
		pipenv run python manage.py runserver
		
