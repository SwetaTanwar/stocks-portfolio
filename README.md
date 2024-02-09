# Portfolio Component:

This app contains a single screen with list of holdings (stocks invested). There is an an expanded & collapsed state UI for showing the summary of your portfolio

Endpoint used to fetch data: https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8 

This document contains the following parts:
- setup
- business logic
- improvements

## Setup
Setting up requires the following steps
- install yarn
- then run `yarn` at the root of this project: 
- then run `yarn start`
- run `npx expo start` and choose the platform you want to run on

## Business Logic
Following are the main calculations being used
- Symbol => Use from JSON response
- Quantity => Use from JSON response
- LTP => Use from JSON response
- P&L = Current value (Individual item) (minus) Investment value (Individualitem)
- Current value (Individual item) = LTP * Quantity
- Investment value (Individual item) = Avg. Price * Quantity
- Current value total = sum of all the Current values
- Total investment = sum of all the Investment values
- Total PNL = Current value total - Total Investment
- Today’s PNL = sum of ((Close - LTP ) * quantity) of all the holdings

# Intuition: 
Certain cases that I thoughf of and did:
- Although the list content was very small, map could have been used, but I used Flatlist since it supports Virtualisation by default which is good if the count increases
- Used SafeAreaView to render the content within the safe area boundaries of the device.
- Followed modularisation by keeping separate components
- Added animation on the collapsible component for the smooth transition
- I have used few of the hooks to optmise the code for better performance

# Further improvements
- Can add sorting and filters for more user friendly view of the data
- Can have state management solutions like redux, zustand for multiple screens app and large data
- Can be covered with unit tests and e2e test
- Bare react native app can be used based on the scale of the app instead of expo
- Can have exponential backoff for api's
- Can have offline support 
- Can be covered with accessibility
- Can have dark/light mode support
- Triangle compoenent can be cusomised more by adding more relevant props to cater to multiple use cases like color, etc
