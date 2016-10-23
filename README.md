# ng2-redux-proto

An Angular2 app that demonstrates the use of Redux with Angular 2. It has two actions:

1. `CurrentUser#setTimezone` - a simple synchronous action
2. `Articles#fetch` - an async action that triggers three actions like that: `FETCHING_ARTICLES` then either `FETCHED_ARTICLES` or `FAILED_FETCH_ARTICLES` depending on the netwokring call outcome 

