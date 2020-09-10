# Weather app on console

App node to retrieve the temperature of the specified city in different formats

## Pre requirements
`npm install --save`

Assign your api key from openweathermap.org in `service/openweather.js`

## Commands
Use in console `node app -d 'City' ` to execute.

### Arguments
  -d, --city     City for weather prediction [required]
  -g, --getBy    Weather data format to obtain, options: current | hourly | daily

## Example
`node app -d Malaga -g daily`

## Output

```
[
'The temperature in Malaga, 11/8/2020 is 24.85º',
'The temperature in Malaga, 12/8/2020 is 24.32º',
'The temperature in Malaga, 13/8/2020 is 25.77º',
'The temperature in Malaga, 14/8/2020 is 25.57º',
'The temperature in Malaga, 15/8/2020 is 24.99º',
'The temperature in Malaga, 16/8/2020 is 23.84º',
'The temperature in Malaga, 17/8/2020 is 24.05º',
'The temperature in Malaga, 18/8/2020 is 23.9º' 
]
```