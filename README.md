# fapi-tools

A tool for loading Farmer Against Potatoes Idle (FAPI) data from your save file and showing a list of information about your current progress.

Will eventually also use that data to make suggestions about what to do next.

Find it here: https://fapi-tools.vercel.app/

## Features

- [ ] Meta
  - [x] Save data
    - [x] Will persist in localstorage between refreshes
    - [x] Data can be cleared with click of a button
    - [x] Data can be overwritten with a reupload
    - [ ] Displays the timestamp that save file was uploaded
  - [ ] User sharing
    - [ ] Custom input fields for username, discord name, etc
    - [ ] Generate a URL to share current progression for view only purposes
- [ ] FAPI Mechanics
  - [ ] Ascension
    - [x] Displays current Ascension level
  - [ ] Infinity Corner
    - [x] Displays all current infinity corner levels
    - [x] Mouse hover on upgrade will show ascension level required for that upgrade
    - [x] Hide upgrade name box, to allow for easy copy paste into <a href="https://docs.google.com/spreadsheets/d/1bY5Ss_6uhoxxxndKr2oSlhtWHM5k4togQkswuBqKrTU/edit#gid=898724723">
          Hiroko's FAPI_Info spreadsheet
          </a>
    - [ ] Show suggestions for next upgrade
    - [ ] Display current reincarnation points that can be spent
    - [ ] Queue upgrades to see what next upgrade will be
  - [ ] Pets
    - [ ] Display unlocked pets
    - [ ] Display data about pets
      - [ ] Current level
      - [ ] Current rank
      - [ ] Current bonuses when on team
      - [ ] Current bonuses when on expedition
    - [ ] Display current teams
- [ ] More features
  - [ ] Have any ideas? Make suggestions in the Discord thread or creating a Github issue.

## Change log

See [CHANGELOG.md](CHANGELOG.md) for change log specifics.

## Development

This was developed on node v19.8.0.

Any newer versions should work, but there is no guarantee that previous versions will and a warning on `npm install` will occur if you're below version `18.x`.

### Setup

```
npm i
```

### Running local dev server

```
npm run dev
```

### Contributing

Please create a fork, create a branch on your fork, and submit a Pull Request containing a description of your changes.

An issue is not required to submit a pull request, but if you want feedback before you start implementation, I will review any issues submitted and provide feedback.

Deploys will fail if linting fails, so ensure you lint your code before pushing to avoid churn.
