# WAD or Not?
Serving up 20-year-old textures since 2017

## Installation
This project requires Node to install/build and PHP7 with MySQL running on the server

1. Download this repo and run `npm install`
2. Place any number of PNGs in the `textures` folder
3. Rename `config_example.php` to `config.php` and edit MySQL connection info as necessary
4. Run `npm build` to generate JS file
5. Upload everything except `node_modules` to your web host