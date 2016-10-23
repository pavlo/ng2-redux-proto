# ng2-redux-proto

An Angular2 app that demonstrates the use of Redux with Angular 2. It has two actions:

1. `CurrentUser#setTimezone` - a simple synchronous action
2. `Articles#fetch` - an async action that triggers three actions sequentially: `fetching` -> `fetched` or `failure`

It also features the way to display/update the information and the progress in a component. 
