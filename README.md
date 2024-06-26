# Employee Polls Project

## How to Build and now to Run
```
cd polling
npm i
npm run start
```
## Running Tests
```angular2html
cd polling
npm run test 
```
# Current Progress
I believe it to be complete.

A [x] means I think it is working

A [ ] means it isn't working. (none of these)

# Work Status
## SetUp
1) install and work, and instruction in README.md [x]
## Login Flow
1) has login screen [x]
2) works under any of the users[x]
3) Logout and login available[x]
4) Goes to home page after login[x]
5) requires re-login after explicit url entry[x]
## Functionality: Desired functionality
1) answered and unanswered shown[x]
2) can display answered and unanswered data[x]
3) unanswered questions shown by default [X] Both shown
4) name of logged in shown [x]
5) can nav to leaderboard [x]
6) can nave to new poll creation [x]
## Functionality: polling questions listed correctly
1) in correct catagory (answered vs unanswered) [x]
2) polling question linked to details [x]
3) arranged most recent at the top [X] 
## Functionality: Details correctly shown
1) questions at questions/:question_id? [x]
2) responding to poll from home page: 'Would you rather': [X]
3) answered polls: text of option, number voted for option, percent of option [X]
4) option selected by the user shown [X]
5) need to be logged in to see poll [x] requires login first.
6) 404 shown if poll url does not exist [X]
## Functionality: voting mechanism
1) after voting, voting details are shown: [X]
2) response shown in poll details page: [X] 
3) home page shows 'done' after voting: [X]
4) leaderboard shows new changes [X]
## Functionality: Add
1) form available at add [x]
2) text shows 'would you rather' [x]
3) New poll created and return to home page [x]
4) new poll appears in the correct category [x]
## Functionality: Leaderboard
1) leaderboard at /leaderboard [x]
2) leaderboard details name, avatar, # asked # answered [x]
3) ordered in descending order [x]
## Functionality: Navigable
1) app has nav bar on all pages [x]
2) nav to new poll, leaderboard, home [x]
## Functionality: Interact with backend correctly
1) data initially displayed populated from backend [X]
2) answer and new polls recorded in backend correctly? [X]
## Functionality: Run w/o errors
1) no warnings, formatted correctly [X] 
## Architecture
1) Store as single source of truth? [x] using redux store, actions, reducers, connectors
2) State managed by redux? [x] yes
3) app state update correctly? [x] yes, using thunk, combined reducers, dispatched actions
4) Architecture make sense [x] 
## Unit Testing
1) using jest for unit tests? see users.test.js, setupTests.js, api.test.js  [x] 
2) can all unit tests be run via `npm run test` [X] 
3) Do all the tests pass? [X] 
4) Are there 10 unit tests? [X] 
5) Are there 2 unit tests written to test _saveQuestion() on _DATA.js (see api.test.js) [x] 
6) Are there 2 unit tests written to test _saveQuestionAnswer() (see api.test.js) [x]
7) Is there a snapshot test present? [X]  See `polling/src/PollHeadline.js`
8) Is there at least one DOM test which uses fireEvent function? [X] See `polling/src/users.test.js`
