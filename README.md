# Membership Kiosk

![Membership kiosk](https://github.com/southlondonmakerspace/membership-kiosk/raw/master/doc/prototype1.gif)

This is a kiosk application for the [South London Makerspace Membership System](https://github.com/southlondonmakerspace/membership-system).  It is designed to be run on a physical machine inside the makerspace, allowing common tasks like enrolling new tags.  

This system was created for [South London Makerspace](http://southlondonmakerspace.org).

## Hardware Requirements

Currently, we require an [ACR122U NFC reader](https://www.amazon.co.uk/Yosoo-ACR122U-Contactless-Reader-5xMifare/dp/B00GYPIZG6/ref=sr_1_1?ie=UTF8&qid=1502785757&sr=8-1&keywords=acr122u), or other PCSC compatible reader.  

## Setup

Copy ```config/example-confg.json``` to ```config/config.json``` and edit it to meet your needs.  

To start the service, first run the ```watch``` script to build the stylesheets

    npm run watch

Then run the application itself

    node app

The UI will be available at http://localhost:3000/


## Creating Apps
The system is built around modular apps. If you're looking to add functionality to the site the best way to do this would by adding an app to the site rather than modifying it's base. This means you're unlikely to mess anything up.

As an example, let's add a login page.

Stub out your app structure within `app/`, this will include:

	apps/
		login/
			views/
				app.js
				config.js


Check out these files to get an idea of how each of these should be structure.

## Sounds
Sounds are from [RCP dev_tones](http://rcptones.com/dev_tones/)
